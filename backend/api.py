from flask import Flask, json, request, jsonify
from flask_pymongo import PyMongo
from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager, create_access_token
from flask_cors import CORS
from db.dataLayer import DataLayer

app = Flask(__name__)


app.config['MONGO_DBNAME'] = 'corportunity'
app.config['MONGO_URI'] = 'mongodb://localhost:27017/corportunity'
app.config['JWT_SECRET_KEY'] = 'secret'

mongo = PyMongo(app)
bcrypt = Bcrypt(app)
jwt = JWTManager(app)

CORS(app)

dataLayer = DataLayer()


@app.route("/businesses")
def get_businesses():
    businesses = dataLayer.get_businesses()
    all_businesses = []

    for i in businesses:
        all_businesses.append(i)

    response = app.response_class(response=(json.dumps({"businesses": all_businesses}, default=str)), status=200,
                                  mimetype="application/json")

    return response


@app.route("/investors/register", methods=['POST'])
def add_investor():
    return dataLayer.create_investor()


@app.route("/investors/login", methods=['POST'])
def log_in_investor():
    investors = mongo.db.investors
    email = request.get_json()['email']
    password = request.get_json()['password']

    response = investors.find_one({'email': email})

    if response:
        if bcrypt.check_password_hash(response['password'], password):
            access_token = create_access_token(identity={
                'id': str(response['_id']),
                'first_name': response['first_name'],
                'last_name': response['last_name'],
                'email': response['email']
            })

            result = jsonify({'token': access_token})

        else:
            result = jsonify({'error': 'invalid username and password'})

    else:
        result = jsonify({'result': 'No results found'})

    return result
