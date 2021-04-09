# Zip Lists into Dictionary
# Create a function that, given two lists, creates a dictionary containing keys of the first, and values of the second. For list1 = ["abc", 3, "yo"] and list2 = [42, "wassup", true], return {"abc": 42, 3: "wassup", "yo": true}.

def zip_into_dict(list1, list2):
    zipped = {}
    for key, value in zip(list1, list2):
        zipped[key] = value
    print(zipped)
    return zipped

zip_into_dict(["abc", 3, "yo"], [42, "wassup", True])

# Invert Hash
# Python dictionaries are also called hashes (we’ll learn why later). Create a function that, given a dictionary, converts hash keys to values, and values to keys. Example: given {"name": "Zaphod", "charm": "high", "morals": "dicey"}, return object {"Zaphod": "name", "high": "charm", "dicey": "morals"}.

def invert_hash(dict):
    inverted = {}
    for key, value in dict.items():
        inverted[value] = key
    print(inverted)
    return inverted

zaphod = {
    "name": "Zaphod",
    "charm": "high",
    "morals": "dicey"
}

invert_hash(zaphod)

# Generate Coin Change
# Create a function that accepts a number of American cents and computes how to represent that amount with smallest number of coins. Common American coins are pennies (1 cent), nickels (5 cents), dimes (10 cents), and quarters (25 cents). Return the optimal configuration of coins in an dictionary.

# Example output, given generate_coin_change(94), return
# { quarters:3, dimes:1, nickels:1, pennies:4}

def generate_coin_change(cents):
    optimal = {
        'quarters': 0,
        'dimes': 0,
        'nickels': 0,
        'pennies': 0
    }
    optimal['quarters'] = cents // 25
    cents -= optimal['quarters'] * 25
    optimal['dimes'] = cents // 10
    cents -= optimal['dimes'] * 10
    optimal['nickels'] = cents // 5
    cents -= optimal['nickels'] * 5
    optimal['pennies'] = cents
    print(optimal)
    return optimal

generate_coin_change(94)