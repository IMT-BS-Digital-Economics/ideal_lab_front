import { useState } from "react";

import {
    Button,
    Menu,
    MenuButton,
    MenuGroup,
    MenuItem,
    MenuList
} from "@chakra-ui/react";

import NextLink from "next/link";

import { FaUserAlt } from "react-icons/fa";

import hookSignOut from "../../hooks/auth/hookSignOut";
import hookUserMe from "../../hooks/user/hookUserMe";

const ProfileMenu = ({username}) => {
    const [isSubmit, setIsSubmit] = useState(false);

    const [userData, setUserData] = useState(false);

    hookSignOut({isSubmit, setIsSubmit});

    hookUserMe({
        userData,
        setUserData
    });

    return (
        <div>
            <Menu>
                <MenuButton as={Button} variant="ghost" colorScheme={"teal"} leftIcon={<FaUserAlt/>}>{username}</MenuButton>
                <MenuList>
                    {
                        userData.role == "chief_access" ? (
                            <MenuGroup title={"Admin"}>
                                <NextLink href={"/admin"} passHref>
                                    <MenuItem>
                                        Manage users
                                    </MenuItem>
                                </NextLink>
                            </MenuGroup>
                        ) : (
                            <></>
                        )
                    }
                    <MenuGroup title={"Profile"}>
                        <NextLink href={"/user"} passHref>
                            <MenuItem>
                                My Account
                            </MenuItem>
                        </NextLink>
                        <MenuItem onClick={() => setIsSubmit(true)}>
                            Sign Out
                        </MenuItem>
                    </MenuGroup>
                </MenuList>
            </Menu>
        </div>
    )
}

export default ProfileMenu;

