import axios from "axios";

export const EmailTemplate = ({ username, userId }) => (
  <div>
    <p>Hi, {username} Please verified your email</p>
    <a href={`${process.env.NEXTAUTH_URL}/accountverification/${userId}`}>
      Click this link to verify
    </a>
  </div>
);
