import { useCallback } from 'react';
import { FlatList } from 'react-native';
import { Ghost, GhostListProps, GhostRenderItem } from '../../types';
import { GhostListItem } from '../ghost-list-item';
import ghosts from '../../resources/ghosts.json';

/**
 * The FlastList for all of the ghosts shown in the main screen
 * @param navigateToGhostScreen - The navigate function used to go to GhostScreen
 * @function renderItem - The component that the FlatList renders for each item
 */
export const GhostList: React.FC<GhostListProps> = ({ navigateToGhostScreen }: GhostListProps) => {
  const renderItem = useCallback(({ item: data }: GhostRenderItem) => {
    return <GhostListItem ghost={data} navigateToGhostScreen={navigateToGhostScreen} />;
  }, []);

  return <FlatList renderItem={renderItem} data={ghosts as Array<Ghost>} />;
};

export default GhostList;
