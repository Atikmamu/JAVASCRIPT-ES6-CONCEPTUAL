// 1. global scope 
// 2. block scope 
// 3. functional scope 


// global scope : jakono jaiga thake access kora somvob 

// const x = 5;

// console.log(x);

if(true) {
    // console.log(x);
}

function show() {
    // console.log(x);
}
show();



// block scope : {} carly basis ar moddha access kora 

{
    let x = 6;
    // console.log(x);   // block scope use korla let ba const ja diyei kori na kano blck ar vatora access korta parbo ar bahira access korta parbo na 

}


