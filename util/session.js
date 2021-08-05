import { withIronSession } from 'next-iron-session'

export default function withSession(handler)
{
    return withIronSession(
        handler,
        {
            cookieName: 'ICT',
            cookieOptions:
            {
                secure: process.env.NODE_ENV === 'production' ? true : false,
                maxAge: 36000
            },
            password: process.env.SECRET_COOKIE_PASSWORD,
        })
}