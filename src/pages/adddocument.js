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
            Home	&gt; Sig in	&gt; Dashboard &gt; Manage Document &gt; Add New Document
          </div>

          <Stack spacing={3}>
            <Stack direction="row" justifyContent="space-between" spacing={4}>
              <Stack spacing={1} sx={{width:"100%"}}>
                <Box sx={{ display: "flex" }}>
                  <Box sx={{ display: "flex" }}>
                  <svg style={{ marginTop: "auto", marginBottom: "auto", marginRight: "8px" }} width="16" height="21" viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.6776 3.8834L12.25 0.113109C12.218 0.077602 12.1788 0.0491952 12.1352 0.0297152C12.0915 0.0102351 12.0442 0.00011305 11.9964 0H1.02826C0.755549 0 0.494007 0.108334 0.30117 0.301171C0.108334 0.494007 0 0.755549 0 1.02826V19.537C0 19.8097 0.108334 20.0712 0.30117 20.264C0.494007 20.4569 0.755549 20.5652 1.02826 20.5652H14.7384C15.0111 20.5652 15.2727 20.4569 15.4655 20.264C15.6583 20.0712 15.7667 19.8097 15.7667 19.537V4.11304C15.7664 4.0281 15.7347 3.94626 15.6776 3.8834ZM1.37101 6.51232C1.37101 5.78509 1.65991 5.08764 2.17414 4.57341C2.68837 4.05918 3.38581 3.77029 4.11304 3.77029C4.20395 3.77029 4.29113 3.8064 4.35541 3.87068C4.41969 3.93496 4.4558 4.02214 4.4558 4.11304V6.51232H6.4849C6.53425 6.51183 6.58312 6.52201 6.62817 6.54215C6.67323 6.5623 6.7134 6.59193 6.74594 6.62903C6.77849 6.66613 6.80264 6.70982 6.81674 6.75712C6.83084 6.80441 6.83456 6.85419 6.82765 6.90306C6.72975 7.59013 6.37497 8.21452 5.83484 8.65031C5.29471 9.0861 4.60943 9.30086 3.91719 9.25129C3.22495 9.20172 2.57726 8.89151 2.10474 8.3832C1.63222 7.8749 1.37002 7.20633 1.37101 6.51232ZM4.79855 17.1377C4.79855 17.2286 4.76244 17.3158 4.69816 17.38C4.63388 17.4443 4.5467 17.4804 4.4558 17.4804H3.08478C2.99388 17.4804 2.9067 17.4443 2.84242 17.38C2.77814 17.3158 2.74203 17.2286 2.74203 17.1377V15.0812C2.74203 14.9903 2.77814 14.9031 2.84242 14.8388C2.9067 14.7745 2.99388 14.7384 3.08478 14.7384H4.4558C4.5467 14.7384 4.63388 14.7745 4.69816 14.8388C4.76244 14.9031 4.79855 14.9903 4.79855 15.0812V17.1377ZM7.54058 17.1377C7.54058 17.2286 7.50447 17.3158 7.44019 17.38C7.37591 17.4443 7.28873 17.4804 7.19783 17.4804H5.82681C5.73591 17.4804 5.64873 17.4443 5.58445 17.38C5.52017 17.3158 5.48406 17.2286 5.48406 17.1377V14.0529C5.48406 13.962 5.52017 13.8748 5.58445 13.8105C5.64873 13.7463 5.73591 13.7101 5.82681 13.7101H7.19783C7.28873 13.7101 7.37591 13.7463 7.44019 13.8105C7.50447 13.8748 7.54058 13.962 7.54058 14.0529V17.1377ZM7.49945 5.55604C7.48273 5.63399 7.43935 5.70367 7.37679 5.7531C7.31423 5.80252 7.2364 5.82859 7.1567 5.82681H5.48406C5.39315 5.82681 5.30597 5.7907 5.24169 5.72642C5.17742 5.66214 5.1413 5.57496 5.1413 5.48406V3.42754C5.1413 3.33663 5.17742 3.24945 5.24169 3.18517C5.30597 3.12089 5.39315 3.08478 5.48406 3.08478C6.02948 3.08478 6.55257 3.30145 6.93824 3.68712C7.32391 4.0728 7.54058 4.59588 7.54058 5.1413C7.54151 5.28061 7.52773 5.41963 7.49945 5.55604ZM10.2826 17.1377C10.2826 17.2286 10.2465 17.3158 10.1822 17.38C10.1179 17.4443 10.0308 17.4804 9.93985 17.4804H8.56884C8.47794 17.4804 8.39076 17.4443 8.32648 17.38C8.2622 17.3158 8.22609 17.2286 8.22609 17.1377V12.6819C8.22609 12.591 8.2622 12.5038 8.32648 12.4395C8.39076 12.3752 8.47794 12.3391 8.56884 12.3391H9.93985C10.0308 12.3391 10.1179 12.3752 10.1822 12.4395C10.2465 12.5038 10.2826 12.591 10.2826 12.6819V17.1377ZM13.0246 17.1377C13.0246 17.2286 12.9885 17.3158 12.9242 17.38C12.86 17.4443 12.7728 17.4804 12.6819 17.4804H11.3109C11.22 17.4804 11.1328 17.4443 11.0685 17.38C11.0042 17.3158 10.9681 17.2286 10.9681 17.1377V11.3109C10.9681 11.22 11.0042 11.1328 11.0685 11.0685C11.1328 11.0042 11.22 10.9681 11.3109 10.9681H12.6819C12.7728 10.9681 12.86 11.0042 12.9242 11.0685C12.9885 11.1328 13.0246 11.22 13.0246 11.3109V17.1377ZM13.7101 8.91159H8.91159C8.82069 8.91159 8.73351 8.87548 8.66923 8.8112C8.60495 8.74693 8.56884 8.65974 8.56884 8.56884C8.56884 8.47794 8.60495 8.39076 8.66923 8.32648C8.73351 8.2622 8.82069 8.22609 8.91159 8.22609H13.7101C13.801 8.22609 13.8882 8.2622 13.9525 8.32648C14.0168 8.39076 14.0529 8.47794 14.0529 8.56884C14.0529 8.65974 14.0168 8.74693 13.9525 8.8112C13.8882 8.87548 13.801 8.91159 13.7101 8.91159ZM13.7101 7.54058H8.91159C8.82069 7.54058 8.73351 7.50447 8.66923 7.44019C8.60495 7.37591 8.56884 7.28873 8.56884 7.19783C8.56884 7.10692 8.60495 7.01974 8.66923 6.95546C8.73351 6.89118 8.82069 6.85507 8.91159 6.85507H13.7101C13.801 6.85507 13.8882 6.89118 13.9525 6.95546C14.0168 7.01974 14.0529 7.10692 14.0529 7.19783C14.0529 7.28873 14.0168 7.37591 13.9525 7.44019C13.8882 7.50447 13.801 7.54058 13.7101 7.54058ZM13.7101 6.16957H8.91159C8.82069 6.16957 8.73351 6.13345 8.66923 6.06918C8.60495 6.0049 8.56884 5.91772 8.56884 5.82681C8.56884 5.73591 8.60495 5.64873 8.66923 5.58445C8.73351 5.52017 8.82069 5.48406 8.91159 5.48406H13.7101C13.801 5.48406 13.8882 5.52017 13.9525 5.58445C14.0168 5.64873 14.0529 5.73591 14.0529 5.82681C14.0529 5.91772 14.0168 6.0049 13.9525 6.06918C13.8882 6.13345 13.801 6.16957 13.7101 6.16957ZM12.6819 3.77029C12.591 3.77029 12.5038 3.73418 12.4395 3.6699C12.3752 3.60562 12.3391 3.51844 12.3391 3.42754V1.23049L14.6493 3.77029H12.6819Z" fill="#191F2F"/>
                </svg>

                  <Typography variant="h4" sx={{ fontSize: "19px",my:"auto",fontWeight:"400 !important",width:"max-content !important" }}>
                  Add Document
                  </Typography>
                  </Box>

                </Box>
              </Stack>

            </Stack>

            <Stack spacing={3} className="scrollcard-section" sx={{display:"flex",flexDirection:"row"}}>
                <Box sx={{display:"flex",flexDirection:"row",my:"auto !important",width:{lg:"70%"}}}>
                    <Box sx={{marginRight:"44px"}}>
                        <svg width="76" height="85" viewBox="0 0 76 85" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M27.8723 37.0179H60.6495V14.571H46.0735V0H15.3484V27.972H20.8837L27.8723 37.0179ZM58.6216 11.7035L48.942 2.02831V11.7035H58.6216ZM63.5191 37.0179H68.1939C71.1287 37.0179 73.8018 38.2196 75.7342 40.1513L76 40.4265V29.6242C76 27.4814 75.1195 25.5277 73.7052 24.1149C72.2919 22.7011 70.3385 21.8209 68.1939 21.8209H63.5191V37.0179ZM12.4798 21.8209H7.80605C5.66146 21.8209 3.70811 22.7011 2.2938 24.1149C1.25355 25.1548 0.50226 26.4867 0.177577 27.972H12.4798V21.8209ZM68.1939 39.8855H26.4759L19.4852 30.8395H0V43.9778V76.6839C0 78.8278 0.879481 80.7815 2.2938 82.1953C3.70811 83.6081 5.66146 84.4883 7.80605 84.4883H68.1939C70.3385 84.4883 72.2919 83.6081 73.7052 82.1953C75.1195 80.7815 76 78.8278 76 76.6839V47.6889C76 45.5461 75.1195 43.5923 73.7052 42.1796C72.2919 40.7657 70.3385 39.8855 68.1939 39.8855Z" fill="#BABEC9"/>
                        </svg>
                    </Box>
                    <Box sx={{gap:"10px",display:"flex",flexDirection:"column"}}>
                        <Typography variant="h4" sx={{ fontSize: "19px",my:"auto",fontWeight:"500 !important",width:"max-content !important" }}>
                            Automtaed Folder Pick Up
                        </Typography>
                        <Typography sx={{ fontSize: "15px",my:"auto",fontWeight:"300 !important",color:"#191F2F" }}>
                            <svg style={{marginRight:"10px"}} width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 0C3.67392 0 2.40215 0.526784 1.46447 1.46447C0.526784 2.40215 0 3.67392 0 5C0 6.32608 0.526784 7.59785 1.46447 8.53553C2.40215 9.47322 3.67392 10 5 10C6.32608 10 7.59785 9.47322 8.53553 8.53553C9.47322 7.59785 10 6.32608 10 5C10 3.67392 9.47322 2.40215 8.53553 1.46447C7.59785 0.526784 6.32608 0 5 0ZM2.5 7.5L2.61 7.242C2.92467 6.50867 3.24033 5.77333 3.557 5.036C3.56291 5.02403 3.56598 5.01085 3.56598 4.9975C3.56598 4.98415 3.56291 4.97097 3.557 4.959C3.21033 4.15433 2.864 3.349 2.518 2.543L2.5 2.5L7.5 5L2.5 7.5Z" fill="#2C2C2C"/>
                            </svg>
                            Designated specific folder where document are stored.
                        </Typography>
                        <Typography sx={{ fontSize: "15px",my:"auto",fontWeight:"300 !important",color:"#191F2F" }}>
                            <svg style={{marginRight:"10px"}} width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 0C3.67392 0 2.40215 0.526784 1.46447 1.46447C0.526784 2.40215 0 3.67392 0 5C0 6.32608 0.526784 7.59785 1.46447 8.53553C2.40215 9.47322 3.67392 10 5 10C6.32608 10 7.59785 9.47322 8.53553 8.53553C9.47322 7.59785 10 6.32608 10 5C10 3.67392 9.47322 2.40215 8.53553 1.46447C7.59785 0.526784 6.32608 0 5 0ZM2.5 7.5L2.61 7.242C2.92467 6.50867 3.24033 5.77333 3.557 5.036C3.56291 5.02403 3.56598 5.01085 3.56598 4.9975C3.56598 4.98415 3.56291 4.97097 3.557 4.959C3.21033 4.15433 2.864 3.349 2.518 2.543L2.5 2.5L7.5 5L2.5 7.5Z" fill="#2C2C2C"/>
                            </svg>
                            Application periodicaaly scan these folder automatically extract and process documents.
                        </Typography>
                        <Button
                        className="btn-gray"
                        color="inherit"
                        >
                            Select Folder to Pick up Document
                    </Button>
                    </Box>
                </Box>
                <Box sx={{width:{lg:"30%",gap:"10px",flexDirection:"column",display:"flex"}}}>
                    <Box sx={{background:"#f5f7ff",px:"24px",py:"27px",borderRadius:"8px"}}>
                        <Box sx={{display:"flex",flexDirection:"row"}}>
                            <Box>
                            <svg width="41" height="52" viewBox="0 0 41 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.4999 11.9153C20.5942 11.9153 20.6884 11.9362 20.7752 11.9777L23.3832 13.2238V5.76855H17.6167V13.2238L20.2247 11.9777C20.3115 11.9362 20.4057 11.9153 20.4999 11.9153Z" fill="#BBC0CE"/>
                            <path d="M13.2522 20.4262H27.7476C28.3312 20.4262 28.8057 19.955 28.8057 19.3754V6.81928C28.8057 6.23974 28.3312 5.76855 27.7476 5.76855H24.6528V14.2269C24.6528 14.4436 24.5404 14.6451 24.3561 14.7605C24.2527 14.8249 24.1353 14.8573 24.018 14.8573C23.9237 14.8573 23.8303 14.8368 23.7427 14.7949L20.4999 13.2455L17.2571 14.7949C17.0604 14.8885 16.8306 14.8766 16.6438 14.7605C16.4594 14.6451 16.347 14.4436 16.347 14.2269V5.76855H13.2522C12.6686 5.76855 12.1941 6.23974 12.1941 6.81928V19.3754C12.1941 19.955 12.6686 20.4262 13.2522 20.4262Z" fill="#BBC0CE"/>
                            <path d="M36.9794 0.304199H4.02065C1.80367 0.304199 0 2.09536 0 4.29695V48.0071C0 48.2156 0.104156 48.4106 0.276917 48.5279L5.24155 51.8903C5.45812 52.0364 5.74082 52.0364 5.95739 51.8903L10.5633 48.7701L15.17 51.8903C15.3866 52.0364 15.6693 52.0364 15.8858 51.8903L20.4909 48.7701L25.0968 51.8903C25.2051 51.9633 25.3299 51.9999 25.4547 51.9999C25.5795 51.9999 25.7043 51.9633 25.8126 51.8903L30.4227 48.7701L35.0368 51.8907C35.2517 52.036 35.5361 52.036 35.751 51.8907L40.7223 48.5284C40.8958 48.4106 41 48.2156 41 48.0071V4.29695C41 2.09536 39.1963 0.304199 36.9794 0.304199ZM10.9245 6.81869C10.9245 5.54387 11.9685 4.5071 13.2523 4.5071H27.7477C29.0315 4.5071 30.0755 5.54387 30.0755 6.81869V19.3749C30.0755 20.6497 29.0315 21.6864 27.7477 21.6864H13.2523C11.9685 21.6864 10.9245 20.6497 10.9245 19.3749V6.81869ZM32.6677 40.1267H8.33226C7.98178 40.1267 7.69742 39.8443 7.69742 39.4962C7.69742 39.1482 7.98178 38.8658 8.33226 38.8658H32.6677C33.0182 38.8658 33.3026 39.1482 33.3026 39.4962C33.3026 39.8443 33.0182 40.1267 32.6677 40.1267ZM36.1329 35.7924H4.8671C4.51662 35.7924 4.23226 35.51 4.23226 35.162C4.23226 34.8139 4.51662 34.5316 4.8671 34.5316H36.1329C36.4834 34.5316 36.7677 34.8139 36.7677 35.162C36.7677 35.51 36.4834 35.7924 36.1329 35.7924ZM36.7942 30.8277C36.7942 31.1758 36.5098 31.4582 36.1594 31.4582H5.21096C4.86049 31.4582 4.57612 31.1758 4.57612 30.8277V26.152C4.57612 25.804 4.86049 25.5216 5.21096 25.5216H36.1594C36.5098 25.5216 36.7942 25.804 36.7942 26.152V30.8277Z" fill="#BBC0CE"/>
                            <path d="M35.5249 26.7827H5.84619V30.1976H35.5249V26.7827Z" fill="#BBC0CE"/>
                            </svg>
                            </Box>
                            <Box sx={{flexDirection:"row",display:"flex"}}>
                                <Typography sx={{my:"auto",mx:"10px"}}>Add document<br>
                                </br> manually</Typography>
                            </Box>
                        </Box>
                                <Button
                                sx={{width:"100%"}}
                                    className="btn-white"
                                    color="inherit"
                                    >
                                        Manual Upload
                                </Button>
                        <Box></Box>
                    </Box>
                    <Box sx={{background:"#f5f7ff",px:"24px",py:"27px",borderRadius:"8px"}}>
                        <Box sx={{display:"flex",flexDirection:"row"}}>
                            <Box>
                            <svg width="41" height="52" viewBox="0 0 41 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.4999 11.9153C20.5942 11.9153 20.6884 11.9362 20.7752 11.9777L23.3832 13.2238V5.76855H17.6167V13.2238L20.2247 11.9777C20.3115 11.9362 20.4057 11.9153 20.4999 11.9153Z" fill="#BBC0CE"/>
                            <path d="M13.2522 20.4262H27.7476C28.3312 20.4262 28.8057 19.955 28.8057 19.3754V6.81928C28.8057 6.23974 28.3312 5.76855 27.7476 5.76855H24.6528V14.2269C24.6528 14.4436 24.5404 14.6451 24.3561 14.7605C24.2527 14.8249 24.1353 14.8573 24.018 14.8573C23.9237 14.8573 23.8303 14.8368 23.7427 14.7949L20.4999 13.2455L17.2571 14.7949C17.0604 14.8885 16.8306 14.8766 16.6438 14.7605C16.4594 14.6451 16.347 14.4436 16.347 14.2269V5.76855H13.2522C12.6686 5.76855 12.1941 6.23974 12.1941 6.81928V19.3754C12.1941 19.955 12.6686 20.4262 13.2522 20.4262Z" fill="#BBC0CE"/>
                            <path d="M36.9794 0.304199H4.02065C1.80367 0.304199 0 2.09536 0 4.29695V48.0071C0 48.2156 0.104156 48.4106 0.276917 48.5279L5.24155 51.8903C5.45812 52.0364 5.74082 52.0364 5.95739 51.8903L10.5633 48.7701L15.17 51.8903C15.3866 52.0364 15.6693 52.0364 15.8858 51.8903L20.4909 48.7701L25.0968 51.8903C25.2051 51.9633 25.3299 51.9999 25.4547 51.9999C25.5795 51.9999 25.7043 51.9633 25.8126 51.8903L30.4227 48.7701L35.0368 51.8907C35.2517 52.036 35.5361 52.036 35.751 51.8907L40.7223 48.5284C40.8958 48.4106 41 48.2156 41 48.0071V4.29695C41 2.09536 39.1963 0.304199 36.9794 0.304199ZM10.9245 6.81869C10.9245 5.54387 11.9685 4.5071 13.2523 4.5071H27.7477C29.0315 4.5071 30.0755 5.54387 30.0755 6.81869V19.3749C30.0755 20.6497 29.0315 21.6864 27.7477 21.6864H13.2523C11.9685 21.6864 10.9245 20.6497 10.9245 19.3749V6.81869ZM32.6677 40.1267H8.33226C7.98178 40.1267 7.69742 39.8443 7.69742 39.4962C7.69742 39.1482 7.98178 38.8658 8.33226 38.8658H32.6677C33.0182 38.8658 33.3026 39.1482 33.3026 39.4962C33.3026 39.8443 33.0182 40.1267 32.6677 40.1267ZM36.1329 35.7924H4.8671C4.51662 35.7924 4.23226 35.51 4.23226 35.162C4.23226 34.8139 4.51662 34.5316 4.8671 34.5316H36.1329C36.4834 34.5316 36.7677 34.8139 36.7677 35.162C36.7677 35.51 36.4834 35.7924 36.1329 35.7924ZM36.7942 30.8277C36.7942 31.1758 36.5098 31.4582 36.1594 31.4582H5.21096C4.86049 31.4582 4.57612 31.1758 4.57612 30.8277V26.152C4.57612 25.804 4.86049 25.5216 5.21096 25.5216H36.1594C36.5098 25.5216 36.7942 25.804 36.7942 26.152V30.8277Z" fill="#BBC0CE"/>
                            <path d="M35.5249 26.7827H5.84619V30.1976H35.5249V26.7827Z" fill="#BBC0CE"/>
                            </svg>
                            </Box>
                            <Box sx={{flexDirection:"row",display:"flex"}}>
                                <Typography sx={{my:"auto",mx:"10px"}}>Scan and upload<br></br>document</Typography>
                            </Box>
                        </Box>
                                <Button
                                sx={{width:"100%"}}

                                    className="btn-white"
                                    color="inherit"
                                    >
                                        Scan document
                                </Button>
                        <Box></Box>
                    </Box>
                </Box>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
export default Page;