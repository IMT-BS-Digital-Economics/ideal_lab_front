import NavBar from '../components/layout/navBar';
import UserLogin from '../components/userLogin';
import { Flex } from '@chakra-ui/react';
import Footer from '../components/layout/footer';

const LoginPage = () => {
    return (
        <>
            <Flex direction={'column'} h={'100vh'} w={'100vw'}>
                <NavBar />
                <UserLogin />
            </Flex>
            <Footer />
        </>
    );
};

export default LoginPage;
