import { useState } from 'react';
import { EXAMPLES } from '../data';
import TabButton from './TabButton';
import Section from './Section';
import Tabs from './Tabs';

export default function Examples() {
    const [selectedTab, setSelectedTab] = useState();

    function selectHandlder(selectedButton) {
        setSelectedTab(selectedButton);
        console.log(selectedButton);
    }

    return (
        <Section title="Examples" id="examples">
            <Tabs
                ButtonsContainer="menu"
                buttons={<>
                    <TabButton onSelect={() => selectHandlder('components')}>Components</TabButton>
                    <TabButton onSelect={() => selectHandlder('jsx')}>JSX</TabButton>
                    <TabButton onSelect={() => selectHandlder('props')}>Props</TabButton>
                    <TabButton onSelect={() => selectHandlder('state')}>State</TabButton>
                </>} />
            {!selectedTab && <p>Please select a concept to see an example.</p>}
            {selectedTab && (<div id="tab-content">
                <h3>{EXAMPLES[selectedTab].title}</h3>
                <p>{EXAMPLES[selectedTab].description}</p>
                <pre><code>{EXAMPLES[selectedTab].code}</code></pre>
            </div>)}
        </Section>
    )
}