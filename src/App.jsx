import { CORE_CONCEPTS } from './data';
import Header from './components/Header/Header';
import CoreConcepts from './components/CoreConcepts';
import TabButton from './components/TabButton';

function App() {
  function selectHandlder(selectedButton) {
    console.log(selectedButton);
  }

  return (
    <div>
      <Header />
      <main>
        <section id='core-concepts'>
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((concept) => (
              <CoreConcepts
                {...concept}
              />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => selectHandlder('Components')}>Components</TabButton>
            <TabButton onSelect={() => selectHandlder('JSX')}>JSX</TabButton>
            <TabButton onSelect={() => selectHandlder('Props')}>Props</TabButton>
            <TabButton onSelect={() => selectHandlder('State')}>State</TabButton>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
