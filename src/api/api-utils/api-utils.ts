import axios from "axios";
import { IAxiosResponse } from "../../redux/sagas/cardsSagas/cardsSagas";
import { HREF_API } from "../api-constants/constants";

export const getData = () =>
    axios
        .get<IAxiosResponse[]>(HREF_API)


interface IFakeObj {
    firstName: string,
    lastName: string,
    phone: number,
    email: string,
    country: string,
    city: string,
    street: string,
    number: number,
    cardHolder: string,
    expiry: string,
    cvc: number
}

export const fakeAPI = (obj: IFakeObj) => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            ...obj
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then(response => response.json())
        .then(json => {
            console.log('response: ' + JSON.stringify(json));
        })
}