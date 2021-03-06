import React, { createRef, useState } from "react";
import { BorderCard, ModalContainer, TimeText } from "components/atoms";
import {
    ImageSlider,
    PostHeader,
    PostContent,
    CommentIcon,
    CommentForm,
    LikeString,
    MoreBox,
} from "components/molecules";
import { PostContainer } from "containers";
import {
    ImageContainer,
    ContentContainer,
    CommentFormContainer,
    IconContainer,
    DownContainer,
    LightBoldText,
} from "./styles";

interface IProps {
    images: string[];
    isLike: boolean;
    canClick: boolean;
    // eslint-disable-next-line no-unused-vars
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleClickLike: () => void;
}

const FeedPostCard: React.FC<IProps> = ({
    images,
    isLike,
    canClick,
    onChange,
    handleClickLike,
}) => {
    const [moreShow, setMoreShow] = useState<boolean>(false);
    const [isShow, setIsShow] = useState<boolean>(false);
    const inputRef = createRef<HTMLInputElement>();

    const id = "10";

    const content = `TIEB 소프트터치 터틀넥 가디건의 마지막 3차 (입고 소식을 전합니다.
        \n니트는 제가 가장 깊히 알고 있는 분야이다보니 아무래도 신경이 더욱 쓰이지만, 그만큼 개인적인 애착의 마음도 큽니다. 때문에 이 제품엔 좀처럼 제게 없는 완벽주의적인 집착과 창작에 대한 순수한 기쁨이 모두 담겨 있습니다.`;

    const handleClickComment = () => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

    const handleCommentClick = () => {};

    return (
        <>
            <ModalContainer isShow={isShow} setIsShow={setIsShow}>
                {/* <PostCard
                    id={1}
                    loading={false}
                    moreOnClick={() => setMoreShow(true)}
                    images={images}
                    isLike={isLike}
                    canClick={canClick}
                    content={content}
                    onChange={onChange}
                    handleClickLike={handleClickLike}
                /> */}
                <></>
            </ModalContainer>
            <ModalContainer isShow={moreShow} setIsShow={setMoreShow}>
                <MoreBox id={id} />
            </ModalContainer>
            <BorderCard style={{ flexDirection: "column", marginBottom: "60px" }}>
                <PostHeader
                    height="72px"
                    profileImageUrl=""
                    nickname=""
                    moreOnClick={() => setMoreShow(true)}
                />
                <ImageContainer>
                    <ImageSlider width="614px" height="614px" images={images} />
                </ImageContainer>
                <DownContainer>
                    <IconContainer>
                        <CommentIcon
                            isLike={isLike}
                            handleClickComment={handleClickComment}
                            handleClickLike={handleClickLike}
                        />
                        <LikeString isFeed />
                    </IconContainer>
                    <ContentContainer>
                        <PostContent
                            profileImageUrl=""
                            nickname=""
                            content={content}
                            isFeed
                        />
                        <LightBoldText onClick={() => setIsShow(true)}>
                            댓글 모두보기
                        </LightBoldText>
                        <TimeText text="1시간 전" size="12px" />
                    </ContentContainer>
                    <CommentFormContainer>
                        <CommentForm ref={inputRef} id={1} successComment={() => {}} />
                    </CommentFormContainer>
                </DownContainer>
            </BorderCard>
        </>
    );
};

export default FeedPostCard;
