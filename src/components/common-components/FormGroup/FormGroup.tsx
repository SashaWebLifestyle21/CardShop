import React from 'react';
import { FlexBox } from "../FlexBox/FlexBox";
import Label from "../FormComponents/Label";
import Input, { TInputTypes } from "../FormComponents/Input";

interface IFormGroup {
    labelName: string
    labelText: string
    inputName: string
    inputType: TInputTypes
    onChange?: (e: any) => void
}

const FormGroup = ({ labelName, labelText, inputType, inputName, onChange }: IFormGroup) => {
    return (
        <FlexBox columnGap={18} justifyContent={'space-between'} marginBottom={16}>
            <Label nameForInput={labelName}>{labelText}</Label>
            <Input type={inputType} name={inputName} onChange={onChange}/>
        </FlexBox>
    );
};

export default FormGroup;