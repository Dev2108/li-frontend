import ArrowBackIcon from "@mui/icons-material/Home";
import { Box, Button, Container, FormHelperText, Link, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useFormik } from "formik";
import Head from "next/head";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import * as Yup from "yup";
import { useSnackbar } from "notistack";
import Config from "../config/constants"

const Register = () => {
  const [token, setToken] = useState(null);
  const [isRegistered, setIsRegistered] = useState(false);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      password2: "",
      // policy: false,
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Must be a valid email").max(255).required("Email is required"),
      password: Yup.string().max(255).required("Password is required"),
      password2: Yup.string().max(255).required("Password doesn't match"),
      // policy: Yup.boolean().oneOf([true], "This field must be checked"),
    }),
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  useEffect(() => {
    const accessToken = localStorage.getItem("access");

    if (accessToken) {
      router.push("/profile");
    }
  }, [token]);

  const handleSubmit = async (data) => {
    const { email, password, password2 } = data;

    const user = data;

    try {
      const response = await axios.post(Config.registerUrl, user);

      setIsRegistered(true);
    } catch (error) {
      if (error.response) {
        // Request made and server responded
        if (error.response.data["email"]) {
          enqueueSnackbar("Email: " + error.response.data["email"], {
            variant: "warning",
          });
          if (error.response.data["password"]) {
            enqueueSnackbar("Password : " + error.response.data["password"], {
              variant: "warning",
            });
          }
        } else if (error.response.data["password"]) {
          enqueueSnackbar("Password : " + error.response.data["password"], {
            variant: "warning",
          });
        } else {
          enqueueSnackbar(JSON.stringify(error.response.data), {
            variant: "error",
          });
        }
      } else {
        // Something happened in setting up the request that triggered an Error
        enqueueSnackbar("Error: " + error.message, {
          variant: "error",
        });
      }
    }
  };

  return (
    <>
      <Head>
        <title>Register</title>
      </Head>

      {isRegistered && (
        <>
          <NextLink href="/profile" passHref>
            <Button component="a" startIcon={<ArrowBackIcon fontSize="small" />}>
              Account created, Login to continue.
            </Button>
          </NextLink>
        </>
      )}

      {!token && (
        <>
          {" "}
          {!isRegistered && (
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
                      Create a new account
                    </Typography>
                    <Typography color="textSecondary" gutterBottom variant="body2">
                      Use Mindfire Sloutions Company email to create a new account
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
                  <TextField
                    error={Boolean(formik.touched.password2 && formik.errors.password2)}
                    fullWidth
                    helperText={formik.touched.password2 && formik.errors.password2}
                    label="Confirm Password"
                    margin="normal"
                    name="password2"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    type="password"
                    value={formik.values.password2}
                    variant="outlined"
                  />

                  {Boolean(formik.touched.policy && formik.errors.policy) && (
                    <FormHelperText error>{formik.errors.policy}</FormHelperText>
                  )}
                  <Box sx={{ py: 2 }}>
                    <Button
                      color="primary"
                      disabled={formik.isSubmitting}
                      fullWidth
                      size="large"
                      type="submit"
                      variant="contained"
                    >
                      Sign Up Now
                    </Button>
                  </Box>
                  <Typography color="textSecondary" variant="body2">
                    Have an account?{" "}
                    <NextLink href="/login" passHref>
                      <Link variant="subtitle2" underline="hover">
                        Sign In
                      </Link>
                    </NextLink>
                  </Typography>
                </form>
              </Container>
            </Box>
          )}
        </>
      )}
    </>
  );
};

export default Register;
