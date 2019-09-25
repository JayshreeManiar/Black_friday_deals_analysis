# import necessary libraries
from flask import Flask, render_template
# Dependencies
from splinter import Browser
from bs4 import BeautifulSoup
import requests
import pymongo
import re
import pandas as pd
# Import our pymongo library, which lets us connect our Flask app to our Mongo database.
import pymongo
# Initialize browser
def init_browser():
   executable_path = {'executable_path': 'chromedriver'}
   return Browser('chrome', **executable_path, headless=False)
#mars_data = {}
def scrape_blackfriday():
   try:
     browser=init_browser()
     mission_url = 'https://blackfriday.com/ads/black-friday'
     browser.visit(mission_url)
     html=browser.html
     soup = BeautifulSoup(html, 'html.parser')
     links = soup.find_all('a')
     return links
   finally:
     browser.quit()
     