import { primaryColor, brownColor, textColor } from "../constants/colors"
import ButtonPrimary from "./UI/button-primary"
import ButtonSecondary from "./UI/button-secondary"
import ImgHeader from "../assets/imgs/img-header.png"
import Streamlit from "../assets/imgs/streamlit.png"
import { useState, useEffect } from "react"

const Header = () => {

    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        function handleResize() {
        setWidth(window.innerWidth);
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const fontSize = width <= 768 ? "48px" : "67px";


    return (
        <div 
            className="w-full lg:h-[90vh] md:h-[90vh] sm:h-[100%] xs:h-[100%] lg:py-5 lg:px-40 md:px-24 sm:px-12 sm:py-16 xs:px-6 xs:py-16 grid lg:grid-cols-2 md:grid-cols-1 items-center sm:grid-cols-1 sm:justify-center gap-4 sm:items-center"
            style={{
                backgroundColor: primaryColor,
            }}
        >
            
            <div className="flex flex-col justify-center md:text-start md:items-start md:m-0 sm:text-center sm:w-[80%] sm:items-center sm:justify-center sm:m-auto xs:items-center xs:w-full xs:text-center xs:my-14">
                <h1
                    style={{
                        fontWeight: 700,
                        fontStyle: 'normal',
                        fontSize,
                        lineHeight: '130%',
                        letterSpacing: '-1.675px',
                        color: brownColor,
                    }}
                >
                    DataChef
                </h1>
                
                <h1 
                    style={{
                        fontWeight: 700,
                        fontStyle: 'normal',
                        fontSize,
                        lineHeight: '130%',
                        letterSpacing: '-1.675px',
                        color: textColor,
                    }}
                    
                >
                    Optimizacion Gastronomica
                </h1>

                <div className="flex gap-4 lg:flex-row lg:w-full lg:justify-start mt-10 sm:flex-col xs:flex-col xs:w-[80%] xs:justify-center">
                    <ButtonPrimary link="https://github.com/No-Country/c16-95-m-data-bi" />
                    <ButtonSecondary link="https://c16-95-m-data-bi-cwwi88jhlw2ywgzaxznmjb.streamlit.app/" icon={Streamlit} text={"Streamlit"} />
                </div>
                
            </div>

            <div className="lg:w-full flex lg:justify-end md:hidden lg:flex sm:justify-center xs:justify-center">
                <img src={ImgHeader} alt="Img Header" />
            </div>
        </div>
    )
}

export default Header