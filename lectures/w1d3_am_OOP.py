# The Four Pillars of Object-Oriented Programming

# 1. Encapsulation
    #  The implementation and state of each object are privately held inside a defined boundary, or class. Other objects do not have access to this class or the authority to make changes but are only able to call a list of public functions, or methods. This characteristic of data hiding provides greater program security and avoids unintended data corruption.

# A hero class.
# Properties - Real name, code name, origin, arch enemy, uniform
# Methods - Rescue, attack, defend, speechify

# 2. Abstraction
    #  Objects only reveal internal mechanisms that are relevant for the use of other objects, hiding any unnecessary implementation code. This concept helps developers more easily make changes and additions over time.

# Your phone has icons to tap, it has volume buttons, it has a power button.

# 3. Inheritance
    #  Relationships and subclasses between objects can be assigned, allowing developers to reuse a common logic while still maintaining a unique hierarchy. This property of OOP forces a more thorough data analysis, reduces development time and ensures a higher level of accuracy.

# Subclasses inherit properties and methods of the super class, so we don't have to rewrite them.

# 4. Polymorphism
    #  Objects can take on more than one form depending on the context. The program will determine which meaning or usage is necessary for each execution of that object, cutting down the need to duplicate code.

# Polymorphism, or "many shapes":
# Subclasses can override properties and methods of superclasses in ways that are pertinent to the subclass.

class User:		# declare a class and give it name User
    def __init__(self, name_input, email_input):
        self.name = name_input
        self.email = email_input
        self.account_balance = 0

    def make_deposit(self, amount):
        self.account_balance += amount
        return self

    def venmo(self, amount, payee):
        self.account_balance -= amount
        payee.account_balance += amount
        return self

guido = User("Guido", "guido@guido.com")
fozzy = User("Fozzy Bear", "fozzy@bear.com")

guido.make_deposit(700).venmo(500, fozzy)
print(f'Guido: {guido.account_balance}')
print(f'Fozzy: {fozzy.account_balance}')
