import { Flex, Paper, Text, useMantineTheme } from '@mantine/core'
import React from 'react'




const startChatRoomPage = () => {
    const theme = useMantineTheme();
    return (
        <>
            <Flex bg={theme.colors.gray[8]} justify={'center'} align={'center'} h={'54vh'}>
                <Paper mx={40} px={40} py={60} shadow={'xl'} withBorder bg={theme.colors.gray[1]}>
                    <Text>To start a conversation, please click on the contact list.</Text>
                </Paper>
            </Flex>
        </>
    )
}

export default startChatRoomPage