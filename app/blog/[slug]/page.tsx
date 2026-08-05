'use client';

import { useParams } from 'next/navigation';

export default function BlogDetailPage() {
  const params = useParams();
  const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;

  return (
    <div>
      <h1>ブログ記事</h1>
      <p>スラッグ: {slug}</p>
      <p>記事タイトル: {slug?.replace(/-/g, ' ')}</p>
      <p>これは「{slug}」というスラッグのブログ記事です。</p>
    </div>
  );
}