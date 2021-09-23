import React from 'react';
import { useHistory } from 'react-router-dom';
import { AppHeader } from '@components';
import { MicroFrontend } from '../../microfrontend';
import { DashboardProps } from '@wpfm-types/dashboardModule';
import { AccountSelectorProps, NewsProps } from '@wpfm-types/widgetsModule';

const AccountSelector = MicroFrontend.import<AccountSelectorProps>(
	React.lazy(() => import('widgetsModule/accountSelector'))
);
const News = MicroFrontend.import<NewsProps>(React.lazy(() => import('widgetsModule/news')));
const Dashboard = MicroFrontend.import<DashboardProps>(React.lazy(() => import('dashboardModule/dashboard')));

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
					<AccountSelector
						items={[
							{ id: '1', name: 'Account 123', amount: 1000 },
							{ id: '2', name: 'Account 245678', amount: 9000 },
						]}
						value={accountId}
						onChange={setAccountId}
					/>
				</div>
				<div style={{ width: 'calc(50vw - 40px)', backgroundColor: 'orange', minHeight: '50vh' }}>
					{/* <MicroFrontend host={HostsConfig.dashboard} name="DashboardModule" id="dashboard2" /> */}
					<News
						items={[
							{
								id: '1',
								title: 'What is Lorem Ipsum?',
								text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
							},
							{
								id: '2',
								title: 'Why do we use it?',
								text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
							},
							{
								id: '3',
								title: 'Why do we use it 3?',
								text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
							},
						]}
					/>
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
			>
				<Dashboard numberOfWidgets={1}>
					<h1 style={{ color: '#fff' }}>Dashboard Example</h1>
				</Dashboard>
			</div>
			<div style={{ position: 'fixed', bottom: 0, minHeight: '55px', width: '100vw', backgroundColor: 'red' }}>
				Footer
			</div>
		</div>
	);
};
