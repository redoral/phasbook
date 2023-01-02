import type { NativeStackScreenProps } from '@react-navigation/native-stack';

type Ghost = {
  name: string;
  speed: number;
  huntSanity: number;
  evidence: Evidence[];
};

type GhostRenderItem = {
  item: Ghost;
};

type Evidence = {
  id: number;
  name: string;
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
  GhostView: Ghost;
};

type NavProps = NativeStackScreenProps<StackParamList, 'GhostView'>;

export {
  Ghost,
  GhostRenderItem,
  Evidence,
  GhostListProps,
  GhostListItemProps,
  StackParamList,
  NavProps
};
