import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { DashboardNavbar } from "./dashboard-navbar";
import { DashboardSidebar } from "./dashboard-sidebar";

const DashboardLayoutRoot = styled("div")(({ theme }) => ({
  display: "flex",
  flex: "1 1 auto",
  maxWidth: "100%",
  paddingTop: 64,
  [theme.breakpoints.up("lg")]: {
    paddingLeft: 280,
  },
}));

export const DashboardLayout = (props) => {
  const { children } = props;
  const router = useRouter();

  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const [token, setToken] = useState(null);

  useEffect(() => {
    const accessToken = localStorage.getItem("access");
    if (accessToken) {
      setToken(accessToken);
    } else {
      router.push("/login");
    }
  }, [token]);

  return (
    <>
      {token && (
        <>
          <DashboardLayoutRoot>
            <Box
              sx={{
                display: "flex",
                flex: "1 1 auto",
                flexDirection: "column",
                width: "100%",
              }}
            >
              {children}
            </Box>
          </DashboardLayoutRoot>
          <DashboardNavbar onSidebarOpen={() => setSidebarOpen(true)} />
          <DashboardSidebar onClose={() => setSidebarOpen(false)} open={isSidebarOpen} />
        </>
      )}
    </>
  );
};
