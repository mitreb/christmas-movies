'use client';

import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

interface LoadMoreProps {
  isLoading: boolean;
  loadMore: () => void;
}

const LoadMore = ({ isLoading, loadMore }: LoadMoreProps) => {
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      loadMore();
    }
  }, [inView, loadMore]);

  return (
    <section className="flex justify-center items-center">
      <div ref={ref}>
        {inView && isLoading && (
          <Image
            src="./spinner.svg"
            alt="spinner"
            width={56}
            height={56}
            className="object-contain"
          />
        )}
      </div>
    </section>
  );
};

export default LoadMore;
