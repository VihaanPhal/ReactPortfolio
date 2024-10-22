import React from "react";
import styled, { keyframes } from "styled-components";

const shimmer = keyframes`
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
`;

const Card = styled.div`
  width: 340px;
  height: 480px;
  background-color: ${({ theme }) => theme.card};
  border-radius: 24px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 200%;
    height: 100%;
    background: linear-gradient(
      to right,
      transparent 0%,
      ${({ theme }) => theme.primary}20 50%,
      transparent 100%
    );
    animation: ${shimmer} 2s infinite;
    z-index: 1;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;

  ${Card}:hover & {
    transform: scale(1.1);
  }
`;

const Content = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  position: relative;
  z-index: 2;
  flex-grow: 1;
`;

const Title = styled.h3`
  font-size: 24px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  margin: 0;
  line-height: 1.2;
`;

const DateWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const DateIcon = styled.span`
  font-size: 18px;
`;

const Date = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.text_secondary};
  margin: 0;
`;

const Description = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.text_secondary};
  margin: 0;
  line-height: 1.5;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

const Members = styled.div`
  display: flex;
  align-items: center;
  margin-top: auto;
`;

const Avatar = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 3px solid ${({ theme }) => theme.card};
  box-shadow: 0 0 0 2px ${({ theme }) => theme.primary};
  transition: transform 0.3s ease;

  &:not(:first-child) {
    margin-left: -12px;
  }

  &:hover {
    transform: translateY(-4px);
  }
`;

const ViewLink = styled.a`
  color: magenta;
  text-decoration: none;
  font-weight: 600;
  font-size: 16px;
  transition: all 0.3s ease;
  align-self: flex-start;
  margin-top: auto;

  &:hover {
    text-decoration: underline;
  }
`;

const ProjectCard = ({ project }) => {
  return (
    <Card>
      <ImageWrapper>
        <Image src={project.image} alt={project.title} />
      </ImageWrapper>
      <Content>
        <Title>{project.title}</Title>
        <DateWrapper>
          <DateIcon>📅</DateIcon>
          <Date>{project.date}</Date>
        </DateWrapper>
        <Description>{project.description}</Description>
        <Members>
          {project.member?.map((member, index) => (
            <Avatar key={index} src={member.img} alt={`Member ${index + 1}`} />
          ))}
        </Members>
        <ViewLink
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          View
        </ViewLink>
      </Content>
    </Card>
  );
};

export default ProjectCard;
