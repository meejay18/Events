const eventEmitter = require("events");
const myEmitter = new eventEmitter();

console.clear();
myEmitter.on("Shoe collection", () => {
  console.log("Shoe collection");
});
myEmitter.on("Shoe collection", () => {
  console.log("Belt collection");
});

myEmitter.on("Shoe collection", (Brogues) => {
  console.log(`There are ${Brogues} brown brogues left in stock  `);
});

myEmitter.emit("Shoe collection", 20);
