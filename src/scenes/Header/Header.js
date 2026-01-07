import {Link} from "react-router-dom";
import {routes} from "../../routes";
import React from "react";
import s from './Header.module.css';


export const Header = () => (
    <header className={s.header}>
        <div className={s.div1}>
            <nav className={s.div1}>
                <ul className={s["main-nav"]}>
                    <li>
                        <Link to={routes.home}>Home</Link>
                    </li>
                    <li>
                        <Link to={routes.admin}>Admin</Link>
                    </li>

                </ul>
            </nav>
        </div>
    </header>
)
