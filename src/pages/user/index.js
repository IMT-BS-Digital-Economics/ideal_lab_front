import NavBar from '../../components/layout/navBar';
import UserPage from '../../components/user';
import Footer from '../../components/layout/footer';
import { Flex } from '@chakra-ui/react';

const user = () => {
    return (
        <>
            <Flex direction={'column'} h={'100vh'} w={'100vw'}>
                <NavBar />
                <UserPage />
            </Flex>
            <Footer />
        </>
    );
};

export default user;
