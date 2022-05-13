import classnames from "classnames";
export interface LogoProps {
  className?: string;
  fill?: string;
  height?: number;
}

export const Logo = (props: LogoProps) => {
  const { className = "", fill = "", height = 59 } = props;

  // Styles
  const cssComponent = classnames("logo", className);

  return (
    <svg
      className={cssComponent}
      height={height}
      viewBox="0 0 100 59"
      // renderingIntent="geometricPrecision"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m72.573561 53.8100014-4.7761176-10.8100014-4.7761176 10.8100014h-5.2238824-5.2238824l-4.7761176-10.8100014-4.7761176 10.8100014h-18.9984302l23.7745478-53.8100014 10 22.6334489 10-22.6334489 23.7745479 53.8100014zm-65.46601601-32.0470011 9.61541491-21.7630003h2.8056379l-11.01823389 24.9380633zm2.7140959 6.5404709 12.50515171-28.3034712h3.8379913l-14.4241473 32.6468202zm18.90131901-28.3034712h15.8490314l-23.7745479 53.8100014-4-9.0533796 19.7745479-44.7566218zm0 0h5.441824l-18.5541552 41.9944523-2.7209119-6.1583623zm-23.36631575 14.1239332-5.35664415-12.1239332h10.7132883z"
        fill={fill}
        // fillRule="evenodd"
        textRendering="geometricPrecision"
        renderingIntent="geometricPrecision"
      />
    </svg>
  );
};
