import {Button, FormLabel, Icon, useDisclosure} from "@chakra-ui/react";
import hookUpdateItemParam from "../../../hooks/items/update/hookUpdateItemParam";
import {IoTime} from "react-icons/io5";
import UpdateModal from "../../item/modal/updateModal";
import SelectTime from "../../../utils/item/selectTime";
import {useApiCallToastResp} from "../../../hooks/callApi";
import {useEffect, useState} from "react";

const UpdateTime = ({unique_id, toggleLayout}) => {
    const [hour, setHour] = useState('');
    const [minutes, setMinutes] = useState('');

    const [isSubmit, setIsSubmit] = useState();

    const { isOpen, onOpen, onClose } = useDisclosure();

    useEffect(() => {
        if (toggleLayout && !isOpen) {
            onOpen();
        }
    }, [toggleLayout]);

    useApiCallToastResp(
        'post',
        `/projects/${unique_id}/update/start_time`,
        {"start_time": `${hour}:${minutes}`},
        isSubmit,
        setIsSubmit
    )

    return (
        <>
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

export default UpdateTime;