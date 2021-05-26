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
    const { appName, userId } = req.body

    console.log(appName)






    db.get(
        `select id from Apps where name = '${appName}'`,
        (err,row)=>
        {
            console.log(row)
            if(err) {logger.error(err); res.status(500).json({added: false, err: 'Internal server error!'}); return }

            db.run(
                `insert into FavApps (UserId, AppId) values ('${userId}', '${row.id}')`,
                err => 
                {
                    if(err) {logger.error(err); res.status(500).json({added: false, err: 'Internal server error!'}); return }
                    console.log('added')
                    res.json({added: true})
                })
        })
}