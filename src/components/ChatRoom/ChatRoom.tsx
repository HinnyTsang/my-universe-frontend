import { Box, Flex, Paper, ScrollArea, Text, useMantineTheme } from '@mantine/core'
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { InputComponent } from '../InputComponent'
import { IconSend } from '@tabler/icons-react'
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { getHotkeyHandler, useHotkeys } from '@mantine/hooks';
import { useUserStore } from '@/hooks/useUserSore';


const schema = yup.object({
    text: yup.string().required(),
}).required();
type FormData = yup.InferType<typeof schema>;

interface ChatData {
    text: string,
    isOtherUser: boolean
}
export interface ChatRoomProps {
    width: number
}



const ChatRoom = ({ width }: ChatRoomProps) => {
    const { isOtherUser } = useUserStore()
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
            text: data.text,
            isOtherUser: isOtherUser
        }

        console.log(obj);

        setSubmittedData([...submittedData, obj]);
        resetField("text")
    }, [submittedData, isOtherUser])



    useHotkeys([
        // @ts-ignore
        ['Enter', handleSubmit(onSubmit)]

    ]);

    // ----------------------------------------------
    //Purpose: Every new message scroll to the bottom
    const viewport = useRef<HTMLDivElement>(null);
    const scrollToBottom = () => {
        //@ts-ignore
        viewport.current.scrollTo({ top: viewport.current.scrollHeight, behavior: 'smooth' });
    }

    useEffect(() => {
        scrollToBottom()
    }, [submittedData])
    //---------------------------------------------
    useEffect(() => {
        inputRef.current?.focus()
    }, [isOtherUser])

    const mapChatData = useMemo(() =>
        submittedData && submittedData.map((value, index) => {
            return (
                <Flex key={index} mr={8} ml={value.isOtherUser ? 8 : 0} justify={value.isOtherUser ? 'normal' : "flex-end"} mb={8}>
                    <Paper shadow="xs" p="sm" withBorder sx={{ display: 'flex', alignItems: 'center' }} radius={8}>
                        <Text sx={{ wordWrap: 'break-word' }} color='dark' w={width / 3}>{value.text}</Text>
                    </Paper>
                </Flex>
            )
        })

        , [submittedData, width])


    return (
        <>
            <ScrollArea type="never" bg={theme.colors.gray[8]} h={'50vh'} sx={{
                borderTopRightRadius: 10,
            }} viewportRef={viewport}
            >
                <>
                    {mapChatData}
                </>

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

export default ChatRoom