class Person {

    constructor(id,firstName,lastName,cost,budget) {    
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.cost = cost;
        this.budget = budget;
        
        let name=() => `${firstName} ${lastName}`;
        this.fullName= name();
        
        let calculateBudget= (total,value) => {
			let result = total - value;
			return result;
		};
        
        this.remainingBudget= calculateBudget(budget,cost);
    }
    
        
    GetCurrentPersonObject()
     {
         let personObject={};
         personObject.id=this.id;
         personObject.firstName=this.firstName;
         personObject.lastName=this.lastName;
         personObject.fullName=this.fullName;
         personObject.cost=this.cost;
         personObject.budget=this.budget;
         personObject.remainingBudget=this.remainingBudget;
         return  personObject;
         
     }

    set name(newValue) {
        this._name = newValue;
    }
}