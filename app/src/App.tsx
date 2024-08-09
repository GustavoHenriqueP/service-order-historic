import '@/App.css';
import Header from '@/components/Header';
import { ThemeProvider } from '@/context/ThemeProvider';

function App() {
  return (
    <ThemeProvider storageKey="ui-theme">
      <Header />
    </ThemeProvider>
  );
}

export default App;
