import {
    Button,
    Flex,
} from "@chakra-ui/react";

const ItemInformations = ({item, itemId, setItemId}) => {
    return (
        <Flex direction={"row"} align={"center"}>
                <Button
                    size={"lg"}
                    variant={item.id == itemId ? "solid": ""}
                    color={item.id == itemId ? "cyan.700": ""}
                    onClick={() => setItemId(item.id)}
                >
                    {item.title}
                </Button>
        </Flex>
    );
}

export default ItemInformations;