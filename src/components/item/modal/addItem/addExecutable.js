import { useState } from "react";

import {
    FormLabel,
    Select
} from "@chakra-ui/react";

import hookCollectScriptList from "../../../../hooks/items/read/hookCollectScriptList";
import hookCollectExecutableList from "../../../../hooks/items/read/hookCollectExecutableList";

const AddExecutable = ({setExecutable}) => {
    const [collectList, setCollectList] = useState([]);
    const [collect, setCollect] = useState(false);

    const [executableList, setExecutableList] = useState([]);

    hookCollectScriptList({collectList, setCollectList});
    hookCollectExecutableList({executableList, setExecutableList, collect});

    return (
        <>
            <FormLabel>Collect</FormLabel>
            <Select
                variant={"filled"}
                placeholder={"Select Collect Folder"}
                onChange={(e) => {
                    setCollect(e.target.value)
                }}
            >
                {collectList.map((element) => {
                    return (
                        <option key={element} value={element}>{element}</option>
                    );
                })}
            </Select>
        {collect ?
            (<div>
                <FormLabel>Executable</FormLabel>
                <Select
                    variant={"filled"}
                    placeholder={"Select Executable"}
                    onChange={(e) => {
                        setExecutable(e.target.value)
                    }}
                >
                    {executableList.map((element) => {
                        let filename = element.split('/')

                        return (
                            <option key={element} value={element}>{filename[filename.length - 1]}</option>
                        );
                    })}
                </Select>
            </div>) : null}
        </>
);
}

export default AddExecutable;