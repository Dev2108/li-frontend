import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSnackbar } from "notistack";
import Config from "../../config/constants";

export const AccountProfileDetails = (props) => {
  const { candidate } = props;
  const [short, setShort] = useState(false);
  const [buttonValue, setButtonValue] = useState("Shortlist Candidate");
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const educations = candidate.education;
  const experiences = candidate.experience;
  const skills = candidate.skills;
  const skillArray = [];
  skills.forEach((element) => {
    skillArray.push(element["name"]);
  });

  useEffect(() => {
    if (candidate.is_shortlisted) {
      setButtonValue("Candidate Shortlisted");
      setShort(true);
    }
  }, []);

  const toggleShortlist = (value) => {
    setShort(true);
    if (value) {
      const access = localStorage.getItem("access");
      const config = {
        headers: { Authorization: `Bearer ${access}` },
      };

      const url = Config.shortlistUrl;
      axios
        .post(url, { user_id: candidate.linkedin_id.toString() }, config)
        .then((response) => {
          if (response.status === 201) {
            setButtonValue("Candidate Shortlisted");
          }
        })
        .catch((err) => {
          enqueueSnackbar("Error: " + err.message, {
            variant: "error",
          });
        });
    }
  };

  return (
    <form autoComplete="off" noValidate {...props}>
      <Card>
        <CardHeader subheader={skillArray.join(" , ")} title="Skills" />
        <Divider />
        <CardHeader subheader={candidate.about_us} title="About" />
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={10} xs={12}>
              <Typography color="textPrimary" gutterBottom variant="h6">
                Education
              </Typography>

              {educations.map((education, index) => (
                <>
                  <Divider />
                  <Typography color="textPrimary" gutterBottom variant="subtitle1">
                    {education.major}
                  </Typography>
                  <Typography color="textSecondary" gutterBottom variant="subtitle2">
                    <p>{education.school}</p>
                    
                    <p>{education.year}</p>
                  </Typography>
                </>
              ))}
            </Grid>
            <Grid item md={12} xs={12}>
              <Divider />
            </Grid>

            <Grid item md={10} xs={12}>
              <Typography color="textPrimary" gutterBottom variant="h6">
                Experience
              </Typography>
              {experiences.map((experience) => (
                <>
                  <Divider />

                  <Typography color="textPrimary" gutterBottom variant="subtitle1">
                    {experience.position}
                  </Typography>
                  <Typography color="textSecondary" gutterBottom variant="subtitle2">
                    <p>{experience.organisation}</p>
                   
                    <p>{experience.location}</p>
                    
                    <p>{experience.time}</p>
                  </Typography>
                </>
              ))}
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            p: 2,
          }}
        >
          <Button
            color="info"
            variant="contained"
            disabled={short}
            onClick={() => toggleShortlist(true)}
          >
            {buttonValue}
          </Button>
        </Box>
      </Card>
    </form>
  );
};
