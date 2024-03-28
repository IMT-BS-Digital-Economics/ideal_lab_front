import { useState } from "react";

import NextLink from "next/link";

import FormData from 'form-data';

import {
    Center,
    Stack,
    InputGroup,
    FormLabel,
    Input,
    InputRightElement,
    Button,
    Fade,
    FormControl,
    Link,
} from "@chakra-ui/react";

import hookSignIn from "../../hooks/auth/hookSignIn";

const Login = () => {
    const [nameInput, setNameInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');
    const [show, setShow] = useState(false);
    const [isSubmit, setIsSubmit] = useState(false);
    const [, setResponseSuccess] = useState(false);
    const noRedirect = useState(false);

    const handleInputChange = (e, setter) => {
        setter(e.target.value)
    }

    const handleClick = () => {
        setShow(!show)
    }

    const isError = (value) => {
        return value === ''
    };

    const isValidForm = () => !isError(nameInput) && !isError(passwordInput)

    const data = new FormData()
    data.append('username', nameInput);
    data.append('password', passwordInput);

    hookSignIn({
        data,
        isSubmit,
        setIsSubmit,
        setResponseSuccess,
        noRedirect
    });

    return (
      <div style={{"margin": "20%"}}>
          <Center>
              <FormControl isRequired>
                  <Center>
                      <Stack spacing={6} w={"30%"}>
                          <InputGroup variant={"filled"} size={"lg"} flexDirection={"column"}>
                              <FormLabel>Username</FormLabel>
                              <Input
                                  placeholder={"Username"}
                                  value={nameInput}
                                  onChange={(e) => handleInputChange(e, setNameInput)}
                              />
                          </InputGroup>
                          <InputGroup variant={"filled"} size={"lg"} flexDirection={"column"}>
                              <FormLabel>Password</FormLabel>
                              <InputGroup>
                                  <Input
                                      placeholder={"Password"}
                                      type={show ? 'text' : 'password'}
                                      value={passwordInput}
                                      onChange={(e) => handleInputChange(e, setPasswordInput)}
                                  />
                                  <InputRightElement>
                                      <Button colorScheme={"cyan"} onClick={handleClick}>{show ? 'Hide' : 'Show'}</Button>
                                  </InputRightElement>
                              </InputGroup>
                              <NextLink href={"/user/reset"} passHref>
                                <Link size="sm" color={"blue.500"} marginTop={"2%"}>Forgot your password ?</Link>
                              </NextLink>
                          </InputGroup>
                          <Fade in={isValidForm()}>
                              <Button
                                  colorScheme={"cyan"}
                                  size={"lg"}
                                  w={"100%"}
                                  isLoading={isSubmit}
                                  loadingText={"Login in..."}
                                  onClick={() => setIsSubmit(true)}
                              >
                                  Login
                              </Button>
                          </Fade>
                      </Stack>
                  </Center>
              </FormControl>
          </Center>
      </div>
    );
}

export default Login;