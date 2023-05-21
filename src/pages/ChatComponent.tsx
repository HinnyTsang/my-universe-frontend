import startChatRoomPage from '@/pages/chatRoomPage/startChatRoomPage'
import ContactList from '@/components/ContactList/ContactList'
import Layout from '@/layouts/Layout'
import React from 'react'

const ChatComponent = () => {

    return (
        <>
            <Layout ContactList={ContactList} startChatRoomPage={startChatRoomPage} />
        </>
    )
}

export default ChatComponent