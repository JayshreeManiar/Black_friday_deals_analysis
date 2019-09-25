# import necessary libraries
import os

import pandas as pd
import numpy as np

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine

from flask import (
    Flask, jsonify, render_template,request,redirect)
from flask_sqlalchemy import SQLAlchemy


app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///db/blackfriday.sqlite"
db = SQLAlchemy(app)
# reflect an existing database into a new model

class BlackFriday(db.Model):
   __tablename__ = 'blackfriday'
   user_id= db.Column(db.Integer, primary_key=True)
   gender=db.Column(db.String(64))
   occupation= db.Column(db.Integer)
   purchase = db.Column(db.Integer)
   def __repr__(self):
       return '<BlackFriday %r>' % (self.purchase)
@app.before_first_request
def setup():
   # Recreate database each time for demo
   db.drop_all()
   db.create_all()
# create route that renders index.html template
@app.route("/")
def home():
   return render_template("index.html")
# Query the database and send the jsonified results
@app.route("/send", methods=["GET", "POST"])
def send():
   if request.method == "POST":
       Gender= request.form["gender"]
       Occuption = request.form["occuption"]
      # Purchase = request.form["purchase"]
       blackfriday = BlackFriday(gender=Gender, occupation=Occuption)
       db.session.add(blackfriday)
       db.session.commit()
       return redirect("/", code=302)
   return render_template("form.html")
# create route that returns data for plotting
@app.route("/api/pals")
def pals():
   results = db.session.query(BlackFriday.occupation, func.count(BlackFriday.purchase)).group_by(BlackFriday.gender).all()
   Occuption = [result[0] for result in results]
   Purchase = [result[1] for result in results]
   trace = {
       "x": Occuption,
       "y": Purchase,
       "type": "bar"
   }
   return jsonify(trace)
if __name__ == "__main__":
   app.run()