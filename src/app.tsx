import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import { HomeScreen } from '@screens';
import configureStore from './configureStore';
import { MicroFrontend } from './microfrontend';

const history = createBrowserHistory();

export const store = configureStore(history);

MicroFrontend.init({ store });

export const App: React.FC = () => {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<React.Fragment>
					<Switch>
						<Route exact path="/" component={HomeScreen} />
					</Switch>
				</React.Fragment>
			</BrowserRouter>
		</Provider>
	);
};

export const getStore = () => store;
