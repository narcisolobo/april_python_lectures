// Zip Arrays into Map
// Associative arrays (JS objects, Python dictionaries) are sometimes called maps because a key (string) maps to a value. Given two arrays, create an associative array (map) containing keys of the first, and values of the second. For arr1 = ["abc", 3, "yo"] and arr2 = [42, "wassup", true], return {"abc": 42, 3: "wassup", "yo": true}.

function zipArraysIntoMap(arr1, arr2) {
    // Create empty object
    const map = {};
    // Loop through first array, creating keys from the first array and assigning values of the second array to empty object
    for(let i = 0; i < arr1.length; i++) {
        map[arr1[i]] = arr2[i];
    }
    return map;
}

console.log(zipArraysIntoMap(["abc", 3, "yo"], [42, "wassup", true]))

// Invert Hash
// Associative arrays (JS objects, Python dictionaries) are also called hashes (we’ll learn why later). Build invertHash(assocArr) to convert hash keys to values, and values to keys. Example: given {"name": "Zaphod", "charm": "high", "morals": "dicey"}, return object {"Zaphod": "name", "high": "charm", "dicey": "morals"}.

function invertHash(pairs) {
    // Create empty object
    const inverted = {};
    // Loop through object and flip using bracket syntax
    for(pair in pairs) {
        inverted[pairs[pair]] = pair;
    }
    return inverted;
}

zaphod = {
    "name": "Zaphod",
    "charm": "high",
    "morals": "dicey"
};

console.log(invertHash(zaphod));

// Generate Coin Change
// Change is inevitable (especially when breaking a twenty).

// Make generateCoinChange(cents).
// Accept a number of American cents, compute and print how to represent that amount with smallest number of coins. Common American coins are pennies (1 cent), nickels (5 cents), dimes (10 cents), and quarters (25 cents). Return the optimal configuration of coins in an object.

// Example output, given generateCoinChange(94), return
// { quarters:3, dimes:1, nickels:1, pennies:4}

function generateCoinChange(cents){
    // Create the optimal coin change object with initial values of zero.
    const optimal = {
        quarters: 0,
        dimes: 0,
        nickels: 0,
        pennies: 0
    }
    // Set the quarters value by dividing cents by twenty-five.
    optimal.quarters = Math.floor(cents/25);
    // Deduct the worth of the quarters from cents
    cents -= optimal.quarters * 25;

    // Set the dimes value by dividing cents by ten.
    optimal.dimes = Math.floor(cents/10);
    // Deduct the worth of the dimes from cents
    cents -= optimal.dimes * 10;

    // Set the nickels value by dividing cents by five.
    optimal.nickels = Math.floor(cents/5);
    // Deduct the worth of the nickels from cents
    cents -= optimal.nickels * 5;

    // All that's left are pennies, so set that value.
    optimal.pennies = cents;

    // Return the modified object.
    return optimal;
}

console.log(generateCoinChange(94))