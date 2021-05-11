import withSession from '../../util/session'
import sqlite3 from 'sqlite3'

export default withSession(async (req,res)=>
{
    const user = await req.session.get('user')
    const db = new sqlite3.Database('./database.db')

    if(user)
    {
        console.log(user)
        db.all(
            `select a.name from FavApps as f
                        left join Users as u on u.id = f.UserId
                        left join Apps as a on a.id = f.AppId
                    where f.UserId = ${user.id}
                    `,
            (err, rows) => {
                //if (err) { console.log(err); res.status(500); }
                res.json( 
                {
                    apps: rows,
                    isLoggedIn: true,
                    ...user
                })
            })
    }
    else res.json({isLoggedIn: false})
})