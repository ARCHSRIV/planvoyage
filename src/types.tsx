export type Navigation = {
  navigate: (scene: string) => void;
};

export type Heading = {
  primaryHeading: (scene: string) => void;
  secondaryHeading: (scene: string) => void;
};
