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

app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///db/blackfriday.sqlite"
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
        f"/blackfridaydata/blackfriday"
        
    )
@app.route("/api/v1.0/product_id")
def product_id():
    """Return a JSON list of stations from the dataset."""
  
    # Query to list station name with ID
    product = session.query(BlackFriday.age, BlackFriday.purchase).all()
    #product = session.query(BlackFriday.age, BlackFriday.occupation).all()
    # Convert list of tuples into normal list
    all_product = list(np.ravel(product))
    return jsonify(all_product)

 
#@app.route("/blackfridaydata/blackfridat")
@app.route("/api/v2.0/BlackFriday")
def Filter_Search(blackfriday):
    """Return the MetaData for a given blackfriday."""
    sel = [
        Blackfriday.age, Blackfriday.occupation
    ]
    results = db.session.query(*sel).group_by(Blackfriday.age).all()
    occupation = [result[0] for result in results]
    age = [result[1] for result in results]
    trace = {
        "x": occuption,
        "y": age,
        "type": "bar"
    }

    return jsonify(trace)
    
    

    # Create a dictionary entry for each row of metadata information
""" Filter_Search = {}
    for result in results:
        Filter_Search["age"] = result[0]
        Filter_Search["occupation"] = result[1]
        

    print(Filter_Search)
    return jsonify(Filter_Search)"""


if __name__ == '__main__':
    app.run(debug=True, port = 9999)
    
