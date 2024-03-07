import { brownColor, brownColor2 } from "../constants/colors"
import PowerBI from "../assets/tech-icons/power-bi-logo.png"
import ButtonDashboard from "./UI/button-dashboard"

const DashboardSection = () => {
    return (
        <div 
            className="w-full lg:py-20 lg:px-40 flex items-center flex-col md:px-24 sm:px-12 sm:py-16 xs:px-6 xs:py-16 mt-0"
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
                    Dashboard
                </h1>
                <h3 className="font-semibold text-lg w-full text-center mb-4"
                style={{
                    color: brownColor2,
                }}>
                    Este es el dashboard de DataChef
                </h3>
            </div>

            <iframe className="w-full xs:hidden sm:block sm:h-[400px] md:h-[450px] lg:h-[550px]" src='https://app.powerbi.com/view?r=eyJrIjoiYmMxMWIwMWYtNDFjMy00NDIyLTg3ODQtMzM5MTJiZDk3M2VhIiwidCI6ImRmODY3OWNkLWE4MGUtNDVkOC05OWFjLWM4M2VkN2ZmOTVhMCJ9'></iframe>

            <div className="xs:block sm:hidden">
                <ButtonDashboard link="https://app.powerbi.com/view?r=eyJrIjoiYmMxMWIwMWYtNDFjMy00NDIyLTg3ODQtMzM5MTJiZDk3M2VhIiwidCI6ImRmODY3OWNkLWE4MGUtNDVkOC05OWFjLWM4M2VkN2ZmOTVhMCJ9" icon={PowerBI} text="Ver Dashboard"/>
            </div>
        </div>
    )
}

export default DashboardSection
