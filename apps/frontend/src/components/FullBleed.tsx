import Image from 'next/image';

export default function FullBleed() {
  return (
    <>
      <div className="w-screen relative left-1/2 -translate-x-1/2 fade-in overflow-hidden">
        <div className="img-frame aspect-[21/9] relative group">
          <Image
            src="/IMG_3929.JPEG"
            alt="Panoramic View"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-1000"
          />
        </div>
      </div>
      <hr className="divider" />
    </>
  );
}
