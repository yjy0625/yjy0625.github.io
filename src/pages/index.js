import React from "react"

import Header from "../components/header"
import Bio from "../components/bio"
import Research from "../components/research"
import "semantic-ui-less/semantic.less"

const IndexPage = () => (
    <div>
        <Header />
        <Bio />
		<Research />
    </div> 
)

export default IndexPage;
