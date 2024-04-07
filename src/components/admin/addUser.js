import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Heading,
  useDisclosure,
} from '@chakra-ui/react';
import AddUserModal from './addUserModal';

const AddUser = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Card bg={'teal.100'} m={'1%'}>
        <CardHeader>
          <Heading color={'teal'}>
            Manage your users for the best and the worst
          </Heading>
        </CardHeader>
        <CardBody>
          <Button onClick={onOpen} color={'teal'} shadow={'lg'}>
            Create a new user
          </Button>
        </CardBody>
      </Card>

      <AddUserModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default AddUser;
