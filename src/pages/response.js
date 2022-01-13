import Head from "next/head";

import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Config from "../config/constants";
import { useRouter } from "next/router";
import { useSnackbar } from "notistack";

const UserResponse = () => {
  const router = useRouter();
  const [name, setName] = useState(null);
  const [isShow, setShow] = useState(false);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  useEffect( async() => {
  
    // run on start and when the accesstoken changes
  const access = localStorage.getItem("access");
  
    const queryParams = new URLSearchParams(window.location.search);
    const id = queryParams.get('uuid');
    const resp = queryParams.get('resp');
    setName( queryParams.get('first_name'))
    const config = {
      headers: { Authorization: `Bearer ${access}` },
      data : {
          'id': id,
          'resp':resp
        }
      };
     
      const url = Config.responseUrl;
      debugger
      try {
          const response = await axios.post(url, config);
          
          console.log(response.status)
          if (response.status === 205 || response.status === 200 ) {
            setShow(true);
            enqueueSnackbar("Response saved Successfully.",   {
              variant: "success",
              duration:'10000'
            });
          
          }
      }
       catch (error) {
        router.push({
          pathname: "/404",
        }); 

      }
      
    
  }, []);


  
  return(
  <>
  
    <Head>
      <title>User Response</title>
    </Head>
    <Box
      component="main"
      sx={{
        alignItems: "center",
        display: "flex",
        flexGrow: 1,
        minHeight: "100%",
        marginBottom:'15%'
        
      }}
    >
      {isShow &&
      <Container maxWidth="md">
        <Box
          sx={{
            alignItems: "left",
            display: "flex",
            flexDirection: "column",
            padding: '10%',
            marginTop:'5%',
            border: '1px solid #aaecff',
            backgroundColor: '#f0f7f9'
          }}
        >
          <Typography align="left" color="textPrimary" >
          Hi {name},
          </Typography>
         <br/>
          <Typography align="left" color="textPrimary" >
          Thank you! We will contact you shortly. 
          </Typography>
          <br/>
          <Typography align="left" color="textPrimary" >
          If you would like to expedite the process please click on Apply link below and upload your profile. 
          </Typography>
          <a href= 'https://apply.mindfiresolutions.com/apply'>APPLY  NOW</a>
          <br/>
          <p>Thanks</p>
          <p>Mindfire Soulitons</p>          
          
        </Box>
      </Container>
        }
    </Box>

  </>
  );
}

export default UserResponse;
