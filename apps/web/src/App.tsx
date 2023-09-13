import { useState, useEffect } from 'react';
import { Workspace, User } from '@clapcorner/types';

const App = () => {
  const [data, setData] = useState<Workspace[]>([])

  const user: User = {
    birthDate: 20230913,
    name: 'Alex',
  }

  console.log(user);

  useEffect(() => {
    fetch('http://localhost:8000/workspaces')
      .then((response) => response.json())
      .then(({ data }) => setData(data))
  }, [])

  return (
    <>
      <h1>Building a fullstack TypeScript project with Turborepo</h1>
      <h2>Workspaces</h2>
      {data.map(d => (
        <div style={{ marginBottom: '15px' }}>
          <label>Name: {d.name}</label>
          <br/>
          <label>Version: {d.version}</label>
        </div>
      ))}
    </>
  )
}

export default App
