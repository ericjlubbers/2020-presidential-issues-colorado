module.exports = {
	siteMetadata: {
		title: 'Trump vs Biden on Colorado issues: Where the presidential candidates stand',
		author: 'Evan Ochsner, John Frank, Eric Lubbers',
		imageUrl: 'https://coloradosun.com/wp-content/uploads/sites/15/2020/10/Adobe_Post_20201014_0803320.167311111861979.png?w=1200',
		description: 'Compare and contrast the platforms and policies of Donald Trump and Joe Biden ahead of the general election.',
		keywords: `Donald Trump, Joe Biden, election, mail voting, fracking, Colorado, public lands, climate change`,
		twitter: 'https://twitter.com/coloradosun',
		twitterHandle: '@ColoradoSun',
		github: `https://github.com/ericjlubbers`,
		siteUrl: `http://projects.coloradosun.com/trump-biden-colorado-issues-2020-election/`,

	},
	pathPrefix: `/trump-biden-colorado-issues-2020-election`,
	plugins: [
		'gatsby-plugin-react-helmet',
		`gatsby-transformer-remark`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`
			}
		},
		{
			resolve: `gatsby-plugin-s3`,
			options: {
			  bucketName: "projects.coloradosun.com",
			},
		  },
		{
			resolve: 'gatsby-plugin-web-font-loader',
			options: {
			  google: {
				families: ['Libre Franklin:200,400,900', 'Martel:400,900', 'Roboto Condensed:400,700', 'Martel Sans']
			  }
			}
		  },
		  {
			resolve: "gatsby-source-google-spreadsheet",
			options: {
			  spreadsheetId: "1GHNtKuVV4b3-d_9R6pz9MUH8SpHUXT_KGpIJlJfVdwg",
			  credentials: {
				  client_email: "gatsby@candidate-explorer.iam.gserviceaccount.com",
				  private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCoRvS3YbuGkx6o\nmAgcQoQULnfLgyzEOYkxR9U7p0O4EbTUTTlgq//R4aeqyATcw2rpPtO4qjOTQzZ4\nlJzajP11CTsH/pdXE75G2+HcwRpdALia744tO8CBvEP/S/AyAQTKthSF6KLAR9v0\npatjt/Fd5CfjBTw8/BD1uuUyB9z2CPizQr0dvdPrWxt87jOchEyZeqXHV4S8LIXA\nfd3jgMrmrygMbICuW6X00GJOASpd/M5oWq68iHOplt+qnnb5KRycrxrCsO/U9eMv\nLL99QZVeOmct2Ur5U8fcgglwW3tZ1dYuPekJi/pW7Ba5y2pySn1OopZIkBRHwty0\nneTwC2v9AgMBAAECggEADZLTpdXN+41Ibs78myhJC8ZdHAmzsGGiYwWT+fYvAdz5\nGhrfOEtcx5WNIbsf8UgYtUG/xZMtCoGPFkDej3PJ9LPO6CvYEfUMvHMmD9l1AprO\nnpNuLiXgtwD0TIEtRHX36KYGl8VBGNjIXD6KHvFfwx6755Ws2zp138G4lRrfRD/T\n/xXjjm71NnhAyYParDzH6MWbcfwENcipwFJzZod50kQvXPnm3Nh5nl3c3lxTqjNd\npvJpiwwYoD/BGmyoaNBPVx9ibn6bjEac7WBP1ngSTt6Jlh+kO4EZHdX7kJ9ymq3x\nw1FDQhb24x/tcooDZO2+5rmGF9heHXIHrF+Hq7e7PQKBgQDnPoRuwFj8I0XhEkwj\nNeMOeZUwzALnb95D4D6UdP5bsggdYoRlPJZ2JSPA0FqMoNVm8UgN8eZGNOeAc/tl\nttwi86CFmiIGPzZL1EXH1EYh9e88Fw6SeN6LHj+F7S7pl+upFgfUQ44Y0bmnVFOY\ntZbmScuQ07U6nwFTPAGnmTdcowKBgQC6SsNPuKdJEDdbSxvEft6kBR+jpxPwbJip\n0RBPZ8B8ALj6PT2GD2INBCVIZBJx98PUaQJ+kFhb1PioJtAg5OYoYyyg+vyc9pw6\n2CeO8JPYL7TUX4SQvIHc3IWQvGGy2+z2pnSe4rbS6EE9/p6cwtQsWCEnxe5mgmk/\nz4bIz/j+3wKBgCr65riDDccHc1SLBxXATUyCcqVYNe34T/KDun3zZNd8Np/nkL4U\nTc71xjhvQXVD64YvsHnPDULdUG4CoKZeH3prl9ldNZe9pgTgFnw2yzZCtM2RZ4b3\n6j0nSR1GYWLPduC9lITybXXVfVFJjiQjFEIHU0u+3b9gkGl9DL2u76hLAoGAL9zh\njWv93vHBpz0G51dJUI7YcC2PG+hq2MaUEDKx66or3G87jWQKZxm3kn/TlWB4+ev4\n7heb/AwdzuYZ9zmYQKwqXTnfCVz7Cstabok1Ewg+x4m6/4zPOLWXw3YDC/chTMW7\nlM7e9hUiHhF7Iv+Tj8kcy6E4/TFoZTKmiJWWfbUCgYA6pdmJjmXPPfWRBTJ4erHF\n8+T46am2Vk29BAY2jpECUEEFE4+VqVolD7U44u5avM6EFAfJ8enGkBXpwdzXppJ+\nEhHYctQbZRzL8g88re6etCjjEB4FPycU/XWzv2kRsj0yh0WrzGpha32owKD/i3RO\nSrZGg2tIkB8hkcN0+kTtwg==\n-----END PRIVATE KEY-----\n"
			  },
			  typePrefix: "GoogleSpreadsheet",
			  filterNode: () => true,
		  
			  // By implementing a `mapNode(node): node` function, you can provide your own node transformations directly
			  // during node sourcing, the default implementation is to return the node as is:
			  mapNode: node => node
			}
		  },
		'gatsby-transformer-sharp',
		'gatsby-plugin-sharp',
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: 'Makefolio',
				short_name: 'Makefolio',
				start_url: '/',
				background_color: '#2980b9',
				theme_color: '#2980b9',
				display: 'standalone',
				icon: 'src/images/sun-favicon.png',
				orientation: 'portrait'
			}
		},
		`gatsby-plugin-sass`,
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: 'UA-124743561-1',
				// Setting this parameter is optional (requried for some countries such as Germany)
				anonymize: true
			}
		},
		`gatsby-plugin-sitemap`
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.app/offline
		// 'gatsby-plugin-offline',
	]
};
