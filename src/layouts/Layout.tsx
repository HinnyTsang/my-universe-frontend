import { NavBarTemp } from '@/navbar/NavBarTemp'
import { Box, Center, Divider, Paper, useMantineTheme, Navbar, Switch, } from '@mantine/core'
import { useElementSize, } from '@mantine/hooks'
import React, { ReactElement, ReactNode, useCallback, useEffect } from 'react'
import { useUserStore } from '@/hooks/useUserSore'
import { useStyleStore } from '@/hooks/useStyleStore'


interface Props {
    ContactList: React.FC
    Children: React.FC
    // Children?: ReactElement
}

const totalWidth = 80
const chatRoomWidth = 50
const contactWidth = totalWidth - chatRoomWidth

const SwitchUser = () => {
    const { isOtherUser, setIsOtherUser } = useUserStore()
    const handlerSwitchUser = useCallback(() => {
        setIsOtherUser(!isOtherUser)
    }, [isOtherUser])
    return (
        <Switch
            label="Act as other user"
            mb={20}
            onChange={handlerSwitchUser}
        />
    )
}

const Content = ({ ContactList, Children }: Props) => {
    const { ref, width, height } = useElementSize();
    const { setWidth } = useStyleStore()
    const theme = useMantineTheme();

    useEffect(() => {
        setWidth(width)
    }, [width])

    return (
        <Center>
            <Paper w={`${totalWidth}vw`}
                // withBorder
                // shadow='xl'
                sx={{
                    display: 'flex', alignItems: 'center',
                    borderTopLeftRadius: 10,
                    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);',
                }}>
                <Navbar height={height} p="xs" width={{ base: `${contactWidth}vw` }} bg={theme.colors.gray[4]}
                    sx={{ borderTopLeftRadius: 10 }}
                >
                    <ContactList />

                </Navbar>
                <Box w={`${chatRoomWidth}vw`} ref={ref}>
                    <Children />
                </Box>
            </Paper>
        </Center>
    )
}

const Layout = ({ ContactList, Children }: Props) => {
    return (
        <>
            <NavBarTemp />
            <Divider mb={10} />
            <Center>
                <SwitchUser />
            </Center>
            <Content ContactList={ContactList} Children={Children} />

        </>
    )

}

export default Layout;