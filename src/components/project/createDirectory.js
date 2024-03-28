import {useState} from "react";

import {
    Button,
    FormControl,
    FormHelperText,
    FormLabel,
    Heading,
    Input,
    Box,
    InputGroup,
    InputRightElement
} from "@chakra-ui/react";
import {useApiCallToastResp} from "../../hooks/callApi";

const CreateDirectory = ({unique_id}) => {
    const [path, setPath] = useState('');
    const [isSubmit, setIsSubmit] = useState(false)

    useApiCallToastResp(
        'post',
        `projects/${unique_id}/directory`,
        {
            'path': path
        },
        isSubmit,
        setIsSubmit,
    )

    return (
        <Box bg={"teal"} padding={"2%"} borderRadius={"xl"} boxShadow={"xl"}>
            <Heading size={"lg"} color={"white"}>Create directory</Heading>
            <FormControl color={"white"}>
                <FormLabel>Directory Path</FormLabel>
                <InputGroup size='md' color={"white"}>
                    <Input value={path} onChange={(event) => setPath(event.target.value)}/>
                    <InputRightElement width='4.5rem'>
                            {
                                path !== '' ? (
                                    <Button variant={"solid"} colorScheme={"teal"} onClick={() => {
                                        setIsSubmit(true)
                                    }}>Create</Button>
                                ): null
                            }
                    </InputRightElement>
                </InputGroup>
                <FormHelperText color={"white"}>Indicate path to create the directory</FormHelperText>

            </FormControl>
        </Box>
    );
}

export default CreateDirectory;