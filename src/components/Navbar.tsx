/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';
import Table from './Table';

const NavBar: React.FC = () => {

    return (
        <Router>
            <div className="container">
                <nav className="navbar" role="navigation" aria-label="main navigation">
                    <div className="navbar-brand">
                        <a className="navbar-item" href="https://bulma.io">
                            <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
                        </a>

                        <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                        </a>

                        <div id="navbarBasicExample" className="navbar-menu">
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
                        </div>
                    </div>
                </nav>

                <Route path="/table" component={Table}/>
            </div>
        </Router>
    );

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
