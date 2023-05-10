import { NavBarTemp } from '@/navbar/NavBarTemp'
import { useMantineTheme } from '@mantine/core';
import { useElementSize } from '@mantine/hooks';
import React, { useEffect, useRef, useState } from 'react'

const testRender = () => {
    const { ref: chatBox, width, height } = useElementSize();
    const viewport = useRef<HTMLDivElement>(null);
    const scrollToBottom = () => {
        // @ts-ignore
        viewport.current.scrollTo({ top: viewport.current.scrollHeight, behavior: 'smooth' });
    }
    const [scrollPosition, onScrollPositionChange] = useState({ x: 0, y: 0 });

    const theme = useMantineTheme();
    const [state, setState] = useState('')
    console.log(123);
    useEffect(() => {

    }, [])

    return (
        <>
            <NavBarTemp />
            <div>testRender</div>
        </>
    )
}

export default testRender
