export type QuestionsType = {
  question: string;
  options: [string];
  images: [string];
};
export const questions = [
  {
    question: "What is your gender?",
    options: ["Male", "Female"],
    images: [
      require("../assets/images/man-running.png"),
      require("../assets/images/lady-running.png"),
    ],
  },
  {
    question: "What is your primary fitness goal?",
    options: ["Weight Loss", "Muscle Gain", "Endurance", "Other (Specify)"],
    images: [
      require("../assets/images/weight.png"),
      require("../assets/images/muscle.png"),
      require("../assets/images/edurance.png"),
      require("../assets/images/question-mark.png"),
    ],
  },
  {
    question: "Do you have any health considerations or concerns?",
    options: ["Yes (Specify)", "No"],
    images: [
      require("../assets/images/check.png"),
      require("../assets/images/close.png"),
    ],
  },
  {
    question: "Describe your current level of physical activity.",
    options: [
      "Sedentary",
      "Light Activity",
      "Moderate Activity",
      "Intense Activity",
    ],
  },
  {
    question:
      "How much time per day or week can you realistically commit to exercise?",
    options: ["Less than 30", "30-60 minutes", "60+ minutes"],
    images: [
      require("../assets/images/30.png"),
      require("../assets/images/45.png"),
      require("../assets/images/60.png"),
    ],
  },
  {
    question:
      "Do you have any specific types of exercise or activities you enjoy?",
    options: ["Cardio", "Strength Training", "Yoga", "Other (Specify)"],
    images: [
      require("../assets/images/cardio.png"),
      require("../assets/images/strength.png"),
      require("../assets/images/yoga.png"),
      require("../assets/images/question-mark.png"),
    ],
  },
  {
    question:
      "Do you have access to fitness equipment, or do you prefer equipment-free workouts?",
    options: ["Equipment", "No Equipment"],
    images: [
      require("../assets/images/equipment.png"),
      require("../assets/images/no-equipment.png"),
    ],
  },
  {
    question:
      "Is there anything else you'd like us to know about your fitness preferences or requirements? Feel free to share any specific details.",
    options: null,
  },
];
