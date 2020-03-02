function factorial(n) {
  if (n <= 0) return undefined;
  
  if (n === 1) return n;
  return n * factorial(n - 1);
}