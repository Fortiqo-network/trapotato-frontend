// Pure-CSS animated backdrop — compositor-driven (transform/opacity only), no
// JS runtime. Drifting amber/gold light blobs over the ink canvas + a slowly
// panning grid. Server component (zero client cost).

export function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-20 overflow-hidden bg-ink-950">
      {/* static top aurora */}
      <div className="absolute inset-x-0 top-0 h-[60vh] bg-aurora-radial" />

      {/* drifting light blobs (CSS keyframes, layer-promoted) */}
      <div
        className="anim-blob absolute -top-48 left-[14%] h-[40rem] w-[40rem] rounded-full bg-gold/15 blur-[120px]"
        style={{ animation: "drift1 18s ease-in-out infinite" }}
      />
      <div
        className="anim-blob absolute top-[26%] right-[10%] h-[32rem] w-[32rem] rounded-full bg-amber-500/12 blur-[120px]"
        style={{ animation: "drift2 24s ease-in-out infinite" }}
      />
      <div
        className="anim-blob absolute bottom-[-10%] left-[42%] h-[32rem] w-[32rem] rounded-full bg-gold/10 blur-[130px]"
        style={{ animation: "drift3 21s ease-in-out infinite" }}
      />

      {/* slowly panning grid (transform-based = GPU cheap) */}
      <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000,transparent)]">
        <div
          className="absolute -inset-x-2 -top-12 bottom-0 bg-grid-fade [background-size:46px_46px]"
          style={{ animation: "gridPan 6s linear infinite", willChange: "transform" }}
        />
      </div>
    </div>
  );
}
