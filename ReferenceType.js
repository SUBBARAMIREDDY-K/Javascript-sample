/*
    i)object
    ii)Array
    iii)Function
*/

//object

/*
    syntax
    let/var/const   objectname = {
        key1:value1,
        key2:value2,
            .
            .
            .
            .
        keyn:valuen
    } -->object literal
*/

let person={
    name:"ram",
    age:22
};

console.log(person)

//Dot Notation
console.log(person.name)

//Bracket Notation
console.log(person['name'])

// To Reassign
person.name="k"
console.log(person.name)

person['name']='subbu'
console.log(person['name'])


//Array to store the list of value in it.


let student=['ram','suman']
console.log(student)
console.log=(student[0])
student[2]="anand";

//function

function greet()
{
    console.log("hello world");
}
greet()


