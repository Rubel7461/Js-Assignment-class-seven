// - Create a Student Array Data Structure ( name, roll, age, class, gender, location, Admission fees ) 30.  now create a console data table with


const stuList = [

    {
        name : 'Raza',
        age : 21,
        rool : 01,
        class : 'Three',
        gender : 'male',
        location : 'Chittagong',
        Adm_fees : 2300,
    },
    {
        name : 'Shahab',
        age : 25,
        rool : 02,
        class : 'five',
        gender : 'male',
        location : 'sylet',
        Adm_fees : 200,
    },
    {
        name : 'Razzak',
        age : 27,
        rool : 03,
        class : 'four',
        gender : 'male',
        location : 'Khagrachary',
        Adm_fees : 500,
    },
    {
        name : 'Rima',
        age : 55,
        rool : 04,
        class : 'five',
        gender : 'female',
        location : 'Chittagong',
        Adm_fees : 2300,
    },
    {
        name : 'jasy',
        age : 32,
        rool : 06,
        class : 'Three',
        gender : 'female',
        location : 'sylet',
        Adm_fees : 6000,
    },
    {
        name : 'faysal',
        age : 22,
        rool : 07,
        class : 'four',
        gender : 'male',
        location : 'Chittagong',
        Adm_fees : 200,
    },
    {
        name : 'tahmina',
        age : 61,
        rool : 01,
        class : 'Three',
        gender : 'female',
        location : 'Dhaka',
        Adm_fees : 6700,
    },
    {
        name : 'Noha',
        age : 41,
        rool : 08,
        class : 'Three',
        gender : 'female',
        location : 'Chittagong',
        Adm_fees : 2300,
    },
    {
        name : 'Ariful',
        age : 21,
        rool : 09,
        class : 'five',
        gender : 'male',
        location : 'Dhaka',
        Adm_fees : 2500,
    },
    {
        name : 'rupa',
        age : 56,
        rool : 10,
        class : 'Three',
        gender : 'female',
        location : 'Chittagong',
        Adm_fees : 300,
    },

/**
 *  Find All Female Students
 *  Find class wise student result
 *  Location wise student result
 *  Find student between 10 - 25 age 
*/

];




console.log(`
// Find All Female Student
==========================
`);
for ( data of stuList ) {
   if(data.gender === 'female') {
    console.log(`Hello ami ${data.name} Female`);
   }
}




console.log(`
Find class wise student result
==============================
`);
for (data of stuList) {
    if (data.class === 'five') {
        console.log(`Hello, ${data.name} class ${data.class} a pori `);
    }
}



console.log(`
// - Location wise student result
==================================
`);

for (data of stuList) {
  if (data.location === 'Chittagong') {
    console.log(`Hello, I am ${data.name}. I Live in ${data.location}`);
  } 

}



console.log(`
// - find student between 10 - 25 age
======================================
`);


for ( data of stuList) {
    if ( data.age >= 10 && data.age <= 25 ) {
        console.log(`Hello, I am ${data.name}`);
    }
}