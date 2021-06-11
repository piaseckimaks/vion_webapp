require('date-format');
require('date-utils');
const sqlite3 = require('sqlite3');
const log4js = require('log4js');
const db = new sqlite3.Database('./database.db');
const date = new Date();
import withSession from '../../../util/session'



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
    const { id } = user

    db.all(
        `select f.id, a.name from FavApps as f
        left join Users as u on u.id = f.UserId
        left join Apps as a on a.id = f.AppId
        where f.UserId = ${id}
        `,
        async (err,rows)=>
        {
            if(err) {logger.error(err); res.status(500).send({status: false, err: 'Internal server error!'}); return }
            
            console.log('get: ', rows)
            user.favApps = rows
            req.session.set('user', user)
            await req.session.save()

            res.json(user)
        })
})