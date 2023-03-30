from flask import Flask, jsonify, request
from client import generateImage
app = Flask(__name__)

@app.route("/generate" , methods=['POST'])
def generate():
  req_body = request.get_json()
  try:
    artifacts = generateImage(
      req_body
    )
    return {'artifacts': artifacts}, 200
  except Exception as e:
    print(e)
    return {'error': str(e)}, 500

  
if __name__ == "__main__":
  app.run(host="0.0.0.0", port=8000, debug=True)