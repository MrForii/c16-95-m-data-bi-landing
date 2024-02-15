

const CardTeam = ({ name, role, img, bio, links }) => {
    return (
        <>
            <div className="bg-white border border-solid border-teal-50 flex flex-col gap-[30px] items-center justify-center px-[30px] py-10 rounded-[20px] shadow-bs lg:w-[25%px] md:w-[90%] sm:w-[90%] xs:w-[95%] h-[500px]">
                <div className="flex flex-col gap-4 items-center justify-center w-full h-[40%]">
                    <img src={img} alt="" className="h-[100px] w-[100px] rounded-[50%]"/>
                </div>

                <div className="flex flex-col gap-1.5 items-start justify-start w-full">
                    <h2 className="text-center w-full font-semibold text-lg">{name}</h2>
                    {
                        role.map((r, i) => {
                            return (
                                <h3 key={i} className="leading-[20.00px] text-base text-blue_gray-800 text-center w-full">{r}</h3>
                            )
                        })
                    }
                    
                </div>
                <div className="flex flex-col items-stretch justify-around w-full h-full">
                    <div className="flex flex-col items-center justify-center w-full">
                        <p className="leading-[160.00%] max-w-[310px] md:max-w-full text-base text-blue_gray-900 text-center">
                            {bio}
                        </p>
                    </div>

                    <div className="flex items-center justify-around gap-5 w-full">
                        {
                            links.gmail && 
                                <a href={links.gmail} className="text-center text-orange-600 text-sm w-auto font-bold">
                                    Gmail
                                </a>
                        }
                        {
                            links.linkedin && 
                                <a href={links.linkedin} className="text-center text-orange-600 text-sm w-auto font-bold">
                                    LinkedIn
                                </a>
                        }
                        {
                            links.github &&
                                <a href={links.github} className="text-center text-orange-600 text-sm w-auto font-bold">
                                    Github
                                </a>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardTeam