/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
    pathPrefix: "/",
    siteMetadata: {
        name: `Jingyun Yang`,
    },
    plugins: [
        `gatsby-plugin-less`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `src`,
                path: `${__dirname}/src/data`
            }
        },
        `gatsby-transformer-json`
    ],
}
