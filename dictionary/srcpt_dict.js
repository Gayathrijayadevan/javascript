// d={name:'anu',age:20,place:'ekm'}

// console.log(d)
// console.log(d['age'])
// below  is the js method to print the value of a key 
// console.log(d.age)
// console.log(d.place)
// to update a dictionary 
// d.place='tsr'
// d.lang='malayalam'
// console.log(d)

// to delete an item from the dict 
// delete d.age
// console.log(d)

// to print a value using loop 
// for(let i in d){
//     if(d['age']==20){
//         console.log(i,d[i]);
//     }
// }


// d=[{name:'sanu',age:20,place:'ktm'},{name:'manu',age:20,place:'ekm'},{name:'janu',age:20,place:'ekm'},{name:'hanu',age:20,place:'ekm'}]

// for(let i of d){
//     console.log(i.age);
// }


dict=[{name:'jai',age:20,place:'ktm'},{name:'john',age:21,place:'ekm'},{name:'sanu',age:20,place:'ekm'},{name:'hari',age:21,place:'ktm'},{name:'rahul',age:20,place:'ktm'},{name:'manu',age:21,place:'ktm'}]
dict1=[]
dict2=[]
for(let i of dict){
    if(i['age']==21){
        dict1.push(i)
    }
    else{
        dict2.push(i)

    }
}
console.log(dict1)
console.log(dict2)
// for(let i of dict){
//     console.log(i,dict[i])
// }
