import Github from "../assets/imgs/github.svg"
import Youtube from "../assets/imgs/youtube.svg"
import Linkedin from "../assets/imgs/linkedin.svg"
import Instagram from "../assets/imgs/instagram.svg"

const Footer = () => {

    function getYear() {
        const date = new Date();
        return date.getFullYear();
      }

    return (
        <div className="bg-slate-800 flex lg:flex-row md:flex-col sm:flex-col sm:items-start sm:gap-3 xs:flex-col xs:items-start xs:gap-3 md:gap-6 items-center justify-between lg:px-40 lg:py-6 w-full md:px-12 md:py-5 sm:px-12 sm:py-4 xs:px-6 xs:py-3">
            <div className="text-white">
            © {getYear()} DataChef NoCountry
            </div>

            <div className="flex gap-3">
                <a href="https://www.youtube.com/channel/UCLeNKUkcsuu8UpcueDRYC7Q" target="_blank" rel="noreferrer">
                    <img src={Youtube} alt="" />
                </a>
                <a href="https://www.instagram.com/nocountry.tech/" target="_blank" rel="noreferrer">
                    <img src={Instagram} alt="" />
                </a>
                <a href="https://github.com/No-Country" target="_blank" rel="noreferrer">
                    <img src={Github} alt="" />
                </a>
                <a href="https://www.linkedin.com/company/nocountrytalent/?originalSubdomain=ar" target="_blank" rel="noreferrer">
                    <img src={Linkedin} alt="" />
                </a>
            </div>
        </div>
    )
}

export default Footer