import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"

export default function Contact() {
  return (
    <section className="bg-white py-16 px-6 text-center">
      <h2 className="text-3xl font-bold text-plum mb-6">Let&#39;s Connect</h2>
      <p className="text-mauve mb-8 text-lg">
        Want to collaborate or say hi? I&#39;d love to hear from you.
      </p>
      <div className="flex justify-center space-x-6 text-2xl text-orchid">
        <a
          href="mailto:tess@tgwebdevelopment.com"
          aria-label="Email"
          className="hover:text-plum transition"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://github.com/tguils"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:text-plum transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/tess-guilmette/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-plum transition"
        >
          <FaLinkedin />
        </a>
      </div>
    </section>
  )
}
