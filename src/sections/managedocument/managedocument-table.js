import PropTypes from 'prop-types';
import { format } from 'date-fns';
import {
  Avatar,
  Box,
  Button,
  Card,
  Checkbox,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography
} from '@mui/material';
import { Scrollbar } from 'src/components/scrollbar';
import { getInitials } from 'src/utils/get-initials';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faPencil, faTrashCan } from '@fortawesome/free-solid-svg-icons';

export const ManageDocumentTable = (props) => {
  const {
    count = 0,
    items = [],
    onDeselectAll,
    onDeselectOne,
    onPageChange = () => {},
    onRowsPerPageChange,
    onSelectAll,
    onSelectOne,
    page = 0,
    rowsPerPage = 0,
    selected = []
  } = props;

  const selectedSome = (selected.length > 0) && (selected.length < items.length);
  const selectedAll = (items.length > 0) && (selected.length === items.length);

  return (
    <Card>
      <Scrollbar>
        <Box sx={{ minWidth: 800 }}>
          <Table className='dashboardtable'>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={selectedAll}
                    indeterminate={selectedSome}
                    onChange={(event) => {
                      if (event.target.checked) {
                        onSelectAll?.();
                      } else {
                        onDeselectAll?.();
                      }
                    }}
                  />
                </TableCell>
                <TableCell>
                Document No.<svg width="13" style={{marginBottom:"-2px",marginLeft:"6px"}} height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.29467 13C5.2365 13 5.17785 12.9896 5.12144 12.9673C4.93603 12.8951 4.81408 12.7147 4.81408 12.5142V6.36073L0.11519 0.801467C-0.00660076 0.657174 -0.0343243 0.454581 0.0440386 0.282595C0.122722 0.110447 0.29323 0 0.480724 0H12.5191C12.7071 0 12.8774 0.110285 12.956 0.282595C13.0342 0.454581 13.0068 0.657174 12.8851 0.801467L8.18593 6.36073V9.83413C8.18593 9.95527 8.14138 10.0714 8.06077 10.1613L5.65027 12.841C5.55765 12.9445 5.42752 13 5.29467 13ZM1.5238 0.971834L5.66021 5.86582C5.73456 5.95376 5.77543 6.0655 5.77543 6.18129V11.257L7.22442 9.64611V6.18145C7.22442 6.06566 7.26529 5.95392 7.3398 5.86598L11.4764 0.971996L1.5238 0.971834Z" fill="white"/>
</svg>

                </TableCell>
                <TableCell>
                Document Date<svg width="13" style={{marginBottom:"-2px",marginLeft:"6px"}} height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.29467 13C5.2365 13 5.17785 12.9896 5.12144 12.9673C4.93603 12.8951 4.81408 12.7147 4.81408 12.5142V6.36073L0.11519 0.801467C-0.00660076 0.657174 -0.0343243 0.454581 0.0440386 0.282595C0.122722 0.110447 0.29323 0 0.480724 0H12.5191C12.7071 0 12.8774 0.110285 12.956 0.282595C13.0342 0.454581 13.0068 0.657174 12.8851 0.801467L8.18593 6.36073V9.83413C8.18593 9.95527 8.14138 10.0714 8.06077 10.1613L5.65027 12.841C5.55765 12.9445 5.42752 13 5.29467 13ZM1.5238 0.971834L5.66021 5.86582C5.73456 5.95376 5.77543 6.0655 5.77543 6.18129V11.257L7.22442 9.64611V6.18145C7.22442 6.06566 7.26529 5.95392 7.3398 5.86598L11.4764 0.971996L1.5238 0.971834Z" fill="white"/>
</svg>

                </TableCell>
                <TableCell>
                Doc. Submission Date<svg style={{marginBottom:"-2px",marginLeft:"6px"}} width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.29467 13C5.2365 13 5.17785 12.9896 5.12144 12.9673C4.93603 12.8951 4.81408 12.7147 4.81408 12.5142V6.36073L0.11519 0.801467C-0.00660076 0.657174 -0.0343243 0.454581 0.0440386 0.282595C0.122722 0.110447 0.29323 0 0.480724 0H12.5191C12.7071 0 12.8774 0.110285 12.956 0.282595C13.0342 0.454581 13.0068 0.657174 12.8851 0.801467L8.18593 6.36073V9.83413C8.18593 9.95527 8.14138 10.0714 8.06077 10.1613L5.65027 12.841C5.55765 12.9445 5.42752 13 5.29467 13ZM1.5238 0.971834L5.66021 5.86582C5.73456 5.95376 5.77543 6.0655 5.77543 6.18129V11.257L7.22442 9.64611V6.18145C7.22442 6.06566 7.26529 5.95392 7.3398 5.86598L11.4764 0.971996L1.5238 0.971834Z" fill="white"/>
</svg>

                </TableCell>
                <TableCell>
                Amount<svg style={{marginBottom:"-2px",marginLeft:"6px"}} width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.29467 13C5.2365 13 5.17785 12.9896 5.12144 12.9673C4.93603 12.8951 4.81408 12.7147 4.81408 12.5142V6.36073L0.11519 0.801467C-0.00660076 0.657174 -0.0343243 0.454581 0.0440386 0.282595C0.122722 0.110447 0.29323 0 0.480724 0H12.5191C12.7071 0 12.8774 0.110285 12.956 0.282595C13.0342 0.454581 13.0068 0.657174 12.8851 0.801467L8.18593 6.36073V9.83413C8.18593 9.95527 8.14138 10.0714 8.06077 10.1613L5.65027 12.841C5.55765 12.9445 5.42752 13 5.29467 13ZM1.5238 0.971834L5.66021 5.86582C5.73456 5.95376 5.77543 6.0655 5.77543 6.18129V11.257L7.22442 9.64611V6.18145C7.22442 6.06566 7.26529 5.95392 7.3398 5.86598L11.4764 0.971996L1.5238 0.971834Z" fill="white"/>
</svg>

                </TableCell>
                <TableCell>
                Vendor Name<svg style={{marginBottom:"-2px",marginLeft:"6px"}} width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.29467 13C5.2365 13 5.17785 12.9896 5.12144 12.9673C4.93603 12.8951 4.81408 12.7147 4.81408 12.5142V6.36073L0.11519 0.801467C-0.00660076 0.657174 -0.0343243 0.454581 0.0440386 0.282595C0.122722 0.110447 0.29323 0 0.480724 0H12.5191C12.7071 0 12.8774 0.110285 12.956 0.282595C13.0342 0.454581 13.0068 0.657174 12.8851 0.801467L8.18593 6.36073V9.83413C8.18593 9.95527 8.14138 10.0714 8.06077 10.1613L5.65027 12.841C5.55765 12.9445 5.42752 13 5.29467 13ZM1.5238 0.971834L5.66021 5.86582C5.73456 5.95376 5.77543 6.0655 5.77543 6.18129V11.257L7.22442 9.64611V6.18145C7.22442 6.06566 7.26529 5.95392 7.3398 5.86598L11.4764 0.971996L1.5238 0.971834Z" fill="white"/>
</svg>

                </TableCell>     
                <TableCell>
                Actions
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {items.map((managedocument) => {
                const isSelected = selected.includes(managedocument.sno);
                // const createdAt = format(dashboard.createdAt|| new Date(), 'dd/MM/yyyy');
                const keys=Object.keys(managedocument);
                console.log(keys);
                return(
                <TableRow

                hover
                key={managedocument.id}
                selected={isSelected}
              >
                    <TableCell padding="checkbox">
                      <Checkbox
                        checked={isSelected}
                        onChange={(event) => {
                          if (event.target.checked) {
                            onSelectOne?.(managedocument.sno);
                          } else {
                            onDeselectOne?.(managedocument.sno);
                          }
                        }}
                      />
                    </TableCell>
                {keys.map((k)=>{
                  console.log(managedocument[k]);
         
                  return(
                    <TableCell>
                    {managedocument[k]}

                  </TableCell>
                  )
                })}
                <TableCell>
                  <div className='table-action-div' style={{display:"flex",justifyContent:"center" }}>
                    <Button className='view'><FontAwesomeIcon icon={faEye} /></Button>
                    <Button className='edit'><FontAwesomeIcon icon={faPencil} /></Button>
                    <Button className='delete'><FontAwesomeIcon icon={faTrashCan} /></Button>
                  </div>
                </TableCell>
                </TableRow>
);
                // return (
                //   <TableRow

                //     hover
                //     key={dashboard.id}
                //     selected={isSelected}
                //   >
                //     <TableCell padding="checkbox">
                //       <Checkbox
                //         checked={isSelected}
                //         onChange={(event) => {
                //           if (event.target.checked) {
                //             onSelectOne?.(dashboard.id);
                //           } else {
                //             onDeselectOne?.(dashboard.id);
                //           }
                //         }}
                //       />
                //     </TableCell>
                //     <TableCell>
                //       <Stack
                //         alignItems="center"
                //         direction="row"
                //         spacing={2}
                //       >
                //         <Avatar src={dashboard.avatar}>
                //           {getInitials(dashboard.name)}
                //         </Avatar>
                //         <Typography variant="subtitle2">
                //           {dashboard.name}
                //         </Typography>
                //       </Stack>
                //     </TableCell>
                //     <TableCell>
                //       {dashboard.sno}
                //     </TableCell>
                //     <TableCell>
                //       {dashboard.document_date}
                //     </TableCell>
                //     <TableCell>
                //       {dashboard.submission_date}
                //     </TableCell>
                //     <TableCell>
                //       {dashboard.amount}
                //     </TableCell>
                //     <TableCell>
                //       {dashboard.vender_name}
                //     </TableCell>
                //     <TableCell>
                //       {createdAt}
                //     </TableCell>
                //   </TableRow>
                // );
              }             
              )}
            </TableBody>
          </Table>
        </Box>
      </Scrollbar>
      <TablePagination
        component="div"
        count={count}
        onPageChange={onPageChange}
        onRowsPerPageChange={onRowsPerPageChange}
        page={page}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

ManageDocumentTable.propTypes = {
  count: PropTypes.number,
  items: PropTypes.array,
  onDeselectAll: PropTypes.func,
  onDeselectOne: PropTypes.func,
  onPageChange: PropTypes.func,
  onRowsPerPageChange: PropTypes.func,
  onSelectAll: PropTypes.func,
  onSelectOne: PropTypes.func,
  page: PropTypes.number,
  rowsPerPage: PropTypes.number,
  selected: PropTypes.array
};
