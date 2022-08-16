import React, { PropsWithChildren, ReactNode } from "react";
import { findDOMNode } from "react-dom";
import { Tabs } from "@arco-design/web-react";
import { Button, Message, Tooltip } from "@dekopon/design";
import { IconCode, IconCopy } from "@dekopon/icon";
import ClipboardJS from "clipboard";
import Css from "./css";
import Short from "./short";

interface CellCodeProps {
  tsx?: ReactNode;
  cssCode?: string;
}

interface CellCodeState {
  showAll: boolean;
  codeType: "jsx" | "tsx";
}

const CODE_JSX = "jsx";
const CODE_TSX = "tsx";

const locales = {
  "zh-CN": {
    copy: "复制",
    copied: "复制成功",
    expand: "展开代码",
    collapse: "收起代码",
    codePen: "在 CodePen 打开",
    codeSandbox: "在 CodeSandBox 打开",
  },
  "en-US": {
    copy: "Copy",
    copied: "Copied Success!",
    expand: "Expand Code",
    collapse: "Collapse Code",
    codePen: "Open in CodePen",
    codeSandbox: "Open in CodeSandBox",
  },
};

class CellCode extends React.Component<
  PropsWithChildren<CellCodeProps>,
  CellCodeState
> {
  private btnCopy = null;

  private codeEle = null;

  constructor(
    props:
      | React.PropsWithChildren<CellCodeProps>
      | Readonly<React.PropsWithChildren<CellCodeProps>>
  ) {
    super(props);
    this.state = {
      showAll: false,
      codeType: props.tsx ? CODE_TSX : CODE_JSX,
    };
  }

  componentDidMount() {
    const t = locales["zh-CN"];
    const clipboard = new ClipboardJS(findDOMNode(this.btnCopy) as Element, {
      text: () => {
        return (
          (this.codeEle as any as HTMLElement).querySelector(
            ".language-js"
          ) as HTMLElement
        ).innerText;
      },
    });
    clipboard.on("success", (e) => {
      e.clearSelection();
      Message.success(t.copied);
    });
  }

  toggleCodeType = () => {
    this.setState((prevState) => {
      return {
        codeType: prevState.codeType === CODE_TSX ? CODE_JSX : CODE_TSX,
      };
    });
  };

  toggleCode = (e: any) => {
    // 修正点击展开按钮时，页面向上滚动而不是向下滚动的问题
    if (!this.state.showAll) {
      e.target.blur();
    }
    this.setState({
      showAll: !this.state.showAll,
    });
  };

  renderOperations = () => {
    const { showAll, codeType } = this.state;
    const t = locales["zh-CN"];

    return (
      <div className="arco-code-operations">
        {this.props.tsx && (
          <Tabs
            size="small"
            justify
            type="capsule"
            activeTab={codeType}
            onChange={this.toggleCodeType}
            className={`code-type-switch ${showAll ? "show-all" : ""}`}
          >
            <Tabs.TabPane key={CODE_JSX} title="JS" />
            <Tabs.TabPane key={CODE_TSX} title="TS" />
          </Tabs>
        )}
        <Tooltip id={"code"} content={showAll ? t.collapse : t.expand}>
          <span>
            <Button
              aria-describedby={"code"}
              size="small"
              onClick={this.toggleCode}
              type="secondary"
              aria-label={t.collapse}
              className={showAll ? "ac-btn-expanded" : ""}
            >
              <IconCode />
            </Button>
          </span>
        </Tooltip>
        <Tooltip content={t.copy}>
          <span>
            <Button
              size="small"
              ref={(ref: any) => (this.btnCopy = ref)}
              type="secondary"
              aria-label={t.copy}
            >
              <IconCopy className="copy-icon" />
            </Button>
          </span>
        </Tooltip>
      </div>
    );
  };

  render() {
    const props = this.props;
    const { showAll, codeType } = this.state;
    return (
      <div className="arco-code-wrapper">
        {this.renderOperations()}
        <div className={`content-code-design ${showAll ? "show-all" : ""}`}>
          <div className="code" ref={(ref: any) => (this.codeEle = ref)}>
            {codeType === CODE_TSX ? props.tsx : props.children}
          </div>
        </div>
      </div>
    );
  }
}

type CellCodeType = typeof CellCode & { Css: any; Short: any };

(CellCode as CellCodeType).Css = Css;
(CellCode as CellCodeType).Short = Short;

export default CellCode as CellCodeType;
