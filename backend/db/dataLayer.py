import pymongo
from flask import Flask, request, json
from bson.objectid import ObjectId
from flask_pymongo import PyMongo
from bson.json_util import dumps
from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager
from flask_cors import CORS
from model.investor import Investor

app = Flask(__name__)

app.config['MONGO_DBNAME'] = 'corportunity'
app.config['MONGO_URI'] = 'mongodb://localhost:27017/corportunity'
app.config['JWT_SECRET_KEY'] = 'secret'

mongo = PyMongo(app)
bcrypt = Bcrypt(app)
jwt = JWTManager(app)

CORS(app)


class DataLayer:

    def get_businesses(self):
        businesses = self.__db.businesses.find()
        return businesses

    def create_investor(self):
        first_name = request.get_json()['first_name']
        last_name = request.get_json()['last_name']
        email = request.get_json()['email']
        password = bcrypt.generate_password_hash(request.get_json()['password']).decode('utf-8')
        list_of_places = ['ARE', 'AUS', 'BRA', 'CAN', 'CHE', 'CHN', 'DEU', 'GBR', 'IND','ISR', 'JPN', 'NLD', 'USA']
        chosen_places = []
        list_of_industries = ['Food and Beverage', 'Tech', 'Health', 'Toys', 'Fashion', 'Real Estate', 'Gaming',
                              'Marketing']
        chosen_industries = []
        if self.__db.students.find_one({"email": email}):
            added_investor = {'status': 'The email is already in the system!'}
        else:
            new_investor = Investor(first_name, last_name, email, password)
            self.__db.investors.insert_one(new_investor.__dict__)
            added_investor = {'status': 'The investor has been added!'}
        return added_investor

    def __init__(self):
        self.__client = pymongo.MongoClient('localhost', 27017)
        self.__db = self.__client['corportunity']
