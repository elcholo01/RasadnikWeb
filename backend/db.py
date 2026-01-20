import bson

from flask import current_app, g
from werkzeug.local import LocalProxy
from flask_pymongo import PyMongo

from pymongo.errors import DuplicateKeyError, OperationFailure
from bson.objectid import ObjectId
from bson.errors import InvalidId


def get_db():
    """
    Configuration method to return db instance
    """
    db = getattr(g, "_database", None)

    if db is None:
        # Get the mongo instance from the app context
        mongo = current_app.extensions.get('pymongo')
        if mongo is None:
            # If no mongo instance exists, create one
            mongo = PyMongo()
            mongo.init_app(current_app)
            # Store it in extensions for future use
            current_app.extensions['pymongo'] = mongo
        db = g._database = mongo.db
       
    return db


# Use LocalProxy to read the global db instance with just `db`
db = LocalProxy(get_db)
