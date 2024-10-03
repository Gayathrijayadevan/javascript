fetch('https://dummyjson.com/products').then(response=>response.json()).then(data=>{
    data.products.forEach(element => {
        // console.log(element.title);
        const row=document.querySelector(".row")
        const col=document.createElement("div")
        const card=document.getElementById("div")
        card.classList.add('card')
        col.classList.add('col-lg-4')
        // console.log(element.title);
        
        col.innerHTML=`
        <img src="${element.images}"  width="100%">
        <h3> ${element.title}</h3>
        <h6>${element.price}</h6>
        `
        row.appendChild(col)
    });
})