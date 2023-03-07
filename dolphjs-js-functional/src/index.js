const Dolph = require('@dolphjs/core');
const defaultRouter = require('./routes');
const { env, port } = require('./config');
const helmet = require('helmet');

const dolph = new Dolph([defaultRouter], port, env, { url: null }, [helmet()]);
dolph.listen();
