import { useState } from 'react';

import {
    Flex,
    FormControl,
    FormLabel,
    FormHelperText,
    Input,
} from '@chakra-ui/react';

import { FileUploader } from 'react-drag-drop-files';
import hookUploadFile from '../../../hooks/items/create/hookUploadFile';

const UploadFile = ({ unique_id }) => {
    const fileType = ['CSV', 'XLSX'];

    const [file, setFile] = useState(null);

    const [path, setPath] = useState('.');

    hookUploadFile(unique_id, file, setFile, path);

    return (
        <>
            <FormControl>
                <FormLabel color="teal" fontSize={'sm'}>
                    Destination path
                </FormLabel>
                <Input
                    value={path}
                    onChange={(event) => setPath(event.target.value)}
                />
                <FormHelperText color="teal" as={'b'}>
                    Indicate where to send the file
                </FormHelperText>
            </FormControl>
            <Flex marginRight={'auto'}>
                <FileUploader
                    dropMessageStyle={{ backgroundColor: 'red' }}
                    handleChange={(file) => setFile(file)}
                    name={'file'}
                    types={fileType}
                />
            </Flex>
        </>
    );
};

export default UploadFile;
