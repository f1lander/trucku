import React, { useEffect } from 'react';
import 'bulma/css/bulma.min.css';
import { addExpense, removeExpense, getItems } from '../reducers/expenses';
import { connect } from 'react-redux';

function Table(props) {
    const { items } = props;

    const handleAddExpense = () => {
        debugger;
        const newExpense = {
            id: 4,
            amount: 20,
            description: 'Water 0'
        }

        props.addExpense(newExpense);
    };

    const handleRemoveExpense = (id) => {
        debugger;
        props.removeExpense(id);
    };

    useEffect(() => {
        props.getItems();
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

const mapStateToProps = state => ({
    items: state.items,
});

const mapDispatchToProps = {
    addExpense,
    removeExpense,
    getItems
}

export default connect(mapStateToProps, mapDispatchToProps)(Table);
