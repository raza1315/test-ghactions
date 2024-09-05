import { useEffect, useState } from "react";
import "./Membersteam.css";
import khalique from "../../assets/khalique.jpg";
import hamza from "../../assets/hamza.jpg";
import toxiclicker from "../../assets/members/EE188CF1-27CA-444E-ACD0-2563450A1EBE - TOXIC LICKER.jpeg";
import zeba from "../../assets/members/WhatsApp Image 2024-08-31 at 8.36.30 PM - Zeba.jpeg";
import zubiya from "../../assets/members/WhatsApp Image 2024-05-20 at 8.19.03 PM - 241 Zubiya Azeem.jpeg";
import laiba from "../../assets/members/laiba.jpg";
import rahul from "../../assets/members/photo - Rahul Singh.png";
import nazia from "../../assets/members/nazia.jpg";
import charu from "../../assets/members/me - Charu Gupta.jpeg";
import maaz from "../../assets/members/IMG-20231215-WA0016 - Maaz Khan.jpg";
import vanshika from "../../assets/members/IMG-20230906-WA0031 - Vanshika Nagarajan.jpg";
import danish from "../../assets/members/IMG_20240901_213010 - Mohammad Danish.jpg";
import zaman from "../../assets/members/zama.jpg";
import adnan from "../../assets/members/Screenshot_2024-09-01-19-16-07-50_254de13a4bc8758c9908fff1f73e3725 - khan adnan.png";
import sana from "../../assets/members/IMG_20240831_192620 - Sana Siddique.jpg";
import simran from "../../assets/members/IMG_20240831_185941 - Simran Bhagat.jpg";
import sufiyan from "../../assets/members/IMG_20240827_234219_290 - Sufian Khan.jpg";
import shazia from "../../assets/members/IMG_9817 - Shazia Saifi.jpeg";
import mariya from "../../assets/members/IMG_2727 - Mariya Mallick.JPG";
import bilal from "../../assets/members/IMG_1097 - Bilal Ahmad.jpg";
import raza from "../../assets/members/Screenshot_20240831-191700 (1) - Raza.png";
import saad from "../../assets/members/saad.jpg";
import aasif from "../../assets/members/aasif.jpg";
import muzakkir from "../../assets/members/muzakkir.jpg";
import asna from "../../assets/members/asna.jpg";
import shariq from "../../assets/members/IMG_7125 - Shariq.jpg";
import alfiya from "../../assets/members/alfiya.jpg";
import ahmed from "../../assets/members/ahmed.jpg";
import hamzarizvi from "../../assets/members/hamzarizvi.jpg";
import tauqeer from "../../assets/members/tauqeer.jpg";
import yatharth from "../../assets/members/yatharth.jpg";
import mdzama from "../../assets/members/mdzama.jpg";
import rameez from "../../assets/members/Picsart_23-12-25_15-22-48-108 - rameez imteyaz.jpg";

const TeamMember = ({ id, name, title, bio, avatar, social_links }) => (
  <>
    <input type="radio" id={id} name="member" />
    <div className="card-mem">
      <img
        src={avatar}
        className="avatar"
        style={{
          width: "100%",
          height: "500px",
          // minHeight: "5rem",
          // minWidth: "5rem",
          objectFit: "cover",
        }}
      />
      <div className="info-member">
        <div className="name">{name} </div>
        <div className="title">{title}</div>
        {social_links && (
          <div className="socialLinks" style={{ display: "flex" }}>
            {social_links.map((link, index) => (
              <a
                href={link.link}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  className="link-div"
                >
                  <img
                    title={`${link.name} Profile`}
                    src={`./${link.name.toLowerCase()}.png`}
                    // alt={link.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      cursor: "pointer",
                      objectFit: "cover",
                      transform:
                        link.name === "LinkedIn" && "translate(-12%,-10%)",
                    }}
                    className="socialLink"
                  />
                </div>
              </a>
            ))}
          </div>
        )}

        <div className="bio">{bio}</div>
      </div>
    </div>
  </>
);

const Team = ({ teamMembers, title }) => (
  <div className="team-members-div" style={{ display: "flex" }}>
    <div className="wrapper-members active-members" style={{ display: "flex" }}>
      <div
        className="intro-wrapper"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="team-title">{title}</div>
      </div>
      {/* issue starts from here */}
      <div className="team-wrapper" style={{ display: "flex" }}>
        <div className="members-name" style={{ display: "flex" }}>
          {teamMembers.map((member, index) => (
            <label
              htmlFor={member.id}
              className={index === 0 ? "tile active" : "tile"}
            >
              <img
                src={member.avatar}
                style={{ width: "100px", height: "100px", objectFit: "cover" }}
              />
            </label>
          ))}
        </div>
        <div className="divider" />
        <div className="cards-member">
          <div
            className="card-wrapper"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            {teamMembers.map((member, index) => (
              <TeamMember key={index} {...member} />
            ))}
          </div>
        </div>
      </div>
      {/* issue ends here */}
    </div>
  </div>
);

function Members() {
  const [showtab, setShowtab] = useState(1);

  const handletab = (e) => {
    setShowtab(e);
  };

  useEffect(() => {
    const tiles = document.querySelectorAll(
      ".wrapper-members .members-name .tile"
    );

    tiles?.forEach((tile) => {
      tile.addEventListener("click", () => {
        tiles.forEach((tile) => {
          tile.classList.remove("active");
        });
        tile.classList.add("active");
      });
    });
  }, []);

  const teams = {
    1: {
      title: "TECH TEAM",
      members: [
        {
          id: "m1",
          name: "Syed Khalique Hussain",
          title: "BCA 3rd YEAR",
          bio: "Hi, my name is Khalique Hussain. I’m currently in a BCA 3rd year at Jamia Hamdard University majoring in Computer Science. I’m also a member of the Tezos Tech team. I’m passionate about learning new technologies and collaborating with others.",
          avatar: khalique,
          social_links: [
            {
              name: "Instagram",
              link: "https://www.instagram.com/khaliqhussain_?igsh=emM0eWQ2OWlzZXhj&utm_source=qr",
            },
            {
              name: "LinkedIn",
              link: "http://linkedin.com/in/khaliquehussain7",
            },
            {
              name: "Gmail",
              link: "mailto:khaliquehussain7@gmail.com",
            },
            {
              name: "Whatsapp",
              link: "http://wa.me/+919711644284",
            },
            {
              name: "X",
              link: "https://x.com/KhaliqHussainnn",
            },
            {
              name: "Github",
              link: "https://github.com/khaliqhussainn",
            },
          ],
        },
        {
          id: "m2",
          name: "Syed Hamza Rizvi",
          title: "BTECH (CSE)",
          bio: "I am FullStack Engineer at BarsaatiMedia & Stir , an L.A.-based startup. Mentoring under Ankur Singla, Founder of Tapzo (Currently Amazon Pay). Previously worked with Delhi Police, Cluster Protocol. I have won numerous hackathons, around 16 of them. Building YoctoMed, secured $40k in pre-seed funding for my Quick Commerce, Yoctomed.if I weren’t a coder, I’d probably be a professional Bug Catcher. Don't message me for fixing your printers.",
          avatar: hamzarizvi,
          social_links: [
            {
              name: "Instagram",
              link: "https://www.instagram.com/mostuselessboy/",
            },
            {
              name: "LinkedIn",
              link: "https://www.linkedin.com/in/devhamzarizvi/",
            },
            {
              name: "Gmail",
              link: "mailto:mostuselessboy@gmail.com",
            },
            {
              name: "Whatsapp",
              link: "http://wa.me/+918595593127",
            },
          ],
        },
        {
          id: "m3",
          name: "Raza Rizvi",
          title: "BTECH (CSE)",
          bio: "Hi, I'm Raza! I'm a Full Stack and Cross-Platform Developer, always learning and pushing the boundaries to create seamless, innovative applications across all devices.",
          avatar: raza,
          social_links: [
            {
              name: "Instagram",
              link: "https://www.instagram.com/razaaa2gud?igsh=MXJnbTFuMWYzcWkzZg==",
            },
            {
              name: "LinkedIn",
              link: "https://www.linkedin.com/in/razarizvi-js",
            },
            {
              name: "Gmail",
              link: "mailto:razasfs2003@gmail.com",
            },
            {
              name: "Whatsapp",
              link: "http://wa.me/+918287770740",
            },
          ],
        },
        {
          id: "m4",
          name: "Zeba",
          title: "BTECH (CSE)",
          bio: "Hey! I'm Zeba, an upcoming blockchain developer, React Native expert, and full-stack developer. Blending creativity with modern technology to craft innovative solutions that address real-life problems head-on, making a meaningful impact in the digital world.",
          avatar: zeba,
          social_links: [
            {
              name: "Instagram",
              link: "https://www.instagram.com/__heyheyhi?igsh=MWhuY3UzZzU4YmFtMQ==",
            },
            {
              name: "LinkedIn",
              link: "http://www.linkedin.com/in/zeba-k-ba96a5292",
            },
            {
              name: "Gmail",
              link: "mailto:zebakhan0316@gmail.com",
            },
            {
              name: "Whatsapp",
              link: "http://wa.me/+919625487388",
            },
          ],
        },
        {
          id: "m5",
          name: "Vanshika Nagarajan",
          title: "BTECH (CSE)",
          bio: "As a Data Science Mentor, I provide comprehensive guidance to my fellow friends in mastering the intricacies of data handling and analytics. My role involves assisting learners in navigating through complex data challenges, ensuring they develop a strong foundation in data manipulation, statistical analysis, and visualization techniques. Beyond addressing immediate concerns, I work closely with students to design and implement personalized roadmaps that lead to proficiency in machine learning and deep learning. My mentorship focuses on equipping students with the practical skills and knowledge necessary to excel in the rapidly evolving field of data science, empowering them to achieve their academic and professional goals.",
          avatar: vanshika,
          social_links: [
            {
              name: "Instagram",
              link: "https://www.instagram.com/khaliqhussain_?igsh=emM0eWQ2OWlzZXhj&utm_source=qr",
            },
            {
              name: "LinkedIn",
              link: "https://www.linkedin.com/in/vanshika-nagarajan-2bb766228/",
            },
            {
              name: "Gmail",
              link: "mailto:vanshikanagarajan@gmail.com",
            },
            {
              name: "Whatsapp",
              link: "http://wa.me/+919625337117",
            },
          ],
        },
        {
          id: "m6",
          name: "Rahul ",
          title: "Developer",
          bio: "I’m Rahul Singh, a B.Tech Computer Science student at Jamia Hamdard, and a Tech member of the Tezos Jamia Hamdard Club. My journey in tech has led me to explore both web development and Web3 technologies, areas where I’m deeply passionate. I have hands-on experience with the MERN stack (MongoDB, Express.js, React, Node.js), which allows me to create dynamic and responsive web applications. I’m also comfortable working in Linux environments and have experience with Python, shell scripting, and essential tools like Git, virtual machines, and MySQL. Being part of the Tezos community has been a fantastic experience, giving me a deeper understanding of blockchain, decentralized systems, and smart contracts. I’m always eager to learn more ",
          avatar: rahul,
          social_links: [
            {
              name: "Instagram",
              link: "https://www.instagram.com/rahul_singh_4020?igsh=ODBvNDl4b3ltMnNp",
            },
            {
              name: "LinkedIn",
              link: "https://www.linkedin.com/in/rahul-singh-b14676259/",
            },
            {
              name: "Gmail",
              link: "mailto:rs739025@gmail.com",
            },
            {
              name: "Whatsapp",
              link: "http://wa.me/+919540127213",
            },
          ],
        },
        {
          id: "m36",
          name: "Mohd Zama",
          title: "B-Tech CSE",
          bio: "Hey, I'm Mohd Zama! I'm a Full Stack and Cross-Platform Developer, always learning and pushing the boundaries to create seamless, innovative applications across all devices.",
          avatar: mdzama,
          social_links: [
            {
              name: "LinkedIn",
              link: "https://www.linkedin.com/in/mohd-zama-35878324a",
            },
            {
              name: "Gmail",
              link: "mailto:rs739025@gmail.com",
            },
            {
              name: "Whatsapp",
              link: "http://wa.me/+916395538545",
            },
          ],
        },
      ],
    },
    2: {
      title: "SOCIAL MEDIA TEAM",
      members: [
        {
          id: "m7",
          name: "Syed Khalique Hussain",
          title: "BCA 3rd YEAR",
          bio: "Hi, my name is Khalique Hussain. I’m currently in a BCA 3rd year at Jamia Hamdard University majoring in Computer Science. I’m also a member of the Tezos Tech team. I’m passionate about learning new technologies and collaborating with others.",
          avatar: khalique,
          social_links: [
            {
              name: "Instagram",
              link: "https://www.instagram.com/khaliqhussain_?igsh=emM0eWQ2OWlzZXhj&utm_source=qr",
            },
            {
              name: "LinkedIn",
              link: "http://linkedin.com/in/khaliquehussain7",
            },
            {
              name: "Gmail",
              link: "mailto:khaliquehussain7@gmail.com",
            },
            {
              name: "Whatsapp",
              link: "http://wa.me/+919711644284",
            },
          ],
        },
        {
          id: "m8",
          name: "Alfiya Rizvi",
          title: "BBA",
          bio: "As the LinkedIn handler for Tezos Club at Jamia Hamdard, I am responsible for managing and curating our online presence on LinkedIn. My role involves creating engaging content, highlighting our club’s activities, promoting events, and sharing updates related to blockchain technology and the Tezos ecosystem. Through strategic content planning and networking, I aim to enhance our club’s visibility and influence in the blockchain community.",
          avatar: alfiya,
          social_links: [
            {
              name: "LinkedIn",
              link: "https://www.linkedin.com/in/alfiya-rizvi-0a24a629a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
            },
            {
              name: "Gmail",
              link: "mailto:rizvi.alfiya03@gmail.com",
            },
            {
              name: "Whatsapp",
              link: "http://wa.me/+917481049419",
            },
          ],
        },
        {
          id: "m9",
          name: "Shariq Ansari",
          title: "B-tech CSE",
          bio: "As a B.Tech student, I am driven by a passion for technology and engineering. My academic journey is centered around gaining a deep understanding of the principles that power our modern world. Through my coursework, I’ve developed strong analytical and problem-solving skills, with a particular interest in areas like software development, electronics, and data science. I enjoy exploring how theoretical concepts can be applied to practical challenges, and I am always eager to engage in projects that push the boundaries of what’s possible.Beyond academics, I am committed to continuous learning and staying updated on the latest advancements in technology. Whether working on assignments, participating in group projects, or exploring personal tech interests, I approach every task with enthusiasm and a desire to excel. My goal is to leverage my education and skills to contribute to innovative solutions and make a positive impact in the tech industry.",
          avatar: shariq,
          social_links: [
            {
              name: "Instagram",
              link: "https://www.instagram.com/shaaaariq._/",
            },
            {
              name: "LinkedIn",
              link: "https://www.linkedin.com/in/shariq-ansari-4a1a57262/",
            },
            {
              name: "Gmail",
              link: "mailto:shariqsss087@gmail.com",
            },
            {
              name: "Whatsapp",
              link: "http://wa.me/+919958484624",
            },
            {
              name: "X",
              link: "https://x.com/Shariq847821932",
            },
          ],
        },
        {
          id: "m10",
          name: "Rameez Imteyaz ",
          title: "B-tech CSE",
          bio: "Hello, I'm Rameez Imteyaz, currently pursuing my B.TECH in Computer Science, and I'm on a journey to explore the limitless world of technology. I'm eager to connect with fellow tech enthusiasts, mentors, and professionals to learn, share ideas, and collaborate on exciting projects.In addition to my academic pursuits, I'm an extrovert who loves connecting with people from various fields, learning about their work, and gaining insights into different professions.As the lead of the Social Media Board at Tezos, I manage all our social media platforms, recognizing the immense potential of social media in building connections, sharing knowledge, and fostering communities. Social media has become a crucial tool for networking and staying updated with industry trends, making it a vital part of my efforts to grow professionally and personally.",
          avatar: rameez,
          social_links: [
            {
              name: "Instagram",
              link: "https://www.instagram.com/syed.rameezz/?next=%2Fchinatown_forever%2Ftagged%2F&ref=article&hl=ne",
            },
            {
              name: "LinkedIn",
              link: "https://www.linkedin.com/in/rameez-imteyaz-02ab49252?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            },
            {
              name: "Gmail",
              link: "mailto:rameezimteyaz5786@gmail.com",
            },
            {
              name: "Whatsapp",
              link: "http://wa.me/+919838381369",
            },
            {
              name: "X",
              link: "https://twitter.com/RImteyaz37926",
            },
          ],
        },
      ],
    },
    3: {
      title: "PHOTOGRAPHY TEAM",
      members: [
        {
          id: "m11",
          name: "Nauman Ali Siddiqui",
          title: "Btech CSE",
          bio: "Photographer for Tezoz, the college club that brings together creativity and camaraderie. I specialize in capturing the dynamic and engaging moments of our events, from lively gatherings to spontaneous interactions, all while showcasing the vibrant spirit and community of Tezoz. Through my lens, I aim to preserve and highlight the memorable experiences that define our club.",
          avatar: toxiclicker,
          social_links: [
            {
              name: "Instagram",
              link: "https://www.instagram.com/naumaan.siddiqui.96?igsh=d2tweW94cXU1ejN1&utm_source=qr",
            },
            {
              name: "LinkedIn",
              link: "http://linkedin.com/in/khaliquehussain7",
            },
            {
              name: "Gmail",
              link: "mailto:siddiquinaumaan54321@gmail.com",
            },
            {
              name: "Whatsapp",
              link: "http://wa.me/+918851103076",
            },
          ],
        },
      ],
    },
    4: {
      title: "BOARD MEMBERS",
      members: [
        {
          id: "m12",
          name: "HAMZA",
          title: "BCA 3rd YEAR",
          bio: "I’m Hamza, currently pursuing a BCA degree from Jamia Hamdard, where I’m deeply involved in the tech community as the chairperson of Tezos JH. My passion for Web Development and DevOps drives me to engage with various societies, including Hacked JH and GDSC JH, where I collaborate with like-minded individuals to push the boundaries of what technology can achieve. My hands-on experience includes an internship with Delhi Police, where I applied my skills in Web Development and DevOps to real-world challenges, making a tangible impact. I’ve also had the opportunity to participate in and win multiple hackathons with my team, where we leveraged our expertise in Linux, C, C++, Java, SQL, and DSA to create innovative solutions. Beyond technical projects, I’m committed to sharing knowledge and building strong connections. Through my tech blogs and LinkedIn, I’ve established a network of professionals and enthusiasts who inspire and challenge me to keep learning and growing. Guiding students and staying on the cutting edge of technology are what keep me motivated. I’m always eager to take on new challenges, explore emerging technologies, and contribute to the ever-evolving tech landscape. Let’s connect and collaborate to shape the future of technology together!",
          avatar: hamza,
          social_links: [
            {
              name: "Instagram",
              link: "https://www.instagram.com/ansari_hamza69?igsh=Y291d3ZtZDlyZHg==",
            },
            {
              name: "LinkedIn",
              link: "https://www.linkedin.com/in/hamza69?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            },
            {
              name: "Gmail",
              link: "mailto:khaliquehussain7@gmail.com",
            },
            {
              name: "Whatsapp",
              link: "http://wa.me/+919711644284",
            },
            {
              name: "X",
              link: "https://x.com/ansari_hamza69?t=cghrEi-V_xNfkkofTN2UIw&s=09",
            },
            {
              name: "Github",
              link: "https://github.com/ansarihamza69",
            },
          ],
        },
        {
          id: "m13",
          name: "Sheikh Mohammad Saad Akhtar",
          title: "B-Tech",
          bio: "Description of my profile: As the Community Lead for Tezos Jamia Hamdard, I spearhead initiatives to educate and engage students in blockchain technology, particularly within the Tezos ecosystem. My role involves organizing and leading workshops, seminars, and hackathons, providing members with hands-on experience in decentralized applications and smart contracts. I act as a liaison between Jamia Hamdard and the broader Tezos community, fostering collaboration and innovation. By building a vibrant, knowledge-driven community, I aim to empower students to explore blockchain technology's potential, contribute to open-source projects, and stay at the forefront of technological advancements. My leadership focuses on nurturing talent, encouraging creative problem-solving, and promoting a deeper understanding of Tezos, ultimately preparing members to become future leaders in the blockchain space.",
          avatar: saad,
          social_links: [
            {
              name: "Instagram",
              link: "https://www.instagram.com/ethereal.macroni",
            },
            {
              name: "LinkedIn",
              link: "http://www.linkedin.com/in/saad-akhtar-337b0228a",
            },
            {
              name: "Gmail",
              link: "mailto:saadakhtr51@gmail.com",
            },
            {
              name: "Whatsapp",
              link: "http://wa.me/+919234735525",
            },
            {
              name: "X",
              link: "https://x.com/EtherealMacroni",
            },
            {
              name: "Github",
              link: "https://github.com/saadakhtr29",
            },
          ],
        },
        {
          id: "m14",
          name: "Jane Smith",
          title: "B.Tech Computer Science and Engineering",
          bio: "I am a second-year Computer Science and Engineering student with a strong interest in technology and content writing. Currently, I am exploring web development and am particularly fascinated by Web 3 and blockchain technology. The potential of decentralized systems and secure digital interactions captivates me, fueling my passion for the future of the web. I enjoy connecting with like-minded people and am committed to continuous learning and personal growth.",
          avatar: aasif,
          social_links: [
            {
              name: "Instagram",
              link: "https://www.instagram.com/syed_aasif09/",
            },
            {
              name: "LinkedIn",
              link: "https://www.linkedin.com/in/md-aasif",
            },
            {
              name: "Gmail",
              link: "mailto:syedaasif009@gmail.com",
            },
            {
              name: "Whatsapp",
              link: "http://wa.me/+919718406196",
            },
          ],
        },
      ],
    },
    5: {
      title: "FOUNDING MEMBERS",
      members: [
        {
          id: "m15",
          name: "Tauqeer Ahmad",
          title: "BTCSE Passed Out",
          bio: "Hi, I am Tauqeer Ahmad, Developer Relations Engineer at Tezos from the India Region. I am the one who manages all the educational communities around the India space and build the advocacy through it. ",
          avatar: tauqeer,
          social_links: [
            {
              name: "Instagram",
              link: "https://www.instagram.com/tauqeer.code/",
            },
            {
              name: "LinkedIn",
              link: "https://www.linkedin.com/in/tauqeerahmad5201/",
            },
            {
              name: "Gmail",
              link: "mailto:tauqeer@tezosindia.foundation",
            },
            {
              name: "Whatsapp",
              link: "http://wa.me/+917840870352",
            },
            {
              name: "X",
              link: "https://x.com/_TauqeerAhmad",
            },
          ],
        },
        {
          id: "m16",
          name: "Yatharth Jain",
          title: "B-tech CSE",
          bio: "Hustler by charm builder by nature",
          avatar: yatharth,
          social_links: [
            {
              name: "Instagram",
              link: "https://www.instagram.com/depindaddy?igsh=emM0eWQ2OWlzZXhj&utm_source=qr",
            },
            {
              name: "LinkedIn",
              link: "http://linkedin.com/in/depindaddy",
            },
            {
              name: "Gmail",
              link: "mailto:yatharth@clusterprotocol.io",
            },
            {
              name: "Whatsapp",
              link: "http://wa.me/+918383817047",
            },
            {
              name: "X",
              link: "X.com/clusterprotocol",
            },
          ],
        },
        // {
        //   id: "m17",
        //   name: "Jane Smith",
        //   title: "Developer",
        //   bio: "User Bio Goes Here",
        //   avatar:
        //     "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
        //   social_links: [
        //     {
        //       name: "Instagram",
        //       link: "https://www.instagram.com/khaliqhussain_?igsh=emM0eWQ2OWlzZXhj&utm_source=qr",
        //     },
        //     {
        //       name: "LinkedIn",
        //       link: "http://linkedin.com/in/khaliquehussain7",
        //     },
        //     {
        //       name: "Gmail",
        //       link: "mailto:khaliquehussain7@gmail.com",
        //     },
        //     {
        //       name: "Whatsapp",
        //       link: "http://wa.me/+919711644284",
        //     },
        //   ],
        // },
      ],
    },
    6: {
      title: "CONTENT TEAM",
      members: [
        {
          id: "m18",
          name: "Shazia Saifi",
          title: "BCA",
          bio: "As a content writer can write engaging and informative content. Also can enthusiastically work as speaker/host. ",
          avatar: shazia,
          social_links: [
            {
              name: "Instagram",
              link: "https://www.instagram.com/shazia.saif1?igsh=bmtjbmtuZ2Z6amNu&utm_source=qr",
            },
            {
              name: "LinkedIn",
              link: "https://www.linkedin.com/in/shazia-saifi-a734b62a8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
            },
            {
              name: "Gmail",
              link: "mailto:saifishazia663@gmail.com",
            },
            {
              name: "Whatsapp",
              link: "http://wa.me/+918860018804",
            },
          ],
        },
      ],
    },
    7: {
      title: "MANAGEMENT TEAM",
      members: [
        {
          id: "m19",
          name: "Mohammad Sufian",
          title: "Btech Cse ",
          bio: "Hello!!! I'm Mohmmad Sufian , a dedicated member of the Tezos community and proud to serve on the management team. Passionate about blockchain innovation and community growth, I'm committed to contributing to the success of Tezos and its ecosystem.",
          avatar: sufiyan,
          social_links: [
            {
              name: "Instagram",
              link: "https://www.instagram.com/sufianxss510?igsh=bGZoMmE2dGpyNm80",
            },
            {
              name: "LinkedIn",
              link: "https://www.linkedin.com/in/mohammad-sufian-08077a2b8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            },
            {
              name: "Gmail",
              link: "mailto:khansyrian1@gmail.com",
            },
            {
              name: "Whatsapp",
              link: "http://wa.me/+916200126662",
            },
          ],
        },
        {
          id: "m20",
          name: "NAZIA",
          title: "Btech CSE",
          bio: "I'm studying for a Bachelor of Technology degree at Jamia Hamdard, where I'm learning about technology and engineering. I'm really interested in creating new things and using technology to solve problems. I also really enjoy playing basketball, which has shown me how important it is to work well with others, be disciplined, and keep trying even when things are tough. Managing both my studies and basketball has helped me become a more balanced person, keeping me focused and full of energy. I love learning new things, whether in school or on the basketball court, and I'm always working on improving myself as a student and as a person. My aim is to use what I learn and my experiences to make a good difference in my field and help the people around me.",
          avatar: nazia,
          social_links: [
            {
              name: "Instagram",
              link: "https://www.instagram.com/nk_17_25?igsh=MWVob2czYTV4YzVvMA==",
            },
            {
              name: "LinkedIn",
              link: "https://www.linkedin.com/in/nazia-khatun-b2966b27a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            },
            {
              name: "Gmail",
              link: "mailto:naziakhatun1257@gmail.com",
            },
            {
              name: "Whatsapp",
              link: "http://wa.me/+919540127213",
            },
            {
              name: "Whatsapp",
              link: "https://x.com/NaziaKhatu79980?t=vFrK98Klf-SZsrVamizyCg&s=09",
            },
          ],
        },
        {
          id: "m21",
          name: "Charu",
          title: "BCA",
          bio: "As the Management Team Lead at Tezos JH, I leverage my leadership qualities to ensure operational excellence. With a background in team management and team coordination,  My role involves fostering a collaborative environment where innovation thrives, guiding teams through complex challenges, and ensuring that our projects not only meet but exceed expectations. I am passionate about the transformative potential of Tezos, and I work closely with developers and community members to promote the adoption and integration of Tezos technology across various industries. My commitment to continuous improvement and my ability to coordinate team members makes me a key contributor of management team at Tezos JH.",
          avatar: charu,
          social_links: [
            {
              name: "Instagram",
              link: "https://www.instagram.com/ugh.nvm._?igsh=cDVhaTloczRtZnl1",
            },
            {
              name: "LinkedIn",
              link: "https://www.linkedin.com/in/charu-gupta-0a5a49299?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            },
            {
              name: "Gmail",
              link: "mailto:charugupta.217740@gmail.com",
            },
            {
              name: "Whatsapp",
              link: "http://wa.me/+919953729271",
            },
          ],
        },
        {
          id: "m22",
          name: "Mohammad Muzakkir Jamal ",
          title: "B-TECH CSE",
          bio: "As a member of the management team, I help make decisions, organize activities, and ensure everything runs smoothly for the society.",
          avatar: muzakkir,
          social_links: [
            {
              name: "Instagram",
              link: "https://www.instagram.com/muzakkir_jamal",
            },
            {
              name: "LinkedIn",
              link: "https://www.linkedin.com/in/mohammad-muzakkir-jamal-47b035293?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            },
            {
              name: "Gmail",
              link: "mailto:mohammadmuzakkirjamal@gmail.com",
            },
            {
              name: "Whatsapp",
              link: "http://wa.me/+918929630069",
            },
            {
              name: "X",
              link: "https://x.com/muazakkir_jamal?t=qPKHcNj7pELueyBzzyovSw&s=09",
            },
          ],
        },
        {
          id: "m23",
          name: "MAAZ KHAN ",
          title: "B-TECH CSE",
          bio: "I am a dedicated B.Tech Computer Science Engineering student with a strong passion for technology and innovation. My academic journey has equipped me with a solid foundation in management which I continuously build upon. I am highly motivated to stay at the forefront of emerging tech trends such as artificial intelligence, machine learning.Beyond academics, I am eager to collaborate with like-minded peers in a tech society, where I can contribute my skills while also learning from others. My goal is to actively participate in tech-related events, and workshops to broaden my knowledge and network with industry professionals. Joining your esteemed tech society would provide me with the platform to further enhance my technical abilities and work on innovative projects that make a real impact.",
          avatar: maaz,
          social_links: [
            {
              name: "Gmail",
              link: "mailto:maazkhan14917@gmail.com",
            },
            {
              name: "Whatsapp",
              link: "http://wa.me/+918218440644",
            },
          ],
        },
        {
          id: "m24",
          name: "Mohammad Danish",
          title: "B-TECH CSE",
          bio: "I am Mohammad Danish Ahmed, a B.Tech Computer Science student at Jamia Hamdard University, currently in the early stages of my tech journey. As a beginner, I'm actively learning the fundamentals of programming, data structures, and algorithms, with a strong desire to explore various areas of technology. In addition to my studies, I hold an event management position in the Tezos Society, where I engage with the community and organize events focused on blockchain and decentralized technologies. My focus is on gaining practical skills through hands-on projects and continuous learning. I look forward to connecting with others who share my passion for tech and exploring opportunities to grow and develop my skills.",
          avatar: danish,
          social_links: [
            {
              name: "Instagram",
              link: "https://www.instagram.com/vibeswith_danish?igsh=MXFsNGR3MXV2cnhh",
            },
            {
              name: "LinkedIn",
              link: "https://www.linkedin.com/in/mohammad-danish14",
            },
            {
              name: "Gmail",
              link: "mailto:danish.sab05@gmail.com",
            },
            {
              name: "Whatsapp",
              link: "http://wa.me/+918294534533",
            },
          ],
        },
        {
          id: "m25",
          name: "Asna Shah",
          title: "B.Sc.computer science ",
          bio: "I'm Asna Shah pursuing B.Sc. computer science from jamia Hamdard. As a co lead of tezos management team i collaborate closely with fellow leaders for smooth functioning in the club. Willing to learn new skills and helping others along the way.",
          avatar: asna,
          social_links: [
            {
              name: "Instagram",
              link: "https://www.instagram.com/_asnashah?igsh=MTZ0aHdhNWh6dzkwcQ==",
            },
            {
              name: "LinkedIn",
              link: "https://www.linkedin.com/in/asna-shah-11365529a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            },
            {
              name: "Gmail",
              link: "mailto:asnashah2005@gmail.com",
            },
            {
              name: "Whatsapp",
              link: "http://wa.me/+919675517000",
            },
          ],
        },
      ],
    },
    8: {
      title: "DESIGNING TEAM",
      members: [
        {
          id: "m26",
          name: "Simran Bhagat",
          title: "BTech CSE",
          bio: "Hello! I’m Simran Bhagat, a graphic designer and a B.Tech CSE student. As a proud member of the Tezos JH design team, I channel my creativity into crafting stunning visuals that represent our team. Graphic designing isn’t just a hobby for me; it’s my passion. I thrive on creating amazing designs that captivate and inspire.Beyond design, I have a keen interest in data science, constantly exploring the fascinating world of data and its endless possibilities. If you have any queries or need assistance, feel free to reach out. Let’s connect and create something extraordinary together!",
          avatar: simran,
          social_links: [
            {
              name: "Instagram",
              link: "https://www.instagram.com/simxcreates?igsh=b3djZXB0bWRrbWFs",
            },
            {
              name: "LinkedIn",
              link: "https://www.linkedin.com/in/simran-bhagat-a27180244?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            },
            {
              name: "Gmail",
              link: "mailto:simransmidel@gmail.com",
            },
            {
              name: "Whatsapp",
              link: "http://wa.me/+918920798331",
            },
            {
              name: "X",
              link: "https://x.com/Simran_305?t=yCrm72qTEl48b_0MM3__Gw&s=09",
            },
          ],
        },
        {
          id: "m27",
          name: "Sana Siddique",
          title: "B-TECH",
          bio: "I’m Sana Siddique, a B-Tech student from Jamia Hamdard University ,where i am a part of  Graphic Design team at Tezos JH . While I love being creative with graphic design, my real passion is diving into the world of data science and AI/ML. I’m fascinated by how data can uncover insights and help solve complex problems. I’ve got experience working with Python, Java, C, My SQL, AutoCAD and I’m pretty handy with data visualization tools like Power BI and Tableau.  I also enjoy working with data using libraries like NumPy, Matplotlib, Pandas, and Seaborn.When it comes to graphic design, I use tools like Canva and Adobe Illustrator to bring my ideas to life. Combining my design skills with my love for data science gives me a unique perspective, and I’m always eager to learn more and tackle new challenges. I’m really excited about where technology is heading.",
          avatar: sana,
          social_links: [
            {
              name: "Instagram",
              link: "https://www.instagram.com/_sana_sid239_?igsh=d2hleTFlM3FxcHNp",
            },
            {
              name: "LinkedIn",
              link: "https://www.linkedin.com/in/sana-sid-421ab1277?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            },
            {
              name: "Gmail",
              link: "mailto:siddiquesana239@gmail.com",
            },
            {
              name: "Whatsapp",
              link: "http://wa.me/+919354181389",
            },
            {
              name: "X",
              link: "https://x.com/SanaSiddiq91223?t=onANdskluX0mjHosWJzLuw&s=09",
            },
          ],
        },
        {
          id: "m28",
          name: "Bilal Ahmad",
          title: "BCA",
          bio: "Hey!! Bilal here, I'm a skilled web developer and UX designer with a strong passion for creating engaging and user-friendly designs. I have expertise in tools like Figma, Photoshop, Canva, and Framer, which I use to bring my design ideas to life.",
          avatar: bilal,
          social_links: [
            {
              name: "LinkedIn",
              link: "https://www.linkedin.com/in/bilal-ahmad-92b3a82a7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            },
            {
              name: "Gmail",
              link: "mailto:Bilalstg468@gmail.com",
            },
            {
              name: "Whatsapp",
              link: "http://wa.me/+918287416877",
            },
          ],
        },
        {
          id: "m29",
          name: "Zubiya",
          title: "B-TECH",
          bio: "howdy guys ,I am Zubiya Azeem, the Head of the Graphics Board! Pursuing a BTech (CSE), Icombines my technical prowess with creative flair to lead my team in producing dynamic and impactful graphics. My dedication to excellence and passion for design are essential in driving visual projects forward.",
          avatar: zubiya,
          social_links: [
            {
              name: "LinkedIn",
              link: "https://www.linkedin.com/in/zubiya-azeem-40054a24a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            },
            {
              name: "Gmail",
              link: "mailto:zubiya.hamdard@gmail.com",
            },
            {
              name: "Whatsapp",
              link: "http://wa.me/+917827456065",
            },
          ],
        },
        {
          id: "m30",
          name: "Mariya Mallick ",
          title: "B-TECH CSE",
          bio: "As a member of the Tezos Jamia Hamdard Design Team, I play a crucial role in bringing creative vision and innovative design solutions to the forefront of blockchain and decentralized applications.",
          avatar: mariya,
          social_links: [
            {
              name: "Instagram",
              link: "https://www.instagram.com/maariya2378?igsh=YTZsN2RtNTVlMGds",
            },
            {
              name: "LinkedIn",
              link: "https://www.linkedin.com/in/mariya-mallick-718a01304?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            },
            {
              name: "Gmail",
              link: "mailto:mariyamallick176@gmail.com",
            },
            {
              name: "Whatsapp",
              link: "http://wa.me/+919868073808",
            },
          ],
        },
        {
          id: "m31",
          name: "Mohd Ahmed",
          title: "Developer",
          bio: "Mohammed Ahmed - Ethical Hacker & Front-End Developer I’m an ethical hacking enthusiast currently studying Btech Computer Science at Jamia Hamdard. Alongside my passion for cybersecurity, I’m a front-end web developer. I’m dedicated to learning and growing in both fields, eager to tackle challenges and contribute to innovative projects.",
          avatar: ahmed,
          social_links: [
            {
              name: "Instagram",
              link: "https://www.instagram.com/__ahmed_010/",
            },
            {
              name: "LinkedIn",
              link: "https://www.linkedin.com/in/mohammad-ahmed-094859245/",
            },
            {
              name: "Gmail",
              link: "mailto:venomm472@gmail.com",
            },
            {
              name: "Whatsapp",
              link: "http://wa.me/+918851808190",
            },
          ],
        },
      ],
    },
    9: {
      title: "PR TEAM",
      members: [
        {
          id: "m32",
          name: "Tauqeer Ahmad",
          title: "BTCSE Passed Out",
          bio: "Hi, I am Tauqeer Ahmad, Developer Relations Engineer at Tezos from the India Region. I am the one who manages all the educational communities around the India space and build the advocacy through it. ",
          avatar: tauqeer,
          social_links: [
            {
              name: "Instagram",
              link: "https://www.instagram.com/tauqeer.code/",
            },
            {
              name: "LinkedIn",
              link: "https://www.linkedin.com/in/tauqeerahmad5201/",
            },
            {
              name: "Gmail",
              link: "mailto:tauqeer@tezosindia.foundation",
            },
            {
              name: "Whatsapp",
              link: "http://wa.me/+917840870352",
            },
            {
              name: "X",
              link: "https://x.com/_TauqeerAhmad",
            },
          ],
        },
        {
          id: "m33",
          name: "Naquiuzzaman ",
          title: "B-TECH CSE",
          bio: "As a dedicated PR member of the Tezos community, I am passionate about promoting and advancing the unique benefits of the Tezos blockchain. I focus on fostering strong relationships within the community and beyond, ensuring that our innovative platform is well-represented and understood.",
          avatar: zaman,
          social_links: [
            {
              name: "Instagram",
              link: "https://www.instagram.com/tabish_marhaba_007?igsh=MTNmZTAxdTdhamVmOA==",
            },
            {
              name: "LinkedIn",
              link: "https://www.linkedin.com/in/naquiuz-zaman-44967a294",
            },
            {
              name: "Gmail",
              link: "mailto:marhabatabish1@gmail.com",
            },
            {
              name: "Whatsapp",
              link: "http://wa.me/+917779879534",
            },
          ],
        },
        {
          id: "m34",
          name: "Adnan Khan",
          title: "BCA",
          bio: "Hello and welcome! I'm Adnan, and I genuinely appreciate you taking the time to explore my profile, it means a lot (and probably burns a few calories, so double win!).As someone who's always eager to dive into new challenges, I have a strong passion for learning and exploring various tech domains. Currently, I’m honing my skills as a Web Developer, while also taking on the role of PR Lead at Tezoz, where I bridge the gap between innovation and communication.",
          avatar: adnan,
          social_links: [
            {
              name: "Instagram",
              link: "https://www.instagram.com/adnan_khan_afridi4?igsh=MTVvaDIwY3VzMW9jMA==",
            },
            {
              name: "LinkedIn",
              link: "https://www.linkedin.com/in/adnan-khan-afridi-46595129a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            },
            {
              name: "Gmail",
              link: "mailto:adnandelhi2004@gmail.com",
            },
            {
              name: "Whatsapp",
              link: "http://wa.me/+919810878071",
            },
            {
              name: "X",
              link: "https://x.com/afridi4_khan?t=-llfMZ05rwIMcb0yODuSlQ&s=09",
            },
          ],
        },
        {
          id: "m35",
          name: "Laiba zeeai",
          title: "Bsc(hons)cs",
          bio: "Pr (public relation) is all about to expand communication and to conveying the messages to the audience, clients, many more. As a pr i thrilled to manage pr work while maintaining the audience aware of the information and building a positive relationship between the audience nd the organizors. ",
          avatar: laiba,
          social_links: [
            {
              name: "Instagram",
              link: "https://www.instagram.com/just_capricious?igsh=dngzdDUxOXpqcjU4",
            },
            {
              name: "LinkedIn",
              link: "https://www.linkedin.com/in/laiba-zeeai-830b53302",
            },
            {
              name: "Gmail",
              link: "mailto:laibazeeai68@gmail.com",
            },
            {
              name: "Whatsapp",
              link: "http://wa.me/+919711099468",
            },
          ],
        },
      ],
    },
  };

  return (
    <>
      <div className="buttons button-team">
        {Object.keys(teams).map((key) => (
          <button
            key={key}
            className={
              showtab === Number(key)
                ? "btn-container actives"
                : "btn-container"
            }
            onClick={() => handletab(Number(key))}
          >
            {teams[key].title}
          </button>
        ))}
      </div>
      <Team teamMembers={teams[showtab].members} title={teams[showtab].title} />
    </>
  );
}

export default Members;
