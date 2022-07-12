import { initializeApp as firebaseAdminInit } from 'firebase-admin/app';
import { getAuth as getAuthOfAdmin } from 'firebase-admin/auth'

import pkg from "firebase-admin"
const { credential, auth } = pkg

import dotenv from 'dotenv';
import { FIREBASE_ADMIN_APP_NAME } from '../constants/global.js';

// dotenv configuration
dotenv.config();
console.log('GOOGLE_APPLICATION_CREDENTIALS: ', process.env.GOOGLE_APPLICATION_CREDENTIALS)

// Firebase Admin App Initialization
const FirebaseAdminApp = firebaseAdminInit({
  credential: credential.cert(process.env.GOOGLE_APPLICATION_CREDENTIALS),
}, FIREBASE_ADMIN_APP_NAME);
console.log(getAuthOfAdmin(FirebaseAdminApp))
/*****************
 **** UTILS ******
 *****************/

async function verifyToken(token, next = null) {

  // Verify token logic
  getAuthOfAdmin(FirebaseAdminApp)
    .verifyIdToken(token)
    .then((decodedToken) => {
      const uid = decodedToken.uid;
      console.log('in middle: ', uid)
      if(next)next();
    })
    .catch((error) => {
      console.error(err)
      res.status(404).send('Auth Error')
    });
}

export {
  FirebaseAdminApp,
  verifyToken
}
