import '@/App.css';
import MenuBar from '@/components/MenuBar';
import Header from '@/components/Header';
import { Separator } from '@/components/ui/Separator';
import { HistoricListProvider } from '@/context/HistoricListContext';
import { ThemeProvider } from '@/context/ThemeProvider';
import HistoricList from '@/components/HistoricList';

function App() {
  return (
    <ThemeProvider storageKey="ui-theme">
      <Header />

      <HistoricListProvider>
        <main className="mt-6 flex justify-center px-6">
          <div className="w-full max-w-[92.5rem]">
            <MenuBar />
            <Separator orientation="horizontal" className="my-3" />
            <HistoricList />
          </div>
        </main>
      </HistoricListProvider>
    </ThemeProvider>
  );
}

export default App;
