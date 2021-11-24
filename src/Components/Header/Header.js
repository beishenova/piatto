// <<<<<<< aisha
import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { authContext } from "../../contexts/AuthContext";
import Sidebar from "../Sidebar/Sidebar";
// =======
// import React, { useContext } from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
// import Typography from "@material-ui/core/Typography";
// import Button from "@material-ui/core/Button";
// import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/icons/Menu";
// import { authContext } from "../../contexts/AuthContext";
// >>>>>>> tansuu

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
        color: "white",
    },
    title: {
        flexGrow: 1,
        color: "white",
    },
}));

export default function Header() {
    const classes = useStyles();

    const { registerUser, user, logOut } = useContext(authContext);
    console.log(registerUser);
    console.log(user);
    console.log(logOut);

    return (
        <div className={classes.root}>
            <AppBar
                position="static"
                style={{ backgroundColor: "rgba(220, 195, 253, 0.67)" }}
            >
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="black"
                        aria-label="menu"
                    >
                        <Sidebar
                            pageWrapId={"page-wrap"}
                            outerContainerId={"App"}
                        />
                        <MenuIcon menu={Sidebar} />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Piatto
                    </Typography>
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
                            Sign Up
                        </Button>
                    )}
                </Toolbar>
            </AppBar>
        </div>
    );
}
