import Tabs from './Components/Tabs';

function App() {
  return (
    <div>
      <h1></h1>
      <Tabs
        tabs={[
          { title: 'Tab 1', content: 'This is the content for Tab 1' },
          { title: 'Tab 2', content: 'This is the content for Tab 2' },
          { title: 'Tab 3', content: 'This is the content for Tab 3' }
        ]}
      />
    </div>
  );
}

export default App;
