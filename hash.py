# << and >> are bitshift operators
# 5-bit shift is used because experiments using 230,000 English words found it
# results in the lowest number of collisions
from random import randrange
from collections import MutableMapping


class MapBase(MutableMapping):
    """Our own abstract base class that includes a nonpublic _Item class."""

    # ------------------------------- nested Item class -------------------------------
    class _Item:
        """Lightweight composite to store key-value pairs as map items."""
        __slots__ = '_key', '_value'

        def __init__(self, k, v):
            self._key = k
            self._value = v

        def __eq__(self, other):
            return self._key == other._key

        def __ne__(self, other):
            return not (self == other)

        def __lt__(self, other):
            return self._key < other._key


def hash_code(s):
    """cyclic-shift hash computation for a character string"""

    mask = (1 << 32)-1                   # limit to 32-bit integers
    h = 0
    for char in s:
        h = (h << 5 & mask) | (h >> 27)  # 5-bit cyclic shift of running sum
        h += ord(char)                   # add in value of next character
    return h


print(hash_code("Hello World"))


class UnsortedTableMap(MapBase):
    """Map implementation using an unordered list."""

    def __init__(self):
        """Create an empty map."""
        self._table = []

    def __getitem__(self, k):
        for item in self._table:
            if k == item._key:
                return item._value
        raise KeyError('Key Error: ' + repr(k))

    def __setitem__(self, k, v):
        for item in self._table:
            if k == item._key:
                item._value = v
                return
        self._table.append(self._Item(k, v))

    def __delitem__(self, k):
        for j in range(len(self._table)):
            if k == self._table[j]._key:
                self._table.pop(j)
                return
        raise KeyError('Key Error ' + repr(k))

    def __len__(self):
        return len(self._table)

    def __iter__(self):
        for item in self._table:
            yield item._key


class HashMapBase(MapBase):
    """Abstract base class for map using hash-table with MAD compression."""

    def __init__(self, cap=11, p=109345121):
        """Create an empty hash-table map."""
        self._table = cap * [[None]]
        self._n = 0                     # number of entries in the map
        self._prime = p                 # prime for MAD compression
        self._scale = 1+randrange(p-1)  # scale from 1 to p-1 for MAD
        self._shift = randrange(p)      # shift from 0 to p-1 for MAD

    def _bucket_getitem(self, j, k):
        pass

    def _bucket_setitem(self, j, k, v):
        pass

    def _bucket_delitem(self, j, k):
        pass

    def _hash_function(self, k):
        return (hash(k)*self._scale+self._shift) % self._prime % len(self._table)

    def __len__(self):
        return self._n

    def __getitem__(self, k):
        j = self._hash_function(k)
        return self._bucket_getitem(j, k)   # may raise KeyError

    def __setitem__(self, k, v):
        j = self._hash_function(k)
        self._bucket_setitem(j, k, v)           # subroutine maintains self._n
        if self._n > len(self._table) // 2:     # keep load factor <= 0.5
            self._resize(2*len(self._table)-1)  # number 2^x -1 is often prime

    def __delitem__(self, k):
        j = self._hash_function(k)
        self._bucket_delitem(j, k)  # may raise KeyError
        self._n -= 1

    def _resize(self, c):         # resize bucket array to capacity c
        old = list(self.items())  # use iteration to record existing items
        self._table = c*[None]    # then reset table to desired capacity
        self._n = 0               # n recomputed during subsequent adds
        for (k, v) in old:
            self[k] = v           # reinsert old key-value pair


class ChainHashMap(HashMapBase):
    """Hash map implemented with separate chaining for collision resolution."""

    def _bucket_getitem(self, j, k):
        bucket = self._table[j]
        if bucket is None:
            raise KeyError('Key Error: ' + repr(k))  # no match found
        return bucket[k]

    def _bucket_setitem(self, j, k, v):
        if self._table[j] is None:
            self._table[j] = UnsortedTableMap()
        oldsize = len(self._table[j])
        self._table[j][k] = v
        if len(self._table[j]) > oldsize:
            self._n += 1

    def _bucket_delitem(self, j, k):
        bucket = self._table[j]
        if bucket is None:
            raise KeyError('Key Error: ' + repr(k))
        del bucket[k]

    def __iter__(self):
        for bucket in self._table:
            if bucket is not None:
                for key in bucket:
                    yield key


class ProbeHashMap(HashMapBase):
    """Hash map implemented with linear probing for collision resolution."""
    _AVAIL = object()

    def _is_available(self, j):
        """Return True if index j is available in table."""
        return self._table[j] is None or self._table[j] is ProbeHashMap._AVAIL

    def _find_slot(self, j, k):
        """Search for key k in bucket at index j.

        Return (success, index) tuple, described as follows:
        If match was found, success is True and index denotes its location.
        If no match was found, success is False and index denotes first available location.
        """
        firstAvail = None
        while True:
            if self._is_available(j):
                if firstAvail is None:
                    firstAvail = j
                if self._table[j] is None:
                    return (False, firstAvail)
            elif k == self._table[j]._key:
                return (True, j)
            j = (j + 1) % len(self._table)

        def _bucket_getitem(self, j, k):
            found, s = self._find_slot(j, k)
            if not found:
                raise KeyError('Key Error: ' + repr(k))
            return self._table[s]._value

        def _bucket_setitem(self, j, k, v):
            found, s = self._find_slot(j, k)
            if not found:
                self._table[s] = self._Item(k, v)
                self._n += 1
            else:
                self._table[s]._value = v

        def _bucket_delitem(self, j, k):
            found, s = self._find_slot(j, k)
            if not found:
                raise KeyError('Key Error: ' + repr(k))
            self._table[s] = ProbeHashMap._AVAIL

        def __iter__(self):
            for j in range(len(self._table)):
                if not self._is_available(j):
                    yield self._table[j]._key
