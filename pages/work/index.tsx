/**
 * Work Index — Redirects to /work/built
 */

import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function WorkIndex() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/work/built');
  }, [router]);

  return null;
}


