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
  import { DashboardLayout } from "../components/dashboard-layout";
  import { getInitials } from "../utils/get-initials";
  import Config from "../config/constants";
  
  export const ResponseHistory = ({
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
  
    useEffect( async() => {
      setData(candidates);
      const access = localStorage.getItem("access");
            const config = {
                headers: { Authorization: `Bearer ${access}` },
                
                };
            
            const url = Config.excelUserListUrl;
           
                try {
                    const response = await axios.get(url, config);
                    if (response.status === 205 || response.status === 200 ) {
                        setData(response.data)
                    
                    }
                }
                catch (error) {
               console.log('yes')

                
                }

    }, [candidates]);
  
    // const onClickDetailPage = (data) => {
    //   router.push({
    //     pathname: "/profile",
    //     query: { name: data },
    //   });
    // };
  
    // const handleLimitChange = (event) => {
    //   setLimit(event.target.value);
    // };
  
    // const handlePageChange = (event, newPage) => {
    //   let url = activeurl;
  
    //   if (page < newPage) {
    //     if (nextpage) {
    //       url = nextpage;
    //     }
    //   } else if (newPage < page) {
    //     if (prevpage) {
    //       url = prevpage;
    //     }
    //   }
  
    //   const access = localStorage.getItem("access");
    //   const config = {
    //     headers: { Authorization: `Bearer ${access}` },
    //   };
  
    //   axios
    //     .get(url, config)
    //     .then((response) => {
    //       const data = response.data;
    //       const count = data.count;
  
    //       const next = data.next;
    //       const prev = data.previous;
    //       setactive(url);
    //       setnext(next);
    //       setprev(prev);
    //       setcount(data.count);
  
    //       setPage(newPage);
    //       setcandidate(response.data.results);
    //     })
    //     .catch((err) => {
    //       console.log("Exception in customer.js", err.response);
    //     });
    // };
  
    return (
      <>
        {isBusy ? (
          <div> Loading....</div>
        ) : (
          <Card {...rest}>
            <PerfectScrollbar>
              <Box sx={{ minWidth: 800  }}>
              <Typography sx={{ mb: 3 }} variant="h4">
                Candidates Response
                </Typography>
                <Table>
                  <TableHead>

                    <TableRow>
                      <TableCell>Name</TableCell>
                      <TableCell>Email</TableCell>
                      
                      <TableCell>Conatct No.</TableCell>
                      <TableCell >Response</TableCell>
                      <TableCell >Reason</TableCell>
                      {/* <TableCell>Work</TableCell> */}
  
                    </TableRow>
                  </TableHead>
                  <TableBody>   
                    {data &&
                      data.slice(0, limit).map((customer, index) => (
                        <TableRow
                          hover
                          key={index}
                        //   onClick={() => onClickDetailPage(JSON.stringify(customer))}
                        >
                          <TableCell>
                            <Box
                              sx={{
                                alignItems: "center",
                                display: "flex",
                              }}
                            >
                              {/* <Avatar src={customer.profile_pic} sx={{ mr: 2 }}>
                                {getInitials(customer.full_name)}
                              </Avatar> */}
                              <Typography color="textPrimary" variant="body1">
                                {customer.fields.first_name} {customer.fields.last_name}
                              </Typography>
                            </Box>
                          </TableCell>
                          <TableCell>{customer.fields.email}</TableCell>
                          
                          <TableCell >
                            {customer.fields.phone_no}
                            {/* {format(customer.createdAt, 'dd/MM/yyyy')} */}
                          </TableCell>
                          {/* <TableCell>{customer.is_open && "OPEN"}</TableCell> */}
                          {customer.fields.response=== true && customer.fields.active=== true ?
                            <TableCell> Interested </TableCell> :
                            customer.fields.response=== true && customer.fields.active=== false ?
                            <TableCell>Not Interested  </TableCell> :
                            <TableCell> No Response</TableCell>
                          }
                           <TableCell>{customer.fields.decline_reason}</TableCell>
                        </TableRow>

                      ))}
                  </TableBody>
                </Table>
              </Box>
            </PerfectScrollbar>
            {/* <TablePagination
              component="div"
              count={count}
              onPageChange={handlePageChange}
              onRowsPerPageChange={handleLimitChange}
              page={page}
              rowsPerPage={limit}
              rowsPerPageOptions={[count]}
            /> */}
          </Card>
        )}
      </>
    );
  };
  
//   ResponseHistory.propTypes = {
//     candidates: PropTypes.array.isRequired,
//   };
  ResponseHistory.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
  export default ResponseHistory;
  