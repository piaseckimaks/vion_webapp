import { useEffect } from 'react'
import Router from 'next/router'
import useSWR from 'swr'
import fetchJson from './fetchJson'

export default function useUser({redirectTo = false, redirectIfFound = false} = {})
{
    const { data: user, mutate: mutateUser } = useSWR('/api/auth/user', fetchJson)
    // console.log(user)
    // console.log(redirectTo)
    useEffect(()=>
    {
        if( !redirectTo || !user ) return
        if( (redirectTo && !redirectIfFound) || (redirectIfFound && user?.isLoggedIn) ) {console.log('redirect /home'); Router.push(redirectTo);}
    },[user, redirectTo, redirectIfFound])

    return { user, mutateUser }
}

