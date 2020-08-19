import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import Typography from "@material-ui/core/Typography";
import InputAdornment from "@material-ui/core/InputAdornment";
import FaceIcon from "@material-ui/icons/Face";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import MailIcon from "@material-ui/icons/Mail";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import theme from "../utils/theme";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  marginIB: {
    margin: 0,
    padding: theme.spacing(1, 1, 0, 0),
  },
  buttonDaftar: {
    fontFamily: "Nunito",
    backgroundColor: theme.palette.primary.main,
    borderColor: theme.palette.primary.secondary,
    color: theme.palette.primary.secondary,
    margin: theme.spacing(2, 0, 2, 0),
    textTransform: "none",
    borderRadius: theme.spacing(5),
    minWidth: theme.spacing(32),
    minHeight: theme.spacing(4.5),
    "&:hover": {
      backgroundColor: theme.palette.primary.secondary,
      color: theme.palette.primary.main,
      textDecoration: "none",
      borderColor: theme.palette.primary.main,
    },
  },
  button: {
    fontFamily: "Nunito",
    backgroundColor: theme.palette.primary.main,
    borderColor: theme.palette.primary.secondary,
    color: theme.palette.primary.secondary,
    margin: theme.spacing(2, 0, 2, 0),
    textTransform: "none",
    borderRadius: theme.spacing(5),
    minWidth: theme.spacing(30),
    minHeight: theme.spacing(4.5),
    "&:hover": {
      backgroundColor: theme.palette.primary.secondary,
      color: theme.palette.primary.main,
      textDecoration: "none",
      borderColor: theme.palette.primary.main,
    },
  },
  iconField: {
    color: theme.palette.primary.main,
  },
  textField: {
    margin: theme.spacing(1, 0),
  },
  gambarRegister: {
    width: "80%",
  },
  createAkunText: {
    fontSize: `calc(1.5em + 0.1vw)`,
    fontFamily: "Nunito",
    color: "black",
    textAlign: "center",
    fontWeight: "bold",
  },
  sudahPunyaAkun: {
    fontFamily: "Nunito",
  },
  masuk: {
    color: theme.palette.primary.main,
    fontWeight: "bold",
  },
  rowField: {
    paddingBottom: theme.spacing(5),
  },
}));

const NewTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: theme.palette.primary.main,
    },
    "& placeHolder.Mui-focused": {
      color: theme.palette.primary.main,
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: theme.palette.primary.main,
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: theme.palette.primary.main,
        borderRadius: theme.spacing(5),
      },
      "&:hover fieldset": {
        borderColor: theme.palette.primary.main,
      },
      "&.Mui-focused fieldset": {
        borderColor: theme.palette.primary.main,
      },
    },
  },
})(TextField);

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Register() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        className={classes.button}
        variant="outlined"
        color="primary"
        onClick={handleClickOpen}
      >
        Aku mau!
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <Grid
          container
          direction="row"
          justify="flex-end"
          alignItems="flex-start"
        >
          <IconButton
            onClick={handleClose}
            aria-label="delete"
            className={classes.marginIB}
          >
            <CloseIcon />
          </IconButton>
        </Grid>
        <DialogContent>
          <Grid container>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              item
              md={6}
            >
              <img
                className={classes.gambarRegister}
                alt="register"
                src="/Assets/login-illustration.svg"
              />
            </Grid>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              item
              className={classes.rowField}
              md={6}
            >
              <Typography className={classes.createAkunText}>
                Buat Akun
              </Typography>
              <NewTextField
                className={classes.textField}
                id="input-with-icon-textfield"
                placeholder="Nama"
                variant="outlined"
                size="small"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <FaceIcon className={classes.iconField} />
                    </InputAdornment>
                  ),
                }}
              />
              <NewTextField
                className={classes.textField}
                id="input-with-icon-textfield"
                placeholder="Email"
                variant="outlined"
                size="small"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <MailIcon className={classes.iconField} />
                    </InputAdornment>
                  ),
                }}
              />
              <NewTextField
                className={classes.textField}
                id="input-with-icon-textfield"
                placeholder="Password"
                variant="outlined"
                size="small"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <VpnKeyIcon className={classes.iconField} />
                    </InputAdornment>
                  ),
                }}
              />

              <Button
                className={classes.buttonDaftar}
                variant="outlined"
                color="primary"
              >
                Daftar
              </Button>
              <Typography className={classes.sudahPunyaAkun}>
                Sudah punya akun?<span className={classes.masuk}> Masuk</span>
              </Typography>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </div>
  );
}
