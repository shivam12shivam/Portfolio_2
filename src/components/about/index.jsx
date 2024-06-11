import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";

const AboutDetails = () => {
  return (
    <section className="w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6  md:gap-8 w-full">
        <ItemLayout
          className={
            " col-span-full row-span-2 flex-col items-start"
          }
        >
          <h2 className="!text-3xl md:text-2xl text-left w-full capitalize ">
            Architect of Galaxy
          </h2>
          <p className="font-light  !text-base sm:text-sm md:text-base   ">
            Embark on an interstellar journey through my digital universe,
            where creativity and code collide to form a galaxy of innovative
            projects. Each creation is a unique star, illuminating my passion 
            and expertise in the ever-expanding cosmos of technology
          </p>
        </ItemLayout>

        



        <ItemLayout
          className={"col-span-full sm:col-span-6 md:col-span-4 !p-0"}
        >
          <img
            className="w-full h-auto"
            src={`https://github-readme-stats.vercel.app/api/top-langs?username=shivam12shivam&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false`}
            alt="SHIVAM"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"h-36 sm:h-auto col-span-full md:col-span-8 !p-0"}>
          <img
            className="w-full h-auto"
            src={`https://github-readme-stats.vercel.app/api?username=shivam12shivam&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false`}
            alt="SHIVAM"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full"}>
          <img
            className="w-full h-auto"
            src={`https://skillicons.dev/icons?i=c,cpp,py,html,css,bootstrap,tailwind,appwrite,firebase,git,github,js,jquery,threejs,mongodb,mysql,react,redux,nextjs,nodejs,npm,netlify,vercel,vite,vscode`}
            alt="SHIVAM"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <img
            className="w-full h-auto"
            src={`https://github-readme-streak-stats.herokuapp.com?user=shivam12shivam&theme=merko`}
            alt="SHIVAM"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <Link
            href="https://github.com/shivam12shivam/gym-freakss"
            target="_blank"
            className="w-full"
          >
            <img
              className="w-full h-auto"
              src={`https://github-readme-stats.vercel.app/api/pin/?username=shivam12shivam&repo=gym-freakss&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false&description_lines_count=2`}
              alt="SHIVAM"
              loading="lazy"
            />
          </Link>
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;