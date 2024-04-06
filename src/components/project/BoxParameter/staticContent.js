import {Flex, Heading, IconButton, SlideFade, Text, useDisclosure} from "@chakra-ui/react";
import {ArrowBackIcon, InfoIcon} from "@chakra-ui/icons";
import {useState} from "react";
import {FaPen} from "react-icons/fa6";

const StaticContent = ({name, description, showInfo, setShowInfo}) => {
    const { isOpen, onToggle } = useDisclosure();

    const toggleInfoDisplay = () => {
        setShowInfo(!showInfo);
        onToggle();
    };

    const infoButton = (
        <IconButton colorScheme="teal" icon={showInfo ? <ArrowBackIcon/> : <InfoIcon/>} variant="ghost" aria-label={"info"} onClick={toggleInfoDisplay}/>
    )

    return (
        <Flex>
            <Flex direction={"column"} style={{ filter: showInfo ? 'blur(4px)' : 'none', pointerEvents: showInfo ? 'none' : 'all' }}>
                <Flex direction={"row"} color={"teal.100"} mb={"1%"} align={"center"} gap={1}>
                    {infoButton}
                    <Heading fontSize="lg" color={"teal"}>{name}</Heading>
                </Flex>
            </Flex>
            <SlideFade in={isOpen} offsetY="20px" style={{ position: 'absolute', top: 0, left: 0, right: 0, zIndex: 10 }}>
                <Flex
                    direction={"column"}
                    gap={1}
                >
                    {infoButton}
                    <Text fontSize="sm" as={"b"} color={"teal"}>{description}</Text>
                </Flex>
            </SlideFade>
        </Flex>
    );
}

export default StaticContent;