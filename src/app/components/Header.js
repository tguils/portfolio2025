export default function Header() {
  return (
    <header className="relative w-full py-20 px-4 text-center bg-blush overflow-hidden">
      {/* Soft Blob Background */}
      <img
        src="/blob.svg"
        alt=""
        className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] opacity-20 pointer-events-none z-0"
      />

      {/* Actual content */}
      <div className="relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-plum tracking-tight">Tess Guilmette</h1>
        <p className="text-mauve mt-3 text-lg">
          Web Developer · Digital Consultant · AI Strategist
        </p>
      </div>
    </header>
  )
}
