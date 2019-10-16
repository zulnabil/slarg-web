const functions = require('firebase-functions');

const admin = require('firebase-admin');
admin.initializeApp();

const express = require('express')
const app = express()

app.use(express.urlencoded())

let db = admin.firestore();

app.get('/teszul', (req, res) => {
  var message = {
      data: {
          title: 'ini title',
          message: 'ini message'
      },
      topic: 'palu'
  };
  admin.messaging().send(message)
      .then((response) => {
          // Response is a message ID string.
          return console.log('Successfully sent message:', response);
      })
      .catch((error) => {
          return console.log('Error sending message:', error);
      });

  const ref = db.collection('state').doc('sedang_gempa').set({ 'state': true }, { merge: true })
})

exports.app = functions.https.onRequest(app);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
