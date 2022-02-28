// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import CircleIcon from "../../../common/CircleIcon";
// import ButtonCustom from "../../../common/ButtonCustom";
// import ButtonCustomTwoParagragh from "../../../common/ButtonCustomTwoParagragh";
// import { useHistory } from "react-router";
//
// const useStyles = makeStyles((theme) => ({
//   card: {
//     minWidth: 328,
//     width: 328,
//     minHeight: 428,
//     height: 428,
//     borderRadius: 15,
//     position: "relative",
//     boxShadow: `0px 0px 36px rgba(0, 0, 0, 0.161)`,
//     // margin: "40px auto 20px auto",
//     [theme.breakpoints.down("xs")]: {
//       minWidth: "95%",
//     },
//   },
//   circle: {
//     position: "absolute",
//     marginLeft: "auto",
//     marginRight: "auto",
//     left: 0,
//     right: 0,
//     top: -33,
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   content: {
//     width: "100%",
//   },
//   title: {
//     paddingTop: 60,
//     textAlign: "center",
//     fontSize: theme.fontSize.large,
//   },
//   dese: {
//     width: 274,
//     margin: "auto",
//     textAlign: "justify",
//     height: 245,
//     paddingTop: 10,
//     overflow: "hidden",
//     textOverflow: "ellipsis",
//     lineHeight: 1.9,
//     [theme.breakpoints.down("xs")]: {
//       width: "90%",
//     },
//   },
//   btn: {
//     textAlign: "center",
//     marginTop: 15,
//     marginBottom: 15,
//   },
//   descBtn: {
//     width: "80%",
//     margin: "auto",
//     color: theme.palette.light.type2,
//   },
//   ButtonCustom: {
//     width: "90%",
//     margin: "auto",
//   },
//   icon: {
//     width: 30,
//     height: 30,
//   },
// }));
//
// export default function Index({ data }) {
//   const classes = useStyles();
//   const { push } = useHistory();
//
//   const handleRoute = (type) => {
//     if (type === "Bourse") {
//       push("/Boursekala");
//     }
//   };
//
//   return (
//     <div className={classes["card"]}>
//       <div className={classes["circle"]}>
//         <CircleIcon id={data.icon} />
//       </div>
//       <div className={classes["content"]}>
//         <h2 className={classes["title"]}>{data.title}</h2>
//         <p className={classes["dese"]}>{data.desc} </p>
//       </div>
//       <div className={classes["btn"]}>
//         {data.btn2 && (
//           <div className={classes["ButtonCustom"]}>
//             <ButtonCustomTwoParagragh
//               data={{ title: data.btn, title2: data.btn2 }}
//               padding={"10px 0px"}
//               main={true}
//             />
//           </div>
//         )}
//         {data.btn && !data.btn2 && (
//           <div
//             className={classes["ButtonCustom"]}
//             onClick={
//               data.btn === "معاملات کالا"
//                 ? () => handleRoute("Bourse")
//                 : () => handleRoute()
//             }
//           >
//             <ButtonCustom
//               data={data.btn}
//               padding={"12px 60px"}
//               main={data.btn === "معاملات کالا" ? false : data.btn === "احراز هویت غیرحضوری" ? false : true}
//               ehrazLink={data.btn === "احراز هویت غیرحضوری" ? true : false}
//
//             />
//           </div>
//         )}
//         {data.btnInstaTele && (
//           <div>
//             <a href="https://t.me/pishrobroker">
//               <svg
//                 style={{ width: 25, fill: "rgb(0, 154, 68)", marginLeft: 10 }}
//                 className={classes.icon}
//               >
//                 <use xlinkHref={`/sprit.svg#telegram`}></use>
//               </svg>
//             </a>
//             <a href= "https://www.instagram.com/pishrobroker">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="25"
//                 height="25"
//                 fill="currentColor"
//                 class="bi bi-instagram"
//                 viewBox="0 0 16 16"
//                 color="#009A44"
//               >
//                 <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
//               </svg>
//             </a>
//           </div>
//         )}
//         {/* {
//                     !data.btn && (<p className={classes['descBtn']}>{data.btn}</p>)
//                 } */}
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircleIcon from "../../../common/CircleIcon";
import ButtonCustom from "../../../common/ButtonCustom";
import ButtonCustomTwoParagragh from "../../../common/ButtonCustomTwoParagragh";
import { useHistory } from "react-router";
import { convertNumberToPersian } from "../../../method/convertDigitToEnglish";

const useStyles = makeStyles((theme) => ({
  card: {
    minWidth: 328,
    width: 328,
    minHeight: 428,
    height: 428,
    borderRadius: 15,
    position: "relative",
    boxShadow: `0px 0px 36px rgba(0, 0, 0, 0.161)`,
    // margin: "40px auto 20px auto",
    [theme.breakpoints.down("xs")]: {
      minWidth: "95%",
    },
  },
  circle: {
    position: "absolute",
    marginLeft: "auto",
    marginRight: "auto",
    left: 0,
    right: 0,
    top: -33,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    width: "100%",
  },
  title: {
    paddingTop: 60,
    textAlign: "center",
    fontSize: theme.fontSize.large,
  },
  dese: {
    width: 274,
    margin: "auto",
    textAlign: "justify",
    height: 245,
    paddingTop: 10,
    overflow: "hidden",
    textOverflow: "ellipsis",
    lineHeight: 1.9,
    [theme.breakpoints.down("xs")]: {
      width: "90%",
    },
  },
  btn: {
    textAlign: "center",
    marginBottom: 15,
  },
  descBtn: {
    width: "80%",
    margin: "auto",
    color: theme.palette.light.type2,
  },
  ButtonCustom: {
    width: "90%",
    margin: "auto",
  },
  icon: {
    width: 30,
    height: 30,
  },
  btnsGreen: {
    width: "100%",
    height: "48px",
    background: theme.palette.light.type2,
    color: "white",
    borderRadius: " 0 15px 15px 15px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  btnsGreen2: {
    width: "100%",
    height: "70px",
    background: theme.palette.light.type2,
    color: "white",
    borderRadius: " 0 15px 15px 15px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  hr: {
    width: "100%",
    height: "3px",
    background: "white",
    borderRadius: "10px",
    marginTop: "5px",
    marginBottom: "5px",
  },
}));

export default function Index({ data }) {
  const [stateBtn, setStateBtn] = useState(false);
  const classes = useStyles();
  const { push } = useHistory();

  const handleRoute = (type) => {
    if (type === "Bourse") {
      push("/Boursekala");
    }
  };

  return (
    <div className={classes["card"]}>
      <div className={classes["circle"]}>
        <CircleIcon id={data.icon} />
      </div>
      <div className={classes["content"]}>
        <h2 className={classes["title"]}>{data.title}</h2>
        <p className={classes["dese"]}>{data.desc} </p>
      </div>
      <div className={classes["btn"]}>
        {data.btn2 && (
          <div className={classes["ButtonCustom"]}>
            {stateBtn ? (
              <div className={classes.btnsGreen2}>
                <span> اطلاعات تماس با واحد انرژی</span>
                <div className="px-2 w-100">
                  <div className={classes.hr}></div>
                  <div className="d-flex justify-content-between w-100v align-items-center ">
                    <span className="w-50">
                      {convertNumberToPersian("021-58170000")}
                    </span>
                    <span className="w-50">
                      {convertNumberToPersian("داخلی 4")}
                    </span>
                    <span></span>
                  </div>
                </div>
              </div>
            ) : (
              <div
                className={classes.btnsGreen}
                onClick={() => setStateBtn(true)}
              >
                اطلاعات تماس با واحد انرژی
              </div>
            )}

            {/*<ButtonCustomTwoParagragh*/}
            {/*    data={{ title: data.btn, title2: data.btn2 }}*/}
            {/*    padding={"10px 0px"}*/}
            {/*    main={true}*/}
            {/*/>*/}
          </div>
        )}
        {data.btn && !data.btn2 && (
          <div
            className={classes["ButtonCustom"]}
            onClick={
              data.btn === "معاملات کالا"
                ? () => handleRoute("Bourse")
                : () => handleRoute()
            }
          >
            <ButtonCustom
              data={data.btn}
              padding={"12px 60px"}
              main={
                data.btn === "معاملات کالا"
                  ? false
                  : data.btn === "احراز هویت غیرحضوری"
                  ? false
                  : true
              }
              ehrazLink={data.btn === "احراز هویت غیرحضوری" ? true : false}
            />
          </div>
        )}
        {data.btnInstaTele && (
          <div>
            <a href="https://t.me/pishrobroker">
              <svg
                style={{ width: 25, fill: "rgb(0, 154, 68)", marginLeft: 10 }}
                className={classes.icon}
              >
                <use xlinkHref={`/sprit.svg#telegram`}></use>
              </svg>
            </a>
            <a href="https://www.instagram.com/pishrobroker">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                class="bi bi-instagram"
                viewBox="0 0 16 16"
                color="#009A44"
              >
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
              </svg>
            </a>
          </div>
        )}
        {/* {
                    !data.btn && (<p className={classes['descBtn']}>{data.btn}</p>)
                } */}
      </div>
    </div>
  );
}
