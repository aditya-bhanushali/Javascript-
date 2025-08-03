let num=100;
let fact=1n;
for(i=1n;i<=num;i++){
    fact*=i;
}
console.log(`the factorial of 100 is ${fact}`);
let sum=0n;
while(fact>0){
    let d=fact%10n;
    sum+=d;
    fact=fact/10n;
}
console.log(`${sum}`);