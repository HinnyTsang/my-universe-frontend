import { NavBarTemp } from '@/navbar/NavBarTemp'
import { Box, Center, Divider, Paper, useMantineTheme, Navbar, Switch, } from '@mantine/core'
import { useElementSize, } from '@mantine/hooks'
import React, { useCallback } from 'react'
import { useUserStore } from '@/hooks/useUserSore'
import { ChatRoomProps } from '@/components/ChatRoom/ChatRoom'


interface Props {
    ContactList: React.FC
    ChatRoom: React.FC<ChatRoomProps>
}


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

const totalWidth = 80
const chatRoomWidth = 50
const contactWidth = totalWidth - chatRoomWidth
const Layout = ({ ContactList, ChatRoom }: Props) => {
    const { ref, width, height } = useElementSize();
    const theme = useMantineTheme();


    return (
        <>
            <NavBarTemp />
            <Divider mb={10} />
            <Center>
                <SwitchUser />
            </Center>
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
                        <ChatRoom width={width} />
                    </Box>
                </Paper>
            </Center>


        </>
    )

}

export default Layout;