import { useState, useEffect } from "react";
import Head from "next/head";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { AccountProfile } from "../components/profile/profile";
import { AccountProfileDetails } from "../components/profile/profile-details";
import { DashboardLayout } from "../components/dashboard-layout";
import { useRouter } from "next/router";

const Profile = () => {
  const router = useRouter();
  const { query } = router;
  
  console.log("query data", query.name);

  let candidate = [];
  try {
    candidate = JSON.parse(query.name);
  } catch {
    candidate = undefined;
  }

  const onErrorPage = () => {
    router.push({
      pathname: "/404",
    }); 
  };

  useEffect(() => {
    // Prompot user to not relaod the page ...

    window.addEventListener("beforeunload", alertUser);
    return () => {
      window.removeEventListener("beforeunload", alertUser);
    };
  }, []);
  const alertUser = (e) => {
    e.preventDefault();
    e.returnValue = "";
  };

  useEffect(() => {
    if (!candidate) {
      onErrorPage();
    }
  }, []);

  return (
    <>
      <Head>
        <title>Profile</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth="lg">
          <Typography sx={{ mb: 3 }} variant="h4">
            Profile
          </Typography>
          {candidate && (
            <Grid container spacing={3}>
              <Grid item lg={4} md={6} xs={12}>
                <AccountProfile candidate={candidate} />
              </Grid>
              <Grid item lg={8} md={6} xs={12}>
                <AccountProfileDetails candidate={candidate} />
              </Grid>
            </Grid>
          )}
        </Container>
      </Box>
    </>
  );
};

Profile.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Profile;
