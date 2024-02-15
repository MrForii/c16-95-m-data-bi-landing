import { secondaryColor } from "../../constants/colors"
import IconPlay from "../../assets/imgs/icon-play.svg"


const ButtonSecondary = ({ link }) => {

    return (
        <a href={link} 
            className="flex py-3 px-[40px] items-center justify-center gap-3"
            style={{
                backgroundColor: 'white',
                borderColor: secondaryColor,
                borderWidth: '2px',
                color: 'white',
                borderRadius: '10px',
            }}
        >
            <img src={IconPlay} alt="Github Icon" className="h-5 w-5"/>
            <p className="font-semibold text-lg" target="_blank" 
                style={{
                    color: secondaryColor
                }}
            >
                Ver video demo
            </p>
        </a>
    )

}

export default ButtonSecondary