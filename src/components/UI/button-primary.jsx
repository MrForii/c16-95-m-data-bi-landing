import { secondaryColor } from "../../constants/colors"
import Github from "../../assets/imgs/github.svg" 

const ButtonPrimary = ({ link }) => {

    return (
        <a href={link} target="_blank" rel="noreferrer"
            className="flex py-3 px-[40px] items-center justify-center gap-3"
            style={{
                backgroundColor: secondaryColor,
                color: 'white',
                borderRadius: '10px',
            }}
        >
            <img src={Github} alt="Github Icon" className="h-6 w-6"/>
            <p className="font-semibold text-lg"  >Repositorio</p>
        </a>
    )

}

export default ButtonPrimary