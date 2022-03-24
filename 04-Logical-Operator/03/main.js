let input = prompt("Insert username")

let user;
let password;

if (input === "") {
    user = "guest"
} else if (input === "codecamp") {
    password = prompt("Password");
} else if (password === "123456") {
    user = "codecamp"
} if (user !== "123456") {
    alert("Wrong Password");
};

alert("Welcome " + user);

console.log(user);


