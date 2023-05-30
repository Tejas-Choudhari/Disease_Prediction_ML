import numpy as np
from flask import Flask,render_template,request,redirect,jsonify
import pickle
from flask_cors import CORS
#Initialize the flask App
app = Flask(__name__)
model = pickle.load(open('model.pkl','rb'))
heart_model = pickle.load(open('hear_model.pkl','rb'))
CORS(app)


@app.route('/',methods=['GET','POST'])
def index():
    return render_template("index.html")


@app.route('/heart-predict',methods=['POST'])
def heart_predict():
    print(request.json)
    age = request.json['age']
    sex = request.json['sex']
    cp = request.json['cp']
    trestbps = request.json['trestbps']
    chol = request.json['chol']
    fbs = request.json['fbs']
    restecg = request.json['restecg']
    thalach = request.json['thalach']
    exang = request.json['exang']
    oldpeak = request.json['oldpeak']
    slope = request.json['slope']
    ca = request.json['ca']
    thal = request.json['thal']
    age = int(age)
    sex = int(sex)
    cp =  int(cp)
    trestbps = int(trestbps)
    chol = int(chol)
    fbs = int(fbs)
    restecg = int(restecg)
    thalach = int(thalach)
    exang = int(exang)
    oldpeak = int(oldpeak)
    slope = int(slope)
    ca = int(ca)
    thal = int(thal)
    final_feature = np.array([(age,sex,cp,trestbps,chol,fbs,restecg,thalach,exang,oldpeak,slope,ca,thal)])
    prediction = heart_model.predict(final_feature)
    print(prediction)
    if(prediction == 1):
        return "success"
    else:
        return "fail"

@app.route('/predict',methods=['POST'])
def predict():
    print(request.json)
    prg = request.json['pregnancies']
    glc = request.json['glucose']
    bp = request.json['bloodPressure']
    skt = request.json['skinThickness']
    ins = request.json['insulin']
    bmi = request.json['bmi']
    dpf = request.json['pedigreeFunction']
    age = request.json['age']

    prg = int(prg)
    glc = int(glc)
    bp = int(bp)
    skt = int(skt)
    ins = int(ins)
    bmi = float(bmi)
    dpf = float(dpf)
    age = int(age)
    final_feature = np.array([(prg,glc,bp,skt,ins,bmi,dpf,age)])
    prediction = model.predict(final_feature)
    print(prediction)
    # return render_template("index.html")
    # if(prediction == 1):
    #     return render_template("yes.html")
    # else:
    #     return render_template("no.html")
    if(prediction == 1):
        return "success"
    else:
        return "fail"

if __name__ == "__main__":
    app.run(debug = True,port = 5000)
