import "./screen-splitter.scss";

const ScreenSplitter = ({ leftClass = "", rigthClass = "", children }) => {
  const [left, rigth] = children;

  return (
    <div className="screen-splitter">
      <div className={`screen-splitter__left ${leftClass}`}>{left}</div>

      <div className={`screen-splitter__right ${rigthClass}`}>{rigth}</div>
    </div>
  );
};

export default ScreenSplitter;
