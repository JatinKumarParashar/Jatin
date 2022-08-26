
class Student {
     static count=0;
     constructor(name,age,phone,marks){
        this.name=name,
        this.age=age,
        this.phone=phone,
        this.marks=marks
        Student.count++;
    }

     eligible() {
            if(this.marks>=40)
            console.log(`${this.name} is Eligible`);
            else
            console.log(`${this.name} is not Eligible`);
            
    }
   numberOfStudents(){
   console.log(`There are ${Student.count} Students.`);
   }

   eligibleForPlacement(minage){
   return (minmarks)=> {

    if(this.marks>minmarks&&this.age>minage)
   return console.log(`${this.name} is Eliglible for placement.`);
    else
   return console.log(`${this.name} is Not Eliglible for placement.`);
    

   }
}
}

var Jatin=new Student('Jatin',20,1234567891,55);
var Ram=new Student('Ram',21,4521552554,38);
var Shyam=new Student('Shyam',18,1535628521,65);
var Mohan=new Student('Mohan',17,15468464,40);
var Tarun=new Student('Tarun',19,7895214555,85);


Jatin.numberOfStudents();
Jatin.eligible();
Ram.eligible();
Shyam.eligible();
Mohan.eligible();
Tarun.eligible();
Jatin.eligibleForPlacement(18)(40);
Ram.eligibleForPlacement(18)(40);
Shyam.eligibleForPlacement(18)(40);
Mohan.eligibleForPlacement(18)(40);
Tarun.eligibleForPlacement(18)(40);