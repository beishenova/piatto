import { LocalConvenienceStoreOutlined } from '@material-ui/icons';
import React, { createContext, useContext, useReducer } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { $api } from '../service/axios-config';
import { checkItemInFavorite } from '../utils/check-item-cart';
import {
    ADD_AND_DELETE_MEAL_IN_FAVORITE,
    GET_FAVORITE,
    GET_MEALS_ERROR,
    GET_MEALS_LOADING,
    GET_MEALS_SUCCESS,
    GET_MEAL_ERROR,
    GET_MEAL_LOADING,
    GET_MEAL_SUCCESS,
    SET_SEARCH_RESULTS,
} from '../utils/constants';
import { mealError, mealLoading, mealSuccess } from './actions/mealDetailsActions';
import { mealsError, mealsLoading, mealsSuccess, setSearchResults } from './actions/mealsActions';

const mealsContext = createContext();

export const useMeals = () => useContext(mealsContext);

const initialState = {
    loading: false,
    error: null,
    meals: [],
    mealDetails: {
        loading: false,
        error: null,
        meal: null,
    },
    favoriteData: JSON.parse(localStorage.getItem('favorite')) ? JSON.parse(localStorage.getItem('favorite')).meals.length : 0,
    favorite: {},
    searchResults: [],
};

const reducer = (state, action) => {
    switch (action.type) {
        case GET_MEALS_LOADING:
            return { ...state, loading: true };

        case GET_MEALS_ERROR:
            return { ...state, loading: false, meals: [], error: action.payload };

        case GET_MEALS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                meals: action.payload,
            };

        case GET_MEAL_LOADING:
            return {
                ...state,
                mealDetails: { ...state.mealDetails, loading: true },
            };

        case GET_MEAL_SUCCESS:
            return {
                ...state,
                mealDetails: {
                    ...state.mealDetails,
                    loading: false,
                    error: null,
                    meal: action.payload,
                },
            };

        case GET_MEAL_ERROR:
            return {
                ...state,
                mealDetails: {
                    ...state.mealDetails,
                    loading: false,
                    error: action.payload,
                    meal: null,
                },
            };

        case ADD_AND_DELETE_MEAL_IN_FAVORITE:
            return {
                ...state,
                favoriteData: action.payload,
            };

        case GET_FAVORITE:
            return {
                ...state,
                favorite: action.payload,
            };

        case SET_SEARCH_RESULTS:
            return {
                ...state,
                searchResults: action.payload,
            };

        default:
            return state;
    }
};

const MealsContext = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const location = useLocation();
    const navigate = useNavigate();

    const fetchMeals = async () => {
        dispatch(mealsLoading());
        try {
            const { data } = await $api(`/${window.location.search}`);
            console.log(window.location.search);
            setTimeout(() => {
                dispatch(mealsSuccess(data));
            }, 1000);
        } catch (error) {
            console.log(error.message);
            dispatch(mealsError(error.message));
        }
    };

    const fetchOneMeal = async (id) => {
        dispatch(mealLoading());
        try {
            const { data } = await $api(`/${id}`);
            dispatch(mealSuccess(data));
        } catch (error) {
            console.log(error.message);
            dispatch(mealError(error.message));
        }
    };

    const addAndDeleteMealInFavorite = (meal) => {
        let favorite = JSON.parse(localStorage.getItem('favorite'));
        if (!favorite) {
            favorite = {
                meals: [],
            };
        }
        let newMeal = {
            count: 1,
            meal: meal,
        };

        //DELETE FROM CART
        // let newCart = cart.products.filter((item) => item.product.id === product.id);
        const isItemInFavorite = checkItemInFavorite(favorite.meals, meal.id);
        if (isItemInFavorite) {
            favorite.meals = favorite.meals.filter((item) => item.meal.id !== meal.id);
        } else {
            favorite.meals.push(newMeal);
        }
        dispatch({
            type: ADD_AND_DELETE_MEAL_IN_FAVORITE,
            payload: favorite.meals.length,
        });
    };

    const getFavorite = () => {
        let favoriteFromLS = JSON.parse(localStorage.getItem('favorite'));
        dispatch({
            type: GET_FAVORITE,
            payload: favoriteFromLS,
        });
    };

    const changeMealCount = (newCount, id) => {
        const favorite = JSON.parse(localStorage.getItem('favorite'));
        favorite.meals = favorite.meals.map((item) => {
            if (item.meal.id === id) {
                item.count = newCount;
            }
            return item;
        });

        localStorage.setItem('favorite', JSON.stringify(favorite));
        getFavorite();
    };

    const fetchByParams = async (query, value) => {
        const search = new URLSearchParams(location.search);
        if (value === 'all') {
            search.delete(query);
        } else if (Array.isArray(value)) {
            search.set('price_gte', value[0]);
            search.set('price_lte', value[1]);
        } else {
            search.set(query, value);
        }
        const url = `${location.pathname}?${search.toString()}`;
        navigate(url);
    };

    const fetchSearchMeals = async (value) => {
        try {
            if (!value) {
                dispatch(setSearchResults([]));
                return;
            }
            const { data } = await $api(`?q=${value}`);
            dispatch(setSearchResults(data));
        } catch (e) {
            console.log(e.message);
        }
    };

    const values = {
        meals: state.meals,
        loading: state.loading,
        error: state.error,
        mealDetailsLoading: state.mealDetails.loading,
        mealDetails: state.mealDetails.meal,
        mealDetailsError: state.mealDetails.error,
        favoriteData: state.favoriteData,
        favorite: state.favorite,
        searchResults: state.searchResults,
        fetchMeals,
        fetchByParams,
        fetchOneMeal,
        addAndDeleteMealInFavorite,
        getFavorite,
        fetchSearchMeals,
        dispatch,
        changeMealCount,
    };

    return <mealsContext.Provider value={values}>{children}</mealsContext.Provider>;
};

export default MealsContext;
