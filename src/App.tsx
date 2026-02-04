import { FaYoutube, FaSpotify, FaApple, FaInstagram } from "react-icons/fa";

const links = [
  {
    name: "YouTube",
    url: "https://www.youtube.com/@CalvinWest",
    icon: FaYoutube,
    color: "hover:bg-red-500/10 hover:border-red-500/50",
  },
  {
    name: "Spotify",
    url: "https://open.spotify.com/artist/2RIe3EiEM47ibUjUIJwdzp",
    icon: FaSpotify,
    color: "hover:bg-green-500/10 hover:border-green-500/50",
  },
  {
    name: "Apple Music",
    url: "https://music.apple.com/gb/artist/my-fatal-desire/366748112",
    icon: FaApple,
    color: "hover:bg-pink-500/10 hover:border-pink-500/50",
  },
  {
    name: "Instagram",
    url: "https://instagram.com/calvin.west",
    icon: FaInstagram,
    color: "hover:bg-purple-500/10 hover:border-purple-500/50",
  },
];

export function App() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#8C8680] p-6">
      <div className="w-full max-w-sm rounded-2xl bg-[#D9D1C7] px-8 py-10 shadow-2xl">
        
        {/* Profile Photo */}
        <div className="flex justify-center">
          <div className="h-24 w-24 overflow-hidden rounded-full border-4 border-[#595652] shadow-lg">
            <img
              src="calvinwest.webp"
              alt="Profile"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <h1 className="mt-5 text-center text-xl font-semibold text-[#262524]">
          Calvin West
        </h1>

        {/* Links */}
        <div className="mt-8 space-y-3">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-4 rounded-xl border border-[#262524]/30 bg-white/50 px-5 py-4 transition-all duration-200 ${link.color}`}
            >
              <link.icon className="h-6 w-6 text-[#262524]" />
              <span className="flex-1 text-center font-medium text-[#262524]">
                {link.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}