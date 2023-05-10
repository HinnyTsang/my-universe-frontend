import { Paper } from '@mantine/core'
import React from 'react'
import man from '../assets/man.png'

interface props {
    contactData: ContactData
}

interface ContactData {
    name: string,
    icon: any

}
const data = {
    name: 'Tom',
    iconImage: man

}

const ContactCard = ({ }) => {
    return (
        <Paper h={100} w={'auto'} shadow='lg'>
            {/* <Image/> */}
        </Paper>
    )
}

export default ContactCard