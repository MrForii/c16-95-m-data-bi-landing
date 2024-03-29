import { secondaryColor } from "../../constants/colors"


const ButtonSecondary = ({ link, icon, text }) => {

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
            <img src={icon} alt="Github Icon" className="h-5 w-9"/>
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

export default ButtonSecondary