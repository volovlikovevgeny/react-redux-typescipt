import axios from 'axios';
import { Dispatch } from 'redux';
import { Actiontype } from '../types/index';
import { Action } from './index';

export const searchRepositories = (term: string) => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: Actiontype.SEARCH_REPOSITORIES,
        });

        try {
            const { data } = await axios.get('https://registry.npmjs.org/-/v1/search', {
                params: {
                    text: term,
                },
            });

            const names = data.objects.map((result: any) => result.package.name);

            dispatch({
                type: Actiontype.SEARCH_REPOSITORIES_SUCCESS,
                payload: names,
            });

        } catch (err) {
            dispatch({
                type: Actiontype.SEARCH_REPOSITORIES_FAILURE,
                payload: err.message,
            });
        }
    };
};
