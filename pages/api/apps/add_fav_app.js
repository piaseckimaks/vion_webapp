require('date-format');
require('date-utils');
const sqlite3 = require('sqlite3');
const log4js = require('log4js');
const db = new sqlite3.Database('./database.db');
const date = new Date();
import { withSession } from '../../../util';


const configLogs =
{
    appenders: {db: {type:'file', filename: `./logs/database/${date.toYMD()}.log`} },
    categories: {default: {appenders: ['db'], level: 'trace'}}
}

log4js.configure(configLogs);

const logger = log4js.getLogger();

export default withSession( async(req,res) =>
{
    const user = req.session.get('user')
    const { id: userId } = user
    const { appName } = req.body

    console.log(appName)

    db.get(
        `select id from Apps where name = '${appName}'`,
        (err,row)=>
        {
            if(err) {logger.error(err); res.status(500).json({added: false, err: 'Internal server error!'}); return }

            db.run(
                `insert into FavApps (UserId, AppId) values ('${userId}', '${row.id}')`,
                async (err, res) => 
                {
                    if(err) {logger.error(err); res.status(500).json({added: false, err: 'Internal server error!'}); return }
                    
                    console.log('res: ', res)

                    req.session.set('user', user)
                    await req.session.save()

                    res.json(user)
                })
        })
})