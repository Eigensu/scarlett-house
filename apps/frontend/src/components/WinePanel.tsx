import Image from 'next/image';

const TAPE_TEXT = 'Now taking online bookings · call us on 0447 043 404';
const TAPE_TEXT_B = 'Bear with us while we learn the new system · so feel free to call';

function TapeDot() {
  return <span className="not-italic mr-[22px] text-brand-red">·</span>;
}

export default function WinePanel() {
  return (
    <section
      className="relative bg-wine overflow-hidden text-cream"
      id="panel"
      style={{
        padding:
          'clamp(60px,9vh,110px) clamp(20px,5vw,64px) clamp(120px,18vh,220px)',
        textAlign: 'center',
      }}
    >
      {/* Large decorative wordmark */}
      <h2
        className="font-fraunces text-[clamp(46px,9vw,120px)] text-ink leading-[0.9] fade-in"
      >
        Scarlett House
      </h2>

      {/* Content column */}
      <div className="max-w-[760px] mx-auto text-left">
        <p className="font-sans text-[clamp(16px,1.7vw,21px)] leading-[1.4] text-cream mt-[6vh] mb-[4vh] fade-in">
          The last table on the road — the one set for everyone who walks in,
          in search of a taste of home.
        </p>

        <figure
          className="relative overflow-hidden fade-in"
          style={{ aspectRatio: '16/10' }}
        >
          <Image
            src="/IMG_3925.JPEG"
            alt="The dining room"
            fill
            className="object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.04]"
          />
        </figure>

        <p className="font-sans text-[clamp(15px,1.6vw,20px)] leading-[1.45] mt-[5vh] text-cream/90 fade-in">
          Market-fresh produce, cooked plainly and well, met with hospitality
          and an old-world charm. Life as it was, and as it always should be.
        </p>
      </div>

      {/* Diagonal tape A — bottom-left slope */}
      <div
        className="absolute overflow-hidden z-[2] pointer-events-none bg-tape py-[11px]"
        style={{
          left: '-15vw',
          width: '130vw',
          top: '70%',
          transform: 'rotate(-8deg)',
        }}
        aria-hidden="true"
      >
        <div
          className="flex w-max whitespace-nowrap"
          style={{ animation: 'ticker 44s linear infinite' }}
        >
          {Array.from({ length: 6 }).map((_, i) => (
            <span
              key={i}
              className="font-fraunces italic text-[clamp(13px,1.5vw,19px)] px-[22px] text-cream/90"
            >
              <TapeDot />
              {TAPE_TEXT}
            </span>
          ))}
        </div>
      </div>

      {/* Diagonal tape B — top-right slope */}
      <div
        className="absolute overflow-hidden z-[2] pointer-events-none bg-tape py-[11px]"
        style={{
          left: '-15vw',
          width: '130vw',
          top: '30%',
          transform: 'rotate(7deg)',
        }}
        aria-hidden="true"
      >
        <div
          className="flex w-max whitespace-nowrap"
          style={{ animation: 'ticker 52s linear infinite reverse' }}
        >
          {Array.from({ length: 6 }).map((_, i) => (
            <span
              key={i}
              className="font-fraunces italic text-[clamp(13px,1.5vw,19px)] px-[22px] text-cream/90"
            >
              <TapeDot />
              {TAPE_TEXT_B}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
