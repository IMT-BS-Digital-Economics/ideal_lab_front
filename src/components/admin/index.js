import { Grid, GridItem } from '@chakra-ui/react';

import DisplayUsers from './displayUsers';
import AddUser from './addUser';

const AdminHandler = () => {
  return (
    <Grid mt={'3%'} templateRows={'repeat(5, 1fr)'} gap={6}>
      <GridItem rowSpan={1}>
        <AddUser />
      </GridItem>
      <GridItem h="100%" rowSpan={4}>
        <DisplayUsers />
      </GridItem>
    </Grid>
  );
};

export default AdminHandler;
