import { useState } from "react";

import {
    Button,
    ButtonGroup,
    Flex,
    Image,
    Spacer,
    Text,
    Icon,
} from '@chakra-ui/react';

import { FaCube } from "react-icons/fa6";

import NextLink from 'next/link';

import { IoInformation, IoArrowForward } from "react-icons/io5";

import ProfileMenu from "./profileMenu";

import hookUserMe from "../../hooks/user/hookUserMe";


const NavBar = ({HomeButton = true}) => {
    const [userData, setUserData] = useState(false);

    hookUserMe({
        userData,
        setUserData
    });

    return (
      <div>
          <Flex alignItems={"center"} w={"100vw"} marginTop={0} marginLeft={0} padding={"0.5%"}>
              <NextLink href='/' passHref>
                  <Button leftIcon={<FaCube/>} colorScheme={"teal"} variant={"ghost"}>
                      <Text><Text as={"span"} color={"teal.100"}>Ideal Lab</Text> Dashboard</Text>
                  </Button>
              </NextLink>
              <Spacer/>
              <ButtonGroup>
                  {!userData ?
                      (<NextLink href={"/login"} passHref>
                        <Button rightIcon={<IoArrowForward/>}  variant="ghost" colorScheme={"teal"}>Login</Button>
                      </NextLink>)
                      :  (<ProfileMenu
                              username={userData.username}
                          />
                      )}
                  <NextLink href={"/about"} passHref>
                      <Button variant="ghost" leftIcon={<Icon as={IoInformation} color={"teal"}/>}>About</Button>
                  </NextLink>
              </ButtonGroup>
          </Flex>
      </div>
    );
}

export default NavBar;