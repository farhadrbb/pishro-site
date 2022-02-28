import { CircularProgress, makeStyles, Tooltip } from "@material-ui/core";

import React from "react";

const useStyles = makeStyles(() => ({
  button: {
    backgroundColor: "#64a51c",
    color: "white",
    border: 0,
    borderRadius: "0 9px 9px 9px",
    marginRight: 10,
    padding: "8px 30px",
    marginBottom: 15,
  },

  block: {
    width: "100%",
    height: 0,
    boxShadow: "0 0 10px gray",
  },

  none: {
    width: "100%",
    height: 0,
    boxShadow: "0 0 10px gray",
    animation: "$fadeOut 0.4s",
  },

  filter: {
    width: "100%",
    height: "18vh",
    borderRadius: 10,
    boxShadow: " rgba(0, 0, 0, 0.15) 0px 5px 15px 0px",
    animation: "$fadeIn 0.4s",
  },

  "@keyframes fadeIn": {
    "0%": {
      visibility: "hidden",
      opacity: 0,
      width: "100%",
      height: 0,
      // transform: "translateY(5rem)"
    },
    "100%": {
      visibility: "visible",
      opacity: 1,
      width: "100%",
      height: "18vh",
      // transform: "translateY(0)"
    },
  },
  "@keyframes fadeOut": {
    "0%": {
      visibility: "visible",
      opacity: 1,
      width: "100%",
      height: "18vh",
      // transform: "translateY(5rem)"
    },
    "100%": {
      visibility: "hidden",
      opacity: 0,
      width: "100%",
      height: "0",
      // transform: "translateY(0)"
    },
  },
}));

const ButtonPdf = ({
  handleFlagPdf,
  handleFlagFilter,
  handleRefresh,
  bourseInstrumentsPdf,
}) => {
  // const classes = useStyles();
  return (
    <div className="d-flex justify-content-between align-items-center mb-2 px-3">
     
      <div style={{ paddingBottom: 5 }}>
        <Tooltip title="فیلتر" placement="top">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            fill="currentColor"
            class="bi bi-funnel-fill"
            viewBox="0 0 16 16"
            color="#009A44"
            onClick={handleFlagFilter}
            style={{cursor:"pointer"}}
          >
            <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2z" />
          </svg>
        </Tooltip>
      </div>
      <div
        style={{
          display: "flex",
        }}
      >
        <div style={{ marginRight: 20 }}>
          {bourseInstrumentsPdf.loading && (
            <div className="position-relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-file-earmark-pdf"
                viewBox="0 0 16 16"
                style={{cursor:"pointer"}}
              
                style={{ opacity: 0.3, position: "absolute", top: 3, left: 4 }}
              >
                <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z" />
                <path d="M4.603 14.087a.81.81 0 0 1-.438-.42c-.195-.388-.13-.776.08-1.102.198-.307.526-.568.897-.787a7.68 7.68 0 0 1 1.482-.645 19.697 19.697 0 0 0 1.062-2.227 7.269 7.269 0 0 1-.43-1.295c-.086-.4-.119-.796-.046-1.136.075-.354.274-.672.65-.823.192-.077.4-.12.602-.077a.7.7 0 0 1 .477.365c.088.164.12.356.127.538.007.188-.012.396-.047.614-.084.51-.27 1.134-.52 1.794a10.954 10.954 0 0 0 .98 1.686 5.753 5.753 0 0 1 1.334.05c.364.066.734.195.96.465.12.144.193.32.2.518.007.192-.047.382-.138.563a1.04 1.04 0 0 1-.354.416.856.856 0 0 1-.51.138c-.331-.014-.654-.196-.933-.417a5.712 5.712 0 0 1-.911-.95 11.651 11.651 0 0 0-1.997.406 11.307 11.307 0 0 1-1.02 1.51c-.292.35-.609.656-.927.787a.793.793 0 0 1-.58.029zm1.379-1.901c-.166.076-.32.156-.459.238-.328.194-.541.383-.647.547-.094.145-.096.25-.04.361.01.022.02.036.026.044a.266.266 0 0 0 .035-.012c.137-.056.355-.235.635-.572a8.18 8.18 0 0 0 .45-.606zm1.64-1.33a12.71 12.71 0 0 1 1.01-.193 11.744 11.744 0 0 1-.51-.858 20.801 20.801 0 0 1-.5 1.05zm2.446.45c.15.163.296.3.435.41.24.19.407.253.498.256a.107.107 0 0 0 .07-.015.307.307 0 0 0 .094-.125.436.436 0 0 0 .059-.2.095.095 0 0 0-.026-.063c-.052-.062-.2-.152-.518-.209a3.876 3.876 0 0 0-.612-.053zM8.078 7.8a6.7 6.7 0 0 0 .2-.828c.031-.188.043-.343.038-.465a.613.613 0 0 0-.032-.198.517.517 0 0 0-.145.04c-.087.035-.158.106-.196.283-.04.192-.03.469.046.822.024.111.054.227.09.346z" />
              </svg>
              <CircularProgress
                size={28}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  color: "#009A44",
                }}
              />
            </div>
          )}
          {!bourseInstrumentsPdf.loading && (
            <Tooltip title="فایل PDF" placement="top">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="27"
                height="27"
                fill="currentColor"
                class="bi bi-file-earmark-pdf-fill"
                viewBox="0 0 16 16"
                color="#009A44"
                style={{cursor:"pointer"}}
                onClick={()=>handleFlagPdf()}
              >
                <path d="M5.523 12.424c.14-.082.293-.162.459-.238a7.878 7.878 0 0 1-.45.606c-.28.337-.498.516-.635.572a.266.266 0 0 1-.035.012.282.282 0 0 1-.026-.044c-.056-.11-.054-.216.04-.36.106-.165.319-.354.647-.548zm2.455-1.647c-.119.025-.237.05-.356.078a21.148 21.148 0 0 0 .5-1.05 12.045 12.045 0 0 0 .51.858c-.217.032-.436.07-.654.114zm2.525.939a3.881 3.881 0 0 1-.435-.41c.228.005.434.022.612.054.317.057.466.147.518.209a.095.095 0 0 1 .026.064.436.436 0 0 1-.06.2.307.307 0 0 1-.094.124.107.107 0 0 1-.069.015c-.09-.003-.258-.066-.498-.256zM8.278 6.97c-.04.244-.108.524-.2.829a4.86 4.86 0 0 1-.089-.346c-.076-.353-.087-.63-.046-.822.038-.177.11-.248.196-.283a.517.517 0 0 1 .145-.04c.013.03.028.092.032.198.005.122-.007.277-.038.465z" />
                <path
                  fill-rule="evenodd"
                  d="M4 0h5.293A1 1 0 0 1 10 .293L13.707 4a1 1 0 0 1 .293.707V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm5.5 1.5v2a1 1 0 0 0 1 1h2l-3-3zM4.165 13.668c.09.18.23.343.438.419.207.075.412.04.58-.03.318-.13.635-.436.926-.786.333-.401.683-.927 1.021-1.51a11.651 11.651 0 0 1 1.997-.406c.3.383.61.713.91.95.28.22.603.403.934.417a.856.856 0 0 0 .51-.138c.155-.101.27-.247.354-.416.09-.181.145-.37.138-.563a.844.844 0 0 0-.2-.518c-.226-.27-.596-.4-.96-.465a5.76 5.76 0 0 0-1.335-.05 10.954 10.954 0 0 1-.98-1.686c.25-.66.437-1.284.52-1.794.036-.218.055-.426.048-.614a1.238 1.238 0 0 0-.127-.538.7.7 0 0 0-.477-.365c-.202-.043-.41 0-.601.077-.377.15-.576.47-.651.823-.073.34-.04.736.046 1.136.088.406.238.848.43 1.295a19.697 19.697 0 0 1-1.062 2.227 7.662 7.662 0 0 0-1.482.645c-.37.22-.699.48-.897.787-.21.326-.275.714-.08 1.103z"
                />
              </svg>
            </Tooltip>
          )}
        </div>
        <div style={{ marginRight: 20 }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            className="bi bi-arrow-clockwise"
            viewBox="0 0 16 16"
            onClick={handleRefresh}
            style={{cursor:"pointer"}}
          >
            <path
              fill-rule="evenodd"
              d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"
            />
            <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ButtonPdf;
