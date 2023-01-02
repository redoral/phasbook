import { useCallback } from 'react';
import { FlatList } from 'react-native';
import { GhostListProps, GhostRenderItem } from '../../types';
import { GhostListItem } from '../ghost-list-item';
import ghostsData from '../../resources/ghosts.json';

/**
 * The FlastList for all of the ghosts shown in the main screen
 * @returns a React component
 */
export const GhostList: React.FC<GhostListProps> = ({ navigate }: GhostListProps) => {
  const renderItem = useCallback(({ item: data }: GhostRenderItem) => {
    return <GhostListItem ghost={data} navigate={navigate} />;
  }, []);

  return <FlatList renderItem={renderItem} data={ghostsData} />;
};

export default GhostList;
