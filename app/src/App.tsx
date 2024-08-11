import '@/App.css';
import MenuBar from '@/components/MenuBar';
import Header from '@/components/Header';
import { Separator } from '@/components/ui/Separator';
import { HistoricListProvider } from '@/context/HistoricListContext';
import { ThemeProvider } from '@/context/ThemeProvider';

function App() {
  return (
    <ThemeProvider storageKey="ui-theme">
      <Header />

      <HistoricListProvider>
        <main className="mt-6 flex max-w-full justify-center px-6">
          <div>
            <MenuBar />
            <Separator orientation="horizontal" className="my-3" />
          </div>
        </main>
      </HistoricListProvider>
    </ThemeProvider>
  );
}

export default App;
