'use strict';

var fs = require('fs');
var helpers = require('./helpers');
var mustache = require('mustache');
var path = require('path')

module.exports.generate = generate;

function generate(dirs, compareList, outputDir, project, cb) {
	compareList = compareList.sort(helpers.sortByProp('sort'));
	var template = __dirname + '/../gallery.html',
		view = {
			'images' : compareList,
			'dirs': dirs.sort(),
			'project': project,
			'resolve': function() {
				return function(text, render) {
					var rendered = render(text);
					return rendered.replace(/&#x2F;/g, '/').replace(outputDir, '').replace(/^\//, '');
				};
			},
			'contents': function() {
				return function(text, render) {
					var rendered = render(text);
					var output = fs.readFileSync(rendered.replace(/&#x2F;/g, '/').replace(/\/\//g,'/'),'utf8');
					return output ? output : 0;
				};
			}
		};

	fs.readFile(template, function (err, data) {
		if (err) { throw err; }
		var output = mustache.render(data.toString(), view);
		fs.writeFile(path.join(outputDir, 'gallery.html'), output, function(err) {
			if(err) {
				console.log(err);
			} else {
				console.log('Gallery generated');
				cb();
			}
		});
	});
}
