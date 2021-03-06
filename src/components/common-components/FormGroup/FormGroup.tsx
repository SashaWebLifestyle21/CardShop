import React from 'react';
import { FlexBox } from "../FlexBox/FlexBox";
import Label from "../FormComponents/Label";
import Input, { TInputTypes } from "../FormComponents/Input";
import { Text } from "../Text/Text";
import { COLOR } from '../../../constants/color-constants';
import { Box } from "../Box/Box";

interface IFormGroup {
    labelName: string
    labelText: string
    inputName: string
    inputType: TInputTypes
    value?: string | number
    onChange?: (e: React.FormEvent<HTMLInputElement>) => void
    onBlur?: (e: React.FormEvent<HTMLInputElement>) => void
    borderColor?: string
    placeholder?: string
    error?: string
    displayError?: boolean
}

const FormGroup = ({ labelName, labelText, inputType, inputName, onChange, borderColor, placeholder, error, displayError, onBlur, value }: IFormGroup) => {
    return (
        <Box marginBottom={16}>
            <FlexBox columnGap={18} justifyContent={'space-between'}>
                <Label nameForInput={labelName}>{labelText}</Label>
                <Input
                    type={inputType}
                    name={inputName}
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                    borderColor={borderColor}
                    placeholder={placeholder}
                />
            </FlexBox>
            <Text
                size={12}
                color={COLOR.secondary}
                display={displayError ? 'block' : 'none'}
            >
                {error}
            </Text>
        </Box>
    );
};

export default React.memo(FormGroup);