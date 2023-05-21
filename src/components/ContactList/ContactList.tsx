import React, { useCallback, useEffect, useState } from 'react'
import ContactCard, { ContactData } from '../ContactCard'
import man from '../../assets/man.png'
import woman from '../../assets/woman.png'
import { Box, Input, Navbar, ScrollArea, Stack } from '@mantine/core'
import { HoverEnlarge } from '../animated/HoverEnlarge'
import { InputComponent } from '../InputComponent'
import { v4 as uuidv4 } from 'uuid';
import { useUserStore } from '@/hooks/useUserSore'
import _ from 'lodash';

const demoData: ContactData[] = [
    {
        id: uuidv4().toString(),
        name: 'Tom',
        icon: man,
        // isNewMessage: false
    },
    {
        id: uuidv4().toString(),
        name: 'Mary',
        icon: woman,
        // isNewMessage: false
    },
    {
        id: uuidv4().toString(),
        name: 'Andy',
        icon: man,
        // isNewMessage: false
    },
    {
        id: uuidv4().toString(),
        name: 'Sin',
        icon: woman,
        // isNewMessage: false
    },
    {
        id: uuidv4().toString(),
        name: 'Ant',
        icon: man,
        // isNewMessage: false
    },
    {
        id: uuidv4().toString(),
        name: 'Mandy',
        icon: woman,
        // isNewMessage: false
    },
    {
        id: uuidv4().toString(),
        name: 'Gor',
        icon: man,
        // isNewMessage: false
    },

]

const sortContentList = () => {
    const { newMessage } = useUserStore()
    const myFunction = useCallback(() => {
        if (newMessage.id !== "") {
            return demoData.sort(function (x, y) { return x.id === newMessage.id ? -1 : y.id === newMessage.id ? 1 : 0; })
        } else {
            return demoData
        }

    }, [newMessage])

    return myFunction()

}


const ContactList = () => {

    return (
        <>
            <Navbar.Section >
                <Input mb={10} />

            </Navbar.Section >

            < Navbar.Section grow component={ScrollArea} type='never' >

                {
                    demoData && sortContentList().map((value, _) =>
                        <HoverEnlarge key={value.id}>
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