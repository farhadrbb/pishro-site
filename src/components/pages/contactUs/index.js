import { Button, makeStyles } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router";
import Layout from "../../../layout";
import Form from "../AboutUs/ContactForm";
import InfoContactUs from "./info";

const useStyles = makeStyles((theme) => ({
  colMap: {
    paddingTop: 111,
    [theme.breakpoints.down("sm")]: {
      paddingTop: 20,
    },
  },
  openAccount: {
    backgroundColor: theme.palette.light.type2,
    color: "white",
    width: "100%",
    // margin: "0 5px",
    padding: "10px 60px",
    borderRadius: 6,
    "&:active": {
      backgroundColor: theme.palette.light.type2,
    },
    "&:hover": {
      backgroundColor: theme.palette.light.type2,
    },
  },

  //     content: {
  //     },
}));

const ContactUs = () => {
  const classes = useStyles();
  const { push } = useHistory();

  const handleRoute = () => {
    push("/Representation");
  };
  return (
    <>
      <Layout>
        <div style={{ width: "85%",display:'flex',justifyContent:'center',alignItems:'center' }} className="mx-auto">
          <div
            className="row w-100"
            style={{ marginTop: 70, marginBottom: 70 }}
          >
            <div className="col-12 col-xl-6">
              <Form />
            </div>
            <div className={`${classes.colMap} col-12 col-xl-6`}>
              {" "}
              <div className="mx-auto" style={{ width: "100%" }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3851.4253729060138!2d51.43807183847455!3d35.734830545724385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e03fb33cf77d9%3A0xe780b01d549d580!2sPishro%20Broker!5e0!3m2!1sen!2suk!4v1641964581255!5m2!1sen!2suk"
                  width="100%"
                  height="295"
                  allowfullscreen=""
                  loading="lazy"
                ></iframe>
                <InfoContactUs />
                <Button className={classes.openAccount} onClick={handleRoute}>
                  لیست شعب
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default ContactUs;
