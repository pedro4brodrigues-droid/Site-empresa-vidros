import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoImg from "@/assets/star-vidros-logo.png";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-border shadow-sm py-3"
          : "bg-white py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div 
          className="flex items-center cursor-pointer" 
          onClick={() => scrollTo("hero")}
        >
          <img 
            src={logoImg} 
            alt="Star Vidros" 
            className="h-10 md:h-12 object-contain"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollTo("servicos")} className="text-sm font-semibold text-foreground hover:text-primary transition-colors">
            Serviços
          </button>
          <button onClick={() => scrollTo("sobre")} className="text-sm font-semibold text-foreground hover:text-primary transition-colors">
            Sobre Nós
          </button>
          <button onClick={() => scrollTo("diferenciais")} className="text-sm font-semibold text-foreground hover:text-primary transition-colors">
            Diferenciais
          </button>
          <Button 
            variant="accent"
            onClick={() => scrollTo("contato")}
          >
            Fale Conosco
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-foreground hover:text-primary transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-border shadow-lg p-6 flex flex-col gap-6 md:hidden">
          <button onClick={() => scrollTo("servicos")} className="text-left text-lg font-semibold text-foreground">
            Serviços
          </button>
          <button onClick={() => scrollTo("sobre")} className="text-left text-lg font-semibold text-foreground">
            Sobre Nós
          </button>
          <button onClick={() => scrollTo("diferenciais")} className="text-left text-lg font-semibold text-foreground">
            Diferenciais
          </button>
          <Button variant="accent" onClick={() => scrollTo("contato")} className="w-full">
            Fale Conosco
          </Button>
        </div>
      )}
    </nav>
  );
}
