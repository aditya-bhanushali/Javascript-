let array=[];
for(let i=1;i<=100;i++){
    array.push(i);
}
for(let i=0;i<array.length;i++){
    array[i]=array[i]* 3;
}
let newarray=[];
for(let i=0;i<array.length;i++){
    if(array[i]%5==0){
        newarray.push(array[i]);
        }
        
       
        
    }
    let sum=0;
     for(i=0;i<newarray.length;i++){
            sum+=newarray[i];
        }
    console.log(sum);

