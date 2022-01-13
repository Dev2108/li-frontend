import { Box, Container } from "@mui/material";
import axios from "axios";
import Head from "next/head";
import { useSnackbar } from "notistack";
import { useEffect, useRef, useState } from "react";
import { CustomerListResults } from "../components/customer/customer-list-results";
import { CustomerListToolbar } from "../components/customer/customer-list-toolbar";
import { DashboardLayout } from "../components/dashboard-layout";
import Config from "../config/constants"

const Customers = () => {
  const isInitialMount = useRef(true);

  const [data, setData] = useState();
  const [nextPageUrl, setNextPage] = useState(null);
  const [prevPageUrl, setPrevPage] = useState(null);
  const [activeUrl, setActiveUrl] = useState(null);
  const [count, setCount] = useState(0);
  const [accessToken, setAccessToken] = useState(null);
  const [refreshToken, setRefreshToken] = useState(null);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  useEffect(() => {
    // run on start and when the accesstoken changes
    const access = localStorage.getItem("access");
    const config = {
      headers: { Authorization: `Bearer ${access}` },
    };

    async function fetchData() {
      const url = Config.indexUrl;
      setActiveUrl(url);
      axios
        .get(url, config)
        .then((response) => {
          const data = response.data;
          const count = data.count;

          const next = data.next;
          setNextPage(next);
          setCount(data.count);
          setData(response.data.results);
        })
        .catch((err) => {
          if (err.response) {
            if (err.response.status === 401) {
              enqueueSnackbar(err.response.data.detail);
              const refresh = localStorage.getItem("refresh");
              setRefreshToken(refresh);
            }
          } else {
            enqueueSnackbar("Error: " + err.message,  { 
              variant: 'error',
          });
          }
        });
    }

    fetchData();
  }, [accessToken]);

  useEffect(() => {
    //run only when refresh token value changes, not on the start ...

    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      const refresh = localStorage.getItem("refresh");

      async function fetchNewAccessTokenUsingRefresh() {
        const url = Config.refreshTokenUrl;
        setActiveUrl(url);
        axios
          .post(url, (data = { refresh: refresh }))
          .then((response) => {
            localStorage.setItem("access", response.data.access);
            setAccessToken(response.data.access);
          })
          .catch((err) => {
            if (err.response) {
              if (err.response.status === 401) {
                enqueueSnackbar(err.response.data.detail,  { 
                  variant: 'error',
              });
              }
            } else {
              enqueueSnackbar("Error: " + err.message,  { 
                variant: 'error',
            });
            }
          });
      }

      fetchNewAccessTokenUsingRefresh();
    }
  }, [refreshToken]);

  const updateData = (value) => {
    setData(null);
    setData(value);
  };

  return (
    <>
      <Head>
        <title>Customers</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        {data && (
          <Container maxWidth={false}>
            <CustomerListToolbar
              candidates={data}
              setcandidate={updateData}
              activeurl={activeUrl}
              setactive={setActiveUrl}
              nextpage={nextPageUrl}
              setnext={setNextPage}
              prevpage={prevPageUrl}
              setprev={setPrevPage}
              count={count}
              setcount={setCount}
            />
            <Box sx={{ mt: 3 }}>
              <CustomerListResults
                candidates={data}
                setcandidate={setData}
                activeurl={activeUrl}
                setactive={setActiveUrl}
                nextpage={nextPageUrl}
                setnext={setNextPage}
                prevpage={prevPageUrl}
                setprev={setPrevPage}
                count={count}
                setcount={setCount}
              />
            </Box>
          </Container>
        )}
      </Box>
    </>
  );
};
Customers.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Customers;
