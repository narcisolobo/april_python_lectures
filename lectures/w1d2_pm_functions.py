def greet(time_of_day, first_name):
    print(f"Good {time_of_day}, {first_name}!")

greet("afternoon", "Mr. Hopper")

# Create a function named my_function.
def my_function():
    print("Spam and eggs inside a function.")

# Execute a function named my_function.
my_function()

# Inside a function with two parameters, print the first parameter.
def my_second_function(param1, param2):
    print(param1)

# Let the function return the x parameter + 5.
def plus_five(x):
    return x + 5

print(plus_five(9))

# If you do not know the number of arguments that will be passed into your function, there is a prefix you can add in the function definition, which prefix?

def my_ukuleles(*ukes):
    print(f"The oldest ukulele I have is {ukes[1]}")

my_ukuleles("Kala", "Malakai", "Pete Howlett")

def add_unknown_nums(*nums):
    sum = 0
    for num in nums:
        sum += num
    return sum

print(add_unknown_nums(1, 2, 34, 5, 6, 78))