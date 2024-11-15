import React, {useState} from 'react';
import {Dimensions, StatusBar, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import AddIcon from '../../assets/icons/AddCircle.svg';
import NotificationsIcon from '../../assets/icons/Notifications.svg';
import PersonIcon from '../../assets/icons/Person.svg';
import ITarlaLogo from '../../assets/icons/iTarla.svg';
import VectorIcon from '../../assets/icons/Vector.svg';
import {ScrollView} from 'react-native-gesture-handler';
import TreeIcon from '../../assets/icons/Tree.svg';
import {LineChart} from 'react-native-gifted-charts';

export const FarmDetails = () => {

  fetch(
    'https://itarla-d5bde-default-rtdb.europe-west1.firebasedatabase.app/test.json?auth=AIzaSyDrxsUEsD7b9P9B615Rl8DKifijrmimTEc',
  )
    .then(response => response.json())
    .then(data => {
      
    });

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
          <Text style={styles.title}>Apples</Text>

          <Text style={styles.subtitle}>Sort Qizil Akhmed</Text>
        </View>

        <View style={styles.tree}>
          <TreeIcon />
        </View>

        <View style={styles.alertContainer}>
          <View style={styles.alert}>
            <Text style={styles.alertTitle}>Alert🚨</Text>

            <Text style={styles.alertDescription}>
              🌡️ Current temperature exceeds optimal levels for Trees. Consider
              shading or providing ventilation to reduce heat stress.
            </Text>
          </View>
        </View>

        <View style={styles.alertContainer}>
          <View style={styles.alert}>
            <Text style={styles.notificationTitle}>Today’s Notifications:</Text>

            <Text style={styles.notificationDescription}>
              {'\u2022 '}Energy consumption: 18 W {'\n'}
              {'\u2022 '}Water consumption: 384 L {'\n'}
              {'\u2022 '}Next Irrigation date: November 18, 2024{'\n'}
              {'\u2022 '}Next Fertilization date: November 25, 2024
            </Text>
          </View>
        </View>

        <View style={styles.graph}>
          <Text style={styles.mainChartTitle}>Statistics</Text>

          <LineChart
            data={[
              {value: null, label: ''},
              {value: 60, label: 'Mon'},
              {value: 88, label: 'Tues'},
              {value: 54, label: 'Wed'},
              {value: 45, label: 'Thurs'},
              {value: 48, label: 'Fri'},
              {value: 75, label: 'Sat'},
              {value: 46, label: 'Sun'},
              {value: null, label: ''},
            ]}
            width={Dimensions.get('window').width - 80}
            height={100}
            legend={[
              {label: 'Day', color: 'blue'},
              {label: 'Dataset 2', color: 'green'},
            ]}
            yAxisThickness={0}
            color={'#749D29'}
            thickness={3}
            touchEnabled={true}
            dataPointsRadius2={0}
            dragEnabled={true}
            scaleEnabled={true}
            scaleXEnabled={true}
            scaleYEnabled={true}
            yAxisLabelSuffix="%"
            pinchZoom={true}
            rulesThickness={1}
            rulesType="solid"
            adjustToWidth
            doubleTapToZoomEnabled={true}
            dragDecelerationEnabled={true}
            dragDecelerationFrictionCoef={0.99}
            dataPointsColor={'#749D29'}
            dataPointsRadius1={4.5}
            maxValue={100}
            stepValue={25}
            stepHeight={20}
            isAnimated={true}
            curved
            axisLabelFontSize={10}
            xAxisLabelTextStyle={styles.axis}
            xAxisColor="#CDCDCD"
          />
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
            width={Dimensions.get('window').width - 80}
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

        <View style={styles.graph}>
          <Text style={styles.chartTitle}>Temperature</Text>

          <LineChart
            data={[
              {value: null, label: ''},
              {value: 28, label: 'Mon'},
              {value: 23, label: 'Tues'},
              {value: 29, label: 'Wed'},
              {value: 26, label: 'Thurs'},
              {value: 27, label: 'Fri'},
              {value: 25, label: 'Sat'},
              {value: 32, label: 'Sun'},
              {value: null, label: ''},
            ]}
            data2={[
              {value: 27.5, label: ''},
              {value: 27.5, label: 'Mon'},
              {value: 27.5, label: 'Tues'},
              {value: 27.5, label: 'Wed'},
              {value: 27.5, label: 'Thurs'},
              {value: 27.5, label: 'Fri'},
              {value: 27.5, label: 'Sat'},
              {value: 27.5, label: 'Sun'},
              {value: 27.5, label: ''},
            ]}
            width={Dimensions.get('window').width - 80}
            height={100}
            yAxisThickness={0}
            yAxisOffset={15}
            color={'#F17A13'}
            thickness={3}
            touchEnabled={true}
            dataPointsRadius2={0}
            yAxisLabelSuffix={'\u00B0C'}
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
            dataPointsColor={'#F17A13'}
            dataPointsRadius1={4.5}
            maxValue={25}
            stepValue={5}
            stepHeight={20}
            isAnimated={true}
            curved
            axisLabelFontSize={10}
            xAxisLabelTextStyle={styles.axis}
            xAxisColor="#CDCDCD"
          />
        </View>

        <View style={styles.graph}>
          <Text style={styles.chartTitle}>Sodium, (ppm)</Text>

          <LineChart
            data={[
              {value: null, label: ''},
              {value: 34, label: 'Mon'},
              {value: 32, label: 'Tues'},
              {value: 26, label: 'Wed'},
              {value: 34, label: 'Thurs'},
              {value: 38, label: 'Fri'},
              {value: 45, label: 'Sat'},
              {value: 40, label: 'Sun'},
              {value: null, label: ''},
            ]}
            data2={[
              {value: 40, label: ''},
              {value: 40, label: 'Mon'},
              {value: 40, label: 'Tues'},
              {value: 40, label: 'Wed'},
              {value: 40, label: 'Thurs'},
              {value: 40, label: 'Fri'},
              {value: 40, label: 'Sat'},
              {value: 40, label: 'Sun'},
              {value: 40, label: ''},
            ]}
            width={Dimensions.get('window').width - 80}
            height={100}
            yAxisThickness={0}
            yAxisOffset={20}
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
            maxValue={40}
            stepValue={8}
            stepHeight={20}
            isAnimated={true}
            curved
            axisLabelFontSize={10}
            xAxisLabelTextStyle={styles.axis}
            xAxisColor="#CDCDCD"
          />
        </View>

        <View style={styles.graph}>
          <Text style={styles.chartTitle}>Phosphorus, (ppm)</Text>

          <LineChart
            data={[
              {value: null, label: ''},
              {value: 18, label: 'Mon'},
              {value: 18, label: 'Tues'},
              {value: 20, label: 'Wed'},
              {value: 22, label: 'Thurs'},
              {value: 21, label: 'Fri'},
              {value: 19, label: 'Sat'},
              {value: 19, label: 'Sun'},
              {value: null, label: ''},
            ]}
            data2={[
              {value: 20, label: ''},
              {value: 20, label: 'Mon'},
              {value: 20, label: 'Tues'},
              {value: 20, label: 'Wed'},
              {value: 20, label: 'Thurs'},
              {value: 20, label: 'Fri'},
              {value: 20, label: 'Sat'},
              {value: 20, label: 'Sun'},
              {value: 20, label: ''},
            ]}
            width={Dimensions.get('window').width - 80}
            height={100}
            yAxisThickness={0}
            yAxisOffset={14}
            color={'#FFD000'}
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
            dataPointsColor={'#FFD000'}
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

        <View style={styles.graph}>
          <Text style={styles.chartTitle}>Potassium, (ppm)</Text>

          <LineChart
            data={[
              {value: null, label: ''},
              {value: 205, label: 'Mon'},
              {value: 185, label: 'Tues'},
              {value: 200, label: 'Wed'},
              {value: 220, label: 'Thurs'},
              {value: 210, label: 'Fri'},
              {value: 190, label: 'Sat'},
              {value: 195, label: 'Sun'},
              {value: null, label: ''},
            ]}
            data2={[
              {value: 200, label: ''},
              {value: 200, label: 'Mon'},
              {value: 200, label: 'Tues'},
              {value: 200, label: 'Wed'},
              {value: 200, label: 'Thurs'},
              {value: 200, label: 'Fri'},
              {value: 200, label: 'Sat'},
              {value: 200, label: 'Sun'},
              {value: 200, label: ''},
            ]}
            width={Dimensions.get('window').width - 80}
            height={100}
            yAxisThickness={0}
            yAxisOffset={140}
            color={'#749D29'}
            thickness={3}
            touchEnabled={true}
            dataPointsRadius2={0}
            color2="#57C4E5"
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
            dataPointsColor={'#749D29'}
            dataPointsRadius1={4.5}
            maxValue={80}
            stepValue={16}
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

const styles = StyleSheet.create({
  contentContainer: {
    backgroundColor: 'white',
    flex: 1,
  },
  scroll: {
    flex: 1,
    backgroundColor: 'white',
    gap: 12,
    paddingHorizontal: 16,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
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
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    fontFamily: 'Helvetica',
    fontSize: 16,
    textAlign: 'center',
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
  alertDescription: {
    fontFamily: 'Helvetica',
    fontSize: 12,
    textAlign: 'left',
  },
  notificationDescription: {
    fontFamily: 'Helvetica',
    fontSize: 12,
    textAlign: 'left',
  },
  alertContainer: {
    paddingHorizontal: 12,
    marginBottom: 24,
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
    gap: 4,
  },
  tree: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  graph: {
    marginTop: 30,
    flex: 1,
    gap: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainChartTitle: {
    color: '#0D0D0D',
    fontFamily: 'Poppins',
    fontSize: 14,
    textAlign: 'left',
    width: '100%',
    fontWeight: '700',
    paddingLeft: 10,
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
