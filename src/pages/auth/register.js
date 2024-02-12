import Head from 'next/head';
import NextLink from 'next/link';
import { useRouter } from 'next/navigation';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Box, Button, Link, Stack, TextField, Typography } from '@mui/material';
import { useAuth } from 'src/hooks/use-auth';
import { Layout as AuthLayout } from 'src/layouts/auth/layout';

const Page = () => {
  const router = useRouter();
  const auth = useAuth();
  const formik = useFormik({
    initialValues: {
      email: '',
      name: '',
      phone: '',
      password: '',
      submit: null
    },
    validationSchema: Yup.object({
      email: Yup
        .string()
        .email('Must be a valid email')
        .max(255)
        .required('Email is required'),
      name: Yup
        .string()
        .max(255)
        .required('Full Name is required'),
        phone: Yup
        .string()
        .max(255)
        .required('Phone numberis required'),
      password: Yup
        .string()
        .max(255)
        .required('Password is required')
    }),
    onSubmit: async (values, helpers) => {
      try {
        await auth.signUp(values.email, values.name, values.phone, values.password);
        router.push('/');
      } catch (err) {
        helpers.setStatus({ success: false });
        helpers.setErrors({ submit: err.message });
        helpers.setSubmitting(false);
      }
    }
  });

  return (
    <>
      <Head>
        <title>
          Register | SnapHub
        </title>
      </Head>
                {/* <Box
        sx={{
          backgroundColor: '#2F2F2F',
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center',
          marginBottom:"20px",
        }}
      >
        <img src="/assets/images/logo.png"/>
        </Box> */}
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
          flex: '1 1 auto',
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'start'
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
                Register
              </Typography>
   
            </Stack>
            <form
            className='signup-form'
              noValidate
              onSubmit={formik.handleSubmit}
            >
              <Stack spacing={3}>
              <label>Full name</label>

                <TextField
                  error={!!(formik.touched.name && formik.errors.name)}
                  fullWidth
                  helperText={formik.touched.name && formik.errors.name}
                  // label="Name"
                  name="name"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.name}
                />
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
                <label>Phone number</label>

                <TextField
                  error={!!(formik.touched.phone && formik.errors.phone)}
                  fullWidth
                  helperText={formik.touched.phone && formik.errors.phone}
                  // label="Email Address"
                  name="phone"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="number"
                  value={formik.values.phone}
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
                Create Account
              </Button>
              <Typography 
              sx={{marginTop:"14px",fontSize:"13px",textAlign:"center", fontWeight:"300",color:"#000000"}}
                color="text.secondary"
                variant="body2"
              >
                By clicking "sign up', you agree to our Terms of Use & Privacy Policy

              </Typography>
              <Typography
                  color="text.secondary"
                  variant="body2"
                  sx={{marginTop:"10px",textAlign:"center"}}
                >
                Already have an account?
                &nbsp;
                <Link
                 sx={{color:"#555150",fontSize:"16px"}}
                  component={NextLink}
                  href="/auth/login"
                  underline="hover"
                  variant="subtitle2"
                >
                  Sign in
                </Link>
                </Typography>
            </form>
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
