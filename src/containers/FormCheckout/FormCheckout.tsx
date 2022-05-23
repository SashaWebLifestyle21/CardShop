import React, { useCallback, useState } from 'react';
import { Box } from "../../components/common-components/Box/Box";
import FormGroup from "../../components/common-components/FormGroup/FormGroup";
import { Text } from "../../components/common-components/Text/Text";
import Radio from "../../components/common-components/FormComponents/Radio";
import { Form } from '../../components/common-components/FormComponents/Form';
import { Button } from '../../components/common-components/Button/Button';
import { COLOR } from "../../constants/color-constants";
import {
    validCVC,
    validEmail, validExpiry,
    validNumberCreditCard,
    validOnlyLetter,
    validPhone
} from "../../api/validation/validation";
import { fakeAPI } from "../../api/api-utils/api-utils";

const FormCheckout = () => {
    const [firstName, setFirstName] = useState({
        firstName: '',
        error: true
    })
    const [lastName, setLastName] = useState({
        lastName: '',
        error: true
    })
    const [phone, setPhone] = useState({
        phone: 0,
        error: true
    })
    const [number, setNumber] = useState({
        number: 0,
        error: true
    })
    const [checkedShip, setCheckedShip] = useState(true)
    const [email, setEmail] = useState({
        email: '',
        error: true
    })
    const [country, setCountry] = useState({
        country: '',
        error: true
    })
    const [city, setCity] = useState({
        city: '',
        error: true
    })
    const [street, setStreet] = useState({
        street: '',
        error: true
    })
    const [cardholder, setCardholder] = useState('')
    const [expiry, setExpiry] = useState({
        expiry: '',
        error: true
    })
    const [cvc, setCVC] = useState({
        cvc: 0,
        error: true
    })

    const handleFirstName = useCallback((event) => {
        setFirstName({...firstName, firstName: event.target.value})
    },[firstName])

    const handleLastName = useCallback((event) => {
        setLastName({...lastName, lastName: event.target.value})
    },[lastName])

    const handleEmail = useCallback((event) => {
        setEmail({...email, email: event.target.value})
    },[email])

    const handlePhone = useCallback((event) => {
        setPhone({...phone, phone: event.target.value})
    },[phone])

    const handleCountry = useCallback((event) => {
        setCountry({...country, country: event.target.value})
    },[country])

    const handleCity = useCallback((event) => {
        setCity({...city, city: event.target.value})
    },[city])

    const handleStreet = useCallback((event) => {
        setStreet({...street, street: event.target.value})
    },[street])

    const handleNumber = useCallback((event) => {
        setNumber({...number, number: event.target.value})
    },[number])

    const handleCardholder = useCallback((event) => {
        setCardholder(event.target.value)
    },[])

    const handleExpiry = useCallback((event) => {
        setExpiry({...expiry, expiry: event.target.value})
    },[expiry])

    const handleCVC = useCallback((event) => {
        setCVC({...cvc, cvc: event.target.value})
    },[cvc])

    const sendingData = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()

        !validOnlyLetter(firstName.firstName)
            ? setFirstName({...firstName, error: true})
            : setFirstName({...firstName, error: false})

        !validOnlyLetter(lastName.lastName)
            ? setLastName({...lastName, error: true})
            : setLastName({...lastName, error: false})

        !validPhone(phone.phone.toString())
            ? setPhone({...phone, error: true})
            : setPhone({...phone, error: false})

        !validEmail(email.email)
            ? setEmail({...email, error: true})
            : setEmail({...email, error: false})

        !validNumberCreditCard(number.number.toString())
            ? setNumber({...number, error: true})
            : setNumber({...number, error: false})

        !validOnlyLetter(country.country)
            ? setCountry({...country, error: true})
            : setCountry({...country, error: false})

        !validExpiry(expiry.expiry)
            ? setExpiry({...expiry, error: true})
            : setExpiry({...expiry, error: false})

        !validCVC(cvc.cvc.toString())
            ? setCVC({...cvc, error: true})
            : setCVC({...cvc, error: false})

        if(!firstName.error && !lastName.error && !phone.error && !email.error && !country.error && !expiry.error && !cvc.error) {
            fakeAPI({
                firstName: firstName.firstName,
                lastName: lastName.lastName,
                phone: phone.phone,
                email: email.email,
                country: country.country,
                street: street.street,
                city: city.city,
                number: number.number,
                cardHolder: cardholder,
                expiry: expiry.expiry,
                cvc: cvc.cvc
            })
        }
    }
    return (
        <Form>
        <Box width={411} marginAuto>
            <Text size={24} marginBottom={24}>Personal information</Text>
            <FormGroup
                labelName={'firstName'}
                labelText={'First Name'}
                inputName={'firstName'}
                inputType={'text'}
                placeholder={'Alexandr'}
                onChange={handleFirstName}
                error={'firstname должно содержать только буквы'}
                displayError={firstName.error}
            />
            <FormGroup
                labelName={'lastName'}
                labelText={'Last Name'}
                inputName={'lastName'}
                inputType={'text'}
                placeholder={'Svetogor'}
                onChange={handleLastName}
                error={'lastname должно содержать только буквы'}
                displayError={lastName.error}
            />
            <FormGroup
                labelName={'phone'}
                labelText={'Phone(+375)'}
                inputName={'phone'}
                inputType={'tel'}
                placeholder={'Введите последние 9 цифр'}
                onChange={handlePhone}
                error={'введите последние 9 цифр'}
                displayError={phone.error}
            />
            <FormGroup
                labelName={'email'}
                labelText={'Email'}
                inputName={'email'}
                inputType={'email'}
                placeholder={'sasha.svetogor@gmail.com'}
                onChange={handleEmail}
                error={'неккоректный email'}
                displayError={email.error}
            />
            <Text size={24} marginBottom={24}>Shipping</Text>
            <Radio name={'shipping'} onChange={() => setCheckedShip(!checkedShip)} checked={checkedShip}>Next day delivery</Radio>
            <Radio name={'shipping'} onChange={() => setCheckedShip(!checkedShip)}>Pick up in-store</Radio>
            <Text size={24} marginTop={24} marginBottom={24}>Address</Text>
            <FormGroup
                labelName={'country'}
                labelText={'Country'}
                inputName={'country'}
                inputType={'text'}
                placeholder={'Belarus'}
                onChange={handleCountry}
                error={'country должно содержать только буквы'}
                displayError={country.error}
            />
            <FormGroup
                labelName={'city'}
                labelText={'City'}
                inputName={'city'}
                inputType={'text'}
                placeholder={'Minsk'}
                onChange={handleCity}
            />
            <FormGroup
                labelName={'street'}
                labelText={'Street'}
                inputName={'street'}
                inputType={'text'}
                placeholder={'Geroev 120 divizii'}
                onChange={handleStreet}
            />
            <Text size={24} marginBottom={24}>Payment details</Text>
            <Radio name={'payment'}>Credit card</Radio>
            <Radio name={'payment'}>PayPal</Radio>
                <FormGroup
                    labelName={'number'}
                    labelText={'Number'}
                    inputName={'number'}
                    inputType={'number'}
                    onChange={handleNumber}
                    error={'неккоректно введены данные(16 цифр)'}
                    displayError={number.error}
                />
                <FormGroup
                    labelName={'cardholder'}
                    labelText={'Card Holder'}
                    inputName={'cardholder'}
                    inputType={'text'}
                    onChange={handleCardholder}
                />
                <FormGroup
                    labelName={'expiry'}
                    labelText={'Expiry Date'}
                    inputName={'expiry'}
                    inputType={'date'}
                    onChange={handleExpiry}
                    error={'неккоректно введены данные'}
                    displayError={expiry.error}
                />
                <FormGroup
                    labelName={'cvc'}
                    labelText={'CVC Code'}
                    inputName={'cvc'}
                    inputType={'number'}
                    placeholder={'123'}
                    onChange={handleCVC}
                    error={'неккоректно введены данные(3 цифры)'}
                    displayError={cvc.error}
                />
            <Button
                onClick={sendingData}
                prl={140}
                color={COLOR.white}
                backgroundColor={COLOR.primary}
                fontSize={18}
                borderColor={COLOR.primary}
                marginBottom={64}
            >
                Complete
            </Button>
        </Box>
        </Form>
    );
};

export default React.memo(FormCheckout);