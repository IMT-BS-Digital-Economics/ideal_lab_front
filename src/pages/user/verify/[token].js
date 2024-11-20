import NavBar from '../../../components/layout/navBar';
import Footer from '../../../components/layout/footer';
import VerifyUser from '../../../components/user/verifyUser';
import { Flex } from '@chakra-ui/react';

import { useRouter } from 'next/router';

const verified = () => {
    const router = useRouter();

    return (
        <>
            <Flex direction={'column'} h={'100vh'} w={'100vw'}>
                <NavBar />
                <VerifyUser token={router.query.token}/>
            </Flex>
            <Footer />
        </>
    );
};

export default verified;