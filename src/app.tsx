import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { HomeScreen } from '@screens';
import configureStore from './configureStore';
import { MicroFrontend } from './microfrontend';

export const store = configureStore();

MicroFrontend.init({ store });

export const App: React.FC = () => {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<React.Fragment>
					<Switch>
						<Route exact path="/" component={HomeScreen} />
						<Route exact path="/dashboard" component={HomeScreen} />
					</Switch>
				</React.Fragment>
			</BrowserRouter>
		</Provider>
	);
};

export const getStore = () => store;
