import React from "react";
import "./PageFour.css";
import bg from "../../assets/contact4.jpg";

function Pagefour({ contactRef }) {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "0debe280-33ae-48fa-bbf4-ae6663ef385d");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      alert("Thank you for your submission!");
      event.target.reset();
    } else {
      console.log("Error", res);
      alert("Something went wrong, please try again later");
    }
  };
  return (
    <div
      ref={contactRef}
      className="four"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* <h1></h1> */}
      <div className="form-container" name="contactform">
        <form className="form" onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="email">Enter Your Email</label>
            <input type="text" id="email" name="email" required="" />
          </div>
          <div className="form-group">
            <label htmlFor="textarea">
              Describe Yourself and How Can You Contribute?
            </label>
            <textarea
              name="textarea"
              id="textarea"
              rows={10}
              cols={50}
              required=""
              defaultValue={"          "}
            />
          </div>
          <button className="form-submit-btn" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Pagefour;
