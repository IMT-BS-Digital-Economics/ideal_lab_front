import {useState} from "react";

import {Flex, IconButton, Stack, Tag, TagCloseButton, TagLabel, Text, useDisclosure} from "@chakra-ui/react";
import {FaPen} from "react-icons/fa6";
import UpdateModal from "../../update/updateModal";
import UpdateArgs from "../../update/updateArgs";

const EditableArguments = ({unique_id, value}) => {
    const [isSubmit, setIsSubmit] = useState(false);

    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Flex direction={"column"} align={"center"}>
                <Stack direction={"row"} p={"1%"}>
                    {value.map((element) => {
                        return (
                            <Tag
                                size={"md"}
                                key={element}
                                borderRadius={"full"}
                                variant='subtle'
                                colorScheme={"teal"}
                            >
                                <TagLabel>{element}</TagLabel>
                            </Tag>
                        );
                    })}
                </Stack>
                <Flex>
                    <IconButton
                        isRound={true}
                        aria-label="Edit value"
                        icon={<FaPen/>}
                        colorScheme='teal'
                        size={"lg"}
                        onClick={onOpen}
                        justifyContent="center" alignItems="center"
                    />
                </Flex>
            </Flex>
            <UpdateArgs isOpen={isOpen} onClose={onClose} isSubmit={isSubmit} setIsSubmit={setIsSubmit} content={value} unique_id={unique_id}/>
        </>
    );
}

export default EditableArguments;