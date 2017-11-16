class: center, middle

# Otimizando e construindo seu front-end com Webpack

---

# Instalação

1. 'npm install webpack'

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

# Plugins

Plugins são a espinha do Webpack. Por dentro dele, todo funcionamento é feito em cima da mesma interface e sistema de plugins que terceiros usam. Isso quer dizer que plugins são a forma que ele nos dá de modificar qualquer comportamento particular da nossa aplicação. 

Essa arquitetura de plugins torna fácil tanto o uso, a customização e também a criação de outros plugins.

---
## Lista extensa de plugins

Esse Module Bundler tem um longo catálogo de plugins feitos tanto pelo core team quanto pela comunidade. 

### Exemplos de plugins

Que modificam seu código:
- Babel-Minify-Webpack-Plugin - Usa babel-minify para otimizar o código
- Uglifyjs-Webpack-Plugin - Plugin para usar o UgifyJs

Que modificam a compilação:
- Ignore-Plugin - Exclui módulos desejados dos bundles
- No-Emit-On-Errors-Plugin - Interrompe a produção de códigos quando um erro aocntece
- Provide-Plugin - Usa e busca por módulos sem precisar do uso de import/require

--- 

Que auxiliam em logs:
- Banner-Plugin - Adiciona um banner na compilação de cada plugin
- Webpack-Monitor - Captura estatísticas sobre o código e apresenta de uma forma interativa

Que modifica os bundles:
- Aggressive-Splitting-Plugin - Divide os bundles resultantes em alguns menores ainda (bom para http2)
- Extract-Text-Webpack-Plugin - Extrai texto (css) para arquivos separados

Outros: 
- Loader-Options-Plugin - Usado para migrar do webpack 1 para 2 
- Npm-Install-Webpack-Plugin - Instala dependências npm durante o desenvolvimento automáticamente

--- 

### Fazendo um plugin





http://webpackmonitor.com/img/overview.gif

https://camo.githubusercontent.com/acb0c92759578da7cbbdcd38a57fa682bedcc83b/68747470733a2f2f726f6163686a632e6769746875622e696f2f6d61696e332e676966