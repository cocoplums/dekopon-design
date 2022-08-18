import React, { ReactNode } from "react";
import { IconMessage } from "@dekopon/icon";
interface CommentProps {
  author?: string;
  avatar?: string;
  content?: string;
  datetime?: string;
  children?: ReactNode;
  onReply?: () => void;
}
const Comment = (props: CommentProps) => {
  const { author, avatar, content, datetime, children, onReply } = props;
  return (
    <div className={"zzf-comment"}>
      {avatar && <img className="zzf-comment-avatar" src={avatar} alt="" />}
      <div className="zzf-comment-content-container">
        <header className="zzf-comment-header">
          <span>{author}</span>
          <span>{datetime}</span>
        </header>
        <div className={"zzf-comment-content"}>{content}</div>
        <div onClick={onReply} className={"zzf-comment-actions"}>
          <IconMessage /> Reply
        </div>
        <div className={"zzf-comment-replay"}>{children}</div>
      </div>
    </div>
  );
};
export default Comment;
