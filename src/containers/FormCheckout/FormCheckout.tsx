import React, {useState} from 'react';
import { Box } from "../../components/common-components/Box/Box";
import FormGroup from "../../components/common-components/FormGroup/FormGroup";
import { Text } from "../../components/common-components/Text/Text";
import Radio from "../../components/common-components/FormComponents/Radio";

const FormCheckout = () => {

    const [firstName, setFirstName] = useState('')
    const [number, setNumber] = useState(0)
    return (
        <Box width={411} marginAuto>
            <Text size={24} marginBottom={24}>Personal information</Text>
            <FormGroup
                labelName={'firstName'}
                labelText={'First Name'}
                inputName={'firstName'}
                inputType={'text'}
                onChange={e => setFirstName(e.target.value)

            }
            />
            <FormGroup
                labelName={'lastName'}
                labelText={'Last Name'}
                inputName={'lastName'}
                inputType={'text'}
            />
            <FormGroup
                labelName={'phone'}
                labelText={'Phone'}
                inputName={'phone'}
                inputType={'tel'}
            />
            <FormGroup
                labelName={'email'}
                labelText={'Email'}
                inputName={'email'}
                inputType={'email'}
            />
            <Text size={24} marginBottom={24}>Shipping</Text>
            <Radio name={'shipping'}>Next day delivery</Radio>
            <Radio name={'shipping'}>Pick up in-store</Radio>
            <Text size={24} marginTop={24} marginBottom={24}>Address</Text>
            <FormGroup
                labelName={'country'}
                labelText={'Country'}
                inputName={'country'}
                inputType={'text'}
            />
            <FormGroup
                labelName={'city'}
                labelText={'City'}
                inputName={'city'}
                inputType={'text'}
            />
            <FormGroup
                labelName={'street'}
                labelText={'Street'}
                inputName={'street'}
                inputType={'text'}
            />
            <Text size={24} marginBottom={24}>Payment details</Text>
            <Radio name={'payment'}>Credit card</Radio>
            <Radio name={'payment'}>PayPal</Radio>
                <FormGroup
                    labelName={'number'}
                    labelText={'Number'}
                    inputName={'number'}
                    inputType={'number'}
                    onChange={e => setNumber(e.target.value)}
                />
                <FormGroup
                    labelName={'cardholder'}
                    labelText={'Card Holder'}
                    inputName={'cardholder'}
                    inputType={'text'}
                />
                <FormGroup
                    labelName={'expiry'}
                    labelText={'Expiry Date'}
                    inputName={'expiry'}
                    inputType={'date'}
                />
                <FormGroup
                    labelName={'cvc'}
                    labelText={'CVC Code'}
                    inputName={'cvc'}
                    inputType={'number'}
                />
        </Box>
    );
};

export default FormCheckout;