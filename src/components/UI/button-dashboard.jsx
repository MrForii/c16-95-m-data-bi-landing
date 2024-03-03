import { secondaryColor } from "../../constants/colors"


const ButtonDashboard = ({ link, icon, text }) => {

    return (
        <a href={link} target="blank" 
            className="flex py-3 px-[40px] items-center justify-center gap-3"
            style={{
                backgroundColor: 'white',
                borderColor: secondaryColor,
                borderWidth: '2px',
                color: 'white',
                borderRadius: '10px',
            }}
        >
            <img src={icon} alt="Github Icon" className="h-7 w-7"/>
            <p className="font-semibold text-lg" 
                style={{
                    color: secondaryColor
                }}
            >
                {text}
            </p>
        </a>
    )

}

export default ButtonDashboard