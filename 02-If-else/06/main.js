let num1 = prompt("Let's do some addition! Put in your first number") ;
let num2 = prompt("Put in your second number") ;

num1 = Number(num1) ;
num2 = Number(num2) ;

if (Number.isNaN(num1) || Number.isNaN(num2)) {
    alert('invalid number!');
} else if (typeof(num1) === "number" && typeof(num2) === "number") {
    alert(num1 + num2);
} else {
    alert('invalid number!');
}