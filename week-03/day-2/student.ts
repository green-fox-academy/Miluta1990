/*Create Student and Teacher classes
Student
learn() -> prints the student is learning something new
question(teacher) -> calls the teachers answer method
Teacher
teach(student) -> calls the students learn method
answer() -> prints the teacher is answering a question
Instantiate a Student and Teacher object
Call the student's question() method and the teacher's teach() method*/

'use strict'

import { Teacher } from './teacher';


class Student {

    learn() {
        console.log('Student is learning something new')
    }
    question(teacher: Teacher) {

        teacher.answer();
    }
}

export{Student};

let Student1 = new Student;
let Student2 = new Student; 
let Teacher1 = new Teacher;
let Teacher2 = new Teacher;


Student1.question(Teacher1);
Teacher1.teach(Student1);