import { Button, Grid } from '@material-ui/core';
import React, { useMemo } from 'react';
import MealCard from './MealCard';

const MealsList = ({ meals }) => {
    const cart = JSON.parse(localStorage.getItem('cart')) ?? false;
    return (
        <Grid container spacing={3}>
            {meals.map((meal) => (
                <Grid item xs={4} key={meal.id}>
                    <MealCard meal={meal} cart={cart} />
                </Grid>
            ))}
        </Grid>
    );
};

export default ProductsList;