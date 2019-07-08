import axios from 'axios';
import store from '../store';
import { addExpensives, addExpensive } from '../actions/actions';

const url = "/expensives";

export default class ExpensiveService {
    
    getAllExpensives() {
        if (store.getState().expensives && store.getState().expensives.length !== 0) {
            return store.getState().expensives;
        } else {
            return axios.get(url).then((data) => {
                store.dispatch(addExpensives(data.data));
            });
        }
    }

    saveExpensive(expensive) {
        return axios.post(url, expensive).then((data) => {
            store.dispatch(addExpensive(data.data))
        }).catch(() => alert("Error en el servicio de guardado de un gasto"));
    }
}