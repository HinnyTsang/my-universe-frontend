import { Avatar, Image, Paper, Stack, Text } from '@mantine/core'
import React from 'react'
import man from '../assets/man.png'

interface ContactCardProps {
    contactData: ContactData
}

export interface ContactData {
    id: string
    name: string
    icon: any

}

const ContactCard = ({ contactData }: ContactCardProps) => {
    return (
        <Paper h={80} shadow='xl' display={'flex'} sx={{ alignItems: 'center' }} mb={8} mx={20}
        // sx={{ cursor: 'pointer' }}
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