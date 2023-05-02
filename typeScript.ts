// // let str:string="I am fine today"
// // let strUpper =str.toUpperCase()
// // let strSlice:number =str.indexOf('t')
// // let strSlice:string =str.charAt(13)
// // console.log(strSlice)


// // let nums:number=400000;
// // let val:string=nums.toLocaleString()
// // console.log(val)

// // Methods, what they take and what they return 
// let people:string|number=34;

//Generics
function newFunction<prop>(data: prop []) : prop[]{
return data; 
}


let data: string[] =[
"Amidate","Francis","Franklin","Gabriel","Ayomide"
];
let dataSort: string[] =data.sort()

console.log(dataSort);

