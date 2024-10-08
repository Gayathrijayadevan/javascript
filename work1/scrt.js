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

        // creating another row to add edit button 
        const edit_td=document.createElement('td')

        // creating the button 
        const edit_btn=document.createElement('button')
        edit_btn.textContent='edit'

        // creating a button to delete 
        const del_td=document.createElement('td')
        const del_btn=document.createElement('button')
        del_btn.textContent='delete'

        del_btn.onclick=function(){
            delete_data(element.name)
        }
        del_td.appendChild(del_btn)
        t_row.appendChild(del_td)

        // calling the edit_frm function when button is clicked 
        edit_btn.onclick=function(){
            edit_frm(element.name)
        }
        
        edit_td.appendChild(edit_btn)
        t_row.appendChild(edit_td)

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
// creating function to delete 
function delete_data(name){
    d=d.filter(user=>{
        if(user.name!=name){
            return user
        }
    })
    display()
}
// declaring a global variable edit_name to store the name retrived through edit_frmand use it other func 
let edit_name=''
// creating a func named edit_frm to edit the table 
function edit_frm(name){
    console.log('editing',name);
    document.getElementById('edit_form').style.display='block'
    document.getElementById('submit_form').style.display='none'

    // we have the name of the person  whose data has to be updated 
    const edit_data=d.find(user=>user.name==name)
    document.getElementById('e_id').value=edit_data.id
    document.getElementById('e_name').value=edit_data.name
    document.getElementById('e_age').value=edit_data.age

    edit_name=name
}

// selecting the edit form and adding an eventlistener
document.getElementById('edit_form').addEventListener('submit',function(event){
    event.preventDefault()
    // store the inputed value in variables 
    const e_id=document.getElementById('e_id').value
    const e_name=document.getElementById('e_name').value
    const e_age=document.getElementById('e_age').value
    // update the data in the table using map 
    d=d.map(user=>{
        if(user.name==edit_name){
            // returning the value after replacing the original data with updated one ,here '...user' hold the 3 items 
            return{...user,id:e_id,name:e_name,age:e_age}
        }
        return user
    })
     document.getElementById('edit_form').style.display='none'
    document.getElementById('submit_form').style.display='block'
    display()
})
display();

