from flask import Flask
from flask_cors import CORS
from flask_restful import Api, Resource
from flask_migrate import Migrate

from config import Config
from models import db, Contact

app = Flask(__name__)
CORS(app)

app.config.from_object(Config)
db.init_app(app)
migrate = Migrate(app, db)

api = Api(app)


class Contacts(Resource):
    def get(self, contact_id=None):
        if contact_id:
            contact = Contact.query.get(contact_id)
            if not contact:
                return {'message': 'Contact not found'}, 200
            return {'contact': contact.print()}, 200

        else:
            contacts = Contact.query.all()
            if not contacts:
                return {'message': 'No contacts available'}, 200
            return {'contacts': [contact.print() for contact in contacts]}, 200


class FavoriteContacts(Resource):
    def get(self):
        favorites = Contact.query.filter(Contact.favorite == True).all()
        if not favorites:
            return {'message': 'No favorite contacts'}, 200
        return {'favorites': [contact.print() for contact in favorites]}, 200


api.add_resource(Contacts, '/api/contacts/', "/api/contacts/<int:contact_id>")
api.add_resource(FavoriteContacts, "/api/contacts/favorites")
