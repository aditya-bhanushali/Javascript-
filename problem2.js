//sum of even fiboncci number till 4000000
let a=1,b=2,sum=0;
while(b<4000000){
    if(b%2===0){
        sum+=b;
    }
    let temp=b;
    b+=a;
    a=temp;
}
console.log(`the sum of all even fibonacci nos is:${sum}`);