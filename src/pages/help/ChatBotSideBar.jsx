import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import {
  FaTrashAlt,
  FaExternalLinkAlt,
  FaArrowLeft,
  FaPlus,
} from "react-icons/fa";
import { GoPerson } from "react-icons/go";
import { MdLogout } from "react-icons/md";
import { useChatContext } from "../../contexts/ChatContext";
import {
  Sidebar,
  Menu,
  NewChatBox,
  Back,
  NewChatBtn,
  SettingBox,
  SetDetailTop,
  SetDetail,
  ConversationList,
  ConversationItem,
  DeleteButton,
} from "./ChatBotSideBarStyles"; // 스타일 파일을 가져옴

const ChatBotSideBar = ({ onNewChat }) => {
  const navigate = useNavigate();
  const { conversations, deleteConversation, setCurrentConversation } =
    useChatContext();

  const goSetting = () => navigate("/setting");
  const goBack = () => navigate(-1);
  const logOutBtnHandler = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    navigate("/");
  };

  const handleConversationClick = (conv) => {
    setCurrentConversation(conv);
    // 필요하다면 여기에 추가적인 로직을 넣을 수 있습니다.
  };

  return (
    <Sidebar>
      <Menu>
        <Back>
          <FaArrowLeft onClick={goBack} size={20} />
        </Back>
        <NewChatBox>
          <NewChatBtn onClick={onNewChat}>
            새 채팅
            <FaPlus size={14} />
          </NewChatBtn>
        </NewChatBox>
        <ConversationList>
          {conversations.map((conv) => (
            <ConversationItem
              key={conv.id}
              onClick={() => handleConversationClick(conv)}
            >
              대화 {new Date(conv.id).toLocaleString()}
              <DeleteButton
                onClick={(e) => {
                  e.stopPropagation();
                  deleteConversation(conv.id);
                }}
              >
                <FaTrashAlt />
              </DeleteButton>
            </ConversationItem>
          ))}
        </ConversationList>
        <SettingBox>
          <SetDetail onClick={goSetting}>
            <GoPerson />
            계정관리
          </SetDetail>
          <SetDetail
            onClick={() => {
              navigate("/help");
            }}
          >
            <FaExternalLinkAlt />
            FAQ
          </SetDetail>
          <SetDetail onClick={logOutBtnHandler}>
            <MdLogout />
            로그아웃
          </SetDetail>
        </SettingBox>
      </Menu>
    </Sidebar>
  );
};

export default ChatBotSideBar;
