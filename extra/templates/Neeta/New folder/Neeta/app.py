import os

import pandas as pd
import numpy as np

from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine

from flask import Flask, jsonify, render_template
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)


#################################################
# Database Setup
#################################################

app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///db/blackfriday.sqlite"
db = SQLAlchemy(app)

# reflect an existing database into a new model
Base = automap_base()
# reflect the tables
Base.prepare(db.engine, reflect=True)

# Save references to each table
Samples_Metadata = Base.classes.blackfriday
#Samples = Base.classes.samples
#session = Session(db.engine)

@app.route("/")
def index():
    """Return the homepage."""
    return render_template("index.html")


"""@app.route("/names")
def names():
    
    # Use Pandas to perform the sql query
    stmt = db.session.query(Samples).statement
    df = pd.read_sql_query(stmt, db.session.bind)

    # Return a list of the column names (sample names)
    return jsonify(list(df.columns)[2:])"""


@app.route("/metadata/<sample>")
def sample_metadata(sample):
    
    sel = [
        BlackFriday.user_id,
        BlackFriday.gender,
        BlackFriday.purchase,
        BlackFriday.age,
        BlackFriday.occupation,
        BlackFriday.product_category1,
        BlackFriday.product_category2,
        BlackFriday.product_category3,
    ]

    results = db.session.query(*sel).filter(Samples_Metadata.sample == sample).all()

    # Create a dictionary entry for each row of metadata information
    sample_metadata = {}
    for result in results:
        Filter_Search["user_id"] = result[0]
        Filter_Search["gender"] = result[1]
        Filter_Search["age"] = result[2]
        Filter_Search["occupation"] = result[3]
        Filter_Search["product_category1"] = result[4]
        Filter_Search["product_category2"] = result[5]
        Filter_Search["product_category3"] = result[6]
    print(sample_metadata)
    return jsonify(sample_metadata)


@app.route("/samples/<sample>")
def samples(sample):
    
    stmt = db.session.query(Samples).statement
    df = pd.read_sql_query(stmt, db.session.bind)

    # Filter the data based on the sample number and
    # only keep rows with values above 1
    sample_data = df.loc[df[sample] > 1, ["age", "purchase", sample]]

    # Sort by sample
    sample_data.sort_values(by=sample, ascending=False, inplace=True)

    # Format the data to send as json
    data = {
        "age": sample_data.age.values.tolist(),
        "purchase": sample_data[sample].values.tolist(),
        "gender": sample_data.purchase.tolist(),
    }
    return jsonify(data)


if __name__ == "__main__":
    app.run()
