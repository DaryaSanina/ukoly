import { ProblemInfo } from "../base";
import { 
  ASpaceOddity,
  IntegerStrings, 
  ParsingLists, 
  WordGame, 
  Unlock, 
  ZeckendorfRepresentation, 
  Pentominoes, 
  DreamingSpires, 
  DecoderRing, 
  DebtRepayment, 
  SerialNumbers,
  DotsAndBoxes 
} from "solutions";

export const bio1Problems : ProblemInfo[] = [
  {
    difficulty: "Easy",
    display: "Integer Strings",
    original: "https://www.olympiad.org.uk/papers/2024/bio/bio24-exam.pdf",
    year: 2024,
    tags: ["Q1", "Math"],
    editorialAuthors: ["Alex Pylypenko"],
    solutionAuthors: ["Alex Pylypenko"],
    component: <IntegerStrings />,
  },
  {
    difficulty: "Medium",
    display: "Parsing Lists",
    original: "https://www.olympiad.org.uk/papers/2024/bio/bio24-exam.pdf",
    year: 2024,
    tags: ["Q2", "Implementation"],
    editorialAuthors: ["Alex Pylypenko"],
    solutionAuthors: ["Alex Pylypenko"],
    component: <ParsingLists />,
  },
  {
    difficulty: "Easy",
    display: "Word Game",
    original: "https://www.olympiad.org.uk/papers/2024/bio/bio24-exam.pdf",
    year: 2024,
    tags: ["Q3", "Dynamic Programming"],
    editorialAuthors: ["Alex Pylypenko"],
    solutionAuthors: ["Alex Pylypenko"],
    component: <WordGame />,
  },
  {
    difficulty: "Hard",
    display: "Unlock",
    original: "https://www.olympiad.org.uk/papers/2013/bio/bio13-exam.pdf",
    year: 2013,
    tags: ["Q3", "Brute Force"],
    editorialAuthors: ["Alex Pylypenko"],
    solutionAuthors: ["Alex Pylypenko"],
    component: <Unlock />,
  },
  {
    difficulty: "Easy",
    display: "Zeckendorf",
    original: "https://www.olympiad.org.uk/papers/2023/bio/bio23-exam.pdf",
    year: 2023,
    tags: ["Q1", "Math"],
    editorialAuthors: ["Vladimir Filip"],
    solutionAuthors: ["Vladimir Filip"],
    component: <ZeckendorfRepresentation />,
  },
  {
    difficulty: "Medium",
    display: "Pentominoes",
    original: "https://www.olympiad.org.uk/papers/2023/bio/bio23-exam.pdf",
    year: 2023,
    tags: ["Q2", "Brute Force", "Implementation"],
    editorialAuthors: ["Vladimir Filip"],
    solutionAuthors: ["Vladimir Filip"],
    component: <Pentominoes />,
  },
  {
    difficulty: "Medium",
    display: "Dreaming Spires",
    original: "https://www.olympiad.org.uk/papers/2023/bio/bio23-exam.pdf",
    year: 2023,
    tags: ["Q3", "DFS and Similar"],
    editorialAuthors: ["Vladimir Filip"],
    solutionAuthors: ["Vladimir Filip", "Alex Pylypenko"],
    component: <DreamingSpires />,
  },
  {
    difficulty: "Easy",
    display: "Debt Repayment",
    original: "https://www.olympiad.org.uk/papers/2018/bio/bio18-exam.pdf",
    year: 2018,
    tags: ["Q1", "Implementation"],
    editorialAuthors: ["Adwaya Gupta"],
    solutionAuthors: ["Adwaya Gupta"],
    component: <DebtRepayment />,
  },
  {
    difficulty: "Easy",
    display: "Decoder Ring",
    original: "https://www.olympiad.org.uk/papers/2018/bio/bio18-exam.pdf",
    year: 2018,
    tags: ["Q2", "Implementation"],
    editorialAuthors: ["Adwaya Gupta"],
    solutionAuthors: ["Adwaya Gupta"],
    component: <DecoderRing />,
  },
  {
    difficulty: "Easy",
    display: "Serial Numbers",
    original: "https://www.olympiad.org.uk/papers/2018/bio/bio18-exam.pdf",
    year: 2018,
    tags: ["Q3", "DFS and Similar"],
    editorialAuthors: ["Adwaya Gupta"],
    solutionAuthors: ["Adwaya Gupta"],
    component: <SerialNumbers />,
  },
    {
    difficulty: "Medium",
    display: "Dots and Boxes",
    original: "https://www.olympiad.org.uk/papers/2017/bio/bio17-exam.pdf",
    year: 2017,
    tags: ["Q2", "Implementation"],
    editorialAuthors: ["Adwaya Gupta"],
    solutionAuthors: ["Adwaya Gupta"],
    component: <DotsAndBoxes />,
  },
  {
    difficulty: "Hard",
    display: "A Space Oddity",
    original: "https://olympiad.org.uk/papers/2001/bio/bio01ex.pdf",
    year: 2001,
    tags: ["Q3", "Graphs", "DFS and Similar"],
    editorialAuthors: ["Alex Pylypenko"],
    solutionAuthors: ["Alex Pylypenko"],
    component: <ASpaceOddity />,
  },
];
