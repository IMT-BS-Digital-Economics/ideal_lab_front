import {useState} from "react";

import {Box, Flex, FormControl, FormLabel, FormHelperText, Input, Heading} from "@chakra-ui/react";

import {FileUploader} from "react-drag-drop-files";
import hookUploadFile from "../../hooks/items/create/hookUploadFile";

const UploadFile = ({unique_id}) => {
    const fileType = ["CSV", "XLSX"];

    const [file, setFile] = useState(null);

    const [path, setPath] = useState('.');

    hookUploadFile(unique_id, file, setFile, path);

    return (
        <Box bg={"teal"} padding={"2%"} borderRadius={"xl"} boxShadow={"xl"}>
            <Heading size={"lg"} color={"white"}>Upload file</Heading>
            <FormControl color={"white"}>
                <FormLabel>Destination path</FormLabel>
                <Input value={path} onChange={(event) => setPath(event.target.value)}/>
                <FormHelperText color={"white"}>Indicate where to send the file</FormHelperText>
            </FormControl>
            <Flex margin={"2%"} justifyContent={"center"}>
                <FileUploader dropMessageStyle={{ backgroundColor: 'red'}} handleChange={(file) => setFile(file)} name={"file"} types={fileType}/>
            </Flex>
        </Box>
    );
}

export default UploadFile;