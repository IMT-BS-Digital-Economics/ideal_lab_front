import { useEffect, useState } from "react";

import {
    Button,
    Icon,
    useDisclosure,
} from "@chakra-ui/react";

import AddExecutable from "../modal/addItem/addExecutable";

import UpdateModal from "../modal/updateModal";

import {IoFolder} from "react-icons/io5";

import hookUpdateItemParam from "../../../hooks/items/update/hookUpdateItemParam";

const ExecutableBox = ({itemId, itemExecutable}) => {
    const [executable, setExecutable] = useState(false);

    const [isSubmit, setIsSubmit] = useState();

    const { isOpen, onOpen, onClose } = useDisclosure();

    useEffect(() => {
        if (!executable && itemExecutable) {
            setExecutable(itemExecutable);
        }
    });

    hookUpdateItemParam("test", itemId, "path", executable, isSubmit, setIsSubmit);

    return (
        <>
            <Button
                leftIcon={<Icon
                as={IoFolder}
                color={"cyan.700"}/>}
                onClick={onOpen}
            >
                {itemExecutable}
            </Button>
        <>
            <UpdateModal
                Title={"Update Executable Path"}
                Content={
                    <AddExecutable
                        setExecutable={setExecutable}
                    />
                }
                setIsSubmit={setIsSubmit}
                isOpen={isOpen}
                onClose={onClose}
            />
        </>
        </>
    );
}

export default ExecutableBox;