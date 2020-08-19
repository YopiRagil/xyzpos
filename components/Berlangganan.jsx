import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import CardAll from "./berlangganan/Card";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(5, 12, 5, 12),
  },
  pembuka: {
    fontFamily: "Nunito",
    color: "black",
    fontSize: `calc(1em + 1vw)`,
    fontWeight: "bold",
  },
  textMoto2: {
    fontFamily: "Nunito",
    fontWeight: "bold",
    color: theme.palette.primary.main,
    fontSize: `calc(1em + 1.4vw)`,
  },
}));

export default function Berlangganan({ paket }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.pembuka}>
        Daftar sekarang dan nikmati fiturnya!
      </Typography>

      <CardAll paket={paket} />
    </div>
  );
}
