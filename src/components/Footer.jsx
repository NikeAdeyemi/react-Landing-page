import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="first">
        <img src="../images/nexcent.jpg" alt="" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ab
          nisi voluptatibus doloribus? Velit veniam aliquid, nostrum facilis
          iusto dicta.
        </p>
      </div>

      <div className="second">
        <h4>Products</h4>
        <ul>
          <li>E-commerce</li>
          <li>Social media</li>
          <li>Logistic App</li>
          <li>ERM</li>
          <li>School Management</li>
        </ul>
      </div>

      <div className="third">
        <h4>Products</h4>
        <ul>
          <li>E-commerce</li>
          <li>Social media</li>
          <li>Logistic App</li>
          <li>ERM</li>
          <li>School Management</li>
        </ul>
      </div>

      <div className="fourth">
        <h4>Products</h4>
        <ul>
          <li>E-commerce</li>
          <li>Social media</li>
          <li>Logistic App</li>
          <li>ERM</li>
          <li>School Management</li>
        </ul>
      </div>

      <div className="fifth">
        <div className="inputContainer">
          <input type="search" placeholder="search" />
          <i class="fa-solid fa-magnifying-glass"></i>
        </div>
        <div className="iconsContainer">
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-youtube"></i>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
