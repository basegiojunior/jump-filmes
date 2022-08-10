import { useNavigation } from '@react-navigation/native';
import { MainNavigationProps } from 'src/routes/Routes.types';

export const useAppNavigation = useNavigation<MainNavigationProps>;
