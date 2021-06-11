import Layout from '../layouts/_Layout'
import { useUser } from '../util/'
import { Spinner } from 'react-bootstrap/'
import { HomePage } from '../layouts/components/'

export default function home() {
    const { user, mutateUser } = useUser({redirectTo: false, redirectIfFound: false})
    

    if(!user?.isLoggedIn) 
    {
        return (
            <div className="bg-black vh-100 vw-100">
                <div className="position-absolute top-50 start-50 translate-middle" >
                    <Spinner animation="border" role="status" />
                </div>
            </div>
        )
    }

    return (
        <Layout active="home">
            <HomePage />
        </Layout>
    )
}


