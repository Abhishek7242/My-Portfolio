let schoolclass=prompt("Enter Class ");
let numOfStudents=Number.parseInt(prompt(`How many students in class ${schoolclass} `))
let subjectcount=prompt("How many subject in "+schoolclass+" class")
let numsubject=Number.parseInt(subjectcount)

let total=0
let i;
let j;
let persentage;
let subject=[];
let marks=[];
let subjname;
for(i=0;i<numsubject;i++){
  subjname=prompt(`enter subject ${i+1} name `)
    subject.push(subjname);
}
for(let j=0;j<numOfStudents;j++){
let studentname=prompt(`Enter roll no. ${j+1} name`);
for(i=0;i<numsubject;i++){
  let subjmarks=Number.parseInt(prompt(`Enter ${studentname}'s marks in ${subject[i]}`))
  marks.push(subjmarks);
  total+=subjmarks
}
for(i=0; i<numsubject;i++){
  console.log(studentname+` Your marks in ${subject[i]} : ${marks[i]}`);
  
}
console.log("Total : "+total);
persentage=total/numsubject
console.log(`${studentname}your persentage in ${schoolclass} class is : ${persentage}%` )
  total*=0
if(persentage>=90){
  console.log(`congratulation ${studentname} `)
}
else if (persentage<90&&persentage>=70){
  console.log(`Very good ${studentname} next time perform better `)
  
}
else if (persentage<70&&persentage>=50){
  console.log(`good ${studentname} but you have to learn more`)
  
}
else if (persentage<50 && persentage>=35){ 
  console.log(`poor ${studentname} you have to work hard and go for tution classes`)
  
}
else {
  console.log(`shame on you ${studentname} you are fail `)
  
}

}