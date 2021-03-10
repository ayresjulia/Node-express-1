### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?
  - callbacks (allows developer to pass a function to be executed after asynchronous code has finished)
  - promises (allows developer to chain together promises using .then(), and easily catch errors using .catch())
  - async / await (newer(ES2017) way to handle asynchronous code, any function can be declared as async, they always return promises)

- What is a Promise?
  - if a function takes longer to execute, we mark it as asynchronous (we "Promise" to get a result from it ) without stopping other written code. 

- What are the differences between an async function and a regular function?
  - regular function is always executed in sequence (each statement is waiting for previous one to execute), while async function doesn't have to wait for response and stop the code from running. We need async functions for smoother run of the app, and reduced waiting time for the user.

- What is the difference between Node.js and Express.js?
  - Express.js is framework that is based on Node.js. It uses principles of Node and adds user-friendly features.

- What is the error-first callback pattern?
  - Node will check if there is an error first, otherwise will proceed with executing the rest of the code.

- What is middleware?
  - It is code that runs between the time when the server gets the request and the response the server sends out, ex. checking user information before allowing access to the page

- What does the `next` function do?
  - it makes sure the app can proceed to the next route

- What does `RETURNING` do in SQL? When would you use it?
  - return is used to stop a function from executing. if a function doesn't use conditionals, return word can be iliminated and the result will be the same. with conditional statements, return is needed to stop the code from running if a condition was met ex if(something){return "something"}else{"do something"}

- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)

```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```

  - the code is missing axios : should be await axios.get("...") on every line
  - naming can have some issues, since there could be multiple matt users in the system
  - as for structure, if developer wants to get all users, then I would map through all users like so: 
  
```js
  const response = await axios.get("base url here")
  let users = response.data.map(user => name: user.name)
  return users
```

  - if developer wants to get only those three users, I would still separate base url for convenience