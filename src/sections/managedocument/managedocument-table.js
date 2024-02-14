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
                Document No.
                </TableCell>
                <TableCell>
                Document Date
                </TableCell>
                <TableCell>
                Doc. Submission Date
                </TableCell>
                <TableCell>
                Amount
                </TableCell>
                <TableCell>
                Vendor Name
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
