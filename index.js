'use strict';

var fs = require('fs');
var wraith = require('./lib/wraith');
var spider = require('./lib/spider');
var path = require('path');
var extend = require('util')._extend;

module.exports.run = run;

function run(configFile) {

    var domains = [];
    var domainLabels = [];
    var outputFolder = '';
    var baseFolder = process.cwd() + '/';

    var defaults = require(path.join(baseFolder, "config/defaults.json"));
    var config = require(path.join(baseFolder, configFile));
    extend(defaults, config);

    outputFolder = path.join(baseFolder, config.outputDir);

    for (var domain in config.domains) {
        domains.push(config.domains[domain].replace(/\/+$/, ''));
        domainLabels.push(domain);
    }

    var cb = function () {
        console.log('Done');
    };

    if (config.paths && config.paths.length > 0) {
        wraith(config, config.engines, domains, config.sizes, domainLabels, outputFolder, cb);
    } else if (config.spider) {
        config.spider = baseFolder + config.spider;
        if (!fs.existsSync(config.spider)) {
            spider(domains[0], config.spider, function () {
                wraith(config, config.engines, domains, config.sizes, domainLabels, outputFolder, cb);
            });
        } else {
            wraith(config, config.engines, domains, config.sizes, domainLabels, outputFolder, cb);
        }
    }
}
