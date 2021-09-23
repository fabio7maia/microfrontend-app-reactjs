import React from 'react';

interface UnexpectedErrorProps {
	error: string; // injected by ErrorBoundary component
}

export const UnexpectedError: React.FC<UnexpectedErrorProps> = ({ error }) => {
	return null;
};
