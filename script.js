//write a programe that find prime number

let num = 10;
let count =0;
for(let i=0; i<=num; i++){
    if(num%i===0){
        count++
    }
}
if(count==2){
    console.log(num+ " is prime number")
}