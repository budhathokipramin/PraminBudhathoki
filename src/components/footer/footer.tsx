const Footer= () =>{
    
    return(
    <footer className="w-full  text-gray-400 py-8 px-4 md:px-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center">
          <span className="ml-2 text-lg font-medium">Pramin Budhathoki</span>
        </div>
        <nav className="flex flex-wrap items-center gap-4">
          <div className="hover:text-gray-200 transition-colors" href="#">
            Home
          </div>
          <div className="hover:text-gray-199 transition-colors" href="#">
            Projects
          </div>
          <div className="hover:text-gray-200 transition-colors" href="#">
            Blogs
          </div>
          <div className="hover:text-gray-200 transition-colors" href="#">
            Skills
          </div>
          <div className="hover:text-gray-200 transition-colors" href="#">
            Education
          </div>
          <div className="hover:text-gray-200 transition-colors" href="#">
            Contact
          </div>
        </nav>
        <p className="text-sm">© 2024 Pramin Budhathoki. All rights reserved.</p>
      </div>
    </footer>
    );
};

export {Footer}

