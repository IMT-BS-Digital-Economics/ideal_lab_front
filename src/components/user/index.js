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
            <Tabs margin={"3%"} variant={"soft-rounded"} colorScheme={"teal"}>
                <TabList>
                    <Tab
                    >
                        Profile</Tab>
                    <Tab
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