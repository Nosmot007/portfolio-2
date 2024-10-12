export const metadata = {
  title: 'My Portfolio',
  description: 'A dynamic portfolio with crazy animations',
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white">
        {/* Navbar */}
        <header className="fixed w-full top-0 p-5 flex justify-between items-center bg-gray-800 shadow-lg z-50">
          <h1 className="text-3xl font-bold">My Portfolio</h1>
          <nav>
            <ul className="flex space-x-8">
              <li><a href="#home" className="hover:text-yellow-500">Home</a></li>
              <li><a href="#about" className="hover:text-yellow-500">About</a></li>
              <li><a href="#projects" className="hover:text-yellow-500">Projects</a></li>
              <li><a href="#contact" className="hover:text-yellow-500">Contact</a></li>
            </ul>
          </nav>
        </header>

        {/* Page Content */}
        <main className="pt-20">
          {children}
        </main>
      </body>
    </html>
  );
}
