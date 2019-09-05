/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';
import Table from './Table';

function NavBar(props) {

    return (
        <Router>
            <div className="container">
                <nav class="navbar" role="navigation" aria-label="main navigation">
                    <div class="navbar-brand">
                        <a class="navbar-item" href="https://bulma.io">
                            <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
                        </a>

                        <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                        </a>

                        <div id="navbarBasicExample" class="navbar-menu">
                            <div class="navbar-start">
                                <Link to="/" class="navbar-item">
                                    Dashboard
                                </Link>
                                <Link to="/table" class="navbar-item">
                                    Table
                                </Link>
                                <Link class="navbar-item">
                                    Clientes
                                </Link>
                                <Link to="references-guides" class="navbar-item">
                                    Guias de Remisión
                                </Link>

                                <div class="navbar-item has-dropdown is-hoverable">
                                    <Link class="navbar-link">
                                        More
                                    </Link>

                                    <div class="navbar-dropdown">
                                        <Link class="navbar-item">
                                            About
                                        </Link>
                                        <Link class="navbar-item">
                                            Jobs
                                        </Link>
                                        <Link class="navbar-item">
                                            Contact
                                        </Link>
                                        <hr class="navbar-divider" />
                                        <Link class="navbar-item">
                                            Report an issue
                                            </Link>

                                    </div>
                                </div>
                            </div>
                            <div class="navbar-end">
                                <div class="navbar-item">
                                    <div class="buttons">
                                        <Link class="button is-primary">
                                            <strong>Sign up</strong>
                                        </Link>
                                        <Link class="button is-light">
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
