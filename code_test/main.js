var calculator = require('./calculator');
var element  = document.getElementById('hello-world');
element.innerHTML = "Hello World " + calculator.sum(4,4);
