---
class: center, middle


# Bundlers e a sua História

---
class: middle


# No início era simples assim:

```html
<link rel="stylesheet" type="text/css" href="style.css">
<script src="index.js"></script>
```
---
class: middle

# Implementação do Javascript era igual em todos os Browsers? 

### É claro que não, era um inferno! Cada um de uma maneira diferente.

---
class: center, middle

## Até que chegou nosso salvador:

# O famoso JQuery

---
class: middle


# Agora, nosso projeto ficou assim:

```html
<link rel="stylesheet" type="text/css" href="style.css">
<link rel="stylesheet" type="text/css" href="home.css">
<script src="jquery.min.js"></script>  
<script src="jquery.date.plugin.js"></script>
<script src="jquery.scroll.plugin.js"></script>
<script src="jquery.outroqualquer.plugin.js"></script>
<script src="index.js"></script>
```

---
class: middle

# Mas, isso nos trouxe um grande problema, como nome conhecido: 
<br>  
  <h1 style="text-align: center;"> HTTP/1.1 </h1> 
  
---
class: middle

# Um exemplo de tarefa de concatenação: 


```javascript
// build-script.js
var scripts = [  
    'jquery.min.js',
    'jquery.some.plugin.js',
    'main.js'
].concat().uglify().writeTo('bundle.js');
```

# Que gerava essa maravilhosidade:

```html
  <script src="bundle.js"></script>
```
---
class: middle

# Problema das Globais e o surgimento dos módulos

---
class: middle

# Browserify e Automatizadores de tarefa

---
class: center , middle

# Finalmente o Webpack
