import React, {useRef, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  Animated,
  Dimensions,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import AddIcon from '../../assets/icons/AddCircle.svg';
import NotificationsIcon from '../../assets/icons/Notifications.svg';
import PersonIcon from '../../assets/icons/Person.svg';
import ITarlaLogo from '../../assets/icons/iTarla.svg';
import VectorIcon from '../../assets/icons/Vector.svg';
import SunIcon from '../../assets/icons/Sun.svg';
import MapIcon from '../../assets/icons/Map.svg';
import DegreeIcon from '../../assets/icons/Degree.svg';
import WindIcon from '../../assets/icons/Wind.svg';
import DropIcon from '../../assets/icons/Drop.svg';
import SunnyIcon from '../../assets/icons/Sunny.svg';
import CloudRainIcon from '../../assets/icons/CloudRain.svg';
import Svg, {Defs, Ellipse, LinearGradient, Rect, Stop} from 'react-native-svg';
import { ScrollView } from 'react-native-gesture-handler';

const crops = [
  {
    id: 0,
    name: 'Whole farm',
  },
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

export const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePress = index => {
    setActiveIndex(index);
  };

  const Category = ({item, index}) => {
    const scaleAnim = useRef(new Animated.Value(1)).current;

    const animateTextSize = value => {
      Animated.timing(scaleAnim, {
        toValue: value,
        duration: 500,
        useNativeDriver: true,
      }).start();
    };

    const [fontSize, setFontSize] = useState(activeIndex == index ? 18 : 14);

    const isActive = activeIndex === index;

    return (
      <Pressable
        onPress={() => {
          setFontSize(fontSize == 14 ? 18 : 14);
          
          animateTextSize(fontSize == 14 ? 18 / 14 : 1);
          
          handlePress(index);
        }}>
        <Animated.Text
          style={[
            styles.category,
            activeIndex == index ? {color: 'black'} : null,
            {transform: [{scale: scaleAnim}]}
          ]}>
          {item.icon} {item.name}
        </Animated.Text>
      </Pressable>
    );
  };

  return (
    <SafeAreaView style={styles.contentContainer}>
      <ScrollView style={styles.scroll}>
      <View style={styles.headerContainer}>
        <View style={styles.logoContainer}>
          <ITarlaLogo />

          <VectorIcon />
        </View>

        <View style={styles.iconsContainer}>
          <AddIcon width={24} height={24} />

          <NotificationsIcon width={24} height={24} />

          <PersonIcon width={24} height={24} />
        </View>
      </View>

      <View style={styles.weatherContainer}>
        <Svg height="100%" width="100%" style={StyleSheet.absoluteFillObject}>
          <Defs>
            <LinearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <Stop offset="0" stopColor="#00D2FF" />

              <Stop offset="1" stopColor="#3A7BD5" />
            </LinearGradient>
          </Defs>

          <Rect rx={10} width="100%" height="100%" fill="url(#grad)" />

          <Ellipse
            cx={'55.5%'}
            cy={0}
            rx={93}
            ry={93}
            fill="rgba(255, 255, 255, 0.2)"
          />

          <Ellipse
            cx={'55.5%'}
            cy={0}
            rx={70}
            ry={70}
            fill="rgba(255, 255, 255, 0.2)"
          />

          <Ellipse cx={'55.5%'} cy={0} rx={47} ry={47} fill="#FFD600" />
        </Svg>

        <View style={styles.content}>
          <View style={styles.weatherContentContainer}>
            <View style={styles.leftColumn}>
              <View style={styles.temperatureContainer}>
                <SunIcon />

                <Text style={styles.temperature}>27</Text>

                <DegreeIcon />
              </View>

              <View style={styles.information}>
                <View>
                  <Text style={styles.date}>Tuesday, 23</Text>
                </View>

                <View style={styles.mapContainer}>
                  <MapIcon />

                  <Text style={styles.date}>Baku, Azerbaijan</Text>
                </View>
              </View>
            </View>

            <View style={styles.weatherValues}>
              <View style={styles.mapContainer}>
                <WindIcon />

                <Text style={styles.value}>9km/h</Text>
              </View>

              <View style={styles.mapContainer}>
                <DropIcon />

                <Text style={styles.value}>0.9</Text>
              </View>

              <View style={styles.mapContainer}>
                <CloudRainIcon />

                <Text style={styles.value}>30%</Text>
              </View>
            </View>
          </View>

          <View style={styles.hourlyContainer}>
            <View style={styles.hourlyWeather}>
              <SunnyIcon />

              <Text style={styles.time}>13:00</Text>
            </View>

            <View style={styles.hourlyWeather}>
              <SunnyIcon />

              <Text style={styles.time}>14:00</Text>
            </View>

            <View style={styles.hourlyWeather}>
              <SunnyIcon />

              <Text style={styles.time}>15:00</Text>
            </View>

            <View style={styles.hourlyWeather}>
              <SunnyIcon />

              <Text style={styles.time}>16:00</Text>
            </View>

            <View style={styles.hourlyWeather}>
              <SunnyIcon />

              <Text style={styles.time}>17:00</Text>
            </View>

            <View style={styles.hourlyWeather}>
              <SunnyIcon />

              <Text style={styles.time}>18:00</Text>
            </View>
          </View>
        </View>
      </View>

      <View>
        <Text style={styles.statisticsText}>
          The statistics for this month:
        </Text>
      </View>

      <View style={styles.statiscticsMeasures}>
        <View style={styles.statiscticsMeasure}>
          <View>
            <Text style={styles.healthTitle}>Health🌾</Text>

            <Text style={styles.subtitle}>Good</Text>
          </View>

          <View>
            <Text></Text>

            <Text style={styles.healthAdditions}>Recommendations</Text>
          </View>
        </View>

        <View style={styles.statiscticsMeasure}>
          <View>
            <Text style={styles.waterTitle}>Water💧</Text>

            <Text style={styles.subtitle}>Moderate</Text>
          </View>

          <View>
            <Text style={styles.waterAdditions}>
              You have spent{'\n'}
              <Text style={styles.waterAdditionsColor}>1563 L</Text>more
            </Text>
          </View>
        </View>

        <View style={styles.statiscticsMeasure}>
          <View>
            <Text style={styles.energyTitle}>Energy⚡️</Text>

            <Text style={styles.subtitle}>Good</Text>
          </View>

          <View>
            <Text style={styles.energyAdditionsColor}>Gen/cons:</Text>

            <Text style={styles.energyAdditions}>25/34 W</Text>
          </View>
        </View>
      </View>

      <View style={styles.alertContainer}>
        <View style={styles.alert}>
          <Text style={styles.alertTitle}>Alert🚨</Text>

          <Text style={styles.alertDescription}>
            🌡️ Current temperature exceeds optimal levels for Roses.{'\n'}{' '}
            Consider shading or providing ventilation to reduce heat stress.
          </Text>
        </View>
      </View>

      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.categories}
        contentContainerStyle={styles.categoriesContainer}
        data={crops}
        renderItem={item => <Category item={item.item} index={item.index} />}
        keyExtractor={item => item.id.toString()}
      />
      </ScrollView>
    </SafeAreaView>
  );
};

const statisticsWidth = (Dimensions.get('window').width - 88) / 3;

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  scroll: {
    flex: 1,
    gap: 12,
    paddingHorizontal: 16,
    backgroundColor: 'white',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 4,
    marginBottom: 12,
    alignItems: 'center',
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconsContainer: {
    flexDirection: 'row',
    gap: 16,
  },
  weatherContainer: {
    borderRadius: 10,
    paddingBottom: 16,
    shadowColor: 'rgba(0, 0, 0, 0.16)',
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 12,
    shadowOpacity: 1,
    elevation: 12,
  },
  temperatureContainer: {
    flexDirection: 'row',
    gap: 6,
    alignItems: 'center',
  },
  temperature: {
    fontFamily: 'Helvetica',
    fontSize: 48,
    color: 'white',
  },
  date: {
    fontFamily: 'Helvetica',
    fontSize: 14,
    color: 'white',
  },
  mapContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
  },
  information: {
    paddingHorizontal: 8,
    gap: 6,
  },
  weatherValues: {
    gap: 10,
  },
  value: {
    fontFamily: 'Inter',
    fontSize: 11,
    color: 'white',
    fontWeight: '700',
  },
  weatherContentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  content: {
    paddingVertical: 16,
    paddingHorizontal: 8,
    borderRadius: 10,
  },
  leftColumn: {
    gap: 10,
  },
  hourlyContainer: {
    paddingHorizontal: 8,
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  hourlyWeather: {
    gap: 2,
  },
  time: {
    color: 'white',
    fontFamily: 'Helvetica',
    fontSize: 12,
    textAlign: 'center',
  },
  statisticsText: {
    fontFamily: 'Helvetica',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 4,
    marginBottom: 16,
  },
  statiscticsMeasures: {
    flexDirection: 'row',
    paddingHorizontal: 12,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 16,
    gap: 16,
  },
  healthTitle: {
    fontFamily: 'Figtree',
    fontSize: 14,
    color: '#0A973A',
    fontWeight: '600',
    textAlign: 'center',
  },
  subtitle: {
    textAlign: 'center',
    fontFamily: 'Helvetica',
    fontSize: 11,
  },
  healthAdditions: {
    textDecorationColor: '#0A973A',
    textDecorationStyle: 'solid',
    textDecorationLine: 'underline',
    color: '#0A973A',
    textAlign: 'center',
    fontFamily: 'Helvetica',
    fontSize: 10,
  },
  waterTitle: {
    fontFamily: 'Figtree',
    fontSize: 14,
    color: '#13A5B8',
    fontWeight: '600',
    textAlign: 'center',
  },
  waterAdditionsColor: {
    color: '#13A5B8',
    textAlign: 'center',
    fontFamily: 'Helvetica',
    fontSize: 10,
  },
  waterAdditions: {
    textAlign: 'center',
    fontFamily: 'Helvetica',
    fontSize: 10,
  },
  energyTitle: {
    fontFamily: 'Figtree',
    fontSize: 14,
    color: '#ECA900',
    fontWeight: '600',
    textAlign: 'center',
  },
  energyAdditionsColor: {
    color: '#C28B00',
    textAlign: 'center',
    fontFamily: 'Helvetica',
    fontSize: 10,
  },
  energyAdditions: {
    textAlign: 'center',
    fontFamily: 'Helvetica',
    fontSize: 10,
  },
  statiscticsMeasure: {
    width: statisticsWidth,
    height: 90,
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingBottom: 8,
    paddingTop: 12,
    justifyContent: 'space-between',
    backgroundColor: 'white',
    shadowColor: 'rgba(0, 0, 0, 0.16)',
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 12,
    shadowOpacity: 1,
    elevation: 12,
  },
  alertTitle: {
    fontFamily: 'Figtree',
    fontSize: 14,
    fontWeight: '600',
    color: '#E22828',
  },
  alertDescription: {
    fontFamily: 'Helvetica',
    fontSize: 11,
    textAlign: 'center',
  },
  alertContainer: {
    paddingHorizontal: 12,
    marginBottom: 24,
  },
  alert: {
    borderRadius: 10,
    backgroundColor: 'white',
    shadowColor: 'rgba(0, 0, 0, 0.16)',
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 12,
    shadowOpacity: 1,
    elevation: 12,
    paddingVertical: 14,
    paddingHorizontal: 20,
    gap: 10,
  },
  categoriesContainer: {
    gap: 20,
    flexGrow: 1,
  },
  categories: {
    flex: 1,
  },
  category: {
    color: '#6C7F77',
    fontFamily: 'Figtree',
    fontSize: 14,
    fontWeight: '500',
    paddingHorizontal: 5,
    height: 30,
  },
});
