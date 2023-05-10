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
    Children: any
}

export const InputController = <T extends FormValues>({
    name,
    control,
    rules,
    defaultValue,
    inputProps,
    Children
}: InputComponentProps<T>) => {
    const { field: { value, onChange, onBlur }, fieldState: { invalid } } =
        useController<T>({ name, rules, defaultValue, control })

    return (
        <Children
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            name={name}
            {...inputProps}

        />

    )
}
