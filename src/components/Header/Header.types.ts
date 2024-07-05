export interface HeaderProps {
  iconLeft?: string;
  onPressLeft?: () => void;
  iconRight?: string;
  onPressRight?: () => void;
  headertitle?: string;
  headerCenter?: React.ReactNode;
  isTransparent?: boolean;
}

export type StylesProps = {
  isTransparent?: boolean;
};
