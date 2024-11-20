import NavBar from '../../../components/layout/navBar';
import Footer from '../../../components/layout/footer';
import ChangePassword from '../../../components/user/changePassword';
import { Flex } from '@chakra-ui/react';

import { useRouter } from 'next/router';

const password = () => {
    const router = useRouter();

    return (
        <>
            <Flex direction={'column'} h={'100vh'} w={'100vw'}>
                <NavBar />
                <ChangePassword token={router.query.token}/>
            </Flex>
            <Footer />
        </>
    );
};

export default password;