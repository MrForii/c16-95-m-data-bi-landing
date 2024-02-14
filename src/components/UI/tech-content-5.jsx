import Excel from '../../assets/tech-icons/excel-logo.png'
import Trello from '../../assets/tech-icons/trello-logo.png'
import PowerBI from '../../assets/tech-icons/power-bi-logo.png'
import Slack from '../../assets/tech-icons/slack-logo.png'
import Discord from '../../assets/tech-icons/discord-logo.png'
import AWS from '../../assets/tech-icons/aws-logo.png'
import Figma from '../../assets/tech-icons/figma-logo.png'
import MySQL from '../../assets/tech-icons/mysql-logo.png'
import Python from '../../assets/tech-icons/python-logo.png'
import Meet from '../../assets/tech-icons/meet-logo.png'
import ReactLogo from '../../assets/tech-icons/react-logo.png'
import GitHub from '../../assets/tech-icons/github-logo.png'

const IconTech = ({ icon }) => {
    return (
        <div className='icon flex items-center justify-center'>
            <img src={icon} alt="icon" className='w-[64px] h-[64px]'/>
        </div>
    )
}

const TechContents = () => {
    return (
        <div className='w-full flex flex-wrap justify-around items-center'>
            <IconTech icon={Excel}/>
            <IconTech icon={Trello}/>
            <IconTech icon={PowerBI}/>
            <IconTech icon={Slack}/>
            <IconTech icon={Discord}/>
            <IconTech icon={AWS}/>
            <IconTech icon={Figma}/>
            <IconTech icon={MySQL}/>
            <IconTech icon={Python}/>
            <IconTech icon={Meet}/>
            <IconTech icon={ReactLogo}/>
            <IconTech icon={GitHub}/>
        </div>
    )
}

export default TechContents