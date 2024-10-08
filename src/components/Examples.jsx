import TabButton from '../components/TabButton';
import {EXAMPLES} from '../data';
import { useState } from 'react';
import Section from './Section';
import Tabs from './Tabs';

export default function Examples(){
    let [selectedTopic, setSelectedTopic] = useState('');
    function handleSelect(SelctedButton)
  {
    setSelectedTopic(SelctedButton)
  }
return(
<Section title="Examples" id="examples">
<Tabs buttonsContainer="menu" buttons={<><TabButton isSelected={selectedTopic === 'components'} onSelect={() => handleSelect('components')}>Components</TabButton>
  <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => handleSelect('jsx')}>JSX</TabButton>
  <TabButton isSelected={selectedTopic === 'props'} onSelect={() => handleSelect('props')}>Props</TabButton>
  <TabButton isSelected={selectedTopic === 'state'} onSelect={() => handleSelect('state')}>State</TabButton></>}>
{ !selectedTopic ?<p>Please Select a Topic.</p>: null }
  {selectedTopic ? (
  <div id="tab-content">
  <h3>{EXAMPLES[selectedTopic].title}</h3>
  <p>{EXAMPLES[selectedTopic].description}</p>
  <pre>
    <code>{EXAMPLES[selectedTopic].code}</code>
  </pre>
</div>) : null}
</Tabs>


</Section>
);
}