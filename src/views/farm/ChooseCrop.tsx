import React, {useRef, useState} from 'react';
import {
  Animated,
  Dimensions,
  FlatList,
  LayoutAnimation,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import SearchIcon from '../../assets/icons/Search.svg';
import AddCircleIcon from '../../assets/icons/AddCircle.svg';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import ArrowDownIcon from '../../assets/icons/ArrowDown.svg';
import {useNavigation} from '@react-navigation/native';

const cropsData = [
  {
    id: 1,
    icon: '🍇',
    name: 'Grapes',
    sorts: [],
  },
  {
    id: 2,
    icon: '🍅',
    name: 'Tomatoes',
    sorts: [],
  },
  {
    id: 3,
    icon: '🍏',
    name: 'Apples',
    sorts: [
      {name: 'Sort Qizil Akhmed', isSelected: false},
      {name: 'Sort Yashil', isSelected: true},
      {name: 'Sort Quba', isSelected: false},
      {name: 'Sort Shampan Reneti', isSelected: false},
      {name: 'Sort Cir Haci', isSelected: true},
      {name: 'Sort Palmen', isSelected: false},
      {name: 'Sort Simirenko', isSelected: true},
    ],
  },
  {
    id: 4,
    icon: '🌹',
    name: 'Roses',
    sorts: [],
  },
  {
    id: 5,
    icon: '🍍',
    name: 'Pineapples',
    sorts: [],
  },
  {
    id: 6,
    icon: '🥑',
    name: 'Avocados',
    sorts: [],
  },
];

export const ChooseCrop = () => {
  const navigation = useNavigation();

  const Continue = () => {
    navigation.navigate('BottomNavigation');
  };

  const Crop = ({item}) => {
    const scaleAnim = useRef(new Animated.Value(1)).current;

    const animateTextSize = value => {
      Animated.timing(scaleAnim, {
        toValue: value,
        duration: 500,
        useNativeDriver: true,
      }).start();
    };

    const [imageShown, setImageShown] = useState(false);

    const [fontSize, setFontSize] = useState(14);

    const toggleOpen = () => {
      setImageShown(value => !value);

      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut
      );
    };

    return (
      <View style={styles.field}>
        <Pressable
          onPress={() => {
            setFontSize(fontSize == 14 ? 18 : 14);

            animateTextSize(fontSize == 14 ? 18 / 14 : 1);

            toggleOpen();
          }}
          style={styles.fieldOverview}>
          <View style={styles.fieldNameContainer}>
            <Animated.Text
              style={{...styles.fieldName, transform: [{scale: scaleAnim}]}}>
              {item.icon} {item.name}
            </Animated.Text>
          </View>

          <ArrowDownIcon />
        </Pressable>

        <View
          style={
            imageShown
              ? styles.fieldImageContainer
              : styles.fieldImageContainerHidden
          }>
          <FlatList
            data={item.sorts}
            renderItem={item => (
              <View style={styles.sort}>
                <View style={styles.sortNameContainer}>
                  <Text style={styles.sortName}>{item.item.name}</Text>
                </View>
                <BouncyCheckbox
                  size={16}
                  fillColor="#0A973A"
                  unFillColor="#FFFFFF"
                  isChecked={item.item.isSelected}
                  iconStyle={{borderColor: 'red'}}
                  innerIconStyle={{borderWidth: 2}}

                />
              </View>
            )}
            style={styles.fields}
            contentContainerStyle={styles.fieldsContainer}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.contentContainer}>
      <StatusBar backgroundColor={'white'} />

      <View style={styles.titleContainer}>
        <Text style={styles.title}>Choose your Crop</Text>

        <Text style={styles.subtitle}>
          And we will give you personal recommendations!
        </Text>
      </View>

      <View style={styles.mainContentContainer}>
        <View style={styles.bar}>
          <View style={styles.searchBar}>
            <SearchIcon width={20} height={20} />

            <TextInput
              placeholder="Seach by name"
              placeholderTextColor="#A8B4AE"
              style={styles.searchInput}
            />
          </View>

          <AddCircleIcon />
        </View>

        <View style={styles.fieldsListContainer}>
          <FlatList
            data={cropsData}
            renderItem={item => <Crop item={item.item}></Crop>}
            style={styles.fields}
            contentContainerStyle={styles.fieldsContainer}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => item.id.toString()}
          />
        </View>
      </View>

      <Pressable onPress={Continue} style={styles.continueButton}>
        <Text style={styles.continueText}>Let's begin</Text>
      </Pressable>
    </SafeAreaView>
  );
};

const searchWidth = Dimensions.get('window').width - 116;

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    backgroundColor: 'white',
    gap: 20,
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  titleContainer: {
    gap: 4,
  },
  mainContentContainer: {
    gap: 10,
    flex: 1,
  },
  bar: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
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
    fontSize: 15,
    fontFamily: 'Inter',
    width: searchWidth,
  },
  fieldNameContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  fieldName: {
    fontFamily: 'Figtree',
    fontWeight: '500',
  },
  fieldsListContainer: {
    flex: 1,
  },
  fields: {
    flex: 1,
  },
  fieldsContainer: {
    gap: 10,
  },
  field: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#DCE5E2',
    borderStyle: 'solid',
    borderRadius: 10,
    justifyContent: 'center',
    alignContent: 'center',
  },
  fieldOverview: {
    marginVertical: 12,
    paddingHorizontal: 14,
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
  sort: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingVertical: 9,
    paddingLeft: 30,
    paddingRight: 14,
    borderTopWidth: 1,
    borderStyle: 'solid',
    borderColor: '#DCE5E2',
  },
  sortNameContainer: {
    textAlign: 'center',
    justifyContent: 'center',
  },
  sortName: {
    fontFamily: 'Helvetica',
    fontSize: 14,
  },
});
