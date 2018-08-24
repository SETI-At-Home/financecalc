// BUDGET CONTROLLER
var budgetController = (function () {

  var Expense = function (id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  var Income = function (id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  var data = {
    allItems: {
      exp: [],
      inc: []
    },
    totals: {
      exp: 0,
      inc: 0
    }
  };

  return {
    addItem: function (type, des, val) {
      var newItem;

      if (type === 'exp') {
        newItem = new Expense(ID, des, val);
      } else if (type === 'inc') {
        newItem = new Income(ID, des, val);
      }
    }
  };

})();

// UI CONTROLLER
var uiController = (function () {

  var DOMstrings = {
    inputType: '.add__type',
    inputDescription: '.add__description',
    inputValue: '.add__value',
    inputBtn: '.add__btn'
  };

  return {
    getInput: function () {

      var type = document.querySelector(DOMstrings.inputType).value; // inc or exp
      var description = document.querySelector(DOMstrings.inputDescription).value;
      var value = document.querySelector(DOMstrings.inputValue).value;

      return {
        type: type,
        description: description,
        value: value
      };

    },
    getDOMstrings: function () {
      return DOMstrings;
    }
  };

})();


// GLOBAL APP CONTROLLER
var controller = (function (budgetCtrl, UICtrl) {

  var setupEventListeners = function () {
    var DOM = UICtrl.getDOMstrings();

    document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function (event) {
      if (event.keyCode === 13 || event.which === 13) {
        ctrlAddItem();
      }
    });
  };


  var ctrlAddItem = function () {
    // 1. Get the field input data
    var input = UICtrl.getInput();

    // 2. Add the item to the budget controller

    // 3. Add the item to the UI

    // 4. Calculate the budget

    // 5. Display the budget on the UI

  };

  return {
    init: function () {
      console.log('Application has started.');
      setupEventListeners();
    }
  };

})(budgetController, uiController);

controller.init();