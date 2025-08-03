const users=[
     {name:'alice',age:25},
   {name:'bob',age:25} ,
   {name:'charlie',age:25} 
];
let sum=0;
for(let i=0;i<users.length;i++){
sum+=users[i].age;
}
avg=sum/3;
console.log(`${avg}`)

