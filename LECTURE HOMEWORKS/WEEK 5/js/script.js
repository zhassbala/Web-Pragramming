function sayHello(raseke, smthelse){
    if (prompt("Hello, what is your name?", "") == "Rassul"){
        raseke();
    }
    else {
        smthelse();
    }
}

function f1(){
    alert("oh yeah");
}

function f2(){
    alert("Fuck uuuu");
}

sayHello(f1, f2)
