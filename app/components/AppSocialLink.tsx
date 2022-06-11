import type { Social } from "~/data/resume";

export interface AppSocialLinkProps {
  data: Social;
}

export const AppSocialLink = (props: AppSocialLinkProps) => {
  const { data } = props;

  // Setup
  const alt = `Follow me on ${data.title}`;
  const size = 14;

  return (
    <a
      className="flex items-center gap-4 break-words break-all text-sm text-color-copy-light"
      href={data.url}
      key={data.title}
      rel="noopener noreferrer"
      target="_blank"
    >
      <img alt={alt} height={size} src={data.icon} width={size} />
      {data.title}
    </a>
  );
};
