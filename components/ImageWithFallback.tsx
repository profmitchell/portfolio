"use client";

import { useState } from 'react';
import Image, { ImageProps } from 'next/image';

interface ImageWithFallbackProps extends Omit<ImageProps, 'onError'> {
  fallbackSrc?: string;
}

export function ImageWithFallback({ 
  src, 
  fallbackSrc = '/images/placeholder.jpg', 
  alt, 
  ...rest 
}: ImageWithFallbackProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [error, setError] = useState(false);

  return (
    <Image
      {...rest}
      alt={alt}
      src={error ? fallbackSrc : imgSrc}
      onError={() => {
        setImgSrc(fallbackSrc);
        setError(true);
      }}
    />
  );
}