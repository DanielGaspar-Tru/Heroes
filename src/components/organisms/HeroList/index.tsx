import React from 'react';
import {View, ActivityIndicator, FlatList} from 'react-native';
import {HeroData} from '../../../types/HeroData';
import HeroCell from '../../molecules/HeroCell';
import SectionHeader from '../../atoms/SectionHeader';
import ScreenTitle from '../../atoms/ScreenTitle';
import ScreenSubTitle from '../../atoms/ScreenSubtitle';

import styles from './styles';

export type HeroListProps = {
  data: HeroData[];
  isLoading: boolean;
};

const Separator = () => {
  return <View style={styles.separator} />;
};

const HeroList: React.FC<HeroListProps> = ({data, isLoading}) => {
  if (isLoading) {
    return (
      <View style={styles.outroContainer}>
        <ActivityIndicator size="small" color="#FFF" />
        <ScreenSubTitle label="Loading list..." />
      </View>
    );
  }

  if (data === null || undefined) {
    return (
      <View style={styles.outroContainer}>
        <ScreenTitle label="Welcome to crediverso Superhero List" />
        <ScreenSubTitle label="Tap the button below to load our superhero list" />
      </View>
    );
  }

  return (
    <>
      <SectionHeader title="Superheroes" />
      <FlatList
        data={data}
        renderItem={({item, index}) => <HeroCell data={item} index={index} />}
        keyExtractor={item => item.id.toString()}
        horizontal={false}
        contentContainerStyle={styles.listContainer}
        style={styles.list}
        ItemSeparatorComponent={Separator}
        showsVerticalScrollIndicator={false}
      />
    </>
  );
};

export default HeroList;
