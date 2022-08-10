export interface MediaListItemProps {
  title: string;
  subtitle?: string;
  imageUri?: string;
  isFavorite?: boolean;
  onPress?: () => void;
  onPressFavorite?: () => void;
}
