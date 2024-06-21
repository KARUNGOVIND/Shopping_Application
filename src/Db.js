const students=[{
    name:"john",
    age:28,
    grade:9.1
},{
    name:"Arun",
    age:29,
    grade:7.7
},{
    name:"vimal",
    age:24,
    grade:9.7
}]


const arr=[1,3,5,4,5];
//MAPPING:
const odd=arr.map=((x)=>{x%2===0?'Even':'Odd'})

//ARROW FUNCTION WITHOUT RETURN
const sub=(a,b)=>{
  console.log(a-b)
}

console.log("The Subraction in Arrowfunction without return ",sub(3,4))


//ARROW FUNCTION WITH RETURN
const Subract=((a,b)=>{return a-b})

console.log("The Subraction in Arrowfunction with return ",Subract(3,4))


//FUNCTION WITHOUT RETURN
function Subraction(a,b){
    
    return(a-b)
}
console.log("The Subraction in function with return ",Subraction(3,4))


const Age=students.sort((a,b)=>{return(b.age-a.age)})
console.log("Higest Age by ",Age[0].name,"is",Age[0].age)


const Grade=students.sort((a,b)=>{return(b.grade-a.grade)})
console.log("Grade obtained by ",Grade[0].name,"is",Grade[0].grade)

const Abovegrade=students.filter((a)=>a.grade>8).map((a)=>a.name)

console.log("Students above 8 CGPA :",`${Abovegrade}`)


const highestCGPA = students.reduce((max, student) => {
    if(student.grade > 8){max.push(student.name)}
    return max;
}, []);

console.log(highestCGPA)


