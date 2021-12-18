var Restaurant = /** @class */ (function () {
    function Restaurant(food_id, name, description, cost) {
        this.food_id = food_id;
        this.name = name;
        this.description = description;
        this.cost = cost;
    }
    Restaurant.prototype.display = function () {
        var strDisplay = ' Food ID : ${this.food_id} ,Name:${this.name} \n Description : ${this.description} \n COST : ${this.cost} ';
        console.log(strDisplay);
    };
    return Restaurant;
}());
var rsObj = new Restaurant(101, "Paneer", "Hot", 2000);
rsObj.display();
var Student = /** @class */ (function () {
    function Student(code, name) {
        this.studCode = code;
        this.studName = name;
    }
    Object.defineProperty(Student.prototype, "display1", {
        get: function () {
            return ("My unique code: " + this.studCode + ", my name: " + this.studName + ".");
        },
        enumerable: false,
        configurable: true
    });
    return Student;
}());
var student1 = new Student(1, "JoeRoot");
console.log(student1.display1);
