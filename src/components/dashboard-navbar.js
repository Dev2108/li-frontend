import styled from "@emotion/styled";
import Logout from "@mui/icons-material/Logout";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { AppBar, Avatar, Badge, Box, IconButton, Toolbar, Tooltip } from "@mui/material";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import { UserCircle as UserCircleIcon } from "../icons/user-circle";
import { useSnackbar } from "notistack";

const DashboardNavbarRoot = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[3],
}));

export const DashboardNavbar = ({ onSidebarOpen, ...other }) => {
  // const { } = props;
  const router = useRouter();

  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const onClickDetailPage = () => {
    router.push({
      pathname: "/account",
    });
  };

  const handleLogOut = async (event) => {
    event.preventDefault();
    localStorage.clear();
      enqueueSnackbar("Successfully Logout from the application", {
        variant: "success",
      });
    router.push({
      pathname: "/login",
    }); 
  };

  return (
    <>
      <DashboardNavbarRoot
        sx={{
          left: {
            lg: 280,
          },
          width: {
            lg: "calc(100% - 280px)",
          },
        }}
        {...other}
      >
        <Toolbar
          disableGutters
          sx={{
            minHeight: 64,
            left: 0,
            px: 2,
          }}
        >
          <IconButton
            onClick={onSidebarOpen}
            sx={{
              display: {
                xs: "inline-flex",
                lg: "none",
              },
            }}
          >
            <MenuIcon fontSize="small" />
          </IconButton>

          <Box sx={{ flexGrow: 1 }} />

          <Tooltip title="Log out">
            <IconButton sx={{ ml: 1 }} onClick={handleLogOut}>
              <Badge color="primary">
                <Logout fontSize="small" />
              </Badge>
            </IconButton>
          </Tooltip>
          <Avatar
            sx={{
              height: 40,
              width: 40,
              ml: 1,
            }}
            src=""
            onClick={onClickDetailPage}
          >
            <UserCircleIcon fontSize="small" />
          </Avatar>
        </Toolbar>
      </DashboardNavbarRoot>
    </>
  );
};

DashboardNavbar.propTypes = {
  onSidebarOpen: PropTypes.func,
};
