import { Reducer } from 'redux';
import { itemsReceived, addExpense, removeExpense } from '../actions/ExpensesActions';

export interface IExpensesState {
    items: Array<IItemState>;
}

export interface IItemState {
    id: number;
    amount: number;
    description: string;
}

const initialState: IExpensesState = {
    items: []
};

const expensesReducer: Reducer<IExpensesState> = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case itemsReceived.getType():
            return {
                ...state,
                items: action.payload
            }
        case addExpense.getType():
            return {
                ...state,
                items: [
                    ...state.items,
                    action.payload
                ]
            }
        case removeExpense.getType():
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

export const expensesSelector = (state: IExpensesState) => state.items;

export default expensesReducer;
