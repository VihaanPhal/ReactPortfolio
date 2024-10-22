import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FaArrowLeft } from "react-icons/fa";
import { purple } from "@mui/material/colors";

const Resume = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  const Body = styled.div`
    background-color: ${({ theme }) => theme.bg};
    width: 100%;
    height: 100vh;
    overflow: hidden;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `;

  const TopBar = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    position: absolute;
    top: 0;
    left: 0;
  `;

  const BackButton = styled.button`
    border: 1px solid ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.primary};
    justify-content: center;
    display: flex;
    align-items: center;
    border-radius: 20px;
    cursor: pointer;
    padding: 10px 20px;
    font-size: 16px;
    font-weight: 500;
    transition: all 0.6s ease-in-out;
    text-decoration: none;
    background: none;

    &:hover {
      background: ${({ theme }) => theme.primary};
      color: ${({ theme }) => theme.text_primary};
    }

    svg {
      margin-right: 8px;
    }
  `;

  const Content = styled.div`
    display: flex;
    width: 100%;
    height: 80%;
    justify-content: center;
    align-items: center;
  `;

  const Title = styled.h1`
    font-size: 36px;
    color: ${({ theme }) => theme.text_primary};
    margin-bottom: 20px;
  `;

  const pdfUrl = `${process.env.PUBLIC_URL}/V.pdf`;

  return (
    <Body>
      <TopBar>
        <BackButton onClick={handleBack}>
          <FaArrowLeft />
          Back
        </BackButton>
      </TopBar>
      <Title>RESUME</Title>
      <Content>
        <div
          style={{
            width: "90%",
            height: "80vh",
          }}
        >
          <iframe
            src={pdfUrl}
            style={{
              borderRadius: "20px",
              width: "100%",
              height: "100%",
              border: "2",
              borderColor: "cyan",
            }}
            title="PDF Viewer"
          />
        </div>
      </Content>
    </Body>
  );
};

export default Resume;
