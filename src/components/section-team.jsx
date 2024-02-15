import { brownColor, primaryColor } from "../constants/colors"
import Slides from "./UI/swipper"


const TeamSection = () => {
    return (
        <div 
            className="w-full lg:py-14 lg:px-40 flex flex-col items-center md:px-24 sm:px-12 sm:py-16 xs:px-6 xs:py-16"
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
                    Conoce nuestro equipo
                </h1>
                <h3 className="font-semibold text-lg w-full text-center mb-4"
                style={{
                    color: brownColor,
                }}>
                    Las personas detrás de DataChef
                </h3>
            </div>

            <div className="w-full m-auto">
                 <Slides></Slides>
            </div>

           
        </div>
    )
}

export default TeamSection