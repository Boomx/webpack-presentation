class: center, middle

# Otimizando e construindo seu front-end com Webpack

---

# Instalação

1. npm install webpack

2. webpack.config.js

>```javascript
>module.exports = {   
>   entry: './main.js',   
>   output: {     
>       filename: 'bundle.js'   
>   } 
>}; 
>```

3. módulos em js

>```javascript
>// main.js
>var calculator = require('./calculator');
>var element  = document.getElementById('hello-world');
>element.innerHTML = "Hello World " + calculator.sum(4,4);

>//calculator.js
>exports.sum = function(first,second){
>    return first+second;
>}
>```

---

# algo