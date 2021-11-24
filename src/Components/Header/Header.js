import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import { authContext } from '../../contexts/AuthContext';
import Sidebar from '../Sidebar/Sidebar';
import { useMeals } from '../../contexts/MealsContent';
import { ClickAwayListener, InputBase } from '@material-ui/core';
import { Search } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: 'white',
  },
  title: {
    flexGrow: 1,
    color: 'white',
  },
}));

export default function Header() {
  const classes = useStyles();
  const [searchActive, setSearchActive] = React.useState(false);
  const { fetchSearchMeals } = useMeals(); 
  console.log(fetchSearchMeals, 'hello')
  const { registerUser, user, logOut } = useContext(authContext); 
  


  const handleSearch = (e) => {
    fetchSearchMeals(e.target.value);
  };



  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        style={{ backgroundColor: 'rgba(220, 195, 253, 0.67)' }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="black"
            aria-label="menu"
          >
            <Sidebar pageWrapId={'page-wrap'} outerContainerId={'App'} />
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Piatto
          </Typography>
          <ClickAwayListener onClickAway={() => setSearchActive(false)}>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                onFocus={() => setSearchActive(true)}
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                onChange={handleSearch}
                inputProps={{ 'aria-label': 'search' }}
              />
              {searchActive && (
                <div className={classes.searchBox}>
                  <Search />
                </div>
              )}
            </div>
          </ClickAwayListener>
          <div className={classes.grow} />
          {user ? (
            <>
              <p>{user.email}</p>
              <IconButton onClick={() => logOut()}>
                <Button variant="contained">Log Out</Button>
              </IconButton>
            </>
          ) : (
            <Button
              onClick={() => registerUser()}
              variant="contained"
              color="secondary"
            >
              Sign up
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
