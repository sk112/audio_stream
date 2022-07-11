import { verifyToken } from '../lib/firebase-admin.js';
import { WILD_URLS } from '../constants/global.js';

/** 
* API Route Authentication middleware implementation
* ----------------------------------------
* parses Authentication Bearer from request 
* and verifies the token with firebase-admin API
* 
* @returns
* 404 for unauthorized and error message
* 200 for success
*/
export function Authenticate(req, res, next) {

    console.log('HEADERS: ', req.query)
    const token = req.header('Authorization').split(' ')[1]

    // Check for Wildcard URLS
    console.log('req.baseUrl: ', token)
    if(WILD_URLS.includes(req.path)){
        next();
        return;
    }

    // Check if token is present in the request query.
    if(!token){
        res.status(404).send('Auth Error: Token Missing')
        return;
    }

    verifyToken(next);
    // TODO: verify if next() can be moved to getAuth.then() with appropriate error response
    next()
}

/** 
 * Socket Authentication Middleware Implementation
 * ------------------------------------------------
 * gets the token from query and verifies the 
 * authenticity of the token
 * 
 * @returns: 
 * 404 for unauthorized and error message
 * 200 for success and user details
 */
function SocketAuthMiddleware(socket, next) {
    const token = socket.request._query.token
    verifyToken(next);
}