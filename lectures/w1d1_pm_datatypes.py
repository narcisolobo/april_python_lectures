# Python Data Types

# JS Numbers with and/or without decimal points are all considered numbers - the same data type

# In Python we have two different data types for numbers
# Decimal point numbers are called floats
# Numbers without decimals are called integers

x = 10.0
print(type(x))

# && in JavaScript is "and" in Python
# || in JavaScript is "or" in Python

# In JS, there are ++ and -- operators.
# In Python they do not exist.

i = 1
i += 2
print(i)

i -= 1
print(i)

# *=, /=

num = 5
num = num * 2 # the same as num *= 2
print(num)

print(10/2)
print(10//2)

dividend = 10/2
print(type(dividend))

int_dividend = 10//2
print(type(int_dividend))

# Strings
name = "denys glukhovskyi"
# name[0] = "D"
# print(name)

print(name[-1])
print(name[-3])

print(len(name))

print(name[6:17])

print("One line\nSecond line.")

print(f"Hello {name}!")

word = "Python"
words = " is cool."
print(word + words)

print("*"*20)

is_sleeping = True

# Compound Datatype
# Lists, Dictionaries, Tuples, Sets

my_list = [1, 2, 3, 4, 5, 5, 2, 3, 1, 5]
my_set = set(my_list)
print(f"This is a set of my_list: {my_set}")

student = {
    "first_name": "William",
    "last_name": "Corbett"
}

students = [
    {
        "first_name": "William",
        "last_name": "Corbett"
    },
    {
        "first_name": "Todd",
        "last_name": "Hopper"
    },
    {
        "first_name": "Almaz",
        "last_name": "Buran"
    }
]

# print(students[2]["first_name"])

for student in students:
    print(student['first_name'], student['last_name'])

# for i in range(len(students)):
#     print(students[i]['first_name'])