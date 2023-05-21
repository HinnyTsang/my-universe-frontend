import { useUserStore } from '@/hooks/useUserSore';
import { yupResolver } from '@hookform/resolvers/yup';
import { Flex, Paper, ScrollArea, useMantineTheme, Text, Box } from '@mantine/core'
import { getHotkeyHandler, useHotkeys } from '@mantine/hooks';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import { InputComponent } from '../../components/InputComponent';
import { IconSend } from '@tabler/icons-react';
import { useStyleStore } from '@/hooks/useStyleStore';
import { useRouter } from 'next/router';


interface ChatData {
    text: string,
    isOtherUser: boolean
    uid: string
}
export interface ChatRoomProps {
    width: number
}
const schema = yup.object({
    text: yup.string().required(),
}).required();
type FormData = yup.InferType<typeof schema>;

const ChatRoomDetail = () => {

    const { isOtherUser, setNewMessage, newMessage } = useUserStore()
    const { width } = useStyleStore()
    const router = useRouter();

    const routeUid = useMemo(() => typeof router.query.chatRoomPage === 'string' ? router.query.chatRoomPage : '', [router.query.chatRoomPage])

    const theme = useMantineTheme();
    const [submittedData, setSubmittedData] = useState<ChatData[]>([]);
    const { handleSubmit, control, resetField } = useForm<FormData>({
        resolver: yupResolver(schema),
        defaultValues: {
            text: "",
        },
    });
    const inputRef = useRef<HTMLInputElement>(null);


    const onSubmit = useCallback((data: FormData) => {
        const obj: ChatData = {
            uid: routeUid,
            text: data.text,
            isOtherUser: isOtherUser
        }

        newMessage.id !== routeUid && setNewMessage({ id: routeUid, isNewMessage: true })

        setSubmittedData([...submittedData, obj]);
        resetField("text")
    }, [submittedData, isOtherUser, routeUid])


    useHotkeys([
        // @ts-ignore
        ['Enter', handleSubmit(onSubmit)]

    ]);


    // ----------------------------------------------
    //Purpose: Every new message scroll to the bottom
    const viewport = useRef<HTMLDivElement>(null);
    const scrollToBottom = () => {
        //@ts-ignore
        viewport.current?.scrollTo({ top: viewport.current.scrollHeight, behavior: 'smooth' });
    }

    useEffect(() => {
        scrollToBottom()
    }, [submittedData, routeUid])
    //---------------------------------------------
    useEffect(() => {
        inputRef.current?.focus()
    }, [isOtherUser, routeUid])

    const mapChatData = useMemo(() =>
        submittedData && submittedData.map((value, index) => {
            if (value.uid === routeUid) {
                return (

                    <Flex key={index} mr={8} ml={value.isOtherUser ? 8 : 0} justify={value.isOtherUser ? 'normal' : "flex-end"} mb={8}>
                        <Paper shadow="xs" p="sm" withBorder sx={{ display: 'flex', alignItems: 'center' }} radius={8}>
                            <Text sx={{ wordWrap: 'break-word' }} color='dark' w={width / 3}>{value.text}</Text>
                        </Paper>
                    </Flex>
                )

            }
        })

        , [submittedData, width, routeUid])




    return (
        <>
            <ScrollArea type="never" bg={theme.colors.gray[8]} h={'50vh'} sx={{
                borderTopRightRadius: 10,
            }} viewportRef={viewport}
            >
                <Box mt={8}>
                    {/* <Text color='white'>{router.query.chatRoomPage}</Text> */}
                    {mapChatData}
                </Box>

            </ScrollArea>
            <Box p={10} bg={theme.colors.gray[6]}>
                <InputComponent
                    refProps={inputRef}
                    name={'text'}
                    control={control}
                    inputProps={{
                        placeholder: 'Comment....',
                        onKeyDown: getHotkeyHandler([
                            // @ts-ignore
                            ['Enter', handleSubmit(onSubmit)]
                        ]),
                        rightSection: <Flex>
                            <IconSend size="1rem" style={{ display: 'block', opacity: 0.5, color: theme.colors.gray[6] }} />
                        </Flex>
                    }} />
            </Box>

        </>
    )
}

export default ChatRoomDetail;