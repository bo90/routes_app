import React from "react";
import { 
        BrowserRouter as Router,
        Route,
        Routes,
        Link 
    } from "react-router-dom";
import './App.css';

//компонент для страницы login
const Login: React.FC = () =>{
    return <h1>Логин</h1>
};

//компонент для страницы 404
const NotFound: React.FC = () => {
    return <h1>Страница не найдена</h1>
};

const Register: React.FC = () => {
    return <h1>Регистрация</h1>
};

const Home: React.FC = () => {
    return <>
        <div className="page">
            <h1>Добро пожаловать</h1>
        </div>
        </>;
};

const EduApp: React.FC = () => {
    return(
        <Router>
            <nav className="navbar">
                <ul className="navbar-links">
                    <li>
                        <Link to="/">Главная</Link>
                    </li>
                    <li>
                        <Link to="/login">Логин</Link>
                    </li>
                    <li>
                        <Link to="/register">Регистрация</Link>
                    </li>
                </ul>
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element = {<Register /> } />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    )
};

export default EduApp;