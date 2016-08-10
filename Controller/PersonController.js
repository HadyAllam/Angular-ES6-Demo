app.controller('PersonController', function ($scope) {
    
    let id=0;
let personService=new PersonServices();
    
    $scope.GetPersons = function () {
        $scope.PersonList = personService.GetAll();
    }

    $scope.AddCancelNewPerson = function () {
       $scope.divAdd= !$scope.divAdd;
        $scope.ClearControls();
    }


    $scope.AddPerson = function () {
        if (!$scope.formPersons.$valid ) {
            return;
        }

        
        personService.AddPerson(id++,$scope.FirstName,$scope.LastName,$scope.Cost,$scope.Budget);
        $scope.ClearControls();
        $scope.AddCancelNewPerson();
        $scope.GetPersons();
        alert("Person Added Successfully");
    }

    $scope.UpdatePerson = function (data) {
        data.IsEditable = true;
    }

    $scope.Cancel = function (data) {
        data.IsEditable = false;
    }

    $scope.SavePerson = function (data) {
        if (data == null || data == undefined || data.Name == null || data.Name == undefined || data.IsNameExists) {
            return;
        }

        data.IsEditable = false;
        data.IsNameExists = false;
        
        var personObject = {};
        personObject.id=data.id;
         personObject.firstName=data.firstName;
         personObject.lastName=data.lastName;
         personObject.fullName=data.fullName;
         personObject.cost=data.cost;
         personObject.budget=data.budget;
         personObject.remainingBudget=data.remainingBudget;
        //personService.UpdatePerson(Person);
       alert("Person updated Successfully");
    }

    $scope.DeletePerson = function (data) {
        if (data == null || data == undefined) {
            return;
        }

        if (!confirm("Do you want to delete this Person?"))
            return;
        personService.DeletePerson(data);
        $scope.GetPersons();
                alert("Person deleted Successfully");
       
    }

    $scope.ClearControls = function () {
        $scope.FirstName = null;
        $scope.LastName = null;
        $scope.Cost = null;
        $scope.Budget = null;
        $scope.formPersons.$setUntouched();
        $scope.formPersons.$setPristine();
    }

    $scope.divAdd=false;
    $scope.IsNameExists = false;
    $scope.PersonList = [];
    $scope.GetPersons();
});