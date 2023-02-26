const student = {
    name: 'Umar',
    age: 60,
    class: 'Two',
    marks: {
        math: 100,
        physics: 85,
        english: 88
    }
}

const marks = student.marks;
const marksMath = student.marks.math;
const physics = student['marks']['physics'];
console.log(marks);
console.log(marksMath);
console.log(physics);
