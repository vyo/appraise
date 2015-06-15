var hapi = require('hapi');
var Joi = require('joi');
var hapiSwaggered = require('hapi-swaggered');
var hapiSwaggeredUi = require('hapi-swaggered-ui');
var bunyan = require('bunyan');

var PORT = process.env.PORT || 3000;

var package = require('./package.json');
var version = package.version;


var server = new hapi.Server();
server.connection({port: PORT, labels: ['api']});


server.route({
    method: 'GET',
    path: '/{path*}',
    handler: {
        directory: {path: './static', listing: false, index: true}
    }
});

server.route({
    method: 'GET',
    path: '/rest/version',
    config: {
        tags: ['api'],
        description: 'Version info',
        notes: 'Get version information.',
    },
    handler: function (request, reply) {
        reply(version);
    }
});

server.register({
    register: require('hapi-bunyan'),
    options: {
        logger: bunyan.createLogger({
            name: 'appraise', level: 'info', streams: [{
                stream: process.stdout, level: 'info'
            }, {path: './appraise.log', level: 'info'}]
        })
    }
}, function (err) {
    if (err) {
        throw err; // something bad happened loading the plugin
    }


});

server.register({
    register: hapiSwaggered,
    options: {
        tags: {
            '/': 'Appraise'
        },
        info: {
            title: 'Appraise API',
            description: "Analyse your app's ratings, get detailed breakdowns and meaningful aggregates.",
            version: '0.1.0'
        }
    }
}, {
    select: 'api',
    routes: {
        prefix: '/swagger'
    }
}, function (err) {
    if (err) {
        throw err
    }
});

server.register({
    register: hapiSwaggeredUi,
    options: {
        title: 'Appraise API',
        authorization: {
            //field: 'apiKey',
            scope: 'query' // header works as well
            // valuePrefix: 'bearer '// prefix incase
        }
    }
}, {
    select: 'api',
    routes: {
        prefix: '/api'
    }
}, function (err) {
    if (err) {
        throw err
    }
});

server.start(function () {
    server.log('info', 'Server running at: ' + server.info.uri);
});

