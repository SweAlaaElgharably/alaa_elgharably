import alaa from "@/assets/images/alaa.svg"
import Image from "next/image";
import Link from "next/link";

export default function Hiring() {
    return(
        <div className="hiring bg-[#f2f4f7]">
            <div className="max-w-[1200px] mx-auto px-4">
                <div className="grid col-span-1 md:grid-cols-2 gap-8 py-8">
                    <div className="col-span-1 flex justify-center items-center">
                        <Image src={alaa} alt="Alaa Image"></Image>
                    </div>
                    <div className="col-span-1 flex flex-col justify-center items-start">
                        <h1 className="text-4xl font-medium py-8">Why <span className="text-[#ff853a]">Hire</span> me?</h1>
                        <p className="text-justify pb-4">Proficient in Backend technologies like Python, Django, restful APIs, PostgreSQL, MySQL, SQLite. Strong in Frontend technologies like HTML, CSS, JavaScript, SASS, Bootstrap, Tailwind, React.js, Next.js. Solid Knowledge of Git and GitHub. Strong in soft skills including time management, project management, team leadership, collaboration, adaptability, and attention to detail. </p>
                        <p className="text-3xl font-medium">4+</p>
                        <p>Project Completed</p>
                        <Link className="font-medium border-black border-1 px-8 py-4 rounded-xl my-4 hover:bg-black hover:text-white duration-300" href="https://www.linkedin.com/in/alaaelgharably/" target="_blank">Hire me</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}