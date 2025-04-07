export default function Footer() {
  return (
    <footer className="py-8 bg-muted dark:bg-slate-900 text-foreground">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <a href="#home" className="text-xl font-bold font-inter">
              <span className="text-primary">Prajyot</span>
            </a>
            <p className="text-muted-foreground dark:text-gray-400 mt-2">Android & Unity Developer</p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-muted-foreground dark:text-gray-400">&copy; {new Date().getFullYear()} Prajyot. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
