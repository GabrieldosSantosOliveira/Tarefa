import { useCallback } from 'react';
import { FlatList } from 'react-native';

import { SkeletonPassword } from './SkeletonPassword';

export const Skeleton = () => {
  const renderItem = useCallback(() => {
    return <SkeletonPassword />;
  }, []);
  return (
    <FlatList
      data={Array.from({ length: 10 })}
      contentContainerStyle={{ gap: 12, paddingBottom: 20 }}
      renderItem={renderItem}
    />
  );
};
