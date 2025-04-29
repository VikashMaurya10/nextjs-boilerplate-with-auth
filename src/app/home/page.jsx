import { ThemeGeneratorForm } from '@/components';
import { readCssFile } from '@/lib/read-css';

const Home = async () => {
  const themeVariables = readCssFile('src/styles/tailwind.css');

  console.log('themeVariables\n', themeVariables);

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Theme Generator</h1>
      <ThemeGeneratorForm themeVariables={themeVariables} />
    </div>
  );
};

export default Home;
