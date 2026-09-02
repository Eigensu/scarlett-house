import React from 'react';
import Image from 'next/image';
import { Users } from 'lucide-react';
import Navbar from '@/components/scarlett/Navbar';
import { getCloudinaryUrl, AMBIENCE, EXP_ATTIC } from '@/lib/cloudinary';

export default function SpacesPage() {
  const regularSpaces = [
    {
      id: 'living-room',
      title: 'The Living Room',
      location: 'Bandra',
      capacity: 'Upto 20 Guests',
      description: 'The Living Room is where comfort meets celebration. Designed to feel warm, inviting, and effortlessly elegant, it’s an ideal space for birthdays, intimate celebrations, corporate dinners, cocktail evenings, and special occasions.\n\nWith flexible seating and a welcoming atmosphere, it brings people together over exceptional food, signature drinks, and meaningful conversations.',
      contact: '+91 74000 99990',
      image: '/F285B01C-9302-45D8-A31B-1718E8029B1B.PNG'
    },
    {
      id: 'attic',
      title: 'The Attic',
      location: 'Bandra',
      capacity: '50 - 70 Guests',
      description: 'A warm and versatile private event space, The Attic is ideal for celebrations, corporate gatherings, and special occasions. Fully air-conditioned and complete with a dedicated bar, it comfortably accommodates everything from cocktail evenings and seated dinners to bespoke private events.\n\nWith curated menus, attentive service, and Scarlett House’s signature hospitality, every gathering is designed to feel seamless, memorable, and uniquely yours.',
      contact: '+91 74000 99990',
      image: getCloudinaryUrl(EXP_ATTIC)
    },
    {
      id: 'red-room',
      title: 'The Red Room',
      location: 'Bandra',
      capacity: '12 - 20 Guests',
      description: 'An intimate private space designed for exclusive celebrations, The Red Room offers a personalised experience centred around conversation and cocktails.\n\nComplete with a dedicated private bartender, it is perfect for birthdays, anniversaries, and small gatherings.\n\nThoughtfully curated and highly personal, it’s a space where every occasion feels special.',
      contact: '+91 74000 99990',
      image: getCloudinaryUrl(AMBIENCE[23]) // SH_Ambience_Redroom_1
    },
    {
      id: 'glass-house',
      title: 'The Glass House',
      location: 'Juhu',
      capacity: '20 - 25 Guests',
      description: 'Bathed in natural light, The Glass House provides a warm and intimate setting for smaller celebrations, daytime gatherings, and special occasions with family and friends.\n\nEspecially inviting during the monsoon, it’s the perfect space for long lunches, meaningful conversations, and relaxed, memorable moments.',
      contact: '+91 79000 99997',
      image: getCloudinaryUrl(AMBIENCE[4]) // RMS03768
    },
    {
      id: 'community-space',
      title: 'The Community Space',
      location: 'Juhu',
      capacity: '24 - 30 Guests',
      description: 'Designed to bring people together, The Community Space is ideal for group dining, corporate gatherings, team lunches, anniversaries, and special celebrations.\n\nWith shared experiences at its heart, the space combines curated menus, attentive service, and Scarlett House hospitality in a relaxed yet elevated setting.',
      contact: '+91 79000 99997',
      image: getCloudinaryUrl(AMBIENCE[14]) // RMS04010
    }
  ];

  return (
    <main className="w-full bg-[#080F0F] relative z-10 min-h-screen font-sans">
      <Navbar />

      {/* Header Section */}
      <section className="relative w-full pt-40 pb-16 px-6 flex flex-col items-center text-center bg-[#851F27]">
        <h1 className="font-serif text-[50px] md:text-[80px] text-[#FDF0D5] mb-6 drop-shadow-lg">
          Our Spaces
        </h1>
        <p className="font-sans text-[16px] md:text-[18px] text-[#FDF0D5]/80 max-w-[600px] leading-relaxed">
          From cosy private rooms to vibrant communal spaces, discover the perfect venue tailored to suit your event.
        </p>
      </section>

      {/* Spaces Listing */}
      <section className="relative w-full py-20 md:py-32 bg-[#080F0F] px-4 md:px-12">
        <div className="max-w-[1300px] mx-auto flex flex-col gap-32">
          {regularSpaces.map((space, index) => (
            <div 
              key={space.id} 
              className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-20 items-center`}
            >
              {/* Image Container */}
              <div className="w-full lg:w-[55%] aspect-[4/5] lg:aspect-[4/3] relative overflow-hidden group">
                <Image 
                  src={space.image} 
                  alt={space.title}
                  fill
                  unoptimized={true}
                  className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 55vw"
                />
                <div className="absolute inset-0 bg-black/10 transition-colors duration-500 group-hover:bg-transparent" />
              </div>

              {/* Text Container */}
              <div className="w-full lg:w-[45%] flex flex-col items-start px-4 lg:px-0 text-[#FDF0D5]">
                <div className="flex items-center gap-4 mb-6">
                  <span className="font-sans text-[14px] uppercase tracking-[0.2em] text-[#FDF0D5]/70 border border-[#FDF0D5]/30 px-4 py-1.5">
                    {space.location}
                  </span>
                </div>
                
                <h2 className="font-serif text-[44px] md:text-[56px] lg:text-[64px] leading-tight mb-8">
                  {space.title}
                </h2>
                
                <div className="w-full h-[1px] bg-[#FDF0D5]/20 mb-8" />
                
                <div className="font-sans text-[16px] md:text-[18px] leading-relaxed text-[#FDF0D5]/80 mb-10 space-y-4">
                  {space.description.split('\n\n').map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>

                <div className="flex flex-col gap-3 font-sans text-[15px] uppercase tracking-[0.1em] text-[#FDF0D5]/90 mb-12">
                  <p><span className="text-[#FDF0D5]/50 mr-2">Capacity:</span> {space.capacity}</p>
                  <p><span className="text-[#FDF0D5]/50 mr-2">Contact:</span> {space.contact}</p>
                </div>

                <a 
                  href={`tel:${space.contact.includes('|') ? '+917400099990' : space.contact.replace(/\s+/g, '')}`}
                  className="inline-block font-serif text-[16px] md:text-[18px] text-[#080F0F] bg-[#FDF0D5] px-10 py-4 tracking-widest uppercase hover:bg-transparent hover:text-[#FDF0D5] border border-[#FDF0D5] transition-colors"
                >
                  Enquire Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Full Venue Buyout Special Editorial Section */}
      <section className="relative w-full min-h-[100svh] bg-[#080F0F] px-6 md:px-12 lg:px-16 flex flex-col justify-center items-center overflow-hidden py-16">
        
        <div className="w-full max-w-[1400px] flex flex-col lg:flex-row gap-12 lg:gap-16 relative z-10 items-center">
          
          {/* Left Text Column */}
          <div className="w-full lg:w-[45%] flex flex-col justify-center text-[#FDF0D5]">
            <h2 className="font-serif italic text-[46px] md:text-[64px] lg:text-[72px] leading-[1.1] mb-6">
              Full Venue<br/>Buyout
            </h2>
            
            <div className="flex items-center gap-4 mb-6 text-[15px] md:text-[16px] uppercase tracking-[0.2em] font-sans border-b border-[#FDF0D5]/30 pb-3 w-fit">
              <Users className="w-5 h-5 text-[#FDF0D5]/80" />
              <span>Available on Request</span>
            </div>
            
            <div className="font-sans text-[15px] md:text-[16px] leading-[1.6] text-[#FDF0D5]/90 space-y-4 max-w-[550px]">
              <p>For larger celebrations and exclusive occasions, Scarlett House is available for full venue buyouts at both our Bandra and Juhu locations.</p>
              <p>Whether you’re hosting a wedding celebration, corporate event, brand launch, anniversary, milestone birthday, or a private soirée, the entire restaurant can be reserved to create a truly bespoke experience.</p>
              <p>With exclusive access to the venue, curated menus, signature cocktails, and personalised service, our team works closely with you to bring every detail to life. From intimate moments to grand celebrations, a full venue buyout allows you to make Scarlett House entirely your own.</p>
            </div>
            
            {/* contact */}
            <div className="mt-8 uppercase tracking-[0.15em] text-[#FDF0D5]/70 font-sans text-[14px]">
              <p className="mb-2">Bandra: +91 74000 99990</p>
              <p>Juhu: +91 79000 99997</p>
            </div>
          </div>
          
          {/* Right Images Column */}
          <div className="w-full lg:w-[55%] flex flex-col">
            <div className="w-full h-[50vh] md:h-[60vh] lg:h-[65vh] max-h-[800px] relative flex gap-3 md:gap-6">
              {/* Bandra Image */}
              <div 
                className="w-1/2 h-full relative group overflow-hidden"
                style={{ clipPath: 'polygon(0 16%, 100% 0%, 100% 100%, 0 100%)' }}
              >
                <Image 
                  src="/F285B01C-9302-45D8-A31B-1718E8029B1B.PNG"
                  fill 
                  unoptimized={true}
                  alt="Full Venue Buyout Bandra" 
                  className="object-cover transition-transform duration-700 group-hover:scale-105" 
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 z-10 pointer-events-none" />
                <div className="absolute bottom-6 md:bottom-8 w-full text-center text-[#FDF0D5] font-serif italic text-[22px] md:text-[32px] z-20 pointer-events-none">
                  Bandra
                </div>
              </div>

              {/* Juhu Image (RMS03737) */}
              <div 
                className="w-1/2 h-full relative group overflow-hidden"
                style={{ clipPath: 'polygon(0 0%, 100% 16%, 100% 100%, 0 100%)' }}
              >
                <Image 
                  src={getCloudinaryUrl(AMBIENCE[3])} 
                  fill 
                  unoptimized={true}
                  alt="Full Venue Buyout Juhu" 
                  className="object-cover transition-transform duration-700 group-hover:scale-105" 
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 z-10 pointer-events-none" />
                <div className="absolute bottom-6 md:bottom-8 w-full text-center text-[#FDF0D5] font-serif italic text-[22px] md:text-[32px] z-20 pointer-events-none">
                  Juhu
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
