import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
    title: "Alaa Elgharably",
    description: "A fresh software engineer and ITI graduate with 1 year of experience in designing and developing efficient, secure and scalable web applications. Close to holding Master's degree in Computer Science. Proficient in Backend technologies like Python, Django, restful APIs, PostgreSQL, MySQL, SQLite. Strong in Frontend technologies like HTML, CSS, JavaScript, SASS, Bootstrap, Tailwind, React.js, Next.js. Solid Knowledge of Git and GitHub. Strong in soft skills including time management, project management, team leadership, collaboration, adaptability, and attention to detail.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${geistSans.variable} ${geistMono.variable}`}>
                {children}
            </body>
        </html>
    );
}
