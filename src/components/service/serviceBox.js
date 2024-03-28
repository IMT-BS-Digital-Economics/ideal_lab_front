import {
    Box,
    Heading,
    Text
} from "@chakra-ui/react";

import {
    SunIcon
} from "@chakra-ui/icons";

import NextLink from "next/link";

const ServiceBox = ({name, description, path}) => {
    return (
        <NextLink href={path} passHref>
            <Box as={'button'} borderRadius={'lg'} bg={"gray.200"} padding={"10%"}>
                <SunIcon w={"10%"} h={"10%"}/>
                <Heading color={"cyan.700"}>{name}</Heading>
                <Text as={"b"}>{description}</Text>
            </Box>
        </NextLink>
    );
}

export default ServiceBox;