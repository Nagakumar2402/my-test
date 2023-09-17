const homeVariants = {
  hidden: { y: 100 },
  visible: {
    y: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      delay: 0.5,
    },
  },
  exit: {
    y: 100,
  },
};

export default homeVariants;
