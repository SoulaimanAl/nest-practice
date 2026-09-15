'use strict'

require('dotenv').config();

exports.config = {
  host: 'collector.eu01.nr-data.net',
  worker_threads: {
    enabled: true,
  },
  logging: {
    level: 'info',
    filepath: 'stdout',
  },
  instrumentation: {
    timers: {
      enabled: false,
    },
  },
  allow_all_headers: true,
  attributes: {
    exclude: [
      'request.headers.cookie',
      'request.headers.authorization',
      'request.headers.proxyAuthorization',
      'request.headers.setCookie*',
      'request.headers.x*',
      'response.headers.cookie',
      'response.headers.authorization',
      'response.headers.proxyAuthorization',
      'response.headers.setCookie*',
      'response.headers.x*',
    ],
  },
};