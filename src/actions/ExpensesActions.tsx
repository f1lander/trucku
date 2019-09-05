import { createAction } from "redux-act";

export const itemsReceived = createAction<object>('ITEMS_RECEIVED');
export const getItems = createAction('GET_ITEMS');

export const addExpense = createAction<object>('ADD_EXPENSE');
export const removeExpense = createAction<number>('REMOVE_EXPENSE');
