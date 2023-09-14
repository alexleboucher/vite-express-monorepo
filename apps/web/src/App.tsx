import { useState, useEffect } from 'react';
import axios from 'axios';
import { Workspace, User } from '@clapcorner/types';

const App = () => {
  const [serverHealth, setServerHealth] = useState<string>();

  const user: User = {
    birthDate: 20230913,
    name: 'Alex',
  }

  console.log(user);

  useEffect(() => {
    axios.get('http://localhost:8000/api/health')
    .then(res => setServerHealth(res.data))
  }, [])

  return (
    <>
      <h1>Building a fullstack TypeScript project with Turborepo</h1>
      <h2>Workspaces</h2>
      <label>{serverHealth}</label>
    </>
  )
}

export default App
