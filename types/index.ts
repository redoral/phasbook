import type { NativeStackScreenProps } from '@react-navigation/native-stack';

/**
 * Type for each ghost
 * @member id - Unique identifier, name of the ghost in one word lowercase
 * @member name - Name of the ghost
 * @member evidences - The array of evidences that a ghost can have
 * @member fastSpeed - Fastest speed value and condition of the ghost
 * @member slowSpeed - Slowest speed value and condition of the ghost
 * @member hunt - Sanity value of when the ghost starts to hunt
 * @member url - Wiki url of the ghost
 * @member about - Ghost description
 * @member noLos - Determines if ghost has line of sight speedup or not
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

export { Ghost, StackParamList, NavProps };
