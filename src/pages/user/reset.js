import { Flex } from '@chakra-ui/react';

import NavBar from '../../components/layout/navBar';
import ResetPassword from '../../components/userLogin/resetPassword';
import Footer from '../../components/layout/footer';

const reset = () => {
    return (
        <>
            <Flex direction={'column'} h={'100vh'} w={'100vw'}>
                <NavBar />
                <ResetPassword />
            </Flex>
            <Footer />
        </>
    );
};

export default reset;
