import {
    Card,
    CardBody,
    Heading,
    Stack,
    Text,
    CardHeader,
    CardFooter
} from "@chakra-ui/react";

import DeleteUser from "./deleteUser";
import RoleHandler from "./roleHandler";
import UserItems from "./userItems";

const UserCard = ({user}) => {
    return (
        <Card direction={{ lg: 'row', sm: 'column' }}>
            <CardHeader>
                <Stack direction={'row'} spacing={"5%"}>
                    <Text>#{user.id}</Text>
                    <Heading>{user.username}</Heading>
                </Stack>
                <Text>{user.email}</Text>
            </CardHeader>
            <CardBody>
                <UserItems user={user}/>
            </CardBody>
            <CardFooter>
                <Stack direction="row" spacing={"10%"}>
                    <RoleHandler user={user}/>
                    <DeleteUser user={user}/>
                </Stack>
            </CardFooter>
        </Card>
    );
}

export default UserCard;