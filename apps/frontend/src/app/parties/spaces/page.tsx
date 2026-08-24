import React from 'react';
import Image from 'next/image';
import Navbar from '@/components/scarlett/Navbar';
import Footer from '@/components/scarlett/Footer';
import { getCloudinaryUrl, AMBIENCE } from '@/lib/cloudinary';

export default function SpacesPage() {
  const spaces = [
    {
      id: 'living-room',
      title: 'The Living Room',
      location: 'Bandra',
      capacity: 'Upto 20 Guests',
      description: 'The Living Room is where comfort meets celebration. Designed to feel warm, inviting, and effortlessly elegant, it’s an ideal space for birthdays, intimate celebrations, corporate dinners, cocktail evenings, and special occasions. With flexible seating and a welcoming atmosphere, it brings people together over exceptional food, signature drinks, and meaningful conversations. *Valet parking available',
      contact: '+91 74000 99990',
      image: getCloudinaryUrl(AMBIENCE[0] || '')
    },
    {
      id: 'attic',
      title: 'The Attic',
      location: 'Bandra',
      capacity: '50 - 70 Guests',
      description: 'A warm and versatile private event space, The Attic is ideal for celebrations, corporate gatherings, and special occasions. Fully air-conditioned and complete with a dedicated bar, it comfortably accommodates everything from cocktail evenings and seated dinners to bespoke private events. With curated menus, attentive service, and Scarlett House’s signature hospitality, every gathering is designed to feel seamless, memorable, and uniquely yours. *Valet parking available',
      contact: '+91 74000 99990',
      image: getCloudinaryUrl(AMBIENCE[20] || '') // SH_Ambience_AtticBar
    },
    {
      id: 'red-room',
      title: 'The Red Room',
      location: 'Bandra',
      capacity: '12 - 20 Guests',
      description: 'An intimate private space designed for exclusive celebrations, The Red Room offers a personalised experience centred around conversation and cocktails. Complete with a dedicated private bartender, it is perfect for birthdays, anniversaries, and small gatherings. Thoughtfully curated and highly personal, it’s a space where every occasion feels special. *Valet parking available',
      contact: '+91 74000 99990',
      image: getCloudinaryUrl(AMBIENCE[23] || '') // SH_Ambience_Redroom_1
    },
    {
      id: 'glass-house',
      title: 'The Glass House',
      location: 'Juhu',
      capacity: '20 - 25 Guests',
      description: 'Bathed in natural light, The Glass House provides a warm and intimate setting for smaller celebrations, daytime gatherings, and special occasions with family and friends. Especially inviting during the monsoon, it’s the perfect space for long lunches, meaningful conversations, and relaxed, memorable moments. *Valet parking available',
      contact: '+91 79000 99997',
      image: getCloudinaryUrl(AMBIENCE[1] || '')
    },
    {
      id: 'community-space',
      title: 'The Community Space',
      location: 'Juhu',
      capacity: '24 - 30 Guests',
      description: 'Designed to bring people together, The Community Space is ideal for group dining, corporate gatherings, team lunches, anniversaries, and special celebrations. With shared experiences at its heart, the space combines curated menus, attentive service, and Scarlett House hospitality in a relaxed yet elevated setting. *Subject to availability',
      contact: '+91 79000 99997',
      image: getCloudinaryUrl(AMBIENCE[2] || '')
    },
    {
      id: 'full-venue',
      title: 'Full Venue Buyout',
      location: 'Bandra & Juhu',
      capacity: 'Available on Request',
      description: 'For larger celebrations and exclusive occasions, Scarlett House is available for full venue buyouts at both our Bandra and Juhu locations. Whether you’re hosting a wedding celebration, corporate event, brand launch, anniversary, milestone birthday, or a private soirée, the entire restaurant can be reserved to create a truly bespoke experience. With exclusive access to the venue, curated menus, signature cocktails, and personalised service, our team works closely with you to bring every detail to life. From intimate moments to grand celebrations, a full venue buyout allows you to make Scarlett House entirely your own.',
      contact: 'Bandra: +91 74000 99990 | Juhu: +91 79000 99997',
      image: getCloudinaryUrl(AMBIENCE[10] || '') // RMS03876_1
    }
  ];

  return (
    <main className="w-full bg-[#080F0F] relative z-10 min-h-screen font-sans">
      <Navbar />

      {/* Header Section */}
      <section className="relative w-full pt-40 pb-20 px-6 flex flex-col items-center text-center bg-[#851F27]">
        <h1 className="font-serif text-[50px] md:text-[80px] text-[#FDF0D5] mb-6 drop-shadow-lg">
          Our Spaces
        </h1>
        <p className="font-sans text-[16px] md:text-[18px] text-[#FDF0D5]/80 max-w-[600px] leading-relaxed">
          From cosy private rooms to vibrant communal spaces, discover the perfect venue tailored to suit your event.
        </p>
      </section>

      {/* Spaces Listing */}
      <section className="relative w-full py-16 md:py-24 bg-[#080F0F] px-4 md:px-8">
        <div className="max-w-[1200px] mx-auto flex flex-col gap-24">
          {spaces.map((space, index) => (
            <div 
              key={space.id} 
              className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-16 items-center`}
            >
              {/* Image Container */}
              <div className="w-full md:w-1/2 aspect-[4/5] md:aspect-[3/4] relative overflow-hidden group">
                <Image 
                  src={space.image} 
                  alt={space.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
              </div>

              {/* Text Container */}
              <div className="w-full md:w-1/2 flex flex-col items-start px-4 md:px-0 text-[#FDF0D5]">
                <div className="flex items-center gap-4 mb-4">
                  <span className="font-sans text-[14px] uppercase tracking-[0.2em] text-[#FDF0D5]/60 border border-[#FDF0D5]/30 px-3 py-1">
                    {space.location}
                  </span>
                </div>
                
                <h2 className="font-serif text-[40px] md:text-[56px] leading-tight mb-6">
                  {space.title}
                </h2>
                
                <div className="w-full h-[1px] bg-[#FDF0D5]/20 mb-8" />
                
                <p className="font-sans text-[16px] md:text-[18px] leading-relaxed text-[#FDF0D5]/80 mb-8">
                  {space.description}
                </p>

                <div className="flex flex-col gap-3 font-sans text-[15px] uppercase tracking-wider text-[#FDF0D5]/90 mb-10">
                  <p><span className="text-[#FDF0D5]/50 mr-2">Capacity:</span> {space.capacity}</p>
                  <p><span className="text-[#FDF0D5]/50 mr-2">Contact:</span> {space.contact}</p>
                </div>

                <a 
                  href={`tel:${space.contact.includes('|') ? '+917400099990' : space.contact.replace(/\s+/g, '')}`}
                  className="inline-block font-serif text-[16px] md:text-[18px] text-[#080F0F] bg-[#FDF0D5] px-8 py-3 tracking-widest uppercase hover:bg-transparent hover:text-[#FDF0D5] border border-[#FDF0D5] transition-colors"
                >
                  Enquire Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}
