import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    width: "100%",
    backgroundColor: theme.palette.light.type2,
    color: "white",
    borderColor: theme.palette.light.type2,
    borderRadius: "0 15px 15px 15px",
    "&:active": {
      backgroundColor: theme.palette.light.type2,
    },
    "&:hover": {
      backgroundColor: theme.palette.light.type2,
    },
  },
  button2: {
    width: "100%",
    backgroundColor: theme.palette.light.type2,
    color: "white",
    borderColor: theme.palette.light.type2,
    borderRadius: "0 15px 15px 15px",
    position:'absolute',
    top:50,
    left:0,
    "&:active": {
      backgroundColor: theme.palette.light.type2,
    },
    "&:hover": {
      backgroundColor: theme.palette.light.type2,
    },
  },
}));

export default function Index({ data, padding, main }) {
  const classes = useStyles();
  const [flagOpen, setflagOpen] = useState(false);

  return (
    <>
      <div className="position-relative">
        <Button
          variant="contained"
          className={classes.button}
          style={{ padding: padding ? padding : "10px 30px" }}
          // href={
          //     main ? "https://reg.pishrobroker.ir" : "#"}
          // target="_blank"
          onClick={() => setflagOpen((prev) => !prev)}
        >
          <div>
            <span>{data.title}</span>
            {/* {
                    flagOpen && (
                        <>
                            <hr />
                            {data.title2}
                        </>
                    )
                } */}
          </div>
        </Button>
        {flagOpen && (
          <Button
            variant="contained"
            className={classes.button2}
            style={{ padding: padding ? padding : "10px 30px" }}
            // href={
            //     main ? "https://reg.pishrobroker.ir" : "#"}
            // target="_blank"
          >
            <div>
              <span>{data.title2}</span>
              {/* {
                    flagOpen && (
                        <>
                            <hr />
                            {data.title2}
                        </>
                    )
                } */}
            </div>
          </Button>
        )}
      </div>
    </>
  );
}
