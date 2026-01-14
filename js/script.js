// function SaveEmployee(){
//     ////
// }

// SaveEmployee();

// const savE = function(){
//     ////
// }

// savE();


// const saveEmp = (name,age)=>{
//     ////function body
// }
// saveEmp("yasin",25);

function SaveEmployee(){
    const name = document.getElementById('name').value;
    const adress = document.getElementById('adress').value;
    const age = document.getElementById('age').value;
    const salary = document.getElementById('salary').value;

    console.log(name +" "+ adress+" "+age+" "+salary);

    document.getElementById('result').innerHTML="Yasidu Sathsara";

}


const employee={
    name:"Aflal",
    adress:"12345 main street",
    age:"23",
    salary:"30000"

}

const employees = [
    {
    name:"Aflal",
    adress:"12345 main street",
    age:"23",
    salary:"30000"

},{
    name:"kumar",
    adress:"12345 main street",
    age:"23",
    salary:"30000"

},{
    name:"master",
    adress:"12345 main street",
    age:"23",
    salary:"30000"

},{
    name:"leo",
    adress:"12345 main street",
    age:"23",
    salary:"30000"

},{
    name:"JD",
    adress:"12345 main street",
    age:"23",
    salary:"30000"

},{
    name:"jailer",
    adress:"12345 main street",
    age:"23",
    salary:"30000"

}
]

console.log(employees[1].name);


for(i= 0;i<employees.length;i++){
    console.log(employees[i].name+" | "+
        employees[i].name+" | "+employees[i].adress+" | "+employees[i].age+" | "+employees[i].salary
    );
}