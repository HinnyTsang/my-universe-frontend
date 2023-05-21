import { Avatar, Image, Paper, Stack, Text, useMantineTheme } from '@mantine/core'
import React, { useCallback } from 'react'
import man from '../assets/man.png'
import { useRouter } from 'next/router';
import { useUserStore } from '@/hooks/useUserSore';

interface ContactCardProps {
    contactData: ContactData
}

export interface ContactData {
    id: string
    name: string
    icon: any

}


const ContactCard = ({ contactData }: ContactCardProps) => {
    const theme = useMantineTheme()
    const router = useRouter();
    const navChatRoomDetail = useCallback(() => {
        setUid(contactData.id)
        router.push(`/chatRoomPage/${contactData.id}`)
    }, [])
    const { setUid, uid } = useUserStore()

    return (
        <Paper h={80} shadow='xl' display={'flex'} sx={{
            alignItems: 'center', cursor: 'pointer',
            ":hover": { backgroundColor: theme.colors.gray[2] },
            // ":active": { backgroundColor: theme.colors.gray[5] },
            backgroundColor: contactData.id === uid ? theme.colors.gray[5] : 'light'

        }} mb={8} mx={20}
            onClick={navChatRoomDetail}
        >
            <Avatar size={'lg'} src={contactData.icon.src} alt="it's me" ml={8} mr={16} />
            <Stack spacing={0}>
                <Text fw={'bold'} fz={20}>{contactData.name}</Text>
                <Text color='gray'>Message.......</Text>
            </Stack>
        </Paper>
    )
}

export default ContactCard