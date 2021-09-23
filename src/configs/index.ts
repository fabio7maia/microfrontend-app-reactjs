export const LoggerConfig = {
	debug: process.env.REACT_APP_LOGGER_DEBUG === 'false' ? false : true,
	error: process.env.REACT_APP_LOGGER_ERROR === 'false' ? false : true,
	log: process.env.REACT_APP_LOGGER_LOG === 'false' ? false : true,
};
