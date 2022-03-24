let input = prompt('Input your number');

input = Number(input)

switch (input) {
    case 1:
        alert('One')
        break;
    case 0:
        alert('Zero')
        break;
    case -1:
        alert('Minus Zero')
        break;
    default:
        alert('Invalid Number')
        break;
}