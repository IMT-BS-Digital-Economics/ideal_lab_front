import {
    Card,
    Heading,
    Stack,
    Text,
    CardHeader,
    CardFooter,
    Button,
    Flex,
} from '@chakra-ui/react';

import DeleteUser from './deleteUser';
import RoleHandler from './roleHandler';

const UserCard = ({ user }) => {
    return (
        <Card direction={{ lg: 'row', sm: 'column' }} color={'teal'}>
            <CardHeader>
                <Stack direction={'row'} spacing={'5%'}>
                    <Text>#{user.id}</Text>
                    <Heading>{user.username}</Heading>
                </Stack>
                <Text>{user.email}</Text>
            </CardHeader>
            <CardFooter>
                <Stack direction="row" spacing={'10%'}>
                    <RoleHandler user={user} />
                    <DeleteUser user={user} />
                </Stack>
                <Flex right={"0"} position={"absolute"}>
                    <Button variant={"outline"}>{user.is_verified ? "Email Verified" : "Email not verified"}</Button>
                </Flex>
            </CardFooter>
        </Card>
    );
};

export default UserCard;
