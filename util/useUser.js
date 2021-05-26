import { useEffect } from 'react'
import Router from 'next/router'
import useSWR from 'swr'

export default function useUser({redirectTo = false, redirectIfFound = false} = {})
{
    const { data: user, mutate: mutateUser } = useSWR('/api/auth/user')
    console.log(user + ' ' + redirectTo)
    useEffect(()=>
    {
        if( !redirectTo || !user ) return
        if( (redirectTo && !redirectIfFound) || (redirectIfFound && user?.isLoggedIn) ) Router.push(redirectTo);
    },[user, redirectTo, redirectIfFound])

    return { user, mutateUser }
}

