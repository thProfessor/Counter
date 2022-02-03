import { Grid, Typography, Button } from "@mui/material";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  btn: {
    backgroundColor: "red",
    color: "white",
    padding: "10px",
  },
  heading: {
    fontSize: "24px",
    color: "yellow",
  },
});

const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => (prevCount === 0 ? prevCount : prevCount - 1));
  };

  const reset = () => {
    setCount(0);
  };
  const classes = useStyles();
  return (
    <div>
      <Navbar name="Counter App" />
      <Grid container spacing={2}>
        <Grid item md={8}>
          <Typography variant="h2" className={classes.heading}>
            Value
          </Typography>
        </Grid>
        <Grid item md={4}>
          <Typography variant="h3">{count}</Typography>
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item md={4} xs={12}>
          <Button variant="contained" color="success" onClick={increment}>
            Increment
          </Button>
        </Grid>

        <Grid item md={4} xs={12}>
          <Button onClick={decrement} color="error">
            Decrement
          </Button>
        </Grid>

        <Grid item md={4} xs={12}>
          <Button className={classes.btn} onClick={reset}>
            Reset
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default App;

// counter app
// 1. increment
// 2. decrement
// 3. current value show
// 4. input value (2 +2 -2)
// 5. default value (0)
