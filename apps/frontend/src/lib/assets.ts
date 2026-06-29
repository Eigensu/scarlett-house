
export const ambienceImages = [
  "/assets/ambience/45F8C6BC-2C38-4A11-B951-7359BAA34BBA.jpg",
  "/assets/ambience/RMS03674.PNG",
  "/assets/ambience/RMS03694.PNG",
  "/assets/ambience/RMS03723.PNG",
  "/assets/ambience/RMS03737.PNG",
  "/assets/ambience/RMS03768.PNG",
  "/assets/ambience/RMS03784.PNG",
  "/assets/ambience/RMS03807.PNG",
  "/assets/ambience/RMS03827.PNG",
  "/assets/ambience/RMS03841.PNG",
  "/assets/ambience/RMS03858.PNG",
  "/assets/ambience/RMS03876_1.PNG",
  "/assets/ambience/RMS03940.PNG",
  "/assets/ambience/RMS03985.PNG",
  "/assets/ambience/RMS03996.PNG",
  "/assets/ambience/RMS04010.PNG",
  "/assets/ambience/RMS04045.PNG",
  "/assets/ambience/RMS04066.PNG",
  "/assets/ambience/RMS04072.PNG",
  "/assets/ambience/RMS04090.PNG",
  "/assets/ambience/RMS04118.PNG",
  "/assets/ambience/SH_Ambience_AtticBar.jpg",
  "/assets/ambience/SH_Ambience_Attic_1.jpg",
  "/assets/ambience/SH_Ambience_Attic_2.jpg",
  "/assets/ambience/SH_Ambience_Redroom_1.jpeg",
  "/assets/ambience/SH_Ambience_Redroom_2.jpeg"
];
export const foodImages = [
  "/assets/food-drinks/Bandra_Babe.JPG",
  "/assets/food-drinks/First_Jobbers_Vent_Out_Session_.jpg",
  "/assets/food-drinks/First_Kiss.jpg",
  "/assets/food-drinks/First_Monsoon_Bus_Ride.jpg",
  "/assets/food-drinks/First_Puff.jpg",
  "/assets/food-drinks/Inspiration.JPG",
  "/assets/food-drinks/Monsoon_Bus_Ride.JPG",
  "/assets/food-drinks/Nostalgia_2.0.jpg"
];
export const drinkImages = [
  "/assets/food-drinks/First_Licensed_Bar.jpg"
];

export function getRandomItems<T>(arr: T[], n: number): T[] {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, n);
}
