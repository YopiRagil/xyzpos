import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(12, 12, 0, 12),
  },
  textMoto: {
    fontFamily: "Nunito",
    color: "black",
    fontSize: `calc(1em + 1.4vw)`,
  },
  textMoto2: {
    fontFamily: "Nunito",
    fontWeight: "bold",
    color: theme.palette.primary.main,
    fontSize: `calc(1em + 1.4vw)`,
  },
  marginMotto: {
    margin: theme.spacing(6, 0),
  },
  button: {
    fontFamily: "Nunito",
    backgroundColor: theme.palette.primary.main,
    borderColor: theme.palette.primary.secondary,
    color: theme.palette.primary.secondary,
    padding: "20px 50px",
    margin: theme.spacing(2, 0, 0, 0),
    textTransform: "none",
    borderRadius: theme.spacing(5),
    minWidth: theme.spacing(40),
    maxHeight: "45px",
    "&:hover": {
      backgroundColor: theme.palette.primary.secondary,
      color: theme.palette.primary.main,
      textDecoration: "none",
      borderColor: theme.palette.primary.main,
    },
  },
  pictureHero: {
    width: "90%",
    margin: theme.spacing(5, 0),
  },
}));

export default function Hero(props) {
  const classes = useStyles();
  const handleScroll = () => {
    props.clickToScroll();
  };
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item md={6}>
          <div className={classes.marginMotto}>
            <Typography className={classes.textMoto}>
              Solusi terbaik untuk
            </Typography>
            <Typography className={classes.textMoto2}>
              mengelola usaha
            </Typography>
            <Typography className={classes.textMoto}>kamu!</Typography>
          </div>
          <Grid
            container
            direction="column"
            justify="flex-start"
            alignItems="flex-start"
          >
            <Button className={classes.button} variant="outlined">
              Masuk
            </Button>
            <Button
              onClick={handleScroll}
              className={classes.button}
              variant="outlined"
            >
              Pelajari Dulu!
            </Button>
          </Grid>
        </Grid>
        <Grid item md={6}>
          <img
            alt="herro"
            className={classes.pictureHero}
            src="/Assets/hero-section-illustration.svg"
          />
        </Grid>
      </Grid>
    </div>
  );
}
