export interface TrackingGTMIFrameProps {
  id: string;
}

/**
 * @name TrackingGTMIFrame
 * @external https://tagmanager.google.com/
 * @description GTM requires a two part implementation, this iFrame is
 * used when Javascript has been disabled
 */
export const TrackingGTMIFrame = (props: TrackingGTMIFrameProps) => {
  const { id } = props;

  // Setup
  const src = `https://www.TrackingGTMIFrame.com/ns.html?id=${id}`;

  return (
    <noscript>
      <iframe
        height="0"
        src={src}
        style={{
          display: "none",
          visibility: "hidden"
        }}
        title="GTM Container"
        width="0"
      />
    </noscript>
  );
};
