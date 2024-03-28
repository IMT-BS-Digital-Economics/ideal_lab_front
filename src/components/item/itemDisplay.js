import {
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Flex,
    Heading,
    ScaleFade,
    Spacer,
    Stack,
    Text,
} from '@chakra-ui/react'

import hookGetItem from "../../hooks/items/read/hookGetItem";
import StatusBox from "./box/statusBox";
import TimeBox from "./box/timeBox";
import ExecutableBox from "./box/executableBox";
import ArgumentsBox from "./box/argumentsBox";
import DragAndDropBox from "./box/dragAndDropBox";
import OutputBox from "./box/outputBox";
import {useState} from "react";

const ItemDisplay = ({itemId}) => {
    const [item, setItem] = useState(null);

    hookGetItem(setItem, itemId);

    if (!item) {
        return (
            <></>
        );
    }

    return (
        <ScaleFade initialScale={0.9} in={item.id == itemId}>
            <Stack spacing={3} m={"1%"}>
                <Card>
                    <CardHeader>
                        <Stack spacing={3}>
                            <Flex>
                                <Heading>
                                    {item.title}
                                </Heading>
                                <Spacer/>
                                <Text>
                                    {item.start_time}
                                </Text>
                            </Flex>
                            <Text>
                                {item.description}
                            </Text>
                        </Stack>
                    </CardHeader>
                    <CardBody>
                        <Stack>
                            <StatusBox
                                itemId={item.id}
                                itemStatus={item.item_status}
                            />
                            <TimeBox
                                itemId={item.id}
                                itemTimeToStart={item.time_to_start}
                            />
                            <ExecutableBox
                                itemId={item.id}
                                itemExecutable={item.path}
                            />
                        </Stack>
                    </CardBody>
                    <CardFooter>
                        <Stack direction={"row"}>
                            <ArgumentsBox
                                itemId={item.id}
                                itemArgs={item.arguments}
                            />
                            <Spacer />
                            <DragAndDropBox
                                itemId={item.id}
                            />
                        </Stack>
                    </CardFooter>
                </Card>
                <OutputBox
                    itemId={item.id}
                    itemStatus={item.item_status}
                />
            </Stack>
        </ScaleFade>
    );
}

export default ItemDisplay;