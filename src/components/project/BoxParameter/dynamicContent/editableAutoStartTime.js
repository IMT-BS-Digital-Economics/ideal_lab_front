import {Flex, Heading, IconButton, Text} from "@chakra-ui/react";
import {FaPen} from "react-icons/fa6";
import {useState} from "react";
import UpdateTime from "../../update/updateTime";

const EditableAutoStartTime = ({unique_id, value}) => {
    const [toggleLayout, setToggleLayout] = useState(false);

    return (
        <Flex direction={"column"} gap={"3"} align={"center"}>
            <Heading color={"teal"}>{value}</Heading>
            <Flex>
                <IconButton
                    isRound={true}
                    aria-label="Edit value"
                    icon={<FaPen/>}
                    colorScheme='teal'
                    size={"lg"}
                    onClick={() => setToggleLayout(true)}
                    justifyContent="center" alignItems="center"
                />
            </Flex>
            <UpdateTime unique_id={unique_id} toggleLayout={toggleLayout}/>
        </Flex>
    );
}

export default EditableAutoStartTime;