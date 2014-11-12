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

Here is an example configuration file: [config.example.json](https://github.com/rcline/node-wraith/blob/master/config/config.example.json)

## External Dependencies
Wraith requires [phantomjs](http://phantomjs.org/) & [imagemagick](http://www.imagemagick.org/) to be installed. On OS X this can easily be done with `npm install phantomjs` and `brew install imagemagick`.

## License

MIT © [James Bell](http://james-bell.co.uk)
