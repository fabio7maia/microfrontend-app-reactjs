// import { routerMiddleware } from 'connected-react-router';
import { History } from 'history';
import { createStore, DeepPartial, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { LoggerConfig } from './configs';
import { BaseState, rootReducer, StoreState } from './store';

export default function configureStore(history: History): Store<StoreState> {
	const composeEnhancers = composeWithDevTools({});

	const initialState: DeepPartial<{
		baseState: BaseState;
	}> = {
		baseState: {
			language: 'pt',
		},
	};

	const isDebugActive = LoggerConfig.debug;

	return createStore(rootReducer(history), initialState as any, isDebugActive ? composeEnhancers() : undefined);
}
