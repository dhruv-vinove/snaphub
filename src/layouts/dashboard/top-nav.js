import PropTypes from 'prop-types';
import BellIcon from '@heroicons/react/24/solid/BellIcon';
import UsersIcon from '@heroicons/react/24/solid/UsersIcon';
import Bars3Icon from '@heroicons/react/24/solid/Bars3Icon';
import MagnifyingGlassIcon from '@heroicons/react/24/solid/MagnifyingGlassIcon';
import {
  Avatar,
  Badge,
  Box,
  IconButton,
  Stack,
  SvgIcon,
  Tooltip,
  Typography,
  useMediaQuery
} from '@mui/material';
import { alpha } from '@mui/material/styles';
import { usePopover } from 'src/hooks/use-popover';
import { AccountPopover } from './account-popover';

const SIDE_NAV_WIDTH = 280;
const TOP_NAV_HEIGHT = 64;

export const TopNav = (props) => {
  const { onNavOpen } = props;
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'));
  const accountPopover = usePopover();

  return (
    <>
      <Box
        component="header"
        sx={{
          boxShadow: "0px 4px 4px 0px #E1E7FF",

          backdropFilter: 'blur(6px)',
          backgroundColor: (theme) => alpha(theme.palette.background.default, 0.8),
          position: 'sticky',
          left: {
            lg: `${SIDE_NAV_WIDTH}px`
          },
          top: 0,
          width: {
            lg: `calc(100% - ${SIDE_NAV_WIDTH}px)`
          },
          zIndex: (theme) => theme.zIndex.appBar
        }}
      >
        <Stack
          alignItems="center"
          direction="row"
          justifyContent="space-between"
          spacing={2}
          sx={{
            minHeight: TOP_NAV_HEIGHT,
            px: 2
          }}
        >
          <Stack
            alignItems="center"
            direction="row"
            spacing={2}
          >
            {!lgUp && (
              <IconButton onClick={onNavOpen}>
                <SvgIcon fontSize="small">
                  <Bars3Icon />
                </SvgIcon>
              </IconButton>
            )}
            <Tooltip title="Search">
              <IconButton>
                <SvgIcon fontSize="small">
                  <MagnifyingGlassIcon />
                </SvgIcon>
              </IconButton>
            </Tooltip>
          </Stack>
          <Stack
            alignItems="center"
            direction="row"
            spacing={2}
          >
            {/* <Tooltip title="Contacts">
              <IconButton>
                <SvgIcon fontSize="small">
                  <UsersIcon />
                </SvgIcon>
              </IconButton>
            </Tooltip>
            <Tooltip title="Notifications">
              <IconButton>
                <Badge
                  badgeContent={4}
                  color="success"
                  variant="dot"
                >
                  <SvgIcon fontSize="small">
                    <BellIcon />
                  </SvgIcon>
                </Badge>
              </IconButton>
            </Tooltip> */}
            <Avatar
  
              sx={{
                cursor: 'pointer',
                height: 40,
                width: 40
              }}
              src="/assets/avatars/profilepic.png"
            />
            <Box>
              <Typography           
              onClick={accountPopover.handleOpen}
              ref={accountPopover.anchorRef} sx={{color:"#000000", fontSize:"16px",fontWeight:"400",cursor:"pointer"}}>Hello, Gaurav Singh <svg style={{marginLeft:"10px"}} width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.03195 4.99864C5.13316 4.99234 5.22936 4.95236 5.30523 4.88506L9.84808 0.796066C9.89279 0.756037 9.92918 0.707573 9.95513 0.653456C9.98109 0.599339 9.99611 0.540637 9.99934 0.480703C10.0026 0.420769 9.99394 0.360785 9.97394 0.304193C9.95395 0.247601 9.92298 0.195508 9.88282 0.150907C9.84266 0.106305 9.7941 0.0700716 9.73991 0.0442769C9.68572 0.0184822 9.62697 0.0036336 9.56703 0.000587821C9.50709 -0.00245796 9.44714 0.00635398 9.39062 0.0265226C9.3341 0.0466912 9.2821 0.0778219 9.23763 0.118123L5 3.9338L0.762372 0.118123C0.717897 0.0778215 0.665908 0.0466915 0.609383 0.0265226C0.552857 0.00635367 0.492908 -0.0024578 0.43297 0.000587821C0.373033 0.00363345 0.314285 0.0184753 0.260095 0.0442699C0.205905 0.0700646 0.157338 0.106305 0.117177 0.150907C0.0770159 0.195508 0.046051 0.2476 0.0260568 0.304193C0.00606254 0.360785 -0.00256782 0.420762 0.000660337 0.480696C0.0038885 0.54063 0.0189117 0.599339 0.0448689 0.653456C0.0708261 0.707573 0.107207 0.756037 0.151926 0.796066L4.69478 4.88506C4.74044 4.9257 4.79385 4.95672 4.85178 4.97623C4.90972 4.99575 4.97099 5.00337 5.03195 4.99864Z" fill="black"/>
              </svg>
              </Typography>
              <Typography sx={{color:"#615858", fontSize:"14px",fontWeight:"300"}}>Accountant</Typography>
            </Box>
          </Stack>
        </Stack>
      </Box>
      <AccountPopover
        anchorEl={accountPopover.anchorRef.current}
        open={accountPopover.open}
        onClose={accountPopover.handleClose}
      />
    </>
  );
};

TopNav.propTypes = {
  onNavOpen: PropTypes.func
};
