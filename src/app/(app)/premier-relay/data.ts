export type Franchise = {
  id: string;
  name: string;
  logoImage: string;
  teamImage: string;
  color: string;
  secondaryColor?: string; // Optional for teams with two primary colors like Berlin Eagles
  description: string;
  historicalContext: string;
  owners: string[];
};

export type PastChampion = {
  year: number;
  edition: string;
  franchiseName: string;
  teamImage: string;
  color: string;
};

export const franchises: Franchise[] = [
  {
    id: "kangaroos",
    name: "Sydney Kangaroos",
    logoImage: "/images/relay/Sydney Kangaroos.jpg",
    teamImage: "/images/relay/Sydney Kangaroos.jpg",
    color: "#FF0000", // Full Red
    description: "Bringing incredible endurance and a bounding stride, the Kangaroos excel at maintaining top speed over long distances and tiring out their opponents.",
    historicalContext: "2000 OLYMPIC GAMES, Sydney, Australia. Our two athletes SOMA BISWAS & SANJAY RAI participated in this prestigious Olympic Games in Heptathlon & Long Jump respectively.",
    owners: ["TAPAN GHOSH", "DIPAK BANERJEE", "BISWAJIT ROY", "ALOK DASGUPTA", "CHAITALI DEY", "PRADIP DAS", "SANKAR DUTTA", "MONTU BHOWMIK", "BHOLA DEY"],
  },
  {
    id: "horses",
    name: "Edmonton Horses",
    logoImage: "/images/relay/edmonton-horse.jpg",
    teamImage: "/images/relay/edmonton-horse.jpg",
    color: "#FFD700", // Yellow
    description: "Pure horsepower and unyielding stamina define the Horses. They are the workhorses of the track, pushing through the toughest conditions to secure the win.",
    historicalContext: "2001 World Athletics Championship, Edmonton, Canada. Our athlete SANJAY Kr. RAI participated in this World Championship in Long Jump.",
    owners: ["SUBHRAJA ROY", "AVIJIT PHANI", "MRITYUNJAY SAHA", "PROLOY SEN", "TAPAS CHAKRABORTY", "SUDIP GHOSH"],
  },
  {
    id: "phoenix",
    name: "Athens Phoenix",
    logoImage: "/images/relay/Athens Phoenix.jpg",
    teamImage: "/images/relay/Athens Phoenix.jpg",
    color: "#8A2BE2", // Violet
    description: "Rising from the ashes in the final stretch, the Phoenix team is known for their miraculous comebacks and unmatched sprinting power as the anchor leg.",
    historicalContext: "2004 OLYMPIC GAMES, Athens, Greece. Our athlete SOMA BISWAS participated in this prestigious Olympic Games in Heptathlon.",
    owners: ["BARUN MONDAL", "MOLOY GANGULY", "RINA MONDAL", "BISWAJIT KUNDU", "AVIJIT GHATAK", "HEMANTA MONDAL"],
  },
  {
    id: "crocodiles",
    name: "Melbourne Crocodiles",
    logoImage: "/images/relay/melbourne-crocodile.jpeg",
    teamImage: "/images/relay/melbourne-crocodile.jpeg",
    color: "#228B22", // Green
    description: "Fierce, powerful, and deeply tactical. The Crocodiles strike with sudden bursts of explosive speed, dominating their opponents before they can react.",
    historicalContext: "2006 COMMONWEALTH GAMES, Melbourne, Australia. Our athletes proudly represented the nation on this global stage.",
    owners: ["TBA"],
  },
  {
    id: "dragons",
    name: "Beijing Dragons",
    logoImage: "/images/relay/Beijing Dragons.jpg",
    teamImage: "/images/relay/Beijing Dragons.jpg",
    color: "#FFA500", // Orange
    description: "Known for their explosive starts and relentless drive, the Dragons dominate the early legs of every race, setting a blistering pace for the competition.",
    historicalContext: "2008 OLYMPIC GAMES, Beijing, China. Our athlete SUSMITA SINGHA ROY participated in this prestigious OLYMPIC GAMES in Heptathlon.",
    owners: ["NISIT DEY", "MANAB CHATTERJEE", "SATPATI PAL"],
  },
  {
    id: "eagles",
    name: "Berlin Eagles",
    logoImage: "/images/relay/Berlin Eagles.jpg",
    teamImage: "/images/relay/Berlin Eagles.jpg",
    color: "#D32F2F", // Red
    secondaryColor: "#FFFFFF", // White
    description: "Precision, strategy, and flawless baton exchanges are the hallmarks of the Eagles. They soar past competitors in the crucial middle sections of the relay.",
    historicalContext: "2009 WORLD ATHLETICS CHAMPIONSHIP, Berlin, Germany. Our athlete SUSMITA SINGHA ROY participated in this World Championship in Heptathlon.",
    owners: ["RUDRA PRATIM ROY", "MRINAL ROY", "SANJAY RAI", "SUSMITA SINGHA ROY"],
  },
];

export const pastChampions: PastChampion[] = [
  {
    year: 2024,
    edition: "12TH PREMIER RELAY",
    franchiseName: "Berlin Eagles",
    teamImage: "/images/relay/berlin-eagle-2026.jpg",
    color: "#D32F2F"
  },
  {
    year: 2023,
    edition: "11TH PREMIER RELAY",
    franchiseName: "Sydney Kangaroos",
    teamImage: "/images/relay/Sydney Kangaroos.jpg",
    color: "#FF0000"
  },
  {
    year: 2022,
    edition: "10TH PREMIER RELAY",
    franchiseName: "Beijing Dragons",
    teamImage: "/images/relay/Beijing Dragons.jpg",
    color: "#FFA500"
  }
];
