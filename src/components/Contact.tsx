import { LinkedInIcon, GitHubIcon, EmailIcon, XIcon } from "../icons";

export default function () {
  return (
    <div id="contact">
      <div
        className="fixed bottom-0 mx-auto left-0 right-0 mb-2 flex justify-around items-center border rounded-full p-4 bg-black"
        style={{ maxWidth: "80%" }}
      >
        <a
          href="https://www.linkedin.com/in/samarthdhawan2911/"
          target="_blank"
          className="flex items-center text-white text-xl p-3 shadow-lg rounded"
        >
          {<LinkedInIcon />}
          LinkedIn
        </a>
        <a
          href="https://github.com/samarth8765"
          target="_blank"
          className="flex items-center text-white p-3 text-xl shadow-lg rounded"
        >
          {<GitHubIcon />}
          GitHub
        </a>
        <a
          href="https://x.com/vizz_codes"
          target="_blank"
          className="flex items-center text-white text-xl p-3 shadow-lg rounded"
        >
          {<XIcon />}
          Twitter
        </a>
        <a
          href="mailto:samdhawan8765@gmail.com"
          className="flex items-center text-white p-4 text-xl shadow-lg rounded"
        >
          {<EmailIcon />}
          Email
        </a>
      </div>
    </div>
  );
}
