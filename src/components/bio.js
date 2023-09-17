import React from "react"
import { Grid, Container, Header, Button } from "semantic-ui-react"
import * as styles from "./bio.module.css"
import Headshot from "../data/images/headshot.jpg"

const App = props => {

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
        <div className={styles.container}>
        <Container>
            <Grid stackable className={styles.grid}>
                <Grid.Column width={8} className={styles.bio}>
                    <Header as="h3" className={styles.beforename}>{ greetingMsg } My name is</Header>
                    <Header as="h1" className={styles.name}>Jingyun Yang</Header>
                    <div className={styles.abstract}>I am a second-year PhD student at <a href="https://www.stanford.edu/" className="inline_link">Stanford University</a>. I am fortunate to be advised by Prof. <a href="https://web.stanford.edu/~bohg/" className="inline_link">Jeannette Bohg</a>. My research focuses on the intersection of robotics, machine learning, and vision.</div>
                    <div className={styles.external_links}>
                        <a href="/resume.pdf"><Button className={styles.external_link_btn}><i aria-hidden="true" className="file alternate icon" aria-label="Resume"></i><span> Resume</span></Button></a>
                        <a href="https://git.io/yjy"><Button className={styles.external_link_btn}><i aria-hidden="true" className="github icon" aria-label="Github"></i><span> Github</span></Button></a>
                        <a href="https://www.linkedin.com/in/yjy0625"><Button className={styles.external_link_btn}><i aria-hidden="true" className="linkedin icon" aria-label="LinkedIn"></i><span> LinkedIn</span></Button></a>
                        <a href="https://scholar.google.com/citations?hl=en&user=7XBAa2QAAAAJ"><Button className={styles.external_link_btn}><i aria-hidden="true" className="graduation icon" aria-label="Scholar"></i><span> Scholar</span></Button></a>
                        <a href="mailto:jingyuny@stanford.edu"><Button className={styles.external_link_btn}><i aria-hidden="true" className="mail icon" aria-label="Contact"></i><span> Contact</span></Button></a>
                    </div>
                </Grid.Column>
                <Grid.Column width={8} className={styles.headshot_container}>
                    <img src={Headshot} alt="Headshot" className={styles.headshot} />
                </Grid.Column>
            </Grid>
        </Container>
        </div>
    )

}

export default App;