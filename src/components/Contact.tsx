import { LinkedInIcon, GitHubIcon, EmailIcon, XIcon } from "../icons";

export default function ContactBar() {
  return (
    <div id="contact">
      <div
        className="fixed inset-x-0 bottom-0 mx-auto mb-2 bg-black border rounded-full p-1"
        style={{ maxWidth: "60%" }}
      >
        <div className="grid grid-cols-2 gap-1 sm:flex sm:justify-around sm:items-center w-full">
          <a
            href="https://www.linkedin.com/in/samarthdhawan2911/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center text-white text-base md:text-xl p-2 md:p-3 shadow-lg rounded"
          >
            {<LinkedInIcon />}
            LinkedIn
          </a>
          <a
            href="https://github.com/samarth8765"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center text-white text-base md:text-xl p-2 md:p-3 shadow-lg rounded"
          >
            {<GitHubIcon />}
            GitHub
          </a>
          <a
            href="https://x.com/vizz_codes"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center text-white text-base md:text-xl p-2 md:p-3 shadow-lg rounded"
          >
            {<XIcon />}
            Twitter
          </a>
          <a
            href="mailto:samdhawan8765@gmail.com"
            className="flex items-center justify-center text-white text-base md:text-xl p-2 md:p-4 shadow-lg rounded"
          >
            {<EmailIcon />}
            Email
          </a>
        </div>
      </div>
    </div>
  );
}
