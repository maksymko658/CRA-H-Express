const {createServer} = require('http');
const express = require('express');
const compression = require('compression');
const morgan = require('morgan');
const path = require('path');

const app = express()
const dev = app.get('env') !== 'production'

if (!dev) {
	app.dissable('x-powered-by')
	app.use(compression())
	app.use(morgan('common'))
}