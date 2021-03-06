import React, { createRef } from "react";
import { BsPlusCircle } from "react-icons/bs";
import { BorderCard, Indicator } from "components/atoms";
import {
    ImageSlider,
    PostHeader,
    PostContent,
    CommentIcon,
    CommentForm,
    LikeString,
    Comment,
} from "components/molecules";
import { theme } from "styles";
import { IComment } from "types/types";
import {
    ImageContainer,
    ContentContainer,
    CommentFormContainer,
    IconContainer,
    RightContainer,
    CircleContainer,
    MiddleContainer,
    CommentsContainer,
} from "./styles";

interface IProps {
    images: string[];
    isLike: boolean;
    content: string;
    nickname: string;
    profileImageUrl: string;
    loading: boolean;
    isMore: boolean;
    id: number;
    comments: IComment[];
    handleClickLike: () => void;
    moreOnClick: () => void;
    successComment: () => void;
    handleMoreComment: () => void;
}

const PostCard: React.FC<IProps> = ({
    images,
    isLike,
    content,
    nickname,
    profileImageUrl,
    loading,
    isMore,
    id,
    comments,
    handleClickLike,
    moreOnClick,
    successComment,
    handleMoreComment,
}) => {
    const inputRef = createRef<HTMLInputElement>();

    // const text = ["asdfasdfasdfafsdasdfasdfasdfasdfasdfadfasdf", "Asdf", "asdf", "asdf"];

    const handleClickComment = () => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

    const handleClickCommentLike = (index: number) => {};

    const handleCommentClick = () => {};

    if (loading) {
        return (
            <MiddleContainer>
                <Indicator type="spin" size="80px" color={theme.colors.lightText} />
            </MiddleContainer>
        );
    }
    return (
        <BorderCard>
            <ImageContainer>
                <ImageSlider width="598px" height="598px" images={images} />
            </ImageContainer>
            <RightContainer>
                <PostHeader
                    height="72px"
                    nickname={nickname}
                    profileImageUrl={profileImageUrl}
                    moreOnClick={moreOnClick}
                />
                <ContentContainer>
                    <PostContent
                        nickname={nickname}
                        profileImageUrl={profileImageUrl}
                        content={content}
                    />
                    <CommentsContainer>
                        {comments.map((data, index) => (
                            <Comment
                                key={data + String(index)}
                                comment={data}
                                isLike={false}
                                handleClickCommentLike={() => {
                                    handleClickCommentLike(index);
                                }}
                            />
                        ))}
                    </CommentsContainer>
                    {isMore ? (
                        <CircleContainer onClick={handleMoreComment}>
                            <BsPlusCircle size="24px" />
                        </CircleContainer>
                    ) : (
                        <></>
                    )}
                </ContentContainer>
                <IconContainer>
                    <CommentIcon
                        isLike={isLike}
                        handleClickComment={handleClickComment}
                        handleClickLike={handleClickLike}
                    />
                    <LikeString />
                </IconContainer>
                <CommentFormContainer>
                    <CommentForm id={id} ref={inputRef} successComment={successComment} />
                </CommentFormContainer>
            </RightContainer>
        </BorderCard>
    );
};

export default PostCard;
