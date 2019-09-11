/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';
import { Container, Navbar } from 'react-bulma-components';

import Table from './Table';

interface INavbarState {
    open?: boolean;
}

class NavBar extends React.Component<INavbarState> {
    state = {
        open: false
    }

    render() {
        const { open } = this.state;

        return (
            <Router>
                <Container>
                    <Navbar active={open} className="navbar" role="navigation" aria-label="main navigation">
                        <Navbar.Brand>
                            <Navbar.Item href="https://bulma.io">
                                <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
                            </Navbar.Item>

                            <Navbar.Burger
                                active={open}
                                onClick={() => this.setState((state: INavbarState) => ({open: !state.open}))}
                            />
                        </Navbar.Brand>

                            <Navbar.Menu>
                                <div className="navbar-start">
                                    <Link to="/" className="navbar-item">
                                        Dashboard
                                    </Link>
                                    <Link to="/table" className="navbar-item">
                                        Table
                                    </Link>
                                    <Link to="/clients" className="navbar-item">
                                        Clientes
                                    </Link>
                                    <Link to="references-guides" className="navbar-item">
                                        Guias de Remisión
                                    </Link>

                                    <div className="navbar-item has-dropdown is-hoverable">
                                        <Link to="/#" className="navbar-link">
                                            More
                                        </Link>

                                        <div className="navbar-dropdown">
                                            <Link to="/#" className="navbar-item">
                                                About
                                            </Link>
                                            <Link to="/#" className="navbar-item">
                                                Jobs
                                            </Link>
                                            <Link to="/#" className="navbar-item">
                                                Contact
                                            </Link>
                                            <hr className="navbar-divider" />
                                            <Link to="/#" className="navbar-item">
                                                Report an issue
                                                </Link>

                                        </div>
                                    </div>
                                </div>
                                <div className="navbar-end">
                                    <div className="navbar-item">
                                        <div className="buttons">
                                            <Link to="/#" className="button is-primary">
                                                <strong>Sign up</strong>
                                            </Link>
                                            <Link to="/#" className="button is-light">
                                                Log in
                                        </Link>
                                        </div>
                                    </div>
                                </div>
                            </Navbar.Menu>
                    </Navbar>

                    <Route path="/table" component={Table}/>
                </Container>
            </Router>
        );
    }

}
// const mapStateToProps = state => ({
//     items: state.items,
// });

// const mapDispatchToProps = {
//     addExpense,
//     removeExpense,
//     getItems
// }



export default NavBar
