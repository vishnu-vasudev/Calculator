function fn(n){
    a=''
    document.getElementById('display').value=document.getElementById('display').value+n
    a=document.getElementById('display').value
}
function add() {
    document.getElementById('display').value=''
    n='+'
    b=a
}
function subtract() {
    document.getElementById('display').value=''
    n='-'
    b=a
}
function multi() {
    document.getElementById('display').value=''
    n='*'
    b=a
}
function division() {
    document.getElementById('display').value=''
    n='/'
    b=a
}

function equal() {
    if(n=='+'){
        s=parseFloat(b)+parseFloat(a)
        document.getElementById('display').value=s
    }
    if(n=='-'){
        s=parseFloat(b)-parseFloat(a)
        document.getElementById('display').value=s.toFixed(1)
    }
    if(n=='*'){
        s=parseFloat(b)*parseFloat(a)
        document.getElementById('display').value=s
    }
    if(n=='/'){
        s=parseFloat(b)/parseFloat(a)
        document.getElementById('display').value=s
    }

}

function clr(){
    document.getElementById('display').value=""
}