import React from "react";

const CardGoals = ({ icon, color, title, text}) => {
    return (
        <div className="bg-white border border-solid border-teal-50 grid grid-rows-2 gap-[30px] h-[360px] items-center justify-center sm:px-5 px-[30px] py-10 rounded-[20px] shadow-bs w-[320px]">

            <div className="w-full flex items-center justify-center">
                <div className="flex flex-col items-center justify-center p-5 rounded-[20px] w-[82px]" style={{backgroundColor: color}}>
                    <img src={icon} className="h-[42px] w-[42px]" alt="icon" />
                </div>
            </div>

            <div className="flex flex-col gap-6 items-center justify-start w-full">
                <p className="leading-[150.00%] max-w-[310px] md:max-w-full text-xl text-center font-bold"
                    style={{color: '#2D2D2D'}}
                >
                    {title}
                </p>
                <p className="leading-[150.00%] max-w-[310px] md:max-w-full text-md text-center"
                    style={{color: '#2D2D2D'}}
                >
                    {text}
                </p>
            </div>
        </div>
    )
}

export default CardGoals

