import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import AddIcon from '../../assets/icons/AddCircle.svg';
import NotificationsIcon from '../../assets/icons/Notifications.svg';
import PersonIcon from '../../assets/icons/Person.svg';
import ITarlaLogo from '../../assets/icons/iTarla.svg';
import VectorIcon from '../../assets/icons/Vector.svg';
import {ScrollView} from 'react-native-gesture-handler';
import {LineChart} from 'react-native-gifted-charts';
import {useNavigation} from '@react-navigation/native';

export const Farm = () => {
  const [firstMetricFocus, setFirstMetricFocus] = useState(true);
  const [secondMetricFocus, setSecondMetricFocus] = useState(false);
  const [thirdMetricFocus, setThirdMetricFocus] = useState(false);
  const [fourthMetricFocus, setFourthMetricFocus] = useState(false);

  const navigation = useNavigation();

  const DetailedView = () => {
    navigation.navigate('FarmDetails');
  };

  return (
    <SafeAreaView style={styles.contentContainer}>
      <StatusBar backgroundColor={'white'} />

      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
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

        <View style={styles.titleContainer}>
          <Text style={styles.title}>Quba Alma Tarlası</Text>

          <Text style={styles.subtitle}>Quba, Azerbaijan</Text>
        </View>

        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/images/Farm.png')}
            style={styles.image}
          />
        </View>

        <View style={styles.currentInformation}>
          <View style={styles.row}>
            <View style={styles.plantHealthContainer}>
              <View style={styles.plantHealthOverview}>
                <Text style={styles.plantHealthName}>Plant health🌾</Text>

                <Text style={styles.plantHealthState}>Good!</Text>
              </View>

              <Text style={styles.plantHealthAdditions}>Recommendations</Text>
            </View>

            <View style={styles.waterContainer}>
              <View style={styles.waterOverview}>
                <Text style={styles.waterName}>Water💧</Text>

                <Text style={styles.waterState}>Optimal</Text>
              </View>

              <Text style={styles.waterAdditions}>
                <Text style={styles.waterAdditionsColored}>158 L</Text> / day
              </Text>
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.soilHealthContainer}>
              <View style={styles.soilHealthOverview}>
                <Text style={styles.soilHealthName}>Soil health🧫</Text>

                <Text style={styles.soilHealthState}>Good!</Text>
              </View>

              <Text style={styles.soilHealthAdditions}>Recommendations</Text>
            </View>

            <View style={styles.energyContainer}>
              <View style={styles.energyOverview}>
                <Text style={styles.energyName}>Energy⚡️</Text>

                <Text style={styles.energyState}>Good!</Text>
              </View>

              <Text style={styles.energyAdditions}>
                Gen/cons:{' '}
                <Text style={styles.energyAdditionsColored}>25/34 W</Text>
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.scheduleContainer}>
          <View style={styles.schedule}>
            <Text style={styles.scheduleTitle}>Next Irrigation</Text>

            <Text style={styles.scheduleSubtitle}>Next: 6:14 AM, Tomorrow</Text>

            <Text style={styles.scheduleRecommendation}>
              Recommended water amound: 25 L
            </Text>

            <Pressable style={styles.editScheduleButton}>
              <Text style={styles.editSchedule}>Edit Schedule</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.measuresContainer}>
          <Text style={styles.left}>Key Metrics</Text>

          <Pressable onPress={DetailedView}>
            <Text style={styles.right}>Detailed View</Text>
          </Pressable>
        </View>

        <View style={styles.metrics}>
          <Pressable
            onPress={() => {
              setFirstMetricFocus(true);
              setSecondMetricFocus(false);
              setThirdMetricFocus(false);
              setFourthMetricFocus(false);
            }}>
            <View
              style={[
                styles.metricContainer,
                {backgroundColor: firstMetricFocus ? '#F8FFF9' : 'white'},
              ]}>
              <Text
                style={[
                  styles.metric,
                  firstMetricFocus ? {color: '#086F0C'} : null,
                ]}>
                Soil Analysis
              </Text>
            </View>
          </Pressable>

          <Pressable
            onPress={() => {
              setFirstMetricFocus(false);
              setSecondMetricFocus(true);
              setThirdMetricFocus(false);
              setFourthMetricFocus(false);
            }}>
            <View
              style={[
                styles.metricContainer,
                {backgroundColor: secondMetricFocus ? '#F8FFF9' : 'white'},
              ]}>
              <Text
                style={[
                  styles.metric,
                  secondMetricFocus ? {color: '#086F0C'} : null,
                ]}>
                Plat Types
              </Text>
            </View>
          </Pressable>

          <Pressable
            onPress={() => {
              setFirstMetricFocus(false);
              setSecondMetricFocus(false);
              setThirdMetricFocus(true);
              setFourthMetricFocus(false);
            }}>
            <View
              style={[
                styles.metricContainer,
                {backgroundColor: thirdMetricFocus ? '#F8FFF9' : 'white'},
              ]}>
              <Text
                style={[
                  styles.metric,
                  thirdMetricFocus ? {color: '#086F0C'} : null,
                ]}>
                Water and Energy
              </Text>
            </View>
          </Pressable>

          <Pressable
            onPress={() => {
              setFirstMetricFocus(false);
              setSecondMetricFocus(false);
              setThirdMetricFocus(false);
              setFourthMetricFocus(true);
            }}>
            <View
              style={[
                styles.metricContainer,
                {backgroundColor: fourthMetricFocus ? '#F8FFF9' : 'white'},
              ]}>
              <Text
                style={[
                  styles.metric,
                  fourthMetricFocus ? {color: '#086F0C'} : null,
                ]}>
                Irrigation
              </Text>
            </View>
          </Pressable>
        </View>

        <View style={styles.graph}>
          <Text style={styles.chartTitle}>Soil pH level</Text>

          <LineChart
            data={[
              {value: null, label: ''},
              {value: 7.7, label: 'Mon'},
              {value: 8.5, label: 'Tues'},
              {value: 8, label: 'Wed'},
              {value: 8.3, label: 'Thurs'},
              {value: 5, label: 'Fri'},
              {value: 5.8, label: 'Sat'},
              {value: 4.2, label: 'Sun'},
              {value: null, label: ''},
            ]}
            data2={[
              {value: 8, label: ''},
              {value: 8, label: 'Mon'},
              {value: 8, label: 'Tues'},
              {value: 8, label: 'Wed'},
              {value: 8, label: 'Thurs'},
              {value: 8, label: 'Fri'},
              {value: 8, label: 'Sat'},
              {value: 8, label: 'Sun'},
              {value: 8, label: ''},
            ]}
            width={Dimensions.get('window').width - 140}
            height={100}
            yAxisThickness={0}
            color={'#57C4E5'}
            thickness={3}
            touchEnabled={true}
            dataPointsRadius2={0}
            color2="#8AD70E"
            dragEnabled={true}
            scaleEnabled={true}
            scaleXEnabled={true}
            scaleYEnabled={true}
            pinchZoom={true}
            rulesThickness={1}
            rulesType="solid"
            adjustToWidth
            doubleTapToZoomEnabled={true}
            dragDecelerationEnabled={true}
            dragDecelerationFrictionCoef={0.99}
            dataPointsColor={'#57C4E5'}
            dataPointsRadius1={4.5}
            maxValue={10}
            stepValue={2}
            stepHeight={20}
            isAnimated={true}
            curved
            axisLabelFontSize={10}
            xAxisLabelTextStyle={styles.axis}
            xAxisColor="#CDCDCD"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const imageWidth = Dimensions.get('window').width - 80;

const imageHeight = (imageWidth / 310) * 160;

const informationContainerWidth = (Dimensions.get('window').width - 80 - 8) / 2;

const metricWidth = (Dimensions.get('window').width - 116) / 4;

const styles = StyleSheet.create({
  contentContainer: {
    backgroundColor: 'white',
    flex: 1,
  },
  scroll: {
    flex: 1,
    backgroundColor: 'white',
    gap: 12,
    paddingHorizontal: 32,
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
  titleContainer: {
    gap: 2,
    marginBottom: 8,
  },
  title: {
    fontFamily: 'Figtree',
    fontSize: 28,
    fontWeight: '600',
    textAlign: 'center',
  },
  subtitle: {
    fontFamily: 'Helvetica',
    fontSize: 16,
    textAlign: 'center',
  },
  imageContainer: {
    paddingHorizontal: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
  },
  image: {
    borderRadius: 20,
    width: imageWidth,
    height: imageHeight,
  },
  currentInformation: {
    gap: 8,
    paddingHorizontal: 8,
    marginBottom: 22,
  },
  row: {
    gap: 8,
    flexDirection: 'row',
  },
  plantHealthContainer: {
    backgroundColor: '#F8FFF9',
    borderRadius: 10,
    shadowColor: 'rgba(0, 0, 0, 0.24)',
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 12,
    shadowOpacity: 1,
    elevation: 12,
    paddingHorizontal: 14,
    paddingTop: 10,
    paddingBlock: 8,
    gap: 8,
    width: informationContainerWidth,
  },
  plantHealthOverview: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
  },
  plantHealthName: {
    fontFamily: 'Figtree',
    fontSize: 14,
    fontWeight: '600',
    color: '#0A973A',
  },
  plantHealthState: {
    fontFamily: 'Helvetica',
    fontSize: 11,
  },
  plantHealthAdditions: {
    textDecorationColor: '#0A973A',
    textDecorationStyle: 'solid',
    textDecorationLine: 'underline',
    color: '#0A973A',
    fontFamily: 'Helvetica',
    fontSize: 10,
    textAlign: 'center',
  },
  waterContainer: {
    backgroundColor: '#F5FAFF',
    borderRadius: 10,
    shadowColor: 'rgba(0, 0, 0, 0.24)',
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 12,
    shadowOpacity: 1,
    elevation: 12,
    paddingHorizontal: 14,
    paddingTop: 10,
    paddingBlock: 8,
    gap: 8,
    width: informationContainerWidth,
  },
  waterOverview: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
  },
  waterName: {
    fontFamily: 'Figtree',
    fontSize: 14,
    fontWeight: '600',
    color: '#13A5B8',
  },
  waterState: {
    fontFamily: 'Helvetica',
    fontSize: 11,
  },
  waterAdditions: {
    fontFamily: 'Helvetica',
    fontSize: 10,
    textAlign: 'center',
  },
  waterAdditionsColored: {
    color: '#13A5B8',
  },
  soilHealthContainer: {
    backgroundColor: '#FFF9F9',
    borderRadius: 10,
    shadowColor: 'rgba(0, 0, 0, 0.24)',
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 12,
    shadowOpacity: 1,
    elevation: 12,
    paddingHorizontal: 14,
    paddingTop: 10,
    paddingBlock: 8,
    gap: 8,
    width: informationContainerWidth,
  },
  soilHealthOverview: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
  },
  soilHealthName: {
    fontFamily: 'Figtree',
    fontSize: 14,
    fontWeight: '600',
    color: '#E63A0F',
  },
  soilHealthState: {
    fontFamily: 'Helvetica',
    fontSize: 11,
  },
  soilHealthAdditions: {
    textDecorationColor: '#B33E21',
    textDecorationStyle: 'solid',
    textDecorationLine: 'underline',
    fontFamily: 'Helvetica',
    fontSize: 10,
    textAlign: 'center',
    color: '#B33E21',
  },
  energyContainer: {
    backgroundColor: '#FFFDF2',
    borderRadius: 10,
    shadowColor: 'rgba(0, 0, 0, 0.24)',
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 12,
    shadowOpacity: 1,
    elevation: 12,
    paddingHorizontal: 14,
    paddingTop: 10,
    paddingBlock: 8,
    gap: 8,
    width: informationContainerWidth,
  },
  energyOverview: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
  },
  energyName: {
    fontFamily: 'Figtree',
    fontSize: 14,
    fontWeight: '600',
    color: '#ECA900',
  },
  energyState: {
    fontFamily: 'Helvetica',
    fontSize: 11,
  },
  energyAdditions: {
    fontFamily: 'Helvetica',
    fontSize: 10,
    textAlign: 'center',
  },
  energyAdditionsColored: {
    color: '#D29703',
  },
  scheduleContainer: {
    paddingHorizontal: 8,
    marginBottom: 24,
  },
  schedule: {
    borderRadius: 15,
    width: '100%',
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: 'white',
    shadowColor: 'rgba(0, 0, 0, 0.24)',
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 12,
    shadowOpacity: 1,
    elevation: 12,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  scheduleTitle: {
    fontFamily: 'Figtree',
    fontSize: 16,
    color: '#0A973A',
    fontWeight: '600',
    width: '100%',
    textAlign: 'left',
  },
  scheduleSubtitle: {
    fontWeight: 'bold',
    fontSize: 12,
    fontFamily: 'Helvetica',
    width: '100%',
    textAlign: 'left',
  },
  scheduleRecommendation: {
    fontSize: 11,
    fontFamily: 'Helvetica',
    width: '100%',
    textAlign: 'left',
  },
  editScheduleButton: {
    borderRadius: 10,
    backgroundColor: '#34AC5D',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 6,
    width: 160,
  },
  editSchedule: {
    color: 'white',
    fontSize: 11,
    fontFamily: 'Helvetica',
  },
  measuresContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  left: {
    fontFamily: 'Figtree',
    fontSize: 16,
    fontWeight: '600',
  },
  right: {
    color: '#6C7F77',
    textDecorationColor: '#6C7F77',
    textDecorationStyle: 'solid',
    textDecorationLine: 'underline',
    fontFamily: 'Figtree',
    fontSize: 14,
    fontWeight: '600',
  },
  metrics: {
    paddingHorizontal: 8,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
    flexDirection: 'row',
  },
  metricContainer: {
    backgroundColor: 'white',
    shadowColor: 'rgba(0, 0, 0, 0.24)',
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 12,
    shadowOpacity: 1,
    elevation: 12,
    height: 70,
    borderRadius: 8,
    width: metricWidth,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 5,
  },
  metric: {
    fontFamily: 'Helvetica',
    fontSize: 13,
    color: '#2F403A',
    textAlign: 'center',
  },
  graph: {
    marginTop: 30,
    flex: 1,
    gap: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  chartTitle: {
    color: '#0D0D0D',
    fontFamily: 'Helvetica',
    fontSize: 14,
    textAlign: 'center',
  },
  axis: {
    fontSize: 11,
    fontFamily: 'Helvetica',
  },
});
