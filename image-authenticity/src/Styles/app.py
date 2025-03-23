from doctest import debug
from flask import Flask
app=Flask(__name__)


##creates a WSGI application
@app.route('/')
def welcome():
    return "welcome to the application"



if __name__=='__main__':
    app.run(debug==True) #here debug is set to true inorder to get updated/restart after saving the application
    