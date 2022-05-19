import React from 'react';
import styled from "styled-components";

interface ILabel {
    children: React.ReactNode
    nameForInput: string
}

export const LabelWrapper = styled.label`
`

const Label = ({ children, nameForInput }: ILabel) => {
    return (
        <LabelWrapper htmlFor={nameForInput}>{children}</LabelWrapper>
    );
};

export default Label;