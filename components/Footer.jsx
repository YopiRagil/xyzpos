import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    marginTop: theme.spacing(2),
  },
  textFooter: {
    fontFamily: "Nunito",
    fontWeight: "bold",
    color: theme.palette.primary.secondary,
    fontSize: `calc(0.5em + 0.4vw)`,
    padding: theme.spacing(3),
    textAlign: "center",
  },
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography className={classes.textFooter}>
        © PT XYZ Indonesia 2020
      </Typography>
    </div>
  );
}
