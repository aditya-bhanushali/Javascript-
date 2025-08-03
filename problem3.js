//largest prime factor of 600851475143
function isPrime(num){
  for(let i=2;i<num;i++){
    if(num%i===0){
      return false;
    }
  }
  return true;

}