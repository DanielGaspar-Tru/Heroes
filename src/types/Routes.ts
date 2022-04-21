import {RoutesNames} from '../enums/RoutesNames';
import {HeroData} from './HeroData';

export type RoutesParamList = {
  [RoutesNames.HOME]: undefined;
  [RoutesNames.HERO_DETAILS]: {hero: HeroData};
};
