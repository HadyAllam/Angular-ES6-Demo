"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Person = function () {
    function Person(id, firstName, lastName, cost, budget) {
        _classCallCheck(this, Person);

        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.cost = cost;
        this.budget = budget;

        var name = function name() {
            return firstName + " " + lastName;
        };
        this.fullName = name();

        var calculateBudget = function calculateBudget(total, value) {
            var result = total - value;
            return result;
        };

        this.remainingBudget = calculateBudget(budget, cost);
    }

    _createClass(Person, [{
        key: "GetCurrentPersonObject",
        value: function GetCurrentPersonObject() {
            var personObject = {};
            personObject.id = this.id;
            personObject.firstName = this.firstName;
            personObject.lastName = this.lastName;
            personObject.fullName = this.fullName;
            personObject.cost = this.cost;
            personObject.budget = this.budget;
            personObject.remainingBudget = this.remainingBudget;
            return personObject;
        }
    }, {
        key: "name",
        set: function set(newValue) {
            this._name = newValue;
        }
    }]);

    return Person;
}();