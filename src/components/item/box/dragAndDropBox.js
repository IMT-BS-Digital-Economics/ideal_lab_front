import { useState } from "react";

import { FileUploader } from "react-drag-drop-files";

import {
    Button,
    useDisclosure,
    Flex,
} from "@chakra-ui/react";

import hookUploadFile from "../../../hooks/items/create/hookUploadFile";
import UpdateModal from "../modal/updateModal";

const DragAndDropBox = ({itemId}) => {
    const fileType = ["CSV", "XLSX"];

    const [file, setFile] = useState(null);

    const { isOpen, onOpen, onClose } = useDisclosure();

    hookUploadFile(itemId, file, setFile);

    return (
        <>
            <Button
                onClick={onOpen}
                color={"cyan.700"}
            >
                Upload a file
            </Button>

            <UpdateModal
                Title={"Upload a file"}
                Content={
                    <Flex margin={"2%"} justifyContent={"center"}>
                        <FileUploader handleChange={(file) => setFile(file)} name={"file"} types={fileType}/>
                    </Flex>
                }
                isOpen={isOpen}
                onClose={onClose}
                noFooter={true}
            />
        </>
    );
}

export default DragAndDropBox;