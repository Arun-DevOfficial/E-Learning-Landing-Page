export default function Navbar() {
  return (
    <>
      <nav className="flex justify-end gap-16 p-7 items-center">
        <ul className="flex gap-16 text-lg">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">Careers</li>
          <li className="cursor-pointer">Blog</li>
          <li className="cursor-pointer">About Us</li>
        </ul>
        <div className="flex gap-8 text-lg">
          <button className="bg-white text-black rounded-full px-8 py-3 shadow-sm">Login</button>
          <button className="bg-[#f58d05] text-white rounded-full px-8 py-3">Sign Up</button>
        </div>
      </nav>
    </>
  );
}
