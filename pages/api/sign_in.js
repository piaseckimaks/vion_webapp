require('date-format');
require('date-utils');
const sqlite3 = require('sqlite3');
const log4js = require('log4js');
const sha3 = require('sha3')
const db = new sqlite3.Database('./database.db');
const date = new Date();

const configLogs =
{
    appenders: {db: {type:'file', filename: `./logs/database/${date.toYMD()}.log`} },
    categories: {default: {appenders: ['db'], level: 'trace'}}
}

log4js.configure(configLogs);

const logger = log4js.getLogger();



export default (req,res) =>
{
    const hashedPass = new sha3.Keccak(256);
    hashedPass.update(req.query.pass);

    db.all(
        `select id from Users where user='${req.query.user}' and password='${hashedPass.digest('hex')}'`,
        (err,row)=>
        {
            if(err) {logger.error(err); res.status(500).send({status: false, err: 'Internal server error!'}); return }

            if(row.length > 0)
            {
                console.log(row)
                res.status(200).send({status: true, user: row[0].id});
                logger.info(`User ${row.user} succesfully logged from ${req.connection.remoteAddress}`);
                return;
            }

            res.status(200).send({status: true, user: 0});
        })
}