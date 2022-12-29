interface GhostI {
  name: string;
  speed: number;
  huntSanity: number;
  evidence: EvidenceI[];
}

interface GhostRenderItemI {
  item: GhostI;
}

interface EvidenceI {
  id: number;
  name: string;
}

export { GhostI, GhostRenderItemI };
