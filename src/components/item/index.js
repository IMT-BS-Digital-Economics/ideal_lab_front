import {useState} from "react";

import {
    Grid,
    GridItem,
    useDisclosure
} from "@chakra-ui/react";

import ItemList from "./itemList";
import HomeItem from "./homeItem";
import ItemDisplay from "./itemDisplay";

const ItemHandler = () => {
    const [itemId, setItemId] = useState("Home")

    const [remove, setRemove] = useState(false);

    const {
        isOpen: isOpenAddItemModal,
        onOpen: onOpenAddItemModal,
        onClose: onCloseAddItemModal
    } = useDisclosure()

    return (
        <Grid
            templateColumns={'repeat(5, 1fr)'}
            gap={6}
            mt={"3%"}
        >
            <GridItem w='100%' h={'100%'}>
                <ItemList
                    itemId={itemId}
                    setItemId={setItemId}
                    addItemModal={[isOpenAddItemModal, onOpenAddItemModal, onCloseAddItemModal]}
                    remove={remove}
                    setRemove={setRemove}
                />
            </GridItem>
            <GridItem colSpan={4} w='100%'>
                {itemId == "Home" ?
                    <HomeItem
                        onOpenAddItemModal={onOpenAddItemModal}
                        remove={remove}
                        setRemove={setRemove}
                    /> :
                    <ItemDisplay
                        itemId={itemId}
                    />
                }
            </GridItem>
        </Grid>
    );
}

export default ItemHandler;