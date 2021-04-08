from flask import Flask, render_template, redirect
app = Flask(__name__)

@app.route('/')
def index():
    weather = "56 degrees and cloudy."
    return render_template('index.html', banana = weather)

@app.route('/detroit')
def detroit():
    attractions = [
        "<a target=\"_new\" href=\"https://www.michigan.org/property/belle-isle-park\">Visit the Belle Isle Island</a>",
        "See the Detroit Temple",
        "Be a bookworm in the Detroit Public Library",
        "Immerse yourself in the history of Fort Wayne",
        "Beat Rabbit in a rap battle on 8 Mile."
    ]
    return render_template('detroit.html', attractions = attractions)

if __name__ == '__main__':
    app.run(debug=True)