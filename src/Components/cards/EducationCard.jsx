import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const shimmer = keyframes`
  0% { background-position: -1000px 0; }
  100% { background-position: 1000px 0; }
`;

const Card = styled(VerticalTimelineElement)`
  .vertical-timeline-element-content {
    background: linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%);
    border-radius: 16px;
    padding: 2rem;
    box-shadow: 0 10px 30px -10px rgba(2, 12, 27, 0.7);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    animation: ${fadeIn} 0.6s ease-out;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 20px 40px -15px rgba(2, 12, 27, 0.8);
    }

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 16px;
      background: linear-gradient(
        90deg,
        transparent,
        rgba(255, 255, 255, 0.1),
        transparent
      );
      animation: ${shimmer} 10s infinite;
    }
  }

  .vertical-timeline-element-content-arrow {
    border-right: 7px solid #009ffd;
  }

  .vertical-timeline-element-icon {
    box-shadow: 0 0 0 4px #2a2a72, inset 0 2px 0 rgba(0, 0, 0, 0.08),
      0 3px 0 4px rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
`;

const Image = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 12px;
  object-fit: cover;
  transition: all 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: scale(1.05) rotate(2deg);
  }

  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
  }
`;

const Body = styled.div`
  flex: 1;
`;

const School = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #ffffff;
  margin: 0;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const Degree = styled.h4`
  font-size: 1.2rem;
  font-weight: 500;
  color: #a0e9ff;
  margin: 0.3rem 0;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const Date = styled.p`
  font-size: 1rem;
  color: #ccd6f6;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const Description = styled.div`
  font-size: 1.1rem;
  color: #e6f1ff;
  line-height: 1.6;
  margin-bottom: 1rem;
  position: relative;
  padding-left: 1.5rem;

  &::before {
    content: "✦";
    position: absolute;
    left: 0;
    color: #a0e9ff;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Grade = styled.div`
  font-size: 1.1rem;
  font-weight: 500;
  color: #a0e9ff;
  background-color: rgba(160, 233, 255, 0.1);
  border-radius: 20px;
  padding: 0.5rem 1rem;
  display: inline-block;
  margin-top: 1rem;
  transition: all 0.3s ease;

  &:hover {
    background-color: rgba(160, 233, 255, 0.2);
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const EducationCard = ({ education }) => {
  return (
    <Card
      icon={
        <img
          width="100%"
          height="100%"
          alt={education?.school}
          style={{ borderRadius: "50%", objectFit: "cover" }}
          src={education?.img}
        />
      }
      date={education?.date}
    >
      <Top>
        <Image src={education?.img} alt={education?.school} />
        <Body>
          <School>{education?.school}</School>
          <Degree>{education?.degree}</Degree>
          <Date>{education?.date}</Date>
        </Body>
      </Top>
      {education?.desc && <Description>{education.desc}</Description>}
      <Grade>
        <span role="img" aria-label="grade">
          🎓
        </span>{" "}
        Grade: {education?.grade}
      </Grade>
    </Card>
  );
};

export default EducationCard;
