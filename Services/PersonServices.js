class PersonServices {
    
constructor() {
				this.personObject=[];
			}


GetAll()
     {
         return this.personObject;
     }

 AddPerson(id,firstName,lastName,cost,budget)
     {
         let personData = new Person(id,firstName,lastName,cost,budget);
         this.personObject.push(personData.GetCurrentPersonObject());
     }

 EditPerson(personData)
     {
         //let personData = new Person(id,firstName,lastName,cost,budget);
         //this.personObject.push(personData.GetCurrentPersonObject());
     }

DeletePerson(personData)
     {
        for(var i = 0; i < this.personObject.length; i++) {
            if(this.personObject[i].id==personData.id) {
                this.personObject.splice(i, 1);
            }
        }
     }
}