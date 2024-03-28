import {useState} from "react";

import NextLink from 'next/link';

import {
    Heading,
    Stack,
    Button,
    ScaleFade
} from "@chakra-ui/react";

import AnimatedParticles from "./animatedParticles";

import hookUserMe from "../../hooks/user/hookUserMe";

import ServiceBox from '../service/serviceBox';

const Landing = () => {
    const [userData, setUserData] = useState(false);

    hookUserMe({userData, setUserData});

    return (
        <>
            <div>
                <AnimatedParticles/>
            </div>
            <div style={{"marginTop": "25%"}}>
                    <Stack direction={"column"} spacing={5} align={"center"}>
                        <Heading size={"4xl"} color={"cyan.700"}>iDeal Lab DashBoard</Heading>
                    {
                        userData ? (
                            <Stack direction={"row"} spacing={5} align={"center"}>
                                <ServiceBox
                                    name={'Items'}
                                    description={'Monitor you items'}
                                    path={'/items'}
                                />
                                <ServiceBox
                                    name={'Projects'}
                                    description={'Monitor you project'}
                                    path={'/projects'}
                                />
                                <ServiceBox
                                    name={'Repositories'}
                                    description={'Manage repositories to use'}
                                    path={'/projects'}
                                />
                            </Stack>
                        ) : null
                            // <ScaleFade in={true} initialScale={0.9}>
                            //     <NextLink href={"/items"} passHref>
                            //         <Button>
                            //             See items
                            //         </Button>
                            //     </NextLink>
                            // </ScaleFade> : null
                    }
                    </Stack>
            </div>
        </>
    );
}

export default Landing;
