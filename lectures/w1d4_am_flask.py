# What is a virtual environment and why do we need one?
# Virtual environments are like specialized rooms that have special tools in them. These tools are specific for the project(s) in that room.

# How do we activate a virtual environment?
# On a Mac, type 'source' (without the quotes) a space, and drag the activate file into your terminal, then press return.
# On a PC, type 'call' instead of 'source', then do the same.

# What is Flask?
# Flask is a microframework.

# Why are we learning Flask?
# Flask will give us a ramp into our next framework, Django.
# Routing and views are in the same file in flask. Learning routing and views in the same file will help us when modularizing these portions into separate files in Django.

# How do I create a flask application?

from flask import Flask
app = Flask(__name__)

@app.route('/')
def index():
    return "Hello world!"

if __name__ == '__main__':
    app.run(debug=True)

# That's it!
# Feel free to make your own user snippets!