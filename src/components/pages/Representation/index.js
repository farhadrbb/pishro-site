import { Box, makeStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../../layout";
import NewTable from "./table2";
import { actionTypes as actionTypesAcc } from "../../../redux/shoab/select_shoab";
import { convertNumberToPersian } from "../../method/convertDigitToEnglish";


let flagOne = false;

const useStyles = makeStyles((theme) => ({
  search: {
    width: 250,
    position: "relative",
    display: "flex",
    borderRadius: "10px 0 0 10px",
    marginBottom: 10,
    marginRight: 20,
    "@media (min-width: 0) and (max-width: 400px)": {
      width: "100%",
    },
    "@media (min-width: 401px) and (max-width: 768px)": {
      width: "300px",
    },
  },

  searchTerm: {
    width: "100%",
    border: "1.5px solid #009A44",
    padding: 5,
    height: 36,
    borderRadius: "7px 7px 7px 7px",
    boxShadow: " rgba(0, 0, 0, 0.24) 0px 3px 8px",
    outline: "none",
    color: "#9DBFAF",
    "&:focus": {
      color: "black !important",
    },
    "&::placeholder": {
      color: "rgb(167, 167, 167) !important",
    },
  },

  searchButton: {
    width: 40,
    height: 36,
    textAlign: "center",
    color: "#009A44",
    borderRadius: " 0 10px 10px 0",
    cursor: "pointer",
    fontSize: 20,
    paddingTop: 2,
    marginRight: 15,
    marginTop: 2,
  },
  block: {
    width: "100%",
    height: 0,
    visibility: "hidden",
    boxShadow: " rgba(0, 0, 0, 0.15) 0px 5px 15px 0px",
  },
  none: {
    width: "100%",
    height: 0,
    visibility: "hidden",
    opacity: 0,
    animation: "$fadeOut 0.4s",
  },
  filter: {
    width: "100%",
    height: 36,
    visibility: "visible",
    opacity: 1,
    borderRadius: 10,
    animation: "$fadeIn 0.4s",
  },

  "@keyframes fadeIn": {
    "0%": {
      visibility: "hidden",
      opacity: 0,
      width: "100%",
      height: 0,
      boxShadow: 0,
    },
    "100%": {
      visibility: "visible",
      opacity: 1,
      width: "100%",
      height: 36,
    },
  },

  "@keyframes fadeOut": {
    "0%": {
      visibility: "visible",
      opacity: 1,
      width: "100%",
      height: 36,
    },
    "100%": {
      visibility: "hidden",
      opacity: 0,
      width: "100%",
      height: "0",
    },
  },
  gridTable: {
    width: "90%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
}));

export default function Index() {
  const [cityName, setCityName] = useState("");
  const [FlagFilter, setFlagFilter] = useState(false);
  const dispatch = useDispatch();


  const stateReducerAccounts = useSelector(
    (state) => state.Shoab_select_reducer
  );

  useEffect(() => {
    dispatch({ type: actionTypesAcc.selectShoabAync });
  }, []);


  const handleInputChange = (value) => {
    setCityName(value);
  };

  const handleFlagFilter = () => {
    flagOne = true;
    setFlagFilter((prev) => !prev);
  };
  const classes = useStyles();
  return (
    <Layout>
      {
        !stateReducerAccounts.loading && (
          <Box margin="90px auto 0 auto" style={{ width: "88%", display: "flex" }}>
            {" "}
            <div className={classes.searchButton}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                fill="currentColor"
                class="bi bi-search"
                viewBox="0 0 16 16"
                onClick={handleFlagFilter}
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </div>
            <div
              className={
                FlagFilter
                  ? classes.filter
                  : flagOne === false
                    ? classes.block
                    : classes.none
              }
            >
              <div className={classes.search}>
                <input
                  type="text"
                  className={classes.searchTerm}
                  placeholder="جستجو براساس شهر"
                  onChange={(e) => handleInputChange(e.target.value)}
                />
              </div>
            </div>
          </Box>
        )
      }

      <Box className={classes.gridTable} margin="10px auto 100px auto">
        <NewTable columns={columns} rows={stateReducerAccounts.data} cityName={cityName} loading={stateReducerAccounts.loading} />
      </Box>
    </Layout>
  );
}

const columns = [
  { id: "ProvinceName", label: "استان", minWidth: 50, align: "center" },
  { key: 2, id: "CityName", label: "شهر", minWidth: 50, align: "center" },
  {
    key: 3,
    id: "Name",
    label: "نام شعبه",
    minWidth: 50,
    align: "center",
  },
  { key: 4, id: "DirectorName", label: "مسئول", minWidth: 50, align: "center" },

  {
    id: "Address",
    label: "آدرس",
    minWidth: 170,
    align: "left",
    format: (value) => convertNumberToPersian(value),
  },
  {
    id: "PhoneNumber",
    label: "تلفن",
    minWidth: 50,
    align: "center",
    format: (value) => convertNumberToPersian(value),
  },
  {
    id: "CityCodePhoneNumber",
    label: "پیش شماره",
    minWidth: 50,
    align: "center",
    format: (value) => convertNumberToPersian(value),
  },
  {
    id: "PostalCode",
    label: "کد پستی",
    minWidth: 150,
    align: "center",
    format: (value) => convertNumberToPersian(value),
  },
  {
    id: "GoogleMapUrl",
    label: "لوکیشن",
    minWidth: 150,
    align: "center",
  },
];



// let rows = [
//   {
//     row: 1,
//     province: "تهران",
//     city: "تهران",
//     branch_name: "آرژانتین ",
//     responsible: "دادخواه",
//     phone: "58117133",
//     areaCode: "021",
//     internal: null,
//     addres:
//       "تهران، خیابان شهید بهشتی، خیابان احمد قصیر (بخارست)، کوچه دهم غربی، پلاک 14، طبقه دوم",
//     postal_code: "1557617658",
//     location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d240.71977028125582!2d51.418020903108015!3d35.73294995830074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e014d22bc00c3%3A0xaa7837acef632af9!2sPishro%20Exchange%20and%20Security%20Brokerage!5e0!3m2!1sen!2slv!4v1641886474402!5m2!1sen!2slv"
//   },
//   {
//     row: 2,
//     province: "تهران",
//     city: "تهران",
//     branch_name: "برج بخارست",
//     responsible: "‌الهی",
//     phone: "58117136",
//     areaCode: "021",
//     // internal: "307",
//     internal: null,
//     addres:
//       "تهران، خیابان شهید بهشتی، خیابان شهید احمد‌قصیر (بخارست)، جنب خیابان نهم، پلاک 1، برج بخارست، طبقه همکف",
//     postal_code: "1513746513",
//     location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d962.8855608661722!2d51.416355428292704!3d35.73241402148635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e016c61f53003%3A0x6d3ab56c61a2a782!2z2qnYp9ix2q_Ystin2LHbjCDYs9uM2YXYp9io2q_ZiNmGINqp2KfZhNin!5e0!3m2!1sen!2sit!4v1641909882585!5m2!1sen!2sit"
//   },
//   {
//     row: 3,
//     province: "تهران",
//     city: "تهران",
//     branch_name: "آپادانا",
//     responsible: "میرزایی",
//     phone: "58117139",
//     areaCode: "021",
//     internal: null,
//     addres: "تهران، خیابان خرمشهر (آپادانا)، پلاک 35، طبقه 4",
//     postal_code: "1557617654",
//     location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1619.3033670825535!2d51.43715845872192!3d35.73588920000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e03fb33cf77d9%3A0xe780b01d549d580!2sPishro%20Broker!5e0!3m2!1sen!2sit!4v1641909990757!5m2!1sen!2sit"
//   },
//   {
//     row: 4,
//     province: "تهران",
//     city: "تهران",
//     branch_name: "شهرک غرب",
//     responsible: "کورشی‌کیا",
//     phone: "58117412",
//     areaCode: "021",
//     internal: null,
//     addres:
//       "شهرک غرب، بلوار دادمان، مقابل خیابان حسن سیف، نبش کوی صدف، پلاک 1، طبقه 4",
//     postal_code: "1466913867",
//     location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6475.037295649797!2d51.362827808854355!3d35.762634173736195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e07b145edaf31%3A0x833c7a0d31388a53!2z2qnYp9ix2q_Ystin2LHbjCDZvtuM2LTYsdmILSDYtNmH2LHaqSDYutix2Kg!5e0!3m2!1sen!2sit!4v1641909750220!5m2!1sen!2sit"
//   },
//   {
//     row: 5,
//     province: "اصفهان",
//     city: "اصفهان",
//     branch_name: "کوثر",
//     responsible: "رفیعیان",
//     phone: "36204585",
//     areaCode: "031",
//     internal: null,
//     addres:
//       "اصفهان، ابتدای چهار باغ بالا، مجتمع تجاری_اداری کوثر، فاز 2 ، واحد 535",
//     postal_code: "8196786193",
//     location: ""
//   },
//   {
//     row: 6,
//     province: "کرمان",
//     city: "رفسنجان",
//     branch_name: "رفسنجان",
//     responsible: "اسماعیلی‌",
//     phone: "34267775",
//     areaCode: "034",
//     internal: null,
//     addres: "کرمان، رفسنجان، بلوار طالقانی، بعد از تقاطع ۱۷ شهریور، پلاک چهار",
//     postal_code: "7717813937",
//     location: ""
//   },
//   {
//     row: 7,
//     province: "زنجان",
//     city: "زنجان",
//     branch_name: "زنجان",
//     responsible: "شریفی",
//     phone: "33557848",
//     areaCode: "024",
//     internal: null,
//     addres:
//       "زنجان، خیابان سعدی شمالی، روبروی بیمارستان ارتش، کوچه فروردین، پلاک 5",
//     postal_code: "4513645944",
//     location: ""
//   },
//   {
//     row: 8,
//     province: "سمنان",
//     city: "سمنان",
//     branch_name: "سمنان",
//     responsible: "کسائیان",
//     phone: "33360401",
//     areaCode: "023",
//     internal: null,
//     addres:
//       "سمنان، میدان مشاهیر، ابتدای بلوار میرزای شیرازی، پلاک 20، ساختمان طاها، طبقه سوم",
//     postal_code: "3519697371",
//     location: ""
//   },
//   {
//     row: 9,
//     province: "مازندران",
//     city: "سلمان شهر",
//     branch_name: "سلمان‌شهر",
//     responsible: "ساحلی",
//     phone: "54633267",
//     areaCode: "011",
//     internal: null,
//     addres:
//       "مازندران، سلمان‌شهر، خیابان امام خمینی، مجتمع تجاری قو الماس خاورمیانه، طبقه همکف، واحد 40",
//     postal_code: "4671717549",
//     location: ""
//   },
//   {
//     row: 10,
//     province: "آذربایجان شرقی",
//     city: "تبریز",
//     branch_name: "ارتش",
//     responsible: "محمودی",
//     phone: "35427276",
//     areaCode: "041",
//     internal: null,
//     addres:
//       "آذربایجان شرقی، تبریز، ارتش جنوبی، روبه‌رو پست مرکزی، پلاک 471، طبقه همکف",
//     postal_code: "5138619687",
//     location: ""
//   },
//   {
//     row: 11,
//     province: "قم",
//     city: "قم",
//     branch_name: "قم",
//     responsible: "سید مجتبی مطهری",
//     phone: "33800338--33800640",
//     areaCode: "025",
//     internal: null,
//     addres: "قم,میدان سعیدی,خیابان 7 تیر,بین کوچه 5و7 پلاک 165 ساختمان 313",
//     postal_code: "3719617976",
//     location: ""
//   },
//   {
//     row: 12,
//     province: "آذربایجان غربی",
//     city: "چایپاره",
//     branch_name: "چایپاره",
//     responsible: "رضا حسین زاده",
//     phone: "044-36723570",
//     areaCode: "044",
//     internal: null,
//     addres: "آذربایجان,شهرستان چایپاره,خیابان معلم,جنب کوچه امام سجاد",
//     postal_code: "5851913848",
//     location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.38413359419!2d45.02517791535016!3d38.892330179571395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5329fda4740bd41a!2zMzjCsDUzJzMyLjQiTiA0NcKwMDEnMzguNSJF!5e0!3m2!1sen!2s!4v1644753694473!5m2!1sen!2s"
//   },
// ];
