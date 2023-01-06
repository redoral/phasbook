import type { NativeStackScreenProps } from '@react-navigation/native-stack';

/**
 * Type for ghost evidence
 * @property id - ID for each evidence, will be used in the future
 * @property name - Name of the evidence
 * @property icon - MaterialCommunityIcon name for the evidence
 */
type Evidence = {
  id: number;
  name: string;
  icon: string;
};

/**
 * Type for key notes for each ghost
 * @property description - The description/note
 * @property icon - MaterialCommunityIcon name for the note
 */
type KeyNotes = {
  description: string;
  icon: string;
};

/**
 * Type for the secondary speed property of the ghost
 * @property value - The speed value of the ghost
 * @property description - Description of how the ghost achieves this speed
 */
type SecondarySpeed = {
  value: number;
  description: string;
};

/**
 * The type for each ghost
 * @property name - Name of the ghost
 * @property huntSanity - Sanity value of when the ghost starts to hunt
 * @property baseSpeed - Base speed of the ghost
 * @property secondarySpeed - Speed of the ghost when hunting or near a player
 * @property keyNotes - Unique notes/descriptions for each ghost
 * @property evidence - The array of evidences that a ghost can have
 */
type Ghost = {
  name: string;
  huntSanity: number;
  baseSpeed: number;
  secondarySpeed: SecondarySpeed;
  keyNotes: KeyNotes[];
  evidence: Evidence[];
};

/**
 * The type for the render item used in the GhostList FlatList
 * @property item - The ghost object passed to the GhostListItem component
 */
type GhostRenderItem = {
  item: Ghost;
};

/**
 * The type for the react props for the GhostList component
 * @property navigateToGhostScreen - The function used to navigate to GhostScreen with ReactNavigation
 */
type GhostListProps = {
  navigateToGhostScreen: (selectedGhost: Ghost) => void;
};

/**
 * The type for the the react props for the GhostListItem component
 * @property navigateToGhostScreen - The function used to navigate to GhostScreen with ReactNavigation
 * @property ghost - The ghost object passed from the GhostRenderItem
 */
type GhostListItemProps = {
  navigateToGhostScreen: (selectedGhost: Ghost) => void;
  ghost: Ghost;
};

/**
 * The type for the navigation stack for ReactNavigation
 * @property Home - The home screen
 * @property GhostScreen - The Ghost Screen
 */
type StackParamList = {
  Home: undefined;
  GhostScreen: Ghost;
};

/**
 * The type for ReactNavigation props used in the Home and Ghost screens
 */
type NavProps = NativeStackScreenProps<StackParamList, 'GhostScreen'>;

export { Ghost, GhostRenderItem, GhostListProps, GhostListItemProps, StackParamList, NavProps };
