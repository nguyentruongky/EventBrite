import React from 'react';
import {View, Text, SafeAreaView, Dimensions} from 'react-native';
import {Weight, getFont} from '@fonts';
import {ScrollView} from 'react-native-gesture-handler';
import FocusEventItem from './FocusedEventItem';
import EventItem from './EventItem';

const red = '#ff563f';

export default function HomeScreen() {
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          backgroundColor: red,
          height: 200,
          width: '100%',
          position: 'absolute',
        }}
      />
      <Header />

      <Body />
    </View>
  );
}

function Header() {
  return (
    <SafeAreaView style={{marginHorizontal: 16, height: 150}}>
      <Text
        style={{...getFont(Weight.regular, 15), color: 'white', marginTop: 16}}>
        What's good in
      </Text>
      <Text
        style={{...getFont(Weight.bold, 32), color: 'white', marginTop: 16}}>
        San Francisco
      </Text>
    </SafeAreaView>
  );
}

function Body() {
  return (
    <View style={{flex: 1}}>
      <Text
        style={{
          ...getFont(Weight.semiBold, 20),
          color: 'white',
          marginLeft: 16,
          marginTop: 24,
        }}>
        Editor's Picks
      </Text>
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <View
          style={{
            backgroundColor: red,
            height: 100,
            width: '100%',
            position: 'absolute',
          }}
        />
        <ScrollView
          style={{marginTop: 32}}
          showsVerticalScrollIndicator={false}>
          <FocusEventItem />
          <EventItem />
          <EventItem />
          <EventItem />
          <EventItem />
        </ScrollView>
      </View>
    </View>
  );
}
