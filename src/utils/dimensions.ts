import { Dimensions, PixelRatio } from 'react-native';

export const { width, height } = Dimensions.get('window');

const w = (percentage: number) => PixelRatio.roundToNearestPixel(width * percentage / 100);
const h = (percentage: number) => PixelRatio.roundToNearestPixel(height * percentage / 100);

export { w, h };