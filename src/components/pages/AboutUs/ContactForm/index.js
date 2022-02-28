import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TitlePage from "../../../common/TitlePage";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import Alert from "./../../../common/Alerts";
import { contactUs_insert } from "../../../../redux/contactUs/contactUs_insert/contactUs_insert";
import { CircularProgress } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "90%",
    // margin: '0 70px 130px auto',
    margin: "auto",
    marginBottom: 50,
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  content: {
    width: "100%",
    margin: "auto",
    height: 254,
    // textAlign: 'center',
    lineHeight: "30px",
    textAlign: "center",

    [theme.breakpoints.down("sm")]: {
      height: 210,
    },
    [theme.breakpoints.down("xs")]: {
      height: 290,
    },
    [theme.breakpoints.down("375")]: {
      height: 350,
    },
  },
  from: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
  },
  inputs: {
    backgroundColor: "#E8EBEE",
    width: "98%",
    marginBottom: 25,
    borderRadius: 6,
    "&  fieldset": {
      border: "none",
    },

    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  Box: {
    width: "50%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  openAccount: {
    backgroundColor: theme.palette.light.type2,
    color: "white",
    margin: "0 5px",
    padding: "10px 30px",
    borderRadius: 6,
    "&:active": {
      backgroundColor: theme.palette.light.type2,
    },
    "&:hover": {
      backgroundColor: theme.palette.light.type2,
    },
  },
  btns: {
    textAlign: "right",
  },
  TextareaAutosize: {
    width: "100%",
    minHeight: 100,
    resize: "none",
    border: "none",
    backgroundColor: "#E8EBEE",
    padding: 5,
    borderRadius: 6,
    outline: "none",
  },
  title: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.down("xs")]: {
      fontSize: 20,
    },
  },
  //     content: {
  //     },
}));

var cleartimeout;

export default function Index() {
  const classes = useStyles();
  const [data, setData] = useState({
    sender_full_name: "",
    title: "",
    sender_phone: "",
    sender_email: "",
    content: "",
  });
  const state = {
    title: "ارتباط با کارگزاری پیشرو",
    content:
      "اگر به فعالیت در حوزه بورس و بازارهای مالی علاقه‌مند هستید و آینده شغلی یکی از اولویت‌های اصلی شما است، ما می‌توانید اطلاعات خود را در فرم زیر ثبت کنید تا همکاران ما در اسرع وقت با شما تماس بگیرند. همچنین ما در کارگزاری پیشرو همواره منتظر پیشنهادات و انتقادات شما عزیزان هستیم تا بتوانیم خدمات بیشتر و بهتری به شما ارائه دهیم.",
  };
  const [statusAlert, setStatusAlert] = useState({
    status: false,
    typeAlert: undefined,
    textAlert: undefined,
  });
  const [loading, setLoading] = useState(false);

  const fetchData = () => {
    let url = "https://simabgoonbourse.ir/GradDB/V1/insert_request";
    setLoading(true);

    let dataa = {
      token: "3cf61fab-b50a-410f-9d59-3357ee4706fe",
      member_id: "_0zehXYBdxxYGfkX5_wd",
      api_key: "d025488f-8ec6-4434-afbe-b6a5343815a7",
      table: "contactus",
      method_type: "insert",
      data: {
        sender_email: data.sender_email,
        sender_full_name: data.sender_full_name,
        title: data.title,
        content: data.content,
        sender_phone: data.sender_phone,
        submit_date: null,
        status: null,
        response: null,
        response_date: null,
        response_source: null,
        responder_id: null,
        responder_first_name: null,
        responder_last_name: null,
      },
    };

    let option = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dataa),
    };

    // fetch(url, option)
    //   .then((response) => response.json())
    //   .then((res) => {
    //     if (res?.response?.is_successful) {
    //       setStatusAlert({
    //         status: true,
    //         textAlert: "با موفقیت انجام شد.",
    //         typeAlert: "success",
    //       });
    //
    //       setData({
    //         sender_full_name: "",
    //         title: "",
    //         sender_phone: "",
    //         sender_email: "",
    //         content: "",
    //       });
    //     } else {
    //       setStatusAlert({
    //         status: true,
    //         textAlert: "انجام نشد، دوباره تلاش بفرمایید.",
    //         typeAlert: "error",
    //       });
    //     }
    //   })
    //   .catch((err) => {
    //     setStatusAlert({
    //       status: true,
    //       textAlert: "انجام نشد، دوباره تلاش بفرمایید.",
    //       typeAlert: "error",
    //     });
    //     console.log("err", err);
    //   });
    let dataaa = {
      sender_email: data.sender_email,
      sender_full_name: data.sender_full_name,
      title: data.title,
      content: data.content,
      sender_phone: data.sender_phone,
      submit_date: null,
      status: null,
      response: null,
      response_date: null,
      response_source: null,
      responder_id: null,
      responder_first_name: null,
      responder_last_name: null,
    };

    contactUs_insert(dataaa)
      .then((res) => {
        if (res?.data?.response?.is_successful) {
          setStatusAlert({
            status: true,
            textAlert: "با موفقیت انجام شد.",
            typeAlert: "success",
          });
          setLoading(false);

          setData({
            sender_full_name: "",
            title: "",
            sender_phone: "",
            sender_email: "",
            content: "",
          });
        } else {
          setLoading(false);
          setStatusAlert({
            status: true,
            textAlert: "انجام نشد، دوباره تلاش بفرمایید.",
            typeAlert: "error",
          });
        }
      })
      .catch((err) => {
        setStatusAlert({
          status: true,
          textAlert: "انجام نشد، دوباره تلاش بفرمایید.",
          typeAlert: "error",
        });
        setLoading(false);
      });
  };

  const handleSubmit = () => {
    if (
      !data.sender_full_name ||
      !data.title ||
      !data.sender_phone ||
      !data.content
    ) {
      setStatusAlert({
        status: true,
        textAlert: "انجام نشد، همه مقادیر ورودی را باید پر کنید.",
        typeAlert: "warning",
      });
      return;
    }

    fetchData();
  };

  const handelChange = (value, type) => {
    setData((prev) => ({
      ...prev,
      [type]: value,
    }));
  };

  useEffect(() => {
    clearTimeout(cleartimeout);

    cleartimeout = setTimeout(() => {
      setStatusAlert(false);
    }, 5000);
  }, [statusAlert.status]);

  return (
    <div className={classes["root"]}>
      {statusAlert.status && (
        <Alert
          typeAlert={statusAlert.typeAlert}
          textAlert={statusAlert.textAlert}
        />
      )}

      <div className={classes["content"]}>
        <TitlePage position={"bottomCenter"}>
          <span className={classes.title}>{state.title}</span>
        </TitlePage>
        <p className={classes["content"]}>
          <b>{state.content}</b>
        </p>
      </div>
      {loading && <CircularProgress />}
      <div className={classes["from"]}>
        <Box mt={3} className={classes["Box"]}>
          <TextField
            id="outlined-basic"
            label={"نام و نام خانوادگی"}
            variant="outlined"
            size="small"
            value={data.sender_full_name}
            className={classes["inputs"]}
            onChange={(event) =>
              handelChange(event.target.value, "sender_full_name")
            }
          />
        </Box>
        <Box mt={2} className={classes["Box"]}>
          <TextField
            id="standard-select-currency"
            select
            label={"موضوع"}
            value={data.title}
            onChange={(event) => handelChange(event.target.value, "title")}
            size="small"
            fullWidth
            variant="outlined"
            margin="dense"
            className={classes["inputs"]}
          >
            {items.map((option, index) => {
              return (
                <MenuItem key={index} value={option.value}>
                  {" "}
                  {option.value}{" "}
                </MenuItem>
              );
            })}
          </TextField>
        </Box>
        <Box mt={3} className={classes["Box"]}>
          <TextField
            id="outlined-basic2"
            label={"شماره تماس"}
            variant="outlined"
            size="small"
            value={data.sender_phone}
            className={classes["inputs"]}
            onChange={(event) =>
              handelChange(event.target.value, "sender_phone")
            }
          />
        </Box>
        <Box mt={3} className={classes["Box"]}>
          <TextField
            id="outlined-basic3"
            label={"ایمیل"}
            variant="outlined"
            size="small"
            value={data.sender_email}
            className={classes["inputs"]}
            onChange={(event) =>
              handelChange(event.target.value, "sender_email")
            }
          />
        </Box>
        <Box width={"100%"} pb={3} mt={3}>
          <TextareaAutosize
            rowsMax={4}
            aria-label="maximum height"
            placeholder="پیام خود را وارد نمایید"
            value={data.content}
            className={classes["TextareaAutosize"]}
            onChange={(event) => handelChange(event.target.value, "content")}
          />
        </Box>
      </div>
      <div className={classes["btns"]}>
        <Button className={classes.openAccount} onClick={handleSubmit}>
          ثبت و ارسال
        </Button>
      </div>
    </div>
  );
}

const items = [
  { value: "انتقادات پیشنهادات" },
  { value: "ثبت نام" },
  { value: "معاملات" },
  { value: "بورس کالا" },
  { value: "بورس انرژی" },
  { value: "سبد گردانی" },
];

// dispatch({ type: "ALERT", payload: { status: true, textAlert: `خطایی رخ داد(${response.data.response.error_description})`, typeAlert: "error" } })
