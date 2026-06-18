import { MdTravelExplore } from "react-icons/md";

const Logo = () => {
    return (
        <div>
             {/* LOGO */}
            <div className="flex relative items-center gap-2">

                <div className="bg-gradient-to-r from-black/15 dark:from-white via-purple-400 to-blue-400 p-1 rounded">
                    <MdTravelExplore size={34} className="text-black" />
                </div>
                <span 
                    className="absolute left-8 top-5 font-bold text-xl bg-gradient-to-r dark:from-white from-black via-purple-600 to-blue-600 text-transparent bg-clip-text"
                >
                    TicketBari
                </span>

            </div>
        </div>
    );
};

export default Logo;