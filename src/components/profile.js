import Image from "next/image";
import picture from "@/assets/images/picture.png";
import star from "@/assets/images/star.svg";
import quote from "@/assets/images/quote.svg";

export default function Profile() {
    return(
        <div className="profile relative">
            <div className="max-w-[1200px] mx-auto flex flex-col items-center justify-center pt-10 px-4 relative">
                <h1 className="text-4xl sm:text-6xl font-medium">Hi! I'm <span className="text-[#ff853a]">Alaa</span></h1>
                <h1 className="text-4xl sm:text-6xl font-medium">Software Engineer</h1>
                <div className="w-full md:w-[700px] aspect-2/1 bg-[#ffe8da] rounded-t-full flex items-end justify-center mt-10">
                    <div className="w-[75%] aspect-2/1 bg-[#ff853a] rounded-t-full"></div>
                </div>
                <Image src={picture} alt="Alaa Elgharably" className="absolute bottom-0 w-[55%] sm:w-[400px]" priority />
            </div>
            <div className="flex justify-center gap-4">
                <Stars />
                <Qoutes />
            </div>
        </div>
    );
}

function Stars() {
    return(
        <div className="flex items-end justify-center flex-col static sm:absolute top-[200px] right-4">
            <div className="flex items-center justify-center">
                <Image src={star} alt="star" />
                <Image src={star} alt="star" />
                <Image src={star} alt="star" />
                <Image src={star} alt="star" />
                <Image src={star} alt="star" />
            </div>
            <div className="flex items-end justify-center flex-col">
                <h1 className="text-6xl font-medium">1 Year</h1>
                <p className="text-xl font-medium">Experience</p>
            </div>
        </div>
    );
}

function Qoutes() {
    return(
        <div className="flex items-start justify-center flex-col static sm:absolute top-[200px] left-4 w-[160px]">
            <Image src={quote} alt="quote" />
            <p className="text-[#344054]">I enjoy creating tools that make life easier for people.</p>
        </div>
    );
}
