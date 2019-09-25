from flask import Flask, render_template, redirect
import pymongo
import scraping
app = Flask(__name__)
conn = "mongodb://localhost:27017"
client = pymongo.MongoClient(conn)
db=client.mars1_db
collection=db.mars_info
@app.route("/")
def home():
   """ welcome"""
   return render_template("index.html")
@app.route("/scrape")
def scrape():
   blackfriday_fact= scraping.scrape_blackfriday()
   return redirect("/", code=302)
if  __name__ == "__main__":
   app.run(port=5002,debug=True)