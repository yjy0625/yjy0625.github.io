import React from "react"
import { Container, Header, Item, Card, Image } from "semantic-ui-react"
import { useStaticQuery, graphql } from "gatsby"
import Icon from "../data/images/icon.png"
import styles from "./research.module.css"

export default props => {

    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    name
                }
            }
			allPublicationsJson(sort: {
                fields: [year, month],
                order: [DESC, DESC]
            }) {
				edges {
					node {
						title
						authors
                        image
                        venue
                        year
                        month
						links {
							name
							url
                        }
                        abstract
					}
				}
            }
            dataJson {
                coauthors {
                    name
                    homepage
                }
                awards {
                    name
                    time
                }
                teaching {
                    code
                    name
                    school
                    time
                    title
                }
            }
		}
    `)

    /* publications */

    var publications = data.allPublicationsJson.edges;
    const coauthors = data.dataJson.coauthors.reduce((map, obj) => {
        map[obj.name] = obj.homepage;
        return map;
    }, {});

    const renderedPublications = publications.map(({ node }, index) => {
        const authorList = node.authors;
        const authorToHtml = (name) => {
            var nameOnly = name;
            if(name.endsWith("*")) {
                nameOnly = name.slice(0, -1);
            }
            
            if(nameOnly === data.site.siteMetadata.name) {
                return (<span key={name} className={styles.me}>{name}</span>);
            }
            if(nameOnly in coauthors) {
                return (<a href={coauthors[nameOnly]} className="inline_link" key={name}>{name}</a>);
            }
            else {
                return (<span key={name}>{name}</span>);
            }
        }
        const authorHtml = authorList.map(authorToHtml)
            .reduce((prev, curr, index) => [prev, (<span key={"comma" + index}>, </span>), curr]);

        const linksHtml = node.links.map(({ name, url }, index) => {
            return (<span>[ <a href={url} className="inline_link">{name}</a> ]</span>);
        });

        const underReviewKeywards = ["Review", "review", "Submission", "submission",
                                     "Preprint", "preprint"];
        var venueName = "" + node.venue + ", " + node.year;
        if(underReviewKeywards.some(str => node.venue.includes(str))) {
            venueName = node.venue;
        }

        return (
            <Item>
                <Item.Image src={node.image} alt="teaser_image" />
                <Item.Content>
                    <Item.Header>{node.title}</Item.Header>
                    <Item.Description>
                        <div className={styles.publication_author}>{authorHtml}</div>
                        <div className={styles.publication_venue}>{venueName}</div>
                        <div className={styles.publication_abstract}>{node.abstract}</div>
                    </Item.Description>
                    <Item.Extra>
                        <div className={styles.publication_links}>{linksHtml}</div>
                    </Item.Extra>
                </Item.Content>
            </Item>
        )
    })

    /* awards */

    const awards = data.dataJson.awards;

    const renderedAwards = awards.map(({ name, time }, index) => {
        return (
            <Card className={styles.card} color="blue">
                <Card.Content>
                    <Card.Header className={styles.name}>{name}</Card.Header>
                    <Card.Description className={styles.time}><i class="calendar alternate outline icon" /> {time}</Card.Description>
                </Card.Content>
            </Card>
        )
    })

    /* teaching */

    const teaching = data.dataJson.teaching;

    const renderedTeaching = teaching.map(({ code, name, title, school, time }, index) => {
        return (
            <Card className={styles.card} color="blue">
                <Card.Content>
                    <Card.Header className={styles.name}>{code} - {name}</Card.Header>
                    <Card.Description className={styles.time}>
                        <i class="map pin icon" /> {school}
                        <br/>
                        <i class="tag icon" /> {title}
                        <br/>
                        <i class="calendar alternate outline icon" /> {time}
                    </Card.Description>
                </Card.Content>
            </Card>
        )
    })

    /* footer */

    const reactLink = (<a href="https://reactjs.org/" className="inline_link">React</a>);
    const gatsbyLink = (<a href="https://www.gatsbyjs.org/" className="inline_link">Gatbsy</a>);
    const semanticLink = (<a href="https://semantic-ui.com/" className="inline_link">Semantic UI</a>);

    const footerText = (
        <div className={styles.footer_text}>Powered by {reactLink}, {gatsbyLink}, and {semanticLink}.</div>
    )
    
    return (
        <div>
            <div className={styles.wrapper}>
                <Container>
                    <Header as="h1" className={styles.section_title}>Publications</Header>
                    <Item.Group>
                        { renderedPublications }
                    </Item.Group>
                </Container>
            </div>
            <div className={styles.wrapper_white}>
                <Container>
                    <Header as="h1" className={styles.section_title}>Awards and Honors</Header>
                    <Card.Group centered>
                        { renderedAwards }
                    </Card.Group>
                </Container>
            </div>
            <div className={styles.wrapper}>
                <Container>
                    <Header as="h1" className={styles.section_title}>Teaching</Header>
                    <Card.Group centered itemsPerRow={3}>
                        { renderedTeaching }
                    </Card.Group>
                </Container>
            </div>
            <div className={styles.wrapper_small_pad}>
                <Container>
                    <Image src={Icon} size='mini' centered className={styles.footer_icon} />
                    {footerText}
                </Container>
            </div>
        </div>
    )

}

