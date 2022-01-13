import {
  Box,
  Button,
  Card,
  CardContent,
  Checkbox,
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useSnackbar } from "notistack";
import { useState } from "react";
import Config from "../../config/constants";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = ["Django", "Python", "Javascript", "python developer", "celery"];

const LOCATION = ["Delhi", "Noida", "Bhubneshwar", "Gurugram", "Gurgoan", "India"];

export const CustomerListToolbar = ({
  candidates,
  setcandidate,
  activeurl,
  setactive,
  nextpage,
  setnext,
  prevpage,
  setprev,
  count,
  setcount,
  ...rest
}) => {
  const [personName, setPersonName] = useState([]);
  const [locationName, setLocationName] = useState([]);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const handleLocationChange = (event) => {
    const {
      target: { value },
    } = event;
    setLocationName(
      // On autofill we get a the stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const handleChange = (event) => {
    //todo on no select all the values are getting selected by default,fix this
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a the stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const OnSearchClick = (event) => {
    let skillQuery = "";
    personName.forEach((element) => {
      element = element.split(" ").join("+").toLowerCase(); //replace space with +
      skillQuery = skillQuery + `skill=${element}&`;
    });
    skillQuery = skillQuery.slice(0, -1);

    let locationQuery = "";
    locationName.forEach((element) => {
      element = element.split(" ").join("+").toLowerCase();
      locationQuery = locationQuery + `&location=${element}`;
    });
    const finalQuery = skillQuery + locationQuery;
    const url = Config.candidateListToolbarUrl;

    const finalUrl = url + finalQuery;
    const access = localStorage.getItem("access");
    const config = {
      headers: { Authorization: `Bearer ${access}` },
    };

    axios
      .get(finalUrl, config)
      .then((response) => {
        const data = response.data;
        const prevPage = data.previous;
        const nextPage = data.next;

        setactive(finalUrl);
        setnext(nextPage);
        setprev(prevPage);
        setcount(data.count);
        const results = response.data.results;
        setcandidate(results);
      })
      .catch((err) => {
        enqueueSnackbar("Error: " + err.message, {
          variant: "error",
        });
      });
  };

  const getShortlistedCandidates = () => {
    const finalUrl = Config.shortlistUrl;
    const access = localStorage.getItem("access");
    const config = {
      headers: { Authorization: `Bearer ${access}` },
    };

    axios
      .get(finalUrl, config)
      .then((response) => {
        const data = response.data;
        const prevPage = data.previous;
        const nextPage = data.next;

        setactive(finalUrl);
        setnext(nextPage);
        setprev(prevPage);
        setcount(data.count);
        const results = response.data.results;
        setcandidate(results);
      })
      .catch((err) => {
        enqueueSnackbar("Error: " + err.message, {
          variant: "error",
        });
      });
  };

  return (
    <Box {...rest}>
      <Box
        sx={{
          alignItems: "center",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          m: -1,
        }}
      >
        <Typography sx={{ m: 1 }} variant="h4">
          Candidates
        </Typography>
        <Box sx={{ m: 1 }}>
          <Button color="info" variant="contained" onClick={getShortlistedCandidates}>
            Get Shortlisted Candidate
          </Button>
        </Box>
      </Box>
      <Box sx={{ mt: 3 }}>
        <Card>
          <CardContent>
            <Box sx={{ maxWidth: "100%" }}>
              <FormControl sx={{ m: 1, width: 400 }}>
                <InputLabel id="demo-multiple-checkbox-label">Skills</InputLabel>
                <Select
                  labelId="demo-multiple-checkbox-label"
                  id="demo-multiple-checkbox"
                  multiple
                  value={personName}
                  onChange={handleChange}
                  input={<OutlinedInput label="Tag" />}
                  renderValue={(selected) => selected.join(", ")}
                  MenuProps={MenuProps}
                >
                  {names.map((name) => (
                    <MenuItem key={name} value={name}>
                      <Checkbox checked={personName.indexOf(name) > -1} />
                      <ListItemText primary={name} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              {/* 3333 */}
              <FormControl sx={{ m: 1, width: 400 }}>
                <InputLabel id="demo-multiple-checkbox-label">Location</InputLabel>
                <Select
                  labelId="demo-multiple-checkbox-label"
                  id="demo-multiple-checkbox"
                  value={locationName}
                  onChange={handleLocationChange}
                  input={<OutlinedInput label="Tag" />}
                  renderValue={(selected) => selected.join(", ")}
                  MenuProps={MenuProps}
                >
                  {LOCATION.map((name) => (
                    <MenuItem key={name} value={name}>
                      <Checkbox checked={locationName.indexOf(name) > -1} />
                      <ListItemText primary={name} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <Button sx={{ m: 1.5 }} color="info" variant="contained" onClick={OnSearchClick}>
                Search
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};
