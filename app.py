from flask import Flask, render_template
import os

app = Flask(__name__)

@app.route('/')
def index():
    return render_template("index.html")

# Dieser Teil ist wichtig für Render:
if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))  # Port wird von Render bereitgestellt
    app.run(host='0.0.0.0', port=port)
