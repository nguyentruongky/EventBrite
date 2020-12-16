import React, {useEffect, useState} from 'react';
import {View, Text, SafeAreaView, FlatList} from 'react-native';
import {Weight, getFont} from '@fonts';
import FocusEventItem from './FocusedEventItem';
import EventItem from './EventItem';
import useEvents from '@src/hooks/useEvents';
import Screen from '@src/components/Screen';
import EventDetailScreen from '../EventDetailScreen/EventDetailScreen';
export const HomeRoutes = [Screen(EventDetailScreen)];

const red = '#ff563f';
let navigationController: any;

export default function HomeScreen({navigation}) {
  navigationController = navigation;
  const {getEvents} = useEvents();
  const [dataSource, setDataSource] = useState([]);
  const [firstEvent, setFirstEvent] = useState(null);

  async function getData() {
    var events = await getEvents();
    const event1 = events.pop();
    setFirstEvent(event1);
    setDataSource(events);
  }
  useEffect(() => {
    getData();
  }, []);

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

      <Body dataSource={dataSource} firstEvent={firstEvent} />
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

function Body({dataSource, firstEvent}) {
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

        <FlatList
          style={{
            height: '100%',
            marginTop: 24,
          }}
          ListHeaderComponent={() => <FocusEventItem event={firstEvent} />}
          data={dataSource}
          renderItem={(item) => (
            <EventItem event={item.item} navigation={navigationController} />
          )}
          keyExtractor={(item) => item.id.toString()}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
}
