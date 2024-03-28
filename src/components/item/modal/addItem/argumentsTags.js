import {
    Tag,
    TagLabel,
    TagCloseButton,
    Stack,
} from "@chakra-ui/react";

const ArgumentsTags = ({args, setArgs}) => {
    return (
        <Stack direction={"row"}>
            {args.map((element) => {
                return (
                    <Tag
                        size={"md"}
                        key={element}
                        borderRadius={"full"}
                        variant='subtle'
                        colorScheme={"cyan"}
                    >
                        <TagLabel>{element}</TagLabel>
                        <TagCloseButton
                            onClick={() => {setArgs(args.filter((args) => args != element))}}
                        />
                    </Tag>
                );
            })}
        </Stack>
    );
}

export default ArgumentsTags;