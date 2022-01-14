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
  const [id, setID] = useState(null);
  const [user_res, setResponse] = useState(null);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [decline_reason, setReason] = useState('');
  const [show, setShow] = useState(false);


  useEffect( async() => {
  
    // run on start and when the accesstoken changes
  const access = localStorage.getItem("access");
  
    const queryParams = new URLSearchParams(window.location.search);
    setID(queryParams.get('uuid'));
    setResponse(queryParams.get('resp'));
    setName( queryParams.get('first_name'))
    const config = {
      headers: { Authorization: `Bearer ${access}` },
      data : {
          'id': queryParams.get('uuid'),
          'resp':queryParams.get('resp')
        }
      };
     
      const url = Config.responseUrl;
      if (queryParams.get('resp') === '1' ){
        try {
            const response = await axios.post(url, config);
            if (response.status === 205 || response.status === 200 ) {
              
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
      }
      setShow(true);
      
    
  }, []);

  const handleChange = (e) => {
    let data =  e.target.value;
    setReason(data);
   
  }

  const onSubmit = async(e) => {
    const access = localStorage.getItem("access");
    const config = {
      headers: { Authorization: `Bearer ${access}` },
      data : {
          'id': id,
          'resp':user_res,
          'decline_reason':decline_reason
        }
      };
     
      const url = Config.responseUrl;
      
        try {
            const response = await axios.post(url, config);
            if (response.status === 205 || response.status === 200 ) {
              
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
      
   
  }


console.log(decline_reason)  ;
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
      
      <Container maxWidth="md">
        { show &&
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
         { user_res === '1'?
          <div>
        
              <Typography align="left" color="textPrimary" >
              Thank you! We will contact you shortly. 
         
              </Typography>
              <br/>
              <Typography align="left" color="textPrimary" sx={{mb:1}}>
              If you would like to expedite the process please click on Apply link below and upload your profile. 
              </Typography>

          </div>
          :
              <div>
              
              <textarea
                value={decline_reason}
                onChange={handleChange}
                rows={5}
                cols={50}
                placeholder={"Why would you not want to apply?"}
              />
              <br/>
              <Button
                      sx ={{ mr:0 , mb:3}}
                      variant="contained"
                      color="secondary"
                      size="small"
                      type="submit"


                      onClick={onSubmit}
                      // disabled={!isfileUploaded}
                    >
                      Submit
                    </Button>
            </div>
            
          } 
            <a  href= 'https://apply.mindfiresolutions.com/apply' style={{'text-decoration':'none',width:'20%'}}><Button
                      sx ={{ mr:0 , }}
                      variant="contained"
                      color="secondary"
                      size="small"
                      type="submit"


                      // onClick={saveData}
                      // disabled={!isfileUploaded}
                    >
                      APPLY NOW
                    </Button></a>
            <br/>
         
          <p>Thanks</p>
          <p>Mindfire Soulitons</p>          
          
        </Box>
      }
      </Container>
        
    </Box>

  </>
  );
}

export default UserResponse;
