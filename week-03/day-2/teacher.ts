'use strict'
import { Student } from './student';
/*Teacher
teach(student) -> calls the students learn method
answer() -> prints the teacher is answering a question
Instantiate a Student and Teacher object
Call the student's question() method and the teacher's teach() method*/

class Teacher {

    teach(student: Student) {

        student.learn(); 
    }
    answer() {

        console.log('Teacher is answering the question')
    }
}



export{Teacher};