import { primaryColor, brownColor } from "../constants/colors"
import CardGoals from "./UI/card-goals"
import icon1 from "../assets/icons-card/icon1.svg"
import icon2 from "../assets/icons-card/icon2.svg"
import icon3 from "../assets/icons-card/icon3.svg"
import icon4 from "../assets/icons-card/icon4.svg"
import icon5 from "../assets/icons-card/icon5.svg"
import icon6 from "../assets/icons-card/icon6.svg"

const cards = [
    {
        icon: icon1,
        color: "rgba(255, 98, 80, 0.2)",
        title: "Administrar volumen de ventas",
        text: "Gracias al servicio de DataChef podrás administrar el volumen de tus ventas. ",
    },
    {
        icon: icon2,
        color: "rgba(0, 147, 121, 0.2)",
        title: "Análisis de Rendimiento",
        text: "Podrás analizar el rendimiento en tu restaurante. ",
    },
    {
        icon: icon3,
        color: "#F8D57E33",
        title: "Análisis de ventas",
        text: "Tendrás la capacidad de analizar las ventas de tu restaurante, detectar tendencias, productos más vendidos y horarios más rentables",
    },
    {
        icon: icon4,
        color: "rgba(255, 98, 80, 0.2)",
        title: "Control de operaciones",
        text: "Implementamos un control de las operaciones de tu restaurante.",
    },
    {
        icon: icon5,
        color: "rgba(0, 147, 121, 0.2)",
        title: "Maximizar ganancias",
        text: "Gracias al análisis de los datos del restaurante podrás evitar el desperdicio de productos, ahorrar tiempo y dinero.",
    },
    {
        icon: icon6,
        color: "#F8D57E33",
        title: "Garantizar Calidad",
        text: "Gracias a DataChef podrás garantizar la calidad en tu restaurante",
    },
]

const GoalsSection = () => {
    return (
        <div 
            className="w-full lg:py-20 lg:px-40 flex items-center flex-col md:px-24 sm:px-12 sm:py-16 xs:px-6 xs:py-16"
            style={{
                backgroundColor: primaryColor,
            }}
        >
            <div className="w-full text-center mb-14">
                <h1 className="font-extrabold text-5xl w-full text-center mb-4"
                style={{
                    color: brownColor,
                }}
                >
                    Qué puedo conseguir con DataChef?
                </h1>
                <h3 className="font-semibold text-lg w-full text-center mb-4"
                style={{
                    color: brownColor,
                }}>
                    Los objetivos a alcanzar en el desarrollo de este proyecto han sido:
                </h3>
            </div>

            <div className="grid lg:grid-cols-3 justify-around items-center gap-16 md:grid-cols-2 sm:grid-cols-1">
                {
                    cards.map((card, index) => {
                        return (
                            <CardGoals
                                key={index}
                                icon={card.icon}
                                color={card.color}
                                title={card.title}
                                text={card.text}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default GoalsSection