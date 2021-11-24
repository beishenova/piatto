import { GET_MEAL_ERROR, GET_MEAL_LOADING, GET_MEAL_SUCCESS } from '../../utils/constants';

export const mealLoading = () => ({ type: GET_MEAL_LOADING });

export const mealSuccess = (data) => ({ type: GET_MEAL_SUCCESS, payload: data });

export const mealError = (msg) => ({ type: GET_MEAL_ERROR, payload: msg });
