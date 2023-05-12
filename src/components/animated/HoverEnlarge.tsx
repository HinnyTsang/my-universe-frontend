import { useSpring, animated } from '@react-spring/web';

export const HoverEnlarge = ({ children }: { children: React.ReactNode }) => {
    const [props, set] = useSpring(() => ({
        scale: 1,
        config: { mass: 1, tension: 170, friction: 12 },
    }));
    return (
        <animated.div
            onMouseEnter={() => set({ scale: 1.05 })}
            onMouseLeave={() => set({ scale: 1 })}
            style={{
                // display: 'inline-block',
                transform: props.scale.to((s) => `scale(${s})`),
            }}
        >
            {children}

        </animated.div>

    )
}