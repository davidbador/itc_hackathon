from flask import Flask, json
from flask_cors import CORS
from db.dataLayer import DataLayer

app = Flask(__name__)

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
