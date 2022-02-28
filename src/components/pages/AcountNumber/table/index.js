import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import TableContainer from "@material-ui/core/TableContainer";
import { Accordion, Card } from "react-bootstrap";
import style from "./style.module.css";
import "./custom.css";
import Styles from "../table2/index.module.scss";
import { convertNumberToPersian } from "../../../method/convertDigitToEnglish";
import { CircularProgress } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    // boxShadow:'none !important',
  },
  container: {
    maxHeight: "85vh",
    [theme.breakpoints.down("md")]: {
      "& td": {
        fontSize: "0.8em",
      },
    },
  },
  icons: {
    display: "inline-block",
    margin: "0px 5px",
  },
}));

export default function StickyHeadTable({
  columns,
  state,
  stateReducerAccounts,
}) {
  const classes = useStyles();
  const [stateArray, setStateArray] = useState([]);

  const [flag, setFlag] = React.useState(0);

  const handleClick = (ind) => {
    setFlag(ind);
  };

  const removeDuplicateCategory = () => {
    let dup;
    let array = [];
    let allarray;
    if (state.length !== 0) {
      state.map((itm, ind) => {
        if (itm.Group !== dup) {
          array.push(itm.Group);
          allarray = array.filter((itm, ind) => {
            return array.indexOf(itm) === ind;
          });
        }

        dup = itm.Group;
      });
      setStateArray(allarray);
    }
  };
  useEffect(() => {
    removeDuplicateCategory();
  }, [state]);

  return (
    <Paper className={classes.root}>
      {stateReducerAccounts.loading && (
        <div className="d-flex w-100 justify-content-center ">
          <CircularProgress />
        </div>
      )}
      <TableContainer className={classes.container}>
        <Accordion
          className={style.root}
          style={{ direction: "rtl" }}
          defaultActiveKey="0"
        >
          {stateArray?.map((item, index) => (
            <Card className={style.cardAccordion} key={index}>
              <Accordion.Toggle
                as={Card.Header}
                eventKey={JSON.stringify(index)}
                className={style.accordionHeader}
                onClick={() => handleClick(index)}
                style={{ fontWeight: "bold" }}
              >
                {flag === index ? (
                  <span className={classes["icons"]}>+</span>
                ) : (
                  <span className={classes["icons"]}>-</span>
                )}
                {item}
              </Accordion.Toggle>
              <Accordion.Collapse eventKey={JSON.stringify(index)}>
                <Card.Body className="table-responsive">
                  <table className={Styles.table} id="listingTable">
                    <thead>
                      <tr>
                        {columns.map((itm, ind) => (
                          <th>{itm.label}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {state?.map(
                        (itm, ind) =>
                          item === itm.Group && (
                            <tr>
                              <td>{itm.Bank}</td>
                              <td>{itm.Branch ? itm.Branch : "-"}</td>
                              <td>{convertNumberToPersian(itm.Number)}</td>
                              <td>{convertNumberToPersian(itm.Sheba)}</td>
                            </tr>
                          )
                      )}
                    </tbody>
                  </table>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          ))}
        </Accordion>
      </TableContainer>
    </Paper>
  );
}
