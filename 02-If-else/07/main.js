let username = prompt('Insert username') ;
let password = prompt('Insert password') ;

if (username === null || username === '') {
    alert('username required');
} else if (password === null || password === '') {
    alert('password required');    
} else if (username === 'admin' && password === '1234') {
    alert('hello') ;
} else if (username === 'john' && password === 'qwerty') {
    alert('hello') ;
} else {
    alert('invalid username or password') ;
} 