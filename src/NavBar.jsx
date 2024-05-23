import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import Education from "./Pages/Classification";
import Home from "./Pages/Home";
import Product from "./Pages/Product";

export default function NavBar() {
    return (
        <>
            <BrowserRouter>

                <header className="header">
                    <div className="container2">
                        <a href="#" className="brand">
                            <div className="logo" />
                            <span className="brand-name">products</span>
                        </a>
                        <nav className="nav">
                            <p className="nav-link" ><Link to={''}>Home</Link></p>
                            <p className="nav-link" ><Link to={'about'}>About</Link></p>
                            <p className="nav-link" ><Link to={'education'}>Classification</Link></p>
                            <p className="nav-link" ><Link to={'product'}>Product</Link></p>

                        </nav>
                        <div className="search-container">
                            <div className="search-icon" />
                            <input type="search" placeholder="Search..." className="search-input" />
                        </div>
                    </div>
                </header>
                <Routes>
                    <Route path="" element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="product" element={<Product />} />
                    <Route path="education" element={<Education />} />
                </Routes>
            </BrowserRouter>
        </>

    )
}
