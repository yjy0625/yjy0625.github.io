import React from "react"
import { Link } from "gatsby"
import { Menu, Container } from "semantic-ui-react"
import * as styles from "./header.module.css"
import Icon from "../data/images/icon.png"

const App = props => {

    return (
        <div className={styles.container}>
        <Container>
            <Menu stackable secondary size="large" className={styles.menu}>
                <Menu.Item className={styles.icon}>
                    <Link to="/">
                        <img src={Icon} alt="Icon" />
                    </Link>
                </Menu.Item>
                {/*
                <Menu.Item position="right" className={styles.item}>
                    <Link to="/blog/" className={styles.link}>Blog</Link>
                </Menu.Item>
                */}
                {/*
                <Menu.Item position="right" className={styles.item_special}>
                    <a href="/resume.pdf" className={styles.link_special}>
                        <div>Resume</div>
                    </a>
                </Menu.Item>
                */}
            </Menu>
        </Container>
        </div>
    )

};

export default App;