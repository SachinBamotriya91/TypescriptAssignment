class Restaurant{
    food_id:number;
    name:string;
    description:string;
    cost:number;
    
    constructor(food_id:number,name:string,description:string,cost:number){
        this.food_id=food_id;
        this.name=name;
        this.description=description;
        this.cost=cost;
    }
    
     display():void{
        var strDisplay =' Food ID : ${this.food_id} ,Name:${this.name} \n Description : ${this.description} \n COST : ${this.cost} ';
        console.log(strDisplay);

    }
}
var rsObj=new Restaurant(101,"Paneer","Hot",2000);
rsObj.display();

class Student {  
    public studCode: number;  
    private studName: string;  
    
    constructor(code: number, name: string){  
    this.studCode = code;  
    this.studName = name;  
    }  
     
       getdisplay1() :string{  
    return (`My unique code: ${this.studCode}, my name: ${this.studName}.`);  
    
}  
    }  
      
    var student1 = new Student(1, "JoeRoot");  
    console.log(student1.getdisplay1());