import React, {useEffect, useRef, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  Animated,
  Dimensions,
  FlatList,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import AddIcon from '../../assets/icons/AddCircle.svg';
import NotificationsIcon from '../../assets/icons/Notifications.svg';
import PersonIcon from '../../assets/icons/Person.svg';
import ITarlaLogo from '../../assets/icons/iTarla.svg';
import VectorIcon from '../../assets/icons/Vector.svg';
import SunIcon from '../../assets/icons/Current.svg';
import GoodIcon from '../../assets/icons/Good.svg';
import BadIcon from '../../assets/icons/Bad.svg';
import NormalIcon from '../../assets/icons/Normal.svg';
import MapIcon from '../../assets/icons/Map.svg';
import DegreeIcon from '../../assets/icons/Degree.svg';
import WindIcon from '../../assets/icons/Wind.svg';
import DropIcon from '../../assets/icons/Drop.svg';
import RainyIcon from '../../assets/icons/Rainy.svg';
import CloudIcon from '../../assets/icons/Cloud.svg';
import CloudRainIcon from '../../assets/icons/CloudRain.svg';
import Svg, {Defs, Ellipse, LinearGradient, Rect, Stop} from 'react-native-svg';
import {ScrollView} from 'react-native-gesture-handler';

const crops = [
  {
    id: 0,
    name: 'Whole farm',
    sorts: [],
    updates: [
      {
        id: 0,
        name: 'Quba Alma tarlasi',
        icons: ['🍏'],
        date: '15th November 2024',
        time: '7:21 AM',
        waterUsage: 1500,
      },
    ],
  },
  {
    id: 1,
    icon: '🍇',
    name: 'Grapes',
    sorts: [],
    updates: [],
  },
  {
    id: 2,
    icon: '🍅',
    name: 'Tomatoes',
    updates: [],
    sorts: [],
  },
  {
    id: 3,
    icon: '🍏',
    name: 'Apples',
    sorts: [
      {
        id: 0,
        name: 'Sort Qizil Akhmed',
        humidity: 76,
        temperature: 27,
        nutrients: 8,
        powerConsumption: 10,
      },
      {
        id: 1,
        name: 'Sort Yashil',
        humidity: 81,
        temperature: 15,
        nutrients: 9,
        powerConsumption: 18,
      },
      {
        id: 2,
        name: 'Sort Palmen',
        humidity: 81,
        temperature: 15,
        nutrients: 9,
        powerConsumption: 3,
      },
    ],
    updates: [],
  },
  {
    id: 4,
    icon: '🌹',
    name: 'Roses',
    sorts: [],
    updates: [],
  },
  {
    id: 5,
    icon: '🍍',
    name: 'Pineapples',
    sorts: [],
    updates: [],
  },
  {
    id: 6,
    icon: '🥑',
    name: 'Avocados',
    sorts: [],
    updates: [],
  },
];

export const Home = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    fetch(
      'https://api.weatherapi.com/v1/forecast.json?key=4979275275734b4087285021241511&q=Quba&days=1&aqi=no&alerts=yes',
    )
      .then(res => res.json())
      .then(data => {
        setWeather(data);
      });
  }, []);

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
            {transform: [{scale: scaleAnim}]},
          ]}>
          {item.icon} {item.name}
        </Animated.Text>
      </Pressable>
    );
  };

  return (
    <SafeAreaView style={styles.contentContainer}>
      <StatusBar backgroundColor={'white'} />

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
                  <SunIcon width={44} height={44} />

                  <Text style={styles.temperature}>
                    {weather ? weather.current.temp_c : 0}
                  </Text>

                  <DegreeIcon />
                </View>

                <View style={styles.information}>
                  <View>
                    <Text style={styles.date}>Saturday, 16</Text>
                  </View>

                  <View style={styles.mapContainer}>
                    <MapIcon />

                    <Text style={styles.date}>Quba, Azerbaijan</Text>
                  </View>
                </View>
              </View>

              <View style={styles.weatherValues}>
                <View style={styles.mapContainer}>
                  <WindIcon />

                  <Text style={styles.value}>
                    {weather ? weather.current.wind_kph : 0}km/h
                  </Text>
                </View>

                <View style={styles.mapContainer}>
                  <DropIcon />

                  <Text style={styles.value}>
                    {weather ? weather.current.humidity : 0}%
                  </Text>
                </View>

                <View style={styles.mapContainer}>
                  <CloudRainIcon />

                  <Text style={styles.value}>30%</Text>
                </View>
              </View>
            </View>

            <View style={styles.hourlyContainer}>
              <View style={styles.hourlyWeather}>
                <CloudIcon />

                <Text style={styles.time}>13:00</Text>
              </View>

              <View style={styles.hourlyWeather}>
                <RainyIcon />

                <Text style={styles.time}>14:00</Text>
              </View>

              <View style={styles.hourlyWeather}>
                <RainyIcon />

                <Text style={styles.time}>15:00</Text>
              </View>

              <View style={styles.hourlyWeather}>
                <CloudIcon />

                <Text style={styles.time}>16:00</Text>
              </View>

              <View style={styles.hourlyWeather}>
                <RainyIcon />

                <Text style={styles.time}>17:00</Text>
              </View>

              <View style={styles.hourlyWeather}>
                <CloudIcon />

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
        <View style={styles.alertContainer}>
          <View style={styles.alert}>
            <Text style={styles.notificationTitle}>Notifications:</Text>

            <Text style={styles.notificationDescription}>
              {'\u2022 '}Energy generation/consumption: 25/34 W{'\n'}
              {'\u2022 '}Water Apples{'\n'}
              {'\u2022 '}Hide Apples from UV sunvawes{'\n'}
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

        <View style={styles.alertContainer}>
          {crops[activeIndex].updates.map(update => {
            return (
              <View style={{...styles.alert, gap: 4}} key={update.id}>
                <Text style={styles.updateTitle}>{update.name}</Text>

                <Text style={styles.updateIcon}>{update.icons[0]}</Text>

                <Text style={styles.notificationDescription}>
                  Last irrigation date: {update.date}
                </Text>

                <Text style={styles.notificationDescription}>
                  Last irrigation time: {update.time}
                </Text>

                <Text style={styles.notificationDescription}>
                  Water usage: {update.waterUsage}L
                </Text>
              </View>
            );
          })}
        </View>

        <View style={styles.sortContainer}>
          {crops[activeIndex].sorts.map(sort => {
            return (
              <View style={styles.sort} key={sort.id}>
                <View style={styles.info}>
                  <Text style={styles.updateTitle}>
                    {crops[activeIndex].name}
                  </Text>

                  <Text>{sort.name}</Text>
                </View>

                <View style={styles.info}>
                  <Text>💧Humidity: {sort.humidity}%</Text>

                  <Text>
                    🌡️Temperature: {sort.temperature}
                    {'\u00B0'}
                  </Text>

                  <Text>🌱Nutrients: {sort.nutrients}/10</Text>

                  <Text>🔋Power consumption: {sort.powerConsumption}W</Text>
                </View>

                <View style={styles.info}>
                  {sort.humidity > 70 ? (
                    <GoodIcon />
                  ) : sort.humidity > 50 ? (
                    <NormalIcon />
                  ) : (
                    <BadIcon />
                  )}
                  {sort.temperature > 25 ? (
                    <BadIcon />
                  ) : sort.temperature > 20 ? (
                    <NormalIcon />
                  ) : (
                    <GoodIcon />
                  )}
                  {sort.nutrients >= 8 ? (
                    <GoodIcon />
                  ) : sort.nutrients > 5 ? (
                    <NormalIcon />
                  ) : (
                    <BadIcon />
                  )}
                  {sort.powerConsumption > 15 ? (
                    <BadIcon />
                  ) : sort.powerConsumption > 8 ? (
                    <NormalIcon />
                  ) : (
                    <GoodIcon />
                  )}
                </View>
              </View>
            );
          })}
        </View>
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
    shadowColor: 'rgba(0, 0, 0, 0.24)',
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
    shadowColor: 'rgba(0, 0, 0, 0.24)',
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
  notificationTitle: {
    fontFamily: 'Figtree',
    fontSize: 14,
    fontWeight: '600',
    color: '#0A973A',
  },
  notificationDescription: {
    fontFamily: 'Helvetica',
    fontSize: 11,
    textAlign: 'left',
  },
  alertDescription: {
    fontFamily: 'Helvetica',
    fontSize: 11,
    textAlign: 'center',
  },
  alertContainer: {
    paddingHorizontal: 12,
    marginBottom: 16,
  },
  sortContainer: {
    gap: 16,
  },
  alert: {
    borderRadius: 10,
    backgroundColor: 'white',
    shadowColor: 'rgba(0, 0, 0, 0.24)',
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 12,
    shadowOpacity: 1,
    elevation: 12,
    paddingVertical: 14,
    paddingHorizontal: 20,
    gap: 10,
  },
  sort: {
    borderRadius: 10,
    backgroundColor: 'white',
    shadowColor: 'rgba(0, 0, 0, 0.24)',
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 12,
    shadowOpacity: 1,
    elevation: 12,
    paddingVertical: 14,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  categoriesContainer: {
    gap: 20,
    flexGrow: 1,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: 'white',
  },
  categories: {
    flex: 1,
    backgroundColor: 'white',
  },
  category: {
    color: '#6C7F77',
    fontFamily: 'Figtree',
    fontSize: 14,
    fontWeight: '500',
    paddingHorizontal: 5,
    height: 30,
  },
  updateTitle: {
    fontSize: 18,
    fontWeight: '600',
    fontFamily: 'Figtree',
  },
  updateIcon: {
    fontSize: 14,
    fontFamily: 'Figtree',
  },
  info: {
    gap: 4,
  },
});
