import { useState } from 'react';

function Tabs({ tabs }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div>
      <ul>
        {tabs.map((tab, index) => (
          <li key={index} onClick={() => setActiveIndex(index)}>
            {tab.title}
          </li>
        ))}
      </ul>
      <p>{tabs[activeIndex].content}</p>
    </div>
  );
}

export default Tabs;
