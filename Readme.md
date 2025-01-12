# Introduction to Backend Development

## What is a Backend and Why Do We Need It?

Imagine your favorite online store. The frontend is what you see—the beautiful interface, buttons, images, and product listings. But how does it know which products to show, or how does it process your payment? This is where the backend comes in.

_Definition:_
The backend is the engine of a web application, working behind the scenes to:

- Store and organize data.
- Process user actions (like logging in or placing an order).
- Ensure the application runs smoothly and securely.

_Key Roles of a Backend:_

- Data Storage: Keeps all data organized in a database (e.g., user accounts, product details, etc.).
- Processing Requests: Handles tasks like verifying login credentials or calculating prices.
- Security: Ensures data is safe and accessible only to authorized users.
- Communication: Connects the frontend to databases, APIs, or other systems.

## Client-Server Architecture Basics

Think of a client-server architecture as a conversation:

- Client: The one asking questions (browser, mobile app).
- Server: The one answering the questions (backend).

_How it Works:_

The client sends a request to the server (e.g., "Give me all the available books").

_The server:_

- Reads the request.
- Retrieves the necessary data (from its own logic or a database).
- Sends back a response (e.g., "Here’s the list of books").
- The client displays this information to the user.

_Analogy:_

- The client is like a customer in a restaurant.
- The server is the waiter.
- The database is the kitchen where food (data) is prepared.
- The process of the waiter taking an order and delivering food is like the backend managing requests and responses.

_How Frontend and Backend Communicate:_

- Communication Medium: HTTP (HyperText Transfer Protocol)
- HTTP is like a language both frontend and backend understand.
- Frontend sends an HTTP request to the backend (e.g., "Show me all the posts").
- Backend replies with an HTTP response containing the requested data (e.g., JSON with post details).

_Parts of an HTTP Request:_

- URL: Address of the resource being requested.
- Example: https://example.com/api/posts.
- Method: Type of action to perform (GET, POST, etc.).
- Headers: Additional information (e.g., authentication tokens).
- Body: Data sent with the request (used in POST, PUT).

_Example Workflow:_

- User opens a web page.
- Frontend: "Hey server, I want to log in. Here’s my email and password."
  -> Backend:
- Checks if the email and password are correct.
- Sends a response: "Welcome back! Here’s your user info."

## Introduction to APIs and HTTP Methods

### What is an API?

API stands for Application Programming Interface.
It’s like a contract between two systems. The frontend says, “I’ll ask you these types of questions,” and the backend replies, “I’ll give you answers in this specific format.”

_Analogy:_

Imagine a waiter at a restaurant as the API. You (frontend) tell the waiter what you want to order. The waiter communicates this to the kitchen (backend) and brings back the prepared food. The waiter (API) ensures that the kitchen (backend) and you (frontend) speak the same language and follow the same rules.

_Why APIs?_

- They allow communication between different systems or applications.
- They ensure consistency—every frontend user gets data in the same structure.

### HTTP Methods Explained:

_GET:_

Purpose: To fetch data.
Example: When you visit a blog, the frontend sends a GET request to retrieve the blog posts.
Analogy: Asking for a menu at a restaurant.

_POST:_

Purpose: To send data to the server, usually to create something new.
Example: Submitting a registration form to sign up for an account.
Analogy: Placing an order at a restaurant.

_PUT:_

Purpose: To update an existing resource.
Example: Updating your profile picture.
Analogy: Changing an order before it’s prepared.

_DELETE:_

Purpose: To remove a resource.
Example: Deleting a post you made on a forum.
Analogy: Sending a dish back to the kitchen and asking it to be removed from your bill.

_Example of API in Action:_
You open a weather app, which shows today’s temperature.

Frontend: Sends a GET request to the weather API (e.g., "What’s the weather in London?").

Backend: Looks up the temperature for London in its database and responds with JSON:

```json
{
  "location": "London",
  "temperature": "12°C",
  "condition": "Cloudy"
}
```

Frontend: Displays this data to the user.

## Node.js Fundamentals

### What is Node.js?

Node.js is a runtime environment that allows you to run JavaScript code outside of a browser. Think of it as a way to use JavaScript on your computer or server instead of just in web pages.

### Why Node.js?

- Fast and Efficient: Built on Chrome’s V8 JavaScript engine, Node.js is designed to be fast.
- Non-blocking: Node.js uses an event-driven, non-blocking I/O model, making it ideal for building scalable applications.
- Single Programming Language: Use JavaScript for both frontend and backend, which simplifies development.
- Vast Ecosystem: With npm (Node Package Manager), you can access thousands of libraries to speed up development.

### Installing Node.js and Understanding npm

_How to Install Node.js:_

1. Go to the official Node.js website
   - Go to (Node.js)[https://nodejs.org/en/download/] Official Website.
   - Download the LTS version (Long-Term Support) for stability.
   - Follow the installation steps for your operating system.
2. Verify Installation:

   - Open your terminal and type:

   ```bash
   node -v
   ```

   This shows the installed Node.js version.

### What is npm?

npm stands for Node Package Manager. It’s a tool that comes with Node.js, allowing you to:

- Install libraries or packages.
- Manage dependencies for your project.

_Basic npm Commands:_

- Initialize a Project:

```bash
npm init
```

This creates a _package.json_ file to manage your project’s dependencies.

- Install a Package:

```bash
npm install <package-name>
```

Example: To install Express.js:

```bash
npm install express
```

Install Packages Globally:

```bash
npm install -g <package-name>
```

Use this for tools you want to use from anywhere on your computer.

## Basic JavaScript Concepts Review (If Needed)

Before diving into Node.js, ensure you’re comfortable with these concepts:

_Variables:_

```javascript
let name = "John"; // Changeable
const age = 30; // Constant
```

_Functions:_

```javascript
function greet() {
  return "Hello!";
}
console.log(greet());
```

_Objects and Arrays:_

```javascript
const user = { name: "John", age: 30 };
console.log(user.name); // Accessing properties

const fruits = ["apple", "banana"];
console.log(fruits[1]); // Accessing array items
```

_Asynchronous Programming:_
Using setTimeout or Promises to handle tasks that take time, like reading files or fetching data.

## Node.js Core Concepts

### Modules:

Modules are like Lego blocks for your application. You can create your own modules or use existing ones. Node.js allows you to organize code into modules for better readability and reusability.

Example:

```javascript
// math.js
function add(a, b) {
  return a + b;
}
module.exports = add;

// app.js
const add = require("./math");
console.log(add(2, 3)); // Outputs: 5
```

### Event Loop:

The event loop allows Node.js to perform non-blocking operations. It works by listening for events and executing callbacks as they occur.

Example:

```javascript
console.log("Start");
setTimeout(() => {
  console.log("Timeout finished");
}, 1000);
console.log("End");
```

```bash
Start
End
Timeout finished
```

### Asynchronous Programming:

Node.js heavily relies on asynchronous code to handle tasks like reading files or querying a database without blocking other operations.

Here’s how to create your first server using the built-in http module:

Example:

```javascript
const http = require("http");

// Create a server
const server = http.createServer((req, res) => {
  // Set the response header
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello, world!"); // Send response
});

// Listen on a port
server.listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
});
```

_How It Works:_

- Import the http module.
- Use http.createServer to create a server.
- Define how the server should respond to requests.
- Make the server listen on a specific port (e.g., 3000).

### File System Operations

Node.js provides a built-in fs module to work with the file system.

Common File System Tasks:

- Reading Files:

```javascript
const fs = require("fs");
fs.readFile("example.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
```

- Writing Files:

```javascript
fs.writeFile("example.txt", "Hello, world!", (err) => {
  if (err) throw err;
  console.log("File written successfully");
});
```

- Appending to a File:

```javascript
fs.appendFile("example.txt", "\nNew line added!", (err) => {
  if (err) throw err;
  console.log("Content appended");
});
```

- Deleting Files:

```javascript
fs.unlink("example.txt", (err) => {
  if (err) throw err;
  console.log("File deleted");
});
```

### Understanding package.json and node_modules

_package.json:_

It’s the configuration file for your Node.js project, containing:

- Project metadata (name, version).
- List of dependencies.
- Scripts to run commands (e.g., npm start).

_node_modules:_
A folder where all the installed packages are stored. Never modify it directly; instead, use npm to manage dependencies.

## Express.js Framework

### Why Use Express vs Plain Node.js?

_Challenges with Plain Node.js:_

While Node.js provides basic tools for creating servers, it can be repetitive and time-consuming to:

- Handle routing (managing different URLs and HTTP methods).
- Process requests and responses efficiently.
- Deal with errors and middleware setup.

_Benefits of Express.js:_

- Simplified Routing: Express makes it easy to define routes (URLs) for your app.
- Middleware Support: It allows you to use middleware to process requests, like handling authentication or logging.
- Flexibility: Works well with databases, templating engines, and other tools.
- Popularity: A large community means lots of tutorials, plugins, and support.

### Setting Up a Basic Express Server

_Installation:_

- Ensure Node.js is installed.
  - Install Express using npm:

```bash
npm install express
```

- Creating Your First Express Server:

```javascript
const express = require("express");
const app = express(); // Initialize Express

// Define a route
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// Start the server
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
```

_What’s Happening?:_

- require('express'): Import the Express library.
- app.get('/'): Define a route for the root URL (/) with a callback function to handle requests.
- app.listen(3000): Start the server on port 3000.

### Routing and Middleware Concepts

_What is Routing?_

Routing determines how an application responds to specific HTTP requests (GET, POST, etc.) made to a particular URL. Express provides several methods for defining routes, including app.get(), app.post(), app.put(), app.delete(), and more.

_Example of Routing:_

```javascript
app.get("/about", (req, res) => {
  res.send("About Page");
});

app.post("/submit", (req, res) => {
  res.send("Form submitted");
});
```

_What is Middleware?_

Middleware functions are functions that have access to the request object (req), the response object (res), Middleware functions are like filters or tools that process requests before they reach the route handler.

_Built-in Middleware in Express:_

Static File Serving: Serve HTML, CSS, or JS files from a folder.

```javascript
app.use(express.static("public"));
// Now you can access files in the 'public' folder
```

_Parsing JSON:_

```javascript
app.use(express.json());
// Parses incoming JSON data from requests
```

### Request and Response Objects

_What are req and res?_

- req (request): Contains information about the incoming request (URL, query parameters, headers, etc.).
- res (response): Allows you to send a response back to the client (text, JSON, HTML, etc.). Provides methods to send data back to the client.

```javascript
app.get("/user", (req, res) => {
  console.log(req.query); // Access query parameters
  res.send("User information");
});
```

### Handling Different HTTP Methods

Express makes it easy to define routes for various HTTP methods:

_GET:_

```javascript
app.get("/products", (req, res) => {
  res.send("List of products");
});
```

_POST:_

```javascript
app.post("/products", (req, res) => {
  res.send("Product added");
});
```

_PUT:_

```javascript
app.put("/products/:id", (req, res) => {
  res.send(`Product with ID ${req.params.id} updated`);
});
```

_DELETE:_

```javascript
app.delete("/products/:id", (req, res) => {
  res.send(`Product with ID ${req.params.id} deleted`);
});
```

### Static File Serving

To serve static files like images, CSS, or JavaScript, you can use Express’s static middleware.

- Create a folder named public and add an index.html file inside it.
- Add this to your code:

```javascript
app.use(express.static("public"));
```

Now, visiting http://localhost:3000/index.html will show the index.html file in your browser.

### Error Handling in Express

To handle errors, you can define error-handling middleware:

Example:

```javascript
app.use((err, req, res, next) => {
  console.error(err.stack); // Log the error
  res.status(500).send("Something broke!");
});
```

_How It Works:_

- If an error occurs, Express skips normal route handlers and jumps to the error-handling middleware.
- You can log errors, send user-friendly messages, or perform any cleanup tasks.

  ## APIs and REST

_ What is an API?_

API (Application Programming Interface): A way for software applications to communicate with each other. APIs allow different systems to exchange data and perform actions. APIs can be used to build web applications, mobile apps, and even IoT devices. APIs are typically built using HTTP (Hypertext Transfer Protocol) and JSON (JavaScript Object Notation). APIs can be categorized into two types: REST (Representational State of Resource) and SOAP (Simple Object Access Protocol). REST APIs are more popular and widely used. SOAP APIs are typically used for enterprise-level applications. It defines a set of rules (endpoints, methods, and responses) for interaction.

_What is REST?_

REST (Representational State of Resource) is an architectural style for designing networked applications. It is based on resources identified by URIs, manipulated using a fixed set of operations. REST is an acronym for Representational State of Resource. REST is an architectural style for designing networked applications.

_What is RESTful API?_

A RESTful API is an application program interface (API) that uses HTTP requests to interact with a server to read, create, update, or delete resources on the server following the REST architectural style.

_What is RESTful API Design?_

RESTful API design is the process of designing a RESTful API. It involves defining the resources, endpoints, methods, and responses for the API. RESTful API design is based on the REST architectural style.

_What is SOAP_
SOAP (Simple Object Access Protocol) is a protocol for exchanging structured information in the implementation of web services. SOAP is a protocol for exchanging structured information in the implementation of web services.

Real-World Example (REST):
Imagine a restaurant (Again):

- The frontend is the menu you look at.
- The backend is the kitchen preparing your order.
- The API is the waiter who takes your order to the kitchen and brings your food back.

_What is REST?_

REST (Representational State Transfer): A set of architectural principles for designing APIs. RESTful APIs use HTTP methods and URLs to perform operations on resources.

_Key Principles of REST:_

- Stateless: Every request from a client to a server must contain all the information needed. The server does not remember previous requests.
- Resources: Data is treated as resources (e.g., users, products) and is accessed via endpoints like /users or /products.

_HTTP Methods:_

- GET: Retrieve data.
- POST: Create new data.
- PUT: Update existing data.
- DELETE: Remove data.

Uniform Interface: Use clear and consistent URLs for resources:

`/products` → List all products.
`/products/1` → Get details of product with ID 1.
`/products/1/orders` → Get orders for product with ID 1.
`/products/1/orders/1` → Get details of order with ID 1 for product with ID 1.

### Creating API Endpoints in Express

Example:
Here’s how to set up a RESTful API for managing a list of tasks:

```javascript
const express = require("express");
const app = express();

app.use(express.json()); // Middleware to parse JSON

let tasks = [
  { id: 1, title: "Learn Node.js", completed: false },
  { id: 2, title: "Build an API", completed: false },
];

// GET: Retrieve all tasks
app.get("/tasks", (req, res) => {
  res.json(tasks);
});

// GET: Retrieve a specific task
app.get("/tasks/:id", (req, res) => {
  const task = tasks.find((t) => t.id === parseInt(req.params.id));
  if (!task) return res.status(404).send("Task not found");
  res.json(task);
});

// POST: Add a new task
app.post("/tasks", (req, res) => {
  const newTask = {
    id: tasks.length + 1,
    title: req.body.title,
    completed: false,
  };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

// PUT: Update a task
app.put("/tasks/:id", (req, res) => {
  const task = tasks.find((t) => t.id === parseInt(req.params.id));
  if (!task) return res.status(404).send("Task not found");

  task.title = req.body.title;
  task.completed = req.body.completed;
  res.json(task);
});

// DELETE: Remove a task
app.delete("/tasks/:id", (req, res) => {
  const taskIndex = tasks.findIndex((t) => t.id === parseInt(req.params.id));
  if (taskIndex === -1) return res.status(404).send("Task not found");

  tasks.splice(taskIndex, 1);
  res.status(204).send();
});

// Start the server
app.listen(3000, () => {
  console.log("API running at http://localhost:3000");
});
```

### Route Parameters and Query Strings

_Route Parameters:_

Dynamic parts of a URL used to identify resources.

Example: /tasks/:id

```javascript
app.get("/tasks/:id", (req, res) => {
  const id = req.params.id; // Access route parameter
  res.send(`Task ID: ${id}`);
});
```

_Query Strings:_

Additional parameters appended to the URL.

Example: /tasks?completed=true

```javascript
app.get("/tasks", (req, res) => {
  const completed = req.query.completed; // Access query parameter
  res.send(`Tasks with completed = ${completed}`);
});
```

## CORS and Security Basics

### What is CORS?

CORS (Cross-Origin Resource Sharing) is a security feature in browsers that blocks requests made from a different domain or port.

_Enabling CORS in Express:_

Install the cors package:

```bash
npm install cors
```

Add it to your app:

```javascript
const cors = require("cors");
app.use(cors());
```

_Security Best Practices:_

- Use environment variables to store sensitive information (e.g., API keys).
- Validate and sanitize user input to prevent attacks like SQL Injection.
- Use HTTPS in production to encrypt data in transit.

## MongoDB Basics

### What is MongoDB?

MongoDB is a NoSQL database that stores data in a flexible, JSON-like format called BSON (Binary JSON). Unlike relational databases (like MySQL or PostgreSQL), it doesn’t use tables, rows, or columns. Instead, it organizes data into collections and documents.

_Key Features of MongoDB_

- Flexible Schema:
  No fixed structure for data; each document can have different fields.
- Scalable:
  Handles large amounts of data and high traffic easily.
- Fast:
  Querying is optimized for unstructured or semi-structured data.
- Rich Query Language:
  Supports powerful queries like filters, aggregations, and joins.
- Cross-Platform:
  Runs on Windows, macOS, and Linux.

### Key Concepts

_Database:_
A container for collections.

Example: mydatabase

Collection:
A group of related documents (like a table in SQL).
Example: users, products

Document:
A record in the database, stored as a JSON-like object.
Example:

```json
{
  "name": "Alice",
  "age": 25,
  "email": "alice@example.com"
}
```

### Basic CRUD Operations

1. Create (Insert Data)
   Insert a single document:

```javascript
db.users.insertOne({
  name: "Alice",
  age: 25,
  email: "alice@example.com",
});
```

Insert multiple documents:

```javascript
db.users.insertMany([
  { name: "Bob", age: 30, email: "bob@example.com" },
  { name: "Charlie", age: 35, email: "charlie@example.com" },
]);
```

2. Read (Retrieve Data)
   Retrieve all documents:

```javascript
db.users.find();
```

Retrieve documents with a filter:

```javascript
db.users.find({ age: { $gt: 25 } }); // Find users older than 25
```

Retrieve specific fields:

```javascript
db.users.find({}, { name: 1, email: 1 }); // Show only 'name' and 'email'
```

3. Update
   Update a single document:

```javascript
db.users.updateOne(
  { name: "Alice" }, // Filter
  { $set: { age: 26 } } // Update
);
```

Update multiple documents:

```javascript
db.users.updateMany(
  { age: { $lt: 30 } }, // Filter
  { $set: { status: "active" } } // Update
);
```

4. Delete
   Delete a single document:

```javascript
db.users.deleteOne({ name: "Alice" });
```

Delete multiple documents:

```javascript
db.users.deleteMany({ age: { $lt: 30 } });
```

### MongoDB Atlas for Cloud Deployment

_What is MongoDB Atlas?_
MongoDB Atlas is a cloud-hosted database service that allows you to easily deploy, manage, and MongoDB Atlas is a cloud-based database service that allows you to host your MongoDB databases online. Helps scale MongoDB databases in the cloud.

_Why use MongoDB Atlas?_

- Easy deployment and management.
- Scalability and high availability.
- Security and compliance.
- Cost-effective.

_Steps to Use MongoDB Atlas:_

- Create an Account:
- Sign up at MongoDB Atlas.
- Create a Cluster:
  - Click "Create Cluster" and choose a free tier.
  - Connect to the Cluster:
- Use the connection string provided (e.g., mongodb+srv://<username>:<password>@cluster0.mongodb.net/mydatabase).
  - Use in Code:
    - Install the MongoDB driver for Node.js:

```bash
npm install mongodb
```

Connect to the database:

```javascript
const { MongoClient } = require("mongodb");
const uri = "your-mongodb-connection-string";

const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
  } finally {
    await client.close();
  }
}

run().catch(console.dir);
```

## Mongoose ODM

### What is Mongoose?

Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It provides a structured way to define schemas for your data, perform validations, and interact with MongoDB using a more developer-friendly syntax.

_Why Use Mongoose?_

- Schema Design:
  Mongoose allows you to define strict schemas for collections, ensuring consistent data.
- Validation:
  Automatically validate data before saving it to the database.
- Built-in Methods:
  Provides helper methods to simplify querying, updating, and deleting data.
- Middleware:
  Execute code before or after certain database operations (e.g., pre-save hooks).
- Relationships:
  Simplify references between collections.

### Installing Mongoose

To use Mongoose in your Node.js project:

```bash
npm install mongoose
```

Connecting to MongoDB
Here’s how to establish a connection to MongoDB using Mongoose:

```javascript
const mongoose = require("mongoose");

// Replace with your MongoDB connection string
const uri = "mongodb://localhost:27017/mydatabase";

mongoose
  .connect(uri, {
    useNewUrlParser: true, // remove this coz it's currently deprecated
    useUnifiedTopology: true, // remove this coz it's currently deprecated
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Failed to connect to MongoDB:", err));
```

### Defining a Schema

A schema in Mongoose defines the structure of a document.

```javascript
const { Schema, model } = require("mongoose");

// Define a schema for a User
const userSchema = new Schema({
  name: { type: String, required: true }, // Name is required
  age: { type: Number, min: 0 }, // Age must be a positive number
  email: { type: String, unique: true }, // Email must be unique
  createdAt: { type: Date, default: Date.now }, // Default to current date
});
// Create a model
const User = model("User", userSchema);
```

### Basic CRUD Operations with Mongoose

1. Create (Insert Data)

```javascript
   async function createUser() {
   const user = new User({
   name: 'Alice',
   age: 25,
   email: 'alice@example.com',
   })try {
   const savedUser = await user.save(); // Save to the database
   console.log('User created:', savedUser);
   } catch (err) {
   console.error('Error creating user:', err.message);
   }}
   createUser();
```

2. Read (Retrieve Data)

Retrieve all users:

```javascript
async function getUsers() {
const users = await User.find(); // No filter retrieves all documents
console.log('Users:', users);
}

getUsers();
Retrieve with filters:
javascript

async function findUserByName(name) {
const user = await User.findOne({ name });
console.log('User found:', user);
}

findUserByName('Alice');
```

3. Update
   Update a single document:

```javascript
async function updateUserEmail(userId, newEmail) {
  const updatedUser = await User.findByIdAndUpdate(
    userId,
    { email: newEmail },
    { new: true } // Return the updated document
  );
  console.log("Updated User:", updatedUser);
}

updateUserEmail("userIdHere", "newemail@example.com");
```

4. Delete
   Delete a user:

```javascript
async function deleteUser(userId) {
  const deletedUser = await User.findByIdAndDelete(userId);
  console.log("Deleted User:", deletedUser);
}

deleteUser("userIdHere");
```

5. Data Validation
   Mongoose lets you enforce rules on your schema fields. For example:

```javascript
const userSchema = new Schema({
  name: { type: String, required: true }, // Name is required
  age: { type: Number, min: 18, max: 65 }, // Age must be between 18 and 65
  email: {
    type: String,
    match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, // Regular expression for email
  },
});
```

### Middleware (Hooks)

Mongoose supports middleware, which lets you run functions before or after database operations.

Example: Pre-Save Middleware

```javascript
userSchema.pre("save", function (next) {
  console.log("Before saving:", this);
  next(); // Call next to proceed
});
```

### Relationships Between Collections

Mongoose allows you to reference documents in other collections using ObjectId.

Example: Referencing Another Collection

```javascript
const postSchema = new Schema({
  title: { type: String, required: true },
  author: { type: Schema.Types.ObjectId, ref: "User" }, // Reference to User
});

const Post = model("Post", postSchema);
// Populate the author field
async function getPostsWithAuthors() {
  const posts = await Post.find().populate("author");
  console.log("Posts with authors:", posts);
}

getPostsWithAuthors();
```

### Advanced Queries

Sorting:

```javascript
User.find().sort({ age: -1 }); // Sort by age descending
```

Pagination:

```javascript
User.find().skip(10).limit(10); // Skip the first 10 and limit to 10 results
```

Aggregation:

```javascript
User.aggregate([{ $group: { _id: "$age", count: { $sum: 1 } } }]);
```
