import { Backdrop, Fade, makeStyles, Modal } from "@material-ui/core";
import React from "react";
import { convertNumberToPersian } from "../../../method/convertDigitToEnglish";
import Styles from "./index.module.scss";

let useStyles = makeStyles((theme) => ({
  tableParent: {
    width: "100%",
    paddingBottom: 15,
  },
  table: {
    backgroundColor: "#f2f2f2",
    width: "100%",
    "& tr": {
      "& :nth-child(odd)": {
        backgroundColor: "red",
      },
    },
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));




const Index = ({ columns, rows }) => {

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

 
  return (
    <>
      <div className={`${classes.tableParent} table-responsive`}>
        <table className={Styles.table} id="listingTable">
          <thead>
            <tr>
              {columns.map((itm, ind) => (
                <th>{itm.label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((itm, ind) => (
              <tr>
                {columns.map((info, ind) => (
                  <>
                    {info.id !== "location" ? (
                      <td>{convertNumberToPersian(itm[info.id])}</td>
                    ) : (
                      <td>
                        
                        <img src={itm.location.icon} alt="" />
                      </td>
                    )}
                  </>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Index;

// <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d240.71977028125582!2d51.418020903108015!3d35.73294995830074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e014d22bc00c3%3A0xaa7837acef632af9!2sPishro%20Exchange%20and%20Security%20Brokerage!5e0!3m2!1sen!2slv!4v1641886474402!5m2!1sen!2slv" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
