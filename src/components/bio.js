import React from "react"
import { Grid, Container, Header, Button, Popup } from "semantic-ui-react"
import styles from "./bio.module.css"
import Headshot from "../data/images/headshot.png"

export default props => {

    const greetingMsg = (() => {
        var d = new Date();
        var month = d.getMonth() + 1;
        var date = d.getDate();
        var time = d.getHours();

        const greetingsDict = {
            "12/31": "Happy new year!",
            "1/1": "Happy new year!",
            "1/2": "Happy new year!",
            "2/14": "Happy Valentine's Day!",
            "7/4": "Happy Independence Day!",
            "11/24": "Happy Thanksgiving!",
            "11/25": "Happy Thanksgiving!",
            "11/26": "Happy Thanksgiving!",
            "11/27": "Happy Thanksgiving!",
            "11/28": "Happy Thanksgiving!",
            "11/29": "Happy Thanksgiving!",
            "11/30": "Happy Thanksgiving!",
            "12/24": "Merry Christmas!",
            "12/25": "Merry Christmas!"
        }

        if (("" + month + "/" + date) in greetingsDict) {
            return greetingsDict["" + month + "/" + date];
        }
        else if (time >= 4 && time < 12) {
            return "Good morning.";
        }
        else if (time >= 12 && time < 18) {
            return "Good afternoon.";
        }
        else {
            return "Good evening.";
        }
    })();
    
    return (
        <Container>
            <Grid stackable className={styles.grid}>
                <Grid.Column width={8} className={styles.bio}>
                    <Header as="h3" className={styles.beforename}>{ greetingMsg } My name is</Header>
                    <Header as="h1" className={styles.name}>Jingyun Yang</Header>
                    <div className={styles.abstract}>I am a second-year master student studying Machine Learning at Carnegie Mellon University (CMU). Since June 2020, I have been working with Prof. <a href="https://www.cs.cmu.edu/~katef/" className="inline_link">Katerina Fragkiadaki</a> on deep learning, computer vision, and robotics. Previously, I was in the <a href="https://clvrai.com" className="inline_link">USC Cognitive Learning for Vision and Robotics Lab (CLVR)</a> advised by Prof. <a href="https://viterbi-web.usc.edu/~limjj/" className="inline_link">Joseph J. Lim</a>.</div>
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
