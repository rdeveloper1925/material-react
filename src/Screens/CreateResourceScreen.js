import { Cancel, Check, Delete } from "@mui/icons-material";
import {
  Grid,
  Typography,
  TextField,
  MenuItem,
  Radio,
  Paper,
  Table,
  FormControlLabel,
  Button,
  FormControl,
  Checkbox,
  Box,
  TableContainer,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
} from "@mui/material";
import axios from "axios";
import { useState } from "react";

const CreateResourceScreen = (props) => {
  const [cols, setCols] = useState([]);
  const [col, setCol] = useState({ colName: "", dataType: "", isPk: false });
  const [resourceName, setResourceName] = useState("");
  const changeHandler = (e, name) => {
    let field = {};
    field[name] = e.target.value;
    setCol({ ...col, ...field });
  };

  const addToTable = () => {
    setCols([...cols, col]);
    setCol({ colName: "", dataType: "", isPk: false });
  };

  const save = () => {
    axios
      .post("http://127.0.0.1/api/v1/tasks", { cols }) //if cols is array, wrap in braces
      .then((response) => console.log(response.data))
      .catch((e) => console.log(e));
  };

  return (
    <Grid
      spacing={1}
      justify="center"
      alignItems="center"
      alignContent="center"
      wrap="nowrap"
    >
      <Grid item md={12} xs="12" sx={{ mb: 2 }}>
        <Typography textAlign="center" variant="h5">
          Create New resource
        </Typography>
      </Grid>
      <Grid item md="4" xs="8" sx={{ mb: 2 }}>
        <FormControl fullWidth sx={{ mb: 3 }}>
          <TextField
            variant="outlined"
            size="small"
            label="Column Name"
            name="colName"
            value={col.colName}
            onChange={(e) => changeHandler(e, "colName")}
          />
        </FormControl>
        <FormControl fullWidth sx={{ mb: 3 }}>
          <TextField
            variant="outlined"
            size="small"
            label="Column Datatype"
            name="dataType"
            value={col.dataType}
            onChange={(e) => changeHandler(e, "dataType")}
            select
          >
            <MenuItem selected value="text">
              Text
            </MenuItem>
            <MenuItem value="number">Number</MenuItem>
            <MenuItem value="dateTime">Date Time</MenuItem>
            <MenuItem value="bol">Bolean</MenuItem>
          </TextField>
        </FormControl>
        <FormControlLabel
          control={
            <Checkbox
              checked={col.isPk}
              onChange={() => {
                setCol({ ...col, isPk: !col.isPk });
                console.log(col);
              }}
            />
          }
          label="Label"
        />
        <Box sx={{ m: 3 }}>
          <Button onClick={addToTable}>Add to Table</Button>
        </Box>
      </Grid>
      <Grid item md="8" xs="12">
        <Typography variant="h6" textAlign="center">
          {resourceName}
          <TableContainer component={Paper}>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell align="left">Column Name</TableCell>
                  <TableCell align="left">dataType</TableCell>
                  <TableCell align="left">Primary Key</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {cols.map((col, index) => {
                  return (
                    <TableRow key={index}>
                      <TableCell aligh="left">{col.colName}</TableCell>
                      <TableCell aligh="left">{col.dataType}</TableCell>
                      <TableCell aligh="left">
                        {col.isPk ? <Check /> : <Cancel />}
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
            <Button onClick={save}>Save</Button>
          </TableContainer>
        </Typography>
      </Grid>
    </Grid>
  );
};

const Col = (prpos) => {
  return (
    <Grid container>
      <Grid item md="4" xs="4">
        <TextField size="small" label="Column Name" variant="outlined" />
      </Grid>
      <Grid item md="4" xs="4">
        <TextField
          size="small"
          select
          label="Data Type"
          style={{ width: "90%" }}
        >
          <MenuItem value="text">Text</MenuItem>
        </TextField>
      </Grid>
      <Grid item md="4" xs="4">
        <FormControlLabel
          value="pk"
          name="psk"
          control={<Radio name="psl" />}
          label="Primary Key"
        />
      </Grid>
    </Grid>
  );
};

export default CreateResourceScreen;
