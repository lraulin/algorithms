# Using the JavaScript language, have the function CountingMinutesI(str) take
# the str parameter being passed which will be two times (each properly
# formatted with a colon and am or pm) separated by a hyphen and return the
# total number of minutes between the two times. The time will be in a 12 hour
# clock format. For example: if str is 9:00am-10:00am then the output should
# be 60. If str is 1:00pm-11:00am the output should be 1320.


def counting_minutes(s):
    s = s.split("-")
    s[0] = s[0].split(":")
    s[1] = s[1].split(":")
    print(s)
    t1 = int(s[0][0]) * 60 + int(s[0][1][0:2])
    print(t1)


test = "9:00am-10:00am"
counting_minutes(test)
