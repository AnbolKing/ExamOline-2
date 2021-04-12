function factroial(n) {
  function fact(num,res) {
    if(num < 2) {
      return res;
    }
    return fact(num-1, num*res);
  }
  return fact(n,1)
}

console.log(factroial(5));