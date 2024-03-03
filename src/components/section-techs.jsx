import { brownColor, brownColor2 } from "../constants/colors"
import TechContents from "./UI/tech-content-5"

const TechsSection = () => {
    return (
        <div 
            className="w-full lg:py-20 lg:px-40 flex items-center flex-col md:px-24 sm:px-12 sm:py-16 xs:px-6 xs:py-16 mb-0"
            style={{
                backgroundColor: brownColor,
            }}
        >
            <div className="w-full text-center mb-14">
                <h1 className="font-extrabold text-5xl w-full text-center mb-4"
                style={{
                    color: brownColor2,
                }}
                >
                    Stack Tecnologico
                </h1>
                <h3 className="font-semibold text-lg w-full text-center mb-4"
                style={{
                    color: brownColor2,
                }}>
                    Estas han sido las herramientas empleadas en el desarrollo de DataChef
                </h3>
            </div>

            <div className="w-full flex items-center justify-center">
                <TechContents />
            </div>
        </div>
    )
}

export default TechsSection