import ChatRoom from '@/components/ChatRoom/ChatRoom'
import ContactList from '@/components/ContactList/ContactList'
import Layout from '@/layouts/Layout'
import React from 'react'

const ChatComponent = () => {

    return (
        <>
            <Layout ContactList={ContactList} ChatRoom={ChatRoom} />
        </>
    )
}

export default ChatComponent