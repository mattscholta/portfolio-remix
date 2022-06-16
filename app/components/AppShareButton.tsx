import { useWebShareAPI } from "~/hooks/useWebShareAPI";

export const AppShareLink = () => {
  // Hooks
  const { isAvailable, onShare } = useWebShareAPI();

  // Handlers
  const onClick = () => {
    onShare("https://mattscholta.com/resume");
  };

  // Short Circuit
  if (!isAvailable) return null;

  return (
    <button
      className="ui-btn custom-bg-gradient whitespace-nowrap rounded-2xl py-2 px-4 text-sm font-normal text-white"
      onClick={onClick}
    >
      <img alt="Share" height={20} src="/images/svg/share.svg" width={20} />
    </button>
  );
};
