import withSession from '../../../util/session'
import sqlite3 from 'sqlite3'

export default withSession(async (req,res)=>
{
    const user = await req.session.get('user')
    
    console.log(user?.favApps)
    if(user) { res.json({isLoggedIn: true, ...user}); return }

    res.json({isLoggedIn: false})
})