import { useCallback, useMemo, useState } from "react";
import Head from "next/head";
import { subDays, subHours } from "date-fns";
import ArrowDownOnSquareIcon from "@heroicons/react/24/solid/ArrowDownOnSquareIcon";
import ArrowUpOnSquareIcon from "@heroicons/react/24/solid/ArrowUpOnSquareIcon";
import PlusIcon from "@heroicons/react/24/solid/PlusIcon";
import { Box, Button, Container, Link, Stack, SvgIcon, Typography } from "@mui/material";
import { useSelection } from "src/hooks/use-selection";
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import { applyPagination } from "src/utils/apply-pagination";
import { ManageDocumentTable } from "src/sections/managedocument/managedocument-table";
import { ManageDocumentSearch } from "src/sections/managedocument/managedocument-search";
import { height } from "@mui/system";
const now = new Date();

const data = [
  {
    id: "5e887ac47eed253091be10cb",
    address: {
      city: "Cleveland",
      country: "USA",
      state: "Ohio",
      street: "2849 Fulton Street",
    },
    avatar: "/assets/avatars/avatar-carson-darrin.png",
    createdAt: subDays(subHours(now, 7), 1).getTime(),
    email: "carson.darrin@devias.io",
    name: "Carson Darrin",
    phone: "304-428-3097",
  },
  {
    id: "5e887b209c28ac3dd97f6db5",
    address: {
      city: "Atlanta",
      country: "USA",
      state: "Georgia",
      street: "1865  Pleasant Hill Road",
    },
    avatar: "/assets/avatars/avatar-fran-perez.png",
    createdAt: subDays(subHours(now, 1), 2).getTime(),
    email: "fran.perez@devias.io",
    name: "Fran Perez",
    phone: "712-351-5711",
  },
  {
    id: "5e887b7602bdbc4dbb234b27",
    address: {
      city: "North Canton",
      country: "USA",
      state: "Ohio",
      street: "4894  Lakeland Park Drive",
    },
    avatar: "/assets/avatars/avatar-jie-yan-song.png",
    createdAt: subDays(subHours(now, 4), 2).getTime(),
    email: "jie.yan.song@devias.io",
    name: "Jie Yan Song",
    phone: "770-635-2682",
  },
  {
    id: "5e86809283e28b96d2d38537",
    address: {
      city: "Madrid",
      country: "Spain",
      name: "Anika Visser",
      street: "4158  Hedge Street",
    },
    avatar: "/assets/avatars/avatar-anika-visser.png",
    createdAt: subDays(subHours(now, 11), 2).getTime(),
    email: "anika.visser@devias.io",
    name: "Anika Visser",
    phone: "908-691-3242",
  },
  {
    id: "5e86805e2bafd54f66cc95c3",
    address: {
      city: "San Diego",
      country: "USA",
      state: "California",
      street: "75247",
    },
    avatar: "/assets/avatars/avatar-miron-vitold.png",
    createdAt: subDays(subHours(now, 7), 3).getTime(),
    email: "miron.vitold@devias.io",
    name: "Miron Vitold",
    phone: "972-333-4106",
  },
  {
    id: "5e887a1fbefd7938eea9c981",
    address: {
      city: "Berkeley",
      country: "USA",
      state: "California",
      street: "317 Angus Road",
    },
    avatar: "/assets/avatars/avatar-penjani-inyene.png",
    createdAt: subDays(subHours(now, 5), 4).getTime(),
    email: "penjani.inyene@devias.io",
    name: "Penjani Inyene",
    phone: "858-602-3409",
  },
  {
    id: "5e887d0b3d090c1b8f162003",
    address: {
      city: "Carson City",
      country: "USA",
      state: "Nevada",
      street: "2188  Armbrester Drive",
    },
    avatar: "/assets/avatars/avatar-omar-darboe.png",
    createdAt: subDays(subHours(now, 15), 4).getTime(),
    email: "omar.darobe@devias.io",
    name: "Omar Darobe",
    phone: "415-907-2647",
  },
  {
    id: "5e88792be2d4cfb4bf0971d9",
    address: {
      city: "Los Angeles",
      country: "USA",
      state: "California",
      street: "1798  Hickory Ridge Drive",
    },
    avatar: "/assets/avatars/avatar-siegbert-gottfried.png",
    createdAt: subDays(subHours(now, 2), 5).getTime(),
    email: "siegbert.gottfried@devias.io",
    name: "Siegbert Gottfried",
    phone: "702-661-1654",
  },
  {
    id: "5e8877da9a65442b11551975",
    address: {
      city: "Murray",
      country: "USA",
      state: "Utah",
      street: "3934  Wildrose Lane",
    },
    avatar: "/assets/avatars/avatar-iulia-albu.png",
    createdAt: subDays(subHours(now, 8), 6).getTime(),
    email: "iulia.albu@devias.io",
    name: "Iulia Albu",
    phone: "313-812-8947",
  },
  {
    id: "5e8680e60cba5019c5ca6fda",
    address: {
      city: "Salt Lake City",
      country: "USA",
      state: "Utah",
      street: "368 Lamberts Branch Road",
    },
    avatar: "/assets/avatars/avatar-nasimiyu-danai.png",
    createdAt: subDays(subHours(now, 1), 9).getTime(),
    email: "nasimiyu.danai@devias.io",
    name: "Nasimiyu Danai",
    phone: "801-301-7894",
  },
];

const recent_added_document = [
  {
    sno: "ID3425",
    document_date: "01/10/2023",
    submission_date: "06/05/2023",
    amount: "UAE 4500",
    vender_name: "Aaswa Trading & export Pvt. ltd.",
  },
  {
    sno: "ID3426",
    document_date: "01/10/2023",
    submission_date: "12/10/2023",
    amount: "USD 5500",
    vender_name: "Trading & Export Pnvt. Ltd.",
  },
  {
    sno: "ID3427",
    document_date: "01/10/2023",
    submission_date: "18/10/2023",
    amount: "AED 5550",
    vender_name: "Aaswa Trading & export Pvt. ltd.",
  },
  {
    sno: "ID3428",
    document_date: "01/10/2023",
    submission_date: "24/09/2023",
    amount: "INR 2500",
    vender_name: "Trading & Export Pnvt. Ltd.",
  },
  {
    sno: "ID3429",
    document_date: "01/10/2023",
    submission_date: "02/11/2023",
    amount: "INR 8500",
    vender_name: "Aaswa Trading & export Pvt. ltd.",
  },
  {
    sno: "ID3430",
    document_date: "01/10/2023",
    submission_date: "26/12/2023",
    amount: "UAE 1934",
    vender_name: "Trading & Export Pnvt. Ltd.",
  },
];
const useCustomers = (page, rowsPerPage) => {
  return useMemo(() => {
    return applyPagination(data, page, rowsPerPage);
  }, [page, rowsPerPage]);
};

const useCustomerIds = (customers) => {
  return useMemo(() => {
    return customers.map((customer) => customer.id);
  }, [customers]);
};

const Page = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const customers = useCustomers(page, rowsPerPage);
  const customersIds = useCustomerIds(customers);
  const customersSelection = useSelection(customersIds);

  const handlePageChange = useCallback((event, value) => {
    setPage(value);
  }, []);

  const handleRowsPerPageChange = useCallback((event) => {
    setRowsPerPage(event.target.value);
  }, []);

  return (
    <>
      <Head>
        <title>Manage Document | SnapHub</title>
      </Head>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          pt: 5,
          pb: 8,
          backgroundColor: "#f5f7ff",
        }}
      >
        <Container maxWidth="xxl">
          <div style={{marginBottom:"22px"}}>
            Home	&gt; Sig in	&gt; Dashboard &gt; Manage Document
          </div>
          {/* <Stack spacing={3} className="profilecompletestatus">
            <Stack direction="row" justifyContent="space-between" spacing={4}>
              <Stack spacing={1} sx={{ display: "flex",width:'100%', flexDirection:"row", justifyContent:"space-between" }} >
                <Box sx={{ display: "flex" }} className="status">
                  <img className="profileimg" src="../assets/avatars/profilepic.png"></img>
                  <Typography
                    color="text.secondary"
                    variant="body2"
                    sx={{textAlign:"center",fontSize:"15px", marginBottom:"auto", marginTop:"auto",color:"#2C2C2C"}}
                  >
                    75% of your profile is completed.
                    <Link
                      sx={{color:"#24A1DF",fontSize:"15px",fontWeight:"400"}}
                      href="/auth/register"
                      underline="hover"
                      variant="subtitle2"
                    >
                    &nbsp;Complete now
                    </Link>
                  </Typography>
                </Box>
             
                  <Button className="Setpassword-btn">
                  <svg style={{marginRight:"10px"}} width="15" height="19" viewBox="0 0 15 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.8891 8.27825H12.6674V5.52932C12.6674 2.66159 10.3427 0.336914 7.47498 0.336914C4.60724 0.336914 2.28257 2.66159 2.28257 5.52932V8.27825H1.06082C0.723316 8.27825 0.449951 8.55161 0.449951 8.88912V18.0522C0.449951 18.3897 0.723316 18.6631 1.06082 18.6631H13.8891C14.2266 18.6631 14.5 18.3897 14.5 18.0522V8.88912C14.5 8.55161 14.2266 8.27825 13.8891 8.27825ZM4.11518 5.52932C4.11518 3.6738 5.61945 2.16953 7.47498 2.16953C9.3305 2.16953 10.8348 3.6738 10.8348 5.52932V8.27825H4.11518V5.52932ZM13.5837 17.7468H1.36626V9.19455H13.5837V17.7468ZM13.2783 9.49999H1.67169V17.4413H13.2783V9.49999ZM8.08585 13.912V14.6924C8.08585 15.0299 7.81248 15.3033 7.47498 15.3033C7.13747 15.3033 6.8641 15.0299 6.8641 14.6924V13.912C6.50033 13.7003 6.25323 13.3109 6.25323 12.8598C6.25323 12.1851 6.80027 11.638 7.47498 11.638C8.14968 11.638 8.69672 12.1851 8.69672 12.8598C8.69672 13.3109 8.44962 13.7003 8.08585 13.912Z" fill="#369CCF"/>
                  </svg>
                  Set your own password.
                  </Button>
              
               </Stack>
            </Stack>
          </Stack> */}
          <Stack spacing={3}>
            <Stack direction="row" justifyContent="space-between" spacing={4}>
              <Stack spacing={1} sx={{width:"100%"}}>
                <Box sx={{ display: "flex" }}>
                  <Box sx={{ display: "flex" }}>

                  <svg
                    style={{ marginTop: "auto", marginBottom: "auto", marginRight: "8px" }}
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M1.6 0C0.716344 0 0 0.716344 0 1.6V4.26667C0 5.15032 0.716344 5.86667 1.6 5.86667H5.86667C6.75032 5.86667 7.46667 5.15032 7.46667 4.26667V1.6C7.46667 0.716344 6.75032 0 5.86667 0H1.6Z"
                      fill="#1E1E1E"
                    />
                    <path
                      d="M10.1333 16C9.24967 16 8.53333 15.2836 8.53333 14.4V11.7333C8.53333 10.8496 9.24967 10.1333 10.1333 10.1333H14.4C15.2836 10.1333 16 10.8496 16 11.7333V14.4C16 15.2836 15.2836 16 14.4 16H10.1333Z"
                      fill="#1E1E1E"
                    />
                    <path
                      d="M1.6 6.93359C0.716344 6.93359 0 7.64994 0 8.53359V14.4003C0 15.2839 0.716344 16.0003 1.6 16.0003H5.86667C6.75032 16.0003 7.46667 15.2839 7.46667 14.4003V8.53359C7.46667 7.64994 6.75032 6.93359 5.86667 6.93359H1.6Z"
                      fill="#1E1E1E"
                    />
                    <path
                      d="M10.1333 9.06667C9.24967 9.06667 8.53333 8.35032 8.53333 7.46667V1.6C8.53333 0.716344 9.24967 0 10.1333 0H14.4C15.2836 0 16 0.716344 16 1.6V7.46667C16 8.35032 15.2836 9.06667 14.4 9.06667H10.1333Z"
                      fill="#1E1E1E"
                    />
                  </svg>

                  <Typography variant="h4" sx={{ fontSize: "19px",my:"auto",fontWeight:"400 !important" }}>
                    Dashboard
                  </Typography>
                  </Box>
                <Stack
                sx={{width:"100%"}}
                  alignItems="center"
                  direction="row"
                  spacing={1}
                >
                  <ManageDocumentSearch />
                  <Box sx={{display:"flex",gap:"10px",height:"40px"}}>
                    <div style={{display:"grid"}}>
                      <label style={{fontSize:"13px"}}>Start Date</label>
                      <input type="date"></input>
                    </div>
                    <div style={{display:"grid"}}>
                      <label style={{fontSize:"13px"}}>End Date</label>
                      <input type="date"></input>
                    </div>
                  </Box>
                  <Button
                  className="btn-white"
                    color="inherit"
                    // startIcon={(
                    //   <SvgIcon fontSize="small">
                    //     <ArrowUpOnSquareIcon />
                    //   </SvgIcon>
                    // )}
                  >
                    Extract Excel
                  </Button>
                  <Button
                  className="btn-gray"
                    color="inherit"
                    href="/adddocument"
                    // startIcon={(
                    //   <SvgIcon fontSize="small">
                    //     <ArrowDownOnSquareIcon />
                    //   </SvgIcon>
                    // )}
                  >
        
                        Add Document
                   
                  </Button>
                </Stack>
                </Box>
              </Stack>
              {/* <div>
                <Button
                  startIcon={(
                    <SvgIcon fontSize="small">
                      <PlusIcon />
                    </SvgIcon>
                  )}
                  variant="contained"
                >
                  Add
                </Button>
              </div> */}
            </Stack>
 
            <Stack spacing={3} className="scrollcard-section">
              {/* <div style={{display:"flex",justifyContent:"space-between"}}>
                <Typography variant="h4" sx={{ fontSize: "16px",fontWeight:"500 !important",marginTop:"auto !important",marginBottom:"auto !important", }}>
                  Recently Added Document
                </Typography>
                <Button className="btn-purple">View All</Button>
              </div> */}
              <ManageDocumentTable
                count={data.length}
                items={recent_added_document}
                onDeselectAll={customersSelection.handleDeselectAll}
                onDeselectOne={customersSelection.handleDeselectOne}
                onPageChange={handlePageChange}
                onRowsPerPageChange={handleRowsPerPageChange}
                onSelectAll={customersSelection.handleSelectAll}
                onSelectOne={customersSelection.handleSelectOne}
                page={page}
                rowsPerPage={rowsPerPage}
                selected={customersSelection.selected}
              />
            </Stack>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
export default Page;