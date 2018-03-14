export const numberFormat = function(num) {
  const n = +num || 0;
  switch (true) {
    case n < 10000:
      return n;
    case n >= 10000:
      return (n / 10000).toFixed(1) + '万';
    default:
      return n;
  }
}
