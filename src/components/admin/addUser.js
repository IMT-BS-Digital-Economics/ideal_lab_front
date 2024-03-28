import {
    Button,
    Card,
    CardHeader,
    CardBody,
    Heading,
    useDisclosure,
} from "@chakra-ui/react";
import AddUserModal from "./addUserModal";

const AddUser = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Card m={"1%"}>
                <CardHeader>
                    <Heading>
                        Manage your users for the best and the worst
                    </Heading>
                </CardHeader>
                <CardBody>
                    <Button
                        onClick={onOpen}
                    >
                        Create a new user
                    </Button>
                </CardBody>
            </Card>

            <AddUserModal
                isOpen={isOpen}
                onClose={onClose}
            />
        </>
    );
}

export default AddUser;