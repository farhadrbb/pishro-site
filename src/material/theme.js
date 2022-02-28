import { red } from '@material-ui/core/colors';
import { unstable_createMuiStrictModeTheme as createMuiTheme } from '@material-ui/core';

const defaultTheme = createMuiTheme()


// A custom theme for this app
const theme = createMuiTheme({
    direction: 'rtl',
    palette: {
        light: {
            type1: "#003537",
            // type2: "#64A51C",
            type2: "#009A44",
            type3: "#AAEF5C",
            type4: "#D2FFA1",
        },
        dark: {
            type1: "#000000",
            type2: "#4F5054",
            type3: "#787E85",
            type4: "#ABB0B5",
            type5: "#C6CCD1",
            type6: "#E8EBEE",
        },
        primary: {
            main: '#556cd6',
        },
        secondary: {
            main: '#19857b',
        },
        error: {
            main: red.A400,
        },
        background: {
            default: '#fff',
        },
    },
    fontSize: {
        xLarge: "24px",
        large: "22px",
        medium: "20px",
        regular: "18px",
        small: "16px",
        xSmall: "14px",
    },
    grid: {
        gridLg: {
            width: "80%",
            margin: "auto",
            [defaultTheme.breakpoints.down("sm")]: {
                width: '90%',
            },
        },
        gridMd: {
            width: "65%",
            margin: "auto",
            [defaultTheme.breakpoints.down("sm")]: {
                width: '90%',
            }
        }
    }
});

export default theme;