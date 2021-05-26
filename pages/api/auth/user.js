import withSession from '../../../util/session'
import sqlite3 from 'sqlite3'
import { resolveHref } from 'next/dist/next-server/lib/router/router'

export default withSession(async (req,res)=>
{
    const user = await req.session.get('user')
    const error = await req.session.get('error')
    const db = new sqlite3.Database('./database.db')

    if(user)
    {
        db.all(
            `select f.id, a.name from FavApps as f
                        left join Users as u on u.id = f.UserId
                        left join Apps as a on a.id = f.AppId
                    where f.UserId = ${user.id}
                    `,
            (err, rows) => {
                if (err) { console.log(err); res.status(500); return}
                console.log(rows)
                res.json( 
                {
                    apps: rows,
                    isLoggedIn: true,
                    ...user
                })
            })
        return
    }
    if(error) { res.json({error: error}); return }
    res.json({isLoggedIn: false})
})