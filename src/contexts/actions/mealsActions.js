import {
   GET_MEALS_ERROR,
   GET_MEALS_LOADING,
   GET_MEALS_SUCCESS,
   SET_SEARCH_RESULTS,
} from '../../utils/constants';

export const mealsLoading = () => ({ type: GET_MEALS_LOADING });

export const mealsSuccess = (data) => ({ type: GET_MEALS_SUCCESS, payload: data });

export const mealsError = (msg) => ({ type: GET_MEALS_ERROR, payload: msg });

export const setSearchResults = (data) => ({ type: SET_SEARCH_RESULTS, payload: data });
