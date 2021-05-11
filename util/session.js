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
            },
            password: process.env.SECRET_COOKIE_PASSWORD,
        })
}