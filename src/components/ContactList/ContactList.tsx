import React from 'react'
import ContactCard, { ContactData } from '../ContactCard'
import man from '../../assets/man.png'
import woman from '../../assets/woman.png'
import { Box, Input, Navbar, ScrollArea, Stack } from '@mantine/core'
import { HoverEnlarge } from '../animated/HoverEnlarge'
import { InputComponent } from '../InputComponent'
import { v4 as uuidv4 } from 'uuid';


const demoData: ContactData[] = [
    {
        id: uuidv4().toString(),
        name: 'Tom',
        icon: man
    },
    {
        id: uuidv4().toString(),
        name: 'Mary',
        icon: woman
    },
    {
        id: uuidv4().toString(),
        name: 'Tom',
        icon: man
    },
    {
        id: uuidv4().toString(),
        name: 'Mary',
        icon: woman
    },
    {
        id: uuidv4().toString(),
        name: 'Tom',
        icon: man
    },
    {
        id: uuidv4().toString(),
        name: 'Mary',
        icon: woman
    },
    {
        id: uuidv4().toString(),
        name: 'Tom',
        icon: man
    },

]
const ContactList = () => {


    return (
        <>
            <Navbar.Section >
                <Input mb={10} />

            </Navbar.Section >

            < Navbar.Section grow component={ScrollArea} type='never' >

                {
                    demoData && demoData.map((value, index) =>
                        <HoverEnlarge key={index}>
                            <ContactCard contactData={value} />
                        </HoverEnlarge>
                    )
                }
            </ Navbar.Section>
            {/* <Navbar.Section>Footer with user</Navbar.Section> */}
        </>
    )
}

export default ContactList