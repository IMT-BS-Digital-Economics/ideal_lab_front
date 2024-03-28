import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Grid,
    GridItem,
    Heading,
    Icon,
    Stack,
    Text,
    ScaleFade
} from "@chakra-ui/react";

import {IoArrowUndo, IoCreate, IoRemoveCircle} from "react-icons/io5";

const HomeItem = ({onOpenAddItemModal, remove, setRemove}) => {
    return (
        <ScaleFade initialScale={0.9} in={true}>
            <Card h={"100%"} mr={3} direction={"column"}>
                <CardHeader align={"center"}>
                    <Heading color={"cyan.700"} size={"2xl"}>
                        Welcome on the iDealLab Dashboard !
                    </Heading>
                    <Text as='b' color={"cyan.600"} bold>
                        A place where you can monitoring your collects from day to night ! By simply using this interface !
                    </Text>
                </CardHeader>
                <CardBody mt={"15%"} mb={"25%"}>
                    <Grid templateColumns='repeat(9, 1fr)' gap={3}>
                        <GridItem colSpan={3} h='10'>
                            <Stack align={"center"}>
                                <Icon as={IoArrowUndo} color={"black.700"} boxSize={"10em"}/>
                                <Button>Manage your collect</Button>
                            </Stack>
                        </GridItem>
                        <GridItem colSpan={3} h='10'>
                            <Stack align={"center"}>
                                <Icon as={IoCreate} color={"black.700"} boxSize={"10em"}/>
                                <Button
                                    onClick={onOpenAddItemModal}
                                >
                                    Create a new item
                                </Button>
                            </Stack>
                        </GridItem>
                        <GridItem colSpan={3} h='10'>
                            <Stack align={"center"}>
                                <Icon as={IoRemoveCircle} color={"black.700"} boxSize={"10em"}/>
                                <Button
                                    onClick={() => setRemove(!remove)}
                                >
                                    Delete an item
                                </Button>
                            </Stack>
                        </GridItem>
                    </Grid>
                </CardBody>
                <CardFooter>
                    <Text as='b' color={"cyan.600"} bold>
                        Created by Brice Toffolon in too much time...
                    </Text>
                </CardFooter>
            </Card>
        </ScaleFade>
    );
}

export default HomeItem;