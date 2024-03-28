import {useState} from "react";

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Heading,
    Text,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
} from '@chakra-ui/react'

import hookGetRoles from "../../hooks/admin/hookGetRoles";
import hookUpdateRole from "../../hooks/admin/hookUpdateRole";

const RoleHandler = ({user}) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const [roles, setRoles] = useState(false);

    const [newRole, setNewRole] = useState(false);
    const [userName, setUserName] = useState(false);

    hookGetRoles({roles, setRoles});

    hookUpdateRole({userName, setUserName, newRole, setNewRole});

    return (
        <>
            <Button
                onClick={onOpen}
            >
                {user.role}
            </Button>

            <Modal
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay/>
                <ModalContent>
                    <ModalHeader>
                        <Heading>
                            Update {user.username} role ?
                        </Heading>
                    </ModalHeader>
                    <ModalCloseButton/>
                    <ModalBody>
                        <Text>
                            You can update the role of {user.username}, currently this user have a {user.role}
                        </Text>
                        <Menu>
                            <MenuButton as={Button} mt={3}>
                                {newRole ? newRole : "Choose a role"}
                            </MenuButton>
                            <MenuList

                            >
                                {roles ? roles.map((role) => {
                                    return (
                                        <MenuItem
                                            onClick={(e) => setNewRole(e.target.firstChild.data)}
                                        >{role}</MenuItem>
                                    );
                                }) : null}
                            </MenuList>
                        </Menu>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={onClose}>Cancel</Button>
                        <Button
                            onClick={() => {
                                setUserName(user.username);
                                onClose();
                            }}
                                ml={3}>Update</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}

export default RoleHandler;