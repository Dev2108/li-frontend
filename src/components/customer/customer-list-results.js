import {
  Avatar,
  Box,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import { getInitials } from "../../utils/get-initials";

export const CustomerListResults = ({
  candidates,
  setcandidate,
  activeurl,
  setactive,
  nextpage,
  setnext,
  prevpage,
  setprev,
  count,
  setcount,
  ...rest
}) => {
  const [selectedCustomerIds, setSelectedCustomerIds] = useState([]);
  const [limit, setLimit] = useState(25);
  const [page, setPage] = useState(0);
  const [data, setData] = useState();
  const [isBusy, setBusy] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setData(candidates);
  }, [candidates]);

  const onClickDetailPage = (data) => {
    router.push({
      pathname: "/profile",
      query: { name: data },
    });
  };

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    let url = activeurl;

    if (page < newPage) {
      if (nextpage) {
        url = nextpage;
      }
    } else if (newPage < page) {
      if (prevpage) {
        url = prevpage;
      }
    }

    const access = localStorage.getItem("access");
    const config = {
      headers: { Authorization: `Bearer ${access}` },
    };

    axios
      .get(url, config)
      .then((response) => {
        const data = response.data;
        const count = data.count;

        const next = data.next;
        const prev = data.previous;
        setactive(url);
        setnext(next);
        setprev(prev);
        setcount(data.count);

        setPage(newPage);
        setcandidate(response.data.results);
      })
      .catch((err) => {
        console.log("Exception in customer.js", err.response);
      });
  };

  return (
    <>
      {isBusy ? (
        <div> Loading....</div>
      ) : (
        <Card {...rest}>
          <PerfectScrollbar>
            <Box sx={{ minWidth: 800  }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Location</TableCell>
                    
                    <TableCell style={{'text-align': 'center'}}>Headline</TableCell>
                    <TableCell>Email</TableCell>
                    {/* <TableCell>Work</TableCell> */}

                  </TableRow>
                </TableHead>
                <TableBody>
                  {data &&
                    data.slice(0, limit).map((customer, index) => (
                      <TableRow
                        hover
                        key={index}
                        onClick={() => onClickDetailPage(JSON.stringify(customer))}
                      >
                        <TableCell>
                          <Box
                            sx={{
                              alignItems: "center",
                              display: "flex",
                            }}
                          >
                            <Avatar src={customer.profile_pic} sx={{ mr: 2 }}>
                              {getInitials(customer.full_name)}
                            </Avatar>
                            <Typography color="textPrimary" variant="body1">
                              {customer.full_name}
                            </Typography>
                          </Box>
                        </TableCell>
                        <TableCell>{customer.location}</TableCell>
                        
                        <TableCell >
                          {customer.headline}
                          {/* {format(customer.createdAt, 'dd/MM/yyyy')} */}
                        </TableCell>
                        {/* <TableCell>{customer.is_open && "OPEN"}</TableCell> */}
                        <TableCell>{customer.email}</TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </Box>
          </PerfectScrollbar>
          <TablePagination
            component="div"
            count={count}
            onPageChange={handlePageChange}
            onRowsPerPageChange={handleLimitChange}
            page={page}
            rowsPerPage={limit}
            rowsPerPageOptions={[count]}
          />
        </Card>
      )}
    </>
  );
};

CustomerListResults.propTypes = {
  candidates: PropTypes.array.isRequired,
};
