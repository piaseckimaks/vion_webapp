require('date-format');
require('date-utils');
const sqlite3 = require('sqlite3');
const log4js = require('log4js');
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
    db.all(
        'select * from Apps',
        (err,rows)=>
        {
            if(err) {logger.error(err); res.status(500).send({status: false, err: 'Internal server error!'}); return }
            res.status(200).send({status: true, data: rows})
            logger.info('Data succesfully from /api/apps sent ' + req.connection.remoteAddress)
        })
}