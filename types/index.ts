import type { NativeStackScreenProps } from '@react-navigation/native-stack';

type Evidence = {
  id: number;
  name: string;
};

type Ghost = {
  name: string;
  speed: number;
  huntSanity: number;
  evidence: Evidence[];
};

type GhostRenderItem = {
  item: Ghost;
};

type GhostListProps = {
  navigate: (selectedGhost: Ghost) => void;
};

type GhostListItemProps = {
  navigate: (selectedGhost: Ghost) => void;
  ghost: Ghost;
};

type StackParamList = {
  Home: undefined;
  GhostScreen: Ghost;
};

type NavProps = NativeStackScreenProps<StackParamList, 'GhostScreen'>;

export {
  Ghost,
  GhostRenderItem,
  Evidence,
  GhostListProps,
  GhostListItemProps,
  StackParamList,
  NavProps
};
