var a=200
// var b=100
// alert(a+b)
// alert(a-b)
// alert(a*b)
// alert(a/b)
// a++
// a--
// alert(a)

// a+=200
// a-=200
// a*=200
// a/=200
// a%=200
// alert(a)

// a='20'
// b=20
// alert(a!==b)

// a='20'
// b=20
// // alert(a==b && a>50)
// // alert(a==b || a>50)
// alert(!a==b)


// 19/09/24

function sample(){
    alert('hai..')
    alert('welcome')
}

function sample1(){
    alert('hello')
}

function sample2(){
    a=parseInt(document.getElementById("fno").value)
    b=parseInt(document.getElementById("sno").value)
    console.log(a)
    console.log(b)
    alert(a+b)
}

function sample3(){
    a=parseInt(document.getElementById("fno").value)
    b=parseInt(document.getElementById("sno").value)
    document.getElementById("h1").innerHTML=a+b
}

function sample4(){
    a=parseInt(document.getElementById("fno").value)
    b=parseInt(document.getElementById("sno").value)
    document.getElementById("h1").innerHTML=a-b
}

function sample5(){
    a=parseInt(document.getElementById("fno").value)
    b=parseInt(document.getElementById("sno").value)
    document.getElementById("h1").innerHTML=a*b
}

function sample6(){
    a=parseInt(document.getElementById("fno").value)
    b=parseInt(document.getElementById("sno").value)
    document.getElementById("h1").innerHTML=a/b
}

function sample7(){
    a=parseInt(document.getElementById("fno").value)
    b=parseInt(document.getElementById("sno").value)
    document.getElementById("h1").innerHTML=a%b
}


function sample8(){
    a=parseInt(document.getElementById("fno").value)
    b=parseInt(document.getElementById("sno").value)
    c=parseInt(document.getElementById("tno").value)

    if(a>b){
        document.getElementById("h1").innerHTML=a
    }
    else if(b>c){
        document.getElementById("h1").innerHTML=b
    }
    else{
        document.getElementById("h1").innerHTML=c
    }
}

function sample9(){
    e=parseInt(document.getElementById("expr").value)
    y=parseInt(document.getElementById("salry").value)
    if(y>5){
        document.getElementById("h1").innerHTML=(y*0.05)+y
    }
}

function sample10(){
    u=parseInt(document.getElementById("units").value)
    
}


