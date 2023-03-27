import Head from 'next/head'
import Login from '../pages/auth/login';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Movie Goblin</title>
        <meta name="A movie database and sharing site." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <Login />
      </div>
    </div>
  );
}
