var name = "lukas";
message = `Hello, ${name}! Welcome to JavaScript.`;

console.log(message);
name = name.toUpperCase();
console.log(name);

(message.length>10) ? console.log("Yes, the message has more than 10 characters") : console.log("No, the message does not have more than 10 characters");

(message.includes("JavaScript")) ? console.log("Yes, it contains the word JavaScript") : console.log("No, it does not contains the word JavaScript");