import { Box, Button,Container,TextField,IconButton, InputAdornment,Grid,Card,CardContent,Typography } from "@mui/material";
import Head from "next/head";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { useFormik } from "formik";
import * as Yup from "yup";
import { AccountProfile } from "../components/account/account-profile";
import { DashboardLayout } from "../components/dashboard-layout";
import { useEffect, useState } from "react";
import axios from "axios";
import React, { useRef } from "react";
import { useSnackbar } from "notistack";
import Config from "../config/constants"


const Account = () => {

  const [importObj, setfile] = useState({
    file : null
  });
  
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Must be a valid email").max(255).required("Email is required").matches(
        '@mindfiresolutions.com',
              "Invalid email address"
            ),
      password: Yup.string().max(255).required("Password is required"),
    }),
    onSubmit: (data) => {
      handleSubmit(data);
    },
  });

  const [isfileUploaded, setfileUpload] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
const handleClickShowPassword = () => setShowPassword(!showPassword);
const handleMouseDownPassword = () => setShowPassword(!showPassword);
  // const [showModal, setShowModal] = useState(false);
  const ref = useRef();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const fileChangedHandler = (e) => {
    importObj['file'] = e.target.files[0];
    let isfileUploaded = false;
    if (importObj['file'] && importObj['file'].size) {
        isfileUploaded = true;
    }
    setfile(importObj); 
    
  };

 

  const saveData = async (e) => {
    // debugger
    e.preventDefault();
    if (!importObj.file || typeof(importObj.file) === "string") {
      enqueueSnackbar("No file chosen.",   {
        variant: "danger",
        duration:'10000'
      });
    } else {
        // Convert to FormData before sending to server
        const formData = new FormData();
       
        Object.keys(importObj).forEach(key => formData.append(key, importObj[key]));
        const access = localStorage.getItem("access");
        const config = {
          headers: { Authorization: `Bearer ${access}` ,
          'Content-Type': 'application/json', 
         
        },
        };
        const  data = {
          'email' : formik.values.email,
          'pass': formik.values.password 
        }
        Object.keys(data).forEach(key => formData.append(key, data[key]))
       

        const url = Config.fileUploadUrl;
        axios
          .post(url,formData ,  config)
          .then((response) => {
            if (response.status === 205 || response.status === 205) {
              enqueueSnackbar("File Uploaded Successfully.",   {
                variant: "success",
                duration:'10000'
              });
            
            
            }})   
          .catch((err) => {
            enqueueSnackbar("Invalid Credentials! Please try again.",   {
              variant: "danger",
              duration:'10000'
            });
          });
        }
        ref.current.value = "";
        importObj['file'] = null
        setfile(importObj);
     };

return (
  <>
    <Head>
      <title>Account | Linkedin Scrapper</title>
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
          Account
        </Typography>
        <Grid >
          <Grid item lg={3} md={8} xs={12}>
            <AccountProfile />
          </Grid>
          <Grid item lg={8} md={8} xs={12}>
          <Card  sx={{ mt:3 }} >
            <CardContent>
              <div className="row">
                <p >
                  Please upload <b>.xls</b> / <b>.xlsx</b> file only.
                </p>

                <div className="col-sm-6 ">
                  {/* <label htmlFor='file'>
                          Choose file
                      </label> */}
                  <input
                    
                    type="file"
                    id="file"
                    ref={ref}
                    accept=".xls, .xlsx,"
                    className="form-control"
                    name="file"
                    onChange={fileChangedHandler}
                  />
                 </div>
              
                 
                  
                  <TextField 
                   sx={{  marginTop:'4%' }}
                  error={Boolean(formik.touched.email && formik.errors.email)}
                  fullWidth
                  helperText={formik.touched.email && formik.errors.email}
                  label="Email Address (Only Mindfire Solutions Email Id.)"
                  margin="normal"
                  name="email"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="email"
                  value={formik.values.email}
                  variant="outlined"
                />
                <TextField  sx={{  marginBottom:'3%' }}
                  error={Boolean(formik.touched.password && formik.errors.password)}
                  fullWidth
                  helperText={formik.touched.password && formik.errors.password}
                  label="Password"
                  margin="normal"
                  name="password"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type={showPassword ? "text" : "password"}
                  value={formik.values.password}
                  variant="outlined"
                  InputProps={{ // <-- This is where the toggle button is added.
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                        >
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
                />
               

                <div className="col-sm-6 ">
                  <Button
                    sx ={{ mr:0 ,}}
                    variant="contained"
                    color="secondary"
                    size="small"
                    type="submit"

                    onClick={saveData}
                    // disabled={!isfileUploaded}
                  >
                    Submit
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          </Grid>
        </Grid>
       
      </Container>
    </Box>
    
  </>
);
    }
Account.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Account;