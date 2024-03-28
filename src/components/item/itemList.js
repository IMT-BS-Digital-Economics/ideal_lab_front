import { useState } from "react";

import {
    Button,
    Box,
    Stack,
    IconButton,
    ScaleFade,
    Flex,
    Text, useDisclosure,
} from "@chakra-ui/react";

import { motion } from 'framer-motion';

import { IoCreate, IoRemoveCircle, IoHomeSharp } from "react-icons/io5";

import hookGetItemsList from "../../hooks/items/read/hookGetItemsList";
import AddItemModal from "./modal/addItem/addItemModal";
import DeleteItemAlert from "./deleteItemAlert";
import ItemInformations from "./itemInformations";

const ItemList = ({itemId, setItemId, addItemModal, remove, setRemove}) => {
    const [itemsList, setItemsList] = useState([]);

    const [titleDel, setTitleDel] = useState(false);
    const [idDel, setIdDel] = useState(false);

    const {
        isOpen: isOpenAlertDel,
        onOpen: onOpenAlertDel,
        onClose: onCloseAlertDel
    } = useDisclosure()

    hookGetItemsList({itemsList, setItemsList});

    return (
        <Flex justify={"center"} direction={"column"}>
            <Stack direction={"row"}>
                    <Button
                        leftIcon={<IoHomeSharp />}
                        size={"lg"}
                        variant={""}
                        color={"cyan.700"}
                        ml={6}
                        onClick={() => {setItemId("Home")}}
                    >
                        Home
                    </Button>
                <IconButton
                    icon={<IoCreate />}
                    onClick={addItemModal[1]}
                />
                <IconButton
                    icon={<IoRemoveCircle />}
                    onClick={() => setRemove(!remove)}
                />
            </Stack>
            <Box overflowY={"auto"} maxHeight={"62em"} ml={6} mt={6} h={"62em"}>
                <Stack direction={"column"}>
                    <Text
                        as={"b"}
                        ml={6}
                        color={"cyan.700"}
                    >
                        MY ITEMS
                    </Text>
                    {itemsList ? itemsList.map((item) => {
                        return (
                            <Flex key={item.id} align={"center"}>
                                {
                                    remove ?
                                        <>
                                            <ScaleFade initialScale={0.9} in={remove}>
                                                <IconButton
                                                    m={"5%"}
                                                    color="red.500"
                                                    icon={<IoRemoveCircle />}
                                                    onClick={() => {
                                                        setTitleDel(item.title)
                                                        setIdDel(item.id)
                                                        onOpenAlertDel();
                                                    }}/>
                                            </ScaleFade>
                                        </> : null
                                }
                                <motion.div
                                    animate={remove ? {x: `${10 - item.title.length + item.title.length}px`} : null}
                                    transition={{ duration: 1 }}
                                >
                                    <ItemInformations
                                        item={item}
                                        itemId={itemId}
                                        setItemId={setItemId}
                                    />
                                </motion.div>
                            </Flex>
                        );
                    }) : null}
                </Stack>

                <DeleteItemAlert
                    currentId={itemId}
                    itemId={idDel}
                    setItemId={setItemId}
                    itemTitle={titleDel}
                    isOpen={isOpenAlertDel}
                    onClose={onCloseAlertDel}
                />
            </Box>

            <AddItemModal
                isOpen={addItemModal[0]}
                onClose={addItemModal[2]}
            />
        </Flex>
    );
}

export default ItemList;