$(document).ready(function() {

  var operationQueue = [];

  var add = function(a, b) {
    var c = parseInt(a), d = parseInt(b);
    return c + d;
  };

  var multiply = function(a, b) {
    return a * b;
  };

  var divide = function(a, b) {
    if (b !== 0) {
      return a / b;
    } else {
      return "Err";
    }
  };

  var subtract = function(a, b) {
    return a - b;
  };

  var performOperation = function(operation, a, b){
    if(operation==="+"){
      return add(a, b);
    } else if(operation==="-") {
      return subtract(a, b);
    } else if(operation==="x") {
      return multiply(a, b);
    } else {
      return divide(a, b);
    }
  };

  $('.keys').click(function() {
    var value = $(this).html();
    if(value === "="){
      a = operationQueue.shift();
      operation = operationQueue.shift();
      b = operationQueue.shift();
      result = performOperation(operation, a, b);
      operationQueue.push(result);
    } else {
      operationQueue.push(value);
    }
    $( '.screen' ).html(operationQueue);
  });
});
