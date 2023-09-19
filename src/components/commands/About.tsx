import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        Hi, my name is <HighlightSpan>Ayushman Sarkar</HighlightSpan>!
      </p>
      <p>
        I'm <HighlightAlt>a full-stack developer </HighlightAlt> and 
        <HighlightAlt> a high-school student</HighlightAlt> from India.
      </p>
      <p>
        I am passionate about algorithms, data analytics, programming and <br />
        developing web applications for fun. 
      </p>
    </AboutWrapper>
  );
};

export default About;
