from flask import Flask, jsonify
from flask_cors import CORS, cross_origin

app = Flask(name)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

db = {
    "pechersky": [
        {"street": "Сагайдачного 7", "price": 11000},
        {"street": "Староноводницька 4", "price": 23000},
        {"street": "Кудряшова 4", "price": 18000}
    ],
    "svytoshinsky": [
        {"street": "Наумова ген.,23в", "price": 10000},
        {"street": "Ушакова Миколи", "price": 13500},

    ],
    "desnyansky": [
        {"street": "Лисківська вул, 23", "price": 9500},
        {"street": "Цвєтаєвої М.,11", "price": 9000},
    ]
}


@app.route("/districts")
@cross_origin()
def districts():
    print(type(db.keys()))
    return jsonify(["pechersky", "svytoshinsky", "desnyansky"])


@app.route("/rooms/<string:id>")
@cross_origin()
def rooms(id):
    return jsonify(db[id])