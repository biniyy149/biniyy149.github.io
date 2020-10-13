{
var Person = function() {};
Person.prototype.initialize = function(name, age)
{
 this.name = name;
 this.age = age;
}
Person.prototype.describe = function()
{
 return this.name + ", " + this.age + " years old.";
}
var Student = function() {};
Student.prototype = new Person();
Student.prototype.learn = function(subject)
{
 console.log(this.name + " just learned " + subject);
}
var Teacher = function(){};
Teacher.prototype = new Person();
Teacher.prototype.teach = function(subject){
    console.log(this.name + " teaches " + subject);
}
var me = new Student();
me.initialize("John", 25);
me.learn("Inheritance");
var teacher = new Teacher();
console.log(teacher.teach("Java Script"));
describe("description of teacher object", function() {
    it("displays the name and age of Teacher object", function() {
      let teacher = new Teacher();
      teacher.initialize("David", 60);
      assert.deepEqual( teacher.describe(), "David, 60 years old." );
    });
});
describe("description of Student object", function() {
  it("displays the name and age of Student object", function() {
    var me = new Student();
    me.initialize("John", 25);
    
    assert.deepEqual( me.describe(), "John, 25 years old." );
  });
});
describe("unveiling the subject what the teacher teaches", function() {
  it("displays the name and the subject", function() {
    let teacher = new Teacher();
    
    assert.deepEqual(teacher.initialize("David", 60), teacher.teach('Class'), "David teaches Class" );
  });
});
describe("unveiling what the student learn", function() {
  it("displays the name and subject what student learn", function() {
    let me = new Student();
    
    assert.deepEqual(me.initialize("john", 25), me.learn("Inheritance"), "john just learned Inheritance" );
  });
});
}