import { useState } from "react";

import {
    Button,
    Icon,
    useDisclosure, FormLabel,
} from "@chakra-ui/react";

import {IoTime} from "react-icons/io5";

import SelectTime from "../../../utils/item/selectTime";

import hookUpdateItemParam from "../../../hooks/items/update/hookUpdateItemParam";
import UpdateModal from "../modal/updateModal";

const TimeBox = ({itemId, itemTimeToStart}) => {
    const [hour, setHour] = useState('');
    const [minutes, setMinutes] = useState('');

    const [isSubmit, setIsSubmit] = useState();

    const { isOpen, onOpen, onClose } = useDisclosure();

    hookUpdateItemParam('test', itemId, "time_to_start", `${hour}:${minutes}`, isSubmit, setIsSubmit);

    return (
        <>
            <Button
                leftIcon={<Icon as={IoTime} color={"cyan.700"}/>}
                fontSize={"sm"} align={"center"}
                mb={3}
                style={{textTransform: 'capitalize'}}
                onClick={onOpen}>
                {itemTimeToStart}
            </Button>

            <UpdateModal
                Title={"Update Edit time"}
                Content={
                    <div>
                        <FormLabel>Time to start</FormLabel>
                        <SelectTime
                            setHour={setHour}
                            setMinutes={setMinutes}
                        />
                    </div>
                }
                setIsSubmit={setIsSubmit}
                isOpen={isOpen}
                onClose={onClose}
            />
        </>
    );
}

export default TimeBox;