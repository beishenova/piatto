import { Grid, IconButton } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Shop } from '@material-ui/icons';
import MyLink from '../../shared/MyLink';
import { useProducts } from '../../contexts/ProductsContext';
import { checkItemInCart } from '../../utils/check-item-cart';

const useStyles = makeStyles({
  root: {
    maxWidth: '100%',
  },
  media: {
    height: 200,
    backgroundSize: 'contain',
  },
  actions: {
    justifyContent: 'space-between',
  },
});

const MealCard = ({ meal, cart }) => {
  const classes = useStyles();

  const { addAndDeleteMealInCart } = useProducts();

  const isMealInCart = () => {
    if (cart) {
      // console.log(checkItemInCart(cart.products, 0));
      return checkMealInCart(cart.meals, meal.id);
    }
    return false;
  };

  const inCart = isMealInCart();

  return (
    <Card className={classes.root}>
      <MyLink to={`/meal/${meal.id}`}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={meal.image}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {meal.title}
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              color="textSecondary"
              component="p"
            >
              {meal.description}
            </Typography>
            <Typography variant="subtitle1" color="textPrimary" component="p">
              Цена: {meal.price} сом
            </Typography>
            <Typography variant="subtitle1" color="textPrimary" component="p">
              Национальное {meal.category} 
            </Typography>
            <Typography variant="subtitle1" color="textPrimary" component="p">
              на сколько персон {meal.countInStock} 
            </Typography>
          </CardContent>
        </CardActionArea>
      </MyLink>
      <CardActions className={classes.actions}>
        <IconButton color={inCart ? 'secondary' : 'default'}>
          <ShoppingCartIcon />
        </IconButton>
        <Button
          onClick={() => addAndDeleteMealInCart(meal)}
          color="primary"
          variant="contained"
          startIcon={<Shop />}
        >
          Приготовить
        </Button>
      </CardActions>
    </Card>
  );
};

export default MealCard;
