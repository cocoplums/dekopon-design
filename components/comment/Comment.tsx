import React, { ReactNode } from "react";
import { Button } from "../button";
import { IconMessage } from "@dekopon/icon";
interface CommentProps {
  author?: string;
  avatar?: string;
  content?: string;
  datetime?: string;
  children?: ReactNode;
}
const Comment = (props: CommentProps) => {
  const { author, avatar, content, datetime, children } = props;
  return (
    <div className={"zzf-comment"}>
      {avatar && <img className="zzf-comment-avatar" src={avatar} alt="" />}
      <div className="zzf-comment-content-container">
        <header className="zzf-comment-header">
          <span>{author}</span>
          <span>{datetime}</span>
        </header>
        <p className={"zzf-comment-content"}>{content}</p>
        <div className={"zzf-comment-actions"}>
          <IconMessage /> Replay
        </div>
        <div className={"zzf-comment-replay"}>{children}</div>
      </div>
    </div>
  );
};
export default Comment;
