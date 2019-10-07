import React from "react"
import { Grid, Container, Header, Button, Popup } from "semantic-ui-react"
import styles from "./bio.module.css"
import Headshot from "../data/images/headshot.png"

export default props => {
    
    return (
        <Container>
            <Grid stackable className={styles.grid}>
                <Grid.Column width={8} className={styles.bio}>
                    <Header as="h3" className={styles.beforename}>Hello, my name is</Header>
                    <Header as="h1" className={styles.name}>Jingyun Yang</Header>
                    <div className={styles.abstract}>I am a senior undergraduate student studying computer science at University of Southern California (USC). Since Fall 2018, I have been working in the <a href="https://clvrai.com" className="inline_link">Cognitive Learning for Vision and Robotics Lab (CLVR)</a> under the advisement of <a href="https://viterbi-web.usc.edu/~limjj/" className="inline_link">Joseph J. Lim</a>, where I work on deep learning, computer vision, and robotics.</div>
                    <div className={styles.external_links}>
                        <Popup inverted tiny offset='0, 15px'
                            trigger={<a href="/resume.pdf"><Button basic circular color='black' icon='file' className={styles.external_link_btn} /></a>}
                            content='Resume'
                            position='top center'
                        />
                        <Popup inverted tiny offset='0, 15px'
                            trigger={<a href="https://git.io/yjy"><Button basic circular color='black' icon='github' className={styles.external_link_btn} /></a>}
                            content='Github'
                            position='top center'
                        />
                        <Popup inverted tiny offset='0, 15px'
                            trigger={<a href="https://www.linkedin.com/in/yjy0625"><Button basic circular color='black' icon='linkedin' className={styles.external_link_btn} /></a>}
                            content='LinkedIn'
                            position='top center'
                        />
                        <Popup inverted tiny offset='0, 15px'
                            trigger={<a href="https://scholar.google.com/citations?hl=en&user=7XBAa2QAAAAJ"><Button basic circular color='black' icon='graduation' className={styles.external_link_btn} /></a>}
                            content='Google Scholar'
                            position='top center'
                        />
                    </div>
                </Grid.Column>
                <Grid.Column width={8} className={styles.headshot_container}>
                    <img src={Headshot} alt="Headshot" className={styles.headshot} />
                </Grid.Column>
            </Grid>
        </Container>
    )

}
