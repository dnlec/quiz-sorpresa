export default function Navbar() {

  return (
    <div className="flex flex-1 bg-black text-white gap-5 p-2 items-center">
      Navbar
      <div className="flex gap-2">
        <button className="text-gray-300 hover:text-white">Home</button>
        <button className="text-gray-300 hover:text-white">Features</button>
        <button className="text-gray-300 hover:text-white">Pricing</button>
        <button className="text-gray-300 hover:text-white">About</button>
        <input type="text" placeholder="Search" className="bg-white rounded text-gray-800"/>
        <button className="border border-blue-500 text-blue-500 py-2 px-4 rounded hover:bg-blue-50">
          Search
        </button>
      </div>
    </div>
  )
}