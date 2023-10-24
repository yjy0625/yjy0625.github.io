/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
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
        `gatsby-transformer-json`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-plugin-web-font-loader`,
            options: {
                google: {
                    families: ['Source Sans Pro:200,400,600,700']
                }
            }
        },
        {
            resolve: `gatsby-plugin-google-gtag`,
            options: {
                trackingIds: [
                    "G-XLH6J2S999"
                ],
                pluginConfig: {
                    head: true
                }
            }
        }
    ],
}
