import Image from "next/image";
import python from "@/assets/images/icons/python.svg";
import django from "@/assets/images/icons/django.svg";
import restful from "@/assets/images/icons/restful.svg";
import postgresql from "@/assets/images/icons/postgresql.svg";
import mysql from "@/assets/images/icons/mysql.svg";
import sqlite from "@/assets/images/icons/sqlite.svg";
import html from "@/assets/images/icons/html.svg";
import css from "@/assets/images/icons/css.svg";
import javascript from "@/assets/images/icons/javascript.svg";
import tailwind from "@/assets/images/icons/tailwind.svg";
import bootstrap from "@/assets/images/icons/bootstrap.svg";
import sass from "@/assets/images/icons/sass.svg";
import jquery from "@/assets/images/icons/jquery.svg";
import reactjs from "@/assets/images/icons/reactjs.svg";
import nextjs from "@/assets/images/icons/nextjs.svg";
import git from "@/assets/images/icons/git.svg";
import github from "@/assets/images/icons/github.svg";
import json from "@/assets/images/icons/json.svg";
import linux from "@/assets/images/icons/linux.svg";
import docker from "@/assets/images/icons/docker.svg";

export default function Skills() {
    const icons = [python, django, restful, postgresql, mysql, sqlite, html, css, javascript, tailwind, bootstrap, sass, jquery, reactjs, nextjs, git, github, json, linux, docker]
    return (
        <div className="skills py-3 bg-[#fffbf8]">
            <div className="max-w-[1200px] mx-auto px-4">
                <div className="overflow-hidden">
                    <div className="flex animate-slide gap-8">
                        {icons.concat(icons).map((icon, i) => (
                            <Image key={i} src={icon} alt={`icon-${i}`} height={60} className="cursor-pointer contrast-[0.4] hover:contrast-[1] transition-all duration-300" />
                        ))}
                    </div>
                </div>
            </div>
        </div>
      );
}