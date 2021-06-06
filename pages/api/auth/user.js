import withSession from '../../../util/session'
import sqlite3 from 'sqlite3'

export default withSession(async (req,res)=>
{
    const user = await req.session.get('user')
    const db = new sqlite3.Database('./database.db')
    
    if(user) { res.json({isLoggedIn: true, ...user}); return }

    res.json({isLoggedIn: false})
})