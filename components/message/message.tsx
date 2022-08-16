import RCNotification from "rc-notification";
import type { NotificationInstance as RCNotificationInstance } from "rc-notification/lib/Notification";
import {
  IconInfoCircleFill,
  IconCheckCircleFill,
  IconCloseCircleFill,
  IconExclamationCircleFill,
  IconLoading,
} from "@dekopon/icon";
import React from "react";

let messageInstance: RCNotificationInstance | null;

function getRCNotificationInstance(args: any, callback: (info: {instance:RCNotificationInstance}) => void) {
  if (messageInstance) {
    callback({ instance: messageInstance });
    return;
  }
  RCNotification.newInstance(
    {
      prefixCls: "dekopon-notification",
    },
    (instance: any) => {
      if (messageInstance) {
        callback({ instance: messageInstance });
        return;
      }
      messageInstance = instance;

      callback({ instance });
    }
  );
}
function attachTypeApi(originalApi: any, type: any) {
  originalApi[type] = (content: any, duration?: any, onClose?: any) => {
    return originalApi.open({ content, duration, type, onClose });
  };
}

function notice(args: any): any {
  const target = args.key;
  const { content, duration, type } = args;
  const closePromise = new Promise((resolve) => {
    getRCNotificationInstance(args, ({ instance }) => {
      instance.notice({
        key:Date.now(),
        duration: 3,
        content: (
          <div>
            {React.createElement(typeToIcon[type as NoticeType])}
            {content}
          </div>
        ),
      });
    });
  });
  const result: any = () => {
    if (messageInstance) {
      messageInstance.removeNotice(target);
    }
  };
  result.then = (filled: any, rejected: any) =>
    closePromise.then(filled, rejected);
  result.promise = closePromise;
  return result;
}

const Message = {
  open: notice,
};
const typeToIcon = {
  info: IconInfoCircleFill,
  success: IconCheckCircleFill,
  error: IconCloseCircleFill,
  warning: IconExclamationCircleFill,
  loading: IconLoading,
};
type NoticeType = keyof typeof typeToIcon;
const typeList = Object.keys(typeToIcon) as NoticeType[];
typeList.forEach((type) => attachTypeApi(Message, type));
type MessageInstance = {
  info(content: React.ReactNode, duration?: number): void;
  success(content: React.ReactNode, duration?: number): void;
  error(content: React.ReactNode, duration?: number): void;
  warning(content: React.ReactNode, duration?: number): void;
  loading(content: React.ReactNode, duration?: number): void;
  open(content: React.ReactNode, duration?: number): void;
};
export default Message as MessageInstance;
