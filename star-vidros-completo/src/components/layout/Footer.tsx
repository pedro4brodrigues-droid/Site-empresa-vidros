import { Link } from "wouter";
import logoImg from "@/assets/star-vidros-logo.png";
import { getWhatsappLink } from "@/lib/whatsapp";

export function Footer() {
  return (
    <footer className="bg-gray-50 pt-16 pb-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          
          <div className="md:col-span-1">
            <div className="mb-6">
              <img src={logoImg} alt="Star Vidros" className="h-12 object-contain" />
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground mb-6">
              Sua parceira de confiança para projetos em vidro. Qualidade, segurança e acabamento premium para transformar seus ambientes.
            </p>
            <div className="flex gap-4">
              {/* Social placeholders */}
              <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.045 3.252.148 4.771 1.691 4.919 4.919.033 1.265.044 1.645.044 4.85 0 3.204-.012 3.584-.045 4.85-.148 3.252-1.664 4.771-4.919 4.919-1.266.034-1.646.045-4.85.045-3.204 0-3.584-.012-4.85-.045-3.252-.148-4.771-1.691-4.919-4.919-.034-1.265-.045-1.646-.045-4.85 0-3.204.012-3.584.045-4.85.148-3.252 1.664-4.771 4.919-4.919 1.266-.034 1.646-.045 4.85-.045zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-foreground font-bold mb-6">Nossos Serviços</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#servicos" className="hover:text-primary transition-colors">Box de Banheiro</a></li>
              <li><a href="#servicos" className="hover:text-primary transition-colors">Portas de Vidro</a></li>
              <li><a href="#servicos" className="hover:text-primary transition-colors">Envidraçamento de Sacadas</a></li>
              <li><a href="#servicos" className="hover:text-primary transition-colors">Espelhos Decorativos</a></li>
              <li><a href="#servicos" className="hover:text-primary transition-colors">Escada de Vidro</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-foreground font-bold mb-6">Menu</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#hero" className="hover:text-primary transition-colors">Início</a></li>
              <li><a href="#sobre" className="hover:text-primary transition-colors">Sobre a Empresa</a></li>
              <li><a href="#diferenciais" className="hover:text-primary transition-colors">Diferenciais</a></li>
              <li>
                <a
                  href={getWhatsappLink("Quero solicitar um orçamento")}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="link-whatsapp-orcamento-footer"
                  className="hover:text-primary transition-colors"
                >
                  Solicitar Orçamento
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-foreground font-bold mb-6">Contato</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="font-semibold text-foreground">WhatsApp:</span> (34) 9216-6130
              </li>
              <li className="flex items-start gap-3">
                <span className="font-semibold text-foreground">E-mail:</span> contato@starvidros.com.br
              </li>
              <li className="flex items-start gap-3">
                <span className="font-semibold text-foreground">Horário:</span>{" "}
                <Link
                  href="/horarios"
                  data-testid="link-horario-funcionamento"
                  className="text-primary font-semibold hover:underline underline-offset-2"
                >
                  Seg a Sex das 08h às 18h
                </Link>
              </li>
            </ul>
          </div>

        </div>

        <div className="text-center pt-8 border-t border-border text-sm text-muted-foreground flex flex-col md:flex-row items-center justify-between">
          <p>&copy; {new Date().getFullYear()} Star Vidros. Todos os direitos reservados.</p>
          <p className="mt-2 md:mt-0">Desenvolvido com excelência.</p>
        </div>
      </div>
    </footer>
  );
}
