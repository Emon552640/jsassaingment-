var myScore = 85;
if (myScore > 90) {
    console.log("Grade: A");
} else if (myScore >= 80 && myScore <= 90) {
    console.log("Grade: B");
} else if (myScore < 80) {
    console.log("Grade: C");
}



for (let i = 0; i <= 10; i++) {
    console.log('2'.repeat(i));
}


let num1 = 0;
let num2 = 1;

for (let i = 0; i <= 5; i++) {
    if (i === 1) {
        console.log(num1);
    } else if (i === 2) {
        console.log(num2);
    }
    else {
        let next = num1 + num2;
        console.log(next);
        num1 = num2;
        num2 = next;
    }
} 