import Page from "@/components/Page"
import { Link } from "react-router-dom"

const About = () => {
    return (
        <Page className="bg-blue-200">
            <div>
                <Link className="bg-blue-800 rounded-md hover:bg-blue-200 transition-colors" to="/">Hello</Link>
                Hi
            </div>
        </Page>
    )
}

export default About