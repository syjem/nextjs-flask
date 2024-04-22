from flask_restful import Resource
from models import Contact

class Contacts(Resource):
    # Read
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
        return {'favorites': [favorite.print() for favorite in favorites]}, 200
