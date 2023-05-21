import ContactList from '@/components/ContactList/ContactList'
import Layout from '@/layouts/Layout'
import React from 'react'
import ChatRoomDetail from './chatRoomDetail'

const chatRoomId = () => {
    return (
        <Layout ContactList={ContactList} Children={ChatRoomDetail} />
    )
}

export default chatRoomId