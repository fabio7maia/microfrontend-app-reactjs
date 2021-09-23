import { Action, action, PayloadAction } from 'typesafe-actions';
import { BaseActionTypes } from './base.types';

export const changeLanguage = (language: string): PayloadAction<string, string> =>
	action(BaseActionTypes.changeLanguage, language);
