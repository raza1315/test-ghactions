// import React from 'react'
import "./Blog.css";
import Blog1 from "../../assets/Blog1.avif";
import Blog2 from "../../assets/Blog2.avif";
import Blog3 from "../../assets/blog3.jpeg";
import Blog4 from "../../assets/blog4.avif";
import Blog5 from "../../assets/blog5.webp";
import Blog6 from "../../assets/blog6.png";

export default function Blog({ Blogref }) {
  return (
    <div className="blogs" ref={Blogref}>
      <div className="blog-img">
        <div className="blog-title">
          <q className="blog-quote">Read Our Blogs</q>
          <h3> Explore The Activities We Are Doing </h3>
        </div>
      </div>

      <div className="container-blog swiper">
        <div className="slider-wrapper">
          <div className="card-list swiper-wrapper">
            {/* 1 */}

            <div className="card-item swiper-slide">
              <img
                decoding="async"
                src={Blog4}
                alt="4"
                className="user-image"
              />
              <h2 className="user-name">Hamza</h2>
              <p className="user-profession">
                In the ever-evolving IT landscape, you’ve likely come across the
                term “DevOps” — a concept that’s rapidly gaining traction among
                major tech companies. With its emphasis on streamlining
                operations and development, DevOps is shaping the future of IT
                practices. In this blog, I’ll dive into what DevOps means, and
                the key aspects we’ll explore include:-
              </p>
              <button className="message-button">
                <a href="https://hashnode.com/post/cm0i7yhxm000609jqcd6ee2ch">
                  {" "}
                  Read More{" "}
                </a>
              </button>
            </div>

            {/* 2 */}
            <div className="card-item swiper-slide">
              <img
                decoding="async"
                src={Blog6}
                alt="blog5"
                className="user-image"
              />
              <h2 className="user-name">Tauqeer Ahmad</h2>
              <p className="user-profession">
                GitHub, the world’s leading platform for version control and
                collaborative software development, offers a special programme
                for students under the GitHub Student Developer Pack. This pack
                provides a resources, and benefits to help students learn,
                collaborate, and build their skills. In this blog post, we’ll
                explore why GitHub is essential for students, the relevance of
                GitHub Education, and how to apply for the Student Developer
                Pack.{" "}
              </p>
              <button className="message-button">
                <a href="https://tauqeerahmad.hashnode.dev/get-your-github-student-developer-pack">
                  {" "}
                  Read More{" "}
                </a>
              </button>
            </div>
            {/* 3 */}
            <div className="card-item swiper-slide">
              <img
                decoding="async"
                src={Blog3}
                alt="Blog 3"
                className="user-image"
              />
              <h2 className="user-name">Khalique Hussain</h2>
              <p className="user-profession">
                Software development is a dynamic field that requires a deep
                understanding of technology and user needs. By following best
                practices, adopting the right methodologies, and staying updated
                with emerging trends, developers can create high-quality
                software that meets the needs of users alike. Whether you're a
                beginner or an experienced developer, continuous learning and
                adaptation are key to success in the ever-evolving world of
                software development.
              </p>
              <button className="message-button">
                <a href="https://khaliquehussain.hashnode.dev/software-development">
                  {" "}
                  Read More{" "}
                </a>
              </button>
            </div>
            {/* 4 */}
            <div className="card-item swiper-slide">
              <img
                // decoding="async"
                src={Blog2}
                alt="Blog 2"
                className="user-image"
              />
              <h2 className="user-name">Tauqeer Ahmed</h2>
              <p className="user-profession">
                Welcome to the world of Azure Command-Line Interface (CLI)! As
                cloud computing continues to revolutionize the way we build,
                deploy, and manage applications, having a powerful and efficient
                tool like the Azure CLI in your toolkit is essential.
              </p>
              <button className="message-button">
                <a href="https://tauqeerahmad.hashnode.dev/navigating-the-microsoft-azure-cli">
                  {" "}
                  Read More{" "}
                </a>
              </button>
            </div>

            <div className="card-item swiper-slide">
              <img
                decoding="async"
                src={Blog5}
                alt="Userr"
                className="user-image"
              />
              <h2 className="user-name">Md Aasif</h2>
              <p className="user-profession">
                Welcome to the exciting world of Android development, where
                you’ll learn to create your own mobile apps from scratch.
                Whether you’re new to coding or have some experience, this
                journey is all about making things happen in a fun and
                approachable way.
              </p>
              <button className="message-button">
                <a href="https://medium.com/@syedaasif009/a-playful-dive-into-android-development-for-beginners-080b0fe33ce2">
                  {" "}
                  Read More{" "}
                </a>
              </button>
            </div>

            {/* blog6 */}

            <div className="card-item swiper-slide">
              <img
                // decoding="async"
                src={Blog1}
                alt="user"
                className="user-image"
              />
              <h2 className="user-name">Tauqeer Ahmed</h2>
              <p className="user-profession">
                Deploying your Application on Azure Kubernetes ServiceAzure
                Kubernetes Service (AKS) is a managed Kubernetes service
                provided by Microsoft. It allows you to deploy and manage
                containerized applications without the
              </p>
              <button className="message-button">
                <a href="https://tauqeerahmad.hashnode.dev/deploying-your-application-on-azure-kubernetes-service">
                  {" "}
                  Read More{" "}
                </a>
              </button>
            </div>
          </div>
          <div className="swiper-pagination" />
          <div className="swiper-slide-button swiper-button-prev" />
          <div className="swiper-slide-button swiper-button-next" />
        </div>
      </div>
    </div>
  );
}
