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
    const { id } = req.body

    
    db.run(
        `delete from FavApps where id = ${id}`,
        err=>
        {
            if(err) {logger.error(err); res.status(500).json({delted: false, err: 'Internal server error!'}); return }

            res.json({deleted: true})
        })
}