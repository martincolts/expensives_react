import Axios from "axios";
import store from "../store";
import { addCategories } from "../actions/actions";

const url = "/categories"

export default class CategoryService {
    
    getAllCategories() {
        Axios.get(url).then ((data) => {
            store.dispatch(addCategories(data.data));
        });
    }
}