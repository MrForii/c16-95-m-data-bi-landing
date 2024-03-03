import { brownColor, brownColor2 } from "../constants/colors"
import InfoImage from "../assets/imgs/info-image.png"
import TextField from "./UI/textField"
import { useState, useEffect } from "react"

const InfoSection = () => {

    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        function handleResize() {
        setWidth(window.innerWidth);
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const templateCols = width >= 1024 ? "40% 60%" : "1fr";

    return (
        <div className='grid justify-between items-center lg:py-16 lg:px-40 md:px-24 md:py-22 sm:px-12 sm:py-24 xs:px-6 xs:py-12'
            style={{
                backgroundColor: brownColor,
                gridTemplateColumns: templateCols,
            }}
    >
        
        <div className="flex flex-col items-center justify-center box-content flex-wrap px-12 xs:hidden md:flex">
            <img src={InfoImage} alt="InfoImage" className="lg:w-[255px] md:w-[200px] sm:w-[30%]"/>

            <p className="text-white font-semibold text-xl text-center">
                El análisis de datos es el secreto para el éxito de mi restaurante
            </p>
            <hr className="border-2 w-[250px] mt-2 "
                style={{
                    borderColor: brownColor2,
                }}
            />
        </div>

        <div className="w-full xs:mt-0 md:mt-10">
            <h2 className="font-bold text-5xl w-full text-center mb-7"
                style={{
                    color: brownColor2,
                }}
            >
                DataChef
            </h2>

            <div className="w-full px-8 text-center">
                
                <TextField text='¿Te gustaría mejorar la eficacia de tu restaurante y aumentar tus ganancias? ¿Te gustaría conocer mejor a tus clientes y ofrecerles lo que más les gusta? ¿Te gustaría optimizar tus operaciones y reducir tus costes? '
                />

                <TextField text='Si la respuesta es sí, entonces necesitas el análisis de datos para tu restaurante. El análisis de datos es una herramienta poderosa que te permite transformar la información en acción. Con el análisis de datos, puedes:'
                />

                <TextField text='🍕 Analizar las ventas de tu restaurante y detectar las tendencias, los productos más vendidos, los horarios más rentables y los factores que influyen en la demanda.'
                />

                <TextField text='🍔 Segmentar a tus clientes y conocer sus preferencias, hábitos, satisfacción y lealtad. Así podrás personalizar tus ofertas, fidelizar a tus clientes y atraer a nuevos.'
                />

                <TextField text='🌭 Controlar las operaciones de tu restaurante y mejorar la gestión del inventario, el personal, los proveedores y los recursos. '
                />

                <TextField text='Así podrás evitar el desperdicio, ahorrar tiempo y dinero y garantizar la calidad. El análisis de datos es fácil de implementar y usar. Solo necesitas una plataforma digital que te permita recopilar, procesar y visualizar los datos de tu restaurante. Con una simple mirada, podrás obtener información valiosa y tomar decisiones inteligentes.'
                />

            </div>

        </div>

    </div>
    )
}

export default InfoSection