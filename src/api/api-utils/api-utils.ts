import axios from "axios";
import {IAxiosResponse} from "../../redux/sagas/cardsSagas/cardsSagas";
import { HREF_API } from "../api-constants/constants";

export const getData = () =>
    axios
        .get<IAxiosResponse[]>(HREF_API)