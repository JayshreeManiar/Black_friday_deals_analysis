import os

import pandas as pd
import numpy as np

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine

from flask import Flask, jsonify, render_template
from flask_sqlalchemy import SQLAlchemy


app = Flask(__name__)
################################################
# Database Setup
#################################################

app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///blackfriday.sqlite"
#app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URL', '') or "sqlite:///db.sqlite"
db = SQLAlchemy(app)

# reflect an existing database into a new model
Base = automap_base()
# reflect the tables
Base.prepare(db.engine, reflect=True)

# Save references to each table
BlackFriday = Base.classes.blackfriday
#BlackFriday_new_data = Base.classes.BlackFriday_new_data
session = Session(db.engine)



@app.route("/")
def Home():
    """ Welcome"""
    return (
        f"Welcome<br/>"
        f"Available Routes:<br/>"
        f"/api/v1.0/product_id<br/>"
        
    )
@app.route("/api/v1.0/product_id")
def product_id():
    """Return a JSON list of stations from the dataset."""
  
    # Query to list station name with ID
    product = session.query(BlackFriday.age, BlackFriday.occupation).all()
    # Convert list of tuples into normal list
    all_product = list(np.ravel(product))
    return jsonify(all_product)


if __name__ == '__main__':
    app.run(debug=True, port = 9999)
    
