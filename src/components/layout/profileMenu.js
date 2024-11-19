import { useState } from 'react';

import {
    Button,
    Menu,
    MenuButton,
    MenuGroup,
    MenuItem,
    MenuList,
} from '@chakra-ui/react';

import NextLink from 'next/link';

import { FaUserAlt } from 'react-icons/fa';

import hookSignOut from '../../hooks/auth/hookSignOut';
import { useApiCallDataResp } from '../../hooks/callApi';

const ProfileMenu = ({ username }) => {
    const [isSubmit, setIsSubmit] = useState(false);

    const [userData, setUserData] = useState(false);

    hookSignOut({ isSubmit, setIsSubmit });

    useApiCallDataResp('get', '/user/me', '', userData, setUserData);

    return (
        <div>
            <Menu>
                <MenuButton
                    as={Button}
                    variant="ghost"
                    colorScheme={'teal'}
                    leftIcon={<FaUserAlt />}
                >
                    {username}
                </MenuButton>
                {
                    userData && userData.data ? (
                        <MenuList>
                            {userData.data.role === 'chief_access' ? (
                                <MenuGroup title={'Admin'}>
                                    <NextLink href={'/admin'} passHref>
                                        <MenuItem>Manage users</MenuItem>
                                    </NextLink>
                                </MenuGroup>
                            ) : (
                                <></>
                            )}
                            <MenuGroup title={'Profile'}>
                                <NextLink href={'/user'} passHref>
                                    <MenuItem>My Account</MenuItem>
                                </NextLink>
                                <MenuItem onClick={() => setIsSubmit(true)}>
                                    Sign Out
                                </MenuItem>
                            </MenuGroup>
                        </MenuList>
                    ) : null
                }
            </Menu>
        </div>
    );
};

export default ProfileMenu;
