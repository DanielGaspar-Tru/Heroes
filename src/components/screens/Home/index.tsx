import React, {useCallback} from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  View,
  ImageBackground,
} from 'react-native';

import globalStyles from '../../../globals/styles';
import styles from './styles';

import HeroList from '../../organisms/HeroList';
import ErrorMessage from '../../molecules/ErrorMessage';
import Button from '../../atoms/Button';

import {useDispatch, useSelector} from 'react-redux';
import {getHeroes} from '../../../features/heroSlice';

const Home: React.FC = () => {
  const heroesState = useSelector(state => state.heroesState);
  const {error, data, isLoading} = heroesState;

  const dispatch = useDispatch();
  const getData = useCallback((): void => {
    if (isLoading) {
      return;
    }
    dispatch(getHeroes());
  }, [dispatch, isLoading]);

  console.log('DTATA:', data);
  return (
    <ImageBackground
      source={require('../../../images/home_bg.png')}
      style={[globalStyles.container]}
      resizeMode="cover">
      <SafeAreaView style={[globalStyles.container]}>
        <StatusBar barStyle="light-content" />
        <View style={globalStyles.content} testID="content">
          {error ? (
            <ErrorMessage message={error} />
          ) : (
            <HeroList data={data} isLoading={isLoading} />
          )}

          <View style={styles.buttonContainer}>
            <Button
              testID="button-getlist"
              onPress={getData}
              isLoading={isLoading}
              isLoadingText="Loading...">
              <Text style={styles.buttonText}>
                {error
                  ? 'Try Again'
                  : `${data ? 'Refresh' : 'Get'} Superhero List`}
              </Text>
            </Button>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

/*
 <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />;
 */

export default Home;
