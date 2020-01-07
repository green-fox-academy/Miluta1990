'use strict'

class Person {
    name:string;
    age:number;
    gender:string;
    goal:string;
  
    constructor(name:string='Jane Doe', age:number=30, gender:string='female'){
      this.name = name;
      this.age = age;
      this.gender = gender;
    }
  
    introduce() {
      console.log( `Hi, I'm ${this.name}, a ${this.age} years old ${this.gender}.`);
    }
    getGoal() {
      console.log( 'My goal is: be awesome!');
    }
  }

class Student extends Person{

    previousOrganization:string;
    skippedDays:number;
  
    constructor(name:string='Jane Doe', age:number=30, gender:string='female', previousOrganization:string='The School of Life'){
      super(name, age , gender);
      this.previousOrganization = previousOrganization;
      this.skippedDays = 0;
    }
    skipDays(numberOfDays:number){
      this.skippedDays += numberOfDays;
    }
  }

  class Mentor extends Person{

    level:string;
  
    constructor(name:string='Jane Doe', age:number=30, gender:string='female', level:string='intermediate'){
      super(name, age ,gender);
      this.level = level;
    }
  
    introduce() {
      console.log( `Hi, I'm ${this.name}, a ${this.age} years old ${this.gender} ${this.level} mentor.`);
    }
  }

  class Sponsor extends Person{

    company:string;
    hiredStudents:number;
  
    constructor(name:string='Jane Doe', age:number=30, gender:string='female', company:string='Google '){
      super(name, age, gender);
      this.company = company;
      this.hiredStudents = 0;
    }
  
    introduce() {
      console.log( `Hi, I'm ${this.name}, a ${this.age} years old ${this.gender} who represents ${this.company} and hired ${this.hiredStudents} students so far.`);
    }
  
    hire(){
      this.hiredStudents++;
    }
  }
  
  class Cohort {
    name:string;
    students:Student[];
    mentors:Mentor[];
  
    constructor(name:string){
      this.name = name;
      this.students = [];
      this.mentors = [];
    };
  
    addStudent(Student:Student):void{
      this.students.push(Student);
    };
  
    addMentor(Mentor:Mentor):void{
      this.mentors.push(Mentor);
    };
  
    info(){
      console.log(`The ${this.name} cohort has ${this.students.length} students and ${this.mentors.length} mentors.`); 
    };
  }

let people = [];

let mark = new Person('Mark', 46, 'male');
people.push(mark);

let jane = new Person();
people.push(jane);

let john = new Student('John Doe', 20, 'male', 'BME');
people.push(john);

let bela = new Student();
people.push(bela);

let gandhi = new Mentor('Gandhi', 148, 'male', 'senior');
people.push(gandhi);

let mentor = new Mentor();
people.push(mentor);

let elon = new Sponsor('Elon Musk', 46, 'male', 'SpaceX');
people.push(elon);

let sponsor = new Sponsor();
people.push(sponsor);

bela.skipDays(3);

for (let i = 0; i < 6; i++) {
  elon.hire();
}

for (let i = 0; i < 4; i++) {
  sponsor.hire();
}

for (let person of people) {
  person.introduce();
  person.getGoal();
}

let awesome = new Cohort('AWESOME');
awesome.addStudent(bela);
awesome.addStudent(john);
awesome.addMentor(mentor);
awesome.addMentor(gandhi);
awesome.info();
