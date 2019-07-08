
export function addExpensives (expensives) {
    return {type: "ADD_EXPENSIVES", expensives};
}

export function addExpensive (expensive) {
    return {type: "ADD_EXPENSIVE", expensive};
}

export const addCategories = categories => {
    return {type: "ADD_CATEGORIES", categories}
}