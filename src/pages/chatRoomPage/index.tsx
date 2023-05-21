import startChatRoomPage from '@/pages/chatRoomPage/startChatRoomPage'
import ContactList from '@/components/ContactList/ContactList'
import Layout from '@/layouts/Layout'
import React from 'react'

const chatRoomPage = () => {

    return (
        <Layout
            ContactList={ContactList}
            Children={startChatRoomPage}
        />
    )
}

export default chatRoomPage