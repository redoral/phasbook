import { useCallback } from 'react';
import { FlatList } from 'react-native';
import { Ghost } from '../types';
import { GhostListItem } from './GhostListItem';
import ghosts from '../resources/ghosts.json';

/**
 * Type for the react props for the GhostList component
 * @member navigateToGhostScreen - The function used to navigate to GhostScreen with ReactNavigation
 */
type GhostListProps = {
  speedFilters: any;
  searchQuery: string;
  navigateToGhostScreen: (selectedGhost: Ghost) => void;
};

/**
 * Type for the render item used in the GhostList FlatList
 * @member item - The ghost object passed to the GhostListItem component
 */
type GhostRenderItem = {
  item: Ghost;
};

/**
 * The FlastList for all of the ghosts shown in the main screen8888
 * @param navigateToGhostScreen - The navigate function used to go to GhostScreen
 * @function renderItem - The component that the FlatList renders for each item
 */
export const GhostList: React.FC<GhostListProps> = ({
  navigateToGhostScreen,
  searchQuery,
  speedFilters
}: GhostListProps) => {
  const renderItem = useCallback(({ item: data }: GhostRenderItem) => {
    return <GhostListItem ghost={data} navigateToGhostScreen={navigateToGhostScreen} />;
  }, []);

  const setFilters = (ghost: any) => {
    if (speedFilters.normal && ghost.slowSpeed === undefined && ghost.fastSpeed === undefined)
      return true;
    if (speedFilters.fast && ghost.fastSpeed !== undefined) return true;
    if (speedFilters.slow && ghost.slowSpeed !== undefined) return true;
    if (speedFilters.los && ghost.noLos) return true;

    return false;
  };

  return (
    <FlatList
      renderItem={renderItem}
      data={
        ghosts.filter(
          (ghost) =>
            setFilters(ghost) && ghost.name.toLowerCase().includes(searchQuery.toLowerCase())
        ) as Array<Ghost>
      }
    />
  );
};

export default GhostList;
