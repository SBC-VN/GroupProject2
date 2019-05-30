var userScreenName = null;

var firebaseConfig = {
    apiKey: "AIzaSyCtZ6hS0x98LSuVmiUiCqfqWAXOalgXRec",
    authDomain: "synderchat.firebaseapp.com",
    databaseURL: "https://synderchat.firebaseio.com",
    projectId: "synderchat",
    storageBucket: "synderchat.appspot.com",
    messagingSenderId: "486622634071",
    appId: "1:486622634071:web:7b8197cc3bb0d255"
  };

console.log("firebase init");
firebase.initializeApp(firebaseConfig);

// Create a variable to reference the database.
var database = firebase.database();

var dbIsConnected = database.ref(".info/connected");
var dbRefUsersList = database.ref("/users");
var dbConnectionObject = null;
var dbRefUserChats = null;

dbIsConnected.on("value", function(snap) {
    if (snap.val()) {
        userScreenName=localStorage.getItem("user-screenname");
        if (userScreenName != null) {
            dbConnectionObject = dbRefUsersList.push(userScreenName);
            setupChatRef();
        }
        else {
            dbConnectionObject = dbRefUsersList.push("temp-name");
        }
        dbConnectionObject.onDisconnect().remove();
    }
});

// screenName variable is defined in main.js
function setupUser(loginScreenName) {
    if (userScreenName == null || userScreenName != loginScreenName)
    {
        userScreenName = loginScreenName;
        localStorage.setItem("user-screenname",userScreenName);
        signedIn = true;  // variable from 'style.js'
        console.log("setting up chat",userScreenName);
        dbConnectionObject.set(userScreenName);
        setupChatRef();
    }
}

function logoutUser() {
    localStorage.setItem("user-screenname",null);
    dbRefMessages = null;
}

function setupChatRef() {
    console.log("Chat ref set");
    dbRefMessages = database.ref("/chats/" + userScreenName);
    dbRefMessages.on("value",function(snap) {
        if (snap.val()) {
            // On value will trigger for *any* change -
            //  so initial connect and any subsequent change.
            // Incoming message.
            console.log("Incoming message",snap.val());
        }
    });
}

function sendChatMessage(sender,reciever,message) {
    var chatMsgDbRef = database.ref("/chats/" + reciever + "/" + sender);
    chatMsgDbRef.set(message);
}

$("#msg-submit-btn").on("click",function(event) {
    event.preventDefault();
    if ($("#msg-text").val()) {
        sendChatMessage(userScreenName,userScreenName,$("#msg-text").val());
    }
});