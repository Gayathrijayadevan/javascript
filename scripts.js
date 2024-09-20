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

function sample9() {
    e = parseInt(document.getElementById("expr").value);
    y = parseInt(document.getElementById("salry").value);

    if (e > 5) {
        document.getElementById("h1").innerHTML = (y * 0.05) + y;
    } else {
        document.getElementById("h1").innerHTML = "No bonus. Original salary: " + y;
    }
}

function sample10(){
    u=parseInt(document.getElementById("units").value)
    if(u==100){
        document.getElementById("h1").innerHTML=0
    }
    else if(u<=200){
        document.getElementById("h1").innerHTML=(u-100)*5
    }
    else{
        document.getElementById("h1").innerHTML=(u-200)*10+500
    }
}

function sample11(){
    d=parseInt(document.getElementById("num").value)
    if(d==1){
        document.getElementById("h1").innerHTML='Sunday'
    }
    else if(d==2){
        document.getElementById("h1").innerHTML='Monday'
    }
    else if(d==3){
        document.getElementById("h1").innerHTML='Tuesday'
    }
    else if(d==4){
        document.getElementById("h1").innerHTML='Wednesday'
    }
    else if(d==5){
        document.getElementById("h1").innerHTML='Thursday'
    }
    else if(d==6){
        document.getElementById("h1").innerHTML='Friday'
    }
    else{
        document.getElementById("h1").innerHTML='Saturday'
    }
}

function sample12() {
    const city = document.getElementById("city").value.toLowerCase();
  
    if (city === "delhi") {
      document.getElementById("h1").innerHTML = "Red Fort";
    }
     else if (city === "agra") {
      document.getElementById("h1").innerHTML = "Taj Mahal";
    }
     else if (city === "jaipur") {
      document.getElementById("h1").innerHTML = "Hawa Mahal";
    } 
    else {
      document.getElementById("h1").innerHTML = "Invalid city";
    }
  }

function sample13(){
    n=parseInt(document.getElementById("num").value)
    const d=n%10
    if (d%3==0){
        document.getElementById("h1").innerHTML=' divisible by 3'  
    }
    else{
        document.getElementById("h1").innerHTML='not divisible by 3 '
    }
}

function sample14() {
    p = parseInt(document.getElementById("price").value);
    if (p > 100000) {
        document.getElementById("h1").innerHTML = p * 0.15;
    } else if (p > 50000 && p <= 100000) {
        document.getElementById("h1").innerHTML = p * 0.10; // Corrected calculation
    } else if (p <= 50000) {
        document.getElementById("h1").innerHTML = p * 0.05;
    } else {
        document.getElementById("h1").innerHTML = p;
    }
}
function large_among4(){
    a=parseInt(document.getElementById("fno").value)
    b=parseInt(document.getElementById("sno").value)
    c=parseInt(document.getElementById("tno").value)
    d=parseInt(document.getElementById("for_no").value)

    if(a>b && a>c && a>d){
        document.getElementById("h1").innerHTML=a
    }
    else if(b>a && b>c && b>d){
        document.getElementById("h1").innerHTML=b
    }
    else if(c>a && c>b && c>d){
        document.getElementById("h1").innerHTML=c
    }
    else{
        document.getElementById("h1").innerHTML=d
    }
}

function loop(){
    a=parseInt(document.getElementById("sno").value)
    b=parseInt(document.getElementById("eno").value)

    for(i=a;i<=b;i++){
        console.log(i);
        // alert(i)
        // document.getElementById('h1').innerHTML=i
        // document.write(i)

    }
}
 function loop_sum(){
    a=parseInt(document.getElementById("sno").value)
    b=parseInt(document.getElementById("eno").value)
    sum=0
    for(i=a;i<=b;i++){
        sum+=i  
    }
    document.getElementById('h1').innerHTML=sum
 }

 function loop_odd(){
    a=parseInt(document.getElementById("sno").value)
    b=parseInt(document.getElementById("eno").value)
    odd=0
    for(i=a;i<=b;i++){
        if(i%2!=0)
            console.log(i);
    }
 }

function while_loop(){
    i=parseInt(document.getElementById("sno").value)
    b=parseInt(document.getElementById('eno').value)

    while(i<=b){
        console.log(i);
        i++
    }
}

function dowhile_loop(){
    i=parseInt(document.getElementById("sno").value)
    b=parseInt(document.getElementById('eno').value)
    do{
        console.log(i);
        i++
    }
    while(i<=b)
}

function fact_dowhile(){
    a=parseInt(document.getElementById("num").value)
    fact=1
    i=1
    do{
        fact=fact*i
        document.getElementById("h1").innerHTML=fact
        i++
    }
    while(i<=a)
}


