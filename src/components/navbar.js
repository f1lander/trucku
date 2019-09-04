/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import 'bulma/css/bulma.min.css';
function NavBar(props) {

    return (
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

                        <a to="/" class="navbar-item">
                            Dashboard
                        </a>
                        <Link>
                            <a to="/table" class="navbar-item">
                                Table
                        </a>
                        </Link>
                        <a class="navbar-item">
                            Clientes
                        </a>
                        <a to="references-guides" class="navbar-item">
                            Guias de Remisión
                        </a>

                        <div class="navbar-item has-dropdown is-hoverable">
                            <a class="navbar-link">
                                More
                            </a>

                            <div class="navbar-dropdown">
                                <a class="navbar-item">
                                    About
                                </a>
                                <a class="navbar-item">
                                    Jobs
                                </a>
                                <a class="navbar-item">
                                    Contact
                                </a>
                                <hr class="navbar-divider" />
                                <a class="navbar-item">
                                    Report an issue
                                    </a>

                            </div>
                        </div>
                    </div>
                    <div class="navbar-end">
                        <div class="navbar-item">
                            <div class="buttons">
                                <a class="button is-primary">
                                    <strong>Sign up</strong>
                                </a>
                                <a class="button is-light">
                                    Log in
                            </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
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