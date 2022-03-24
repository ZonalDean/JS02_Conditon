let grade = prompt('put in the score here')

if (grade >= 80) {
    alert('Grade A');
} else if (grade >= 70 && grade < 80) {
    alert('Grade B');
} else if (grade >= 60 && grade < 70) {
    alert('Grade C');
} else if(grade >= 50 && grade < 60) {
    alert('Grade D');
} else if(grade < 50) {
    alert('Grade F')
} else {
    alert('input invalid')
}