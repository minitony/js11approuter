'use client';

import { useParams } from 'next/navigation';

export default function ProductDetailPage() {
  const params = useParams();
  const id = params.id;

  return (
    <div>
      <h1>商品詳細</h1>
      <p>商品ID: {id}</p>
      <p>商品名: 商品{id}</p>
      <p>価格: �{Number(id) * 1000}</p>
    </div>
  );
}