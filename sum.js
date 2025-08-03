let a=[3,4,-5,-6,7];
let n=[];
for(i=0;i<a.length;i++){
    if(a[i]>0){
n.push(a[i]);
    }
        
}
console.log(n.reduce((a,x)=>a+x));