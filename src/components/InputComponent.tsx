import * as React from "react";
import { useForm, useController, UseControllerProps } from "react-hook-form";
import { IconBrandTwitter, IconAlertCircle } from '@tabler/icons-react';
import { Input, Sx, Tooltip } from '@mantine/core';
import type { InputProps, TextInputProps, InputSharedProps } from '@mantine/core';
// import { FormValues } from "@/types/formType";

export type FormValues = {
    [key: string]: any;
};

interface InputComponentProps<T extends FormValues> extends UseControllerProps<T> {
    inputProps?: InputProps & TextInputProps & InputSharedProps
    refProps?: React.RefObject<HTMLInputElement>;
}

export const InputComponent = <T extends FormValues>({
    name,
    control,
    rules,
    defaultValue,
    inputProps,
    refProps
}: InputComponentProps<T>) => {
    const { field: { value, onChange, onBlur }, fieldState: { invalid } } =
        useController<T>({ name, rules, defaultValue, control })

    return (
        <Input
            ref={refProps}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            name={name}
            {...inputProps}

            sx={{
            }}
            radius="xl"
            size='sm'
            variant='filled'
            styles={(theme) => ({
                input: {
                    '&:focus-within': {
                        borderColor: theme.colors.gray[0]
                    },

                },
            })}
        />

    )
}
