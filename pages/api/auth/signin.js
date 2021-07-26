import sqlite3 from 'sqlite3'
// import logger from '../../../util/logger'
import { Keccak } from 'sha3'
import withSession from '../../../util/session'

const db = new sqlite3.Database('./database.db');

export default withSession(async (req,res) =>
{
    const { username, password } = req.body
    const hashedPass = new Keccak(256)
    hashedPass.update(password)
    
    // if( username && password ) logger.info(`Received request from ${req.connection.remoteAddress} as '${username}'`)

    db.get(
        `select id from Users where user='${username}' and password='${hashedPass.digest('hex')}'`,
        async (err, row) => {
            
            if (err) 
            { 
                // logger.error(err)
                res.json({error: err})
                return 
            }

            if (!row) 
            { 
                const error = 'Username or password is not correct!'
                // logger.warn(`Failed login for username: '${username}'`)

                req.session.set('error', error)
                await req.session.save()

                res.json({ error: error }) 
                return 
            }

            //setting up user object
            const user = { id: row.id, name: username, isLoggedIn: true }
            //Adding user object to the session cookies
            req.session.set('user', user)
            await req.session.save()

            //sending user object back to app
            res.json(user)

            // logger.info(`User '${username}' succesfully logged from ${req.connection.remoteAddress}`);

        })
})