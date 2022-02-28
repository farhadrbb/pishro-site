import { makeStyles } from "@material-ui/core";
import React from "react";
import { convertNumberToPersian } from "../../../method/convertDigitToEnglish";
const useStyles = makeStyles((theme) => ({
  infoParent: {
    width: "100%",
    marginTop: 20,
  },
}));

const InfoContactUs = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.infoParent}>
        <ul className="list-unstyled d-flex flex-column">
          <li className="d-flex mb-4">
            <div>
              <img src="/assets/images/Path 2687.png" alt="" />
            </div>
            <div className="me-2">
              <b>
               {convertNumberToPersian("تهران،خیابان سهروردی شمالی، خیابان خرمشهر (آپادانا)، جنب شهرداری، پلاک 35")}
              </b>
            </div>
          </li>
          <li className="d-flex mb-4">
            <div>
              <img src="/assets/images/Path 2687.png" alt="" />
            </div>
            <div className="me-2">
              <b>{convertNumberToPersian("‏58117000 - 021")}</b>
            </div>
          </li>
          <li className="d-flex mb-4">
            <div>
              <img src="/assets/images/Path 2687.png" alt="" />
            </div>
            <div className="me-2">
              <b>contact@pishrobroker.ir</b>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default InfoContactUs;
