import { AppShell, Navbar, Header } from '@mantine/core';
import { NavBarTemp } from '@/navbar/NavBarTemp'
import { Box, Button, Center, Divider, Flex, Paper, Textarea, Text, useMantineTheme, ScrollArea, Tooltip, Stack, Input, Grid } from '@mantine/core'
import { getHotkeyHandler, useElementSize, useHotkeys, useScrollIntoView, useWindowScroll } from '@mantine/hooks'
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { InputComponent } from '@/components/InputComponent'
import { IconAlertCircle, IconSend } from '@tabler/icons-react'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { InputController } from '@/controllers/InputController'
import { log } from 'console'


const schema = yup.object({
    text: yup.string().required(),
}).required();
type FormData = yup.InferType<typeof schema>;
export default function Layout() {
    const { ref, width, height } = useElementSize();

    const theme = useMantineTheme();

    const viewport = useRef<HTMLDivElement>(null);
    const scrollToBottom = () => {
        //@ts-ignore
        // viewport.current.scrollTo({ top: viewport.current.scrollHeight, behavior: 'smooth' });
    }
    const [scrollPosition, onScrollPositionChange] = useState({ x: 0, y: 0 });
    const [submittedData, setSubmittedData] = useState<FormData[]>([]);
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
        const obj = {
            text: data.text
        }
        console.log(obj);

        setSubmittedData([...submittedData, obj]);
        handleReset()
    }, [submittedData])


    useHotkeys([
        // @ts-ignore
        ['Enter', handleSubmit(onSubmit)]

    ]);

    useEffect(() => {
        scrollToBottom()
    }, [submittedData])

    return (
        <AppShell
            padding="md"
            navbar={<Navbar width={{ base: 300 }} height={'100vh'} p="xs">
                {/* Navbar content */}
            </Navbar>}
            header={<Header height={60} p="xs">{


            }</Header>}
            styles={(theme) => ({
                main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
            })}
        >
            {/* Your application here */}

        </AppShell>
    );
}