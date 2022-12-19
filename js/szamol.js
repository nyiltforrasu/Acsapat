function szorzas(){
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;
    a = parseInt(a);
    b = parseInt(b);
    let c = a*b;
    document.getElementById("result").innerHTML
        = c.toString();
}

function osztas(){
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;
    a = parseInt(a);
    b = parseInt(b);
    let c = a/b;
    alert(`Az eredmény = ${c.toString()} .`);
}