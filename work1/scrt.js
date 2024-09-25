d=[{id:1,name:'jai',age:20},{id:2,name:'john',age:21},{id:3,name:'sanu',age:20},{id:4,name:'hari',age:21},{id:5,name:'rahul',age:20}]

function display(){
    // creating a variable and selecting the table using querySelector
    const t_var=document.querySelector('#peopletable tbody')
    // clearing the any existing contain in t_var before entering the new one 

    t_var.innerHTML=''
    d.forEach(element => {
        // creating row to store the table data 
        const t_row=document.createElement('tr')

        // creating a variable to store the table data 
        const t_id=document.createElement('td')
        t_id.textContent=element.id
        t_row.appendChild(t_id)

        const t_name=document.createElement('td')
        t_name.textContent=element.name
        t_row.appendChild(t_name)

        const t_age=document.createElement('td')
        t_age.textContent=element.age
        t_row.appendChild(t_age)

        
        t_var.appendChild(t_row)
    });
}

// to input data into the table from the submit form 
// selecting the submit form and adding an eventlistener 
document.getElementById('submit_form').addEventListener('submit',function(event){
    // to avoid refreshing
    event.preventDefault()

    // store the inputed value in variables 
    const id=parseInt(document.getElementById('id').value)
    const name=document.getElementById('name').value 
    const age=parseInt(document.getElementById('age').value)

    // pushing it to d 
    d.push({id:id,name:name,age:age})

    // to clear the input box after submit btn is clicked 
    document.getElementById('id').value=''
    document.getElementById('name').value=''
    document.getElementById('age').value=''

    // calling the function to see the result on the table 
    display()

})
display();
