d=[]
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
            edit_frm(element.name)
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
function delete_data(name){
    d=d.filter(user=>{
        if(user.name!=name){
            return user
        }
    })
    display()
}

display();