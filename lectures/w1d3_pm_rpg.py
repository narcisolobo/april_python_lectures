import random

class Character:
    def __init__(self, name):
        self.name = name
        self.health = 100
        self.strength = random.randint(1, 20)
        self.speed = random.randint(1, 20)
        self.intelligence = random.randint(1, 20)

    def attack(self, target):
        if target.health <= 0:
            print(f'{self.name} has defeated {target.name}!')
        else:
            damage = random.randint(1, self.strength)
            print(f'{self.name} has attacked {target.name} for {damage} hit points!')
            target.health -= damage
    
    def __str__(self):
        return f'Name: {self.name}, health: {self.health}, strength: {self.strength}, speed: {self.speed}, intelligence: {self.intelligence}'

class Warrior(Character):
    def __init__(self, name):
        super().__init__(name)
        self.strength = random.randint(1, 20) + 6
        self.health += 10
        self.intelligence -= 4
        self.speed -= 2
    
    def sword_attack(self, target):
        Character.attack(self, target)
        bonus_dmg = self.strength * random.randint(1, 6) // 3
        print(f'Bonus damage: {bonus_dmg}')
        print(f'{self.name} has attacked {target.name} for {bonus_dmg} bonus hit points!')
        target.health -= bonus_dmg

class Rogue(Character):
    def __init__(self, name):
        super().__init__(name)
        self.strength += 2
        self.health -= 10
        self.intelligence += 2
        self.speed = random.randint(1, 20) + 6
    
    def back_stab(self, target):
        Character.attack(self, target)
        bonus_dmg = self.speed * random.randint(1, 6) // 3
        print(f'Bonus damage: {bonus_dmg}')
        print(f'{self.name} has attacked {target.name} for {bonus_dmg} bonus hit points!')
        target.health -= bonus_dmg

class Mage(Character):
    def __init__(self, name):
        super().__init__(name)
        self.strength -= 6
        self.health -= 20
        self.intelligence = random.randint(1, 20) + 6
    
    def fire_ball(self, target):
        Character.attack(self, target)
        bonus_dmg = self.intelligence * random.randint(1, 6) // 3
        print(f'Bonus damage: {bonus_dmg}')
        print(f'{self.name} has attacked {target.name} for {bonus_dmg} bonus hit points!')
        target.health -= bonus_dmg

gimli = Warrior('Gimli')
nathandra = Rogue('Nathandra')
gandalf = Mage('Gandalf')

while gimli.health > 0 or nathandra.health > 0:
    nathandra.back_stab(gimli)
    gimli.sword_attack(nathandra)