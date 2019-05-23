var firebaseConfig = {
    apiKey: "AIzaSyCtZ6hS0x98LSuVmiUiCqfqWAXOalgXRec",
    authDomain: "synderchat.firebaseapp.com",
    databaseURL: "https://synderchat.firebaseio.com",
    projectId: "synderchat",
    storageBucket: "synderchat.appspot.com",
    messagingSenderId: "486622634071",
    appId: "1:486622634071:web:7b8197cc3bb0d255"
  };

firebase.initializeApp(firebaseConfig);

// Create a variable to reference the database.
var database = firebase.database();

var dbIsConnected = database.ref(".info/connected");
var dbRefUsersList = database.ref("/users");
var dbConnectionObject = null;
var myScreenName = null;
var dbRefUserChats = null;

dbIsConnected.on("value", function(snap) {
    if (snap.val()) {
        dbConnectionObject = dbRefUsersList.push("temp-name");
        dbConnectionObject.onDisconnect().remove();
    }
});

function setupUser() {
    dbConnectionObject.set(myScreenName);
    dbRefMessages = database.ref("/chats/" + myScreenName);
    dbRefMessages.on("child_changed",function(snap) {
        if (snap.val()) {
            // Incoming message.
            console.log("Incoming message",snap.val());
        }
    });
}

function sendChatMessage(sender,reciever,message) {
    var chatMsgDbRef = database.ref("/chats/" + reciever + "/" + sender);
    chatMsgDbRef.set(message);
}
   

function dbSetChatName(screenName) {
    myScreenName = screenName;
    setTimeout(setupUser, 1000) //wait ten seconds before continuing  
}



$("#msg-submit-btn").on("click",function(event) {
    event.preventDefault();
    if ($("#msg-text").val()) {
        sendChatMessage(myScreenName,myScreenName,$("#msg-text").val());
    }
});

dbSetChatName("tester");