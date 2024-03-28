import {
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
} from "@chakra-ui/react";

import Profile from './profile';
import Settings from "./settings";

const UserPage = () => {
    return (
        <div>
            <Tabs margin={"3%"} variant={"soft-rounded"} colorScheme={"cyan"}>
                <TabList>
                    <Tab
                        _hover={{
                            bgColor: "cyan.100",
                            color: "cyan.700"
                        }}
                    >
                        Profile</Tab>
                    <Tab
                        _hover={{
                            bgColor: "cyan.100",
                            color: "cyan.700"
                        }}
                        ml={3}
                    >
                        Settings</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel margin={"2%"}>
                        <Profile/>
                    </TabPanel>
                    <TabPanel margin={"2%"}>
                        <Settings/>
                    </TabPanel>
                </TabPanels>
            </Tabs>

        </div>
    );
}

export default UserPage;