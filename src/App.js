import * as React from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Arrow from "@zlab-de/zel-react-icons/ZepIconArrowChevronDown";
import Typography from "@material-ui/core/Typography";
import guidelines from "./guidelines.json";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import CircularProgress from "@material-ui/core/CircularProgress";

function App() {
  const [age, setAge] = React.useState("");
  const [value, setValue] = React.useState("female");

  const handleChangeRadio = (event) => {
    setValue(event.target.value);
  };

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className="theme-indigo" style={{ margin: 100 }}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <p>Examples of Direct use of ZEL</p>
        <button className="zep-button zep-button--primary">button</button>
        <div style={{ marginBottom: 30 }}>
          <input
            class="zep-checkbox"
            type="checkbox"
            value=""
            id="checkboxZep"
          />
          <label class="zep-checkbox__label" for="checkboxZep">
            ZEL Checkbox
          </label>
        </div>
        <p>Examples of ZEL in MUI theme</p>
        <div style={{ marginBottom: 30, width: 200 }}>
          <TextField id="outlined-basic" label="MUI theme" />
        </div>
        <FormControl
          variant="outlined"
          style={{ width: 120, marginBottom: 30 }}
        >
          <InputLabel id="demo-simple-select-outlined-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={age}
            onChange={handleChange}
            label="Age"
            IconComponent={Arrow}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>

        {Object.keys(guidelines.typography.headings.display).map((elem) => (
          <Typography variant={elem} style={{ marginBottom: 15 }}>
            {elem}
          </Typography>
        ))}
        {Object.keys(guidelines.typography.headings.headline).map((elem) => (
          <Typography variant={elem} style={{ marginBottom: 15 }}>
            {elem}
          </Typography>
        ))}
        {Object.keys(guidelines.typography.headings.headline_alt).map(
          (elem) => (
            <Typography variant={elem} style={{ marginBottom: 15 }}>
              {elem}
            </Typography>
          )
        )}
        {Object.keys(guidelines.typography.body).map((elem) => (
          <Typography variant={elem} style={{ marginBottom: 15 }}>
            {elem}
          </Typography>
        ))}

        <div style={{ width: 200 }}>
          <Button
            variant="primary"
            color="primary"
            size="large"
            style={{ marginBottom: 10 }}
          >
            Button
          </Button>
          <Button
            variant="primary"
            color="secondary"
            size="large"
            style={{ marginBottom: 10 }}
          >
            Button light
          </Button>
          <Button
            variant="primary"
            color="primary"
            size="medium"
            style={{ marginBottom: 10 }}
          >
            Button
          </Button>
          <Button
            variant="primary"
            color="secondary"
            size="medium"
            style={{ marginBottom: 10 }}
          >
            Button light
          </Button>
          <Button
            variant="primary"
            color="primary"
            size="small"
            style={{ marginBottom: 10 }}
          >
            Button
          </Button>
          <Button
            variant="primary"
            color="secondary"
            size="small"
            style={{ marginBottom: 10 }}
          >
            Button light
          </Button>
          <Button
            variant="secondary"
            color="primary"
            size="large"
            style={{ marginBottom: 10 }}
          >
            Button
          </Button>
          <Button
            variant="secondary"
            color="secondary"
            size="large"
            style={{ marginBottom: 10 }}
          >
            Button light
          </Button>
          <Button
            variant="secondary"
            color="primary"
            size="medium"
            style={{ marginBottom: 10 }}
          >
            Button
          </Button>
          <Button
            variant="secondary"
            color="secondary"
            size="medium"
            style={{ marginBottom: 10 }}
          >
            Button light
          </Button>
          <Button
            variant="secondary"
            color="primary"
            size="small"
            style={{ marginBottom: 10 }}
          >
            Button
          </Button>
          <Button
            variant="secondary"
            color="secondary"
            size="small"
            style={{ marginBottom: 10 }}
          >
            Button light
          </Button>
        </div>
      </div>
      <div>
        <FormControl component="fieldset">
          <FormLabel component="legend">Gender</FormLabel>
          <RadioGroup
            aria-label="gender"
            name="gender1"
            value={value}
            onChange={handleChangeRadio}
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
            <FormControlLabel
              value="disabled"
              disabled
              control={<Radio />}
              label="(Disabled option)"
            />
          </RadioGroup>
        </FormControl>
      </div>
    </div>
  );
}

export default App;
