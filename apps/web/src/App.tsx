import { useState, useEffect } from 'react';
import axios from 'axios';

import type { HealthResponse } from '@internal/types';

const App = () => {
  const [serverStatus, setServerStatus] = useState<HealthResponse['status']>();

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    axios.get<HealthResponse>('http://localhost:8000/api/health')
      .then(({ data }) => setServerStatus(data.status));
  }, []);

  return (
    <>
      <h1>Building a fullstack TypeScript project with Turborepo</h1>
      <h2>Server status:</h2>
      <label>{serverStatus}</label>
    </>
  );
};

export default App;
