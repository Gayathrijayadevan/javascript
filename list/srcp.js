l=[1,2,3,4,5]

console.log(typeof l);
console.log(l)
console.log(l[0])
console.log(l.length)
// to convert the values of list to  string
a=l.toString()
console.log( typeof a)
console.log(a)
// to delete a value
l.pop()
console.log(l)
// to insert a value 
l.push(8)
console.log(l)
// to add a value to the 10th pos 
l[10]=100
console.log(l)
console.log(l.length)
// to remove a value from the starting pos 
l.shift()
console.log(l)
// to insert a value to the starting pos 
l.unshift(0)
console.log(l)
// to remove a value from a specific index pos 
delete l[10]
console.log(l)

// the difference between  'for in' and 'for of' is that ,while for in is used we get
// the index pos of the element but when for of used we get the value of the list 
for(let i in l){
    console.log(l[i])
}
// the let is used just to show that we are using the latest version its totally fine if you don't use it  
for(let i of l){
    console.log(i)
}

for(let i of l){
    if(i==3){
        break
    }
}