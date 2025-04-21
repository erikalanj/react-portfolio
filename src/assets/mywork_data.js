import project1_img from "../assets/cropped-riffindex.png";
import project2_img from "../assets/cropped-secureATM.png";
import project3_img from "../assets/cropped-projectsymmetry.jpg";
import project4_img from "../assets/cropped-snakegame2.PNG";

const mywork_data = [
  {
    w_no: 1,
    w_name: "RiffIndex",
    w_img: project1_img,
    repo_url: "https://github.com/erikalanj/riffindex",
    description:
      "Responsive website which utilizes PHP and SQL in order to construct a CRUD database interaction website for music fans, containing multiple levels of authentication, user sign-up/log-in and other features.",
  },
  {
    w_no: 2,
    w_name: "Secure ATM",
    w_img: project2_img,
    repo_url: "https://github.com/erikalanj/SecureATM",
    description:
      "Financial simulation which provides core ATM functionality. Also salts, hashes, and encrypts crucial user information in order to ensure that sensitive user data is protected, utilizing Python's crypto library.",
  },
  {
    w_no: 3,
    w_name: "Project Symmetry",
    w_img: project3_img,
    repo_url: "https://www.grey-box.ca/project-symmetry/",
    description:
      "Semantic comparison tool built by Grey Box which ensures semantic accuracy for a chosen Wikipedia article in whatever source language, combatting misonformation in underrepresented languages.",
  },
  {
    w_no: 4,
    w_name: "Snake Game",
    w_img: project4_img,
    repo_url: "https://github.com/erikalanj/snake",
    description:
      "Classic snake game built using C and it's curses library. This game contains essential gampeplay features such as a score counter, dynamic snake speed, and collision detection with unique win conditions.",
  },
];

export default mywork_data;
