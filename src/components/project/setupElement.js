import {useState, createElement} from "react";

import {Flex, Heading, Box, Tag, TagLabel, Text, Divider, IconButton, Button, useDisclosure} from "@chakra-ui/react";

import { FaPen } from "react-icons/fa6";
import UpdateModal from "../item/modal/updateModal";

const SetupElement = ({name, value, editable = false, Content= undefined, unique_id = undefined}) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const [isSubmit, setIsSubmit] = useState(false)

    return (
        <>
            <Box bg={"teal"} padding={"2%"} borderRadius={"xl"} boxShadow={"xl"}>
                <Flex gap={10} align={"center"}>
                    <Flex direction={"column"}>
                        <Heading size="lg" color={"white"}>{name}</Heading>
                        {
                            Array.isArray(value) ? (
                                <Flex gap={1}>
                                    {value.map((element) => {
                                        return (
                                            <Tag variant='solid' colorScheme='teal'>
                                                <TagLabel>{element}</TagLabel>
                                            </Tag>
                                        );
                                    })}
                                </Flex>
                            ) : <Text as="b" color={"white"}>{value}</Text>
                        }
                    </Flex>
                    {editable ? <IconButton
                        isRound={true}
                        aria-label="Edit value"
                        icon={<FaPen/>}
                        colorScheme='teal'
                        size={"lg"}
                        marginLeft={"auto"}
                        onClick={onOpen}
                    /> : null}
                </Flex>
            </Box>

            {
                editable ? (
                    <UpdateModal
                        Title={`Upload ${name}`}
                        Content={
                            <Content unique_id={unique_id} content={value} isSubmit={isSubmit} setIsSubmit={setIsSubmit}/>
                        }
                        isOpen={isOpen}
                        onClose={onClose}
                        setIsSubmit={setIsSubmit}
                    />
                ) : null
            }
        </>
    );
}

export default SetupElement;