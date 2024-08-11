import ThemeModeToggle from '@/components/ThemeModeToggle';

const Header = () => {
  return (
    <header className="flex items-center justify-between border-b border-solid border-border bg-card px-10 py-4">
      <h1 className="font-sans text-lg font-semibold leading-none">SO Historics</h1>

      <ThemeModeToggle />
    </header>
  );
};

export default Header;
