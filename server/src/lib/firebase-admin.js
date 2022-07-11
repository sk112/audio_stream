import { initializeApp as firebaseAdminInit } from 'firebase-admin/app';
import { getAuth as getAuthOfAdmin } from 'firebase-admin/auth'

import pkg from "firebase-admin"
const { credential, auth } = pkg

// dotenv configuration
import dotenv from 'dotenv';
dotenv.config();
console.log('GOOGLE_APPLICATION_CREDENTIALS: ', process.env.GOOGLE_APPLICATION_CREDENTIALS)

// Firebase Admin App Initialization
const FirebaseAdminApp = firebaseAdminInit({
  credential: credential.cert(process.env.GOOGLE_APPLICATION_CREDENTIALS),
});

/*****************
 **** UTILS ******
 *****************/

async function verifyToken(next = null) {
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
  SocketAuthMiddleware
}
