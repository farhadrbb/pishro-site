import React, { useState, useEffect, useRef } from "react";
import { makeStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { convertNumberToPersian } from "../../../../method/convertDigitToEnglish";

let useStyle = makeStyles((theme) => ({
  root: {
    width: "35%",
    minWidth: "33%",
    height: "65vh",
    overflow: "auto",
    backgroundColor: "white",
    padding: 15,
    borderRadius: 5,
    border: "none",
    [theme.breakpoints.down("sm")]: {
      width: "90%",
      maxHeight: "80vh",
    },
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  desc: {
    lineHeight: 2.5,
  },
  icon: {
    width: 15,
    height: 15,
    cursor: "pointer",
  },
  button: {
    margin: "10px 0px",
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
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "none",
    overflow: "auto",
  },
  alignCenter: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  list: {
    marginLeft: 15,
    lineHeight: 1.5,
  },
}));

let flag = true

export default function Index() {
  let classes = useStyle();
  const [open, setOpen] = useState(flag);

  // console.log("ref", ref, "open", open)

  useEffect(() => {
    return () => {
      flag = false
    }
  }, [])


  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={open}
      onClose={() => setOpen(false)}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <div className={classes["root"]}>
          <Card setOpen={setOpen} />
        </div>
      </Fade>
    </Modal>
  );
}

function Card({ setOpen }) {
  let classes = useStyle();

  return (
    <>
      <div className={classes["header"]}>
        <h3 >مشتری گرامی کارگزاری پیشرو (سیمابگون)</h3>
        <svg
          className={classes["icon"]}
          onClick={() => setOpen(false)}>
          <use xlinkHref={"/sprit.svg#closeSmall"}></use>
        </svg>
      </div>
      <hr />
      <div>
        <p className={classes["desc"]}>
          در مطابق اطلاعیه شرکت سپرده‌گذاری , سهامدارانی که تا کنون
          سامانه سجام ثبت نام نکرده اند، کد معاملاتی آنها تا زمان مشخص‌شدن وضعیت سجامی
          مسدود (غیرقابل‌خرید و فروش) می‌گردد. لذا خواهشمند است در صورتی که
          هنوز در سامانه سجام ثبت‌نام نکرده‌اید،
          <br />
          {convertNumberToPersian("1")}- ابتدا از طریق لینک زیر در سامانه سجام ثبت ‌نام نمایید:
          <br />
          <div className={classes["alignCenter"]}>
            <Button
              variant="contained"
              className={classes.button}
              style={{ padding: "10px 30px" }}
              href={"https://yun.ir/sejampishro"}
              target="_blank"
            >
              ثبت نام در سامانه سجام
            </Button>
          </div>
          {convertNumberToPersian("2")}- سپس از طریق سامانه احراز هویت غیرحضوری سجام کارگزاری پیشرو به آدرس
          زیر نسبت به احراز هویت خود اقدام نمایید.
          <br />
          <div className={classes["alignCenter"]}>
            <Button
              variant="contained"
              className={classes.button}
              style={{ padding: "10px 30px" }}
              href={" https://ehraz.pishrobroker.ir"}
              target="_blank"
            >
              احراز هویت غیرحضوری در سامانه سجام
            </Button>
          </div>
          {convertNumberToPersian("3")}- پس از تأیید احراز هویت سجام اطلاعات می‌توانید با به‌روزرسانی
          قراردادهای خود از طریق درگاه ثبت ‌نام غیرحضوری کارگزاری پیشرو به‌راحتی
          از سامانه آنلاین کارگزاری و دیگر خدمات آن استفاده نمایید.
          <br />
          <div className={classes["alignCenter"]}>
            <Button
              variant="contained"
              className={classes.button}
              style={{ padding: "10px 10px" }}
              href={"https://reg.pishrobroker.ir"}
              target="_blank"
            >
              ثبت نام در کارگزاری و دریافت کد معاملاتی آنلاین
            </Button>
          </div>
         {
           convertNumberToPersian("در صورت نیاز به اطلاع بیشتر با شماره تلفن 02158117000 تماس حاصل نمایید .")
         }
        </p>
      </div>
    </>
  );
}
