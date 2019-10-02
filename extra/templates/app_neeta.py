# import necessary libraries
from sqlalchemy import func

from flask import (
    Flask,
    render_template,
    jsonify,
    request,
    redirect)

from flask_sqlalchemy import SQLAlchemy


app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///blackfriday.sqlite"
db = SQLAlchemy(app)

# create route that renders index.html template
@app.route("/")
def home():
    return render_template("index.html")

# create route that returns data for plotting
@app.route("/api/v1.0/product_id")
#@app.route("/api/pals")
def product_id():
    results = db.session.query(BlackFriday.age, BlackFriday.occupation).all()

    occupation= [result[0] for result in results]
    age = [result[1] for result in results]

    trace = {
        "x": occuption,
        "y": age,
        "type": "bar"
    }

    return jsonify(trace)


if __name__ == "__main__":
    app.run()
