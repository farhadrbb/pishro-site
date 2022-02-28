import React from "react";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import jMoment from "moment-jalaali";
import JalaliUtils from "@date-io/jalaali";
import "./index.module.scss";

// interface DateProps {
//     label?: any,
//     value?: any,
//     setValue?: any
// }

jMoment.loadPersian({ dialect: "persian-modern", usePersianDigits: true });

const Index = ({ label, value, setValue}) => {
  return (
    <div className={"bg-white"}>
      <MuiPickersUtilsProvider utils={JalaliUtils} locale="fa">
        <KeyboardDatePicker
          clearable
          label={label}
          okLabel="تایید"
          cancelLabel="لغو"
          clearLabel="پاک کردن"
          // labelFunc={value ? date => date.format("jYYYY/jMM/jDD") : ""}
          labelFunc={value ? (date) => date.format("jYYYY/jMM/jDD") : ""}
          // minDate={minDate ? minDate : null}
          // maxDate={maxDate ? maxDate : null}
          value={value}
          style={{ width: "100%" }}
          onChange={(data) => setValue(data)}
          size="small"
          // format="jYYYY/jMM/jDD"
          minDateMessage={<p>آیکون را کلیک کنید</p>}
          // minDate={moment().subtract(6, "months")}
          // maxDate={moment()}
        />
      </MuiPickersUtilsProvider>
    </div>
  );
};

export default Index;
