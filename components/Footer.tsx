export default function Footer() {
  return (
    <footer className="bg-background py-12 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-primary font-black text-xl">Dom Cortês</span>
          </div>
          <p className="text-zinc-500 text-sm mt-4 md:mt-0">
            &copy; {new Date().getFullYear()} Barbearia Dom Cortês. Todos os
            direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
