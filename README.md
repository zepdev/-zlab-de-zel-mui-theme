# How to use the Material-UI theme with the Zeppelin Element Library

1. install zeppelin-element-library into your project

2. Copy the following files into your your project;

/src/theme.js

3. Add the MUI Theme Provider to index.js

index.js

```
...
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

...
```

## Note on use with Gatsby

Until the final release of MUIv5, there are order clashes with css if you CSS-in-JS. Please reach out to alyssa.butler@zeppelin.com for a current workaround.
