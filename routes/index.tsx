import SpinningModel from "../islands/SpinningModel.tsx";
import TypingAnimation from "../islands/TypingAnimation.tsx";
import { Icon, loadIcons } from "@iconify-icon/react";
import Wave from "../components/Wave.tsx";

// preload icons
loadIcons([
    "majesticons:suitcase",
    "tabler:calendar-filled",
    "carbon:location-filled",
    "logos:deno",
    "logos:vue",
    "vscode-icons:file-type-js-official",
    "vscode-icons:file-type-js-official",
    "logos:html-5",
    "logos:css-3",
    "logos:php",
    "logos:typescript-icon",
    "skill-icons:react-dark",
    "devicon:nextjs",
    "skill-icons:nuxtjs-dark",
    "logos:nestjs",
    "logos:fresh",
    "skill-icons:laravel-dark",
    "skill-icons:tailwindcss-dark",
    "devicon:nodejs",
    "vscode-icons:file-type-mongo",
    "logos:postgresql",
    "logos:mariadb-icon",
    "skill-icons:cassandra-light",
    "skill-icons:docker",
    "openmoji:golang",
    "devicon:svelte",
    "material-icon-theme:go",
    "devicon:git",
    "logos:tableau-icon",
]);

function Hero() {
    return (
        <section class="p-4 flex justify-evenly items-center flex-wrap">
            <div class="max-w-sm mt-8">
                <h1 class="text-4xl font-bold text-primary">
                    <TypingAnimation
                        strings={['"Hello, World!"', "I'm Turab."]}
                        autoStart={true}
                    />
                </h1>
                <p class="text-xl mt-4">
                    I build web applications and websites using modern
                    technologies.
                </p>
            </div>
            <SpinningModel />
        </section>
    );
}

interface Value {
    title: string;
    description: string;
    image: string;
}

function Values() {
    const values: Value[] = [
        {
            title: "Passion for Continuous Learning",
            description:
                "I actively seek out new technologies and stay up-to-date with industry trends.",
            image: "/img/pexels-pixabay-159711.webp",
        },
        {
            title: "User-Centric Approach",
            description:
                "My goal is to create user-friendly applications that solve real-world problems.",
            image: "/img/pexels-picjumbo-com-55570-196644.webp",
        },
        {
            title: "Collaboration and Communication",
            description:
                "I excel in team environments and communicate effectively with stakeholders.",
            image: "/img/pexels-fauxels-3184418.webp",
        },
    ];

    return (
        <>
            <Wave flip={false} />
            <section class="p-4 flex justify-center items-center gap-4 flex-wrap bg-primary">
                {values.map((value, i) => (
                    <div
                        class={
                            "card md:h-auto md:max-w-64 bg-base-100 flex-row md:flex-col shadow-lg" +
                            (i % 2 ? " md:-translate-y-8" : "")
                        }
                    >
                        <figure class="w-1/3 md:h-48 md:w-auto rounded-none rounded-l-box md:rounded-none md:rounded-t-box">
                            <img
                                class="w-full h-full object-cover"
                                src={value.image}
                                alt={value.title}
                            />
                        </figure>
                        <div class="card-body w-2/3 md:w-auto">
                            <h2 class="card-title">{value.title}</h2>
                            <p>{value.description}</p>
                        </div>
                    </div>
                ))}
            </section>
            <Wave flip={true} />
        </>
    );
}

interface Experience {
    title: string;
    company: string;
    timePeriod: string;
    location: string;
}

function Experience() {
    const experiences: Experience[] = [
        {
            title: "Data Analyst",
            company: "iCore Business Solutions",
            timePeriod: "Dec 2024 - Jan 2025",
            location: "Quetta, Pakistan",
        },
        {
            title: "Junior Web Developer",
            company: "iCore Business Solutions",
            timePeriod: "Sep 2024 - Nov 2024",
            location: "Quetta, Pakistan",
        },
    ];

    return (
        <section class="p-4 flex flex-wrap-reverse justify-evenly items-center gap-4">
            <div class="flex flex-col">
                {experiences.map((experience, i) => (
                    <>
                        {i > 0 && (
                            <div class="flex flex-col gap-2 ml-8 my-2">
                                {[...Array(3)].map(() => (
                                    <span className="w-1 aspect-square bg-gray-500 rounded-full" />
                                ))}
                            </div>
                        )}

                        <div class="card">
                            <div class="card-body p-4">
                                <h2 class="card-title">{experience.title}</h2>
                                <span class="flex items-center gap-2 text-gray">
                                    <Icon
                                        icon="majesticons:suitcase"
                                        width="none"
                                        height="none"
                                    />
                                    {experience.company}
                                </span>
                                <span class="flex items-center gap-2 text-gray">
                                    <Icon
                                        icon="tabler:calendar-filled"
                                        width="none"
                                        height="none"
                                    />
                                    {experience.timePeriod}
                                </span>
                                <span class="flex items-center gap-2 text-gray">
                                    <Icon
                                        icon="carbon:location-filled"
                                        width="none"
                                        height="none"
                                    />
                                    {experience.location}
                                </span>
                            </div>
                        </div>
                    </>
                ))}
            </div>
            <h1 class="text-3xl font-bold text-primary">Work Experience</h1>
        </section>
    );
}

interface Project {
    title: string;
    description: string;
    link: string;
    type: string;
}

function Projects() {
    const projects: Project[] = [
        {
            title: "National Program for Healthcare & Family Planning",
            description:
                "An Android and web apps developed at iCore Business Solutions for a household survey by the Government of Balochistan, funded by the World Bank.",
            link: "https://np.icorebusiness.com/",
            type: "Proprietary",
        },
        {
            title: "Human Resource Information System \n (HRIS)",
            description:
                "A comprehensive system developed to automate and streamline the HR management processes of the Population Welfare Department of Balochistan.",
            link: "https://pwd.icorebusiness.com/",
            type: "Proprietary",
        },
    ];

    return (
        <section class="p-4 my-8">
            <h1 class="text-3xl font-bold text-primary text-center mb-4">
                Projects and Contributions
            </h1>
            <div class="flex flex-wrap justify-center items-center gap-2">
                {projects.map((project) => (
                    <div class="card max-w-96">
                        <div class="card-body p-4">
                            <h2 class="card-title whitespace-pre-line">
                                {project.title}
                                <span class="badge badge-ghost ml-auto">
                                    {project.type}
                                </span>
                            </h2>
                            <p>{project.description}</p>
                            <a
                                href={project.link}
                                target="_blank"
                                class="btn btn-primary text-base-100"
                            >
                                View Project
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

function DataVisualizationWorks() {
    return (
        <section class="p-4 my-8">
            <h1 class="text-3xl font-bold text-primary text-center mb-6">
                Selected Works
            </h1>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <div>
                    <img
                        src="/img/Arms Category.png"
                        alt="Visualization 1"
                        class="w-full rounded"
                    />
                    <p class="mt-2 text-center text-sm">
                        Visualization of Arms Trade
                    </p>
                </div>
                <div>
                    <img
                        src="/img/Arms Exporter.png"
                        alt="Visualization 2"
                        class="w-full rounded"
                    />
                    <p class="mt-2 text-center text-sm">Arms Exports</p>
                </div>
                <div>
                    <img
                        src="/img/Arms Importer.png"
                        alt="Visualization 3"
                        class="w-full rounded"
                    />
                    <p class="mt-2 text-center text-sm">Arms Imports</p>
                </div>
                <div>
                    <img
                        src="/img/Oil Price trends.png"
                        alt="Visualization 4"
                        class="w-full rounded"
                    />
                    <p class="mt-2 text-center text-sm">Oil Price trends</p>
                </div>
                <div>
                    <img
                        src="/img/Oil Producing Countries.png"
                        alt="Visualization 5"
                        class="w-full rounded"
                    />
                    <p class="mt-2 text-center text-sm">Oil Production</p>
                </div>
                <div>
                    <img
                        src="/img/PSX returns.png"
                        alt="Visualization 7"
                        class="w-full rounded"
                    />
                    <p class="mt-2 text-center text-sm">
                        Pakistan Stock Exchange
                    </p>
                </div>
            </div>
        </section>
    );
}

function Technologies() {
    const technologies = [
        "material-icon-theme:go",
        "vscode-icons:file-type-js-official",
        "logos:html-5",
        "logos:css-3",
        "logos:typescript-icon",
        "skill-icons:react-dark",
        "devicon:svelte",
        "skill-icons:tailwindcss-dark",
        "devicon:nodejs",
        "vscode-icons:file-type-mongo",
        "devicon:git",
        "logos:tableau-icon",
    ];

    return (
        <section class="my-16">
            <h1 class="text-3xl font-bold text-primary text-center mb-4">
                Technologies
            </h1>
            <div class="p-4 flex justify-center items-center flex-wrap gap-4">
                {technologies.map((technology) => (
                    <Icon
                        class="w-8 h-8"
                        icon={technology}
                        width="none"
                        height="none"
                    />
                ))}
            </div>
        </section>
    );
}

export default function Home() {
    return (
        <>
            <Hero />
            <Values />
            <Projects />
            <DataVisualizationWorks />
            <Experience />
            <Technologies />
        </>
    );
}
