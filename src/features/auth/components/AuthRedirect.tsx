'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getAccessToken } from '@/helpers/apiHelper';

export default function AuthRedirect() {
  const router = useRouter();

  useEffect(() => {
    if (getAccessToken()) router.replace('/posts');
  }, [router]);

  return null;
}
