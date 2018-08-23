// BUDGET CONTROLLER
var budgetController = (function () {

})();

// UI CONTROLLER
var uiController = (function () {
  
})();

var controller = (function (budgetCtrl, UICtrl) {
  
  var z = budgetCtrl.publicTest(5);

  return {
    anotherPublic: function () {
      console.log(z);
    }
  };

})(budgetController, uiController);