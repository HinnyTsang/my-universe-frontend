import { NavBarTemp } from '@/navbar/NavBarTemp'
import { Box, Button, Center, Divider, Flex, Paper, Textarea, Text, useMantineTheme, ScrollArea, Tooltip, Stack, Input, Grid, Navbar, Switch } from '@mantine/core'
import { getHotkeyHandler, useElementSize, useHotkeys, useScrollIntoView, useWindowScroll } from '@mantine/hooks'
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { InputComponent } from '@/components/InputComponent'
import { IconAlertCircle, IconSend } from '@tabler/icons-react'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";



const schema = yup.object({
    text: yup.string().required(),
}).required();
type FormData = yup.InferType<typeof schema>;

interface ChatData {
    text: string,
    isOtherUser: boolean
}

const Test = () => {
    const { ref, width, height } = useElementSize();
    const [isOtherUser, setIsOtherUser] = useState(false)
    const theme = useMantineTheme();



    const [submittedData, setSubmittedData] = useState<ChatData[]>([]);
    const { handleSubmit, control, resetField } = useForm<FormData>({
        resolver: yupResolver(schema),
        defaultValues: {
            text: "",
        },
    });


    const handleReset = useCallback(() =>
        resetField("text"), []
    )

    const onSubmit = useCallback((data: FormData) => {
        const obj: ChatData = {
            text: data.text,
            isOtherUser: isOtherUser
        }

        console.log(obj);

        setSubmittedData([...submittedData, obj]);
        handleReset()
    }, [submittedData, isOtherUser])


    const handlerSwitchUser = useCallback(() => {
        setIsOtherUser(!isOtherUser)
    }, [isOtherUser])


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



    return (
        <>
            <NavBarTemp />
            <Divider mb={10} />
            <Center>
                <Switch
                    label="Act as other user"
                    mb={20}
                    onChange={handlerSwitchUser}
                />

            </Center>

            <Center display={'flex'} >
                <Navbar height={height} p="xs" width={{ base: '40vw' }} bg={theme.colors.gray[4]}
                    sx={{ borderTopLeftRadius: 10 }}
                >
                    <Navbar.Section mt="xs" >
                        <Stack align='center'>
                            <Box>Contact List</Box>

                        </Stack>
                    </Navbar.Section>

                    <Navbar.Section grow component={ScrollArea} mx="-xs" px="xs" type='never'>
                        <Stack align='center'>
                            {/* {
                                submittedData.map((value, index) => {
                                    return (
                                        <Paper key={index} w={'35vw'} shadow="xs" p="sm" withBorder sx={{ display: 'flex', alignItems: 'center' }} radius={8}>
                                            <Text sx={{ wordWrap: 'break-word' }} color='dark'>{value.text}</Text>
                                        </Paper>
                                    )
                                })
                            } */}
                        </Stack>
                    </Navbar.Section>

                    <Navbar.Section>{/* Footer with user */}</Navbar.Section>
                </Navbar>

                <Box w={'40vw'} ref={ref}>
                    <ScrollArea type="never" bg={theme.colors.gray[8]} h={'50vh'} sx={{
                        borderTopRightRadius: 10,
                    }}
                        viewportRef={viewport}
                    >
                        <>
                            {
                                submittedData.map((value, index) => {
                                    return (
                                        <Flex key={index} mr={8} ml={value.isOtherUser ? 8 : 0} justify={value.isOtherUser ? 'normal' : "flex-end"} mb={8}>
                                            <Paper shadow="xs" p="sm" withBorder sx={{ display: 'flex', alignItems: 'center' }} radius={8}>
                                                <Text sx={{ wordWrap: 'break-word' }} color='dark' w={width / 3}>{value.text}</Text>
                                            </Paper>
                                        </Flex>
                                    )
                                })
                            }
                        </>

                    </ScrollArea>
                    <Box p={10} bg={theme.colors.gray[6]}>
                        <InputComponent
                            name={'text'}
                            control={control}
                            inputProps={{
                                placeholder: 'Comment....',
                                onKeyDown: getHotkeyHandler([
                                    // @ts-ignore
                                    ['Enter', handleSubmit(onSubmit)]
                                ]),
                                rightSection:
                                    <Flex >
                                        <IconSend size="1rem" style={{ display: 'block', opacity: 0.5, color: theme.colors.gray[6] }} />
                                    </Flex>


                            }}
                        />
                    </Box>
                </Box>
            </Center >


        </>
    )

}

export default Test;