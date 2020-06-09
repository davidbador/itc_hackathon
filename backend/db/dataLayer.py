import pymongo
# from Flask import Flask, request
# from model.business import Business


class DataLayer:

    def get_businesses(self):
        businesses = self.__db.businesses.find()
        return businesses

    # def create_business(self):
    #     time = Business.created_at()
    #     business_name = request.get_json()['business_name']
    #     address = request.get_json()['address']
    #     contact_name = request.get_json()['']

    def __init__(self):
        self.__client = pymongo.MongoClient('localhost', 27017)
        self.__db = self.__client['corportunity']
