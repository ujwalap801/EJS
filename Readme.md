# EJS (Embedded JavaScript)

EJS is a simple templating language that allows you to generate HTML markup with plain JavaScript. It's commonly used with Node.js to embed JavaScript code within HTML, enabling dynamic rendering of pages.

## Features

- **Embedding JavaScript**: You can include JavaScript logic directly inside HTML using `<% %>` tags for control flow (like loops and conditions) and `<%= %>` for outputting variables.
  
- **Simple to Use**: The syntax is easy to understand for anyone familiar with JavaScript and HTML.
  
- **Supports Partials**: EJS allows the use of partials, which are reusable pieces of HTML that can be included in multiple files (like headers and footers).

- **Fast Rendering**: EJS is designed to be lightweight and fast, ideal for server-side rendering in web applications.

---

### Example Usage

To install EJS in your Node.js project, use:

```bash
npm install ejs


## Setting up the View Engine in Express

In an Express.js application, you can set the templating engine using the `app.set()` method. Here's an explanation of how to set up EJS as the view engine.

### Code Example

```javascript
app.set('view engine', 'ejs');



### Explanation
app.set('view engine', 'ejs'):
This line configures Express to use EJS as the templating (or "view") engine.
It allows Express to render .ejs files into HTML whenever res.render() is called.

## view engine:
This is a key in the Express application settings. It tells Express which templating engine to use for rendering views.

## ejs:
The 'ejs' refers to the EJS (Embedded JavaScript) templating engine. By specifying 'ejs', Express knows to render .ejs files for HTML generation.


## Setting the Views Directory in Express

To specify the location of your views (template) files in an Express.js application, you can use the `app.set()` method in combination with Node.js's `path` module.

### Code Example

```javascript
const path = require("path");
app.set("views", path.join(__dirname, "/views"));


## path.join(__dirname, "/views"):

The path.join() function from Node.js's path module combines multiple segments of a file path. This ensures that the path is formed correctly across different operating systems.
__dirname is a global variable in Node.js that represents the directory name of the current module (the file in which this code is written).
This code constructs an absolute path to the views directory, assuming it is located in the same folder as your current project.

## app.set("views", ...):
This line tells Express where to look for your view (template) files.
By setting the views directory to path.join(__dirname, "/views"), you are specifying that all the EJS templates (or other templating engine files) are located inside the /views folder.

## Now this EJS folder is in downloads to run this folder drom downloads we can use nodemon EJS/index.js