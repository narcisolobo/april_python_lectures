# Python Stack - Day 2

# Loops (Deeper Dive)

# for-in loops with range() function

# for-in loops over lists with range() function
colors = ["red", "green", "blue", "yellow", "orange"]
# for i in range(len(colors)):
#     print(colors[i])

# for-in loops over lists without range() function
for color in colors:
    print(f'for singular in plural: {color}')

# for-in loops through dictionaries
shang = {
    'real_name': 'Shang-Chi',
    'code_name': 'Shang-Chi, Master of Kung Fu',
    'origin': 'Raised to be an assassin.',
    'arch_enemy': 'Fu Manchu'
}

for banana in shang:
    print(f'{banana}: {shang[banana]}')

# This is a list of dictionaries

marvel_superheroes = [
    {
        'real_name': 'Shang-Chi',
        'code_name': 'Shang-Chi, Master of Kung Fu',
        'origin': 'Raised to be an assassin.',
        'arch_enemy': 'Fu Manchu'
    },
    {
        'real_name': 'Peter Parker',
        'code_name': 'Spider-Man',
        'origin': 'Radioactive spider.',
        'arch_enemy': 'Green Goblin'
    },
    {
        'real_name': 'Luke Cage',
        'code_name': 'Luke Cage',
        'origin': 'Failed prison experiment.',
        'arch_enemy': 'Diamondback'
    },
    {
        'real_name': 'Matt Murdock',
        'code_name': 'Daredevil',
        'origin': 'Radioactive isotopes.',
        'arch_enemy': 'Kingpin'
    },
    {
        'real_name': 'Steve Rogers',
        'code_name': 'Captain America',
        'origin': 'Super soldier serum.',
        'arch_enemy': 'The Red Skull'
    },
]

print(marvel_superheroes[1]['origin'])

for trait in marvel_superheroes[2]:
    print(marvel_superheroes[2][trait])

# How would we print all the info for each superhero?

for marvel_superhero in marvel_superheroes:
    for trait in marvel_superhero:
        print(f"{trait}: {marvel_superhero[trait]}")
