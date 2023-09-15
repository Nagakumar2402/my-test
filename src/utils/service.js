import pottery from "../assets/images/POTTY.svg";
import bubble from "../assets/images/bubbleArt.svg";
import art from "../assets/images/ARTANDCRAFT.svg";
import tattoo from "../assets/images/tatto.svg";
import stone from "../assets/images/stoneArt.svg";
import game from "../assets/images/game.svg";



const services = [
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
  {
    name: "Tattoo Artist",
    price: 1500,
    description:
      "Get inked by our talented tattoo artists with custom designs.",
    image:tattoo,
  },
  {
    name: "Stone Art",
    price: 3000,
    description: "Create stunning art pieces using various types of stones.",
    image:stone
  },
  {
    name: "Game Coordinator",
    price: 2500,
    description:
      "Enjoy fun and interactive games organized by our game coordinators.",
    image:game
  },
];

export default services;
