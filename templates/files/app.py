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
        f"/blackfridaydata/blackfridat"
        
    )
@app.route("/api/v1.0/product_id")
def product_id():
    """Return a JSON list of stations from the dataset."""
  
    # Query to list station name with ID
    product = session.query(BlackFriday.age, BlackFriday.occupation).all()
    # Convert list of tuples into normal list
    all_product = list(np.ravel(product))
    return jsonify(all_product)

 
@app.route("/blackfridaydata/blackfridat")
#@app.route("/api/v1.0/blackfriday")
def Filter_Search(blackfridat):
    """Return the MetaData for a given sample."""
    sel = [
        BlackFriday.user_id,
        BlackFriday.gender,
        BlackFriday.age,
        BlackFriday.occupation,
        BlackFriday.product_category1,
        BlackFriday.product_category2,
        BlackFriday.product_category3,
    ]

    results = db.session.query(*sel).filter(BlackFriday.sample == sample).all()

    # Create a dictionary entry for each row of metadata information
    Filter_Search = {}
    for result in results:
        Filter_Search["user_id"] = result[0]
        Filter_Search["gender"] = result[1]
        Filter_Search["age"] = result[2]
        Filter_Search["occupation"] = result[3]
        Filter_Search["product_category1"] = result[4]
        Filter_Search["product_category2"] = result[5]
        Filter_Search["product_category3"] = result[6]

    print(Filter_Search)
    return jsonify(Filter_Search)


if __name__ == '__main__':
    app.run(debug=True, port = 9999)
    
