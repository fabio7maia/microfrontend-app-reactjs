import React from 'react';
import { useHistory } from 'react-router-dom';
import { store } from '../../app';

const w: any = window;

interface MicroFrontendProps {
	name: string;
	host: string;
	id?: string;
}

export const MicroFrontend: React.FC<MicroFrontendProps> = ({ name, host, id = name }) => {
	const history = useHistory();

	React.useEffect(() => {
		const scriptId = `micro-frontend-script-${name}`;

		const renderMicroFrontend = () => {
			w[`render${name}`](`${id}-container`, { history, store });
		};

		if (document.getElementById(scriptId)) {
			renderMicroFrontend();
			return;
		}

		fetch(`${host}/asset-manifest.json`)
			.then((res) => res.json())
			.then((manifest) => {
				const script = document.createElement('script');
				script.id = scriptId;
				script.crossOrigin = '';
				script.src = `${host}${manifest.files['main.js']}`;
				script.onload = () => {
					renderMicroFrontend();
				};
				document.head.appendChild(script);
			});

		return () => {
			w[`unmount${name}`] && w[`unmount${name}`](`${name}-container`);
		};
	}, []);

	return <main id={`${id}-container`} />;
};
