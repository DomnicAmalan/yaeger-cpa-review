// components/ComingSoon.tsx
import React from 'react';
import Head from 'next/head';

interface ComingSoonProps {
  title: string;
}

const ComingSoon: React.FC<ComingSoonProps> = ({ title }) => {
  return (
    <>
      <Head>
        <title>{title} - Coming Soon</title>
      </Head>
      <div className="flex items-center justify-center h-screen">
        <h2 className="text-2xl font-semibold">Coming Soon</h2>
      </div>
    </>
  );
};

export default ComingSoon;
