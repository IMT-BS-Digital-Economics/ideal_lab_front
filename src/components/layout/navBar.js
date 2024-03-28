import { useState } from "react";

import {
    Button,
    ButtonGroup,
    Flex,
    Heading,
    Spacer,
    Image,
    Icon,
} from '@chakra-ui/react';

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
          <Flex margin={"1%"} alignItems={"center"}>
              <Image
                  position={"relative"}
                  src={"https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Logo_Institut_Mines-Télécom.svg/1200px-Logo_Institut_Mines-Télécom.svg.png"}
                  alt={"IMT-BS logo"}
                  boxSize={"7%"}
              />
              {
                  HomeButton ? (
                      <>
                          <NextLink href='/' passHref>
                              <Button variant={""}>
                                  <Heading size={{lg: "2xl", sm: "sm"}}>Dashboard</Heading>
                              </Button>
                          </NextLink>
                      </>
                  ) : null
              }
              <Spacer/>
              <ButtonGroup size={"lg"}>
                  {!userData ?
                      (<NextLink href={"/signIn"} passHref>
                        <Button rightIcon={<IoArrowForward/>}  colorScheme={"cyan"}>Sign In</Button>
                      </NextLink>)
                      :  (<ProfileMenu
                              username={userData.username}
                          />
                      )}
                  <NextLink href={"/about"} passHref>
                      <Button leftIcon={<Icon as={IoInformation} color={"cyan.700"}/>}>About</Button>
                  </NextLink>
              </ButtonGroup>
          </Flex>
      </div>
    );
}

export default NavBar;