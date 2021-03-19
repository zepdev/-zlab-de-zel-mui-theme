import { createMuiTheme } from "@material-ui/core/styles";
import guidelines from "zeppelin-element-library/guidelines.json";
import "zeppelin-element-library/bundle/zel.css";

const primary = guidelines.theme.indigo.primary;
const secondary = guidelines.theme.indigo.secondary;

const typography = [];
let headings = Object.keys(guidelines.typography.headings);
headings.forEach((elem) => {
  let variants = Object.keys(guidelines.typography.headings[elem]);
  variants.forEach((item) => {
    let temp = {
      props: { variant: item },
      style: guidelines.typography.headings[elem][item],
    };
    typography.push(temp);
  });
});
Object.keys(guidelines.typography.body).forEach((item) => {
  let temp = {
    props: { variant: item },
    style: guidelines.typography.body[item],
  };
  typography.push(temp);
});

const theme = createMuiTheme({
  palette: {
    primary: {
      main: primary,
    },
    secondary: {
      main: secondary,
    },
    error: {
      main: guidelines.color.support.alert,
    },
  },
  typography: {
    fontFamily: ["Roboto", "sans-serif"].join(","),
    lineHeight: "1.75rem",
  },
  logo: guidelines.logo,
  indigo: guidelines.theme.indigo,
  yellow: guidelines.theme.yellow,
  red: guidelines.theme.red,
  blue: guidelines.theme.blue,
  color: guidelines.color,
  space: guidelines.spacing.component,
  components: {
    MuiTypography: {
      variants: typography,
    },
    MuiButton: {
      variants: [
        {
          props: { variant: "primary", color: "primary", size: "large" },
          style: {
            padding: "1.25rem 2rem",
            background: guidelines.theme.indigo.primary,
            color: guidelines.color.fontNegative,
            "&:hover": {
              background: guidelines.theme.indigo.secondary,
            },
            "&:disabled": {
              background: guidelines.color.black[40],
            },
          },
        },
        {
          props: { variant: "primary", color: "secondary", size: "large" },
          style: {
            padding: "1.25rem 2rem",
            background: guidelines.theme.indigo.secondary,
            color: guidelines.color.fontNegative,
            "&:hover": {
              background: guidelines.theme.indigo.primary,
            },
            "&:disabled": {
              background: guidelines.color.black[40],
            },
          },
        },
        {
          props: { variant: "primary", color: "primary", size: "medium" },
          style: {
            padding: ".875rem 1.5rem",
            background: guidelines.theme.indigo.primary,
            color: guidelines.color.fontNegative,
            "&:hover": {
              background: guidelines.theme.indigo.secondary,
            },
            "&:disabled": {
              background: guidelines.color.black[40],
            },
          },
        },
        {
          props: { variant: "primary", color: "secondary", size: "medium" },
          style: {
            padding: ".875rem 1.5rem",
            background: guidelines.theme.indigo.secondary,
            color: guidelines.color.fontNegative,
            "&:hover": {
              background: guidelines.theme.indigo.primary,
            },
            "&:disabled": {
              background: guidelines.color.black[40],
            },
          },
        },
        {
          props: { variant: "primary", color: "primary", size: "small" },
          style: {
            padding: ".375rem 1rem",
            textTransform: "none",
            background: guidelines.theme.indigo.primary,
            color: guidelines.color.fontNegative,
            "&:hover": {
              background: guidelines.theme.indigo.secondary,
            },
            "&:disabled": {
              background: guidelines.color.black[40],
            },
          },
        },
        {
          props: { variant: "primary", color: "secondary", size: "small" },
          style: {
            padding: ".375rem 1rem",
            textTransform: "none",
            background: guidelines.theme.indigo.secondary,
            color: guidelines.color.fontNegative,
            "&:hover": {
              background: guidelines.theme.indigo.primary,
            },
            "&:disabled": {
              background: guidelines.color.black[40],
            },
          },
        },
        {
          props: { variant: "secondary", color: "primary", size: "large" },
          style: {
            padding: "1.25rem 2rem",
            color: guidelines.theme.indigo.primary,
            border: `1px solid ${guidelines.theme.indigo.primary}`,
            "&:hover": {
              color: guidelines.theme.indigo.secondary,
              border: `1px solid ${guidelines.theme.indigo.secondary}`,
            },
            "&:disabled": {
              background: guidelines.color.black[40],
            },
          },
        },
        {
          props: { variant: "secondary", color: "secondary", size: "large" },
          style: {
            padding: "1.25rem 2rem",
            color: guidelines.theme.indigo.secondary,
            border: `1px solid ${guidelines.theme.indigo.secondary}`,
            "&:hover": {
              color: guidelines.theme.indigo.primary,
              border: `1px solid ${guidelines.theme.indigo.primary}`,
            },
            "&:disabled": {
              background: guidelines.color.black[40],
            },
          },
        },
        {
          props: { variant: "secondary", color: "primary", size: "medium" },
          style: {
            padding: ".875rem 1.5rem",
            color: guidelines.theme.indigo.primary,
            border: `1px solid ${guidelines.theme.indigo.primary}`,
            "&:hover": {
              color: guidelines.theme.indigo.secondary,
              border: `1px solid ${guidelines.theme.indigo.secondary}`,
            },
            "&:disabled": {
              background: guidelines.color.black[40],
            },
          },
        },
        {
          props: { variant: "secondary", color: "secondary", size: "medium" },
          style: {
            padding: ".875rem 1.5rem",
            color: guidelines.theme.indigo.secondary,
            border: `1px solid ${guidelines.theme.indigo.secondary}`,
            "&:hover": {
              color: guidelines.theme.indigo.primary,
              border: `1px solid ${guidelines.theme.indigo.primary}`,
            },
            "&:disabled": {
              background: guidelines.color.black[40],
            },
          },
        },
        {
          props: { variant: "secondary", color: "primary", size: "small" },
          style: {
            padding: ".375rem 1rem",
            textTransform: "none",
            color: guidelines.theme.indigo.primary,
            border: `1px solid ${guidelines.theme.indigo.primary}`,
            "&:hover": {
              color: guidelines.theme.indigo.secondary,
              border: `1px solid ${guidelines.theme.indigo.secondary}`,
            },
            "&:disabled": {
              background: guidelines.color.black[40],
            },
          },
        },
        {
          props: { variant: "secondary", color: "secondary", size: "small" },
          style: {
            padding: ".375rem 1rem",
            textTransform: "none",
            color: guidelines.theme.indigo.secondary,
            border: `1px solid ${guidelines.theme.indigo.secondary}`,
            "&:hover": {
              color: guidelines.theme.indigo.primary,
              border: `1px solid ${guidelines.theme.indigo.primary}`,
            },
            "&:disabled": {
              background: guidelines.color.black[40],
            },
          },
        },
      ],
      styleOverrides: {
        root: {
          fontWeight: 500,
          fontSize: "1rem",
          letterSpacing: "0.078125rem",
          lineHeight: "1.25em",
        },
      },
    },
    // Input
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 0,
        },
        input: {
          fontSize: "1rem",
          lineHeight: "1.75rem",
          padding: "1rem 1.25rem",
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          lineHeight: "1.25rem",
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          lineHeight: "1.25rem",
          marginLeft: 0,
        },
      },
    },
    // Select
    MuiSelect: {
      styleOverrides: {
        root: {
          borderRadius: 0,
        },
        select: {
          fontSize: "1rem",
          lineHeight: "1.75rem",
          padding: "1rem 1.25rem",
        },
      },
    },
    // Radio
    MuiRadio: {
      styleOverrides: {
        root: {
          color: guidelines.color.font,
          "$icon &": {
            outlineOffset: 1,
          },
        },
        colorSecondary: {
          "&$checked": {
            backgroundImage: "linear-gradient(180deg,green,hsla(0,0%,100%,0))",
            outline: "1px auto rgba(19,124,189,.6)",
            color: primary,
          },
          "$icon &": {
            outline: "1px auto rgba(19,124,189,.6)",
            outlineOffset: 1,
          },
        },
      },
    },
    // Progress
    // MuiCircularProgress: {
    //   styleOverrides: {
    //     svg: {
    //       height: "1.5rem",
    //       width: "1.5rem",
    //       animation: "#{$prefix}rotate 0.9s linear infinite",
    //     },
    //     circle: {
    //       cy: 12,
    //       stroke: "black",
    //       strokeOpacity: 0.6,
    //       strokeWidth: 1.25,
    //       fill: "transparent",
    //       strokeLinecap: "round",
    //       strokeDasharray: "12, 12",
    //       strokeDashoffset: 11.05,
    //       animation: "#{$prefix}inertia 1.3s ease-in-out infinite",
    //       transformOrigin: "50% 50%",
    //       transform: "scale(1,5)",
    //     },
    //   },
    // },
  },
});

export default theme;
