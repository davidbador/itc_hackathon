import json


class Investor:

    def to_json(self):
        return json.dumps(self, default=lambda o: o.__dict__)

    def __init__(self, first_name, last_name, email, password, places, industries):
        self.first_name = str(first_name)
        self.last_name = str(last_name)
        self.email = str(email)
        self.password = str(password)
        self.places = places
        self.industries = industries
