import {
    Box,
} from "@chakra-ui/react";

const ItemBoxInfo = (props) => {
    return (
            <Box
                bgColor={"gray.200"}
                w={props.w}
                h={props.h}
                p={"1%"}
                borderRadius={"lg"}
                _hover={{
                    bgColor: "gray.300"
                }}
            >
                {props.children}
            </Box>
    );
}

export default ItemBoxInfo;