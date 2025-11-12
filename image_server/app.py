"""
This is a simple HTTP server that serves only images.
The goal is to host this on a VPS
"""

from flask import Flask, request, send_from_directory

app = Flask(__name__)


@app.route("/")
def root():
    return "hi!"


@app.route("/imgs/", methods=["GET"])
def image():
    image = None
    req = request.args.get("image")
    if req:
        print("getting image")
        image = send_from_directory("../public", req)
        print("Image: ", image)
    return image if image else "no image"


if __name__ == "__main__":
    app.run()
