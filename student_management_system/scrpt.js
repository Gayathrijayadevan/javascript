d=[{id:1,name:'jai',age:20,email:'jai@gmail.com',course:'python',date:'2024/9/24'},{id:2,name:'john',age:21,email:'john@gamil.com',course:'python',date:'2024/9/4'},{id:3,name:'sanu',age:20,email:'sanu@gmail.com',course:'mern',date:'2024/9/22'}]

function display(){
    const s_var=document.querySelector('#studenttable tbody')
    s_var.innerHTML=''
    d.forEach(element=>{
        const t_row=document.createElement('tr')

        const s_id=document.createElement('td')
        s_id.textContent=element.id
        t_row.appendChild(s_id)

        const s_name=document.createElement('td')
        s_name.textContent=element.name
        t_row.appendChild(s_name)

        const s_age=document.createElement('td')
        s_age.textContent=element.age
        t_row.appendChild(s_age)

        const s_email=document.createElement('td')
        s_email.textContent=element.email
        t_row.appendChild(s_email)

        const s_course=document.createElement('td')
        s_course.textContent=element.course
        t_row.appendChild(s_course)

        const s_date=document.createElement('td')
        s_date.textContent=element.date
        t_row.appendChild(s_date)

        const edit_td=document.createElement('td')
        const edit_btn=document.createElement('button')
        edit_btn.textContent='edit'

        edit_btn.onclick=function(){
            edit_fom(element.name)
        }
        edit_td.appendChild(edit_btn)
        t_row.appendChild(edit_td)

        const del_td=document.createElement('td')
        const del_btn=document.createElement('button')
        del_btn.textContent='delete'

        del_btn.onclick=function(){
            delete_data(element.name)
        }
        del_td.appendChild(del_btn)
        t_row.appendChild(del_td)

        s_var.appendChild(t_row)
    });
}

document.getElementById('reg_form').addEventListener('submit',function(event){
    event.preventDefault()

    const id=parseInt(document.getElementById('s_id').value)
    const name=document.getElementById('s_name').value
    const age=parseInt(document.getElementById('s_age').value)
    const email=document.getElementById('s_email').value
    const course=document.getElementById('s_cour').value
    const date=document.getElementById('s_date').value

    d.push({id:id,name:name,age:age,email:email,course:course,date:date})

    document.getElementById('s_id').value=''
    document.getElementById('s_name').value=''
    document.getElementById('s_age').value=''
    document.getElementById('s_email').value=''
    document.getElementById('s_cour').value=''
    document.getElementById('s_date').value=''

    console.log(d)

    display()
})

let ed_name=''
function edit_fom(name){
    console.log('editing',name);
    document.getElementById('edit_form').style.display='block'
    document.getElementById('reg_form').style.display='none'

    const edit_data=d.find(user=>user.name==name)
    document.getElementById('e_id').value=edit_data.id
    document.getElementById('e_name').value=edit_data.name
    document.getElementById('e_age').value=edit_data.age
    document.getElementById('e_email').value=edit_data.email
    document.getElementById('e_cour').value=edit_data.course
    document.getElementById('e_date').value=edit_data.date

    ed_name=name
}

document.getElementById('edit_form').addEventListener('edit',function(event){
    event.preventDefault()

    const e_id=document.getElementById('e_id').value
    const e_name=document.getElementById('e_name').value
    const e_age=document.getElementById('e_age').value
    const e_email=document.getElementById('e_email').value
    const e_course=document.getElementById('e_cour').value
    const e_date=document.getElementById('e_date').value
    d=d.map(user=>{
        if(user.name==ed_name){
            return{...user,id:e_id,name:e_name,age:e_age,email:e_email,course:e_course,date:e_date }
        }
        return user
    })
    document.getElementById('edit_form').style.display='none'
    document.getElementById('reg_form').style.display='block'
    display()
})

display();