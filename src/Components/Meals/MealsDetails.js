// <<<<<<< aisha
import { Grid, makeStyles, Paper } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useProducts } from '../../contexts/MealsContext';
import MySpinner from '../../shared/MySpinner';
import {
  ImageWithZoom,
  Slider,
  CarouselProvider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const useStyles = makeStyles((theme) => ({
  custom_container: {
    marginTop: '60px',
    alignItems: 'center',
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    textAlign: 'left',
  },
}));

const MealsDetails = () => {
  const { fetchOneMeal, mealDetails } = useProducts();
  const { id } = useParams();

  useEffect(() => {
    fetchOneMeal(id);
  }, []);

  const classes = useStyles();
  return (
    <Grid container>
      {mealDetails ? (
        <Grid container className={classes.custom_container}>
          <Grid item md={4}>
            <CarouselProvider
              naturalSlideWidth={100}
              naturalSlideHeight={125}
              totalSlides={3}
            >
              <Slider>
                <Slide index={0}>
                  <ImageWithZoom src={mealDetails.image} />
                </Slide>
                <Slide index={1}>
                  <ImageWithZoom src={mealDetails.image} />
                </Slide>
                <Slide index={2}>
                  <ImageWithZoom src={mealDetails.image} />
                </Slide>
              </Slider>
              <ButtonBack>Back</ButtonBack>
              <ButtonNext>Next</ButtonNext>
            </CarouselProvider>
          </Grid>
          <Grid item md={6}>
            <Paper elevation={3} className={classes.paper}>
              <table>
                <tbody>
                  <tr>
                    <th>Name:</th>
                    <td>{mealDetails.title}</td>
                  </tr>
                  {/* <tr>
                    <th>Price:</th>
                    <td>{mealDetails.price}</td>
                  </tr>

                  {mealDetails.salePrice ? (
                    <tr>
                      <th>Sale Price:</th>
                      <td>{mealDetails.salePrice}</td>
                    </tr>
                  ) : null} */}

                  <tr>
                    <th>Description:</th>
                    <td>{mealDetails.description}</td>
                  </tr>
                  {/* <tr>
                    <th>Phone:</th>
                    <td>{mealDetails.phone}</td>
                  </tr>
                  <tr>
                    <th>Author:</th>
                    <td>{mealDetails.author}</td>
                  </tr> */}
                  <tr>
                    <th>Category:</th>
                    <td>{mealDetails.category}</td>
                  </tr>
                  <tr>
                    <th>for Person:</th>
                    <td>{mealDetails.countInStock}</td>
                  </tr>
                </tbody>
              </table>
            </Paper>
          </Grid>
        </Grid>
      ) : (
        <MySpinner />
      )}
    </Grid>
  );
};

export default MealsDetails;
// =======

// >>>>>>> tansuu
