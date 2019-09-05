import React, { useEffect } from 'react';
import 'bulma/css/bulma.min.css';
import { addExpense, removeExpense, getItems } from '../actions/ExpensesActions';
import { IExpensesState, expensesSelector, IItemState } from '../reducers/ExpensesReducer';
import { connect } from 'react-redux';

interface ITableProps {
    items: Array<IItemState>;

    addExpenseAction: typeof addExpense; 
    removeExpenseAction: typeof removeExpense;
    getItemsAction: typeof getItems;
}

const Table: React.FC<ITableProps> = ({
    items,
    addExpenseAction,
    removeExpenseAction,
    getItemsAction
}) => {
    const handleAddExpense = () => {
        debugger;
        const newExpense = {
            id: 4,
            amount: 20,
            description: 'Water 0'
        }

        addExpenseAction(newExpense);
    };

    const handleRemoveExpense = (id: number) => {
        debugger;
        removeExpenseAction(id);
    };

    useEffect(() => {
        getItemsAction();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <button className="button is-primary" onClick={handleAddExpense}>Add Expense</button>
            <table className="table">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Amount</th>
                        <th>Description</th>
                        <th>action</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.amount}</td>
                            <td>{item.description}</td>
                            <td>
                                <button onClick={() => { handleRemoveExpense(item.id) }} className="button is-danger">x</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

const mapStateToProps = (state: IExpensesState) => ({
    items: expensesSelector(state),
});

const mapDispatchToProps = {
    addExpenseAction: addExpense,
    removeExpenseAction: removeExpense,
    getItemsAction: getItems
}

export default connect(mapStateToProps, mapDispatchToProps)(Table);
