# import json
# import datetime
#
#
# class Business:
#
#     def to_json(self):
#         return json.dumps(self, default=lambda o: o.__dict__)
#
#     @staticmethod
#     def created_at():
#         return datetime.datetime.now().isoformat()
#
#     def __init__(self, business_name, address, contact_name, phone, number_of_employees, industry, creation_time,
#                  description, deal_closed):
#         self.business_name = str(business_name)
#         self.address = str(address)
#         self.contact_name = str(contact_name)
#         self.phone = str(phone)
#         self.number_of_employees = int(number_of_employees)
#         self.industry = str(industry)
#         self.creation_time = str(creation_time)
#         self.description = str(description)
#         self.deal_closed = deal_closed
