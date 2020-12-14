import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import {Weight, getFont} from '@fonts';
import AsyncImage from '@src/components/AsyncImage';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import TextButton from '@src/components/TextButton';
import CircleButton from './CircleButton';
import SimilarEventsView from './SimilarEventsView';

export default function Body() {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <TitleView />
      <TimeView />
      <LocationView />
      <AboutView />
      <MapDetailView />
      <HostView />
      <SimilarEventsView />
      <View style={{height: 32}} />
    </View>
  );
}

function TitleView() {
  return (
    <View style={{marginTop: 32}}>
      <Text
        style={{
          ...getFont(Weight.bold, 30),
          color: 'black',
          marginBottom: 8,
          marginLeft: 16,
        }}>
        PRIDE At The Disco
      </Text>
      <Text
        style={{
          ...getFont(Weight.semiBold, 15),
          color: '#395de0',
          marginLeft: 16,
        }}>
        by Westfield San Francisco Centre
      </Text>
    </View>
  );
}

function TimeView() {
  return (
    <View style={{marginTop: 32, marginHorizontal: 16, flexDirection: 'row'}}>
      <SimpleLineIcons name="calendar" size={24} color="gray" />
      <View style={{marginHorizontal: 16}}>
        <Text
          style={{
            ...getFont(Weight.semiBold, 15),
            color: '#393939',
          }}>
          Friday, 28 Jun, 2020
        </Text>
        <Text
          style={{
            ...getFont(Weight.regular, 15),
            marginVertical: 12,
            color: '#7b7b7b',
          }}>
          05:00 PM - 08:00 PM GMT-7
        </Text>
        <TextButton
          title="Add to Calendar"
          style={{alignItems: 'flex-start'}}
          textStyle={{
            ...getFont(Weight.semiBold, 15),
            color: '#395de0',
            textAlign: 'left',
          }}
          onPress={{}}
        />
      </View>
    </View>
  );
}

function LocationView() {
  return (
    <View style={{marginTop: 32, marginHorizontal: 16, flexDirection: 'row'}}>
      <SimpleLineIcons name="location-pin" size={24} color="gray" />
      <View style={{marginHorizontal: 16}}>
        <Text
          style={{
            ...getFont(Weight.semiBold, 15),
            color: '#393939',
          }}>
          Westfield San Francisco Centre
        </Text>
        <Text
          style={{
            ...getFont(Weight.regular, 15),
            marginVertical: 12,
            color: '#7b7b7b',
          }}>
          865 Market St, San Francisco, CA 94103, USA
        </Text>
      </View>
    </View>
  );
}

function AboutView() {
  return (
    <View style={{marginHorizontal: 16, marginTop: 32}}>
      <Text
        style={{
          ...getFont(Weight.bold, 20),
          color: 'black',
        }}>
        About
      </Text>
      <Text
        style={{
          ...getFont(Weight.regular, 15),
          color: '#555555',
          marginTop: 16,
        }}>
        Cornerstone content is the core of your website. It consists of the
        best, most important articles on your site; the pages or posts you want
        to rank highest in the search engines. Cornerstone articles are usually
        relatively long, informative articles, combining insights from different
        blog posts and covering everything that’s important about a certain
        topic.
      </Text>

      <TextButton
        title="Read more"
        style={{alignItems: 'flex-start', marginTop: 8}}
        textStyle={{
          ...getFont(Weight.semiBold, 15),
          color: '#395de0',
          textAlign: 'left',
        }}
        onPress={{}}
      />
    </View>
  );
}

function MapDetailView() {
  return (
    <View style={{marginVertical: 32}}>
      <Text
        style={{
          ...getFont(Weight.bold, 20),
          color: 'black',
          marginHorizontal: 16,
        }}>
        Location
      </Text>
      <View
        style={{
          backgroundColor: 'blue',
          height: 150,
          marginVertical: 16,
        }}></View>
      <View
        style={{
          marginHorizontal: 16,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            ...getFont(Weight.semiBold, 15),
            color: '#393939',
          }}>
          Westfield San Francisco Centre
        </Text>
        <Text
          style={{
            ...getFont(Weight.regular, 15),
            marginVertical: 12,
            color: '#7b7b7b',
          }}>
          865 Market St, San Francisco, CA 94103, USA
        </Text>

        <View style={{flexDirection: 'row', marginTop: 16}}>
          <CircleButton Library={Fontisto} name="car" />
          <View style={{width: 16}} />
          <CircleButton Library={Ionicons} name="walk" />
          <View style={{width: 16}} />
          <CircleButton Library={Ionicons} name="ios-bus-outline" />
        </View>
      </View>
    </View>
  );
}

function HostView() {
  return (
    <View
      style={{
        paddingTop: 32,
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <AsyncImage
        style={{borderRadius: 50}}
        height={100}
        width={100}
        uri={
          'https://www.croatiaweek.com/wp-content/uploads/2019/12/101a2fe3-856c-46c3-a110-4e2bd1617ef9.jpg?x34489'
        }
      />
      <Text
        style={{
          ...getFont(Weight.bold, 25),
          marginVertical: 12,
          color: 'black',
        }}>
        Westfield San Francisco Centre
      </Text>
      <Text
        style={{
          ...getFont(Weight.semiBold, 15),
          color: 'black',
        }}>
        Organizer
      </Text>
      <TextButton
        title="Follow"
        style={{
          width: 150,
          height: 44,
          borderWidth: 1,
          borderRadius: 8,
          borderColor: '#7b7b7b',
          marginVertical: 32,
          backgroundColor: 'white',
        }}
        textStyle={{
          ...getFont(Weight.semiBold, 18),
          color: 'black',
          textAlign: 'left',
        }}
        onPress={{}}
      />
    </View>
  );
}
