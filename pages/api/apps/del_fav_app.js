require('date-format');
require('date-utils');
const sqlite3 = require('sqlite3');
const log4js = require('log4js');
const db = new sqlite3.Database('./database.db');
const date = new Date();
import { withSession } from '../../../util'


const configLogs =
{
    appenders: {db: {type:'file', filename: `./logs/database/${date.toYMD()}.log`} },
    categories: {default: {appenders: ['db'], level: 'trace'}}
}

log4js.configure(configLogs);

const logger = log4js.getLogger();

export default withSession( async (req,res) =>
{
    const user = req.session.get('user')
    const { id: userId } = user
    const { id: appId } = req.body

    
    db.run(
        `delete from FavApps where id = ${appId}`,
        async err=>
        {
            if(err) {logger.error(err); res.status(500).json({delted: false, err: 'Internal server error!'}); return }

            req.session.set('user', user)
            await req.session.save()

            res.json(user)

        })
})