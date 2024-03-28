import {IoPlay} from "react-icons/io5";
import {IconButton} from "@chakra-ui/react";

const StatusButton = ({icon, name, setIsSubmit, setStatus}) => {
    return (
        <IconButton
            icon={icon}
            onClick={() => {
                setStatus(name);
                setIsSubmit(true);
            }}
            color={"teal"}
            bg={"teal.100"}
            size={"lg"}
            isRound
            aria-label={`action-${name}`}
        />
    );
}

export default StatusButton;