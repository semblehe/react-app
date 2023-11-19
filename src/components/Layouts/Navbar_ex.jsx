import {useEffect} from "react";

const Navbar_ex = () => {

    useEffect(() => {
        const handleScroll = () => {
            const header = document.querySelector('header');
            const fixedNav = header.offsetTop;
            if (window.pageYOffset > fixedNav) {
                header.classList.add('navbar-fixed');
            } else {
                header.classList.remove('navbar-fixed');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        // <header className="bg-transparent absolute top-0 left-0 w-full flex items-center z-10">
        <header className="top-0 left-0 w-full bg-transparent z-100 transition ">
            {/*<div className="container">*/}
            {/*    <div className="flex items-center justify-between relative">*/}
            {/*       <div className="px-4">*/}
            {/*           <a href="#" className="font-bold text-xl text-primary block py-6">Radio Manhajul Anbiya</a>*/}
            {/*       </div>*/}
            {/*    </div>*/}
            {/*    */}
            {/*</div>*/}

            <nav className="h-20 flex justify-between items-center container">
                <a href="#" className="nav__logo">Marlon</a>

                <div className="nav__menu" >
                    <ul className="nav__list">
                        <li className="nav__item">
                            <a href="#home" className="nav__link active-link">
                                <i className='bx bx-home-alt nav__icon'></i>
                                <span className="nav__name">Home</span>
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#about" className="nav__link">
                                <i className='bx bx-user nav__icon'></i>
                                <span className="nav__name">About</span>
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#skills" className="nav__link">
                                <i className='bx bx-book-alt nav__icon'></i>
                                <span className="nav__name">Skills</span>
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#portfolio" className="nav__link">
                                <i className='bx bx-briefcase-alt nav__icon'></i>
                                <span className="nav__name">Portfolio</span>
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#contactme" className="nav__link">
                                <i className='bx bx-message-square-detail nav__icon'></i>
                                <span className="nav__name">Contactme</span>
                            </a>
                        </li>
                    </ul>
                </div>

                <img src="assets/img/perfil.png" alt="" className="nav__img" />
            </nav>
        </header>
    )
}

export default Navbar_ex