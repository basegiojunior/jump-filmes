export interface TypographyProps {
  children: React.ReactNode;
  variant?: Variant;
  numberOfLines?: number;
  ellipsizeMode?: 'head' | 'middle' | 'tail' | 'clip';
  bold?: boolean;
  color?: string;
  testID?: string;
  textAlign?: string;
}

export type Variant = 'text' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'label';
