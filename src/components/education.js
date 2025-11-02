import data from "@/data/education.json";

export default function Education() {
    return(
        <div className="education">
            <div className="max-w-[1200px] mx-auto px-4">
                <h1 className="text-4xl font-medium py-10">My <span className="text-[#ff853a]">Education</span></h1>
                {data.data.map((e, index) => (
                    <div className="flex flex-col pb-10" key={index}>
                        <h1 className="text-sm font-medium color-[#ff853a] text-[#344054] pl-7">{e.startdate} - {e.enddate}</h1>
                        <div className="flex items-center gap-2">
                            <i className="fa-duotone fa-solid fa-graduation-cap text-[#ff853a]"></i>
                            <h1 className="text-lg sm:text-2xl font-medium">{e.degree}</h1>
                        </div>
                        <h1 className="text-sm font-medium text-[#344054] pl-7">{e.university}, {e.faculty}</h1>
                   </div>
                ))}
            </div>
        </div>
    );
}