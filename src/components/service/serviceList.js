import {
    Heading,
    Box,
    Stack,
    Button,
    Divider,
    Flex
} from "@chakra-ui/react";

import NextLink from "next/link";
import ControlStatus from "../project/status/controlStatus";

const ServiceList = ({data, name, unique_id}) => {
    return (
        <Box bg={"teal.200"} w={"20%"} padding={"1%"} align={"center"} h={"100%"}>
            <Flex direction={"column"} h={"100%"} gap={6}>
                <Flex gap={3} align={"center"}>
                    <NextLink href={`/projects`} passHref>
                        <Button colorScheme="teal" variant={"ghost"} _hover={{"bg": "teal.100"}} p={"5%"}>
                            +
                        </Button>
                    </NextLink>
                    <Heading color="teal" size={"lg"}>{name}</Heading>
                </Flex>
                <Divider/>
                <Flex overflowY={"scroll"} h={"50%"} direction={"column"} gap={1}>
                    {data && Array.isArray(data) && data.map((element, index) => (
                        <NextLink href={`/project/${element.unique_id}`} passHref>
                            <Button isActive={unique_id && element.unique_id === unique_id} color="teal" _active={{"bg": "teal.100"}}_hover={{"bg": "teal.100"}} variant="ghost">{element.title}</Button>
                        </NextLink>
                    ))}
                </Flex>
                {unique_id && <ControlStatus unique_id={unique_id}/>}
            </Flex>
        </Box>
    );
}

export default ServiceList;