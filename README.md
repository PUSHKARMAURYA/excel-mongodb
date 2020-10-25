# excel-mongodb

`excel-mongodb` module is a comprehensive nodejs package to handle xls or xlsx file  upload  and to convert into your mongoDB database collection (with or without specifyin fie path ) . It can be used as node.js library or in browser. Below are some features:
you
*  Work with millions of lines of data
*  Upload file Easily
*  Converts excel data to mongoDB database collection
*  Blazing fast
*  Give flexibility to developer with 'pre-defined' helpers



# excel-mongodb online 

[Here](http://dataeasy.herokuapp.com) is a free online excel/csv to mongodb convert service utilizing latest `excel-mongodb` module.

# Menu

* [Quick Start](#quick-start)
* [Browser Usage](#browser-usage)
* [Contribution](#contribution)

# Quick Start

* [As Library](#library)

## Library

### Installation

```
npm i --save excel-mongodb
```

### From excel file to mongodb (Without path to file)

```js 
// No usage of multer and direct upload 

var excel=require('excel-mongodb')

// At post route of file upload 

app.post("/upload",excel.uploads('<name of input tag containing file'>),function(req,res){

excel.creation(req,<'url of your database connection'>,<'name of collection to be created'>)

})

```

### From excel file to mongodb (With path to file)

```js 
// Usage of multer  and multer storage 

var excel=require('excel-mongodb')

// At post route of file upload 

app.post("/upload",<'your multer middleware'>,function(req,res){

excel.creation(req,<'url of your database connection'>,<'name of collection to be created'>)

})

```

# Contribution

Very much appreciate any types of donation and support. 

## Code

`excel-mongodb` follows github convention for contributions. Here are some steps:

1. Fork the repo to your github account
2. Checkout code from your github repo to your local machine.
3. Make code changes and don't forget add related tests.
4. Run `npm test` locally before pushing code back.
5. Create a [Pull Request](https://help.github.com/articles/creating-a-pull-request/) on github.
6. Code review and merge
7. Changes will be published to NPM within next version.



# Browser Usage

To use `csvtojson` in browser is quite simple. There are two ways:

**1. Embed script directly into script tag**

There is a pre-built script located in `browser/csvtojson.min.js`. Simply include that file in a `script` tag in `index.html` page:

```html
<script src="node_modules/csvtojson/browser/csvtojson.min.js"></script>
<!-- or use cdn -->
<script src="https://cdn.rawgit.com/Keyang/node-csvtojson/d41f44aa/browser/csvtojson.min.js"></script>
```
then use a global `csv` function
```html 
<script>
csv({
	output: "csv"
})
.fromString("a,b,c\n1,2,3")
.then(function(result){

})
</script>
```

