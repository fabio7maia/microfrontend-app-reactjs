import React from 'react';
import { useHistory } from 'react-router-dom';
import { AppHeader } from '@components';
import { MicroFrontend } from '../../microfrontend';
// import { FootballMatchesProps, NewsProps } from '@wpfm-types/widgetsModule';

const FootballMatches = MicroFrontend.import(React.lazy(() => import('widgetsModule/footballMatches')));
const News = MicroFrontend.import(React.lazy(() => import('widgetsModule/news')));

export const HomeScreen: React.FC = () => {
	const history = useHistory();
	const [accountId, setAccountId] = React.useState();

	return (
		<div style={{ backgroundColor: '#eeeeee', minHeight: '100vh', width: '100vw' }}>
			<AppHeader />
			<div style={{ padding: '20px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
				<div style={{ width: 'calc(50vw - 40px)', backgroundColor: 'yellow', minHeight: '50vh' }}>
					{/* <MicroFrontendImport
						component={Dashboard}
						store={store}
						lazyLoadingFallback={<span style={{ backgroundColor: 'red' }}>Fail</span>}
					/> */}
					{/* <MicroFrontend host={HostsConfig.dashboard} name="DashboardModule" /> */}
					<FootballMatches />
				</div>
				<div style={{ width: 'calc(50vw - 40px)', backgroundColor: 'orange', minHeight: '50vh' }}>
					{/* <MicroFrontend host={HostsConfig.dashboard} name="DashboardModule" id="dashboard2" /> */}
					<News />
				</div>
			</div>
			<div
				style={{
					margin: '20px',
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'space-between',
					backgroundColor: 'blue',
				}}
			></div>
			<div style={{ position: 'fixed', bottom: 0, minHeight: '55px', width: '100vw', backgroundColor: 'red' }}>
				Footer
			</div>
		</div>
	);
};
