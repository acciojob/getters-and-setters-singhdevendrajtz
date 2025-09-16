//complete this code
class Person {
	constructor(name1, age1)
	{
	this.name=name1;
	this.age=age1;
	}
get name(){
			return(this.name);
			}
set age(age1)
	{
		this.age=age1;
	}
}

class Student extends Person {
		study(){
			console.log(this.name+" is studying");
		}
}

class Teacher extends Person {
	teach()
	{
		console.log(this.name + " is teaching")
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
