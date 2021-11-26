import React from 'react';
import { Outlet, Link } from "react-router-dom";

import "./index.css";

export default function Header() {
    return(
        <header>
            <div className="header-content">
                <Link to="/" className="link">            
                    <a>inicio</a>
                </Link>

                <Link to="/courses" className="link">
                    <a>cursos</a>
                </Link>

                <Link to="/cadastro/novo" className="link">
                    <a>cadastrar</a>
                </Link>
            </div>
        </header>
    )
}
