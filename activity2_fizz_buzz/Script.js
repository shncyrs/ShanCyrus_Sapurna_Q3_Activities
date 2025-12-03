console.log("Activity 1")
let n1 = 0;
let n2 = 4;
let n3 = -1;
let sorted;

if(n1 >= n2 && m1 >= n3){
    if(n2 >= n3){
        sorted = [n1, n2, n3];
    }else{
        sorted = [n1, n2, n3];
    }
}else if(n2 >= n1 && n2 >= n3){
    if(n1 >= n3){
        sorted = [n2, n1, n3];
    }else{ 
        sorted = [n2, n3, n1];
    }
}else{
    if(n1 >= n2){
        sorted = [n3, n1, n2];
    }else{
        sorted = [n3, n2, n1];
    }
}

console.log(sorted);

console.log("activity 2 largest of fivr numbers [-5, -2, -6, 0, -1]");
let a = -5;
let b = -2;
let c = -6;
let d = 0;
let e = -1;
console.log("Output:"+ d);

let f = 0;
let g = "";
for(let h = 1; h <= 100; h++){
    if(h % 3 === 0 && h % 5 === 0 ){
        set = "fizz buzz"
    }else if(h  % 3 ===0){
        set = "fizz";
    }else if(h % 5 === 0 ){
        set = "buzz";
    }else{
        set = h;
    }
console.log(set);
}


