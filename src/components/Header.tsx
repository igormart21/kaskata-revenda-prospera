import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="text-2xl font-bold text-primary">Kaskata</div>
          <div className="text-sm text-muted-foreground hidden sm:block">Sorvetes</div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#como-funciona" className="text-sm font-medium hover:text-primary transition-colors">
            Como Funciona
          </a>
          <a href="#vantagens" className="text-sm font-medium hover:text-primary transition-colors">
            Vantagens
          </a>
          <a href="#cadastro" className="text-sm font-medium hover:text-primary transition-colors">
            Cadastro
          </a>
          <a href="#contato" className="text-sm font-medium hover:text-primary transition-colors">
            Contato
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <Button variant="hero" size="lg" className="hidden md:inline-flex">
            Quero Revender Agora
          </Button>
          
          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <nav className="container py-4 flex flex-col space-y-4">
            <a href="#como-funciona" className="text-sm font-medium hover:text-primary transition-colors">
              Como Funciona
            </a>
            <a href="#vantagens" className="text-sm font-medium hover:text-primary transition-colors">
              Vantagens
            </a>
            <a href="#cadastro" className="text-sm font-medium hover:text-primary transition-colors">
              Cadastro
            </a>
            <a href="#contato" className="text-sm font-medium hover:text-primary transition-colors">
              Contato
            </a>
            <Button variant="hero" size="lg" className="w-full">
              Quero Revender Agora
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;