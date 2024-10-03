// this is the basic syntax of opps 
// class name {
//     constructor(parameters) {
        
//     }
// }

class car{
    constructor(name,year){
        this.year=year
        this.name=name
    }
    display(){
        console.log(this.name,this.year);
        // 'this' keyword is just like 'self' in python.this is you in class to access variables from different class
    }
}

// while creating an obj for a class you need to use 'new' keyword 
bmw= new car('bmw',2020)
bmw.display()


// using 'this' in object
d={
f_name:'hari',
l_name:'lal',
age:20,
// creating a named function to add the first name and last name 
// accesing the variables using 'this' 
full_name:function(){
    return this.f_name+this.l_name
}
}
console.log(d.full_name());
