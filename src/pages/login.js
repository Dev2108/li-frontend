import { Box, Button, Container, Link, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useFormik } from "formik";
import Head from "next/head";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import * as Yup from "yup";
import { useSnackbar } from "notistack";
import Config from "../config/constants"

const Login = () => {
  const router = useRouter();
  const [token, setToken] = useState(null);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Must be a valid email").max(255).required("Email is required"),
      password: Yup.string().max(255).required("Password is required"),
    }),
    onSubmit: (data) => {
      handleSubmit(data);
    },
  });

  useEffect(() => {
    const accessToken = localStorage.getItem("access");

    if (accessToken) {
      router.push("/");
    }
  }, [token]);

  const handleSubmit = async (data) => {
    const email = data.email;
    const password = data.password;

    if (email === "" || password === "") {
      setError("sorry...Please Enter Username and Password");
    } else {
      const lowerEmail = email.toLowerCase();
      const user = { email: lowerEmail, password: password };
      try {
        const response = await axios.post(Config.tokenUrl, user);

        if (response.status === 200) {
          localStorage.setItem("access", response.data.access);
          localStorage.setItem("refresh", response.data.refresh);
          setToken(response.data.access);
          
        }
      } catch (error) {
        if (error.response) {
          if (error.response.data["detail"]) {
            enqueueSnackbar(error.response.data["detail"], {
              variant: "warning",
            });
          } else {
            enqueueSnackbar(JSON.stringify(error.response.data), {
              variant: "warning",
            });
          }
        } else if (error.request) {
          // console.log(error.request)
          // The request was made but no response was received
          enqueueSnackbar(JSON.stringify(error.message), {
            variant: "error",
          });
        } else {
          // Something happened in setting up the request that triggered an Error
          enqueueSnackbar(error.message, {
            variant: "error",
          });
        }
      }
    }
  };

  return (
    <>
      <Head>
        <title>Login | Linkedin Scrapper</title>
      </Head>
      {!token && (
        <>
          <Box
            component="main"
            sx={{
              alignItems: "center",
              display: "flex",
              flexGrow: 1,
              minHeight: "100%",
            }}
          >
            <Container maxWidth="sm">
              <form onSubmit={formik.handleSubmit}>
                <Box sx={{ my: 3 }}>
                  <Typography color="textPrimary" variant="h4">
                    Sign in
                  </Typography>
                  <Typography color="textSecondary" gutterBottom variant="body2">
                    Sign in on the internal platform
                  </Typography>
                </Box>

                <TextField
                  error={Boolean(formik.touched.email && formik.errors.email)}
                  fullWidth
                  helperText={formik.touched.email && formik.errors.email}
                  label="Email Address"
                  margin="normal"
                  name="email"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="email"
                  value={formik.values.email}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(formik.touched.password && formik.errors.password)}
                  fullWidth
                  helperText={formik.touched.password && formik.errors.password}
                  label="Password"
                  margin="normal"
                  name="password"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="password"
                  value={formik.values.password}
                  variant="outlined"
                />
                <Box sx={{ py: 2 }}>
                  <Button
                    color="primary"
                    disabled={formik.isSubmitting}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                  >
                    Sign In Now
                  </Button>
                </Box>
                <Typography color="textSecondary" variant="body2">
                  Don&apos;t have an account?{" "}
                  <NextLink href="/register">
                    <Link
                      to="/register"
                      variant="subtitle2"
                      underline="hover"
                      sx={{
                        cursor: "pointer",
                      }}
                    >
                      Sign Up
                    </Link>
                  </NextLink>
                </Typography>
              </form>
            </Container>
          </Box>
        </>
      )}
    </>
  );
};

export default Login;
