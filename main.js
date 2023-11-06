var TableBody=document.getElementById("TableBody");
var Students=
[
{
Name:"Muslum",
Surname:"Khalilov",
Age:"19"
},

{
Name:"Tofig",
Surname:"Nasibli",
Age:"19"
},

{
Name:"Murad",
Surname:"Gambarov",
Age:"19"
},

{
Name:"Asiman",
Surname:"Qasimzade",
Age:"20"
}
]


for (let index = 0; index < Students.length; index++) {
    var Student=Students[index]
    var row=document.createElement("tr")

    var cell1=document.createElement("td")
    cell1.append(Student.Name)
    row.append(cell1)

    var cell2=document.createElement("td")
    cell2.append(Student.Surname)
    row.append(cell2)

    var cell3=document.createElement("td")
    cell3.append(Student.Age)
    row.append(cell3)

    TableBody.append(row)

}

