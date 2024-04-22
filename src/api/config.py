import os
from dotenv import load_dotenv

load_dotenv()


class Config():
    SECRET_KEY = os.getenv('SECRET_KEY')
    SQLALCHEMY_DATABASE_URI = "sqlite:///contacts.db"
    SQLALCHEMY_TRACK_MODIFICATIONS = False


print(f"SECRET_KEY: {Config.SECRET_KEY}")
