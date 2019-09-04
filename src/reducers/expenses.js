const initialState = {
    items: []
};

export const itemsReceived = value => ({
    type: 'ITEMS_RECEIVED',
    payload: value
});

export const getItems = value => ({
    type: 'GET_ITEMS',
    payload: value
});

export const addExpense = value => ({
    type: 'ADD_EXPENSE',
    payload: value
});

export const removeExpense = value => ({
    type: 'REMOVE_EXPENSE',
    payload: value
});

// react-act

export default (state = initialState, action) => {
    switch (action.type) {
        case 'ITEMS_RECEIVED':
            return {
                ...state,
                items: action.payload
            }
        case 'ADD_EXPENSE':
            return {
                ...state,
                items: [
                    ...state.items,
                    action.payload
                ]
            }
        case 'REMOVE_EXPENSE':
            debugger;
            return {
                ...state,
                items: [
                    ...state.items.filter(item => item.id !== action.payload),
                ]
            }
        default:
            return state;
    }
}