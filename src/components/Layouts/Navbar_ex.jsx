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
        <header className="bg-transparent absolute top-0 left-0 w-full flex items-center z-10">
            <div className="container">
                <div className="flex items-center justify-between relative">
                   <div className="px-4">
                       <a href="#" className="font-bold text-xl text-primary block py-6">Radio Manhajul Anbiya</a>
                   </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar_ex