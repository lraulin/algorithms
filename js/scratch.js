function TimeConvert(num) {
  const hours = Math.floor(num / 60);
  const min = num % 60;
  return '' + hours + ':' + min;
}
