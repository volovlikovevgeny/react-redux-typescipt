import { Actiontype } from '../types/index';

interface SearchRepositoriesAction {
    type: Actiontype.SEARCH_REPOSITORIES;
}

interface SearchRepositoriesSuccessAction {
    type: Actiontype.SEARCH_REPOSITORIES_SUCCESS;
    payload: string[]
}

interface SearchRepositoriesErrorAction {
    type: Actiontype.SEARCH_REPOSITORIES_FAILURE;
    payload: string
}

export type Action =
    SearchRepositoriesAction |
    SearchRepositoriesSuccessAction |
    SearchRepositoriesErrorAction
