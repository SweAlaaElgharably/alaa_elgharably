import Link from "next/link";
import Image from "next/image";
import icon from "@/assets/images/logo.jpg";

export default function Footer() {
    return (
        <footer className="bg-[#272727] text-white">
            <div className="max-w-[1200px] mx-auto px-4">
                <div className="flex justify-between items-center py-8">
                    <h1 className="text-2xl sm:text-4xl font-medium">Let's Connect there!</h1>
                    <Link className="font-medium bg-[#ff853a] text-white px-4 py-2 rounded-full" href="https://www.linkedin.com/in/alaaelgharably/" target="_blank">Hire me</Link>
                </div>
                <hr className="text-[#475467]"></hr>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 py-8">
                    <div className="col-span-1">
                        <div className="flex justify-start items-center cursor-default">
                            <div className="flex justify-center items-center mr-[10px]">
                                <Image src={icon} alt="logo" width={80} height={80} />
                            </div>
                            <h1 className="text-2xl font-bold font-urbanist">ALAA Elgharably</h1>
                        </div>
                        <p className="text-justify py-4">A fresh software engineer and ITI graduate with 1 year of experience in designing and developing efficient, secure and scalable web applications. Close to holding Master's degree in Computer Science.</p>
                    </div>
                    <div className="col-span-1">
                        <h1 className="text-xl text-[#ff853a] pb-4">Contact</h1>
                        <p>+20 01010798993</p>
                        <p>swe.alaaelgharably@gmail.com</p>
                        <div className="flex justify-start items-center">
                            <Link href="#"><i className="text-2xl p-1 fa-brands fa-square-facebook"></i></Link>
                            <Link href="#"><i className="text-2xl p-1 fa-brands fa-square-x-twitter"></i></Link>
                            <Link href="#"><i className="text-2xl p-1 fa-brands fa-square-whatsapp"></i></Link>
                            <Link href="#"><i className="text-2xl p-1 fa-brands fa-square-instagram"></i></Link>
                            <Link href="#"><i className="text-2xl p-1 fa-brands fa-square-youtube"></i></Link>
                            <Link href="#"><i className="text-2xl p-1 fa-brands fa-linkedin"></i></Link>
                        </div>
                    </div>
                </div>
                <hr className="text-[#475467]"></hr>
                <div className="flex justify-center items-center py-8">
                    <h1>copyright©2025 Alaa Elgharably</h1>
                </div>
            </div>
        </footer>
    )
}

{/* <div className="col-span-1">
<div className="flex flex-col">
<h1 className="text-xl text-[#ff853a] pb-4">Navigation</h1>
<Link href="#">Home</Link>
<Link href="#">About</Link>
<Link href="#">Experience</Link>
<Link href="#">Projects</Link>
<Link href="#">Certifications</Link>
<Link href="#">Contact</Link>
</div>
</div> */}