import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import { getDatabase, set, get, update, remove, ref } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyDCtShOOE-3XXxBFQZv2uQiLtNDCnzPNbQ",
    authDomain: "astalla.firebaseapp.com",
    databaseURL: "https://astalla-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "astalla",
    storageBucket: "astalla.appspot.com",
    messagingSenderId: "260855930400",
    appId: "1:260855930400:web:bfc26703bda5905e5de645",
    measurementId: "G-RS2580VGGQ"
};

const app = initializeApp(firebaseConfig);

const db = getDatabase();

var enterID = document.querySelector('#enterID');
var enterName = document.querySelector('#enterName');
var enterAge = document.querySelector('#enterAge');
var findID = document.querySelector('#findID');
var findName = document.querySelector('#findName');
var findAge = document.querySelector('#findAge');

var insertBtn = document.querySelector('#insert');
var updateBtn = document.querySelector('#update');
var removeBtn = document.querySelector('#remove');
var findBtn = document.querySelector('#find');

function InsertData() {

}

function FindData() {

}

function UpdateData() {

}

function RemoveData() {

}