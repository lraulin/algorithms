for (var i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log(i);
  }, 1000 + i);
}

for (let i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log(i);
  }, 1000 + i);
}
