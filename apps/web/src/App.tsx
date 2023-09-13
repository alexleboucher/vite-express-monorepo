import { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [data, setData] = useState<Workspace[]>([])

  useEffect(() => {
    fetch('http://localhost:5000/workspaces')
      .then((response) => response.json())
      .then(({ data }) => setData(data))
  }, [])

  return (
    <>
      <h1>Building a fullstack TypeScript project with Turborepo</h1>
      <h2>Workspaces</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  )
}

export default App
