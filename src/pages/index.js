import React from "react"
import { Helmet } from "react-helmet"

import Header from "../components/header"
import Bio from "../components/bio"
import Research from "../components/research"
import "semantic-ui-less/semantic.less"

const IndexPage = () => (
    <div>
        <Helmet>
            <meta charSet="utf-8" />
            <meta name="description" content="Jingyun Yang's personal website." />
            <meta name="keywords" content="Jingyun Yang,jingyun,yjy,jy" />
            <title>Jingyun Yang</title>
            <link rel="canonical" href="http://yjy0625.github.io" />
        </Helmet>
        <Header />
        <Bio />
		<Research />
    </div> 
)

export default IndexPage;
