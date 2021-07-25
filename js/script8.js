1.

let food = new Map([
["apple", "tasty"],
["broccoli", "nasty"],
["pumpkin", "useful"]
]);
    food.forEach((key) => {
        console.log(`${key} - x`);
    });
    food.forEach((value) => {
        console.log(` ${value} - y`);
    });

2. 

let food = new Map([
    ["apple", "tasty"],
    ["broccoli", "nasty"],
    ["pumpkin", "useful"]
]);
food.forEach((value, key) => {
    console.log(`${key} - x = ${value} - y`);
});