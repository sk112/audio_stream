import { verifyToken } from '../lib/firebase-admin.js';
import { WILD_URLS } from '../constants/global.js';
import { getAuthTokenFromHeader } from '../lib/utils.js';

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
function Authenticate(req, res, next) {

    // Check for Wildcard URLS
    if (WILD_URLS.includes(req.path)) {
        next();
        return;
    }

    // Extract token from the request
    const token = getAuthTokenFromHeader(req)

    // Check if token is present in the request query.
    if (!token) {
        res.status(404).send('Auth Error: Invalid Token or Missing')
        return;
    }

    verifyToken(token, next);
    // TODO verify if next() can be moved to getAuth.then() with appropriate error response
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
    const token = getAuthTokenFromHeader(socket, true)
    verifyToken(token, next);

    // TODO Token Error Response management
}

/****** EXPORTS ********/

export {
    Authenticate,
    SocketAuthMiddleware
}