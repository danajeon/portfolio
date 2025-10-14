import GitHubIcon from "@mui/icons-material/GitHub";

export const ProjectCard = ({
  index,
  screenshot,
  title,
  dsc,
  projectUrl,
  repo,
  techUsed,
  selected,
  setSelected,
}) => {
  const handleClick = (index) => {
    if (selected === index) {
      window.open(projectUrl, "_blank");
    } else {
      setSelected(index);
    }
  };

  return (
    <div
      onClick={() => handleClick(index)}
      className={`lg:h-[350px] md:h-[350px] h-[400px] lg:w-auto md:w-auto w-full z-1 flex flex-col justify-end text-white rounded-xl shadow-black shadow-md overflow-hidden cursor-pointer transition-all duration-500 ease-in-out
        hover:shadow-lg
        hover:text-[#182934]
        ${selected === index ? 'lg:flex-[3] md:flex-[3]' : 'lg:flex-[1] md:flex-[1]'}
      `}
      style={{
        backgroundImage: `url(${screenshot})`,
        backgroundPosition: "top",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="h-full w-full flex flex-col justify-end bg-gradient-to-t from-[rgba(85,30,71,0.5)] to-transparent rounded-xl hover:from-[#f1f8fa]">
        <div className={`flex ${selected === index ? 'flex-row justify-start items-center' : 'flex-col justify-end items-start'} gap-2 text-inherit px-2 pb-4`}>
          <a
            href={projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-xl hover:underline hover:text-[#59a1b7]"
          >
            {title}
          </a>
          <a
            href={repo}
            target="_blank"
            rel="noopener noreferrer"
            className="z-10 flex justify-center items-center rounded-full hover:text-[#59a1b7]"
          >
            <GitHubIcon fontSize="medium" />
          </a>
          <div className={`flex-wrap gap-1 ${selected === index ? 'lg:flex md:flex flex' : 'lg:hidden md:hidden flex'}`}>
            {techUsed.map((x) => {
              {
                return <span className={`bg-white border border-white rounded-lg p-1 text-[cornflowerblue] text-xs font-normal text-inherit`}>{x}</span>
              }
            })}
          </div>
        </div>
        <span className={`${selected === index ? 'lg:block md:block block' : 'lg:hidden md:hidden block'} text-sm font-normal text-inherit mt-1 px-2 pb-3`}>
          {dsc}
        </span>
      </div>
    </div>
  );
};
