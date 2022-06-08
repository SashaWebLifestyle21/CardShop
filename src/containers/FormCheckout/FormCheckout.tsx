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
        error: true,
        dirty: false
    })
    const [lastName, setLastName] = useState({
        lastName: '',
        error: true,
        dirty: false
    })
    const [phone, setPhone] = useState({
        phone: 0,
        error: true,
        dirty: false
    })
    const [number, setNumber] = useState({
        number: 0,
        error: true,
        dirty: false
    })
    const [checkedShip, setCheckedShip] = useState(true)
    const [email, setEmail] = useState({
        email: '',
        error: true,
        dirty: false
    })
    const [country, setCountry] = useState({
        country: '',
        error: true,
        dirty: false
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
        error: true,
        dirty: false
    })
    const [cvc, setCVC] = useState({
        cvc: 0,
        error: true,
        dirty: false
    })

    const blurHandler = (e: any) => {
        switch (e.target.name) {
            case 'firstName':
                setFirstName({...firstName, dirty: true})
                break
            case 'lastName':
                setLastName({...lastName, dirty: true})
                break
            case 'email':
                setEmail({...email, dirty: true})
                break
            case 'phone':
                setPhone({...phone, dirty: true})
                break
            case 'country':
                setCountry({...country, dirty: true})
                break
            case 'number':
                setNumber({...number, dirty: true})
                break
            case 'expiry':
                setExpiry({...expiry, dirty: true})
                break
            case 'cvc':
                setCVC({...cvc, dirty: true})
                break
        }
    }

    const handleFirstName = useCallback((event) => {
        !validOnlyLetter(event.target.value)
            ? setFirstName({...firstName, firstName: event.target.value, error: true})
            : setFirstName({...firstName, firstName: event.target.value, error: false})
    },[firstName])

    const handleLastName = useCallback((event) => {
        !validOnlyLetter(event.target.value)
            ? setLastName({...lastName, lastName: event.target.value, error: true})
            : setLastName({...lastName, lastName: event.target.value, error: false})
    },[lastName])

    const handleEmail = useCallback((event) => {
        !validEmail(event.target.value)
            ? setEmail({...email, email: event.target.value, error: true})
            : setEmail({...email, email: event.target.value, error: false})
    },[email])

    const handlePhone = useCallback((event) => {
        !validPhone(event.target.value.toString())
            ? setPhone({...phone, phone: event.target.value, error: true})
            : setPhone({...phone, phone: event.target.value, error: false})
    },[phone])

    const handleCountry = useCallback((event) => {
        !validOnlyLetter(event.target.value)
            ? setCountry({...country, country: event.target.value, error: true})
            : setCountry({...country, country: event.target.value, error: false})
    },[country])

    const handleCity = useCallback((event) => {
        setCity({...city, city: event.target.value})
    },[city])

    const handleStreet = useCallback((event) => {
        setStreet({...street, street: event.target.value})
    },[street])

    const handleNumber = useCallback((event) => {
        !validNumberCreditCard(event.target.value.toString())
            ? setNumber({...number, number: event.target.value, error: true})
            : setNumber({...number, number: event.target.value, error: false})
    },[number])

    const handleCardholder = useCallback((event) => {
        setCardholder(event.target.value)
    },[])

    const handleExpiry = useCallback((event) => {
        !validExpiry(event.target.value)
            ? setExpiry({...expiry, expiry: event.target.value, error: true})
            : setExpiry({...expiry, expiry: event.target.value, error: false})
    },[expiry])

    const handleCVC = useCallback((event) => {
        !validCVC(event.target.value.toString())
            ? setCVC({...cvc, cvc: event.target.value, error: true})
            : setCVC({...cvc, cvc: event.target.value, error: false})
    },[cvc])

    const sendingData = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()

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
        } else {
            setFirstName({...firstName, dirty: true})
            setLastName({...lastName, dirty: true})
            setPhone({...phone, dirty: true})
            setEmail({...email, dirty: true})
            setCountry({...country, dirty: true})
            setExpiry({...expiry, dirty: true})
            setCVC({...cvc, dirty: true})
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
                value={firstName.firstName}
                placeholder={'Alexandr'}
                onChange={handleFirstName}
                onBlur={blurHandler}
                error={'firstname должно содержать только буквы'}
                displayError={firstName.error && firstName.dirty}
            />
            <FormGroup
                labelName={'lastName'}
                labelText={'Last Name'}
                inputName={'lastName'}
                inputType={'text'}
                value={lastName.lastName}
                placeholder={'Svetogor'}
                onChange={handleLastName}
                onBlur={blurHandler}
                error={'lastname должно содержать только буквы'}
                displayError={lastName.error && lastName.dirty}
            />
            <FormGroup
                labelName={'phone'}
                labelText={'Phone(+375)'}
                inputName={'phone'}
                inputType={'tel'}
                value={phone.phone}
                placeholder={'Введите последние 9 цифр'}
                onChange={handlePhone}
                onBlur={blurHandler}
                error={'введите последние 9 цифр'}
                displayError={phone.error && phone.dirty}
            />
            <FormGroup
                labelName={'email'}
                labelText={'Email'}
                inputName={'email'}
                inputType={'email'}
                value={email.email}
                placeholder={'sasha.svetogor@gmail.com'}
                onChange={handleEmail}
                onBlur={blurHandler}
                error={'неккоректный email'}
                displayError={email.error && email.dirty}
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
                value={country.country}
                placeholder={'Belarus'}
                onChange={handleCountry}
                onBlur={blurHandler}
                error={'country должно содержать только буквы'}
                displayError={country.error && country.dirty}
            />
            <FormGroup
                labelName={'city'}
                labelText={'City'}
                inputName={'city'}
                inputType={'text'}
                value={city.city}
                placeholder={'Minsk'}
                onChange={handleCity}
            />
            <FormGroup
                labelName={'street'}
                labelText={'Street'}
                inputName={'street'}
                inputType={'text'}
                value={street.street}
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
                    value={number.number}
                    onChange={handleNumber}
                    onBlur={blurHandler}
                    error={'неккоректно введены данные(16 цифр)'}
                    displayError={number.error && number.dirty}
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
                    value={expiry.expiry}
                    onChange={handleExpiry}
                    onBlur={blurHandler}
                    error={'неккоректно введены данные'}
                    displayError={expiry.error && expiry.dirty}
                />
                <FormGroup
                    labelName={'cvc'}
                    labelText={'CVC Code'}
                    inputName={'cvc'}
                    inputType={'number'}
                    placeholder={'123'}
                    onChange={handleCVC}
                    onBlur={blurHandler}
                    error={'неккоректно введены данные(3 цифры)'}
                    displayError={cvc.error && cvc.dirty}
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