    //find sum of all number below 1000 that are divisible by 3 or 5
 
let sum = 0;
for(i=0;i<1000;i++){
    if(i%3===0 || i%5===0){
        sum=sum+i;
    }
    
}
console.log(`sum of all the number belo 1000 divisible are${sum}`);