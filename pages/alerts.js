import Layout from '../layouts/_Layout'
import { ResizeableDiv } from '../layouts/components/'

export default function alerts() {
    return (
        <Layout active="alerts">
            <ResizeableDiv >
                <p>Move me & resize me</p>
            </ResizeableDiv>
        </Layout>
    )
}