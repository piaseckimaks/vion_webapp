
import 'date-format'
import 'date-utils'
import sqlite3 from 'sqlite3'
import log4js from 'log4js'
import {Keccak} from 'sha3'
import withSession from '../../util/session'
import user from './user'

const db = new sqlite3.Database('./database.db');
const date = new Date();


const configLogs =
{
    appenders: {db: {type:'file', filename: `./logs/database/${date.toYMD()}.log`} },
    categories: {default: {appenders: ['db'], level: 'trace'}}
}

log4js.configure(configLogs);

const logger = log4js.getLogger();



export default withSession(async (req,res) =>
{
    const { username, password } = req.body
    const hashedPass = new Keccak(256)
    hashedPass.update(password)
    console.log(req.body)
    try
    {
        db.get(
            `select id from Users where user='${username}' and password='${hashedPass.digest('hex')}'`,
            async (err,row)=>
            {
                if(err) {logger.error(err); res.send({status: false, err: 'Internal server error!'}); }
                console.log(row);
                if(row.id)
                {
                    console.log('sent')
                    const user = {id: row.id, name: username, isLoggedIn: true}
                    req.session.set('user', user)
                    await req.session.save()
                    res.json(user)
                    logger.info(`User ${username} succesfully logged from ${req.connection.remoteAddress}`);
                }

                res.json({id: 0, isLoggedIn: false})
            })
    }
    catch(error)
    {
        const { response: fetchResponse } = error
        res.status(fetchResponse?.status || 500).json(error.data)
    }
})