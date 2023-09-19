import { useContext, useEffect } from "react";
import {
  checkRedirect,
  getCurrentCmdArry,
  isArgInvalid,
} from "../../utils/funcs";
import {
  ProjectContainer,
  ProjectDesc,
  ProjectsIntro,
  ProjectTitle,
} from "../styles/Projects.styled";
import { termContext } from "../Terminal";
import Usage from "../Usage";

const Projects: React.FC = () => {
  const { arg, history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = getCurrentCmdArry(history);

  /* ===== check current command is redirect ===== */
  useEffect(() => {
    if (checkRedirect(rerender, currentCommand, "projects")) {
      projects.forEach(({ id, url }) => {
        id === parseInt(arg[1]) && window.open(url, "_blank");
      });
    }
  }, [arg, rerender, currentCommand]);

  /* ===== check arg is valid ===== */
  const checkArg = () =>
    isArgInvalid(arg, "go", ["1", "2", "3", "4"]) ? (
      <Usage cmd="projects" />
    ) : null;

  return arg.length > 0 || arg.length > 2 ? (
    checkArg()
  ) : (
    <div data-testid="projects">
      <ProjectsIntro>
        “Talk is cheap. Show me the code”? I got you. <br />
        Here are some of my projects you shouldn't misss
      </ProjectsIntro>
      {projects.map(({ id, title, desc }) => (
        <ProjectContainer key={id}>
          <ProjectTitle>{`${id}. ${title}`}</ProjectTitle>
          <ProjectDesc>{desc}</ProjectDesc>
        </ProjectContainer>
      ))}
      <Usage cmd="projects" marginY />
    </div>
  );
};

const projects = [
  {
    id: 1,
    title: "Skillfolio",
    desc: "My personal website / portfolio with GUI.",
    url: "https://ayushmansarkar.is-a.dev/",
  },
  {
    id: 2,
    title: "Pixellated",
    desc: "An interactive and user-friendly webpage to convert images to HTML pixel art",
    url: "https://haru-fashion.vercel.app/",
  },
  {
    id: 3,
    title: "ASCIIfy",
    desc: "An interactive and user-friendly webpage to convert images to ASCII Art.",
    url: "https://ayushmansarkar.github.io/asciify/",
  },
  {
    id: 4,
    title: "Codepen Gallery",
    desc: "A gallery of my CodePen creations, made using SCSS.",
    url: "https://ayushmansarkar.github.io/codepen-gallery/",
  },
];

export default Projects;
