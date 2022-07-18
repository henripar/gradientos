<h1 align="center">
  <br>
  <a href="https://www.gradientos.app"><img src="src/assets/logo.png" alt="Gradientos" width="140"></a>
  <br>
  Gradientos
  <br>
</h1>
<h4 align="center">Gradientos makes it easy to choose gradients.</h4>

<p align="center">
<a align="center" href="https://www.gradientos.app">gradientos.app</a>
  
</p>
   
<p align="center">
 <img alt="Netlify status" src="https://api.netlify.com/api/v1/badges/d1b8c138-ec23-49af-aa33-dde2dde48e4c/deploy-status" >
  <img alt="GitHub language" src="https://img.shields.io/github/languages/top/henripar/gradientos">
 <img alt="GitHub package.json version" src="https://img.shields.io/github/package-json/v/henripar/gradientos">
  <img alt="GitHub" src="https://img.shields.io/github/license/henripar/gradientos">
</p>


<p align="center">
  <a href="#about">About</a> •
  <a href="#contributing">Contributing</a> •
  <a href="#local-development">Local Development</a> 
</p>

## About

Gradientos is a web app which can help you choose gradients by simply showing your selected gradients on a live demo website with some common UI elements. You can quickly see how the gradient actually looks on a website. Play around and create your own gradient or select one from our collection.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

### Add Gradient

To add your own gradient to the Gradientos collection: add it in the `gradients.json` file located in `src/data` directory.

#### Format

````json
{
"name": "Creative gradient name",
"colors": ["#fff", "#000"]
}
````

**Only 2 color gradients can be accepted.**

## Local Development 

### Install dependencies

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

