var userScreenName = null;
var chatMsg = {};
var chatcount = 1;

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
var dbRefUserChats = null;

// Connect to the firebase object and set the 'presence' object.
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
// Set up a user for chat by their screenname.
function setupUser(loginScreenName) {
    if (userScreenName == null || userScreenName != loginScreenName)
    {
        userScreenName = loginScreenName;
        localStorage.setItem("user-screenname",userScreenName);
        dbConnectionObject.set(userScreenName);
        setupChatRef();
    }
}

// Debug routine to print out all the recieved messages.
function dumpMsgData(data)
{
    for (sendUser of Object.keys(data)) {
        // The 'key' is the user that sent the message.

        var msgs = data[sendUser];
        // The 'msgs' are all the messages that have been sent.

        for (msgId of Object.keys(msgs)) {
            // The 'key' is the message id.

            console.log('Id',msgId);
            var msgData = msgs[msgId];
            console.log(' Sent At',msgData.date);
            console.log(' Sent By',msgData.from);
            console.log(' Sent To',msgData.to);
            console.log('  Viewed',msgData.viewed);
            console.log('    Text',msgData.msg);
            console.log(' ');
        }
    }
}


// Update the firebase to set all the 'viewed' flags to false for the user's messages.
function markMsgsRead(sendUser) {
    if (sendUser == null || sendUser == undefined || msgs == null) {
        return;
    }
    // Grab the messages.   Note that the chatMsg object will change as we
    //  update things here.  The 'msgs' object will stay the same.
    var msgs = chatMsg[sendUser];

    for (msgId of Object.keys(msgs)) {
        var msgData = msgs[msgId];
        if (msgData.viewed != true) {
            msgData.viewed = true;
            var refStr = "/chats/" + msgData.to + "/" + msgData.from + "/" + msgId;
            firebase.database().ref().child(refStr).set(msgData);
        }
    }
}

// Function that either displays an indicator that there are messages waiting
//  or actually displays the message.
function postMessage(msgData) {
    var chatBlock = $("#chatMSG");
    var currentChatUser = chatBlock.attr("chat-with-name");
    //chatAlert<ScreenName>

    // Check if there are any unread messages for the user.
    for (sendUser of Object.keys(msgData)) {
        var msgs = msgData[sendUser];
        var unread = false;
        for (msgId of Object.keys(msgs)) {
            if (msgs[msgId].viewed != true) {
                unread = true;
                break;
            }
        }

        if (currentChatUser == sendUser) {
            if (unread) {
                markMsgsRead(sendUser);  // This will initiate a display of the messages.
            }
        }
        else 
        {
            var indicator = $("#chatAlert"+sendUser);
            if (indicator) {
                if (unread) {
                    indicator.css("visibility", "visible");
                }
                else {
                    indicator.css("visibility", "hidden");
                }
            }
        }
    }
}

// Set it up so that all the chats for the user fire a callback.
function setupChatRef() {
    console.log("setup chat for",userScreenName);
    dbRefMessages = database.ref("/chats/" + userScreenName);
    dbRefMessages.on("value",function(snap) {
        if (snap.val()) {
            // On value will trigger for *any* change -
            //  so initial connect and any subsequent change.
            chatMsg = snap.val(); 
            postMessage(chatMsg);
            //dumpMsgData(chatMsg);
        }
    });
}

function sendChatMessage(sender,reciever,message) {
    var msgObject = {date:moment().format("l LTS"),viewed:false,from:sender,to:reciever,msg:message};
    console.log("Chat reference","/chats/" + reciever + "/" + sender);
    var chatMsgDbRef = database.ref("/chats/" + reciever + "/" + sender);
    chatMsgDbRef.push(msgObject);
    var chatMsgDbRef = database.ref("/chats/" + sender + "/" + reciever);
    chatMsgDbRef.push(msgObject);
}

$(".bio-match-chat").on("click",function(event) {
    var divId = this.id;
    // will be 'bio-<user>' so we just need to parse the user out.
    var brk = divId.indexOf('-');
    var sendUser = divId.substring(brk+1);
    console.log("display chats from",sendUser);
    markMsgsRead(sendUser);  // This will cause a recursion...

    var chatBlock = $("#chatMSG");
    console.log("empty block");
    $("#chatMSG").empty();
    chatBlock.attr("chat-with-name",sendUser);
    $("#chatInputText").attr("chat-with-name",sendUser);

    if (chatMsg != null) {

        // Loop through the messages.  Extract the message data.
        for (sendUser of Object.keys(chatMsg)) {
            console.log(sendUser);
            var msgs = chatMsg[sendUser];
            for (msgId of Object.keys(msgs)) {
                var msgData = msgs[msgId];
                var msgStr = "[" + msgData.date + "] " + msgData.msg;
                //if (msgData.viewed)
                chatBlock.append(msgStr);
            }
        }
    }
});

$("#chatSendBtn").on("click",function(event) {
    var chatTextField = $("#chatInputText");
    var otherUser = chatTextField.attr("chat-with-name");
    if (otherUser == null || otherUser == undefined) {
        return;
    }
    console.log(chatTextField.val());
    sendChatMessage(userScreenName,otherUser,chatTextField.val());
});