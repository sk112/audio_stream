/**
 *  utils.js 
 * ----------------------------------
 * common utilities/functionality to 
 * leverage across the application
 * ----------------------------------
 */

import { Socket } from "socket.io";


/**
 * 
 * @param {Request | Socket} req 
 * @param {Boolean} isSocket 
 * @returns 
 */
const getAuthTokenFromHeader = (req, isSocket = false) => {

    let token = null;
    if (isSocket)
        token = req.request._query.token;
    else
        token = req.header('Authorization').split(' ')[1]

    // TODO Bearer should be present else invalid Authorization header.

    return token;
}


export {
    getAuthTokenFromHeader
}