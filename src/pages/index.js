import React from "react"
import { Helmet } from "react-helmet"

import Header from "../components/header"
import Bio from "../components/bio"
import Research from "../components/research"
import "semantic-ui-less/semantic.less"

const IndexPage = () => {
    return (
    <script>
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

      ga('create', 'TAG_ID', 'auto');
      ga('send', 'pageview');
    </script>
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
    );
}

export default IndexPage;
