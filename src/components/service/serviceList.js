import {
    Heading,
    Box,
    Stack
} from "@chakra-ui/react";

import NextLink from "next/link";

const ServiceList = ({data}) => {
    return (
        <Box bg={"teal"} h={"90vh"} w={"20%"} padding={"1%"} borderRadius="lg" align={"center"}>
            <Stack spacing={5}>
                <Heading color={"white"}>Your projects</Heading>
            {data && Array.isArray(data) && data.map((element, index) => (
                <NextLink href={`/project/${element.unique_id}`} passHref>
                    <Box as={"button"}>
                        <Heading color="teal.100" size={"lg"}>{element.title}</Heading>
                    </Box>
                </NextLink>
            ))}
            </Stack>
        </Box>
    );
}

export default ServiceList;