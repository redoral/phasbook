import { useCallback } from 'react';
import { FlatList } from 'react-native';
import { GhostRenderItemI } from '../../types';
import { GhostListItem } from '../ghost-list-item';
import ghostsData from '../../resources/ghosts.json';

/**
 * The FlastList for all of the ghosts shown in the main screen
 * @returns a React component
 */
export const GhostList: React.FC = () => {
  const renderItem = useCallback(({ item: data }: GhostRenderItemI) => {
    return <GhostListItem ghost={data} />;
  }, []);

  return <FlatList renderItem={renderItem} data={ghostsData} />;
};

export default GhostList;
