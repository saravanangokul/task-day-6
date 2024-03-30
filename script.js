
// QUS
// 1.https://github.com/rvsp/typescript-oops/blob/master/Practice/Movie.md

class Person{
    constructor(name,age,gender,salary=35){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.salary = salary;
    }
}
const  person1 = new Person("praveen",23,"male",);
const  person2 = new Person("casino royale","studio","pg13",);
console.log(person1.name);
console.log(person1.age);
console.log(person1.gender);
console.log(person1.salary);

console.log(person2.name);
console.log(person2.age);
console.log(person2.gender); 

// QUS
// 2.https://github.com/rvsp/typescript-oops/blob/master/Practice/class-circle.md

class Circle{
    constructor(radius ,color){
      this.radius = radius;
      this.color = color;
    }
    get radiusCircle(){
      return this.radius;
    }
    set radiusCircle(radius){
      this.radius = radius;
    }
    get colorCircle(){
      return this.color;
    }
    set colorCircle(color){
      this.color = color;
    }
    get toString(){
      return `"Circle[radius=${this.radius},color=${this.color}]"`
    }
    get areaCircle(){
      return Math.PI * this.radius * this.radius;
    }
    get circumferenceCircle(){
      return 2 * Math.PI * this.radius;
    }
}
 var obj1 = new Circle(1.0,"red");
 console.log(obj1.radiusCircle);
 
 obj1.radiusCircle=2.2;
 console.log(obj1.radiusCircle);

 console.log(obj1.colorCircle);
 obj1.colorCircle="blue";
 
 console.log(obj1.colorCircle);

 console.log(obj1.toString);

 console.log(obj1.areaCircle);
 
 console.log(obj1.circumferenceCircle);



// QUS
// 3.Write a “person” class to hold all the details.

 class details{
    constructor(name,age,gender,salary){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.salary = salary;
    }
}
const  details1= new details("gokul",22,"male",30);
console.log(details1.name);
console.log(details1.age);
console.log(details1.gender);
console.log(details1.salary);






   

    