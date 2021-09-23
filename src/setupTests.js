/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable no-empty-function */
const enzyme = require('enzyme');
const Adapter = require('@wojtekmaj/enzyme-adapter-react-17');
require('jest-canvas-mock');

const emptyFn = () => {};

window.console = {
	log: emptyFn,
	error: emptyFn,
	warn: emptyFn,
};

enzyme.configure({ adapter: new Adapter() });
