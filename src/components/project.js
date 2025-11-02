import Image from "next/image";
import Link from "next/link";
import data from "@/data/project.json";
import edutrack from "@/assets/images/projects/edu track.png"
import educrat from "@/assets/images/projects/educrat.png"

export default function Project() {
    const project = [{ name: "Edu Track", image: edutrack, description: data.edutrack}, { name: "Educrat", image: educrat, description: data.educrat}];
    return (
        <div className="Project">
            <div className="max-w-[1200px] mx-auto px-4">
                <div className="flex justify-between items-center">
                    <h1 className="text-4xl font-medium py-10">My <span className="text-[#ff853a]">Project</span></h1>
                    <Link className="font-medium bg-[#ff853a] text-white px-4 py-2 rounded-full" href="#">See All</Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-8">
                {project.map((e, index) => (
                    <Link href="#" className="col-span-1 flex justify-center items-center relative project-item" key={index}>
                        <Image src={e.image} alt={e.name} width={600} height={600} className="w-full aspect-2/1"></Image>
                        <div className="arrow absolute top-3 right-3 flex justify-center items-center text-[#ff853a] w-10 h-10 rounded-full border-1 border-[#ff853a]">
                            <i className="fa-solid fa-arrow-right"></i>
                        </div>
                        <div className="absolute left-0 bottom-0 project-text w-full">
                            <h1 className="p-2 text-4xl text-[#ffffff]">{e.name}</h1>
                            <p className="two-lines mx-2 mb-2 text-l text-[#ffffff] text-justify">{e.description}</p>
                        </div>
                    </Link>
                ))}
                </div>
            </div>
        </div>
    )
}
