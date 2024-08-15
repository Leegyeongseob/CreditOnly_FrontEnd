import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useOutletContext, useParams } from "react-router-dom";
import styled from "styled-components";
import modalImg from "../../img/commonImg/전구 아이콘.gif";
import { UserEmailContext } from "../../contextapi/UserEmailProvider";
import AnnouncementAxios from "../../axiosapi/AnnouncementAxios";
import Modal from "../help/HelpModal";

const Board = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  @media screen and (max-width: 768px) {
    height: 94vh;
  }
`;

const HelpBoard = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const BtnDiv = styled.div`
  width: 92%;
  height: 5%;
  padding: 0 2% 0 2%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 768px) {
    padding: 0 5% 0 3%;
  }
`;
const Btn = styled.div`
  width: 90px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #1f384c;
  font-family: "Roboto-Regular", Helvetica;
  font-size: 14px;
  font-weight: 400;
  color: #5a6acf;
  background-color: ${({ theme }) => theme.sideBar};
  transition: background-color 0.5s ease, color 0.5s ease;
  text-decoration: none;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.background};
  }
  @media screen and (max-width: 768px) {
    width: 80px;
    height: 30px;
    margin-left: 2%;
    font-size: 12px;
  }
`;

const TitleDiv = styled.div`
  width: 92%;
  height: 10%;
  margin-top: 1%;
  padding-top: 1%;
  padding-left: 3%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: ${({ theme }) => theme.commponent};
  transition: background-color 0.5s ease;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;

  @media screen and (max-width: 768px) {
    margin-top: 10%;
  }
`;
const Title = styled.h1`
  width: 285px;
  height: 90%;
  padding-left: 1%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 30px;
  font-weight: bolder;
  border-radius: 10px;
  @media screen and (max-width: 768px) {
    padding-left: 8%;
    font-size: 25px;
  }
`;

const TitleFont = styled.div`
  font-size: 22px;
  padding: 1% 0% 0 1%;
`;

const Contents = styled.div`
  width: 92%;
  height: 74%;
  margin-bottom: 1%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.commponent};
  color: ${({ theme }) => theme.color};
  transition: background-color 0.5s ease, color 0.5s ease;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  @media screen and (max-width: 768px) {
    padding-left: 3%;
    height: 60%;
    margin-bottom: 5%;
  }
`;

const HelpBoardText = styled.div`
  width: 96%;
  height: 90%;
  font-size: 22px;
  padding: 2%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const TitleBox = styled.div`
  width: 92%;
  height: 15%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TitleLeft = styled.div`
  width: 100%;
  height: 65%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 24px;
  @media screen and (max-width: 1200px) {
    font-size: 19px;
  }
`;

const WriteTitleInput = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  background-color: transparent;
  font-size: 28px;
  color: ${({ theme }) => theme.color};
  transition: color 0.5s ease;
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`;

const WriteContentsInput = styled.textarea`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  background-color: transparent;
  font-size: 20px;
  resize: none;
  overflow-y: auto;
  color: ${({ theme }) => theme.color};
  transition: color 0.5s ease;
  @media screen and (max-width: 768px) {
    font-size: 15px;
  }
`;

const AnBoardWrite = () => {
  const { email } = useContext(UserEmailContext);
  const [clickTitle, setClickTitle] = useState("");
  const { classTitle } = useParams();
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [modalContent, setModalContent] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();
  const { setHasUnreadNotifications } = useOutletContext();

  useEffect(() => {
    switch (classTitle) {
      case "news":
        setClickTitle("새 소식");
        break;
      case "event":
        setClickTitle("이벤트");
        break;
      case "press":
        setClickTitle("보도 자료");
        break;
      default:
        setClickTitle("알 수 없음");
    }
  }, [classTitle]);

  const codeModalOkBtnHandler = () => {
    closeNextModal();
  };
  const closeNextModal = () => {
    setModalOpen(false);
    navigate(-1);
  };
  const closeModal = () => {
    setModalOpen(false);
    navigate(-1);
  };

  const handleBackClick = () => {
    navigate(-1);
  };

  const addBoard = async (e) => {
    const formData = {
      email,
      classTitle,
      title,
      contents,
    };

    try {
      await AnnouncementAxios.postBoard(formData);
      setModalOpen(true);
      setModalContent("게시글 등록 성공 !");
      setHasUnreadNotifications(true);
    } catch (error) {
      console.log(error);
      setModalOpen(true);
      setModalContent("게시글 등록 실패..");
    }
  };

  return (
    <Board>
      <BtnDiv>
        <Btn onClick={() => handleBackClick()}>뒤로</Btn>
      </BtnDiv>
      <TitleDiv>
        <Title>
          {clickTitle}
          <TitleFont>- 게시글 작성</TitleFont>
        </Title>
      </TitleDiv>
      <Contents>
        <TitleBox>
          <TitleLeft>
            <WriteTitleInput
              type="text"
              placeholder="제목"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </TitleLeft>
        </TitleBox>
        <HelpBoard>
          <HelpBoardText>
            <WriteContentsInput
              type="text"
              placeholder="내용을 입력해주세요.."
              value={contents}
              onChange={(e) => setContents(e.target.value)}
            />
          </HelpBoardText>
        </HelpBoard>
      </Contents>

      <BtnDiv>
        <Btn onClick={addBoard}>등록</Btn>
      </BtnDiv>
      <Modal
        open={modalOpen}
        header={clickTitle + " - 게시글 작성"}
        type={true}
        close={closeModal}
        img={modalImg}
        confirm={codeModalOkBtnHandler}
      >
        {modalContent}
      </Modal>
    </Board>
  );
};

export default AnBoardWrite;
