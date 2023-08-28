import type { NativeStackScreenProps } from '@react-navigation/native-stack';

/**
 * Type for ghost evidence
 * @member id - ID for each evidence, will be used in the future
 * @member name - Name of the evidence
 * @member icon - MaterialCommunityIcon name for the evidence
 */
type Evidence = {
  id: number;
  name: string;
  icon: string;
};

/**
 * Type for key notes for each ghost
 * @member description - The description/note for a specific ghost
 * @member icon - MaterialCommunityIcon name for the note
 */
type KeyNotes = {
  description: string;
  icon: string;
};

/**
 * Type for the secondary speed property of the ghost
 * @member value - The speed value of the ghost
 * @member description - Description of how the ghost achieves this speed
 */
type SecondarySpeed = {
  value: number;
  description: string;
};

/**
 * Type for each ghost
 * @member name - Name of the ghost
 * @member huntSanity - Sanity value of when the ghost starts to hunt
 * @member baseSpeed - Base speed of the ghost
 * @member secondarySpeed - Speed of the ghost when hunting or near a player
 * @member keyNotes - Unique notes/descriptions for each ghost
 * @member evidence - The array of evidences that a ghost can have
 */
type Ghost = {
  id: string;
  name: string;
  evidences: Array<string>;
  fastSpeed?: { value: number; condition: string };
  slowSpeed?: { value: number; condition: string };
  hunt?: number;
  url: string;
  about: string;
  noLos?: boolean;
};

/**
 * Type for the render item used in the GhostList FlatList
 * @member item - The ghost object passed to the GhostListItem component
 */
type GhostRenderItem = {
  item: Ghost;
};

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
 * Type for the the react props for the GhostListItem component
 * @member navigateToGhostScreen - The function used to navigate to GhostScreen with ReactNavigation
 * @member ghost - The ghost object passed from the GhostRenderItem
 */
type GhostListItemProps = {
  navigateToGhostScreen: (selectedGhost: Ghost) => void;
  ghost: Ghost;
};

/**
 * Type for the navigation stack for ReactNavigation
 * @member Home - The home screen
 * @member GhostScreen - The Ghost Screen
 */
type StackParamList = {
  Home: undefined;
  GhostScreen: Ghost;
};

/**
 * Type for ReactNavigation props used in the Home and Ghost screens
 */
type NavProps = NativeStackScreenProps<StackParamList, 'GhostScreen'>;

export { Ghost, GhostRenderItem, GhostListProps, GhostListItemProps, StackParamList, NavProps };
