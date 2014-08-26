# Wraith
A responsive screenshot comparison tool.
Based on the Ruby version available at [http://github.com/BBC-News/wraith](http://github.com/BBC-News/wraith)

## CLI app

### Install

```
	npm install --global wraith
```

###Usage

	Usage:
	wraith --config <config>

	Options:
	-h, --help		Output help information
	--v, --version	Output version information

	Examples:
	wraith --config ./config/chrome.json

### Configuration file

Wraith uses a json based configuration file that allows you specify a large number of options. You can create as many configurations files as you need and call them from the cli using the --config flag. These configuration files can live anywhere that is addressable by a local path and they are passed as an argument like this:

    wraith --config ./path/to/my_config.json

Below is an example configuration file:

	{
		"project": "Test", (Optional name for the project, if supplied it will be used within the generated gallery only)

		Specify one or two domains
		"domains": {
			"bbb.co.uk": "http://www.bbc.co.uk",
			"live.bbc.co.uk": "http://live.bbc.co.uk"
		},

		Engines supported are phantomjs, slimerjs and triflejs but in theory any phantomjs based headless browser can be supported via a custom snap.js file
		"engines" : [
			"phantomjs"
		],

		Specify as many sizes as you wish
		"sizes": [
			"320",
			"768",
			"1440"
		],

		"outputDir": "test/chrome/", (defaults to "shots")

		You can choose to specfiy a list of paths to be used or you can crawl the site. If paths are provided they will take precident and the spider file will be ignored.

		"paths": [
			"/",
			"/news/",
			"/news/local/",
			"/news/england/york_and_north_yorkshire/",
			"/weather/"
		],

		If no paths are specified then a site crawl will take place and the results will be save in the location specified within this option
		"spider": "spider/test.txt", (Specify which file should be used for the spider txt file)

		"snap": "snap/test/chrome.js", (Specify snap.js which is used to take the screenshots)
		"fuzz": "20%", (Adjusts the sensitivity of the image comparison)
		"maxConnections": 20 (Limit the amount of concurrent processes)
	}

## License

MIT © [James Bell](http://james-bell.co.uk)
