import replaceEnd from "../src/replaceEnd.mjs";


const helloWorld = "Hello, world!";
const world = "world!";
const friends = "friends!";

const helloFriends = replaceEnd(helloWorld, world, friends);

console.log(helloWorld);
console.log(helloFriends);
