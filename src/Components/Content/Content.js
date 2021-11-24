import { Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useLocation } from 'react-router';
import { useProducts } from '../../contexts/MealsContext';
import MySpinner from '../../shared/MySpinner';
import MealsList from '../Meals/MealsList';
import './content.css';

const Content = () => {
    const { fetchMeals, loading, error, meals } = useProducts();

    const [page, setPage] = useState(0);

    const mealPerPage = 6;

    const location = useLocation();

    const pageCount = Math.ceil(meals.length / mealPerPage);

    const pageVisited = page * mealPerPage;

    const paginateMeals = meals.slice(pageVisited, pageVisited + mealPerPage);

    const changePage = ({ selected }) => {
        setPage(selected);
    };

    useEffect(() => {
        fetchMeals();
    }, [location.search]);

    return (
        <Grid item md={9}>
            {loading && <MySpinner size={50} />}
            {!loading && error && <h2>{error}</h2>}
            {!loading && products.length > 0 && (
                <>
                    <MealsList meals={paginateMeals} />
                    <ReactPaginate
                        previousLabel={'<'}
                        nextLabel={'>'}
                        pageCount={pageCount}
                        onPageChange={changePage}
                        containerClassName="pagination"
                        previousLinkClassName="previousBtn"
                        nextLinkClassName="nextBtn"
                        activeClassName="activeBtn"
                        disabledClassName="disabledBtn"
                    />
                </>
            )}
        </Grid>
    );
};

export default Content;