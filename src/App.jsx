import { CORE_CONCEPTS, EXAMPLES } from './data';
import Header from './components/Header/Header';
import CoreConcepts from './components/CoreConcepts';
import TabButton from './components/TabButton';
import { useState } from 'react';

function App() {
  const [selectedTab, setSelectedTab] = useState();

  function selectHandlder(selectedButton) {
    setSelectedTab(selectedButton);
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
            <TabButton onSelect={() => selectHandlder('components')}>Components</TabButton>
            <TabButton onSelect={() => selectHandlder('jsx')}>JSX</TabButton>
            <TabButton onSelect={() => selectHandlder('props')}>Props</TabButton>
            <TabButton onSelect={() => selectHandlder('state')}>State</TabButton>
          </menu>
          {!selectedTab && <p>Please select a concept to see an example.</p>}
          {selectedTab && (<div id="tab-content">
            <h3>{EXAMPLES[selectedTab].title}</h3>
            <p>{EXAMPLES[selectedTab].description}</p>
            <pre><code>{EXAMPLES[selectedTab].code}</code></pre>
          </div>)}

        </section>
      </main>
    </div>
  );
}

export default App;
