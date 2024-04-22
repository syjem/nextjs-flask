from app import app
from models import db, Contact

# Sample contacts data
contacts = [
    {
        'id': 1,
        'name': 'Jemuel Repoylo',
        'avatar': 'https://avatars.githubusercontent.com/u/119649793?v=4',
        'twitter': '@repoylo_jemuel',
        'phoneNumber': '222-222-2222',
        'email': 'syjem.work@example.com',
        'notes': 'Mr. Right',
        'favorite': True,
    },
    {
        'id': 2,
        'name': 'Rodrick Alcantara',
        'avatar': 'https://avatars.githubusercontent.com/u/60320390?v=4',
        'twitter': '@constRod',
        'phoneNumber': '3313-8921-4231',
        'email': 'constRod@example.com',
        'notes': 'constRod champ',
        'favorite': False,
    },
    {
        'id': 3,
        'name': 'Shad CN',
        'avatar': 'https://github.com/shadcn.png',
        'twitter': '@shadcn',
        'phoneNumber': '123-456-7890',
        'email': 'shadn_cn@example.com',
        'notes': 'Just chilling...',
        'favorite': True,
    },
]

with app.app_context():
    print('Start seeding now...')
    new_contacts = [Contact(**contact) for contact in contacts]
    db.session.add_all(new_contacts)
    db.session.commit()
    print("Successfully seeded")