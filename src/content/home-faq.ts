/**
 * Server-safe FAQ data for the home page. Used both by the visual FAQ
 * (rendered inside a client component) and by the FAQPage JSON-LD on the
 * home page (rendered in a server component).
 */
export const homeFaqItems = [
  {
    question: "Is DreamMirror a dream interpreter?",
    answer:
      "No. DreamMirror is a dream journal. The optional AI reflections are reflective insights — not interpretations, diagnoses, or predictions. The meaning of your dreams stays yours.",
  },
  {
    question: "Is it free?",
    answer:
      "DreamMirror is free to install and use as a journal. A small Pro tier offers deeper reflections, longer letters, exports, and custom styles for people who want more.",
  },
  {
    question: "Where are my dreams stored?",
    answer:
      "Entries sync to your account on our servers so you can use the app across reinstalls and devices. They are not sold and never used for ads or shared model training.",
  },
  {
    question: "Can I delete my account and everything in it?",
    answer:
      "Yes. From inside the app or from the Delete Account page on this site, you can permanently remove your profile, dreams, analyses, and saved reports from our systems.",
  },
  {
    question: "Is the app on the App Store?",
    answer:
      "Not yet. DreamMirror is currently distributed as a direct Android download from this site. Other platforms are being considered.",
  },
  {
    question: "Will the AI ever give medical or psychological advice?",
    answer:
      "No. The model is instructed to stay reflective and non-diagnostic. If you’re going through something difficult, please reach out to a qualified professional or local support service.",
  },
  {
    question: "Does DreamMirror predict the future?",
    answer:
      "No. It describes patterns in what you have written. Patterns are not predictions and not proof of meaning.",
  },
] as const;
