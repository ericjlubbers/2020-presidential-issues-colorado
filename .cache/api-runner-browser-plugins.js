module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-web-font-loader/gatsby-browser.js'),
      options: {"plugins":[],"google":{"families":["Libre Franklin:200,400,900","Martel:400,900","Roboto Condensed:400,700","Martel Sans"]}},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"Makefolio","short_name":"Makefolio","start_url":"/","background_color":"#2980b9","theme_color":"#2980b9","display":"standalone","icon":"src/images/sun-favicon.png","orientation":"portrait","cache_busting_mode":"query","include_favicon":true,"legacy":true,"theme_color_in_head":true,"cacheDigest":"5ea6b7e8521d01efa7095f8140c1ab48"},
    },{
      plugin: require('../node_modules/gatsby-plugin-google-analytics/gatsby-browser.js'),
      options: {"plugins":[],"trackingId":"UA-124743561-1","anonymize":true},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
