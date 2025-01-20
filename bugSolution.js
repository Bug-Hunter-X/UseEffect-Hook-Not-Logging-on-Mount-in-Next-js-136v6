```javascript
import {useEffect, useState} from 'react';

export default function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Ensured execution after component rendering
    setTimeout(() => {
      console.log('Mounted!');
    }, 0);
  }, []);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```