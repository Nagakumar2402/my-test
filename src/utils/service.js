import pottery from "../assets/images/pricing/Potty.png";
import bubble from "../assets/images/pricing/bubble.png";
import art from "../assets/images/pricing/artandcraft.png";
import tattoo from "../assets/images/pricing/tatto.png";
import stone from "../assets/images/pricing/stoneart.png";
import game from "../assets/images/pricing/game.png";

const services1 = [
  {
    name: "Pottery",
    price: 2500,
    description:
      "Experience the art of pottery and create beautiful ceramic pieces.",
    image: pottery,
  },
  {
    name: "Bubble Ring",
    price: 3500,
    description:
      "Learn the mesmerizing art of creating intricate bubble rings.",
    image: bubble,
  },
  {
    name: "Art and Craft",
    price: 3000,
    description:
      "Unleash your creativity with a wide range of art and craft activities.",
    image: art,
  },
];

const services2 = [
  {
    name: "Tattoo Artist",
    price: 1500,
    description:
      "Get inked by our talented tattoo artists with custom designs.",
    image: tattoo,
  },
  {
    name: "Stone Art",
    price: 3000,
    description: "Create stunning art pieces using various types of stones.",
    image: stone,
  },
  {
    name: "Game Coordinator",
    price: 2500,
    description:
      "Enjoy fun and interactive games organized by our game coordinators.",
    image: game,
  },
];

export { services1, services2 };
