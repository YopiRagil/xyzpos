import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import theme from "../../utils/theme";
import Grid from "@material-ui/core/Grid";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import Register from "../Register";

const useStyles = makeStyles({
  root: {
    width: 275,
    borderRadius: theme.spacing(2),
    marginTop: theme.spacing(3),
  },
  rootone: {
    maxWidth: 250,
    borderRadius: theme.spacing(2),
    marginTop: theme.spacing(3),
  },
  title: {
    fontSize: 15,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.secondary,
    textAlign: "center",
    fontWeight: "bold",
    fontFamily: "Nunito",
    padding: theme.spacing(0.5),
  },
  paket: {
    fontSize: `calc(0.7em + 0.7vw)`,
    fontFamily: "Nunito",
    color: theme.palette.primary.main,
    textAlign: "center",
    fontWeight: "bold",
  },
  rupiah: {
    fontSize: `calc(0.7em + 0.7vw)`,
    fontFamily: "Nunito",
    textAlign: "center",
    paddingBottom: theme.spacing(4),
  },
  harga: {
    fontFamily: "Nunito",
    fontSize: `calc(1.3em + 1.3vw)`,
    textAlign: "center",
    fontWeight: "bolder",
  },
  perwaktu: {
    fontFamily: "Nunito",
    fontSize: `calc(0.7em + 0.7vw)`,
    textAlign: "right",
    margin: theme.spacing(-2, 0, 2, 0),
  },
  checklist: {
    color: theme.palette.primary.main,
    fontSize: `calc(1em + 1vw)`,
    marginRight: theme.spacing(1),
  },
  information: {
    fontFamily: "Nunito",
    fontSize: `calc(0.5em + 0.5vw)`,
  },
});

function CardOne({ item }) {
  const classes = useStyles();

  return (
    <Card elevation={3} className={classes.rootone}>
      <CardContent>
        <Typography className={classes.paket}>{item.fiture}</Typography>
        <Grid container direction="row" justify="center" alignItems="center">
          <Typography className={classes.rupiah}>Rp</Typography>
          <Typography className={classes.harga}>{item.harga}</Typography>
        </Grid>
        <Typography className={classes.perwaktu}>/bulan</Typography>
        {item.detail.map((element, index) => (
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid item xs={2}>
              <CheckCircleIcon className={classes.checklist} />
            </Grid>
            <Grid item xs={10}>
              <Typography className={classes.information}>{element}</Typography>
            </Grid>
          </Grid>
        ))}
      </CardContent>
      <CardActions>
        <Grid container direction="row" justify="center" alignItems="center">
          <Register />
        </Grid>
      </CardActions>
    </Card>
  );
}

function CardTwo({ item }) {
  const classes = useStyles();

  return (
    <Card elevation={3} className={classes.root}>
      <Typography className={classes.title} color="textSecondary" gutterBottom>
        Best Seller!
      </Typography>
      <CardContent>
        <Typography className={classes.paket}>{item.fiture}</Typography>
        <Grid container direction="row" justify="center" alignItems="center">
          <Typography className={classes.rupiah}>Rp</Typography>
          <Typography className={classes.harga}>{item.harga}</Typography>
        </Grid>
        <Typography className={classes.perwaktu}>/bulan</Typography>
        {item.detail.map((element, index) => (
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid item xs={2}>
              <CheckCircleIcon className={classes.checklist} />
            </Grid>
            <Grid item xs={10}>
              <Typography className={classes.information}>{element}</Typography>
            </Grid>
          </Grid>
        ))}
      </CardContent>
      <CardActions>
        <Grid container direction="row" justify="center" alignItems="center">
          <Register />
        </Grid>
      </CardActions>
    </Card>
  );
}

export default function CardAll({ paket }) {
  const classes = useStyles();
  return (
    <Grid container direction="row" justify="space-around" alignItems="center">
      {paket
        ? paket.map((item, index) =>
            item.best ? (
              <CardTwo key={index} item={item} />
            ) : (
              <CardOne item={item} key={index} />
            )
          )
        : null}
    </Grid>
  );
}
