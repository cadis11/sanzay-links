import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.replace('/index.html');
  }, []);
  return <p>Redirecting to live page...</p>;
}
