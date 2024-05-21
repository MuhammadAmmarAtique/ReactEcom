import styled from "styled-components";
import { Button } from "../styles/Button";

const Wrapper = styled.section`
  padding: 9rem 0 5rem 0;
  text-align: center;

  .container {
    margin-top: 6rem;

    .contact-form {
      max-width: 50rem;
      margin: auto;

      .contact-inputs {
        display: flex;
        flex-direction: column;
        gap: 3rem;

        input[type="submit"] {
          cursor: pointer;
          transition: all 0.2s;

          &:hover {
            background-color: ${({ theme }) => theme.colors.white};
            border: 1px solid ${({ theme }) => theme.colors.btn};
            color: ${({ theme }) => theme.colors.btn};
            transform: scale(0.9);
          }
        }
      }
    }
  }
`;

const Contact = () => {
  return (
    <Wrapper>
      <h2 className="common-heading"> Contact Page </h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3308.5634113213073!2d72.910209274811!3d33.97805942164517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfb29116f4f94f%3A0xaf454a05b9dadc43!2sThe%20University%20of%20Haripur!5e0!3m2!1sen!2s!4v1716284485451!5m2!1sen!2s"
        width="95%"
        height="350"
        style={{ border: 0 }} //iniside curly brackets we pass styling as an object in form of key value pair
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade" //in react we write props/attribute in form of camel casing
      ></iframe>

      {/* Used third party library "Formspree" to handle forms  */}
      <div className="container">
        <div className="contact-form">
          <form
            action="https://formspree.io/f/xeqyweja"
            method="POST"
            className="contact-inputs"
          >
            <input
              type="name"
              name="Username"
              placeholder="name"
              required
              autoComplete="off"
            />
            <input
              type="email"
              name="User Email:"
              placeholder="email"
              required
              autoComplete="off"
            />
            <textarea
              name="User Message:"
              placeholder="message"
              required
              autoComplete="off"
            />
            <Button type="submit">Send</Button>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;
