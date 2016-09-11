var inheritance = function(Parent, Child) {
    var childProto = Child.prototype;
    function F() {};
    F.prototype = Parent.prototype;
    Child.prototype = new F();
    Child.prototype.constructor = Child;
    for (var key in childProto)  {
        Child.prototype[key] = childProto[key];
    }
    Child.prototype.superclass = Parent;
};

function Person(name, age) {
    this.name = name || null;
    this.age = age || null;
}
Person.prototype.getName = function() {
    return this.name;
};
Person.prototype.getAge = function() {
    return this.age;
};

function Employee(name, age, position) {
    this.position = position;
    Employee.prototype.superclass.call(this, name, age);
};

Employee.prototype.getPosition = function() {
    return this.position;
};

inheritance(Person, Employee);

var employee = new Employee('Jack', 26, 'engineer');
