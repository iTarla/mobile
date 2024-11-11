import React, {useState} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  LayoutAnimation,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import SearchIcon from '../../assets/icons/Search.svg';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

const fieldsData = [
  {
    id: 1,
    name: 'Quba Alma tarlası',
    imageUrl:
      'https://www.lindsay.com/uploads/images/sections/392694-img-Map_bright.jpg',
  },
  {
    id: 2,
    name: 'Tarla 2',
    imageUrl:
      'https://www.lindsay.com/uploads/images/sections/392694-img-Map_bright.jpg',
  },
  {
    id: 3,
    name: 'BHOS',
    imageUrl:
      'https://www.lindsay.com/uploads/images/sections/392694-img-Map_bright.jpg',
  },
  {
    id: 4,
    name: 'Lankaran',
    imageUrl:
      'https://www.lindsay.com/uploads/images/sections/392694-img-Map_bright.jpg',
  },
];

export const ChooseFarm = () => {
  const Farm = ({item}) => {
    const [imageShown, setImageShown] = useState(false);

    const toggleOpen = () => {
      setImageShown(value => !value);

      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    };

    return (
      <View style={styles.field}>
        <Pressable onPress={toggleOpen} style={styles.fieldOverview}>
          <View style={styles.fieldNameContainer}>
            <Text style={styles.fieldName}>{item.name}</Text>
          </View>

          <BouncyCheckbox
            size={25}
            fillColor="#0A973A"
            unFillColor="#FFFFFF"
            iconStyle={{borderColor: 'red'}}
            innerIconStyle={{borderWidth: 2}}
          />
        </Pressable>

        <View
          style={
            imageShown
              ? styles.fieldImageContainer
              : styles.fieldImageContainerHidden
          }>
          <Image width={75} height={105} source={{uri: item.imageUrl}} />
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.contentContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Choose your Farms</Text>

        <Text style={styles.subtitle}>Or create a new one!</Text>
      </View>

      <View>
        <View style={styles.searchBar}>
          <SearchIcon width={20} height={20} />

          <TextInput
            placeholder="Seach by name"
            placeholderTextColor="#A8B4AE"
            style={styles.searchInput}
          />
        </View>
      </View>

      <View style={styles.fieldsListContainer}>
        <FlatList
          data={fieldsData}
          renderItem={item => <Farm item={item.item}></Farm>}
          style={styles.fields}
          contentContainerStyle={styles.fieldsContainer}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.id.toString()}
        />
      </View>

      <Pressable style={styles.continueButton}>
        <Text style={styles.continueText}>Continue</Text>
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    gap: 16,
    paddingHorizontal: 20,
  },
  titleContainer: {
    gap: 4,
  },
  title: {
    color: '#0A973A',
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
    fontSize: 32,
    textAlign: 'center',
  },
  subtitle: {
    color: '#6C7F77',
    fontFamily: 'Helvetica',
    fontSize: 14,
    textAlign: 'center',
  },
  searchBar: {
    flexDirection: 'row',
    borderRadius: 6,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#DCE5E2',
    paddingHorizontal: 12,
    paddingVertical: 11,
    gap: 4,
    height: 48,
    alignItems: 'center',
  },
  searchInput: {
    width: '100%',
    fontSize: 15,
    fontFamily: 'Inter',
  },
  fieldNameContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  fieldName: {
    fontFamily: 'Figtree',
    fontWeight: '500',
    fontSize: 14,
  },
  fieldsListContainer: {
    flex: 1,
  },
  fields: {
    flex: 1,
  },
  fieldsContainer: {
    gap: 8,
  },
  field: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#DCE5E2',
    borderStyle: 'solid',
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 12,
    justifyContent: 'center',
    alignContent: 'center',
  },
  fieldOverview: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  fieldImageContainer: {
    justifyContent: 'center',
    overflow: 'hidden',
    alignItems: 'center',
    paddingTop: 5,
  },
  fieldImageContainerHidden: {
    height: 0,
    overflow: 'hidden',
  },
  continueButton: {
    backgroundColor: '#0A973A',
    width: '100%',
    borderRadius: 14,
    paddingHorizontal: 24,
    paddingVertical: 18,
  },
  continueText: {
    textAlign: 'center',
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
    color: 'white',
    fontSize: 16,
  },
});
