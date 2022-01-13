import { Avatar, Box, Card, CardContent, Typography } from "@mui/material";
import axios from "axios";
import { useSnackbar } from "notistack";
import { useEffect, useState } from "react";
import Config from "../../config/constants"

export const AccountProfile = (props) => {
  const [user, setUser] = useState({
    email: "test@test.com",
    name: "Undefined",
  });

  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  useEffect(() => {
    const accessToken = localStorage.getItem("access");

    const config = {
      headers: { Authorization: `Bearer ${accessToken}` },
    };
    async function fetchData() {
      const url = Config.userUrl;
      axios
        .get(url, config)
        .then((response) => {
          const email = response.data.email;
          const name = response.data.name;
          setUser({ email, name });
        })
        .catch((err) => {
          enqueueSnackbar(err.message, {
            variant: "error",
          });
        });
    }

    fetchData();
  }, []);

  return (
    <Card {...props}>
      <CardContent>
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            
          }}
        >
          <Avatar
            src={user.avatar}
            sx={{
              height: 64,
              mb: 2,
              width: 64,
            }}
          />
          <Typography color="textPrimary" gutterBottom variant="h5">
            {user.name}
          </Typography>
          <Typography color="textSecondary" variant="body2" sx={{fontWeight: 'bold' }}>
            {user.email}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};
