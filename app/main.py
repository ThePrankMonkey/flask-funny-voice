from flask import Flask, render_template

app = Flask(__name__)


@app.route("/")
def show_wheel():
    template_vars = {
        "title": "Funny Voice Wheel"
    }
    return render_template("wheel.jinja2", **template_vars)


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0")
