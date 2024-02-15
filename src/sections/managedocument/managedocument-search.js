import MagnifyingGlassIcon from '@heroicons/react/24/solid/MagnifyingGlassIcon';
import { Card, InputAdornment, OutlinedInput, SvgIcon } from '@mui/material';

export const ManageDocumentSearch = () => (
  <Card className='search' sx={{ p: 2,background:"none !important", border:"none !imporatnt", boxShadow:"none !important",width:"59%",textAlign:"end" }}>
    <OutlinedInput
    className='row-reverse bg-white'
    style={{height:"40px"}}
      defaultValue=""
      fullWidth
      placeholder="Search by doc ID, Vendor name"
      startAdornment={(
        <InputAdornment position="start">
          <SvgIcon
            color="action"
            fontSize="small"
          >
            <MagnifyingGlassIcon />
          </SvgIcon>
        </InputAdornment>
      )}
      sx={{ maxWidth: 500 }}
    />
  </Card>
);
