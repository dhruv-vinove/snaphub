import { useCallback, useState } from 'react';
import Head from 'next/head';
import NextLink from 'next/link';
import { useRouter } from 'next/navigation';
import { useFormik } from 'formik';
import Image from 'next/image'
import logo from '../../../public/assets/images/logo.png';
import * as Yup from 'yup';
import {
  Alert,
  Box,
  Button,
  FormHelperText,
  Link,
  Stack,
  Tab,
  Tabs,
  TextField,
  Typography
} from '@mui/material';
import { useAuth } from 'src/hooks/use-auth';
import { Layout as AuthLayout } from 'src/layouts/auth/layout';

const Page = () => {
  const router = useRouter();
  const auth = useAuth();
  const [method, setMethod] = useState('email');
  const formik = useFormik({
    initialValues: {
      email: 'demo@vinove.com',
      password: 'Password123!',
      submit: null
    },
    validationSchema: Yup.object({
      email: Yup
        .string()
        .email('Must be a valid email')
        .max(255)
        .required('Email is required'),
      password: Yup
        .string()
        .max(255)
        .required('Password is required')
    }),
    onSubmit: async (values, helpers) => {
      try {
        await auth.signIn(values.email, values.password);
        router.push('/');
      } catch (err) {
        helpers.setStatus({ success: false });
        helpers.setErrors({ submit: err.message });
        helpers.setSubmitting(false);
      }
    }
  });

  const handleMethodChange = useCallback(
    (event, value) => {
      setMethod(value);
    },
    []
  );

  const handleSkip = useCallback(
    () => {
      auth.skip();
      router.push('/');
    },
    [auth, router]
  );

  return (
    <>
      <Head>
        <title>
          Login | SnapHub
        </title>
      </Head>
      <div style={{position:"absolute", left:"0px" , top:"6%" , maxWidth:"722px"}}>
      <img width={"100%"} src="/assets/images/loginbackground.png"/>
      </div>
      <Box
        sx={{
          backgroundColor: '#2F2F2F',
          flex: '1 1 auto',
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <Box 
            sx={{
              backgroundColor: '#2F2F2F',
              flex: '1 1 auto',
              alignItems: 'center',
              display: 'block',
              justifyContent: 'center'
            }}>
      <Box
        sx={{
          backgroundColor: '#2F2F2F',
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center',
          marginBottom:"20px",
        }}
      >
        <img src="/assets/images/logo.png"/>
        </Box>
      <Box
        sx={{
          backgroundColor: '#2F2F2F',
          flex: '1 1 auto',
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <Box
          sx={{
            maxWidth: 550,
            px: 3,
            py: '20px',
            width: '100%',
            background:"#ffffff",
            borderRadius:"20px"
          }}
        >
          <div>
            <Stack
              spacing={1}
              sx={{ mb: 3 }}
            >
              <Typography variant="h4" sx={{textAlign:"center",fontSize:"25px", fontWeight:"500"}}>
              Sign in to your account
              </Typography>
              {/* <Typography
                color="text.secondary"
                variant="body2"
              >
                Don&apos;t have an account?
                &nbsp;
                <Link
                  component={NextLink}
                  href="/auth/register"
                  underline="hover"
                  variant="subtitle2"
                >
                  Register
                </Link>
              </Typography> */}
            </Stack>
            {/* <Tabs
              onChange={handleMethodChange}
              sx={{ mb: 3 }}
              value={method}
            >
              <Tab
                label="Email"
                value="email"
              />
              <Tab
                label="Phone Number"
                value="phoneNumber"
              />
            </Tabs> */}
            {method === 'email' && (
              <form
              className='login-form'
                noValidate
                onSubmit={formik.handleSubmit}
              >
                <Stack spacing={3}>
                  <label>Email</label>
                  <TextField
                    error={!!(formik.touched.email && formik.errors.email)}
                    fullWidth
                    helperText={formik.touched.email && formik.errors.email}
                    // label="Email Address"
                    name="email"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    type="email"
                    value={formik.values.email}
                  />
                  <label>Password</label>

                  <TextField
                    error={!!(formik.touched.password && formik.errors.password)}
                    fullWidth
                    helperText={formik.touched.password && formik.errors.password}
                    // label="Password"
                    name="password"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    type="password"
                    value={formik.values.password}
                  />
                </Stack>
                <FormHelperText sx={{ mt: 1,textAlign:"end" }}>
                Forgot your password?
                </FormHelperText>
                {formik.errors.submit && (
                  <Typography
                    color="error"
                    sx={{ mt: 3 }}
                    variant="body2"
                  >
                    {formik.errors.submit}
                  </Typography>
                )}
                <Button
                  fullWidth
                  size="large"
                  sx={{ mt: 3, backgroundColor:"#555150",borderRadius:"5px" }}
                  type="submit"
                  variant="contained"
                >
                  Continue
                </Button>
                {/* <Button
                  fullWidth
                  size="large"
                  sx={{ mt: 3 }}
                  onClick={handleSkip}
                >
                  Skip authentication
                </Button> */}
                <Typography
                  color="text.secondary"
                  variant="body2"
                  sx={{marginTop:"10px",textAlign:"center"}}
                >
                  Don&apos;t have an account?
                  &nbsp;
                  <Link
                    sx={{color:"#555150",fontSize:"16px"}}
                    component={NextLink}
                    href="/auth/register"
                    underline="hover"
                    variant="subtitle2"
                  >
                  Sign up
                  </Link>
                </Typography>
                {/* <Alert
                  color="primary"
                  severity="info"
                  sx={{ mt: 3 }}
                >
                  <div>
                    You can use <b>demo@vinove.com</b> and password <b>Password123!</b>
                  </div>
                </Alert> */}
              </form>
            )}
            {method === 'phoneNumber' && (
              <div>
                <Typography
                  sx={{ mb: 1 }}
                  variant="h6"
                >
                  Not available in the demo
                </Typography>
                <Typography color="text.secondary">
                  To prevent unnecessary costs we disabled this feature in the demo.
                </Typography>
              </div>
            )}
          </div>
        </Box>
      </Box>
        </Box>
      </Box>

    </>
  );
};

Page.getLayout = (page) => (
  <AuthLayout>
    {page}
  </AuthLayout>
);

export default Page;
