import replaceEnd from "../src/replaceEnd.mjs";


replaceEnd.polyfill();

const helloWorld = "Hello, world!";
const world = "world!";
const friends = "friends!";

const helloFriends = helloWorld.replaceEnd(world, friends);

console.log(helloWorld);
console.log(helloFriends);
