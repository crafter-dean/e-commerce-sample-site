module.exports = {
	siteMetadata: {
		title: `E-commerce Template Site`,
		description: `An e-commerce template site with a Wordpress back-end`,
		author: `Dean Nellis`,
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sass`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Craft Pixel Sample Site`,
				short_name: `sample site`,
				start_url: `/`,
				background_color: `#663399`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `src/images/craftPixel-icon.png`, // This path is relative to the root of the site.
			},
		},
		{
			resolve: 'gatsby-source-wordpress',
			options: {
				baseUrl: 'craftpixel.local',
				protocol: 'http',
				hostingWPCOM: false,
				// We will be using some advanced custom fields
				useACF: true,
				acfOptionPageIds: [],
				verboseOutput: false,
				perPage: 100,
				// Set how many simultaneous requests are sent at once.
				concurrentRequests: 10,
				includedRoutes: [
					'**/categories',
					'**/posts',
					'**/pages',
					'**/media',
					'**/tags',
					'**/taxonomies',
					'**/users',
				],
				excludedRoutes: [],
			},
		},
		`gatsby-plugin-sitemap`,
		{
			resolve: `gatsby-plugin-prefetch-google-fonts`,
			options: {
				fonts: [
					{ family: `Mulish`, variants: [`400`, `700`, `900`] },
					{ family: `Roboto` },
				],
			},
		},
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	],
};
