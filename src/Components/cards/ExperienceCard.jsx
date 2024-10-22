import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const Card = styled(VerticalTimelineElement)`
  .vertical-timeline-element-content {
    background: linear-gradient(135deg, #1d1836 0%, #2c2c6c 100%);
    border-radius: 16px;
    box-shadow: 0 10px 30px -10px rgba(2, 12, 27, 0.7);
    padding: 2rem;
    transition: all 0.3s ease;
    animation: ${fadeIn} 0.6s ease-out;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 20px 40px -15px rgba(2, 12, 27, 0.8);
    }
  }

  .vertical-timeline-element-content-arrow {
    border-right: 7px solid #2c2c6c;
  }

  .vertical-timeline-element-icon {
    box-shadow: 0 0 0 4px #1d1836, inset 0 2px 0 rgba(0, 0, 0, 0.08),
      0 3px 0 4px rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease;

    &:hover {
      animation: ${pulse} 1s ease infinite;
    }
  }
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const Image = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 12px;
  object-fit: cover;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
  }
`;

const Body = styled.div`
  flex: 1;
`;

const Role = styled.h3`
  font-size: 1.4rem;
  font-weight: 700;
  color: #e6f1ff;
  margin: 0;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const Company = styled.h4`
  font-size: 1.1rem;
  font-weight: 500;
  color: #64ffda;
  margin: 0.2rem 0;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Date = styled.p`
  font-size: 0.9rem;
  color: #8892b0;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const Description = styled.div`
  font-size: 1rem;
  color: #a8b2d1;
  line-height: 1.6;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const Skills = styled.div`
  margin-top: 1rem;
`;

const SkillsTitle = styled.h5`
  font-size: 1.1rem;
  font-weight: 600;
  color: #ccd6f6;
  margin-bottom: 0.5rem;
`;

const SkillsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const Skill = styled.li`
  font-size: 0.9rem;
  color: #64ffda;
  background-color: rgba(100, 255, 218, 0.1);
  border-radius: 4px;
  padding: 0.2rem 0.5rem;
  transition: all 0.3s ease;

  &:hover {
    background-color: rgba(100, 255, 218, 0.2);
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const ExperienceCard = ({ experience }) => {
  return (
    <Card
      icon={
        <img
          width="100%"
          height="100%"
          alt={experience?.company}
          style={{ borderRadius: "50%", objectFit: "cover" }}
          src={experience?.img}
        />
      }
      date={experience?.date}
    >
      <Top>
        <Image src={experience?.img} alt={experience?.company} />
        <Body>
          <Role>{experience?.role}</Role>
          <Company>{experience?.company}</Company>
          <Date>{experience?.date}</Date>
        </Body>
      </Top>
      <Description>{experience?.desc}</Description>
      {experience?.skills && (
        <Skills>
          <SkillsTitle>Skills</SkillsTitle>
          <SkillsList>
            {experience.skills.map((skill, index) => (
              <Skill key={index}>{skill}</Skill>
            ))}
          </SkillsList>
        </Skills>
      )}
    </Card>
  );
};

export default ExperienceCard;
