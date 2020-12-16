import {useState} from 'react';
import restApiClient from '@src/utils/restApiClient';
import Keys from '@src/utils/keys';
import {Event} from '@src/models/Event';

export default function useEventsList() {
  const [isProcessing, setIsProcessing] = useState(false);
  async function getEvents() {
    // const url = `/events.json?apikey=${Keys.apiKey}`;
    // const result = await restApiClient.get(url);
    const result = rawData;
    const eventsRaw = result['_embedded']['events'] as [];
    const events = eventsRaw.map((raw) => new Event(raw));
    return events;
  }

  return {isProcessing, getEvents};
}

const rawData = {
  _embedded: {
    events: [
      {
        name: 'Magic Of Lights: Drive-Through Holiday Lights Experience',
        type: 'event',
        id: 'vv1AOv_8IGA5_vos',
        test: false,
        url:
          'https://concerts.livenation.com/magic-of-lights-drivethrough-holiday-lights-holmdel-new-jersey-11-13-2020/event/020059428B641471',
        locale: 'en-us',
        images: [
          {
            ratio: '16_9',
            url:
              'https://s1.ticketm.net/dam/a/ce5/5a55729f-f567-40cd-92b0-8d64d1209ce5_1181471_RETINA_LANDSCAPE_16_9.jpg',
            width: 1136,
            height: 639,
            fallback: false,
          },
          {
            ratio: '16_9',
            url:
              'https://s1.ticketm.net/dam/a/ce5/5a55729f-f567-40cd-92b0-8d64d1209ce5_1181471_TABLET_LANDSCAPE_16_9.jpg',
            width: 1024,
            height: 576,
            fallback: false,
          },
          {
            ratio: '3_2',
            url:
              'https://s1.ticketm.net/dam/a/ce5/5a55729f-f567-40cd-92b0-8d64d1209ce5_1181471_RETINA_PORTRAIT_3_2.jpg',
            width: 640,
            height: 427,
            fallback: false,
          },
          {
            ratio: '3_2',
            url:
              'https://s1.ticketm.net/dam/a/ce5/5a55729f-f567-40cd-92b0-8d64d1209ce5_1181471_ARTIST_PAGE_3_2.jpg',
            width: 305,
            height: 203,
            fallback: false,
          },
          {
            ratio: '3_2',
            url:
              'https://s1.ticketm.net/dam/a/ce5/5a55729f-f567-40cd-92b0-8d64d1209ce5_1181471_TABLET_LANDSCAPE_3_2.jpg',
            width: 1024,
            height: 683,
            fallback: false,
          },
          {
            ratio: '16_9',
            url:
              'https://s1.ticketm.net/dam/a/ce5/5a55729f-f567-40cd-92b0-8d64d1209ce5_1181471_RECOMENDATION_16_9.jpg',
            width: 100,
            height: 56,
            fallback: false,
          },
          {
            ratio: '4_3',
            url:
              'https://s1.ticketm.net/dam/a/ce5/5a55729f-f567-40cd-92b0-8d64d1209ce5_1181471_CUSTOM.jpg',
            width: 305,
            height: 225,
            fallback: false,
          },
          {
            ratio: '16_9',
            url:
              'https://s1.ticketm.net/dam/a/ce5/5a55729f-f567-40cd-92b0-8d64d1209ce5_1181471_EVENT_DETAIL_PAGE_16_9.jpg',
            width: 205,
            height: 115,
            fallback: false,
          },
          {
            ratio: '16_9',
            url:
              'https://s1.ticketm.net/dam/a/ce5/5a55729f-f567-40cd-92b0-8d64d1209ce5_1181471_TABLET_LANDSCAPE_LARGE_16_9.jpg',
            width: 2048,
            height: 1152,
            fallback: false,
          },
          {
            ratio: '16_9',
            url:
              'https://s1.ticketm.net/dam/a/ce5/5a55729f-f567-40cd-92b0-8d64d1209ce5_1181471_RETINA_PORTRAIT_16_9.jpg',
            width: 640,
            height: 360,
            fallback: false,
          },
        ],
        sales: {
          public: {
            startDateTime: '2020-10-06T13:00:00Z',
            startTBD: false,
            startTBA: false,
            endDateTime: '2021-01-03T22:00:00Z',
          },
        },
        dates: {
          start: {
            localDate: '2020-11-13',
            dateTBD: false,
            dateTBA: false,
            timeTBA: false,
            noSpecificTime: true,
          },
          end: {
            localDate: '2021-01-02',
            approximate: false,
            noSpecificTime: true,
          },
          timezone: 'America/New_York',
          status: {
            code: 'onsale',
          },
          spanMultipleDays: false,
        },
        classifications: [
          {
            primary: true,
            segment: {
              id: 'KZFzniwnSyZfZ7v7n1',
              name: 'Miscellaneous',
            },
            genre: {
              id: 'KnvZfZ7vAeE',
              name: 'Fairs & Festivals',
            },
            subGenre: {
              id: 'KZazBEonSMnZfZ7vF1F',
              name: 'Undefined',
            },
            type: {
              id: 'KZAyXgnZfZ7v7nI',
              name: 'Undefined',
            },
            subType: {
              id: 'KZFzBErXgnZfZ7v7lJ',
              name: 'Undefined',
            },
            family: false,
          },
        ],
        promoter: {
          id: '653',
          name: 'LIVE NATION MUSIC',
          description: 'LIVE NATION MUSIC / NTL / USA',
        },
        promoters: [
          {
            id: '653',
            name: 'LIVE NATION MUSIC',
            description: 'LIVE NATION MUSIC / NTL / USA',
          },
        ],
        info:
          'ONE TICKET PER VEHICLE REQUIRED PLEASE PRINT TICKET PRIOR TO ARRIVING TO THE EVENT EVENT TIMES - Sunday through Thursday - From Dusk till 10:00pm Friday and Saturday - From Dusk till 11:00pm Runs Everyday from 11/13/2020 - 1/2/2021 except closed on New Years Eve PRICING AT THE GATE- $30 Monday - Sunday ***One ticket per carload required***',
        pleaseNote:
          'ONE TICKET PER VEHICLE REQUIRED PLEASE PRINT TICKET PRIOR TO ARRIVING TO THE EVENT EVENT TIMES - Sunday through Thursday - From Dusk till 10:00pm Friday and Saturday - From Dusk till 11:00pm Runs Everyday from 11/13/2020 - 1/2/2021 except closed on New Years Eve PRICING AT THE GATE- $30 Monday - Sunday ***One ticket per carload required***',
        priceRanges: [
          {
            type: 'standard',
            currency: 'USD',
            min: 20.0,
            max: 105.0,
          },
        ],
        seatmap: {
          staticUrl:
            'https://s1.ticketm.net/tmimages/venue/maps/phi/77986s.gif',
        },
        accessibility: {},
        ticketLimit: {
          info: 'There is an 8 Ticket Limint per person',
        },
        ageRestrictions: {
          legalAgeEnforced: false,
        },
        _links: {
          self: {
            href: '/discovery/v2/events/vv1AOv_8IGA5_vos?locale=en-us',
          },
          attractions: [
            {
              href: '/discovery/v2/attractions/K8vZ917pjFV?locale=en-us',
            },
          ],
          venues: [
            {
              href: '/discovery/v2/venues/KovZpZAEAIIA?locale=en-us',
            },
          ],
        },
        _embedded: {
          venues: [
            {
              name: 'PNC Bank Arts Center',
              type: 'venue',
              id: 'KovZpZAEAIIA',
              test: false,
              url:
                'https://www.ticketmaster.com/pnc-bank-arts-center-tickets-holmdel/venue/16839',
              locale: 'en-us',
              aliases: ['pnc art center', 'pnc bank', 'pnc bank art center'],
              images: [
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dbimages/21876v.jpg',
                  width: 205,
                  height: 115,
                  fallback: false,
                },
                {
                  ratio: '3_1',
                  url:
                    'https://s1.ticketm.net/dam/v/e05/d241741c-d3b3-4b80-bc38-1570367f1e05_527791_SOURCE.jpg',
                  width: 1500,
                  height: 500,
                  fallback: false,
                },
              ],
              postalCode: '07733',
              timezone: 'America/New_York',
              city: {
                name: 'Holmdel',
              },
              state: {
                name: 'New Jersey',
                stateCode: 'NJ',
              },
              country: {
                name: 'United States Of America',
                countryCode: 'US',
              },
              address: {
                line1: 'Exit 116, Garden State Pkwy',
              },
              location: {
                longitude: '-74.1377399',
                latitude: '40.410434',
              },
              markets: [
                {
                  name: 'New York/Tri-State Area',
                  id: '35',
                },
                {
                  name: 'Northern New Jersey',
                  id: '55',
                },
                {
                  name: 'Connecticut',
                  id: '124',
                },
              ],
              dmas: [
                {
                  id: 296,
                },
                {
                  id: 345,
                },
                {
                  id: 422,
                },
              ],
              boxOfficeInfo: {
                phoneNumberDetail:
                  'There is an $8 box office service charge per ticket applied to all walk up sales at the venue.',
                openHoursDetail:
                  'For the safety of our employees and guests, the box office will be closed until further notice. Please keep checking back here for updates as to when we re-open. We appreciate your understanding.',
                acceptedPaymentDetail:
                  'Cash, AmEx, Visa, MC, DSC, A service charge is applied to each ticket.',
                willCallDetail:
                  'Pick up tickets one hour prior to show. Customer must present the actual credit card used to place the order and a photo ID.',
              },
              parkingDetail:
                'ADA parking is on a first-come-first-serve basis and no additional Preminum parking tickets are needed For "Premium Parking" see www.ticketmaster.com, reserve your space and show up when you want. Parking lots will open 1 hour prior to doors.',
              accessibleSeatingDetail:
                'Special needs seating is available through either the box office at (732) 203-2500 ext. 3714, or by calling Ticketmaster. Accessible parking: New Jersey Disabled license plates or state permit required to park in the wheelchair accessible parking area. Parking is located south of the amphitheater. The amphitheater has special needs seating located in the Loge and Orchestra sections. Accessible lawn seating is also available. For more information concerning special needs, please contact the PNC Bank Arts Center at (732) 203-2500 ext. 3714.',
              generalInfo: {
                generalRule:
                  'The PNC Bank Arts Center enforces the law prohibiting underage consumption of alcohol anywhere on site. Violators will be prosecuted. NO recording equipment, radios, TVs or unauthorized electronic equipment. NO alcoholic beverages, smoking, bottles, cans, coolers, weapons, personal Lawn Chair NO Laser Pointers. One factory sealed bottle of water per person. Camera Policy: Personal cameras are allowed in the venue. Flash photography, video and removable lens cameras are not permitted without venue approval.',
              },
              upcomingEvents: {
                _total: 27,
                ticketmaster: 27,
              },
              _links: {
                self: {
                  href: '/discovery/v2/venues/KovZpZAEAIIA?locale=en-us',
                },
              },
            },
          ],
          attractions: [
            {
              name: 'Magic Of Lights',
              type: 'attraction',
              id: 'K8vZ917pjFV',
              test: false,
              url:
                'http://www.ticketmaster.com.au/Magic-Of-Lights-tickets/artist/2430664',
              locale: 'en-us',
              images: [
                {
                  ratio: '16_9',
                  url:
                    'https://s1.ticketm.net/dam/a/ce5/5a55729f-f567-40cd-92b0-8d64d1209ce5_1181471_RETINA_LANDSCAPE_16_9.jpg',
                  width: 1136,
                  height: 639,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url:
                    'https://s1.ticketm.net/dam/a/ce5/5a55729f-f567-40cd-92b0-8d64d1209ce5_1181471_TABLET_LANDSCAPE_16_9.jpg',
                  width: 1024,
                  height: 576,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url:
                    'https://s1.ticketm.net/dam/a/ce5/5a55729f-f567-40cd-92b0-8d64d1209ce5_1181471_RETINA_PORTRAIT_3_2.jpg',
                  width: 640,
                  height: 427,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url:
                    'https://s1.ticketm.net/dam/a/ce5/5a55729f-f567-40cd-92b0-8d64d1209ce5_1181471_ARTIST_PAGE_3_2.jpg',
                  width: 305,
                  height: 203,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url:
                    'https://s1.ticketm.net/dam/a/ce5/5a55729f-f567-40cd-92b0-8d64d1209ce5_1181471_TABLET_LANDSCAPE_3_2.jpg',
                  width: 1024,
                  height: 683,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url:
                    'https://s1.ticketm.net/dam/a/ce5/5a55729f-f567-40cd-92b0-8d64d1209ce5_1181471_RECOMENDATION_16_9.jpg',
                  width: 100,
                  height: 56,
                  fallback: false,
                },
                {
                  ratio: '4_3',
                  url:
                    'https://s1.ticketm.net/dam/a/ce5/5a55729f-f567-40cd-92b0-8d64d1209ce5_1181471_CUSTOM.jpg',
                  width: 305,
                  height: 225,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url:
                    'https://s1.ticketm.net/dam/a/ce5/5a55729f-f567-40cd-92b0-8d64d1209ce5_1181471_EVENT_DETAIL_PAGE_16_9.jpg',
                  width: 205,
                  height: 115,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url:
                    'https://s1.ticketm.net/dam/a/ce5/5a55729f-f567-40cd-92b0-8d64d1209ce5_1181471_TABLET_LANDSCAPE_LARGE_16_9.jpg',
                  width: 2048,
                  height: 1152,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url:
                    'https://s1.ticketm.net/dam/a/ce5/5a55729f-f567-40cd-92b0-8d64d1209ce5_1181471_RETINA_PORTRAIT_16_9.jpg',
                  width: 640,
                  height: 360,
                  fallback: false,
                },
              ],
              classifications: [
                {
                  primary: true,
                  segment: {
                    id: 'KZFzniwnSyZfZ7v7n1',
                    name: 'Miscellaneous',
                  },
                  genre: {
                    id: 'KnvZfZ7vAeE',
                    name: 'Fairs & Festivals',
                  },
                  subGenre: {
                    id: 'KZazBEonSMnZfZ7vF1F',
                    name: 'Undefined',
                  },
                  type: {
                    id: 'KZAyXgnZfZ7v7lt',
                    name: 'Event Style',
                  },
                  subType: {
                    id: 'KZFzBErXgnZfZ7vAAv',
                    name: 'Undefined',
                  },
                  family: false,
                },
              ],
              upcomingEvents: {
                _total: 5,
                universe: 1,
                ticketmaster: 4,
              },
              _links: {
                self: {
                  href: '/discovery/v2/attractions/K8vZ917pjFV?locale=en-us',
                },
              },
            },
          ],
        },
      },
      {
        name: 'Miami Dolphins vs. New England Patriots',
        type: 'event',
        id: 'vvG1VZp2S5pPb-',
        test: false,
        url:
          'https://www.ticketmaster.com/miami-dolphins-vs-new-england-patriots-miami-florida-12-20-2020/event/0D0058FCCB5A5621',
        locale: 'en-us',
        images: [
          {
            ratio: '16_9',
            url:
              'https://s1.ticketm.net/dam/a/d39/4b18e97c-4544-448e-8163-8c158d23bd39_1325311_EVENT_DETAIL_PAGE_16_9.jpg',
            width: 205,
            height: 115,
            fallback: false,
          },
          {
            ratio: '16_9',
            url:
              'https://s1.ticketm.net/dam/a/d39/4b18e97c-4544-448e-8163-8c158d23bd39_1325311_RETINA_LANDSCAPE_16_9.jpg',
            width: 1136,
            height: 639,
            fallback: false,
          },
          {
            ratio: '16_9',
            url:
              'https://s1.ticketm.net/dam/a/d39/4b18e97c-4544-448e-8163-8c158d23bd39_1325311_RETINA_PORTRAIT_16_9.jpg',
            width: 640,
            height: 360,
            fallback: false,
          },
          {
            ratio: '16_9',
            url:
              'https://s1.ticketm.net/dam/a/d39/4b18e97c-4544-448e-8163-8c158d23bd39_1325311_RECOMENDATION_16_9.jpg',
            width: 100,
            height: 56,
            fallback: false,
          },
          {
            ratio: '16_9',
            url:
              'https://s1.ticketm.net/dam/a/d39/4b18e97c-4544-448e-8163-8c158d23bd39_1325311_TABLET_LANDSCAPE_LARGE_16_9.jpg',
            width: 2048,
            height: 1152,
            fallback: false,
          },
          {
            ratio: '4_3',
            url:
              'https://s1.ticketm.net/dam/a/d39/4b18e97c-4544-448e-8163-8c158d23bd39_1325311_CUSTOM.jpg',
            width: 305,
            height: 225,
            fallback: false,
          },
          {
            ratio: '3_2',
            url:
              'https://s1.ticketm.net/dam/a/d39/4b18e97c-4544-448e-8163-8c158d23bd39_1325311_RETINA_PORTRAIT_3_2.jpg',
            width: 640,
            height: 427,
            fallback: false,
          },
          {
            ratio: '3_2',
            url:
              'https://s1.ticketm.net/dam/a/d39/4b18e97c-4544-448e-8163-8c158d23bd39_1325311_TABLET_LANDSCAPE_3_2.jpg',
            width: 1024,
            height: 683,
            fallback: false,
          },
          {
            ratio: '3_2',
            url:
              'https://s1.ticketm.net/dam/a/d39/4b18e97c-4544-448e-8163-8c158d23bd39_1325311_ARTIST_PAGE_3_2.jpg',
            width: 305,
            height: 203,
            fallback: false,
          },
          {
            ratio: '16_9',
            url:
              'https://s1.ticketm.net/dam/a/d39/4b18e97c-4544-448e-8163-8c158d23bd39_1325311_TABLET_LANDSCAPE_16_9.jpg',
            width: 1024,
            height: 576,
            fallback: false,
          },
        ],
        sales: {
          public: {
            startDateTime: '2020-09-14T16:00:00Z',
            startTBD: false,
            startTBA: false,
            endDateTime: '2020-12-20T19:00:00Z',
          },
          presales: [
            {
              startDateTime: '2020-09-08T13:00:00Z',
              endDateTime: '2020-12-20T19:00:00Z',
              name: 'Resale Onsale',
            },
            {
              startDateTime: '2020-09-14T14:00:00Z',
              endDateTime: '2020-09-14T15:59:00Z',
              name: 'Miami Dolphins Presale',
            },
            {
              startDateTime: '2020-09-14T14:00:00Z',
              endDateTime: '2020-12-20T19:00:00Z',
              name: 'Official Platinum',
            },
          ],
        },
        dates: {
          start: {
            localDate: '2020-12-20',
            localTime: '13:00:00',
            dateTime: '2020-12-20T18:00:00Z',
            dateTBD: false,
            dateTBA: false,
            timeTBA: false,
            noSpecificTime: false,
          },
          timezone: 'America/New_York',
          status: {
            code: 'onsale',
          },
          spanMultipleDays: false,
        },
        classifications: [
          {
            primary: true,
            segment: {
              id: 'KZFzniwnSyZfZ7v7nE',
              name: 'Sports',
            },
            genre: {
              id: 'KnvZfZ7vAdE',
              name: 'Football',
            },
            subGenre: {
              id: 'KZazBEonSMnZfZ7vFE1',
              name: 'NFL',
            },
            type: {
              id: 'KZAyXgnZfZ7v7l1',
              name: 'Group',
            },
            subType: {
              id: 'KZFzBErXgnZfZ7vA7d',
              name: 'Team',
            },
            family: false,
          },
        ],
        promoter: {
          id: '705',
          name: 'NFL REGULAR SEASON',
          description: 'NFL REGULAR SEASON / NTL / USA',
        },
        promoters: [
          {
            id: '705',
            name: 'NFL REGULAR SEASON',
            description: 'NFL REGULAR SEASON / NTL / USA',
          },
        ],
        priceRanges: [
          {
            type: 'standard',
            currency: 'USD',
            min: 71.0,
            max: 855.0,
          },
        ],
        seatmap: {
          staticUrl:
            'https://maps.ticketmaster.com/maps/geometry/3/event/0D0058FCCB5A5621/staticImage?type=png&systemId=HOST',
        },
        accessibility: {
          ticketLimit: 4,
        },
        ageRestrictions: {
          legalAgeEnforced: false,
        },
        _links: {
          self: {
            href: '/discovery/v2/events/vvG1VZp2S5pPb-?locale=en-us',
          },
          attractions: [
            {
              href: '/discovery/v2/attractions/K8vZ9171ogf?locale=en-us',
            },
            {
              href: '/discovery/v2/attractions/K8vZ9171ouf?locale=en-us',
            },
          ],
          venues: [
            {
              href: '/discovery/v2/venues/KovZpZAEkvtA?locale=en-us',
            },
          ],
        },
        _embedded: {
          venues: [
            {
              name: 'Hard Rock Stadium',
              type: 'venue',
              id: 'KovZpZAEkvtA',
              test: false,
              url:
                'https://www.ticketmaster.com/hard-rock-stadium-tickets-miami/venue/106734',
              locale: 'en-us',
              aliases: ['dolphin stadium'],
              images: [
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dbimages/20496v.jpg',
                  width: 205,
                  height: 115,
                  fallback: false,
                },
              ],
              postalCode: '33056',
              timezone: 'America/New_York',
              city: {
                name: 'Miami',
              },
              state: {
                name: 'Florida',
                stateCode: 'FL',
              },
              country: {
                name: 'United States Of America',
                countryCode: 'US',
              },
              address: {
                line1: '347 Don Shula Drive',
              },
              location: {
                longitude: '-80.238866',
                latitude: '25.957928',
              },
              markets: [
                {
                  name: 'Miami',
                  id: '15',
                },
              ],
              dmas: [
                {
                  id: 334,
                },
                {
                  id: 412,
                },
              ],
              boxOfficeInfo: {
                phoneNumberDetail:
                  '(888) FINS-TIX for Miami Dolphins and General Events 1-800-GO-CANES for University of Miami Football 305-341-4701 for the Capital One Orange Bowl For Universoul Circus information 1-800-316-7439',
                openHoursDetail:
                  'GENERAL EVENTS Mon-Fri 8:30am-6:00pm Sat 10:00am-4:00pm University of Miami Football: 8:30am-5:00pm, Monday-Friday at Hurricane Ticket Office located at the BankUnited Center on UM Campus',
                acceptedPaymentDetail:
                  'GENERAL EVENTS: Cash, Visa, MC, Amex and Discover - UNIVERSOUL CIRCUS: Cash only - HURRICANE FOOTBALL at UM Box Office: Cash, Visa, MC, AMEX ($1 service charge on all tickets)',
                willCallDetail:
                  'GENERAL EVENTS Location : Gate G Hours : 10am Miami Hurricanes Football : Gate F at the Stadium, 4 hours prior to Kickoff',
              },
              parkingDetail:
                'Location: Miami Dolphins Parking: • Parking Lots 11-18 and Walmart open 4hrs prior to kick-off',
              accessibleSeatingDetail: 'This is an accessible venue.',
              generalInfo: {
                generalRule:
                  'ITEMS NOT ALLOWED FOR GENERAL EVENTS: - no umbrellas - no alcohol - no cans - no bottles - no zoom lenses - no tripods - no coolers - no backpacks - no large bags - no duffle bags - hard-sided containers ITEMS NOT ALLOWED FOR NFL EXPERIENCE: - no umbrellas - no cameras - no recording devices - no alcohol - no cans - no bottles ALL small bags, including purses, diaper bags and fanny packs, WILL BE INSPECTED before they will be permitted into the stadium. Additionally, umbrellas will no longer be permitted in the facility. Due to these increased security measures, patrons will no longer be able to check prohibited items at the stadium gates. ITEMS ALLOWED FOR GENERAL EVENTS: cameras, recording devices',
                childRule:
                  "GENERAL EVENTS Ages 0-1 admitted free on ticket holder's lap. If child has celebrated their 2nd birthday, they MUST have a ticket to enter. University of Miami Hurricanes football: Children 2 and under free on adults lap.",
              },
              upcomingEvents: {
                _total: 11,
                ticketmaster: 11,
              },
              _links: {
                self: {
                  href: '/discovery/v2/venues/KovZpZAEkvtA?locale=en-us',
                },
              },
            },
          ],
          attractions: [
            {
              name: 'Miami Dolphins',
              type: 'attraction',
              id: 'K8vZ9171ogf',
              test: false,
              url:
                'https://www.ticketmaster.com/miami-dolphins-tickets/artist/805964',
              locale: 'en-us',
              externalLinks: {
                twitter: [
                  {
                    url: 'https://twitter.com/MiamiDolphins',
                  },
                ],
                facebook: [
                  {
                    url: 'https://www.facebook.com/MiamiDolphins/',
                  },
                ],
                wiki: [
                  {
                    url: 'https://en.wikipedia.org/wiki/Miami_Dolphins',
                  },
                ],
                instagram: [
                  {
                    url: 'https://www.instagram.com/miamidolphins/',
                  },
                ],
                homepage: [
                  {
                    url: 'https://www.miamidolphins.com/',
                  },
                ],
              },
              images: [
                {
                  ratio: '16_9',
                  url:
                    'https://s1.ticketm.net/dam/a/d39/4b18e97c-4544-448e-8163-8c158d23bd39_1325311_EVENT_DETAIL_PAGE_16_9.jpg',
                  width: 205,
                  height: 115,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url:
                    'https://s1.ticketm.net/dam/a/d39/4b18e97c-4544-448e-8163-8c158d23bd39_1325311_RETINA_LANDSCAPE_16_9.jpg',
                  width: 1136,
                  height: 639,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url:
                    'https://s1.ticketm.net/dam/a/d39/4b18e97c-4544-448e-8163-8c158d23bd39_1325311_RETINA_PORTRAIT_16_9.jpg',
                  width: 640,
                  height: 360,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url:
                    'https://s1.ticketm.net/dam/a/d39/4b18e97c-4544-448e-8163-8c158d23bd39_1325311_RECOMENDATION_16_9.jpg',
                  width: 100,
                  height: 56,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url:
                    'https://s1.ticketm.net/dam/a/d39/4b18e97c-4544-448e-8163-8c158d23bd39_1325311_TABLET_LANDSCAPE_LARGE_16_9.jpg',
                  width: 2048,
                  height: 1152,
                  fallback: false,
                },
                {
                  ratio: '4_3',
                  url:
                    'https://s1.ticketm.net/dam/a/d39/4b18e97c-4544-448e-8163-8c158d23bd39_1325311_CUSTOM.jpg',
                  width: 305,
                  height: 225,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url:
                    'https://s1.ticketm.net/dam/a/d39/4b18e97c-4544-448e-8163-8c158d23bd39_1325311_RETINA_PORTRAIT_3_2.jpg',
                  width: 640,
                  height: 427,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url:
                    'https://s1.ticketm.net/dam/a/d39/4b18e97c-4544-448e-8163-8c158d23bd39_1325311_TABLET_LANDSCAPE_3_2.jpg',
                  width: 1024,
                  height: 683,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url:
                    'https://s1.ticketm.net/dam/a/d39/4b18e97c-4544-448e-8163-8c158d23bd39_1325311_ARTIST_PAGE_3_2.jpg',
                  width: 305,
                  height: 203,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url:
                    'https://s1.ticketm.net/dam/a/d39/4b18e97c-4544-448e-8163-8c158d23bd39_1325311_TABLET_LANDSCAPE_16_9.jpg',
                  width: 1024,
                  height: 576,
                  fallback: false,
                },
              ],
              classifications: [
                {
                  primary: true,
                  segment: {
                    id: 'KZFzniwnSyZfZ7v7nE',
                    name: 'Sports',
                  },
                  genre: {
                    id: 'KnvZfZ7vAdE',
                    name: 'Football',
                  },
                  subGenre: {
                    id: 'KZazBEonSMnZfZ7vFE1',
                    name: 'NFL',
                  },
                  type: {
                    id: 'KZAyXgnZfZ7v7l1',
                    name: 'Group',
                  },
                  subType: {
                    id: 'KZFzBErXgnZfZ7vA7d',
                    name: 'Team',
                  },
                  family: false,
                },
              ],
              upcomingEvents: {
                _total: 2,
                ticketmaster: 2,
              },
              _links: {
                self: {
                  href: '/discovery/v2/attractions/K8vZ9171ogf?locale=en-us',
                },
              },
            },
            {
              name: 'New England Patriots',
              type: 'attraction',
              id: 'K8vZ9171ouf',
              test: false,
              url:
                'https://www.ticketmaster.com/new-england-patriots-tickets/artist/805980',
              locale: 'en-us',
              externalLinks: {
                twitter: [
                  {
                    url: 'https://www.twitter.com/patriots',
                  },
                ],
                facebook: [
                  {
                    url: 'https://www.facebook.com/newenglandpatriots',
                  },
                ],
                wiki: [
                  {
                    url: 'https://en.wikipedia.org/wiki/New_England_Patriots',
                  },
                ],
                instagram: [
                  {
                    url: 'http://www.instagram.com/patriots',
                  },
                ],
                homepage: [
                  {
                    url: 'https://www.patriots.com/',
                  },
                ],
              },
              aliases: ['pats'],
              images: [
                {
                  ratio: '16_9',
                  url:
                    'https://s1.ticketm.net/dam/a/95c/0173c6d8-736f-487e-8146-794d0313095c_1325301_TABLET_LANDSCAPE_16_9.jpg',
                  width: 1024,
                  height: 576,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url:
                    'https://s1.ticketm.net/dam/a/95c/0173c6d8-736f-487e-8146-794d0313095c_1325301_RETINA_PORTRAIT_3_2.jpg',
                  width: 640,
                  height: 427,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url:
                    'https://s1.ticketm.net/dam/a/95c/0173c6d8-736f-487e-8146-794d0313095c_1325301_TABLET_LANDSCAPE_LARGE_16_9.jpg',
                  width: 2048,
                  height: 1152,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url:
                    'https://s1.ticketm.net/dam/a/95c/0173c6d8-736f-487e-8146-794d0313095c_1325301_RECOMENDATION_16_9.jpg',
                  width: 100,
                  height: 56,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url:
                    'https://s1.ticketm.net/dam/a/95c/0173c6d8-736f-487e-8146-794d0313095c_1325301_EVENT_DETAIL_PAGE_16_9.jpg',
                  width: 205,
                  height: 115,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url:
                    'https://s1.ticketm.net/dam/a/95c/0173c6d8-736f-487e-8146-794d0313095c_1325301_TABLET_LANDSCAPE_3_2.jpg',
                  width: 1024,
                  height: 683,
                  fallback: false,
                },
                {
                  ratio: '4_3',
                  url:
                    'https://s1.ticketm.net/dam/a/95c/0173c6d8-736f-487e-8146-794d0313095c_1325301_CUSTOM.jpg',
                  width: 305,
                  height: 225,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url:
                    'https://s1.ticketm.net/dam/a/95c/0173c6d8-736f-487e-8146-794d0313095c_1325301_RETINA_PORTRAIT_16_9.jpg',
                  width: 640,
                  height: 360,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url:
                    'https://s1.ticketm.net/dam/a/95c/0173c6d8-736f-487e-8146-794d0313095c_1325301_RETINA_LANDSCAPE_16_9.jpg',
                  width: 1136,
                  height: 639,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url:
                    'https://s1.ticketm.net/dam/a/95c/0173c6d8-736f-487e-8146-794d0313095c_1325301_ARTIST_PAGE_3_2.jpg',
                  width: 305,
                  height: 203,
                  fallback: false,
                },
              ],
              classifications: [
                {
                  primary: true,
                  segment: {
                    id: 'KZFzniwnSyZfZ7v7nE',
                    name: 'Sports',
                  },
                  genre: {
                    id: 'KnvZfZ7vAdE',
                    name: 'Football',
                  },
                  subGenre: {
                    id: 'KZazBEonSMnZfZ7vFE1',
                    name: 'NFL',
                  },
                  type: {
                    id: 'KZAyXgnZfZ7v7l1',
                    name: 'Group',
                  },
                  subType: {
                    id: 'KZFzBErXgnZfZ7vA7d',
                    name: 'Team',
                  },
                  family: false,
                },
              ],
              upcomingEvents: {
                _total: 2,
                ticketmaster: 2,
              },
              _links: {
                self: {
                  href: '/discovery/v2/attractions/K8vZ9171ouf?locale=en-us',
                },
              },
            },
          ],
        },
      },
      {
        name: 'Magic Of Lights: Drive-Through Holiday Lights Experience',
        type: 'event',
        id: 'G5vVZpf7AtYVy',
        test: false,
        url:
          'https://concerts.livenation.com/magic-of-lights-drivethrough-holiday-lights-wantagh-new-york-11-13-2020/event/1D00594105A70D39',
        locale: 'en-us',
        images: [
          {
            ratio: '16_9',
            url:
              'https://s1.ticketm.net/dam/a/ce5/5a55729f-f567-40cd-92b0-8d64d1209ce5_1181471_RETINA_LANDSCAPE_16_9.jpg',
            width: 1136,
            height: 639,
            fallback: false,
          },
          {
            ratio: '16_9',
            url:
              'https://s1.ticketm.net/dam/a/ce5/5a55729f-f567-40cd-92b0-8d64d1209ce5_1181471_TABLET_LANDSCAPE_16_9.jpg',
            width: 1024,
            height: 576,
            fallback: false,
          },
          {
            ratio: '3_2',
            url:
              'https://s1.ticketm.net/dam/a/ce5/5a55729f-f567-40cd-92b0-8d64d1209ce5_1181471_RETINA_PORTRAIT_3_2.jpg',
            width: 640,
            height: 427,
            fallback: false,
          },
          {
            ratio: '3_2',
            url:
              'https://s1.ticketm.net/dam/a/ce5/5a55729f-f567-40cd-92b0-8d64d1209ce5_1181471_ARTIST_PAGE_3_2.jpg',
            width: 305,
            height: 203,
            fallback: false,
          },
          {
            ratio: '3_2',
            url:
              'https://s1.ticketm.net/dam/a/ce5/5a55729f-f567-40cd-92b0-8d64d1209ce5_1181471_TABLET_LANDSCAPE_3_2.jpg',
            width: 1024,
            height: 683,
            fallback: false,
          },
          {
            ratio: '16_9',
            url:
              'https://s1.ticketm.net/dam/a/ce5/5a55729f-f567-40cd-92b0-8d64d1209ce5_1181471_RECOMENDATION_16_9.jpg',
            width: 100,
            height: 56,
            fallback: false,
          },
          {
            ratio: '4_3',
            url:
              'https://s1.ticketm.net/dam/a/ce5/5a55729f-f567-40cd-92b0-8d64d1209ce5_1181471_CUSTOM.jpg',
            width: 305,
            height: 225,
            fallback: false,
          },
          {
            ratio: '16_9',
            url:
              'https://s1.ticketm.net/dam/a/ce5/5a55729f-f567-40cd-92b0-8d64d1209ce5_1181471_EVENT_DETAIL_PAGE_16_9.jpg',
            width: 205,
            height: 115,
            fallback: false,
          },
          {
            ratio: '16_9',
            url:
              'https://s1.ticketm.net/dam/a/ce5/5a55729f-f567-40cd-92b0-8d64d1209ce5_1181471_TABLET_LANDSCAPE_LARGE_16_9.jpg',
            width: 2048,
            height: 1152,
            fallback: false,
          },
          {
            ratio: '16_9',
            url:
              'https://s1.ticketm.net/dam/a/ce5/5a55729f-f567-40cd-92b0-8d64d1209ce5_1181471_RETINA_PORTRAIT_16_9.jpg',
            width: 640,
            height: 360,
            fallback: false,
          },
        ],
        sales: {
          public: {
            startDateTime: '2020-10-06T13:00:00Z',
            startTBD: false,
            startTBA: false,
            endDateTime: '2021-01-03T22:00:00Z',
          },
        },
        dates: {
          start: {
            localDate: '2020-11-13',
            dateTBD: false,
            dateTBA: false,
            timeTBA: false,
            noSpecificTime: true,
          },
          end: {
            localDate: '2021-01-02',
            approximate: false,
            noSpecificTime: true,
          },
          timezone: 'America/New_York',
          status: {
            code: 'onsale',
          },
          spanMultipleDays: false,
        },
        classifications: [
          {
            primary: true,
            segment: {
              id: 'KZFzniwnSyZfZ7v7n1',
              name: 'Miscellaneous',
            },
            genre: {
              id: 'KnvZfZ7vAeE',
              name: 'Fairs & Festivals',
            },
            subGenre: {
              id: 'KZazBEonSMnZfZ7vF1F',
              name: 'Undefined',
            },
            type: {
              id: 'KZAyXgnZfZ7v7nI',
              name: 'Undefined',
            },
            subType: {
              id: 'KZFzBErXgnZfZ7v7lJ',
              name: 'Undefined',
            },
            family: false,
          },
        ],
        promoter: {
          id: '653',
          name: 'LIVE NATION MUSIC',
          description: 'LIVE NATION MUSIC / NTL / USA',
        },
        promoters: [
          {
            id: '653',
            name: 'LIVE NATION MUSIC',
            description: 'LIVE NATION MUSIC / NTL / USA',
          },
        ],
        info:
          'ONE TICKET PER VEHICLE REQUIRED Delivery Delay till October 20th 2020 EVENT TIMES - Sunday through Thursday - From Dusk till 10:00pm Friday and Saturday - From Dusk till 11:00pm Runs Everyday from 11/13/2020 - 1/2/2021 except closed on New Years Eve PRICING AT THE GATE- $30 Monday - Thursday $35 Friday - Sunday ***One ticket per carload required***',
        pleaseNote:
          'ONE TICKET PER VEHICLE REQUIRED EVENT TIMES - Sunday through Thursday - From Dusk till 10:00pm Friday and Saturday - From Dusk till 11:00pm Runs Everyday from 11/13/2020 - 1/2/2021 except closed on New Years Eve PRICING AT THE GATE- $30 Monday - Thursday $35 Friday - Sunday ***One ticket per carload required*** PURCHASE OF ONE TICKET VALID PER VEHICLE',
        priceRanges: [
          {
            type: 'standard',
            currency: 'USD',
            min: 20.0,
            max: 105.0,
          },
        ],
        seatmap: {
          staticUrl:
            'https://s1.ticketm.net/tmimages/venue/maps/ny5/81925s.gif',
        },
        accessibility: {},
        ticketLimit: {
          info: 'There is an 8 Ticket Limint per person',
        },
        ageRestrictions: {
          legalAgeEnforced: false,
        },
        _links: {
          self: {
            href: '/discovery/v2/events/G5vVZpf7AtYVy?locale=en-us',
          },
          attractions: [
            {
              href: '/discovery/v2/attractions/K8vZ917pjFV?locale=en-us',
            },
          ],
          venues: [
            {
              href: '/discovery/v2/venues/KovZpZAE6eAA?locale=en-us',
            },
          ],
        },
        _embedded: {
          venues: [
            {
              name: 'Northwell Health at Jones Beach Theater',
              type: 'venue',
              id: 'KovZpZAE6eAA',
              test: false,
              url:
                'https://www.ticketmaster.com/northwell-health-at-jones-beach-theater-tickets-wantagh/venue/237654',
              locale: 'en-us',
              images: [
                {
                  ratio: '3_1',
                  url:
                    'https://s1.ticketm.net/dam/v/cc9/3aae5f2b-517c-4823-9975-b7efc9c9acc9_526611_SOURCE.jpg',
                  width: 1500,
                  height: 500,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dbimages/21874v.jpg',
                  width: 205,
                  height: 115,
                  fallback: false,
                },
              ],
              postalCode: '11793',
              timezone: 'America/New_York',
              city: {
                name: 'Wantagh',
              },
              state: {
                name: 'New York',
                stateCode: 'NY',
              },
              country: {
                name: 'United States Of America',
                countryCode: 'US',
              },
              address: {
                line1: '895 Bay Parkway',
              },
              location: {
                longitude: '-73.5023618',
                latitude: '40.6014755',
              },
              markets: [
                {
                  name: 'New York/Tri-State Area',
                  id: '35',
                },
                {
                  name: 'Connecticut',
                  id: '124',
                },
              ],
              dmas: [
                {
                  id: 296,
                },
                {
                  id: 345,
                },
              ],
              boxOfficeInfo: {
                phoneNumberDetail: '(516) 221-1000',
                openHoursDetail:
                  'For the safety of our employees and guests, the box office will be closed until further notice. Please keep checking back here for updates as to when we re-open. We appreciate your understanding.',
                acceptedPaymentDetail: 'Cash, Amex, Visa, Mastercard',
                willCallDetail:
                  'Pick-up tickets one hour prior to door time. Customer must present the actual credit card used to place the order, a photo i.d., and the order number.',
              },
              parkingDetail: 'Plenty of free parking',
              accessibleSeatingDetail:
                'All events have accessible seating. An elevator is provided for accessible seating locations.',
              generalInfo: {
                generalRule:
                  'No alcohol, no pets, no bottles, no smoking, no bags, no backpacks Responsible Drinking Public Outreach Links provided below: o http://teamcoalition.org/welcome.asp o http://www.lncli.com/ o http://www.nicebus.com/Maps-Schedules/Jones-Beach-Summer-Service.aspx Camera Policy: Personal cameras are allowed in the venue. Flash photography, video and removable lens cameras are not permitted without venue approval.',
                childRule: 'All persons attending an event must have a ticket.',
              },
              upcomingEvents: {
                _total: 23,
                ticketmaster: 23,
              },
              _links: {
                self: {
                  href: '/discovery/v2/venues/KovZpZAE6eAA?locale=en-us',
                },
              },
            },
          ],
          attractions: [
            {
              name: 'Magic Of Lights',
              type: 'attraction',
              id: 'K8vZ917pjFV',
              test: false,
              url:
                'http://www.ticketmaster.com.au/Magic-Of-Lights-tickets/artist/2430664',
              locale: 'en-us',
              images: [
                {
                  ratio: '16_9',
                  url:
                    'https://s1.ticketm.net/dam/a/ce5/5a55729f-f567-40cd-92b0-8d64d1209ce5_1181471_RETINA_LANDSCAPE_16_9.jpg',
                  width: 1136,
                  height: 639,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url:
                    'https://s1.ticketm.net/dam/a/ce5/5a55729f-f567-40cd-92b0-8d64d1209ce5_1181471_TABLET_LANDSCAPE_16_9.jpg',
                  width: 1024,
                  height: 576,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url:
                    'https://s1.ticketm.net/dam/a/ce5/5a55729f-f567-40cd-92b0-8d64d1209ce5_1181471_RETINA_PORTRAIT_3_2.jpg',
                  width: 640,
                  height: 427,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url:
                    'https://s1.ticketm.net/dam/a/ce5/5a55729f-f567-40cd-92b0-8d64d1209ce5_1181471_ARTIST_PAGE_3_2.jpg',
                  width: 305,
                  height: 203,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url:
                    'https://s1.ticketm.net/dam/a/ce5/5a55729f-f567-40cd-92b0-8d64d1209ce5_1181471_TABLET_LANDSCAPE_3_2.jpg',
                  width: 1024,
                  height: 683,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url:
                    'https://s1.ticketm.net/dam/a/ce5/5a55729f-f567-40cd-92b0-8d64d1209ce5_1181471_RECOMENDATION_16_9.jpg',
                  width: 100,
                  height: 56,
                  fallback: false,
                },
                {
                  ratio: '4_3',
                  url:
                    'https://s1.ticketm.net/dam/a/ce5/5a55729f-f567-40cd-92b0-8d64d1209ce5_1181471_CUSTOM.jpg',
                  width: 305,
                  height: 225,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url:
                    'https://s1.ticketm.net/dam/a/ce5/5a55729f-f567-40cd-92b0-8d64d1209ce5_1181471_EVENT_DETAIL_PAGE_16_9.jpg',
                  width: 205,
                  height: 115,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url:
                    'https://s1.ticketm.net/dam/a/ce5/5a55729f-f567-40cd-92b0-8d64d1209ce5_1181471_TABLET_LANDSCAPE_LARGE_16_9.jpg',
                  width: 2048,
                  height: 1152,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url:
                    'https://s1.ticketm.net/dam/a/ce5/5a55729f-f567-40cd-92b0-8d64d1209ce5_1181471_RETINA_PORTRAIT_16_9.jpg',
                  width: 640,
                  height: 360,
                  fallback: false,
                },
              ],
              classifications: [
                {
                  primary: true,
                  segment: {
                    id: 'KZFzniwnSyZfZ7v7n1',
                    name: 'Miscellaneous',
                  },
                  genre: {
                    id: 'KnvZfZ7vAeE',
                    name: 'Fairs & Festivals',
                  },
                  subGenre: {
                    id: 'KZazBEonSMnZfZ7vF1F',
                    name: 'Undefined',
                  },
                  type: {
                    id: 'KZAyXgnZfZ7v7lt',
                    name: 'Event Style',
                  },
                  subType: {
                    id: 'KZFzBErXgnZfZ7vAAv',
                    name: 'Undefined',
                  },
                  family: false,
                },
              ],
              upcomingEvents: {
                _total: 5,
                universe: 1,
                ticketmaster: 4,
              },
              _links: {
                self: {
                  href: '/discovery/v2/attractions/K8vZ917pjFV?locale=en-us',
                },
              },
            },
          ],
        },
      },
      {
        name: 'Tampa Bay Buccaneers vs. Atlanta Falcons',
        type: 'event',
        id: 'vvG1VZpoKLa4fg',
        test: false,
        url:
          'https://www.ticketmaster.com/tampa-bay-buccaneers-vs-atlanta-falcons-tampa-florida-01-03-2021/event/0D005914DF255535',
        locale: 'en-us',
        images: [
          {
            ratio: '16_9',
            url:
              'https://s1.ticketm.net/dam/a/a1c/6b5bfe16-4a07-4d42-a817-b94243f9aa1c_1325381_RECOMENDATION_16_9.jpg',
            width: 100,
            height: 56,
            fallback: false,
          },
          {
            ratio: '3_2',
            url:
              'https://s1.ticketm.net/dam/a/a1c/6b5bfe16-4a07-4d42-a817-b94243f9aa1c_1325381_ARTIST_PAGE_3_2.jpg',
            width: 305,
            height: 203,
            fallback: false,
          },
          {
            ratio: '3_2',
            url:
              'https://s1.ticketm.net/dam/a/a1c/6b5bfe16-4a07-4d42-a817-b94243f9aa1c_1325381_RETINA_PORTRAIT_3_2.jpg',
            width: 640,
            height: 427,
            fallback: false,
          },
          {
            ratio: '16_9',
            url:
              'https://s1.ticketm.net/dam/a/a1c/6b5bfe16-4a07-4d42-a817-b94243f9aa1c_1325381_TABLET_LANDSCAPE_16_9.jpg',
            width: 1024,
            height: 576,
            fallback: false,
          },
          {
            ratio: '16_9',
            url:
              'https://s1.ticketm.net/dam/a/a1c/6b5bfe16-4a07-4d42-a817-b94243f9aa1c_1325381_RETINA_LANDSCAPE_16_9.jpg',
            width: 1136,
            height: 639,
            fallback: false,
          },
          {
            ratio: '16_9',
            url:
              'https://s1.ticketm.net/dam/a/a1c/6b5bfe16-4a07-4d42-a817-b94243f9aa1c_1325381_TABLET_LANDSCAPE_LARGE_16_9.jpg',
            width: 2048,
            height: 1152,
            fallback: false,
          },
          {
            ratio: '4_3',
            url:
              'https://s1.ticketm.net/dam/a/a1c/6b5bfe16-4a07-4d42-a817-b94243f9aa1c_1325381_CUSTOM.jpg',
            width: 305,
            height: 225,
            fallback: false,
          },
          {
            ratio: '16_9',
            url:
              'https://s1.ticketm.net/dam/a/a1c/6b5bfe16-4a07-4d42-a817-b94243f9aa1c_1325381_RETINA_PORTRAIT_16_9.jpg',
            width: 640,
            height: 360,
            fallback: false,
          },
          {
            ratio: '3_2',
            url:
              'https://s1.ticketm.net/dam/a/a1c/6b5bfe16-4a07-4d42-a817-b94243f9aa1c_1325381_TABLET_LANDSCAPE_3_2.jpg',
            width: 1024,
            height: 683,
            fallback: false,
          },
          {
            ratio: '16_9',
            url:
              'https://s1.ticketm.net/dam/a/a1c/6b5bfe16-4a07-4d42-a817-b94243f9aa1c_1325381_EVENT_DETAIL_PAGE_16_9.jpg',
            width: 205,
            height: 115,
            fallback: false,
          },
        ],
        sales: {
          public: {
            startTBD: false,
            startTBA: false,
          },
          presales: [
            {
              startDateTime: '2020-10-05T13:00:00Z',
              endDateTime: '2021-01-03T19:00:00Z',
              name: 'Resale',
            },
          ],
        },
        dates: {
          start: {
            localDate: '2021-01-03',
            localTime: '13:00:00',
            dateTime: '2021-01-03T18:00:00Z',
            dateTBD: false,
            dateTBA: false,
            timeTBA: false,
            noSpecificTime: false,
          },
          timezone: 'America/New_York',
          status: {
            code: 'offsale',
          },
          spanMultipleDays: false,
        },
        classifications: [
          {
            primary: true,
            segment: {
              id: 'KZFzniwnSyZfZ7v7nE',
              name: 'Sports',
            },
            genre: {
              id: 'KnvZfZ7vAdE',
              name: 'Football',
            },
            subGenre: {
              id: 'KZazBEonSMnZfZ7vFE1',
              name: 'NFL',
            },
            type: {
              id: 'KZAyXgnZfZ7v7l1',
              name: 'Group',
            },
            subType: {
              id: 'KZFzBErXgnZfZ7vA7d',
              name: 'Team',
            },
            family: false,
          },
        ],
        promoter: {
          id: '705',
          name: 'NFL REGULAR SEASON',
          description: 'NFL REGULAR SEASON / NTL / USA',
        },
        promoters: [
          {
            id: '705',
            name: 'NFL REGULAR SEASON',
            description: 'NFL REGULAR SEASON / NTL / USA',
          },
        ],
        info:
          'All patrons, regardless of age, require a ticket No refunds or exchanges',
        pleaseNote:
          'All patrons, regardless of age, require a ticket No refunds or exchanges',
        priceRanges: [
          {
            type: 'standard',
            currency: 'USD',
            min: 90.0,
            max: 835.0,
          },
        ],
        products: [
          {
            name: 'NFL Parking: Bucs v Falcons',
            id: 'vvG1VZp6dFl_Sx',
            url:
              'https://www.ticketmaster.com/nfl-parking-bucs-v-falcons-tampa-florida-01-03-2021/event/0D005870C8AD9CE2',
            type: 'Parking',
          },
          {
            name: 'NFL Parking: Bucs v Falcons',
            id: 'vvG1VZpolSbkGt',
            url:
              'https://www.ticketmaster.com/nfl-parking-bucs-v-falcons-tampa-florida-01-03-2021/event/0D00591AF3606329',
            type: 'Parking',
            classifications: [
              {
                primary: true,
                segment: {
                  id: 'KZFzniwnSyZfZ7v7nE',
                  name: 'Sports',
                },
                genre: {
                  id: 'KnvZfZ7vA7A',
                  name: 'Miscellaneous',
                },
                subGenre: {
                  id: 'KZazBEonSMnZfZ7vFIt',
                  name: 'Miscellaneous',
                },
                type: {
                  id: 'KZAyXgnZfZ7v7nI',
                  name: 'Undefined',
                },
                subType: {
                  id: 'KZFzBErXgnZfZ7v7lJ',
                  name: 'Undefined',
                },
                family: false,
              },
            ],
          },
        ],
        seatmap: {
          staticUrl:
            'https://maps.ticketmaster.com/maps/geometry/3/event/0D005914DF255535/staticImage?type=png&systemId=HOST',
        },
        accessibility: {
          ticketLimit: 4,
        },
        ticketLimit: {
          info: 'There is an overall 6 ticket limit for this event.',
        },
        ageRestrictions: {
          legalAgeEnforced: false,
        },
        _links: {
          self: {
            href: '/discovery/v2/events/vvG1VZpoKLa4fg?locale=en-us',
          },
          attractions: [
            {
              href: '/discovery/v2/attractions/K8vZ9171oCV?locale=en-us',
            },
            {
              href: '/discovery/v2/attractions/K8vZ9171ou0?locale=en-us',
            },
          ],
          venues: [
            {
              href: '/discovery/v2/venues/KovZpZAFnl1A?locale=en-us',
            },
          ],
        },
        _embedded: {
          venues: [
            {
              name: 'Raymond James Stadium',
              type: 'venue',
              id: 'KovZpZAFnl1A',
              test: false,
              url:
                'https://www.ticketmaster.com/raymond-james-stadium-tickets-tampa/venue/106526',
              locale: 'en-us',
              images: [
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dbimages/5858v.gif',
                  width: 205,
                  height: 115,
                  fallback: false,
                },
              ],
              postalCode: '33607',
              timezone: 'America/New_York',
              city: {
                name: 'Tampa',
              },
              state: {
                name: 'Florida',
                stateCode: 'FL',
              },
              country: {
                name: 'United States Of America',
                countryCode: 'US',
              },
              address: {
                line1: '4201 North Dale Mabry Highway',
              },
              location: {
                longitude: '-82.503474',
                latitude: '27.975976',
              },
              markets: [
                {
                  name: 'Tampa',
                  id: '21',
                },
              ],
              dmas: [
                {
                  id: 396,
                },
              ],
              boxOfficeInfo: {
                phoneNumberDetail:
                  'Stadium Office Number: Tampa Bay Bucaneers: (813)879-2827 Buccaneer Groups Sales:(813)870-2700 (ask for Group Sales) Stadium Jumping Inc: (813)253-2782 USF Football: 1-800-GOBULLS Outback Bowl: (813)874-2695',
                openHoursDetail:
                  'The ticket office located on property at the Raymond James Stadium is open day of event only. The various organizations that use Raymond James Stadium have varying hours of operation. The number(s) for these organizations are listed under "Box Office Phone Numbers".',
                acceptedPaymentDetail:
                  'TAMPA BAY BUCCANEERS: Cash, Visa, MasterCard, American Express & Discover / USF FOOTBALL: Cash, Visa, MasterCard, American Express / STADIUM JUMPING: Cash / All Other Events: Cash',
                willCallDetail:
                  'Location: box office (south end of the staduim) Opens: day of event (Please contact the proper organization for specific times)',
              },
              parkingDetail:
                'Location: around Stadium Charge: - $25.00 Tampa Bay Buccaneers - $25.00 Concerts - $25.00 Outback Bowl - $15.00 USF Football Others Events - varies Patrons with accessible needs should contact the stadium at (813)350-6500 for specific information regarding parking. Accessible parking is available for purchase on the day of the event only - not available for advance purchase.',
              accessibleSeatingDetail:
                'This is an accessible venue. Raymond James Stadium would like for you to know that is fraud if you purchase an accessible ticket knowing you are not eligible for accessible seating.',
              generalInfo: {
                generalRule:
                  'Items NOT allowed: - Containers including cans,bottles,glasses, and coolers - Food or drink - Umbrellas or anything that would obstruct a fan\'s view - Strollers - Weapons/fireworks - Poles/Sticks(except those to assist disabled guests) - Objects that may become missiles or projectiles - Objects that obstruct guests view or interfere with a guests ability to enjoy the event (ie boom boxes and whistles) - Horns of any type - Lasers - Thunder sticks - Footballs - Skates, Skateboards, Cycles (bi-, tri-, or uni-) - Pets (except assistive animals) - Recording Devices, video cameras, cameras with lenses longer than 12" - No Re-entry - Large bags or purses - Backpacks - Seat Cushions - Banners or Flags with sticks or poles Items Allowed : - binoculars - cameras - lenses under 12" - blankets and towels if unrolled or unfolded - small/handheld radios or TVs with earphones - hats - banners/flags WITHOUT sticks or poles - empty spray bottle - ponchos (if worn or carried over the arm or in original factory sealed package) - fanny packs - empty handheld cooling fans (misters) - small megaphones - 1 Clear Bag no larger than 12" x 6" x 12" and 1 Small Clutch bag no larger than 4.5" x 6.5" NOTES: - You and your belongings may be searched upon entry into the stadium, and prohibited items may be confiscated. By tendering this ticket and entering the stadium, you consent to such searches and waive any related claims that you might have against the NFL, its Member Clubs, its affiliates, or its agents. If you elect not to consent to these searches, you will be denied entry into the stadium. - Prohibited items will NOT be stored at the gates. They must be returned to your vehicle or thrown away. - Contraband items will not be permitted into the stadium and cannot be stored at the stadium. They must be returned to the car or thrown away. - Banners must meet the stadium\'s code of good taste and approved by a TSA stadium manager. - There is no stadium re-entry, if you leave the stadium, you will NOT be permitted to re-enter. - Flash photography may not be allowed for some events. ** Stadium personnel will inspect and open any items allowed in facility. This policy is for the safety of all in attendance ** Actions Prohibited in Raymond James Stadium: - Smoking Policy: Smoking is NOT permitted while seated inside the stadium (except in designated locations) - Throwing or kicking any objects - Standing on chairs - Stepping over chair backs - Standing or sitting in thest areas: main level, club level or upper level walkways, aisles, ramps and chair backs - Disorderly conduct including public intoxication, fighting and profanity - Abuse of intoxicants - Spitting tobacco juice - Placing cups on any walls - Running or jogging - Entering field without proper credential NOTE: Infractions may warrant ejection and/or arrest. Actions & Items NOT Permitted in the Parking Lots: - Weapons or fireworks - Infringing on another guests area when tailgating - Saving parking spaces - Throwing or kicking of balls or other objects - Disorderly conduct (including profanity) - Running or jogging - Tents without proper permits or approval - Picketing or political campaigning - Distributing handbills or pamphlets - All cars are subject to search',
                childRule:
                  'FOR TAMPA BAY BUCANEERS: Everyone must have a ticket to enter. FOR USF FOOTBALL: All persons over three (3) years of age must have a paid ticket for admittance. FOR OUTBACK BOWL: Ages 0-2 are free if on lap (no ticket is required). If child has reached their 3rd birthday, they must have a ticket to enter. OTHER EVENTS: policy varies',
              },
              upcomingEvents: {
                _total: 3,
                ticketmaster: 3,
              },
              _links: {
                self: {
                  href: '/discovery/v2/venues/KovZpZAFnl1A?locale=en-us',
                },
              },
            },
          ],
          attractions: [
            {
              name: 'Tampa Bay Buccaneers',
              type: 'attraction',
              id: 'K8vZ9171oCV',
              test: false,
              url:
                'https://www.ticketmaster.com/tampa-bay-buccaneers-tickets/artist/806026',
              locale: 'en-us',
              externalLinks: {
                twitter: [
                  {
                    url: 'https://twitter.com/Buccaneers',
                  },
                ],
                facebook: [
                  {
                    url: 'https://www.facebook.com/tampabaybuccaneers',
                  },
                ],
                wiki: [
                  {
                    url: 'https://en.wikipedia.org/wiki/Tampa_Bay_Buccaneers',
                  },
                ],
                instagram: [
                  {
                    url: 'https://www.instagram.com/buccaneers/',
                  },
                ],
                homepage: [
                  {
                    url: 'https://www.buccaneers.com/',
                  },
                ],
              },
              aliases: [
                'tampabay bucs',
                'bucaneers',
                'tampa bay buccaneers',
                'tampa bay buc',
                'tampa bay bucaneers',
                'tampa bay bucs',
              ],
              images: [
                {
                  ratio: '16_9',
                  url:
                    'https://s1.ticketm.net/dam/a/a1c/6b5bfe16-4a07-4d42-a817-b94243f9aa1c_1325381_RECOMENDATION_16_9.jpg',
                  width: 100,
                  height: 56,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url:
                    'https://s1.ticketm.net/dam/a/a1c/6b5bfe16-4a07-4d42-a817-b94243f9aa1c_1325381_ARTIST_PAGE_3_2.jpg',
                  width: 305,
                  height: 203,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url:
                    'https://s1.ticketm.net/dam/a/a1c/6b5bfe16-4a07-4d42-a817-b94243f9aa1c_1325381_RETINA_PORTRAIT_3_2.jpg',
                  width: 640,
                  height: 427,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url:
                    'https://s1.ticketm.net/dam/a/a1c/6b5bfe16-4a07-4d42-a817-b94243f9aa1c_1325381_TABLET_LANDSCAPE_16_9.jpg',
                  width: 1024,
                  height: 576,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url:
                    'https://s1.ticketm.net/dam/a/a1c/6b5bfe16-4a07-4d42-a817-b94243f9aa1c_1325381_RETINA_LANDSCAPE_16_9.jpg',
                  width: 1136,
                  height: 639,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url:
                    'https://s1.ticketm.net/dam/a/a1c/6b5bfe16-4a07-4d42-a817-b94243f9aa1c_1325381_TABLET_LANDSCAPE_LARGE_16_9.jpg',
                  width: 2048,
                  height: 1152,
                  fallback: false,
                },
                {
                  ratio: '4_3',
                  url:
                    'https://s1.ticketm.net/dam/a/a1c/6b5bfe16-4a07-4d42-a817-b94243f9aa1c_1325381_CUSTOM.jpg',
                  width: 305,
                  height: 225,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url:
                    'https://s1.ticketm.net/dam/a/a1c/6b5bfe16-4a07-4d42-a817-b94243f9aa1c_1325381_RETINA_PORTRAIT_16_9.jpg',
                  width: 640,
                  height: 360,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url:
                    'https://s1.ticketm.net/dam/a/a1c/6b5bfe16-4a07-4d42-a817-b94243f9aa1c_1325381_TABLET_LANDSCAPE_3_2.jpg',
                  width: 1024,
                  height: 683,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url:
                    'https://s1.ticketm.net/dam/a/a1c/6b5bfe16-4a07-4d42-a817-b94243f9aa1c_1325381_EVENT_DETAIL_PAGE_16_9.jpg',
                  width: 205,
                  height: 115,
                  fallback: false,
                },
              ],
              classifications: [
                {
                  primary: true,
                  segment: {
                    id: 'KZFzniwnSyZfZ7v7nE',
                    name: 'Sports',
                  },
                  genre: {
                    id: 'KnvZfZ7vAdE',
                    name: 'Football',
                  },
                  subGenre: {
                    id: 'KZazBEonSMnZfZ7vFE1',
                    name: 'NFL',
                  },
                  type: {
                    id: 'KZAyXgnZfZ7v7l1',
                    name: 'Group',
                  },
                  subType: {
                    id: 'KZFzBErXgnZfZ7vA7d',
                    name: 'Team',
                  },
                  family: false,
                },
              ],
              upcomingEvents: {
                _total: 2,
                ticketmaster: 2,
              },
              _links: {
                self: {
                  href: '/discovery/v2/attractions/K8vZ9171oCV?locale=en-us',
                },
              },
            },
            {
              name: 'Atlanta Falcons',
              type: 'attraction',
              id: 'K8vZ9171ou0',
              test: false,
              url:
                'https://www.ticketmaster.com/atlanta-falcons-tickets/artist/805897',
              locale: 'en-us',
              externalLinks: {
                twitter: [
                  {
                    url: 'https://twitter.com/AtlantaFalcons',
                  },
                ],
                facebook: [
                  {
                    url: 'https://www.facebook.com/atlantafalcons/',
                  },
                ],
                wiki: [
                  {
                    url: 'https://en.wikipedia.org/wiki/Atlanta_Falcons',
                  },
                ],
                instagram: [
                  {
                    url: 'https://www.instagram.com/atlantafalcons/',
                  },
                ],
                homepage: [
                  {
                    url: 'https://www.atlantafalcons.com/',
                  },
                ],
              },
              images: [
                {
                  ratio: '16_9',
                  url:
                    'https://s1.ticketm.net/dam/a/cc3/b7603d04-66ea-478c-9f00-d21630adacc3_1324961_TABLET_LANDSCAPE_16_9.jpg',
                  width: 1024,
                  height: 576,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url:
                    'https://s1.ticketm.net/dam/a/cc3/b7603d04-66ea-478c-9f00-d21630adacc3_1324961_TABLET_LANDSCAPE_LARGE_16_9.jpg',
                  width: 2048,
                  height: 1152,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url:
                    'https://s1.ticketm.net/dam/a/cc3/b7603d04-66ea-478c-9f00-d21630adacc3_1324961_TABLET_LANDSCAPE_3_2.jpg',
                  width: 1024,
                  height: 683,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url:
                    'https://s1.ticketm.net/dam/a/cc3/b7603d04-66ea-478c-9f00-d21630adacc3_1324961_EVENT_DETAIL_PAGE_16_9.jpg',
                  width: 205,
                  height: 115,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url:
                    'https://s1.ticketm.net/dam/a/cc3/b7603d04-66ea-478c-9f00-d21630adacc3_1324961_RECOMENDATION_16_9.jpg',
                  width: 100,
                  height: 56,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url:
                    'https://s1.ticketm.net/dam/a/cc3/b7603d04-66ea-478c-9f00-d21630adacc3_1324961_ARTIST_PAGE_3_2.jpg',
                  width: 305,
                  height: 203,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url:
                    'https://s1.ticketm.net/dam/a/cc3/b7603d04-66ea-478c-9f00-d21630adacc3_1324961_RETINA_PORTRAIT_16_9.jpg',
                  width: 640,
                  height: 360,
                  fallback: false,
                },
                {
                  ratio: '4_3',
                  url:
                    'https://s1.ticketm.net/dam/a/cc3/b7603d04-66ea-478c-9f00-d21630adacc3_1324961_CUSTOM.jpg',
                  width: 305,
                  height: 225,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url:
                    'https://s1.ticketm.net/dam/a/cc3/b7603d04-66ea-478c-9f00-d21630adacc3_1324961_RETINA_LANDSCAPE_16_9.jpg',
                  width: 1136,
                  height: 639,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url:
                    'https://s1.ticketm.net/dam/a/cc3/b7603d04-66ea-478c-9f00-d21630adacc3_1324961_RETINA_PORTRAIT_3_2.jpg',
                  width: 640,
                  height: 427,
                  fallback: false,
                },
              ],
              classifications: [
                {
                  primary: true,
                  segment: {
                    id: 'KZFzniwnSyZfZ7v7nE',
                    name: 'Sports',
                  },
                  genre: {
                    id: 'KnvZfZ7vAdE',
                    name: 'Football',
                  },
                  subGenre: {
                    id: 'KZazBEonSMnZfZ7vFE1',
                    name: 'NFL',
                  },
                  type: {
                    id: 'KZAyXgnZfZ7v7l1',
                    name: 'Group',
                  },
                  subType: {
                    id: 'KZFzBErXgnZfZ7vA7d',
                    name: 'Team',
                  },
                  family: false,
                },
              ],
              upcomingEvents: {
                _total: 3,
                ticketmaster: 3,
              },
              _links: {
                self: {
                  href: '/discovery/v2/attractions/K8vZ9171ou0?locale=en-us',
                },
              },
            },
          ],
        },
      },
      {
        name: 'Dallas Cowboys vs. San Francisco 49ers',
        type: 'event',
        id: 'vvG1YZp2XrPfSS',
        test: false,
        url:
          'https://www.ticketmaster.com/dallas-cowboys-vs-san-francisco-49ers-arlington-texas-12-20-2020/event/0C0058FF9E954CF3',
        locale: 'en-us',
        images: [
          {
            ratio: '3_2',
            url:
              'https://s1.ticketm.net/dam/a/7e4/6f79c7fd-ac9a-4dba-97a6-1a6be82407e4_1325121_TABLET_LANDSCAPE_3_2.jpg',
            width: 1024,
            height: 683,
            fallback: false,
          },
          {
            ratio: '3_2',
            url:
              'https://s1.ticketm.net/dam/a/7e4/6f79c7fd-ac9a-4dba-97a6-1a6be82407e4_1325121_RETINA_PORTRAIT_3_2.jpg',
            width: 640,
            height: 427,
            fallback: false,
          },
          {
            ratio: '16_9',
            url:
              'https://s1.ticketm.net/dam/a/7e4/6f79c7fd-ac9a-4dba-97a6-1a6be82407e4_1325121_EVENT_DETAIL_PAGE_16_9.jpg',
            width: 205,
            height: 115,
            fallback: false,
          },
          {
            ratio: '4_3',
            url:
              'https://s1.ticketm.net/dam/a/7e4/6f79c7fd-ac9a-4dba-97a6-1a6be82407e4_1325121_CUSTOM.jpg',
            width: 305,
            height: 225,
            fallback: false,
          },
          {
            ratio: '16_9',
            url:
              'https://s1.ticketm.net/dam/a/7e4/6f79c7fd-ac9a-4dba-97a6-1a6be82407e4_1325121_RETINA_LANDSCAPE_16_9.jpg',
            width: 1136,
            height: 639,
            fallback: false,
          },
          {
            ratio: '16_9',
            url:
              'https://s1.ticketm.net/dam/a/7e4/6f79c7fd-ac9a-4dba-97a6-1a6be82407e4_1325121_TABLET_LANDSCAPE_LARGE_16_9.jpg',
            width: 2048,
            height: 1152,
            fallback: false,
          },
          {
            ratio: '3_2',
            url:
              'https://s1.ticketm.net/dam/a/7e4/6f79c7fd-ac9a-4dba-97a6-1a6be82407e4_1325121_ARTIST_PAGE_3_2.jpg',
            width: 305,
            height: 203,
            fallback: false,
          },
          {
            ratio: '16_9',
            url:
              'https://s1.ticketm.net/dam/a/7e4/6f79c7fd-ac9a-4dba-97a6-1a6be82407e4_1325121_RECOMENDATION_16_9.jpg',
            width: 100,
            height: 56,
            fallback: false,
          },
          {
            ratio: '16_9',
            url:
              'https://s1.ticketm.net/dam/a/7e4/6f79c7fd-ac9a-4dba-97a6-1a6be82407e4_1325121_TABLET_LANDSCAPE_16_9.jpg',
            width: 1024,
            height: 576,
            fallback: false,
          },
          {
            ratio: '16_9',
            url:
              'https://s1.ticketm.net/dam/a/7e4/6f79c7fd-ac9a-4dba-97a6-1a6be82407e4_1325121_RETINA_PORTRAIT_16_9.jpg',
            width: 640,
            height: 360,
            fallback: false,
          },
        ],
        sales: {
          public: {
            startDateTime: '2020-09-03T15:00:00Z',
            startTBD: false,
            startTBA: false,
            endDateTime: '2020-12-20T19:00:00Z',
          },
          presales: [
            {
              startDateTime: '2020-09-03T15:00:00Z',
              endDateTime: '2020-09-04T04:00:00Z',
              name: 'Resale Onsale',
            },
          ],
        },
        dates: {
          start: {
            localDate: '2020-12-20',
            localTime: '12:00:00',
            dateTime: '2020-12-20T18:00:00Z',
            dateTBD: false,
            dateTBA: false,
            timeTBA: false,
            noSpecificTime: false,
          },
          timezone: 'America/Chicago',
          status: {
            code: 'onsale',
          },
          spanMultipleDays: false,
        },
        classifications: [
          {
            primary: true,
            segment: {
              id: 'KZFzniwnSyZfZ7v7nE',
              name: 'Sports',
            },
            genre: {
              id: 'KnvZfZ7vAdE',
              name: 'Football',
            },
            subGenre: {
              id: 'KZazBEonSMnZfZ7vFE1',
              name: 'NFL',
            },
            type: {
              id: 'KZAyXgnZfZ7v7l1',
              name: 'Group',
            },
            subType: {
              id: 'KZFzBErXgnZfZ7vA7d',
              name: 'Team',
            },
            family: false,
          },
        ],
        promoter: {
          id: '4635',
          name: 'SEATGEEK',
          description: 'SEATGEEK / NTL / USA',
        },
        promoters: [
          {
            id: '4635',
            name: 'SEATGEEK',
            description: 'SEATGEEK / NTL / USA',
          },
        ],
        pleaseNote:
          'Pod Integrity - Tickets will be distributed in seat blocks known as "pods" to maintain distance between groups who are not known to one another. Maintain pod integrity by only transferring tickets to family or friends within your trusted group. Each ticket holder should have their own mobile ticket on their device',
        products: [
          {
            name: 'PARKING: AT&T Stadium - Cowboys v 49ers',
            id: 'vvG1YZp2T06VDx',
            url:
              'https://www.ticketmaster.com/parking-att-stadium-cowboys-v-49ers-arlington-texas-12-20-2020/event/0C0058FFE41F4EE2',
            type: 'Parking',
            classifications: [
              {
                primary: true,
                segment: {
                  id: 'KZFzniwnSyZfZ7v7nE',
                  name: 'Sports',
                },
                genre: {
                  id: 'KnvZfZ7vA7A',
                  name: 'Miscellaneous',
                },
                subGenre: {
                  id: 'KZazBEonSMnZfZ7vFIt',
                  name: 'Miscellaneous',
                },
                type: {
                  id: 'KZAyXgnZfZ7v7nI',
                  name: 'Undefined',
                },
                subType: {
                  id: 'KZFzBErXgnZfZ7v7lJ',
                  name: 'Undefined',
                },
                family: false,
              },
            ],
          },
          {
            name:
              'PARKING: AT&T Stadium - Dallas Cowboys v San Francisco 49ers',
            id: 'vvG1YZp2TLG7B3',
            url:
              'https://www.ticketmaster.com/parking-att-stadium-dallas-cowboys-v-arlington-texas-12-20-2020/event/0C0058FFDF304E92',
            type: 'Parking',
            classifications: [
              {
                primary: true,
                segment: {
                  id: 'KZFzniwnSyZfZ7v7nE',
                  name: 'Sports',
                },
                genre: {
                  id: 'KnvZfZ7vA7A',
                  name: 'Miscellaneous',
                },
                subGenre: {
                  id: 'KZazBEonSMnZfZ7vFIt',
                  name: 'Miscellaneous',
                },
                type: {
                  id: 'KZAyXgnZfZ7v7nI',
                  name: 'Undefined',
                },
                subType: {
                  id: 'KZFzBErXgnZfZ7v7lJ',
                  name: 'Undefined',
                },
                family: false,
              },
            ],
          },
        ],
        seatmap: {
          staticUrl:
            'https://maps.ticketmaster.com/maps/geometry/3/event/0C0058FF9E954CF3/staticImage?type=png&systemId=HOST',
        },
        accessibility: {
          ticketLimit: 4,
        },
        ageRestrictions: {
          legalAgeEnforced: false,
        },
        _links: {
          self: {
            href: '/discovery/v2/events/vvG1YZp2XrPfSS?locale=en-us',
          },
          attractions: [
            {
              href: '/discovery/v2/attractions/K8vZ9171oG0?locale=en-us',
            },
            {
              href: '/discovery/v2/attractions/K8vZ9171oMV?locale=en-us',
            },
          ],
          venues: [
            {
              href: '/discovery/v2/venues/KovZpZAJvndA?locale=en-us',
            },
          ],
        },
        _embedded: {
          venues: [
            {
              name: 'AT&T Stadium',
              type: 'venue',
              id: 'KovZpZAJvndA',
              test: false,
              url:
                'https://www.ticketmaster.com/att-stadium-tickets-arlington/venue/99096',
              locale: 'en-us',
              aliases: ['dallas cowboys'],
              images: [
                {
                  ratio: '4_3',
                  url:
                    'https://s1.ticketm.net/dam/v/e1d/da5fbe87-c0fd-4891-b7af-2aa70356de1d_391261_SOURCE.jpg',
                  width: 3264,
                  height: 2448,
                  fallback: false,
                  attribution: 'CC BY 3.0 via Wikipedia',
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dbimages/18437v.jpg',
                  width: 205,
                  height: 115,
                  fallback: false,
                },
              ],
              postalCode: '76011',
              timezone: 'America/Chicago',
              city: {
                name: 'Arlington',
              },
              state: {
                name: 'Texas',
                stateCode: 'TX',
              },
              country: {
                name: 'United States Of America',
                countryCode: 'US',
              },
              address: {
                line1: 'One AT&T Way',
              },
              location: {
                longitude: '-97.09345578',
                latitude: '32.74790427',
              },
              markets: [
                {
                  name: 'Dallas - Fort Worth and More',
                  id: '5',
                },
                {
                  name: 'All of US',
                  id: '51',
                },
              ],
              dmas: [
                {
                  id: 200,
                },
                {
                  id: 212,
                },
                {
                  id: 218,
                },
                {
                  id: 261,
                },
                {
                  id: 326,
                },
                {
                  id: 386,
                },
                {
                  id: 405,
                },
                {
                  id: 415,
                },
              ],
              social: {
                twitter: {
                  handle: '@CowboysStadium',
                },
              },
              boxOfficeInfo: {
                phoneNumberDetail:
                  'AT&T Stadium Ticket office: (817) 892-5000 AT&T Stadium/Art Tours Ticket Office: (817) 892-8687',
                openHoursDetail: '9-5 Monday-Thursday, and 9-4 Friday',
                acceptedPaymentDetail: 'Cash, MC, Visa, Amex',
                willCallDetail:
                  "Will Call Will Call is available at AT&T Stadium Ticket Office locations at Entry A on the northeast side of the stadium and at Entry F on the southwest side of the stadium. Will Call ticket windows open three (3) hours prior to most events. To claim tickets at Will Call, a photo ID and the credit card used to purchase the tickets must be presented. For Cowboys games, only the account holder of record may pick up tickets. A person other than the account holder may pick up tickets from Will Call provided that they present written and signed authorization from the account holder along with a copy of the account holder's photo ID.",
              },
              parkingDetail:
                "Parking prices will vary by event. PARKING LOT INFORMATION: When purchasing tickets for the following sections we recommend purchasing your parking pass in the following lots: SECTIONS: 136-134, 235-243, 336-343, 443-452 = LOT 4, LOT 10 SECTIONS: 128-135, 228-234, 329-335, 436-443 = LOT 10, LOT 11 SECTIONS: 120-127, 218-227, 318-328, 420-435 = LOT 11, LOT 12, LOT 13 SECTIONS: 111-119, 210-217, 311-317, 413-419 = LOT 12, LOT 11, LOT 13 SECTIONS: 145-150, 244-250, 344-350, 453-460 = LOT 13, LOT 12, LOT 4 SECTIONS: 101-110, 201-209, 301-310, 401-412 = LOT 14, LOT 12, LOT 13 Lots are based on Availability All lots have accessible spaces. For ADA parking, purchase a regular parking pass and display your ADA placard or license plate. Parking Spots are for Vehicles Only Parking spots are for vehicles only. Drive aisles must remain clear at all times. No items (coolers, tents, tables, chairs, etc.) of any kind may be placed on the ground behind, in front of or around parked vehicles. These items are permitted only in designated tailgating spaces. RV/Oversized Vehicle Parking All RVs and oversized vehicles (any vehicle longer than 19 feet) must be parked in Lot 14. All other lots are for standard size vehicles only. An RV/Oversized vehicle parking pass is required. Bus Parking All buses must be parked in Lot 15. All other lots are for standard size vehicles only (Lot 14 is for RVs and oversized vehicles). A Bus parking pass is required. Accessible/Disabled Parking Accessible parking spaces are available in each lot and are issued on a first come/first served basis. You must have a parking pass for that designated lot and a state-issued person with disabilities plate or placard to park in an accessible parking space. Violators will be subject to citation and possible revocation of season parking privileges. Courtesy Shuttle Carts Courtesy shuttle carts will serve each lot and provide transportation for guests with limited mobility or those who need assistance. Passenger Drop-Off Zones There are two passenger drop-off zones at the stadium. One is located on the north side off of Randol Mill Road in Lot 1 and one located on the south side off of Cowboys Way in Lot 6. Limousine Parking Limousines will be able to drop off passengers in Lot 1 and in Lot 6. Limousine parking is available on Randol Mill Road and on Cowboys Way. A limousine parking pass is required. Taxis A taxi stand is located outside the West Plaza near Collins Street and Cowboys Way. Vehicle Security Inspection All vehicles parking within the stadium's secured parking perimeter are subject to a security inspection before being allowed to park. Parking Parking areas are generally open four (4) to five (5) hours prior to Cowboys games. For other lot opening times, visit AT&T Stadium online at http://stadium.dallascowboys.com or call the Guest Services Hotline at (817) 892-4161. For Cowboys games prepaid parking passes are required for access to Cowboys Season Parking lots (non-cash lots). For personalized directions to prepaid and cash parking lots, go to http://www.dallascowboysmaps.com. Parking passes are valid only for the event or game noted on the pass and for the specific lot. All vehicles parked within the stadium security perimeter are subject to a security screening prior to admission to the parking area.",
              accessibleSeatingDetail:
                'Accessible Seating in all levels of the venue. ADA/Accessibility AT&T Stadium is committed to guests with disabilities. Our facilities are fully accessible and we provide a wide range of services and amenities for guests with special needs. AT&T Stadium is designed with accessible parking, accessible vehicle drop off areas, power assisted doors, restrooms, concessions, water fountains, ATMs, and seating areas. Guests can receive more information by visiting one of our Guest Services Centers located on the concourse behind Sections 219, 244, 420 and 451 or at a Concierge desk located on the club and suite levels. In order to provide maximum flexibility in our wheelchair accessible seating areas, folding chairs will be provided for companion seating. ADA Ticket Fraud ADA ticket fraud includes, but is not limited to, the misrepresentation of a disability. Management reserves the right to take appropriate action regarding misrepresentation, which may result in relocation, revocation of tickets or ejection. Wheelchairs A limited number of wheelchairs are available for transporting guests from the gates to their stadium seating location. Guests are asked to supply their own wheelchair if they need one for the duration of the event. Guests may arrange for wheelchair assistance by contacting an event staff member at any entrance. In addition, wheelchair escort reservations can be made, in advance, by calling the Guest Services Hotline at (817) 892-4161. Guests needing assistance after the event should contact an event staff member, security personnel or visit one of the Guest Services Centers located on the concourse behind Sections 219, 244, 420 and 451. Guests in suite and club areas should contact the Concierge desk on their level to request a wheelchair escort or additional assistance. HEARING IMPAIRED PATRONS -------------------------------------- - Sell Regular Seating - Hearing Impaired Devices and Information Available at Guest Services Centers Located at Sections 219, 244, 420, and 451 or at a Concierge Desk on the Club and Suite Levels',
              generalInfo: {
                generalRule:
                  'Alcohol Policy AT&T Stadium and Legends Hospitality Management and stadium security work hard to promote responsible consumption of alcoholic beverages. Our alcohol policies are listed below. All Guests purchasing alcohol, who appear to be less than 30 years old, must present a valid ID. No alcohol will be sold to guests who appear intoxicated. There will be a two (2) beer limit, per transaction, at concession stands and portable concessions. There will be a one (1) beer limit, per person, by a roving vendor. Alcohol sales on the concourses and in the seating areas will terminate at the end of the third quarter. Management reserves the right to cut off alcohol sales at its discretion. Guests passing alcohol to minors will be ejected and subject to arrest. Guests possessing alcohol, who do not have proof of being at least 21 years of age, may be ejected. We reserve the right to refuse the sale of alcohol to any guest. Alcoholic beverages may not be brought into the stadium. Any attempt to bring alcohol into the stadium will be considered a violation of the Code of Conduct and may result in the guest being ejected, arrested or tickets being revoked. Animals Animals are not permitted in AT&T Stadium with the exception of service animals and service animals in training. ATMs Bank of America Automated Teller Machines There are several Bank of America ATMs located on the concourses. Bag Search AT&T Stadium prohibits bags larger than 12" x 12" x 12" from being brought into the stadium. All bags are subject to search upon entry and are subject to additional searches within the stadium. This policy is in effect for all guests of AT&T Stadium. Banners and Signs Signs must be handheld, event-related, in good taste and cannot obstruct another guest\'s view. They may not contain commercial messages, logos or political endorsements and may not be hung on the stadium structure. Signs on poles or sticks, constructed of wood or metal material, are also not permitted. Management reserves the right to confiscate signs that are in violation of stadium policy. Bottles and Cans Bottles, cans or beverage containers of any kind are not allowed into AT&T Stadium. A search will be conducted at the gates to prevent these and other prohibited items from entering the stadium. Please refer to Prohibited Items and Behavior for more information. Exceptions will be made for those with medical requirements and/or special needs. Cameras Cameras (still only) are permitted inside AT&T Stadium as long as their use does not interfere with the game or other guests\' enjoyment of the event. Video cameras and video recording of events at AT&T Stadium is prohibited. Cell Phones Cellular phones are allowed in the stadium as long as their use does not interfere with other guests\' enjoyment of the event. Code of Conduct AT&T Stadium Management is committed to creating a safe, comfortable and enjoyable experience for our guests. Our staff will proactively support an environment free from the following behaviors: Abusive, foul or disruptive language and obscene gestures Intoxication or other signs of impairment related to alcohol consumption Fighting, taunting or threatening remarks or gestures Sitting in a location other than the guests ticketed seat Displays of affection not appropriate in a public setting Obscene or indecent clothing Any disruption to the progress of the event by guest\'s actions Continuing inappropriate behavior may result in the guest being ejected, arrested by police, or having his/her tickets revoked. All Season Ticket Holders are responsible for their conduct as well as the conduct of their guests and/or persons using their tickets. Guests are encouraged to report issues and concerns to a nearby event staff member or by calling the Guest Services hotline at (817) 892-4161. Compliments, Complaints and Comments Guests with a compliment, complaint or comment may express it, in person, at one of the Guest Services Centers located on the concourse behind Sections 219, 244, 420 and 451. Club and suite guests are encouraged to fill out a comment card at the Concierge desks located on each club and suite level. Additional written feedback may be directed to guestcomments@dallascowboys.net or by calling the Guest Services Hotline at (817) 892-4161. Concessions Legends Hospitality Management is the concessionaire for AT&T Stadium. For your convenience, all concession stands at AT&T Stadium accept all major credit and debit cards. Concierge Desks Concierge desks are located on each club and suite level with lost and found, lost children, stadium directions, emergencies, general information and accommodations for guests with disabilities. These desks are staffed with knowledgeable attendants ready to assist guests needing information. Designated Driver Program As part of our commitment to public safety, guests can receive a "Designated Driver" wristband and coupon for a free soft drink by registering as a Designated Driver at one of the Guest Services Centers located on the concourse behind Sections 219, 244, 420 and 451 or Concierge desks located on the club and suite levels. Elevators AT&T Stadium is equipped with public elevators at the following locations: Entry A, E, F, K (Club and Suite guests only) Main Concourse behind Sections 203, 217, 228, 242 Mezzanine Level behind Sections 304, 317, 329, 342 Upper Concourse behind Sections 405, 418,.437, 449 Emergencies Should you need immediate assistance, please notify the nearest event staff member, security personnel, police officer, visit a Guest Services Center located on the concourse behind Sections 219, 244, 420 and 451 or or a Concierge desk located on the club and suite levels. Guests are also encouraged to call our Guest Services Hotline at (817) 892-4161for assistance. In the event of a serious emergency at AT&T Stadium, all event staff, event security, police and Arlington Public Safety emergency response agencies are ready and available to assist all guests, including guests with disabilities. Pertinent information regarding the emergency situation and evacuation procedures will be provided over the public address system and on stadium televisions and scoreboards. Entrances There are ten (10) guest entrances to AT&T Stadium. These locations are as follows: Entry A: Northeast corner of the stadium. Club & Suite guests only. Pro Shop entrance (all guests) Entries B, C and D: East side of stadium adjacent to East Plaza Entry E: Southeast corner of the stadium. Club & Suite guests only. Entry F: Southwest corner of the stadium. Club & Suite guests only. Entries G, H, J: West side of the stadium adjacent to West Plaza Entry K: Northwest corner of the stadium. Club & Suite guests only. Escalators There are escalators that provide access from the Main Concourse up to the Upper Concourse. These are located on the east side of the stadium at Entry B (behind Section 244), and the west side of the stadium at Entry G (behind Section 219). Club and Suite guests may use the escalators at Entry A to access the Main Club on the north/visitor side of the stadium. Additional escalators for Club and Suite guests are located at Entry E and Entry K and provide access to the Silver Club Level. Family Restrooms Family restrooms are designed for the use of guests with small children and guests with disabilities. These restrooms are located throughout the stadium on all concourses and on each club and suite level. All family restrooms are accessible and equipped with baby changing tables. First Aid There are four (4) First Aid locations at the stadium where medical treatment is available: Main Concourse - Behind Sections 219 and 244. Upper Concourse - Behind Sections 420 and 451 Emergency Medical Technicians with Automatic External Defibrillators (AEDs) are also positioned throughout the stadium and are ready to respond to emergencies. Guests needing medical assistance are encouraged to contact a nearby event staff or security staff member. Guests needing assistance may also call the Guest Services Hotline at (817) 892-4161. Football Return Policy Footballs that enter the seating area during pre-game & warm-up periods must be returned to the field. Any balls that enter the seating area during regular game play may be kept by guests. Gate Opening Times AT&T Stadium will open three (3) hours prior to the start of Cowboys games. The plazas, concourses, clubs and suites will open at that time. Stadium opening times may be adjusted on an event-by-event basis. Guests may check the stadium opening schedule for specific events by visiting www.dallascowboys.com. Guest Services Centers There are four (4) Guest Services Centers located on the concourse behind Sections 219, 244, 420 and 451. Guest Services Centers assist guests with lost and found, lost children, stadium directions, emergencies, general information and accommodations for guests with disabilities. These centers are staffed with knowledgeable attendants ready to assist guests needing information. Housekeeping If you see or experience a housekeeping problem or maintenance concern, please notify your nearest event staff member, visit a Guest Services Center located on the concourse behind Sections 219, 244, 420 and 451or a Concierge desk located on each club and suite level. Guests may also call our Guest Services Hotline at (817) 892-4161 to report an issue during an event. A member of AT&T Stadium staff will be immediately dispatched to the location to remedy the situation. If you would like to voice a concern, post-event, please call the Guest Services Hotline at (817) 892-4161. Lost And Found All Guests looking to claim or report lost items during an event should visit one of the Guest Services Centers located on the concourse behind Sections 219, 244, 420 and 451 or a Concierge desk located on each club and suite level. Guests inquiring about lost items at previous events should contact the Guest Services Hotline at (817) 892-4161 or via email to lostandfound@dallascowboys.net. Items lost at prior games are held in a locked storage area for 30 days and are then either disposed of or donated to an appropriate charitable organization. AT&T Stadium cannot be held responsible for lost or damaged items. Lost Children and Guests Lost children and guests should be taken to one of the Guest Services Center located on the concourse behind Sections 219, 244, 420 and 451 or a Concierge desk located on each club and suite level. Parents looking for a lost child should check with the nearest event staff member, Guest Services Center or Concierge desk for assistance. For safety reasons, AT&T Stadium is unable to make stadium-wide announcements for lost children or guests. Media Entrance The entrance for the media is located on the northwest side of the stadium just west of the Entry K. Only members of the media with proper credentials may use this entrance. Upon entering, bags will be inspected and tagged accordingly. Merchandise Merchandise stands are located throughout the stadium. For your convenience, all points of sale accept all major credit and debit cards. The Cowboys Pro Shop is located on the northwest side of the stadium at Entry A or from the Main Concourse behind Section 242. The Pro Shop is open seven (7) days a week. The daily operating hours are: Monday-Saturday, 10 am to 6 pm, and Sunday, 11 am to 5 pm. Police Room The Police Room is located on the Event Level near the loading dock on the Eeast side of the stadium. Any inquiries about someone who has been removed by police should be referred to Guest Services Centers located on the concourse behind Sections 219, 244, 420 and 451 or a Concierge desk located on each club and suite level. Prohibited Items and Behavior In conjunction with the National Football League and for the safety of our guests and employees, the following are prohibited: Smoking Bags larger than 12 x 12 x 12 Alcohol Animals (except service animals to aid guests with disabilities) Bottles, cans and beverage containers of any kind Thermoses Food items* Umbrellas (compact umbrellas are permitted but may not be used inside the stadium grounds) Fireworks, firearms and weapons of any kind Footballs Laser Pointers Noisemakers Signs or flags on sticks or poles Video cameras and the use of video capable devices Ticket scalping Abusive, foul or disruptive language Throwing objects Trespassing, soliciting, peddling and loitering Any other item or action deemed dangerous or inappropriate Guests who appear to be inebriated and unmanageable will not be permitted admittance into the stadium. Any attempt to bring alcohol into the stadium will be considered a violation of the Code of Conduct and may result in the guest being ejected, arrested or tickets being revoked. All persons and/or their belongings are subject to search. Violators of the rules of any State or City laws will be refused admission, asked to leave or ejected from stadium property. *Exceptions will be made for those with medical requirements and/or special needs. Radios Hand-held radios for personal use are allowed in the stadium as long as they are not larger than 12" x 12" x 12" and do not distract from the enjoyment of other guests. For the comfort of those seated around you, headphones are required. Re-Entry Guests may exit and re-enter the stadium using the same ticket. Guest must exit through a designated EXIT gate and have their event ticket scanned out in order to be readmitted. Guests reentering the stadium will be required to go through the security search process for a second time. Guests who leave the stadium and do not have their ticket scanned out will not be permitted to reenter the stadium using the same ticket. Restrooms There are public restrooms (men, women and family) conveniently located throughout the stadium. All restrooms are accessible to our guests with disabilities. Safe-in-the-Seat Program Children and Guests can receive a free ID bracelet featuring a space to write your seat location. The Safe in the Seat Program aids in reuniting lost children and guests with their appropriate parties. These bracelets are available at all Guest Services Centers located on the concourse behind Sections 219, 244, 420 and 451 or a Concierge desk located on each club and suite level. Safe in the Seat bracelets are not valid in place of a ticket. For help with a lost child or guest, please notify your nearest event staff member, security personnel or Guest Services Center. Smoking In accordance with City of Arlington regulations, smoking is PROHIBITED IN ALL AREAS OF THE STADIUM. Guests wishing to smoke may do so only in designated smoking areas. Designated smoking areas are in the following locations: East and West plazas (at least 50 feet from the stadium entrance) Outside Entries A, E, F, & K (Club & Suite guests only) Violators of this policy may be ejected from the stadium. All Season Ticket Holders are responsible for their conduct as well as the conduct of their guests and/or persons using their tickets. Stroller Policy Strollers are permitted at AT&T Stadium. However, their use cannot inhibit guest movement or block any aisles. Smaller, umbrella-style strollers can be stored underneath a seat as long as it does not create an obstruction for other guests. Larger strollers can be checked at the nearest Guest Services Centers located on the concourse behind Sections 219, 244, 420 and 451 or Concierge desks located on the club and suite levels Suites For information on AT&T Stadium luxury suites, please call 817.892.4470, email suites@dallascowboys.net or visit www.dallascowboys.com for the latest suite information. Taxi Service Taxicabs are available at the at the entrance to the West Plaza off of Collins Avenue and Cowboys Way. Taxis are staged at this location for drop off pre-event and pick-up post-event. Television Broadcasts Preseason games will air on selected networks, local or national, depending on the game date. All Cowboys regular season games are controlled by the NFL\'s national network partners (NBC, CBS, FOX, ESPN and NFL Network). Check local listings for channels and times. Tickets The AT&TStadium Ticket Office is located at Entry A on the northeast side of the stadium, open Monday through Friday, 9 am to 5 pm. Hours are extended to accommodate the needs of specific events. For ticket information, call the AT&T Stadium Ticket Office at (817) 892-5000 or Ticketmaster at 800.745.3000 Ticket Policy We value the enthusiasm of our guests, but ask that all guests exercise good judgment and observe our Code of Conduct. Guests should respect the rights of others by displaying proper behavior and courtesy. All Season Ticket Holders are responsible for their conduct as well as the conduct of their guests and persons using their tickets. Violations, by Season Ticket Holders or anyone, may result in revoked account privileges without reimbursement to the Season Ticket Holder, persons using their tickets and/or the holder of the ticket license at the discretion of the Dallas Cowboys and AT&T Stadium. For more information regarding tickets, you can contact the AT&T Stadium Ticket Office at (817) 892-5000 or via email at tickets@dallascowboys.net. Guests are required to possess their ticket, at all times, once they enter the stadium. Guests must show their ticket to any stadium staff member when requested to do so. Failure to produce a valid game day ticket may result in ejection from the stadium.',
                childRule:
                  "Ages 1 year and older must have a ticket Children's Ticket Policy For Cowboys games and most events, children under the age of one (1) year old do not need a ticket to enter AT&T Stadium. They must be seated on an adult's lap and not interfere with the sightlines of other guests. Other events may require all children, regardless of age, to have a ticket to enter the stadium. Stadium Tours ALL guests, including children 5 and under, must have a tour ticket to enter the stadium. For children 5 and under, a tour ticket(s) will be provided at no cost. For specific information regarding the children's ticket policy for a particular event, please call the AT&T Stadium Ticket Office at (817) 892-5000 or the Guest Services Hotline at (817) 892-4161.",
              },
              upcomingEvents: {
                _total: 3,
                ticketmaster: 3,
              },
              _links: {
                self: {
                  href: '/discovery/v2/venues/KovZpZAJvndA?locale=en-us',
                },
              },
            },
          ],
          attractions: [
            {
              name: 'Dallas Cowboys',
              type: 'attraction',
              id: 'K8vZ9171oG0',
              test: false,
              url:
                'https://www.ticketmaster.com/dallas-cowboys-tickets/artist/805931',
              locale: 'en-us',
              externalLinks: {
                twitter: [
                  {
                    url: 'https://twitter.com/dallascowboys',
                  },
                ],
                facebook: [
                  {
                    url: 'https://www.facebook.com/DallasCowboys',
                  },
                ],
                wiki: [
                  {
                    url: 'https://en.wikipedia.org/wiki/Dallas_Cowboys',
                  },
                ],
                instagram: [
                  {
                    url: 'https://www.instagram.com/DallasCowboys',
                  },
                ],
                homepage: [
                  {
                    url: 'https://www.dallascowboys.com/',
                  },
                ],
              },
              images: [
                {
                  ratio: '3_2',
                  url:
                    'https://s1.ticketm.net/dam/a/7e4/6f79c7fd-ac9a-4dba-97a6-1a6be82407e4_1325121_TABLET_LANDSCAPE_3_2.jpg',
                  width: 1024,
                  height: 683,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url:
                    'https://s1.ticketm.net/dam/a/7e4/6f79c7fd-ac9a-4dba-97a6-1a6be82407e4_1325121_RETINA_PORTRAIT_3_2.jpg',
                  width: 640,
                  height: 427,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url:
                    'https://s1.ticketm.net/dam/a/7e4/6f79c7fd-ac9a-4dba-97a6-1a6be82407e4_1325121_EVENT_DETAIL_PAGE_16_9.jpg',
                  width: 205,
                  height: 115,
                  fallback: false,
                },
                {
                  ratio: '4_3',
                  url:
                    'https://s1.ticketm.net/dam/a/7e4/6f79c7fd-ac9a-4dba-97a6-1a6be82407e4_1325121_CUSTOM.jpg',
                  width: 305,
                  height: 225,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url:
                    'https://s1.ticketm.net/dam/a/7e4/6f79c7fd-ac9a-4dba-97a6-1a6be82407e4_1325121_RETINA_LANDSCAPE_16_9.jpg',
                  width: 1136,
                  height: 639,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url:
                    'https://s1.ticketm.net/dam/a/7e4/6f79c7fd-ac9a-4dba-97a6-1a6be82407e4_1325121_TABLET_LANDSCAPE_LARGE_16_9.jpg',
                  width: 2048,
                  height: 1152,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url:
                    'https://s1.ticketm.net/dam/a/7e4/6f79c7fd-ac9a-4dba-97a6-1a6be82407e4_1325121_ARTIST_PAGE_3_2.jpg',
                  width: 305,
                  height: 203,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url:
                    'https://s1.ticketm.net/dam/a/7e4/6f79c7fd-ac9a-4dba-97a6-1a6be82407e4_1325121_RECOMENDATION_16_9.jpg',
                  width: 100,
                  height: 56,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url:
                    'https://s1.ticketm.net/dam/a/7e4/6f79c7fd-ac9a-4dba-97a6-1a6be82407e4_1325121_TABLET_LANDSCAPE_16_9.jpg',
                  width: 1024,
                  height: 576,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url:
                    'https://s1.ticketm.net/dam/a/7e4/6f79c7fd-ac9a-4dba-97a6-1a6be82407e4_1325121_RETINA_PORTRAIT_16_9.jpg',
                  width: 640,
                  height: 360,
                  fallback: false,
                },
              ],
              classifications: [
                {
                  primary: true,
                  segment: {
                    id: 'KZFzniwnSyZfZ7v7nE',
                    name: 'Sports',
                  },
                  genre: {
                    id: 'KnvZfZ7vAdE',
                    name: 'Football',
                  },
                  subGenre: {
                    id: 'KZazBEonSMnZfZ7vFE1',
                    name: 'NFL',
                  },
                  type: {
                    id: 'KZAyXgnZfZ7v7l1',
                    name: 'Group',
                  },
                  subType: {
                    id: 'KZFzBErXgnZfZ7vA7d',
                    name: 'Team',
                  },
                  family: false,
                },
              ],
              upcomingEvents: {
                _total: 2,
                ticketmaster: 2,
              },
              _links: {
                self: {
                  href: '/discovery/v2/attractions/K8vZ9171oG0?locale=en-us',
                },
              },
            },
            {
              name: 'San Francisco 49ers',
              type: 'attraction',
              id: 'K8vZ9171oMV',
              test: false,
              url:
                'https://www.ticketmaster.com/san-francisco-49ers-tickets/artist/806015',
              locale: 'en-us',
              externalLinks: {
                twitter: [
                  {
                    url: 'https://twitter.com/49ers',
                  },
                ],
                facebook: [
                  {
                    url: 'https://www.facebook.com/SANFRANCISCO49ERS/',
                  },
                ],
                wiki: [
                  {
                    url: 'https://en.wikipedia.org/wiki/San_Francisco_49ers',
                  },
                ],
                instagram: [
                  {
                    url: 'https://www.instagram.com/49ers/',
                  },
                ],
                homepage: [
                  {
                    url: 'https://www.49ers.com/',
                  },
                ],
              },
              aliases: ['niners', 'sfo 49ers'],
              images: [
                {
                  ratio: '16_9',
                  url:
                    'https://s1.ticketm.net/dam/a/b7d/d7460515-712c-4e09-b404-69c1b86e7b7d_1325511_EVENT_DETAIL_PAGE_16_9.jpg',
                  width: 205,
                  height: 115,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url:
                    'https://s1.ticketm.net/dam/a/b7d/d7460515-712c-4e09-b404-69c1b86e7b7d_1325511_TABLET_LANDSCAPE_3_2.jpg',
                  width: 1024,
                  height: 683,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url:
                    'https://s1.ticketm.net/dam/a/b7d/d7460515-712c-4e09-b404-69c1b86e7b7d_1325511_TABLET_LANDSCAPE_LARGE_16_9.jpg',
                  width: 2048,
                  height: 1152,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url:
                    'https://s1.ticketm.net/dam/a/b7d/d7460515-712c-4e09-b404-69c1b86e7b7d_1325511_RECOMENDATION_16_9.jpg',
                  width: 100,
                  height: 56,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url:
                    'https://s1.ticketm.net/dam/a/b7d/d7460515-712c-4e09-b404-69c1b86e7b7d_1325511_RETINA_PORTRAIT_3_2.jpg',
                  width: 640,
                  height: 427,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url:
                    'https://s1.ticketm.net/dam/a/b7d/d7460515-712c-4e09-b404-69c1b86e7b7d_1325511_RETINA_LANDSCAPE_16_9.jpg',
                  width: 1136,
                  height: 639,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url:
                    'https://s1.ticketm.net/dam/a/b7d/d7460515-712c-4e09-b404-69c1b86e7b7d_1325511_ARTIST_PAGE_3_2.jpg',
                  width: 305,
                  height: 203,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url:
                    'https://s1.ticketm.net/dam/a/b7d/d7460515-712c-4e09-b404-69c1b86e7b7d_1325511_TABLET_LANDSCAPE_16_9.jpg',
                  width: 1024,
                  height: 576,
                  fallback: false,
                },
                {
                  ratio: '4_3',
                  url:
                    'https://s1.ticketm.net/dam/a/b7d/d7460515-712c-4e09-b404-69c1b86e7b7d_1325511_CUSTOM.jpg',
                  width: 305,
                  height: 225,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url:
                    'https://s1.ticketm.net/dam/a/b7d/d7460515-712c-4e09-b404-69c1b86e7b7d_1325511_RETINA_PORTRAIT_16_9.jpg',
                  width: 640,
                  height: 360,
                  fallback: false,
                },
              ],
              classifications: [
                {
                  primary: true,
                  segment: {
                    id: 'KZFzniwnSyZfZ7v7nE',
                    name: 'Sports',
                  },
                  genre: {
                    id: 'KnvZfZ7vAdE',
                    name: 'Football',
                  },
                  subGenre: {
                    id: 'KZazBEonSMnZfZ7vFE1',
                    name: 'NFL',
                  },
                  type: {
                    id: 'KZAyXgnZfZ7v7l1',
                    name: 'Group',
                  },
                  subType: {
                    id: 'KZFzBErXgnZfZ7vA7d',
                    name: 'Team',
                  },
                  family: false,
                },
              ],
              upcomingEvents: {
                _total: 1,
                ticketmaster: 1,
              },
              _links: {
                self: {
                  href: '/discovery/v2/attractions/K8vZ9171oMV?locale=en-us',
                },
              },
            },
          ],
        },
      },
      {
        name: 'Kansas City Chiefs vs. Atlanta Falcons',
        type: 'event',
        id: 'vvG1bZp2BMoOze',
        test: false,
        url:
          'https://www.ticketmaster.com/kansas-city-chiefs-vs-atlanta-falcons-kansas-city-missouri-12-27-2020/event/060058FEB7460E02',
        locale: 'en-us',
        images: [
          {
            ratio: '16_9',
            url:
              'https://s1.ticketm.net/dam/a/0d8/35dc7659-f6e9-4ebf-af1c-d6c2f663e0d8_1325241_TABLET_LANDSCAPE_LARGE_16_9.jpg',
            width: 2048,
            height: 1152,
            fallback: false,
          },
          {
            ratio: '3_2',
            url:
              'https://s1.ticketm.net/dam/a/0d8/35dc7659-f6e9-4ebf-af1c-d6c2f663e0d8_1325241_TABLET_LANDSCAPE_3_2.jpg',
            width: 1024,
            height: 683,
            fallback: false,
          },
          {
            ratio: '16_9',
            url:
              'https://s1.ticketm.net/dam/a/0d8/35dc7659-f6e9-4ebf-af1c-d6c2f663e0d8_1325241_EVENT_DETAIL_PAGE_16_9.jpg',
            width: 205,
            height: 115,
            fallback: false,
          },
          {
            ratio: '4_3',
            url:
              'https://s1.ticketm.net/dam/a/0d8/35dc7659-f6e9-4ebf-af1c-d6c2f663e0d8_1325241_CUSTOM.jpg',
            width: 305,
            height: 225,
            fallback: false,
          },
          {
            ratio: '16_9',
            url:
              'https://s1.ticketm.net/dam/a/0d8/35dc7659-f6e9-4ebf-af1c-d6c2f663e0d8_1325241_RECOMENDATION_16_9.jpg',
            width: 100,
            height: 56,
            fallback: false,
          },
          {
            ratio: '16_9',
            url:
              'https://s1.ticketm.net/dam/a/0d8/35dc7659-f6e9-4ebf-af1c-d6c2f663e0d8_1325241_TABLET_LANDSCAPE_16_9.jpg',
            width: 1024,
            height: 576,
            fallback: false,
          },
          {
            ratio: '16_9',
            url:
              'https://s1.ticketm.net/dam/a/0d8/35dc7659-f6e9-4ebf-af1c-d6c2f663e0d8_1325241_RETINA_LANDSCAPE_16_9.jpg',
            width: 1136,
            height: 639,
            fallback: false,
          },
          {
            ratio: '3_2',
            url:
              'https://s1.ticketm.net/dam/a/0d8/35dc7659-f6e9-4ebf-af1c-d6c2f663e0d8_1325241_RETINA_PORTRAIT_3_2.jpg',
            width: 640,
            height: 427,
            fallback: false,
          },
          {
            ratio: '16_9',
            url:
              'https://s1.ticketm.net/dam/a/0d8/35dc7659-f6e9-4ebf-af1c-d6c2f663e0d8_1325241_RETINA_PORTRAIT_16_9.jpg',
            width: 640,
            height: 360,
            fallback: false,
          },
          {
            ratio: '3_2',
            url:
              'https://s1.ticketm.net/dam/a/0d8/35dc7659-f6e9-4ebf-af1c-d6c2f663e0d8_1325241_ARTIST_PAGE_3_2.jpg',
            width: 305,
            height: 203,
            fallback: false,
          },
        ],
        sales: {
          public: {
            startDateTime: '2020-11-05T18:00:00Z',
            startTBD: false,
            startTBA: false,
            endDateTime: '2020-12-07T01:20:00Z',
          },
          presales: [
            {
              startDateTime: '2020-10-26T15:00:00Z',
              endDateTime: '2020-10-27T03:00:00Z',
              name: 'Resale Onsale',
            },
            {
              startDateTime: '2020-11-05T16:00:00Z',
              endDateTime: '2020-11-05T17:00:00Z',
              name: 'Jackson County Presale',
            },
          ],
        },
        dates: {
          start: {
            localDate: '2020-12-27',
            localTime: '12:00:00',
            dateTime: '2020-12-27T18:00:00Z',
            dateTBD: false,
            dateTBA: false,
            timeTBA: false,
            noSpecificTime: false,
          },
          timezone: 'America/Chicago',
          status: {
            code: 'offsale',
          },
          spanMultipleDays: false,
        },
        classifications: [
          {
            primary: true,
            segment: {
              id: 'KZFzniwnSyZfZ7v7nE',
              name: 'Sports',
            },
            genre: {
              id: 'KnvZfZ7vAdE',
              name: 'Football',
            },
            subGenre: {
              id: 'KZazBEonSMnZfZ7vFE1',
              name: 'NFL',
            },
            type: {
              id: 'KZAyXgnZfZ7v7l1',
              name: 'Group',
            },
            subType: {
              id: 'KZFzBErXgnZfZ7vA7d',
              name: 'Team',
            },
            family: false,
          },
        ],
        promoter: {
          id: '705',
          name: 'NFL REGULAR SEASON',
          description: 'NFL REGULAR SEASON / NTL / USA',
        },
        promoters: [
          {
            id: '705',
            name: 'NFL REGULAR SEASON',
            description: 'NFL REGULAR SEASON / NTL / USA',
          },
        ],
        priceRanges: [
          {
            type: 'standard',
            currency: 'USD',
            min: 80.0,
            max: 350.0,
          },
        ],
        products: [
          {
            name: 'Parking - Kansas City Chiefs v Falcons',
            id: 'vvG1bZp2DCYYyy',
            url:
              'https://www.ticketmaster.com/parking-kansas-city-chiefs-v-falcons-kansas-city-missouri-12-27-2020/event/060058FECEC30E79',
            type: 'Parking',
            classifications: [
              {
                primary: true,
                segment: {
                  id: 'KZFzniwnSyZfZ7v7nE',
                  name: 'Sports',
                },
                genre: {
                  id: 'KnvZfZ7vA7A',
                  name: 'Miscellaneous',
                },
                subGenre: {
                  id: 'KZazBEonSMnZfZ7vFIt',
                  name: 'Miscellaneous',
                },
                type: {
                  id: 'KZAyXgnZfZ7v7nI',
                  name: 'Undefined',
                },
                subType: {
                  id: 'KZFzBErXgnZfZ7v7lJ',
                  name: 'Undefined',
                },
                family: false,
              },
            ],
          },
        ],
        seatmap: {
          staticUrl:
            'https://maps.ticketmaster.com/maps/geometry/3/event/060058FEB7460E02/staticImage?type=png&systemId=HOST',
        },
        accessibility: {
          ticketLimit: 4,
        },
        ageRestrictions: {
          legalAgeEnforced: false,
        },
        _links: {
          self: {
            href: '/discovery/v2/events/vvG1bZp2BMoOze?locale=en-us',
          },
          attractions: [
            {
              href: '/discovery/v2/attractions/K8vZ9171oMf?locale=en-us',
            },
            {
              href: '/discovery/v2/attractions/K8vZ9171ou0?locale=en-us',
            },
          ],
          venues: [
            {
              href: '/discovery/v2/venues/KovZpZAF7E1A?locale=en-us',
            },
          ],
        },
        _embedded: {
          venues: [
            {
              name: 'Arrowhead Stadium',
              type: 'venue',
              id: 'KovZpZAF7E1A',
              test: false,
              url:
                'https://www.ticketmaster.com/arrowhead-stadium-tickets-kansas-city/venue/49182',
              locale: 'en-us',
              images: [
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dbimages/10183v.gif',
                  width: 205,
                  height: 115,
                  fallback: false,
                },
              ],
              postalCode: '64129',
              timezone: 'America/Chicago',
              city: {
                name: 'Kansas City',
              },
              state: {
                name: 'Missouri',
                stateCode: 'MO',
              },
              country: {
                name: 'United States Of America',
                countryCode: 'US',
              },
              address: {
                line1: '1 Arrowhead Dr',
              },
              location: {
                longitude: '-94.48417065',
                latitude: '39.04921048',
              },
              markets: [
                {
                  name: 'Kansas City and More',
                  id: '26',
                },
                {
                  name: 'Springfield',
                  id: '53',
                },
              ],
              dmas: [
                {
                  id: 309,
                },
                {
                  id: 311,
                },
                {
                  id: 375,
                },
                {
                  id: 399,
                },
                {
                  id: 414,
                },
              ],
              boxOfficeInfo: {
                phoneNumberDetail: '(816) 920-9400',
                openHoursDetail:
                  'The Box Office hours are as follows: Monday through Friday - 8:30AM to 5PM Saturday (during Chiefs season) - 9AM to 1 PM - Home Game weekends only Saturday and Sunday - Closed',
                acceptedPaymentDetail:
                  'The Box Office accepts Visa, Mastercard, Discover & American Express.',
              },
              parkingDetail:
                'Pay parking lots are available. You can also purchase in advance NON-RESERVED /RED LOT parking through ticketmaster.',
              generalInfo: {
                generalRule:
                  'All Arrowhead Stadium policies and procedures can be found at www.chiefs.com/stadium.',
                childRule:
                  'Children under 2 are free when sitting on a ticket holders lap.',
              },
              upcomingEvents: {
                _total: 5,
                tmr: 2,
                ticketmaster: 3,
              },
              _links: {
                self: {
                  href: '/discovery/v2/venues/KovZpZAF7E1A?locale=en-us',
                },
              },
            },
          ],
          attractions: [
            {
              name: 'Kansas City Chiefs',
              type: 'attraction',
              id: 'K8vZ9171oMf',
              test: false,
              url:
                'https://www.ticketmaster.com/kansas-city-chiefs-tickets/artist/805955',
              locale: 'en-us',
              externalLinks: {
                twitter: [
                  {
                    url: 'https://www.twitter.com/Chiefs',
                  },
                ],
                facebook: [
                  {
                    url: 'https://www.facebook.com/KansasCityChiefs',
                  },
                ],
                wiki: [
                  {
                    url: 'https://en.wikipedia.org/wiki/Kansas_City_Chiefs',
                  },
                ],
                instagram: [
                  {
                    url: 'https://www.instagram.com/Chiefs',
                  },
                ],
                homepage: [
                  {
                    url: 'https://www.chiefs.com/',
                  },
                ],
              },
              aliases: [
                'kansas city cheifs',
                'kansas city chiefs',
                'kc chiefs',
              ],
              images: [
                {
                  ratio: '16_9',
                  url:
                    'https://s1.ticketm.net/dam/a/0d8/35dc7659-f6e9-4ebf-af1c-d6c2f663e0d8_1325241_TABLET_LANDSCAPE_LARGE_16_9.jpg',
                  width: 2048,
                  height: 1152,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url:
                    'https://s1.ticketm.net/dam/a/0d8/35dc7659-f6e9-4ebf-af1c-d6c2f663e0d8_1325241_TABLET_LANDSCAPE_3_2.jpg',
                  width: 1024,
                  height: 683,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url:
                    'https://s1.ticketm.net/dam/a/0d8/35dc7659-f6e9-4ebf-af1c-d6c2f663e0d8_1325241_EVENT_DETAIL_PAGE_16_9.jpg',
                  width: 205,
                  height: 115,
                  fallback: false,
                },
                {
                  ratio: '4_3',
                  url:
                    'https://s1.ticketm.net/dam/a/0d8/35dc7659-f6e9-4ebf-af1c-d6c2f663e0d8_1325241_CUSTOM.jpg',
                  width: 305,
                  height: 225,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url:
                    'https://s1.ticketm.net/dam/a/0d8/35dc7659-f6e9-4ebf-af1c-d6c2f663e0d8_1325241_RECOMENDATION_16_9.jpg',
                  width: 100,
                  height: 56,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url:
                    'https://s1.ticketm.net/dam/a/0d8/35dc7659-f6e9-4ebf-af1c-d6c2f663e0d8_1325241_TABLET_LANDSCAPE_16_9.jpg',
                  width: 1024,
                  height: 576,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url:
                    'https://s1.ticketm.net/dam/a/0d8/35dc7659-f6e9-4ebf-af1c-d6c2f663e0d8_1325241_RETINA_LANDSCAPE_16_9.jpg',
                  width: 1136,
                  height: 639,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url:
                    'https://s1.ticketm.net/dam/a/0d8/35dc7659-f6e9-4ebf-af1c-d6c2f663e0d8_1325241_RETINA_PORTRAIT_3_2.jpg',
                  width: 640,
                  height: 427,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url:
                    'https://s1.ticketm.net/dam/a/0d8/35dc7659-f6e9-4ebf-af1c-d6c2f663e0d8_1325241_RETINA_PORTRAIT_16_9.jpg',
                  width: 640,
                  height: 360,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url:
                    'https://s1.ticketm.net/dam/a/0d8/35dc7659-f6e9-4ebf-af1c-d6c2f663e0d8_1325241_ARTIST_PAGE_3_2.jpg',
                  width: 305,
                  height: 203,
                  fallback: false,
                },
              ],
              classifications: [
                {
                  primary: true,
                  segment: {
                    id: 'KZFzniwnSyZfZ7v7nE',
                    name: 'Sports',
                  },
                  genre: {
                    id: 'KnvZfZ7vAdE',
                    name: 'Football',
                  },
                  subGenre: {
                    id: 'KZazBEonSMnZfZ7vFE1',
                    name: 'NFL',
                  },
                  type: {
                    id: 'KZAyXgnZfZ7v7l1',
                    name: 'Group',
                  },
                  subType: {
                    id: 'KZFzBErXgnZfZ7vA7d',
                    name: 'Team',
                  },
                  family: false,
                },
              ],
              upcomingEvents: {
                _total: 3,
                ticketmaster: 3,
              },
              _links: {
                self: {
                  href: '/discovery/v2/attractions/K8vZ9171oMf?locale=en-us',
                },
              },
            },
            {
              name: 'Atlanta Falcons',
              type: 'attraction',
              id: 'K8vZ9171ou0',
              test: false,
              url:
                'https://www.ticketmaster.com/atlanta-falcons-tickets/artist/805897',
              locale: 'en-us',
              externalLinks: {
                twitter: [
                  {
                    url: 'https://twitter.com/AtlantaFalcons',
                  },
                ],
                facebook: [
                  {
                    url: 'https://www.facebook.com/atlantafalcons/',
                  },
                ],
                wiki: [
                  {
                    url: 'https://en.wikipedia.org/wiki/Atlanta_Falcons',
                  },
                ],
                instagram: [
                  {
                    url: 'https://www.instagram.com/atlantafalcons/',
                  },
                ],
                homepage: [
                  {
                    url: 'https://www.atlantafalcons.com/',
                  },
                ],
              },
              images: [
                {
                  ratio: '16_9',
                  url:
                    'https://s1.ticketm.net/dam/a/cc3/b7603d04-66ea-478c-9f00-d21630adacc3_1324961_TABLET_LANDSCAPE_16_9.jpg',
                  width: 1024,
                  height: 576,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url:
                    'https://s1.ticketm.net/dam/a/cc3/b7603d04-66ea-478c-9f00-d21630adacc3_1324961_TABLET_LANDSCAPE_LARGE_16_9.jpg',
                  width: 2048,
                  height: 1152,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url:
                    'https://s1.ticketm.net/dam/a/cc3/b7603d04-66ea-478c-9f00-d21630adacc3_1324961_TABLET_LANDSCAPE_3_2.jpg',
                  width: 1024,
                  height: 683,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url:
                    'https://s1.ticketm.net/dam/a/cc3/b7603d04-66ea-478c-9f00-d21630adacc3_1324961_EVENT_DETAIL_PAGE_16_9.jpg',
                  width: 205,
                  height: 115,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url:
                    'https://s1.ticketm.net/dam/a/cc3/b7603d04-66ea-478c-9f00-d21630adacc3_1324961_RECOMENDATION_16_9.jpg',
                  width: 100,
                  height: 56,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url:
                    'https://s1.ticketm.net/dam/a/cc3/b7603d04-66ea-478c-9f00-d21630adacc3_1324961_ARTIST_PAGE_3_2.jpg',
                  width: 305,
                  height: 203,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url:
                    'https://s1.ticketm.net/dam/a/cc3/b7603d04-66ea-478c-9f00-d21630adacc3_1324961_RETINA_PORTRAIT_16_9.jpg',
                  width: 640,
                  height: 360,
                  fallback: false,
                },
                {
                  ratio: '4_3',
                  url:
                    'https://s1.ticketm.net/dam/a/cc3/b7603d04-66ea-478c-9f00-d21630adacc3_1324961_CUSTOM.jpg',
                  width: 305,
                  height: 225,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url:
                    'https://s1.ticketm.net/dam/a/cc3/b7603d04-66ea-478c-9f00-d21630adacc3_1324961_RETINA_LANDSCAPE_16_9.jpg',
                  width: 1136,
                  height: 639,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url:
                    'https://s1.ticketm.net/dam/a/cc3/b7603d04-66ea-478c-9f00-d21630adacc3_1324961_RETINA_PORTRAIT_3_2.jpg',
                  width: 640,
                  height: 427,
                  fallback: false,
                },
              ],
              classifications: [
                {
                  primary: true,
                  segment: {
                    id: 'KZFzniwnSyZfZ7v7nE',
                    name: 'Sports',
                  },
                  genre: {
                    id: 'KnvZfZ7vAdE',
                    name: 'Football',
                  },
                  subGenre: {
                    id: 'KZazBEonSMnZfZ7vFE1',
                    name: 'NFL',
                  },
                  type: {
                    id: 'KZAyXgnZfZ7v7l1',
                    name: 'Group',
                  },
                  subType: {
                    id: 'KZFzBErXgnZfZ7vA7d',
                    name: 'Team',
                  },
                  family: false,
                },
              ],
              upcomingEvents: {
                _total: 3,
                ticketmaster: 3,
              },
              _links: {
                self: {
                  href: '/discovery/v2/attractions/K8vZ9171ou0?locale=en-us',
                },
              },
            },
          ],
        },
      },
      {
        name: 'Eagles',
        type: 'event',
        id: 'vvG1YZ4VLloAHj',
        test: false,
        url:
          'https://www.ticketmaster.com/eagles-dallas-texas-09-21-2021/event/0C005747EB445F1C',
        locale: 'en-us',
        images: [
          {
            ratio: '16_9',
            url:
              'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_EVENT_DETAIL_PAGE_16_9.jpg',
            width: 205,
            height: 115,
            fallback: false,
          },
          {
            ratio: '16_9',
            url:
              'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_RETINA_LANDSCAPE_16_9.jpg',
            width: 1136,
            height: 639,
            fallback: false,
          },
          {
            ratio: '4_3',
            url:
              'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_CUSTOM.jpg',
            width: 305,
            height: 225,
            fallback: false,
          },
          {
            ratio: '3_2',
            url:
              'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_TABLET_LANDSCAPE_3_2.jpg',
            width: 1024,
            height: 683,
            fallback: false,
          },
          {
            ratio: '16_9',
            url:
              'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_RECOMENDATION_16_9.jpg',
            width: 100,
            height: 56,
            fallback: false,
          },
          {
            ratio: '3_2',
            url:
              'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_RETINA_PORTRAIT_3_2.jpg',
            width: 640,
            height: 427,
            fallback: false,
          },
          {
            ratio: '16_9',
            url:
              'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_TABLET_LANDSCAPE_LARGE_16_9.jpg',
            width: 2048,
            height: 1152,
            fallback: false,
          },
          {
            ratio: '16_9',
            url:
              'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_RETINA_PORTRAIT_16_9.jpg',
            width: 640,
            height: 360,
            fallback: false,
          },
          {
            ratio: '3_2',
            url:
              'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_ARTIST_PAGE_3_2.jpg',
            width: 305,
            height: 203,
            fallback: false,
          },
          {
            ratio: '16_9',
            url:
              'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_TABLET_LANDSCAPE_16_9.jpg',
            width: 1024,
            height: 576,
            fallback: false,
          },
        ],
        sales: {
          public: {
            startDateTime: '2019-10-18T15:00:00Z',
            startTBD: false,
            startTBA: false,
            endDateTime: '2021-09-22T03:00:00Z',
          },
        },
        dates: {
          start: {
            localDate: '2021-09-21',
            localTime: '20:00:00',
            dateTime: '2021-09-22T01:00:00Z',
            dateTBD: false,
            dateTBA: false,
            timeTBA: false,
            noSpecificTime: false,
          },
          initialStartDate: {
            localDate: '2020-10-21',
            localTime: '20:00:00',
            dateTime: '2020-10-22T01:00:00Z',
          },
          timezone: 'America/Chicago',
          status: {
            code: 'rescheduled',
          },
          spanMultipleDays: false,
        },
        classifications: [
          {
            primary: true,
            segment: {
              id: 'KZFzniwnSyZfZ7v7nJ',
              name: 'Music',
            },
            genre: {
              id: 'KnvZfZ7vAeA',
              name: 'Rock',
            },
            subGenre: {
              id: 'KZazBEonSMnZfZ7v6F1',
              name: 'Pop',
            },
            type: {
              id: 'KZAyXgnZfZ7v7nI',
              name: 'Undefined',
            },
            subType: {
              id: 'KZFzBErXgnZfZ7v7lJ',
              name: 'Undefined',
            },
            family: false,
          },
        ],
        promoter: {
          id: '653',
          name: 'LIVE NATION MUSIC',
          description: 'LIVE NATION MUSIC / NTL / USA',
        },
        promoters: [
          {
            id: '653',
            name: 'LIVE NATION MUSIC',
            description: 'LIVE NATION MUSIC / NTL / USA',
          },
        ],
        info:
          'Show time has been updated from 7:30pm to 8pm. This is an evening with the Eagles. Please arrive early. To allow for more Card Members to enjoy the show, American Express has set a two-order limit for this offer. This limit applies across all Cards associated with all of your American Express accounts. Prepaid Cards are not eligible.',
        pleaseNote:
          'This event has been Rescheduled from the original date of 3/17/20. New Date: Tue Sept 21 2021 8:00pm All original tickets will be honored on the new date. Please hold onto your tickets.',
        priceRanges: [
          {
            type: 'standard',
            currency: 'USD',
            min: 149.0,
            max: 770.0,
          },
        ],
        products: [
          {
            name:
              'Hotel California Tour - LaneOne Upgrade Package (Ticket Not Included)',
            id: 'vvG1YZ4VRSFEYu',
            url:
              'https://www.ticketmaster.com/hotel-california-tour-laneone-upgrade-package-dallas-texas-09-21-2021/event/0C00574BF3227C0D',
            type: 'VIP',
            classifications: [
              {
                primary: true,
                segment: {
                  id: 'KZFzniwnSyZfZ7v7nJ',
                  name: 'Music',
                },
                genre: {
                  id: 'KnvZfZ7vAeA',
                  name: 'Rock',
                },
                subGenre: {
                  id: 'KZazBEonSMnZfZ7v6F1',
                  name: 'Pop',
                },
                type: {
                  id: 'KZAyXgnZfZ7v7nI',
                  name: 'Undefined',
                },
                subType: {
                  id: 'KZFzBErXgnZfZ7v7lJ',
                  name: 'Undefined',
                },
                family: false,
              },
            ],
          },
        ],
        seatmap: {
          staticUrl:
            'https://maps.ticketmaster.com/maps/geometry/3/event/0C005747EB445F1C/staticImage?type=png&systemId=HOST',
        },
        accessibility: {
          ticketLimit: 4,
        },
        ticketLimit: {
          info: 'There is an overall eight (8) ticket limit for this event.',
        },
        ageRestrictions: {
          legalAgeEnforced: false,
        },
        _links: {
          self: {
            href: '/discovery/v2/events/vvG1YZ4VLloAHj?locale=en-us',
          },
          attractions: [
            {
              href: '/discovery/v2/attractions/K8vZ9171ob7?locale=en-us',
            },
          ],
          venues: [
            {
              href: '/discovery/v2/venues/KovZpZAJ67eA?locale=en-us',
            },
          ],
        },
        _embedded: {
          venues: [
            {
              name: 'American Airlines Center',
              type: 'venue',
              id: 'KovZpZAJ67eA',
              test: false,
              url:
                'https://www.ticketmaster.com/american-airlines-center-tickets-dallas/venue/98723',
              locale: 'en-us',
              images: [
                {
                  url: 'https://s1.ticketm.net/dbimages/15515v.jpg',
                  width: 250,
                  height: 125,
                  fallback: false,
                },
                {
                  ratio: '3_1',
                  url:
                    'https://s1.ticketm.net/dam/v/585/1a6b0731-6022-4e0a-a423-6c8662dbb585_380931_SOURCE.jpg',
                  width: 1500,
                  height: 500,
                  fallback: false,
                },
              ],
              postalCode: '75201',
              timezone: 'America/Chicago',
              city: {
                name: 'Dallas',
              },
              state: {
                name: 'Texas',
                stateCode: 'TX',
              },
              country: {
                name: 'United States Of America',
                countryCode: 'US',
              },
              address: {
                line1: '2500 Victory Avenue',
              },
              location: {
                longitude: '-96.81081803',
                latitude: '32.79067196',
              },
              markets: [
                {
                  name: 'Dallas - Fort Worth and More',
                  id: '5',
                },
              ],
              dmas: [
                {
                  id: 212,
                },
                {
                  id: 218,
                },
                {
                  id: 261,
                },
                {
                  id: 326,
                },
                {
                  id: 386,
                },
                {
                  id: 405,
                },
                {
                  id: 415,
                },
              ],
              boxOfficeInfo: {
                phoneNumberDetail:
                  'Box Office: 214-665-4797 Event Line: 214-665-4200 Parking Hotline: 214-665-4700 Dallas Mavericks: 214-747-6287 Dallas Stars: 214-467-8277',
                openHoursDetail:
                  'The Box Office is located on the North-East corner of the building (across from The Lexus Parking Garage). Due to the global coronavirus pandemic, the Box Office is operating under reduced hours. Please visit our website for the current hours of operation: www.americanairlinescenter.com. Concert tickets are not available for purchase at the American Airlines Center Box Office on the day of the public on-sale. Tickets for such non-team events may be purchased by the general public on the first day of ticket sales online at www.ticketmaster.com. Remaining available tickets for any concert/event following the first day of general public ticket sales will be available for purchase at the American Airlines Center Box Office on the next business day.',
                acceptedPaymentDetail:
                  'Visa, MasterCard, Amex, Discover, Cash **Cashless transactions are highly encouraged to minimize contact.**',
              },
              parkingDetail:
                'Parking is located on site and the charges are: Blue Parking : $20-$30 Silver Garage: $25-$30 The Lexus Garage $25-$30 Gold Garage $65-$99(when available) Orange Lot $35-$50 (when available) D Surface Lot Parking : $25-$30 (when available) Parking passes may be purchased in advance at Ticketmaster.com, through ParkWhiz at ParkWhiz.com or at the American Airlines Center website: AmericanAirlinesCenter.com. Limited availability is sold at the venue box office. If guests have not pre-purchased parking, some lots may be available to purchase at arrival. All parking transactions are credit card & debit card only.',
              generalInfo: {
                generalRule:
                  'No professional cameras or video No selfie sticks No outside food or beverage No bottles or cans No weapons or firearms No illegal substances No laser pointers, beach balls, frisbees etc. Bags and purses will not be permitted. Wallet-size clutches no larger than 4.5in x 6.5in will be permitted. All persons ages 10 & older must wear a face covering except when actively eating and drinking in a ticketed seat. Smoking is not permitted on the premises. Re-Entry is not allowed at any event at the American Airlines Center. For certain situations, such as medical needs, re-entry can be approved by the Guest Services Supervisor at the door.',
                childRule:
                  'Yes. For most events (some family shows may be excluded) children 2 years and over are required to have a ticket.',
              },
              upcomingEvents: {
                _total: 28,
                tmr: 4,
                ticketmaster: 24,
              },
              _links: {
                self: {
                  href: '/discovery/v2/venues/KovZpZAJ67eA?locale=en-us',
                },
              },
            },
          ],
          attractions: [
            {
              name: 'Eagles',
              type: 'attraction',
              id: 'K8vZ9171ob7',
              test: false,
              url: 'https://www.ticketmaster.com/eagles-tickets/artist/734977',
              locale: 'en-us',
              externalLinks: {
                twitter: [
                  {
                    url: 'https://twitter.com/TheEaglesBand',
                  },
                ],
                itunes: [
                  {
                    url: 'https://itunes.apple.com/artist/id1053549',
                  },
                ],
                lastfm: [
                  {
                    url: 'https://www.last.fm/music/Eagles',
                  },
                ],
                wiki: [
                  {
                    url: 'https://en.wikipedia.org/wiki/Eagles_(band)',
                  },
                ],
                facebook: [
                  {
                    url: 'https://www.facebook.com/EaglesBand',
                  },
                ],
                musicbrainz: [
                  {
                    id: 'f46bd570-5768-462e-b84c-c7c993bbf47e',
                  },
                ],
                homepage: [
                  {
                    url: 'https://eagles.com/',
                  },
                ],
              },
              images: [
                {
                  ratio: '16_9',
                  url:
                    'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_EVENT_DETAIL_PAGE_16_9.jpg',
                  width: 205,
                  height: 115,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url:
                    'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_RETINA_LANDSCAPE_16_9.jpg',
                  width: 1136,
                  height: 639,
                  fallback: false,
                },
                {
                  ratio: '4_3',
                  url:
                    'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_CUSTOM.jpg',
                  width: 305,
                  height: 225,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url:
                    'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_TABLET_LANDSCAPE_3_2.jpg',
                  width: 1024,
                  height: 683,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url:
                    'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_RECOMENDATION_16_9.jpg',
                  width: 100,
                  height: 56,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url:
                    'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_RETINA_PORTRAIT_3_2.jpg',
                  width: 640,
                  height: 427,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url:
                    'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_TABLET_LANDSCAPE_LARGE_16_9.jpg',
                  width: 2048,
                  height: 1152,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url:
                    'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_RETINA_PORTRAIT_16_9.jpg',
                  width: 640,
                  height: 360,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url:
                    'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_ARTIST_PAGE_3_2.jpg',
                  width: 305,
                  height: 203,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url:
                    'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_TABLET_LANDSCAPE_16_9.jpg',
                  width: 1024,
                  height: 576,
                  fallback: false,
                },
              ],
              classifications: [
                {
                  primary: true,
                  segment: {
                    id: 'KZFzniwnSyZfZ7v7nJ',
                    name: 'Music',
                  },
                  genre: {
                    id: 'KnvZfZ7vAeA',
                    name: 'Rock',
                  },
                  subGenre: {
                    id: 'KZazBEonSMnZfZ7v6F1',
                    name: 'Pop',
                  },
                  type: {
                    id: 'KZAyXgnZfZ7v7nI',
                    name: 'Undefined',
                  },
                  subType: {
                    id: 'KZFzBErXgnZfZ7v7lJ',
                    name: 'Undefined',
                  },
                  family: false,
                },
              ],
              upcomingEvents: {
                _total: 14,
                ticketmaster: 14,
              },
              _links: {
                self: {
                  href: '/discovery/v2/attractions/K8vZ9171ob7?locale=en-us',
                },
              },
            },
          ],
        },
      },
      {
        name: 'Eagles',
        type: 'event',
        id: '1kk8v94-GA5YE-w',
        test: false,
        url:
          'https://www.ticketmaster.com/eagles-phoenix-arizona-09-24-2021/event/190057561BC27872',
        locale: 'en-us',
        images: [
          {
            ratio: '16_9',
            url:
              'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_EVENT_DETAIL_PAGE_16_9.jpg',
            width: 205,
            height: 115,
            fallback: false,
          },
          {
            ratio: '16_9',
            url:
              'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_RETINA_LANDSCAPE_16_9.jpg',
            width: 1136,
            height: 639,
            fallback: false,
          },
          {
            ratio: '4_3',
            url:
              'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_CUSTOM.jpg',
            width: 305,
            height: 225,
            fallback: false,
          },
          {
            ratio: '3_2',
            url:
              'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_TABLET_LANDSCAPE_3_2.jpg',
            width: 1024,
            height: 683,
            fallback: false,
          },
          {
            ratio: '16_9',
            url:
              'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_RECOMENDATION_16_9.jpg',
            width: 100,
            height: 56,
            fallback: false,
          },
          {
            ratio: '3_2',
            url:
              'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_RETINA_PORTRAIT_3_2.jpg',
            width: 640,
            height: 427,
            fallback: false,
          },
          {
            ratio: '16_9',
            url:
              'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_TABLET_LANDSCAPE_LARGE_16_9.jpg',
            width: 2048,
            height: 1152,
            fallback: false,
          },
          {
            ratio: '16_9',
            url:
              'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_RETINA_PORTRAIT_16_9.jpg',
            width: 640,
            height: 360,
            fallback: false,
          },
          {
            ratio: '3_2',
            url:
              'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_ARTIST_PAGE_3_2.jpg',
            width: 305,
            height: 203,
            fallback: false,
          },
          {
            ratio: '16_9',
            url:
              'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_TABLET_LANDSCAPE_16_9.jpg',
            width: 1024,
            height: 576,
            fallback: false,
          },
        ],
        sales: {
          public: {
            startDateTime: '2019-11-01T17:00:00Z',
            startTBD: false,
            startTBA: false,
            endDateTime: '2021-09-25T03:00:00Z',
          },
          presales: [
            {
              startDateTime: '2019-10-28T17:00:00Z',
              endDateTime: '2019-11-01T05:00:00Z',
              name: 'Official Platinum Presale',
            },
            {
              startDateTime: '2019-10-28T17:00:00Z',
              endDateTime: '2019-11-01T05:00:00Z',
              name: 'American Express® Card Member Presale',
            },
            {
              startDateTime: '2019-10-31T17:00:00Z',
              endDateTime: '2019-11-01T05:00:00Z',
              name: 'Downtown Live / Phx Suns/Mercury Presale',
            },
            {
              startDateTime: '2019-10-31T17:00:00Z',
              endDateTime: '2019-11-01T05:00:00Z',
              name: 'Live Nation / LN Mobile App Presale',
              description:
                'Download the Live Nation iPhone App now to access Live Nation Mobile App Presales. Browse, search, and discover concerts for your favorite artists near you; get alerts on presales, onsales, and last minute tickets; and easily and quickly purchase tickets while in the app. Check out set lists on the go, check in with your friends, view your ticket info, seating charts, exclusive photos, videos and more.',
              url: 'http://www.livenation.com/mobile',
            },
            {
              startDateTime: '2019-11-01T17:00:00Z',
              endDateTime: '2020-10-25T04:00:00Z',
              name: 'Official Platinum Onsale',
            },
          ],
        },
        dates: {
          start: {
            localDate: '2021-09-24',
            localTime: '20:00:00',
            dateTime: '2021-09-25T03:00:00Z',
            dateTBD: false,
            dateTBA: false,
            timeTBA: false,
            noSpecificTime: false,
          },
          initialStartDate: {
            localDate: '2020-10-24',
            localTime: '20:00:00',
            dateTime: '2020-10-25T03:00:00Z',
          },
          timezone: 'America/Phoenix',
          status: {
            code: 'rescheduled',
          },
          spanMultipleDays: false,
        },
        classifications: [
          {
            primary: true,
            segment: {
              id: 'KZFzniwnSyZfZ7v7nJ',
              name: 'Music',
            },
            genre: {
              id: 'KnvZfZ7vAeA',
              name: 'Rock',
            },
            subGenre: {
              id: 'KZazBEonSMnZfZ7v6F1',
              name: 'Pop',
            },
            type: {
              id: 'KZAyXgnZfZ7v7nI',
              name: 'Undefined',
            },
            subType: {
              id: 'KZFzBErXgnZfZ7v7lJ',
              name: 'Undefined',
            },
            family: false,
          },
        ],
        promoter: {
          id: '653',
          name: 'LIVE NATION MUSIC',
          description: 'LIVE NATION MUSIC / NTL / USA',
        },
        promoters: [
          {
            id: '653',
            name: 'LIVE NATION MUSIC',
            description: 'LIVE NATION MUSIC / NTL / USA',
          },
        ],
        info:
          'EVERYONE NEEDS A TICKET, INCLUDING INFANTS. RAIL RIDE EVENT: When you purchase a ticket to a PHX Arena event, you can ride the METRO LIGHT RAIL at no cost for four hours prior to the event through the end of the transit day. To allow for more Card Members to enjoy the show, American Express has set a two-order limit for this offer. This limit applies across all Cards associated with all of your American Express accounts. Prepaid Cards are not eligible.',
        pleaseNote:
          'The event organizer has had to rescheduled your event for Friday September 24, 2021 8:00PM. Please hold onto your tickets as they will be valid for the new date. Sign in to your account to locate your tickets. If your event is eligible for a refund or credit, you can make a request from the available options.',
        priceRanges: [
          {
            type: 'standard',
            currency: 'USD',
            min: 94.25,
            max: 745.25,
          },
        ],
        products: [
          {
            name: 'Phoenix Suns Arena/ Car Service: EAGLES',
            id: '16v0Z4gJAG7MvL6',
            url:
              'https://www.ticketmaster.com/phoenix-suns-arena-car-service-eagles-phoenix-arizona-09-24-2021/event/1900575985DC17C7',
            type: 'Upsell',
            classifications: [
              {
                primary: true,
                segment: {
                  id: 'KZFzniwnSyZfZ7v7n1',
                  name: 'Miscellaneous',
                },
                genre: {
                  id: 'KnvZfZ7vAAE',
                  name: 'Community/Civic',
                },
                subGenre: {
                  id: 'KZazBEonSMnZfZ7vFlv',
                  name: 'Community/Civic',
                },
                type: {
                  id: 'KZAyXgnZfZ7v7nI',
                  name: 'Undefined',
                },
                subType: {
                  id: 'KZFzBErXgnZfZ7v7lJ',
                  name: 'Undefined',
                },
                family: false,
              },
            ],
          },
          {
            name:
              'Hotel California Tour - LaneOne Upgrade Package (Ticket Not Included)',
            id: '1A_ZAq_GkdDwVng',
            url:
              'https://www.ticketmaster.com/hotel-california-tour-laneone-upgrade-package-phoenix-arizona-09-24-2021/event/19005759FBCB4AB5',
            type: 'VIP',
            classifications: [
              {
                primary: true,
                segment: {
                  id: 'KZFzniwnSyZfZ7v7nJ',
                  name: 'Music',
                },
                genre: {
                  id: 'KnvZfZ7vAeA',
                  name: 'Rock',
                },
                subGenre: {
                  id: 'KZazBEonSMnZfZ7v6F1',
                  name: 'Pop',
                },
                type: {
                  id: 'KZAyXgnZfZ7v7nI',
                  name: 'Undefined',
                },
                subType: {
                  id: 'KZFzBErXgnZfZ7v7lJ',
                  name: 'Undefined',
                },
                family: false,
              },
            ],
          },
          {
            name: 'Phoenix Suns Arena/Hotel Palomar: EAGLES',
            id: '1av0Z4gJa7sZduA2',
            url:
              'https://www.ticketmaster.com/phoenix-suns-arenahotel-palomar-eagles-phoenix-arizona-09-24-2021/event/1900575989131C4E',
            type: 'Upsell',
            classifications: [
              {
                primary: true,
                segment: {
                  id: 'KZFzniwnSyZfZ7v7n1',
                  name: 'Miscellaneous',
                },
                genre: {
                  id: 'KnvZfZ7vAAE',
                  name: 'Community/Civic',
                },
                subGenre: {
                  id: 'KZazBEonSMnZfZ7vFlv',
                  name: 'Community/Civic',
                },
                type: {
                  id: 'KZAyXgnZfZ7v7nI',
                  name: 'Undefined',
                },
                subType: {
                  id: 'KZFzBErXgnZfZ7v7lJ',
                  name: 'Undefined',
                },
                family: false,
              },
            ],
          },
        ],
        seatmap: {
          staticUrl:
            'https://maps.ticketmaster.com/maps/geometry/3/event/190057561BC27872/staticImage?type=png&systemId=HOST',
        },
        accessibility: {
          ticketLimit: 4,
        },
        ticketLimit: {
          info: 'There is an 8-ticket limit for this event.',
        },
        ageRestrictions: {
          legalAgeEnforced: false,
        },
        _links: {
          self: {
            href: '/discovery/v2/events/1kk8v94-GA5YE-w?locale=en-us',
          },
          attractions: [
            {
              href: '/discovery/v2/attractions/K8vZ9171ob7?locale=en-us',
            },
          ],
          venues: [
            {
              href: '/discovery/v2/venues/KovZpZAE617A?locale=en-us',
            },
          ],
        },
        _embedded: {
          venues: [
            {
              name: 'Phoenix Suns Arena (formerly Talking Stick Resort Arena)',
              type: 'venue',
              id: 'KovZpZAE617A',
              test: false,
              url:
                'https://www.ticketmaster.com/phoenix-suns-arena-formerly-talking-stick-tickets-phoenix/venue/205079',
              locale: 'en-us',
              postalCode: '85004',
              timezone: 'America/Phoenix',
              city: {
                name: 'Phoenix',
              },
              state: {
                name: 'Arizona',
                stateCode: 'AZ',
              },
              country: {
                name: 'United States Of America',
                countryCode: 'US',
              },
              address: {
                line1: '201 East Jefferson Street',
              },
              location: {
                longitude: '-112.071313',
                latitude: '33.445899',
              },
              markets: [
                {
                  name: 'Phoenix and Tucson',
                  id: '36',
                },
              ],
              dmas: [
                {
                  id: 359,
                },
                {
                  id: 402,
                },
                {
                  id: 420,
                },
              ],
              social: {
                twitter: {
                  handle: '@tsrarena',
                },
              },
              boxOfficeInfo: {
                phoneNumberDetail:
                  'Northwest side of PHX Arena in the Pavilion.(602)379-7800 Suns Game Nights call (602)379-7867',
                openHoursDetail:
                  'Monday - Friday: 10:00am - 5:00pm Saturday - Sunday: closed except on event days and special on sales.',
                acceptedPaymentDetail:
                  'The PHX Arena accepts the following methods of payment at the Box Office:VISA MASTERCARD DISCOVER AMERICAN EXPRESS CASH, PHX ARENA NO LONGER ACCEPTS CHECKS',
                willCallDetail:
                  'The WILL CALL windows open two hours prior to events and are located on the Northwest side of the building in the Pavillion. WILL CALL PICK-UP: The PHX Arena requires that customers picking up WILL CALL tickets furnish the following: 1) PICTURE IDENTIFICATION THAT MATCHES THE PICK-UP NAME 2) CONFIRMATION NUMBER THAT MATCHES THE CUSTOMER ACCOUNT ALTERNATE WILL CALL PICK-UP: If another person, other than the person ordering and paying for the tickets, is picking up a WILL CALL order, the ALTERNATE PICK-UP name MUST be on the account. To get the alternate pick-up name noted on the account, the original purchaser MUST contact Ticketmaster at (1-800-745-3000), ask for customer service to verify account information and request alternate pick-up.',
              },
              parkingDetail:
                'Adjacent parking structure at 1st and Madison. Many other parking lots and structures within a 10 minute walk of PHX Arena. Prices vary by event. Parking and Direction hotline (602)514-8472',
              accessibleSeatingDetail:
                'PHOENIX SUNS: To purchase Phoenix Suns tickets for people with disabilities, subject to availability, please call PHX Arena at (602)379-7867 or visit PHX Arena ticket office. Accessible tickets can also be purchased at all Ticketmaster locations, by calling (800)745-3000 or online at ticketmaster.com. ARIZONA RATTLERS: To purchase Arizona Rattlers tickets for people with disabilities, Subject to availability, please call PHX Arena at (602)379-7800 or visit the PHX Arena ticket office. Accessible tickets can also be purchased at all Ticketmaster locations, by calling (800)745-3000 or online at ticketmaster.com. PHOENIX MERCURY: To purchase Phoenix Mercury tickets for people with disabilities, subject to availability, please call PHX Arena at (602)252-9622 or visit the PHX Arena ticket office. Accessible tickets can also be purchased at all Ticketmaster locations, by calling (800)745-3000 or online at ticketmaster.com. ARENA CONCERTS AND OTHER EVENTS: To purchase concert or other event tickets for people with disabilities, subject to availability, please call PHX Arena at (602)379-7800 or visit PHX Arena ticket office. Accessible tickets can also be purchased at all Ticketmaster locations, by calling (800)745-3000 or online at ticketmaster.com.',
              generalInfo: {
                generalRule:
                  'New security procedures have been implemented at PHX Arena. No backpacks or large purses will be allowed. Small purses and fanny packs will be subject to search. Every individual entering the arena will be subject to search. Every vehicle entering the building will be subject to search. Sealed water bottles (1 litre or smaller) allowed in building. No other outside concessions allowed. No pets other than "assisting" animals. Smoking in Facility: The PHX Arena in a non-smoking facility. Smoking areas outside building are available, depending on event. NON professional cameras only (depending on event) No Laser Pointers allowed No Video Cameras allowed No Recorders allowed',
                childRule:
                  'Please contact the PHX Arena ticket office at (602)379-7800, for information. Child policy Varies by event. Children age three (3) and above require a ticket for Phoenix Suns, Phoenix Mercury, and Arizona Rattlers games.',
              },
              upcomingEvents: {
                _total: 5,
                ticketmaster: 5,
              },
              _links: {
                self: {
                  href: '/discovery/v2/venues/KovZpZAE617A?locale=en-us',
                },
              },
            },
          ],
          attractions: [
            {
              name: 'Eagles',
              type: 'attraction',
              id: 'K8vZ9171ob7',
              test: false,
              url: 'https://www.ticketmaster.com/eagles-tickets/artist/734977',
              locale: 'en-us',
              externalLinks: {
                twitter: [
                  {
                    url: 'https://twitter.com/TheEaglesBand',
                  },
                ],
                itunes: [
                  {
                    url: 'https://itunes.apple.com/artist/id1053549',
                  },
                ],
                lastfm: [
                  {
                    url: 'https://www.last.fm/music/Eagles',
                  },
                ],
                wiki: [
                  {
                    url: 'https://en.wikipedia.org/wiki/Eagles_(band)',
                  },
                ],
                facebook: [
                  {
                    url: 'https://www.facebook.com/EaglesBand',
                  },
                ],
                musicbrainz: [
                  {
                    id: 'f46bd570-5768-462e-b84c-c7c993bbf47e',
                  },
                ],
                homepage: [
                  {
                    url: 'https://eagles.com/',
                  },
                ],
              },
              images: [
                {
                  ratio: '16_9',
                  url:
                    'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_EVENT_DETAIL_PAGE_16_9.jpg',
                  width: 205,
                  height: 115,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url:
                    'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_RETINA_LANDSCAPE_16_9.jpg',
                  width: 1136,
                  height: 639,
                  fallback: false,
                },
                {
                  ratio: '4_3',
                  url:
                    'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_CUSTOM.jpg',
                  width: 305,
                  height: 225,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url:
                    'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_TABLET_LANDSCAPE_3_2.jpg',
                  width: 1024,
                  height: 683,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url:
                    'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_RECOMENDATION_16_9.jpg',
                  width: 100,
                  height: 56,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url:
                    'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_RETINA_PORTRAIT_3_2.jpg',
                  width: 640,
                  height: 427,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url:
                    'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_TABLET_LANDSCAPE_LARGE_16_9.jpg',
                  width: 2048,
                  height: 1152,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url:
                    'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_RETINA_PORTRAIT_16_9.jpg',
                  width: 640,
                  height: 360,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url:
                    'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_ARTIST_PAGE_3_2.jpg',
                  width: 305,
                  height: 203,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url:
                    'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_TABLET_LANDSCAPE_16_9.jpg',
                  width: 1024,
                  height: 576,
                  fallback: false,
                },
              ],
              classifications: [
                {
                  primary: true,
                  segment: {
                    id: 'KZFzniwnSyZfZ7v7nJ',
                    name: 'Music',
                  },
                  genre: {
                    id: 'KnvZfZ7vAeA',
                    name: 'Rock',
                  },
                  subGenre: {
                    id: 'KZazBEonSMnZfZ7v6F1',
                    name: 'Pop',
                  },
                  type: {
                    id: 'KZAyXgnZfZ7v7nI',
                    name: 'Undefined',
                  },
                  subType: {
                    id: 'KZFzBErXgnZfZ7v7lJ',
                    name: 'Undefined',
                  },
                  family: false,
                },
              ],
              upcomingEvents: {
                _total: 14,
                ticketmaster: 14,
              },
              _links: {
                self: {
                  href: '/discovery/v2/attractions/K8vZ9171ob7?locale=en-us',
                },
              },
            },
          ],
        },
      },
      {
        name: 'Eagles',
        type: 'event',
        id: 'G5vzZ4g6yzQHe',
        test: false,
        url:
          'https://www.ticketmaster.com/eagles-denver-colorado-09-18-2021/event/1E005751F9E1AF02',
        locale: 'en-us',
        images: [
          {
            ratio: '16_9',
            url:
              'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_EVENT_DETAIL_PAGE_16_9.jpg',
            width: 205,
            height: 115,
            fallback: false,
          },
          {
            ratio: '16_9',
            url:
              'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_RETINA_LANDSCAPE_16_9.jpg',
            width: 1136,
            height: 639,
            fallback: false,
          },
          {
            ratio: '4_3',
            url:
              'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_CUSTOM.jpg',
            width: 305,
            height: 225,
            fallback: false,
          },
          {
            ratio: '3_2',
            url:
              'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_TABLET_LANDSCAPE_3_2.jpg',
            width: 1024,
            height: 683,
            fallback: false,
          },
          {
            ratio: '16_9',
            url:
              'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_RECOMENDATION_16_9.jpg',
            width: 100,
            height: 56,
            fallback: false,
          },
          {
            ratio: '3_2',
            url:
              'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_RETINA_PORTRAIT_3_2.jpg',
            width: 640,
            height: 427,
            fallback: false,
          },
          {
            ratio: '16_9',
            url:
              'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_TABLET_LANDSCAPE_LARGE_16_9.jpg',
            width: 2048,
            height: 1152,
            fallback: false,
          },
          {
            ratio: '16_9',
            url:
              'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_RETINA_PORTRAIT_16_9.jpg',
            width: 640,
            height: 360,
            fallback: false,
          },
          {
            ratio: '3_2',
            url:
              'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_ARTIST_PAGE_3_2.jpg',
            width: 305,
            height: 203,
            fallback: false,
          },
          {
            ratio: '16_9',
            url:
              'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_TABLET_LANDSCAPE_16_9.jpg',
            width: 1024,
            height: 576,
            fallback: false,
          },
        ],
        sales: {
          public: {
            startDateTime: '2019-11-01T16:00:00Z',
            startTBD: false,
            startTBA: false,
            endDateTime: '2021-09-19T02:00:00Z',
          },
          presales: [
            {
              startDateTime: '2019-10-28T16:00:00Z',
              endDateTime: '2019-11-01T04:00:00Z',
              name: 'American Express ® Card Member Presale',
            },
            {
              startDateTime: '2019-10-28T16:00:00Z',
              endDateTime: '2019-11-01T04:00:00Z',
              name: 'Official Platinum Presale',
            },
            {
              startDateTime: '2019-11-01T16:00:00Z',
              endDateTime: '2020-09-20T01:30:00Z',
              name: 'Official Platinum',
            },
            {
              startDateTime: '2019-10-31T16:00:00Z',
              endDateTime: '2019-11-01T04:00:00Z',
              name: 'Live Nation Mobile App Presale',
              description:
                'Download the Live Nation iPhone App now to access Live Nation Mobile App Presales. Browse, search, and discover concerts for your favorite artists near you; get alerts on presales, onsales, and last minute tickets; and easily and quickly purchase tickets while in the app. Check out set lists on the go, check in with your friends, view your ticket info, seating charts, exclusive photos, videos and more…',
              url: 'http://promo.livenation.com/iphone/',
            },
            {
              startDateTime: '2019-10-31T16:00:00Z',
              endDateTime: '2019-11-01T04:00:00Z',
              name: 'Live Nation Presale',
            },
          ],
        },
        dates: {
          start: {
            localDate: '2021-09-18',
            localTime: '20:00:00',
            dateTime: '2021-09-19T02:00:00Z',
            dateTBD: false,
            dateTBA: false,
            timeTBA: false,
            noSpecificTime: false,
          },
          initialStartDate: {
            localDate: '2020-09-19',
            localTime: '20:00:00',
            dateTime: '2020-09-20T02:00:00Z',
          },
          timezone: 'America/Denver',
          status: {
            code: 'rescheduled',
          },
          spanMultipleDays: false,
        },
        classifications: [
          {
            primary: true,
            segment: {
              id: 'KZFzniwnSyZfZ7v7nJ',
              name: 'Music',
            },
            genre: {
              id: 'KnvZfZ7vAeA',
              name: 'Rock',
            },
            subGenre: {
              id: 'KZazBEonSMnZfZ7v6F1',
              name: 'Pop',
            },
            type: {
              id: 'KZAyXgnZfZ7v7nI',
              name: 'Undefined',
            },
            subType: {
              id: 'KZFzBErXgnZfZ7v7lJ',
              name: 'Undefined',
            },
            family: false,
          },
        ],
        promoter: {
          id: '494',
          name: 'PROMOTED BY VENUE',
          description: 'PROMOTED BY VENUE / NTL / USA',
        },
        promoters: [
          {
            id: '494',
            name: 'PROMOTED BY VENUE',
            description: 'PROMOTED BY VENUE / NTL / USA',
          },
          {
            id: '4018',
            name: 'LIVE NATION - NO LN CONCERTS BRANDING',
            description: 'LIVE NATION - NO LN CONCERTS BRANDING / NTL / USA',
          },
        ],
        info:
          'To allow for more Card Members to enjoy the show, American Express has set a two-order limit for this offer. This limit applies across all Cards associated with all of your American Express accounts. Prepaid Cards are not eligible.',
        pleaseNote:
          'This event has been rescheduled to Saturday, September 18, 2021. Original tickets will be honored on the new date.',
        priceRanges: [
          {
            type: 'standard',
            currency: 'USD',
            min: 129.0,
            max: 750.0,
          },
        ],
        products: [
          {
            name:
              'Hotel California Tour - LaneOne Upgrade Package (Ticket Not Included)',
            id: 'G5vzZ4g5MQyaS',
            url:
              'https://www.ticketmaster.com/hotel-california-tour-laneone-upgrade-package-denver-colorado-09-18-2021/event/1E005752F76B9273',
            type: 'VIP',
            classifications: [
              {
                primary: true,
                segment: {
                  id: 'KZFzniwnSyZfZ7v7nJ',
                  name: 'Music',
                },
                genre: {
                  id: 'KnvZfZ7vAeA',
                  name: 'Rock',
                },
                subGenre: {
                  id: 'KZazBEonSMnZfZ7v6F1',
                  name: 'Pop',
                },
                type: {
                  id: 'KZAyXgnZfZ7v7nI',
                  name: 'Undefined',
                },
                subType: {
                  id: 'KZFzBErXgnZfZ7v7lJ',
                  name: 'Undefined',
                },
                family: false,
              },
            ],
          },
        ],
        seatmap: {
          staticUrl:
            'https://maps.ticketmaster.com/maps/geometry/3/event/1E005751F9E1AF02/staticImage?type=png&systemId=HOST',
        },
        accessibility: {
          ticketLimit: 4,
        },
        ticketLimit: {
          info: 'There is an overall 8 ticket limit for this event.',
        },
        ageRestrictions: {
          legalAgeEnforced: false,
        },
        _links: {
          self: {
            href: '/discovery/v2/events/G5vzZ4g6yzQHe?locale=en-us',
          },
          attractions: [
            {
              href: '/discovery/v2/attractions/K8vZ9171ob7?locale=en-us',
            },
          ],
          venues: [
            {
              href: '/discovery/v2/venues/KovZpZAFaJeA?locale=en-us',
            },
          ],
        },
        _embedded: {
          venues: [
            {
              name: 'Ball Arena',
              type: 'venue',
              id: 'KovZpZAFaJeA',
              test: false,
              url:
                'https://www.ticketmaster.com/ball-arena-tickets-denver/venue/246112',
              locale: 'en-us',
              images: [
                {
                  ratio: '16_9',
                  url:
                    'https://s1.ticketm.net/dam/v/c8c/314a72bc-c758-42f2-81b3-ca6ea0fc1c8c_414341_SOURCE.jpg',
                  width: 1948,
                  height: 1082,
                  fallback: false,
                  attribution: 'CC BY-SA 2.5 via Wikipedia',
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dbimages/22044v.jpg',
                  width: 205,
                  height: 115,
                  fallback: false,
                },
              ],
              postalCode: '80204',
              timezone: 'America/Denver',
              city: {
                name: 'Denver',
              },
              state: {
                name: 'Colorado',
                stateCode: 'CO',
              },
              country: {
                name: 'United States Of America',
                countryCode: 'US',
              },
              address: {
                line1: '1000 Chopper Circle',
              },
              location: {
                longitude: '-105.010166',
                latitude: '39.74724',
              },
              markets: [
                {
                  name: 'Denver and More',
                  id: '6',
                },
                {
                  name: 'All of US',
                  id: '51',
                },
              ],
              dmas: [
                {
                  id: 200,
                },
                {
                  id: 248,
                },
                {
                  id: 254,
                },
                {
                  id: 264,
                },
                {
                  id: 285,
                },
                {
                  id: 347,
                },
              ],
              boxOfficeInfo: {
                phoneNumberDetail:
                  'The general Ball Arena information number is (303) 405-1100. For more information you can also go to Ball Arena website, www.BallArena.com.',
                openHoursDetail:
                  'Ball Arena Box Office opens at 12PM (noon) on most event days. For events that start at 1PM or earlier, the Box Office will open two hours prior to the event start time. Please visit https://www.BallArena.com/events-tickets/calendar to check what dates the Box Office will be open.',
                acceptedPaymentDetail:
                  'Cash, Mc, Visa, Discover, AMX. No checks for concerts and other events!',
                willCallDetail:
                  'WILL CALL IS AVAILABLE AT THE BOX OFFICE ON THE DAY OF THE SHOW ONLY, STARTING 1 1/2 HOURS BEFORE SHOWTIME.',
              },
              parkingDetail:
                'Parking at Ball Arena may be easily accessed from I-25 and Auraria Parkway when traveling from the south, or I-25 and Speer Blvd when traveling from the North. For more information on Ball Arena parking and rates, please call 303.405.1299.',
              accessibleSeatingDetail:
                'Ball Arena is committed to providing every Guest with a comfortable and enjoyable experience in the arena, including Guests with disabilities. Wheelchair and accessible seating tickets and companion seating is available for purchase in each of the wheelchair seating sections.',
              generalInfo: {
                generalRule:
                  'Prohibited items can be viewed at https://www.BallArena.com/plan-your-visit/prohibited-items.',
                childRule:
                  'Vary by event. Under 2 free - Child must sit on an adults lap.',
              },
              upcomingEvents: {
                _total: 41,
                tmr: 3,
                ticketmaster: 38,
              },
              _links: {
                self: {
                  href: '/discovery/v2/venues/KovZpZAFaJeA?locale=en-us',
                },
              },
            },
          ],
          attractions: [
            {
              name: 'Eagles',
              type: 'attraction',
              id: 'K8vZ9171ob7',
              test: false,
              url: 'https://www.ticketmaster.com/eagles-tickets/artist/734977',
              locale: 'en-us',
              externalLinks: {
                twitter: [
                  {
                    url: 'https://twitter.com/TheEaglesBand',
                  },
                ],
                itunes: [
                  {
                    url: 'https://itunes.apple.com/artist/id1053549',
                  },
                ],
                lastfm: [
                  {
                    url: 'https://www.last.fm/music/Eagles',
                  },
                ],
                wiki: [
                  {
                    url: 'https://en.wikipedia.org/wiki/Eagles_(band)',
                  },
                ],
                facebook: [
                  {
                    url: 'https://www.facebook.com/EaglesBand',
                  },
                ],
                musicbrainz: [
                  {
                    id: 'f46bd570-5768-462e-b84c-c7c993bbf47e',
                  },
                ],
                homepage: [
                  {
                    url: 'https://eagles.com/',
                  },
                ],
              },
              images: [
                {
                  ratio: '16_9',
                  url:
                    'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_EVENT_DETAIL_PAGE_16_9.jpg',
                  width: 205,
                  height: 115,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url:
                    'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_RETINA_LANDSCAPE_16_9.jpg',
                  width: 1136,
                  height: 639,
                  fallback: false,
                },
                {
                  ratio: '4_3',
                  url:
                    'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_CUSTOM.jpg',
                  width: 305,
                  height: 225,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url:
                    'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_TABLET_LANDSCAPE_3_2.jpg',
                  width: 1024,
                  height: 683,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url:
                    'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_RECOMENDATION_16_9.jpg',
                  width: 100,
                  height: 56,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url:
                    'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_RETINA_PORTRAIT_3_2.jpg',
                  width: 640,
                  height: 427,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url:
                    'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_TABLET_LANDSCAPE_LARGE_16_9.jpg',
                  width: 2048,
                  height: 1152,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url:
                    'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_RETINA_PORTRAIT_16_9.jpg',
                  width: 640,
                  height: 360,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url:
                    'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_ARTIST_PAGE_3_2.jpg',
                  width: 305,
                  height: 203,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url:
                    'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_TABLET_LANDSCAPE_16_9.jpg',
                  width: 1024,
                  height: 576,
                  fallback: false,
                },
              ],
              classifications: [
                {
                  primary: true,
                  segment: {
                    id: 'KZFzniwnSyZfZ7v7nJ',
                    name: 'Music',
                  },
                  genre: {
                    id: 'KnvZfZ7vAeA',
                    name: 'Rock',
                  },
                  subGenre: {
                    id: 'KZazBEonSMnZfZ7v6F1',
                    name: 'Pop',
                  },
                  type: {
                    id: 'KZAyXgnZfZ7v7nI',
                    name: 'Undefined',
                  },
                  subType: {
                    id: 'KZFzBErXgnZfZ7v7lJ',
                    name: 'Undefined',
                  },
                  family: false,
                },
              ],
              upcomingEvents: {
                _total: 14,
                ticketmaster: 14,
              },
              _links: {
                self: {
                  href: '/discovery/v2/attractions/K8vZ9171ob7?locale=en-us',
                },
              },
            },
          ],
        },
      },
      {
        name: 'Cleveland Browns vs. Pittsburgh Steelers',
        type: 'event',
        id: 'vv1AAZA06GkdNls4W',
        test: false,
        url:
          'https://www.ticketmaster.com/cleveland-browns-vs-pittsburgh-steelers-cleveland-ohio-01-03-2021/event/05005907E3AF157D',
        locale: 'en-us',
        images: [
          {
            ratio: '4_3',
            url:
              'https://s1.ticketm.net/dam/a/1c9/da3e7214-1e85-406b-af16-0222c4d421c9_1325111_CUSTOM.jpg',
            width: 305,
            height: 225,
            fallback: false,
          },
          {
            ratio: '16_9',
            url:
              'https://s1.ticketm.net/dam/a/1c9/da3e7214-1e85-406b-af16-0222c4d421c9_1325111_TABLET_LANDSCAPE_16_9.jpg',
            width: 1024,
            height: 576,
            fallback: false,
          },
          {
            ratio: '3_2',
            url:
              'https://s1.ticketm.net/dam/a/1c9/da3e7214-1e85-406b-af16-0222c4d421c9_1325111_ARTIST_PAGE_3_2.jpg',
            width: 305,
            height: 203,
            fallback: false,
          },
          {
            ratio: '16_9',
            url:
              'https://s1.ticketm.net/dam/a/1c9/da3e7214-1e85-406b-af16-0222c4d421c9_1325111_EVENT_DETAIL_PAGE_16_9.jpg',
            width: 205,
            height: 115,
            fallback: false,
          },
          {
            ratio: '16_9',
            url:
              'https://s1.ticketm.net/dam/a/1c9/da3e7214-1e85-406b-af16-0222c4d421c9_1325111_RECOMENDATION_16_9.jpg',
            width: 100,
            height: 56,
            fallback: false,
          },
          {
            ratio: '3_2',
            url:
              'https://s1.ticketm.net/dam/a/1c9/da3e7214-1e85-406b-af16-0222c4d421c9_1325111_TABLET_LANDSCAPE_3_2.jpg',
            width: 1024,
            height: 683,
            fallback: false,
          },
          {
            ratio: '16_9',
            url:
              'https://s1.ticketm.net/dam/a/1c9/da3e7214-1e85-406b-af16-0222c4d421c9_1325111_RETINA_LANDSCAPE_16_9.jpg',
            width: 1136,
            height: 639,
            fallback: false,
          },
          {
            ratio: '3_2',
            url:
              'https://s1.ticketm.net/dam/a/1c9/da3e7214-1e85-406b-af16-0222c4d421c9_1325111_RETINA_PORTRAIT_3_2.jpg',
            width: 640,
            height: 427,
            fallback: false,
          },
          {
            ratio: '16_9',
            url:
              'https://s1.ticketm.net/dam/a/1c9/da3e7214-1e85-406b-af16-0222c4d421c9_1325111_RETINA_PORTRAIT_16_9.jpg',
            width: 640,
            height: 360,
            fallback: false,
          },
          {
            ratio: '16_9',
            url:
              'https://s1.ticketm.net/dam/a/1c9/da3e7214-1e85-406b-af16-0222c4d421c9_1325111_TABLET_LANDSCAPE_LARGE_16_9.jpg',
            width: 2048,
            height: 1152,
            fallback: false,
          },
        ],
        sales: {
          public: {
            startDateTime: '2020-10-23T19:00:00Z',
            startTBD: false,
            startTBA: false,
            endDateTime: '2021-01-03T19:00:00Z',
          },
          presales: [
            {
              startDateTime: '2020-10-21T14:00:00Z',
              endDateTime: '2020-10-22T02:00:00Z',
              name: 'Resale Onsale',
            },
          ],
        },
        dates: {
          start: {
            localDate: '2021-01-03',
            localTime: '13:00:00',
            dateTime: '2021-01-03T18:00:00Z',
            dateTBD: false,
            dateTBA: false,
            timeTBA: false,
            noSpecificTime: false,
          },
          timezone: 'America/New_York',
          status: {
            code: 'onsale',
          },
          spanMultipleDays: false,
        },
        classifications: [
          {
            primary: true,
            segment: {
              id: 'KZFzniwnSyZfZ7v7nE',
              name: 'Sports',
            },
            genre: {
              id: 'KnvZfZ7vAdE',
              name: 'Football',
            },
            subGenre: {
              id: 'KZazBEonSMnZfZ7vFE1',
              name: 'NFL',
            },
            type: {
              id: 'KZAyXgnZfZ7v7l1',
              name: 'Group',
            },
            subType: {
              id: 'KZFzBErXgnZfZ7vA7d',
              name: 'Team',
            },
            family: false,
          },
        ],
        promoter: {
          id: '705',
          name: 'NFL REGULAR SEASON',
          description: 'NFL REGULAR SEASON / NTL / USA',
        },
        promoters: [
          {
            id: '705',
            name: 'NFL REGULAR SEASON',
            description: 'NFL REGULAR SEASON / NTL / USA',
          },
        ],
        priceRanges: [
          {
            type: 'standard',
            currency: 'USD',
            min: 55.0,
            max: 695.0,
          },
        ],
        seatmap: {
          staticUrl:
            'https://maps.ticketmaster.com/maps/geometry/3/event/05005907E3AF157D/staticImage?type=png&systemId=HOST',
        },
        accessibility: {
          ticketLimit: 8,
        },
        ageRestrictions: {
          legalAgeEnforced: false,
        },
        _links: {
          self: {
            href: '/discovery/v2/events/vv1AAZA06GkdNls4W?locale=en-us',
          },
          attractions: [
            {
              href: '/discovery/v2/attractions/K8vZ9171oV7?locale=en-us',
            },
            {
              href: '/discovery/v2/attractions/K8vZ9171ogV?locale=en-us',
            },
          ],
          venues: [
            {
              href: '/discovery/v2/venues/KovZpZAFdEJA?locale=en-us',
            },
          ],
        },
        _embedded: {
          venues: [
            {
              name: 'FirstEnergy Stadium, Home of the Cleveland Browns',
              type: 'venue',
              id: 'KovZpZAFdEJA',
              test: false,
              url:
                'https://www.ticketmaster.com/firstenergy-stadium-home-of-the-cleveland-tickets-cleveland/venue/40971',
              locale: 'en-us',
              images: [
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dbimages/14981v.jpg',
                  width: 205,
                  height: 115,
                  fallback: false,
                },
              ],
              postalCode: '44114',
              timezone: 'America/New_York',
              city: {
                name: 'Cleveland',
              },
              state: {
                name: 'Ohio',
                stateCode: 'OH',
              },
              country: {
                name: 'United States Of America',
                countryCode: 'US',
              },
              address: {
                line1: '100 Alfred Lerner Way',
              },
              location: {
                longitude: '-81.69956958',
                latitude: '41.50603554',
              },
              markets: [
                {
                  name: ' Youngstown & More"',
                  id: '12',
                },
              ],
              dmas: [
                {
                  id: 253,
                },
                {
                  id: 419,
                },
              ],
              boxOfficeInfo: {
                phoneNumberDetail: '(888) 891-1999 (toll free)(440) 891-5050',
                openHoursDetail:
                  'Mon-Fri: 9:00am - 5:00pm Opens 9:00am on game day',
                acceptedPaymentDetail:
                  'Box Office accepts Visa, cash and money order. Visa is a proud sponsor of the NFL and the Cleveland Browns, and is the only card now accepted by the Browns.',
                willCallDetail:
                  'Available for pickup after 9:00am on gameday at the ticket office will call windows located on the South side of the Stadium. Customer must present actual credit card, confirmation number, and photo ID.',
              },
              parkingDetail:
                'Suite holders and Club Seat License holders with assigned parking in their contracts will receive information and details during early summer of each year. Other PSL holders, including guests with disabilities or special needs, will be responsible to make their own parking arrangements. Several parking operators are located in the downtown area.',
              accessibleSeatingDetail:
                'WHEELCHAIR ACCESS: Available through TM HEARING IMPAIRED: Assistive listening devices are available at any Guest Services booth located on all levels of the Stadium. A valid drivers license and/or major credit card will need to be utilized as a deposit for the equipment. ELEVATOR ACCESS: Elevator service is provided for our guests who require use of an elevator to access their seating area.',
              generalInfo: {
                generalRule:
                  'The following items will not be permitted in the stadium: * Weapons: No weapons are allowed in the stadium. Possession of a firearm or weapon that potentially disrupts the ability to maintain a safe and enjoyable environment is strictly forbidden. Possession of such a weapon will result in immediate confiscation ejection, and possible arrest. * Alcoholic beverages * Animals (except assistive animals for people with disabilities) * Banners * Cans, bottles, or other beverages containers including bottled water * Confetti or glitter * Ice chests * Fireworks, or missile-like objects * Flash photography * Illegal substances * Laser pointers * Noisemaking device: ie bells, bullhorns, whistles, etc. * Smoking * Sticks, bats, or clubs * Strollers * Umbrellas * Video or movie cameras, tripods, or audio recording equipment * Any other item deemed dangerous and/or inappropriate',
                childRule:
                  'Everyone regardless of age must have a ticket to enter the Stadium.',
              },
              upcomingEvents: {
                _total: 2,
                ticketmaster: 2,
              },
              _links: {
                self: {
                  href: '/discovery/v2/venues/KovZpZAFdEJA?locale=en-us',
                },
              },
            },
          ],
          attractions: [
            {
              name: 'Cleveland Browns',
              type: 'attraction',
              id: 'K8vZ9171oV7',
              test: false,
              url:
                'https://www.ticketmaster.com/cleveland-browns-tickets/artist/805920',
              locale: 'en-us',
              externalLinks: {
                twitter: [
                  {
                    url: 'https://twitter.com/Browns',
                  },
                ],
                facebook: [
                  {
                    url: 'https://www.facebook.com/clevelandbrowns/',
                  },
                ],
                wiki: [
                  {
                    url: 'https://en.wikipedia.org/wiki/Cleveland_Browns',
                  },
                ],
                instagram: [
                  {
                    url: 'https://www.instagram.com/clevelandbrowns/',
                  },
                ],
                homepage: [
                  {
                    url: 'https://www.clevelandbrowns.com/',
                  },
                ],
              },
              aliases: ['cleveland browns football', 'dog pound'],
              images: [
                {
                  ratio: '4_3',
                  url:
                    'https://s1.ticketm.net/dam/a/1c9/da3e7214-1e85-406b-af16-0222c4d421c9_1325111_CUSTOM.jpg',
                  width: 305,
                  height: 225,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url:
                    'https://s1.ticketm.net/dam/a/1c9/da3e7214-1e85-406b-af16-0222c4d421c9_1325111_TABLET_LANDSCAPE_16_9.jpg',
                  width: 1024,
                  height: 576,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url:
                    'https://s1.ticketm.net/dam/a/1c9/da3e7214-1e85-406b-af16-0222c4d421c9_1325111_ARTIST_PAGE_3_2.jpg',
                  width: 305,
                  height: 203,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url:
                    'https://s1.ticketm.net/dam/a/1c9/da3e7214-1e85-406b-af16-0222c4d421c9_1325111_EVENT_DETAIL_PAGE_16_9.jpg',
                  width: 205,
                  height: 115,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url:
                    'https://s1.ticketm.net/dam/a/1c9/da3e7214-1e85-406b-af16-0222c4d421c9_1325111_RECOMENDATION_16_9.jpg',
                  width: 100,
                  height: 56,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url:
                    'https://s1.ticketm.net/dam/a/1c9/da3e7214-1e85-406b-af16-0222c4d421c9_1325111_TABLET_LANDSCAPE_3_2.jpg',
                  width: 1024,
                  height: 683,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url:
                    'https://s1.ticketm.net/dam/a/1c9/da3e7214-1e85-406b-af16-0222c4d421c9_1325111_RETINA_LANDSCAPE_16_9.jpg',
                  width: 1136,
                  height: 639,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url:
                    'https://s1.ticketm.net/dam/a/1c9/da3e7214-1e85-406b-af16-0222c4d421c9_1325111_RETINA_PORTRAIT_3_2.jpg',
                  width: 640,
                  height: 427,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url:
                    'https://s1.ticketm.net/dam/a/1c9/da3e7214-1e85-406b-af16-0222c4d421c9_1325111_RETINA_PORTRAIT_16_9.jpg',
                  width: 640,
                  height: 360,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url:
                    'https://s1.ticketm.net/dam/a/1c9/da3e7214-1e85-406b-af16-0222c4d421c9_1325111_TABLET_LANDSCAPE_LARGE_16_9.jpg',
                  width: 2048,
                  height: 1152,
                  fallback: false,
                },
              ],
              classifications: [
                {
                  primary: true,
                  segment: {
                    id: 'KZFzniwnSyZfZ7v7nE',
                    name: 'Sports',
                  },
                  genre: {
                    id: 'KnvZfZ7vAdE',
                    name: 'Football',
                  },
                  subGenre: {
                    id: 'KZazBEonSMnZfZ7vFE1',
                    name: 'NFL',
                  },
                  type: {
                    id: 'KZAyXgnZfZ7v7l1',
                    name: 'Group',
                  },
                  subType: {
                    id: 'KZFzBErXgnZfZ7vA7d',
                    name: 'Team',
                  },
                  family: false,
                },
              ],
              upcomingEvents: {
                _total: 1,
                ticketmaster: 1,
              },
              _links: {
                self: {
                  href: '/discovery/v2/attractions/K8vZ9171oV7?locale=en-us',
                },
              },
            },
            {
              name: 'Pittsburgh Steelers',
              type: 'attraction',
              id: 'K8vZ9171ogV',
              test: false,
              url:
                'https://www.ticketmaster.com/pittsburgh-steelers-tickets/artist/806007',
              locale: 'en-us',
              externalLinks: {
                twitter: [
                  {
                    url: 'https://twitter.com/steelers/',
                  },
                ],
                facebook: [
                  {
                    url: 'https://www.facebook.com/steelers/',
                  },
                ],
                wiki: [
                  {
                    url: 'https://en.wikipedia.org/wiki/Pittsburgh_Steelers',
                  },
                ],
                instagram: [
                  {
                    url: 'https://www.instagram.com/steelers/',
                  },
                ],
                homepage: [
                  {
                    url: 'https://www.steelers.com/',
                  },
                ],
              },
              aliases: ['steeler tickets', 'steelers', 'steelers tickets'],
              images: [
                {
                  ratio: '16_9',
                  url:
                    'https://s1.ticketm.net/dam/a/38e/5cf6e91a-098e-47c9-aded-e0185de0a38e_1325561_TABLET_LANDSCAPE_LARGE_16_9.jpg',
                  width: 2048,
                  height: 1152,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url:
                    'https://s1.ticketm.net/dam/a/38e/5cf6e91a-098e-47c9-aded-e0185de0a38e_1325561_TABLET_LANDSCAPE_16_9.jpg',
                  width: 1024,
                  height: 576,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url:
                    'https://s1.ticketm.net/dam/a/38e/5cf6e91a-098e-47c9-aded-e0185de0a38e_1325561_ARTIST_PAGE_3_2.jpg',
                  width: 305,
                  height: 203,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url:
                    'https://s1.ticketm.net/dam/a/38e/5cf6e91a-098e-47c9-aded-e0185de0a38e_1325561_RETINA_PORTRAIT_3_2.jpg',
                  width: 640,
                  height: 427,
                  fallback: false,
                },
                {
                  ratio: '4_3',
                  url:
                    'https://s1.ticketm.net/dam/a/38e/5cf6e91a-098e-47c9-aded-e0185de0a38e_1325561_CUSTOM.jpg',
                  width: 305,
                  height: 225,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url:
                    'https://s1.ticketm.net/dam/a/38e/5cf6e91a-098e-47c9-aded-e0185de0a38e_1325561_TABLET_LANDSCAPE_3_2.jpg',
                  width: 1024,
                  height: 683,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url:
                    'https://s1.ticketm.net/dam/a/38e/5cf6e91a-098e-47c9-aded-e0185de0a38e_1325561_RETINA_LANDSCAPE_16_9.jpg',
                  width: 1136,
                  height: 639,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url:
                    'https://s1.ticketm.net/dam/a/38e/5cf6e91a-098e-47c9-aded-e0185de0a38e_1325561_RECOMENDATION_16_9.jpg',
                  width: 100,
                  height: 56,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url:
                    'https://s1.ticketm.net/dam/a/38e/5cf6e91a-098e-47c9-aded-e0185de0a38e_1325561_EVENT_DETAIL_PAGE_16_9.jpg',
                  width: 205,
                  height: 115,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url:
                    'https://s1.ticketm.net/dam/a/38e/5cf6e91a-098e-47c9-aded-e0185de0a38e_1325561_RETINA_PORTRAIT_16_9.jpg',
                  width: 640,
                  height: 360,
                  fallback: false,
                },
              ],
              classifications: [
                {
                  primary: true,
                  segment: {
                    id: 'KZFzniwnSyZfZ7v7nE',
                    name: 'Sports',
                  },
                  genre: {
                    id: 'KnvZfZ7vAdE',
                    name: 'Football',
                  },
                  subGenre: {
                    id: 'KZazBEonSMnZfZ7vFE1',
                    name: 'NFL',
                  },
                  type: {
                    id: 'KZAyXgnZfZ7v7l1',
                    name: 'Group',
                  },
                  subType: {
                    id: 'KZFzBErXgnZfZ7vA7d',
                    name: 'Team',
                  },
                  family: false,
                },
              ],
              upcomingEvents: {
                _total: 3,
                ticketmaster: 3,
              },
              _links: {
                self: {
                  href: '/discovery/v2/attractions/K8vZ9171ogV?locale=en-us',
                },
              },
            },
          ],
        },
      },
      {
        name: 'Eagles',
        type: 'event',
        id: 'vv1AaZAqAGkdPXfSW',
        test: false,
        url:
          'https://www.ticketmaster.com/eagles-inglewood-california-10-16-2021/event/09005745E5F94CFD',
        locale: 'en-us',
        images: [
          {
            ratio: '16_9',
            url:
              'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_EVENT_DETAIL_PAGE_16_9.jpg',
            width: 205,
            height: 115,
            fallback: false,
          },
          {
            ratio: '16_9',
            url:
              'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_RETINA_LANDSCAPE_16_9.jpg',
            width: 1136,
            height: 639,
            fallback: false,
          },
          {
            ratio: '4_3',
            url:
              'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_CUSTOM.jpg',
            width: 305,
            height: 225,
            fallback: false,
          },
          {
            ratio: '3_2',
            url:
              'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_TABLET_LANDSCAPE_3_2.jpg',
            width: 1024,
            height: 683,
            fallback: false,
          },
          {
            ratio: '16_9',
            url:
              'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_RECOMENDATION_16_9.jpg',
            width: 100,
            height: 56,
            fallback: false,
          },
          {
            ratio: '3_2',
            url:
              'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_RETINA_PORTRAIT_3_2.jpg',
            width: 640,
            height: 427,
            fallback: false,
          },
          {
            ratio: '16_9',
            url:
              'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_TABLET_LANDSCAPE_LARGE_16_9.jpg',
            width: 2048,
            height: 1152,
            fallback: false,
          },
          {
            ratio: '16_9',
            url:
              'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_RETINA_PORTRAIT_16_9.jpg',
            width: 640,
            height: 360,
            fallback: false,
          },
          {
            ratio: '3_2',
            url:
              'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_ARTIST_PAGE_3_2.jpg',
            width: 305,
            height: 203,
            fallback: false,
          },
          {
            ratio: '16_9',
            url:
              'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_TABLET_LANDSCAPE_16_9.jpg',
            width: 1024,
            height: 576,
            fallback: false,
          },
        ],
        sales: {
          public: {
            startDateTime: '2019-10-18T17:00:00Z',
            startTBD: false,
            startTBA: false,
            endDateTime: '2021-10-17T05:00:00Z',
          },
          presales: [
            {
              startDateTime: '2019-10-17T17:00:00Z',
              endDateTime: '2019-10-18T05:00:00Z',
              name: 'Live Nation Mobile App Presale',
            },
            {
              startDateTime: '2019-10-17T17:00:00Z',
              endDateTime: '2019-10-18T05:00:00Z',
              name: 'Live Nation / Venue presale',
            },
            {
              startDateTime: '2019-10-14T17:00:00Z',
              endDateTime: '2019-10-18T05:00:00Z',
              name: 'American Express® Card Member Presale',
            },
            {
              startDateTime: '2019-10-18T17:00:00Z',
              endDateTime: '2020-04-04T05:00:00Z',
              name: 'American Express® Onsale',
            },
            {
              startDateTime: '2019-10-14T17:00:00Z',
              endDateTime: '2019-10-18T05:00:00Z',
              name: 'Official Platinum Presale',
            },
            {
              startDateTime: '2019-10-18T17:00:00Z',
              endDateTime: '2020-04-19T00:00:00Z',
              name: 'Official Platinum Onsale',
            },
          ],
        },
        dates: {
          start: {
            localDate: '2021-10-16',
            localTime: '20:00:00',
            dateTime: '2021-10-17T03:00:00Z',
            dateTBD: false,
            dateTBA: false,
            timeTBA: false,
            noSpecificTime: false,
          },
          initialStartDate: {
            localDate: '2020-04-18',
            localTime: '20:00:00',
            dateTime: '2020-04-19T03:00:00Z',
          },
          timezone: 'America/Los_Angeles',
          status: {
            code: 'rescheduled',
          },
          spanMultipleDays: false,
        },
        classifications: [
          {
            primary: true,
            segment: {
              id: 'KZFzniwnSyZfZ7v7nJ',
              name: 'Music',
            },
            genre: {
              id: 'KnvZfZ7vAeA',
              name: 'Rock',
            },
            subGenre: {
              id: 'KZazBEonSMnZfZ7v6F1',
              name: 'Pop',
            },
            type: {
              id: 'KZAyXgnZfZ7v7nI',
              name: 'Undefined',
            },
            subType: {
              id: 'KZFzBErXgnZfZ7v7lJ',
              name: 'Undefined',
            },
            family: false,
          },
        ],
        promoter: {
          id: '653',
          name: 'LIVE NATION MUSIC',
          description: 'LIVE NATION MUSIC / NTL / USA',
        },
        promoters: [
          {
            id: '653',
            name: 'LIVE NATION MUSIC',
            description: 'LIVE NATION MUSIC / NTL / USA',
          },
        ],
        info:
          'To allow for more Card Members to enjoy the show, American Express has set a two-order limit for this offer. This limit applies across all Cards associated with all of your American Express accounts. Prepaid Cards are not eligible.',
        pleaseNote:
          'Originally scheduled for (April 18 & September 26, 2020). Previously purchased tickets will be honored for the new date.',
        priceRanges: [
          {
            type: 'standard',
            currency: 'USD',
            min: 99.0,
            max: 750.0,
          },
        ],
        products: [
          {
            name:
              'Hotel California Tour - LaneOne Upgrade Package (Ticket Not Included)',
            id: 'vv170Z4VGkR9_kL-',
            url:
              'https://www.ticketmaster.com/hotel-california-tour-laneone-upgrade-package-inglewood-california-10-16-2021/event/0900574BD76467E1',
            type: 'VIP',
            classifications: [
              {
                primary: true,
                segment: {
                  id: 'KZFzniwnSyZfZ7v7nJ',
                  name: 'Music',
                },
                genre: {
                  id: 'KnvZfZ7vAeA',
                  name: 'Rock',
                },
                subGenre: {
                  id: 'KZazBEonSMnZfZ7v6F1',
                  name: 'Pop',
                },
                type: {
                  id: 'KZAyXgnZfZ7v7nI',
                  name: 'Undefined',
                },
                subType: {
                  id: 'KZFzBErXgnZfZ7v7lJ',
                  name: 'Undefined',
                },
                family: false,
              },
            ],
          },
        ],
        seatmap: {
          staticUrl:
            'https://maps.ticketmaster.com/maps/geometry/3/event/09005745E5F94CFD/staticImage?type=png&systemId=HOST',
        },
        accessibility: {
          ticketLimit: 3,
        },
        ticketLimit: {
          info: 'There is an 8 ticket limit per household.',
        },
        ageRestrictions: {
          legalAgeEnforced: false,
        },
        _links: {
          self: {
            href: '/discovery/v2/events/vv1AaZAqAGkdPXfSW?locale=en-us',
          },
          attractions: [
            {
              href: '/discovery/v2/attractions/K8vZ9171ob7?locale=en-us',
            },
          ],
          venues: [
            {
              href: '/discovery/v2/venues/KovZpZAEkn6A?locale=en-us',
            },
          ],
        },
        _embedded: {
          venues: [
            {
              name: 'The Forum',
              type: 'venue',
              id: 'KovZpZAEkn6A',
              test: false,
              url:
                'https://www.ticketmaster.com/the-forum-tickets-inglewood/venue/73750',
              locale: 'en-us',
              images: [
                {
                  ratio: '3_1',
                  url:
                    'https://s1.ticketm.net/dam/v/52c/cc82c980-6a5d-4cee-9339-f382c7f5b52c_380251_SOURCE.jpg',
                  width: 1500,
                  height: 500,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dbimages/15787v.jpg',
                  width: 205,
                  height: 115,
                  fallback: false,
                },
              ],
              postalCode: '90305',
              timezone: 'America/Los_Angeles',
              city: {
                name: 'Inglewood',
              },
              state: {
                name: 'California',
                stateCode: 'CA',
              },
              country: {
                name: 'United States Of America',
                countryCode: 'US',
              },
              address: {
                line1: '3900 W Manchester Blvd.',
              },
              location: {
                longitude: '-118.341868',
                latitude: '33.9583',
              },
              markets: [
                {
                  name: 'Los Angeles',
                  id: '27',
                },
              ],
              dmas: [
                {
                  id: 223,
                },
                {
                  id: 324,
                },
                {
                  id: 354,
                },
                {
                  id: 383,
                },
              ],
              boxOfficeInfo: {
                openHoursDetail:
                  'Box office Hours: The Forum Box Office is located on the West side (Prairie Avenue side) of the venue. The Box Office is open Monday through Friday from 11:00 am - 7:00 pm, Saturdays & Sundays (on event days only), opens 12 noon',
                acceptedPaymentDetail:
                  'Cash, Visa, Mastercard, Discover, American Express. Photo ID is required for all credit card transactions.',
                willCallDetail:
                  'Location: Box Office Will Call is only open on days of events. Will Call opens two (2) hours prior to the start of the show and closes (1) hour after the start of the show. Will Call tickets can be picked up on the night of the event only. Customers must have the actual credit card used to place the order, photo ID and their confirmation number. Tickets may not be dropped off or left for other guests.',
              },
              parkingDetail:
                'Parking fees vary per event. Disabled parking is located on all sides of the main Forum lot. Please have your CA State placard available for the attendants.',
              accessibleSeatingDetail:
                "Wheelchair and Disabled Seating Policy: Wheelchair and Transfer seating is reserved exclusively for patrons with accessible needs and their companions. Accessible seating is intended for use by an individual with a mobility disability or other disability who requires the accessible features of accessible seating due to a disability, and that individual's companions. The Forum and Madison Square Garden (MSG) reserve the right to investigate potential misuse of accessible seating and to take all appropriate action against individuals who fraudulently obtain tickets for accessible seating. Tickets for accessible seating legitimately purchased for the use by an individual with a disability may be sold or transferred to another individual under the same terms and conditions applicable to other tickets. However, ***In the event such ticket is transferred to a non-disabled individual, The Forum reserves the right to deny entry to the wheelchair seating area or transfer that individual to other available seating*** Purchase Wheelchair and Disabled Seating Tickets for people with accessible needs, subject to availability, may be purchased in several ways: 1) Call Ticketmaster at 800-745-3000 2) Order Online with Ticketmaster (select your event from the list to the left) 3) Visit The Forum Box Office (see box office hours above) 2) Call Forum Disabled Services Department at 888-609-7599 For additional information regarding accessibility at The Forum or to request an interpreted performance or any other accommodations, please call the Forum Disabled Services Department any weekday between 6:30am and 1:30pm PT. Accessible Restrooms Disabled and family restrooms are located on the concourse across from sections 209-210 and 227-228. On the floor, disabled restrooms are located in the hallways adjacent to the North Hospitality, Forum Club, and Chase Lounge. While disabled guests are provided preference at disabled restrooms, any guest may use these restrooms if they require that type of accommodation. Wheelchair Escorts For individuals who have limited mobility, the Forum can provide a wheelchair transport from a guest services location to their seating areas. Upon arrival at the Forum, please ask Guest Services for assistance. Please be aware Forum escort staff is unable to remain with guests for the performance, provide restroom or concessions assistance, nor are they permitted to escort guests into the parking lots, city streets, or surrounding area. If you require a wheelchair for the duration of the show, it is suggested you bring your own wheelchair to the venue. Wheelchair Storage Guests who wish to transfer to a fixed seat from their wheelchair or mobility device, can check their device at any Guest Services location. Claim checks will be issued and guests may pick up their wheelchair until 30 minutes after conclusion of the show.",
              generalInfo: {
                generalRule:
                  'ARRIVE EARLY: Please arrive at least one-hour prior to show time. All bags, including purses, will be inspected prior to entry while all patrons will go through a screening process including the use of metal detectors and pat downs as needed. Please be mindful of traffic conditions and local street closures/construction. For a list of prohibited items, please visit www.thefabulousforum.com. No smoking of any substance and no electronic cigarettes are permitted in the Forum No recording devices are permitted No reentry No outside food or beverage is permitted There are no bag or coat check facilities Alcohol Management For most events at the Forum, alcoholic beverages are available for purchase. Staff is trained in the National Restaurant Association Training program. Alcohol sales will be limited to two alcoholic drinks per customer per transaction. Guests are not permitted to bring alcoholic beverages from outside the Forum and may not leave with alcohol purchased at the Forum. Management reserves the right to refuse the sale of alcohol to any guest. All guests may be required to show ID to purchase alcohol. Please be aware it is the policy of the Forum to require all guests who appear to be under forty (40) years of age or younger to present a valid form of ID with proof of age in order to purchase alcoholic beverages at the Forum. Pursuant to applicable state law, The Forum accepts only ID cards issued by a governmental agency that include a current description and picture of the person presenting it, which reasonably describes the person as to date of birth, weight, height, sex, and colors of eyes/hair. The Forum will not accept an ID that has been altered or is expired. We will also not accept a registration certificate issued under the Federal Selective Service Act.',
                childRule:
                  'Events are all ages (unless noted). Everyone must have a ticket to enter the venue, regardless of age. For age restricted events a valid government issues ID will be required for entry.',
              },
              upcomingEvents: {
                _total: 20,
                ticketmaster: 20,
              },
              _links: {
                self: {
                  href: '/discovery/v2/venues/KovZpZAEkn6A?locale=en-us',
                },
              },
            },
          ],
          attractions: [
            {
              name: 'Eagles',
              type: 'attraction',
              id: 'K8vZ9171ob7',
              test: false,
              url: 'https://www.ticketmaster.com/eagles-tickets/artist/734977',
              locale: 'en-us',
              externalLinks: {
                twitter: [
                  {
                    url: 'https://twitter.com/TheEaglesBand',
                  },
                ],
                itunes: [
                  {
                    url: 'https://itunes.apple.com/artist/id1053549',
                  },
                ],
                lastfm: [
                  {
                    url: 'https://www.last.fm/music/Eagles',
                  },
                ],
                wiki: [
                  {
                    url: 'https://en.wikipedia.org/wiki/Eagles_(band)',
                  },
                ],
                facebook: [
                  {
                    url: 'https://www.facebook.com/EaglesBand',
                  },
                ],
                musicbrainz: [
                  {
                    id: 'f46bd570-5768-462e-b84c-c7c993bbf47e',
                  },
                ],
                homepage: [
                  {
                    url: 'https://eagles.com/',
                  },
                ],
              },
              images: [
                {
                  ratio: '16_9',
                  url:
                    'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_EVENT_DETAIL_PAGE_16_9.jpg',
                  width: 205,
                  height: 115,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url:
                    'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_RETINA_LANDSCAPE_16_9.jpg',
                  width: 1136,
                  height: 639,
                  fallback: false,
                },
                {
                  ratio: '4_3',
                  url:
                    'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_CUSTOM.jpg',
                  width: 305,
                  height: 225,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url:
                    'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_TABLET_LANDSCAPE_3_2.jpg',
                  width: 1024,
                  height: 683,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url:
                    'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_RECOMENDATION_16_9.jpg',
                  width: 100,
                  height: 56,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url:
                    'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_RETINA_PORTRAIT_3_2.jpg',
                  width: 640,
                  height: 427,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url:
                    'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_TABLET_LANDSCAPE_LARGE_16_9.jpg',
                  width: 2048,
                  height: 1152,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url:
                    'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_RETINA_PORTRAIT_16_9.jpg',
                  width: 640,
                  height: 360,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url:
                    'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_ARTIST_PAGE_3_2.jpg',
                  width: 305,
                  height: 203,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url:
                    'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_TABLET_LANDSCAPE_16_9.jpg',
                  width: 1024,
                  height: 576,
                  fallback: false,
                },
              ],
              classifications: [
                {
                  primary: true,
                  segment: {
                    id: 'KZFzniwnSyZfZ7v7nJ',
                    name: 'Music',
                  },
                  genre: {
                    id: 'KnvZfZ7vAeA',
                    name: 'Rock',
                  },
                  subGenre: {
                    id: 'KZazBEonSMnZfZ7v6F1',
                    name: 'Pop',
                  },
                  type: {
                    id: 'KZAyXgnZfZ7v7nI',
                    name: 'Undefined',
                  },
                  subType: {
                    id: 'KZFzBErXgnZfZ7v7lJ',
                    name: 'Undefined',
                  },
                  family: false,
                },
              ],
              upcomingEvents: {
                _total: 14,
                ticketmaster: 14,
              },
              _links: {
                self: {
                  href: '/discovery/v2/attractions/K8vZ9171ob7?locale=en-us',
                },
              },
            },
          ],
        },
      },
      {
        name: 'Eagles',
        type: 'event',
        id: 'G5vYZ4VqSWoX_',
        test: false,
        url:
          'https://www.ticketmaster.com/eagles-san-francisco-california-10-22-2021/event/1C00574773F51F99',
        locale: 'en-us',
        images: [
          {
            ratio: '16_9',
            url:
              'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_EVENT_DETAIL_PAGE_16_9.jpg',
            width: 205,
            height: 115,
            fallback: false,
          },
          {
            ratio: '16_9',
            url:
              'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_RETINA_LANDSCAPE_16_9.jpg',
            width: 1136,
            height: 639,
            fallback: false,
          },
          {
            ratio: '4_3',
            url:
              'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_CUSTOM.jpg',
            width: 305,
            height: 225,
            fallback: false,
          },
          {
            ratio: '3_2',
            url:
              'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_TABLET_LANDSCAPE_3_2.jpg',
            width: 1024,
            height: 683,
            fallback: false,
          },
          {
            ratio: '16_9',
            url:
              'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_RECOMENDATION_16_9.jpg',
            width: 100,
            height: 56,
            fallback: false,
          },
          {
            ratio: '3_2',
            url:
              'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_RETINA_PORTRAIT_3_2.jpg',
            width: 640,
            height: 427,
            fallback: false,
          },
          {
            ratio: '16_9',
            url:
              'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_TABLET_LANDSCAPE_LARGE_16_9.jpg',
            width: 2048,
            height: 1152,
            fallback: false,
          },
          {
            ratio: '16_9',
            url:
              'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_RETINA_PORTRAIT_16_9.jpg',
            width: 640,
            height: 360,
            fallback: false,
          },
          {
            ratio: '3_2',
            url:
              'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_ARTIST_PAGE_3_2.jpg',
            width: 305,
            height: 203,
            fallback: false,
          },
          {
            ratio: '16_9',
            url:
              'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_TABLET_LANDSCAPE_16_9.jpg',
            width: 1024,
            height: 576,
            fallback: false,
          },
        ],
        sales: {
          public: {
            startDateTime: '2019-10-18T17:00:00Z',
            startTBD: false,
            startTBA: false,
            endDateTime: '2021-10-23T03:00:00Z',
          },
          presales: [
            {
              startDateTime: '2019-10-14T17:00:00Z',
              endDateTime: '2019-10-18T05:00:00Z',
              name: 'American Express Presale',
            },
            {
              startDateTime: '2019-10-17T17:00:00Z',
              endDateTime: '2019-10-18T05:00:00Z',
              name: 'Live Nation Mobile App Presale',
              description:
                'Download the Live Nation iPhone App now to access Live Nation Mobile App Presales. Browse, search, and discover concerts for your favorite artists near you; get alerts on presales, onsales, and last minute tickets; and easily and quickly purchase tickets while in the app. Check out set lists on the go, check in with your friends, view your ticket info, seating charts, exclusive photos, videos and more.',
              url: 'http://www.livenation.com/mobile',
            },
            {
              startDateTime: '2019-10-17T17:00:00Z',
              endDateTime: '2019-10-18T05:00:00Z',
              name: 'Live Nation Presale',
            },
            {
              startDateTime: '2019-10-18T17:00:00Z',
              endDateTime: '2020-03-29T05:00:00Z',
              name: 'Chase Cardmember Preferred Seating',
            },
            {
              startDateTime: '2019-10-18T17:00:00Z',
              endDateTime: '2020-03-29T05:00:00Z',
              name: 'American Express® Preferred Seating',
            },
            {
              startDateTime: '2019-10-14T17:00:00Z',
              endDateTime: '2019-10-18T05:00:00Z',
              name: 'Official Platinum Presale',
            },
            {
              startDateTime: '2019-10-18T17:00:00Z',
              endDateTime: '2021-10-23T03:00:00Z',
              name: 'Official Platinum On sale',
            },
          ],
        },
        dates: {
          start: {
            localDate: '2021-10-22',
            localTime: '20:00:00',
            dateTime: '2021-10-23T03:00:00Z',
            dateTBD: false,
            dateTBA: false,
            timeTBA: false,
            noSpecificTime: false,
          },
          initialStartDate: {
            localDate: '2020-10-02',
            localTime: '20:00:00',
            dateTime: '2020-10-03T03:00:00Z',
          },
          timezone: 'America/Los_Angeles',
          status: {
            code: 'rescheduled',
          },
          spanMultipleDays: false,
        },
        classifications: [
          {
            primary: true,
            segment: {
              id: 'KZFzniwnSyZfZ7v7nJ',
              name: 'Music',
            },
            genre: {
              id: 'KnvZfZ7vAeA',
              name: 'Rock',
            },
            subGenre: {
              id: 'KZazBEonSMnZfZ7v6F1',
              name: 'Pop',
            },
            type: {
              id: 'KZAyXgnZfZ7v7nI',
              name: 'Undefined',
            },
            subType: {
              id: 'KZFzBErXgnZfZ7v7lJ',
              name: 'Undefined',
            },
            family: false,
          },
        ],
        promoter: {
          id: '653',
          name: 'LIVE NATION MUSIC',
          description: 'LIVE NATION MUSIC / NTL / USA',
        },
        promoters: [
          {
            id: '653',
            name: 'LIVE NATION MUSIC',
            description: 'LIVE NATION MUSIC / NTL / USA',
          },
        ],
        info:
          'To allow for more Card Members to enjoy the show, American Express has set a two-order limit for this offer. This limit applies across all Cards associated with all of your American Express accounts. Prepaid Cards are not eligible.',
        pleaseNote:
          'This Event has been rescheduled The rescheduled date is Friday October 22, 2021 8:00 pm. Please hold onto your tickets as they will be valid for the new date.',
        priceRanges: [
          {
            type: 'standard',
            currency: 'USD',
            min: 129.0,
            max: 750.0,
          },
        ],
        products: [
          {
            name: 'Chase Center Parking - Eagles',
            id: 'G5vYZ4VRPhaaS',
            url:
              'https://www.ticketmaster.com/chase-center-parking-eagles-san-francisco-california-10-22-2021/event/1C00574BE56C9273',
            type: 'Parking',
            classifications: [
              {
                primary: true,
                segment: {
                  id: 'KZFzniwnSyZfZ7v7n1',
                  name: 'Miscellaneous',
                },
                genre: {
                  id: 'KnvZfZ7v7ll',
                  name: 'Undefined',
                },
                subGenre: {
                  id: 'KZazBEonSMnZfZ7vAv1',
                  name: 'Undefined',
                },
                type: {
                  id: 'KZAyXgnZfZ7vAva',
                  name: 'Parking',
                },
                subType: {
                  id: 'KZFzBErXgnZfZ7vAFe',
                  name: 'Parking',
                },
                family: false,
              },
            ],
          },
          {
            name:
              'Hotel California Tour - LaneOne Upgrade Package (Ticket Not Included)',
            id: 'G5vYZ4VR96IJL',
            url:
              'https://www.ticketmaster.com/hotel-california-tour-laneone-upgrade-package-san-francisco-california-10-22-2021/event/1C00574BD71E899F',
            type: 'VIP',
            classifications: [
              {
                primary: true,
                segment: {
                  id: 'KZFzniwnSyZfZ7v7nJ',
                  name: 'Music',
                },
                genre: {
                  id: 'KnvZfZ7vAeA',
                  name: 'Rock',
                },
                subGenre: {
                  id: 'KZazBEonSMnZfZ7v6F1',
                  name: 'Pop',
                },
                type: {
                  id: 'KZAyXgnZfZ7v7nI',
                  name: 'Undefined',
                },
                subType: {
                  id: 'KZFzBErXgnZfZ7v7lJ',
                  name: 'Undefined',
                },
                family: false,
              },
            ],
          },
        ],
        seatmap: {
          staticUrl:
            'https://maps.ticketmaster.com/maps/geometry/3/event/1C00574773F51F99/staticImage?type=png&systemId=HOST',
        },
        accessibility: {
          ticketLimit: 8,
        },
        ticketLimit: {
          info: 'There is an 8 ticket limit.',
        },
        ageRestrictions: {
          legalAgeEnforced: false,
        },
        _links: {
          self: {
            href: '/discovery/v2/events/G5vYZ4VqSWoX_?locale=en-us',
          },
          attractions: [
            {
              href: '/discovery/v2/attractions/K8vZ9171ob7?locale=en-us',
            },
          ],
          venues: [
            {
              href: '/discovery/v2/venues/KovZ917Ah1H?locale=en-us',
            },
          ],
        },
        _embedded: {
          venues: [
            {
              name: 'Chase Center',
              type: 'venue',
              id: 'KovZ917Ah1H',
              test: false,
              url:
                'https://www.ticketmaster.com/chase-center-tickets-san-francisco/venue/230012',
              locale: 'en-us',
              images: [
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dbimages/21707v.jpg',
                  width: 205,
                  height: 115,
                  fallback: false,
                },
              ],
              postalCode: '94158',
              timezone: 'America/Los_Angeles',
              city: {
                name: 'San Francisco',
              },
              state: {
                name: 'California',
                stateCode: 'CA',
              },
              country: {
                name: 'United States Of America',
                countryCode: 'US',
              },
              address: {
                line1: '300 16th Street',
              },
              location: {
                longitude: '-122.387464',
                latitude: '37.76797',
              },
              markets: [
                {
                  name: 'N. California/N. Nevada',
                  id: '41',
                },
              ],
              dmas: [
                {
                  id: 250,
                },
                {
                  id: 273,
                },
                {
                  id: 282,
                },
                {
                  id: 341,
                },
                {
                  id: 368,
                },
                {
                  id: 374,
                },
                {
                  id: 382,
                },
              ],
              boxOfficeInfo: {
                phoneNumberDetail:
                  'For Golden State Warriors: Ticket Sales: 1-888-GSW-HOOP (option 1) Group Sales: 1-888-GSW-HOOP (option 2) Account Service: 1-888-GSW-HOOP (option 3) Grandview Suites 1-888-GSW-HOOP (option 4) Administration: (510) 986-2200',
                openHoursDetail:
                  'Monday-Friday: 10AM - 4PM // Weekends: Only on event days pending door times.',
                acceptedPaymentDetail:
                  'You can use our proud partner’s Chase Cards for payment at the Box Office. We also accept, Cash, MasterCard, Visa, American Express, Discover',
                willCallDetail:
                  'Will Call tickets may be picked-up at the Chase Center box office with a valid government issued photo I.D. that matches the name on the order, the credit card used to make the purchase, and the confirmation number given at the time of purchase are provided. VIP PACKAGES are subject to the package providers rules for pick up. For the box office to release tickets not in your name you need to submit a written letter of authorization along with a copy of the driver’s license of the party whose name is on the account.',
              },
              accessibleSeatingDetail:
                'Accessible seating is available online through Ticketmaster.com, by calling Ticketmaster phone agents or coming to the Chase Center Box Office. Interpreters are available by request and are dependent upon availability. Please call the Chase Center for further information. Interpreters need to be reserved a minimum of 10 days in advance of the show. Service dogs are allowed at the Chase Center.',
              generalInfo: {
                generalRule:
                  'ARRIVE EARLY: Please arrive at least one-hour prior to event time. All patrons will go through a screening process upon entry. All bags larger than 14” x 14” x 6” will need to be checked at our bag check location on Warriors Way. Additionally, metal detectors will be utilized for all events. Bags that adhere to policy, must fit comfortably under your seat. Please be mindful of traffic conditions, as San Francisco can be quite congested, especially during the holidays, parades, or special events. No glass bottles, aluminum cans, coolers, thermoses, outside food, or alcoholic beverages No banners or laser pointers. No smoking or electronic cigarettes permitted anywhere in the building. No reentry. No recording devices. No outside food or drink. Alcohol Management: For most events at Chase Center, alcoholic beverages are available for purchase. Chase Center staff is trained in the nationally recognized T.E.A.M. (Techniques for Effective Alcohol Management) training program for responsible alcohol management. All guests will be required to show ID to purchase alcohol. Guests are not permitted to bring in alcoholic beverages from outside and may not leave with alcohol purchased inside the venue. Management reserves the right to refuse the sale of alcohol to any guest. Please be aware that it is the policy of Chase Center to require all guests to present a valid form of ID with proof of age in order to purchase alcoholic beverages at Chase Center. Pursuant to applicable State law, Chase Center accepts only the following forms of identification: • A valid driver’s license or non-driver identification card issued by the United States Government, a State Government, Commonwealth, Possession or Territory of the United States or a Provincial Government of Canada. • A valid passport • A valid U.S. military ID International guests wishing to consume alcohol inside the building must bring a valid passport as the only form of acceptable ID.',
                childRule:
                  'For most events, all children who have reached their second birthday require a ticket to gain admittance to Chase Center. Any child who has yet to reach their second birthday does not require a ticket, however, they may not occupy their own seat. Please check specific shows for age restrictions. Please check the event profile for your specific event for more information prior to your purchase of tickets.',
              },
              upcomingEvents: {
                _total: 14,
                ticketmaster: 14,
              },
              _links: {
                self: {
                  href: '/discovery/v2/venues/KovZ917Ah1H?locale=en-us',
                },
              },
            },
          ],
          attractions: [
            {
              name: 'Eagles',
              type: 'attraction',
              id: 'K8vZ9171ob7',
              test: false,
              url: 'https://www.ticketmaster.com/eagles-tickets/artist/734977',
              locale: 'en-us',
              externalLinks: {
                twitter: [
                  {
                    url: 'https://twitter.com/TheEaglesBand',
                  },
                ],
                itunes: [
                  {
                    url: 'https://itunes.apple.com/artist/id1053549',
                  },
                ],
                lastfm: [
                  {
                    url: 'https://www.last.fm/music/Eagles',
                  },
                ],
                wiki: [
                  {
                    url: 'https://en.wikipedia.org/wiki/Eagles_(band)',
                  },
                ],
                facebook: [
                  {
                    url: 'https://www.facebook.com/EaglesBand',
                  },
                ],
                musicbrainz: [
                  {
                    id: 'f46bd570-5768-462e-b84c-c7c993bbf47e',
                  },
                ],
                homepage: [
                  {
                    url: 'https://eagles.com/',
                  },
                ],
              },
              images: [
                {
                  ratio: '16_9',
                  url:
                    'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_EVENT_DETAIL_PAGE_16_9.jpg',
                  width: 205,
                  height: 115,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url:
                    'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_RETINA_LANDSCAPE_16_9.jpg',
                  width: 1136,
                  height: 639,
                  fallback: false,
                },
                {
                  ratio: '4_3',
                  url:
                    'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_CUSTOM.jpg',
                  width: 305,
                  height: 225,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url:
                    'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_TABLET_LANDSCAPE_3_2.jpg',
                  width: 1024,
                  height: 683,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url:
                    'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_RECOMENDATION_16_9.jpg',
                  width: 100,
                  height: 56,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url:
                    'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_RETINA_PORTRAIT_3_2.jpg',
                  width: 640,
                  height: 427,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url:
                    'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_TABLET_LANDSCAPE_LARGE_16_9.jpg',
                  width: 2048,
                  height: 1152,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url:
                    'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_RETINA_PORTRAIT_16_9.jpg',
                  width: 640,
                  height: 360,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url:
                    'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_ARTIST_PAGE_3_2.jpg',
                  width: 305,
                  height: 203,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url:
                    'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_TABLET_LANDSCAPE_16_9.jpg',
                  width: 1024,
                  height: 576,
                  fallback: false,
                },
              ],
              classifications: [
                {
                  primary: true,
                  segment: {
                    id: 'KZFzniwnSyZfZ7v7nJ',
                    name: 'Music',
                  },
                  genre: {
                    id: 'KnvZfZ7vAeA',
                    name: 'Rock',
                  },
                  subGenre: {
                    id: 'KZazBEonSMnZfZ7v6F1',
                    name: 'Pop',
                  },
                  type: {
                    id: 'KZAyXgnZfZ7v7nI',
                    name: 'Undefined',
                  },
                  subType: {
                    id: 'KZFzBErXgnZfZ7v7lJ',
                    name: 'Undefined',
                  },
                  family: false,
                },
              ],
              upcomingEvents: {
                _total: 14,
                ticketmaster: 14,
              },
              _links: {
                self: {
                  href: '/discovery/v2/attractions/K8vZ9171ob7?locale=en-us',
                },
              },
            },
          ],
        },
      },
      {
        name: 'Eagles',
        type: 'event',
        id: 'G5vzZ4g6yyBHk',
        test: false,
        url:
          'https://www.ticketmaster.com/eagles-denver-colorado-09-16-2021/event/1E005751F9E7AF06',
        locale: 'en-us',
        images: [
          {
            ratio: '16_9',
            url:
              'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_EVENT_DETAIL_PAGE_16_9.jpg',
            width: 205,
            height: 115,
            fallback: false,
          },
          {
            ratio: '16_9',
            url:
              'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_RETINA_LANDSCAPE_16_9.jpg',
            width: 1136,
            height: 639,
            fallback: false,
          },
          {
            ratio: '4_3',
            url:
              'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_CUSTOM.jpg',
            width: 305,
            height: 225,
            fallback: false,
          },
          {
            ratio: '3_2',
            url:
              'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_TABLET_LANDSCAPE_3_2.jpg',
            width: 1024,
            height: 683,
            fallback: false,
          },
          {
            ratio: '16_9',
            url:
              'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_RECOMENDATION_16_9.jpg',
            width: 100,
            height: 56,
            fallback: false,
          },
          {
            ratio: '3_2',
            url:
              'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_RETINA_PORTRAIT_3_2.jpg',
            width: 640,
            height: 427,
            fallback: false,
          },
          {
            ratio: '16_9',
            url:
              'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_TABLET_LANDSCAPE_LARGE_16_9.jpg',
            width: 2048,
            height: 1152,
            fallback: false,
          },
          {
            ratio: '16_9',
            url:
              'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_RETINA_PORTRAIT_16_9.jpg',
            width: 640,
            height: 360,
            fallback: false,
          },
          {
            ratio: '3_2',
            url:
              'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_ARTIST_PAGE_3_2.jpg',
            width: 305,
            height: 203,
            fallback: false,
          },
          {
            ratio: '16_9',
            url:
              'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_TABLET_LANDSCAPE_16_9.jpg',
            width: 1024,
            height: 576,
            fallback: false,
          },
        ],
        sales: {
          public: {
            startDateTime: '2019-11-01T16:00:00Z',
            startTBD: false,
            startTBA: false,
            endDateTime: '2021-09-17T02:00:00Z',
          },
          presales: [
            {
              startDateTime: '2019-10-28T16:00:00Z',
              endDateTime: '2019-11-01T04:00:00Z',
              name: 'American Express ® Card Member Presale',
            },
            {
              startDateTime: '2019-10-28T16:00:00Z',
              endDateTime: '2019-11-01T04:00:00Z',
              name: 'Official Platinum Presale',
            },
            {
              startDateTime: '2019-11-01T16:00:00Z',
              endDateTime: '2020-09-19T01:30:00Z',
              name: 'Official Platinum',
            },
            {
              startDateTime: '2019-10-31T16:00:00Z',
              endDateTime: '2019-11-01T04:00:00Z',
              name: 'Live Nation Mobile App Presale',
              description:
                'Download the Live Nation iPhone App now to access Live Nation Mobile App Presales. Browse, search, and discover concerts for your favorite artists near you; get alerts on presales, onsales, and last minute tickets; and easily and quickly purchase tickets while in the app. Check out set lists on the go, check in with your friends, view your ticket info, seating charts, exclusive photos, videos and more…',
              url: 'http://promo.livenation.com/iphone/',
            },
            {
              startDateTime: '2019-10-31T16:00:00Z',
              endDateTime: '2019-11-01T04:00:00Z',
              name: 'Live Nation Presale',
            },
          ],
        },
        dates: {
          start: {
            localDate: '2021-09-16',
            localTime: '20:00:00',
            dateTime: '2021-09-17T02:00:00Z',
            dateTBD: false,
            dateTBA: false,
            timeTBA: false,
            noSpecificTime: false,
          },
          initialStartDate: {
            localDate: '2020-09-18',
            localTime: '20:00:00',
            dateTime: '2020-09-19T02:00:00Z',
          },
          timezone: 'America/Denver',
          status: {
            code: 'rescheduled',
          },
          spanMultipleDays: false,
        },
        classifications: [
          {
            primary: true,
            segment: {
              id: 'KZFzniwnSyZfZ7v7nJ',
              name: 'Music',
            },
            genre: {
              id: 'KnvZfZ7vAeA',
              name: 'Rock',
            },
            subGenre: {
              id: 'KZazBEonSMnZfZ7v6F1',
              name: 'Pop',
            },
            type: {
              id: 'KZAyXgnZfZ7v7nI',
              name: 'Undefined',
            },
            subType: {
              id: 'KZFzBErXgnZfZ7v7lJ',
              name: 'Undefined',
            },
            family: false,
          },
        ],
        promoter: {
          id: '494',
          name: 'PROMOTED BY VENUE',
          description: 'PROMOTED BY VENUE / NTL / USA',
        },
        promoters: [
          {
            id: '494',
            name: 'PROMOTED BY VENUE',
            description: 'PROMOTED BY VENUE / NTL / USA',
          },
          {
            id: '4018',
            name: 'LIVE NATION - NO LN CONCERTS BRANDING',
            description: 'LIVE NATION - NO LN CONCERTS BRANDING / NTL / USA',
          },
        ],
        info:
          'To allow for more Card Members to enjoy the show, American Express has set a two-order limit for this offer. This limit applies across all Cards associated with all of your American Express accounts. Prepaid Cards are not eligible.',
        pleaseNote:
          'This event has been rescheduled to Thursday, September 16, 2021. Original tickets will be honored on the new date.',
        priceRanges: [
          {
            type: 'standard',
            currency: 'USD',
            min: 129.0,
            max: 750.0,
          },
        ],
        products: [
          {
            name:
              'Hotel California Tour - LaneOne Upgrade Package (Ticket Not Included)',
            id: 'G5vzZ4g5Mpyam',
            url:
              'https://www.ticketmaster.com/hotel-california-tour-laneone-upgrade-package-denver-colorado-09-16-2021/event/1E005752F75B926E',
            type: 'VIP',
            classifications: [
              {
                primary: true,
                segment: {
                  id: 'KZFzniwnSyZfZ7v7nJ',
                  name: 'Music',
                },
                genre: {
                  id: 'KnvZfZ7vAeA',
                  name: 'Rock',
                },
                subGenre: {
                  id: 'KZazBEonSMnZfZ7v6F1',
                  name: 'Pop',
                },
                type: {
                  id: 'KZAyXgnZfZ7v7nI',
                  name: 'Undefined',
                },
                subType: {
                  id: 'KZFzBErXgnZfZ7v7lJ',
                  name: 'Undefined',
                },
                family: false,
              },
            ],
          },
        ],
        seatmap: {
          staticUrl:
            'https://maps.ticketmaster.com/maps/geometry/3/event/1E005751F9E7AF06/staticImage?type=png&systemId=HOST',
        },
        accessibility: {
          ticketLimit: 4,
        },
        ticketLimit: {
          info: 'There is an overall 8 ticket limit for this event.',
        },
        ageRestrictions: {
          legalAgeEnforced: false,
        },
        _links: {
          self: {
            href: '/discovery/v2/events/G5vzZ4g6yyBHk?locale=en-us',
          },
          attractions: [
            {
              href: '/discovery/v2/attractions/K8vZ9171ob7?locale=en-us',
            },
          ],
          venues: [
            {
              href: '/discovery/v2/venues/KovZpZAFaJeA?locale=en-us',
            },
          ],
        },
        _embedded: {
          venues: [
            {
              name: 'Ball Arena',
              type: 'venue',
              id: 'KovZpZAFaJeA',
              test: false,
              url:
                'https://www.ticketmaster.com/ball-arena-tickets-denver/venue/246112',
              locale: 'en-us',
              images: [
                {
                  ratio: '16_9',
                  url:
                    'https://s1.ticketm.net/dam/v/c8c/314a72bc-c758-42f2-81b3-ca6ea0fc1c8c_414341_SOURCE.jpg',
                  width: 1948,
                  height: 1082,
                  fallback: false,
                  attribution: 'CC BY-SA 2.5 via Wikipedia',
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dbimages/22044v.jpg',
                  width: 205,
                  height: 115,
                  fallback: false,
                },
              ],
              postalCode: '80204',
              timezone: 'America/Denver',
              city: {
                name: 'Denver',
              },
              state: {
                name: 'Colorado',
                stateCode: 'CO',
              },
              country: {
                name: 'United States Of America',
                countryCode: 'US',
              },
              address: {
                line1: '1000 Chopper Circle',
              },
              location: {
                longitude: '-105.010166',
                latitude: '39.74724',
              },
              markets: [
                {
                  name: 'Denver and More',
                  id: '6',
                },
                {
                  name: 'All of US',
                  id: '51',
                },
              ],
              dmas: [
                {
                  id: 200,
                },
                {
                  id: 248,
                },
                {
                  id: 254,
                },
                {
                  id: 264,
                },
                {
                  id: 285,
                },
                {
                  id: 347,
                },
              ],
              boxOfficeInfo: {
                phoneNumberDetail:
                  'The general Ball Arena information number is (303) 405-1100. For more information you can also go to Ball Arena website, www.BallArena.com.',
                openHoursDetail:
                  'Ball Arena Box Office opens at 12PM (noon) on most event days. For events that start at 1PM or earlier, the Box Office will open two hours prior to the event start time. Please visit https://www.BallArena.com/events-tickets/calendar to check what dates the Box Office will be open.',
                acceptedPaymentDetail:
                  'Cash, Mc, Visa, Discover, AMX. No checks for concerts and other events!',
                willCallDetail:
                  'WILL CALL IS AVAILABLE AT THE BOX OFFICE ON THE DAY OF THE SHOW ONLY, STARTING 1 1/2 HOURS BEFORE SHOWTIME.',
              },
              parkingDetail:
                'Parking at Ball Arena may be easily accessed from I-25 and Auraria Parkway when traveling from the south, or I-25 and Speer Blvd when traveling from the North. For more information on Ball Arena parking and rates, please call 303.405.1299.',
              accessibleSeatingDetail:
                'Ball Arena is committed to providing every Guest with a comfortable and enjoyable experience in the arena, including Guests with disabilities. Wheelchair and accessible seating tickets and companion seating is available for purchase in each of the wheelchair seating sections.',
              generalInfo: {
                generalRule:
                  'Prohibited items can be viewed at https://www.BallArena.com/plan-your-visit/prohibited-items.',
                childRule:
                  'Vary by event. Under 2 free - Child must sit on an adults lap.',
              },
              upcomingEvents: {
                _total: 41,
                tmr: 3,
                ticketmaster: 38,
              },
              _links: {
                self: {
                  href: '/discovery/v2/venues/KovZpZAFaJeA?locale=en-us',
                },
              },
            },
          ],
          attractions: [
            {
              name: 'Eagles',
              type: 'attraction',
              id: 'K8vZ9171ob7',
              test: false,
              url: 'https://www.ticketmaster.com/eagles-tickets/artist/734977',
              locale: 'en-us',
              externalLinks: {
                twitter: [
                  {
                    url: 'https://twitter.com/TheEaglesBand',
                  },
                ],
                itunes: [
                  {
                    url: 'https://itunes.apple.com/artist/id1053549',
                  },
                ],
                lastfm: [
                  {
                    url: 'https://www.last.fm/music/Eagles',
                  },
                ],
                wiki: [
                  {
                    url: 'https://en.wikipedia.org/wiki/Eagles_(band)',
                  },
                ],
                facebook: [
                  {
                    url: 'https://www.facebook.com/EaglesBand',
                  },
                ],
                musicbrainz: [
                  {
                    id: 'f46bd570-5768-462e-b84c-c7c993bbf47e',
                  },
                ],
                homepage: [
                  {
                    url: 'https://eagles.com/',
                  },
                ],
              },
              images: [
                {
                  ratio: '16_9',
                  url:
                    'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_EVENT_DETAIL_PAGE_16_9.jpg',
                  width: 205,
                  height: 115,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url:
                    'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_RETINA_LANDSCAPE_16_9.jpg',
                  width: 1136,
                  height: 639,
                  fallback: false,
                },
                {
                  ratio: '4_3',
                  url:
                    'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_CUSTOM.jpg',
                  width: 305,
                  height: 225,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url:
                    'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_TABLET_LANDSCAPE_3_2.jpg',
                  width: 1024,
                  height: 683,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url:
                    'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_RECOMENDATION_16_9.jpg',
                  width: 100,
                  height: 56,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url:
                    'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_RETINA_PORTRAIT_3_2.jpg',
                  width: 640,
                  height: 427,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url:
                    'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_TABLET_LANDSCAPE_LARGE_16_9.jpg',
                  width: 2048,
                  height: 1152,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url:
                    'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_RETINA_PORTRAIT_16_9.jpg',
                  width: 640,
                  height: 360,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url:
                    'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_ARTIST_PAGE_3_2.jpg',
                  width: 305,
                  height: 203,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url:
                    'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_TABLET_LANDSCAPE_16_9.jpg',
                  width: 1024,
                  height: 576,
                  fallback: false,
                },
              ],
              classifications: [
                {
                  primary: true,
                  segment: {
                    id: 'KZFzniwnSyZfZ7v7nJ',
                    name: 'Music',
                  },
                  genre: {
                    id: 'KnvZfZ7vAeA',
                    name: 'Rock',
                  },
                  subGenre: {
                    id: 'KZazBEonSMnZfZ7v6F1',
                    name: 'Pop',
                  },
                  type: {
                    id: 'KZAyXgnZfZ7v7nI',
                    name: 'Undefined',
                  },
                  subType: {
                    id: 'KZFzBErXgnZfZ7v7lJ',
                    name: 'Undefined',
                  },
                  family: false,
                },
              ],
              upcomingEvents: {
                _total: 14,
                ticketmaster: 14,
              },
              _links: {
                self: {
                  href: '/discovery/v2/attractions/K8vZ9171ob7?locale=en-us',
                },
              },
            },
          ],
        },
      },
      {
        name: 'Eagles',
        type: 'event',
        id: 'vv1AkZAq8GkezVfHD',
        test: false,
        url:
          'https://www.ticketmaster.com/eagles-saint-paul-minnesota-10-01-2021/event/06005750B8D14F3B',
        locale: 'en-us',
        images: [
          {
            ratio: '16_9',
            url:
              'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_EVENT_DETAIL_PAGE_16_9.jpg',
            width: 205,
            height: 115,
            fallback: false,
          },
          {
            ratio: '16_9',
            url:
              'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_RETINA_LANDSCAPE_16_9.jpg',
            width: 1136,
            height: 639,
            fallback: false,
          },
          {
            ratio: '4_3',
            url:
              'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_CUSTOM.jpg',
            width: 305,
            height: 225,
            fallback: false,
          },
          {
            ratio: '3_2',
            url:
              'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_TABLET_LANDSCAPE_3_2.jpg',
            width: 1024,
            height: 683,
            fallback: false,
          },
          {
            ratio: '16_9',
            url:
              'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_RECOMENDATION_16_9.jpg',
            width: 100,
            height: 56,
            fallback: false,
          },
          {
            ratio: '3_2',
            url:
              'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_RETINA_PORTRAIT_3_2.jpg',
            width: 640,
            height: 427,
            fallback: false,
          },
          {
            ratio: '16_9',
            url:
              'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_TABLET_LANDSCAPE_LARGE_16_9.jpg',
            width: 2048,
            height: 1152,
            fallback: false,
          },
          {
            ratio: '16_9',
            url:
              'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_RETINA_PORTRAIT_16_9.jpg',
            width: 640,
            height: 360,
            fallback: false,
          },
          {
            ratio: '3_2',
            url:
              'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_ARTIST_PAGE_3_2.jpg',
            width: 305,
            height: 203,
            fallback: false,
          },
          {
            ratio: '16_9',
            url:
              'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_TABLET_LANDSCAPE_16_9.jpg',
            width: 1024,
            height: 576,
            fallback: false,
          },
        ],
        sales: {
          public: {
            startDateTime: '2019-11-01T15:00:00Z',
            startTBD: false,
            startTBA: false,
            endDateTime: '2021-10-02T01:00:00Z',
          },
          presales: [
            {
              startDateTime: '2019-10-28T15:00:00Z',
              endDateTime: '2019-11-01T03:00:00Z',
              name: 'American Express® Card Member Presale',
            },
            {
              startDateTime: '2019-10-31T15:00:00Z',
              endDateTime: '2019-11-01T03:00:00Z',
              name: 'Live Nation Mobile App Presale',
              description:
                'Download the Live Nation iPhone App now to access Live Nation Mobile App Presales. Browse, search, and discover concerts for your favorite artists near you; get alerts on presales, onsales, and last minute tickets; and easily and quickly purchase tickets while in the app. Check out set lists on the go, check in with your friends, view your ticket info, seating charts, exclusive photos, videos and more.',
              url: 'http://www.livenation.com/mobile',
            },
            {
              startDateTime: '2019-10-31T15:00:00Z',
              endDateTime: '2019-11-01T03:00:00Z',
              name: 'Live Nation Presale',
            },
            {
              startDateTime: '2019-10-31T15:00:00Z',
              endDateTime: '2019-11-01T03:00:00Z',
              name: 'Venue Presale',
            },
            {
              startDateTime: '2019-10-31T15:00:00Z',
              endDateTime: '2019-11-01T03:00:00Z',
              name: 'Radio Presale',
            },
            {
              startDateTime: '2019-11-01T15:00:00Z',
              endDateTime: '2020-09-24T03:00:00Z',
              name: 'American Express® Preferred Seating',
            },
            {
              startDateTime: '2019-10-28T15:00:00Z',
              endDateTime: '2019-11-01T03:00:00Z',
              name: 'Official Platinum Presale',
            },
            {
              startDateTime: '2019-11-01T15:00:00Z',
              endDateTime: '2020-10-17T01:00:00Z',
              name: 'Official Platinum',
            },
          ],
        },
        dates: {
          start: {
            localDate: '2021-10-01',
            localTime: '20:00:00',
            dateTime: '2021-10-02T01:00:00Z',
            dateTBD: false,
            dateTBA: false,
            timeTBA: false,
            noSpecificTime: false,
          },
          initialStartDate: {
            localDate: '2020-04-03',
            localTime: '20:00:00',
            dateTime: '2020-04-04T01:00:00Z',
          },
          timezone: 'America/Chicago',
          status: {
            code: 'rescheduled',
          },
          spanMultipleDays: false,
        },
        classifications: [
          {
            primary: true,
            segment: {
              id: 'KZFzniwnSyZfZ7v7nJ',
              name: 'Music',
            },
            genre: {
              id: 'KnvZfZ7vAeA',
              name: 'Rock',
            },
            subGenre: {
              id: 'KZazBEonSMnZfZ7v6F1',
              name: 'Pop',
            },
            type: {
              id: 'KZAyXgnZfZ7v7nI',
              name: 'Undefined',
            },
            subType: {
              id: 'KZFzBErXgnZfZ7v7lJ',
              name: 'Undefined',
            },
            family: false,
          },
        ],
        promoter: {
          id: '653',
          name: 'LIVE NATION MUSIC',
          description: 'LIVE NATION MUSIC / NTL / USA',
        },
        promoters: [
          {
            id: '653',
            name: 'LIVE NATION MUSIC',
            description: 'LIVE NATION MUSIC / NTL / USA',
          },
        ],
        info:
          'To allow for more Card Members to enjoy the show, American Express has set a two-order limit for this offer. This limit applies across all Cards associated with all of your American Express accounts. Prepaid Cards are not eligible.',
        pleaseNote:
          'This event has been rescheduled to October 1 2021 from April 3 2020. Original tickets will be honored on the new date. ALL PREVIOUSLY PURCHASED TICKETS WILL BE HONORED FOR YOUR CORRESPONDING NEWLY RESCHEDULED DATE',
        priceRanges: [
          {
            type: 'standard',
            currency: 'USD',
            min: 126.0,
            max: 767.0,
          },
        ],
        products: [
          {
            name:
              'Parking At Rivercentre Parking Ramp - 150 West Kellogg Boulevard',
            id: 'vv1AkZAqpGkdei6uj',
            url:
              'https://www.ticketmaster.com/parking-at-rivercentre-parking-ramp-150-saint-paul-minnesota-10-01-2021/event/06005756C2B0735C',
            type: 'Parking',
            classifications: [
              {
                primary: true,
                segment: {
                  id: 'KZFzniwnSyZfZ7v7n1',
                  name: 'Miscellaneous',
                },
                genre: {
                  id: 'KnvZfZ7v7ll',
                  name: 'Undefined',
                },
                subGenre: {
                  id: 'KZazBEonSMnZfZ7vAv1',
                  name: 'Undefined',
                },
                type: {
                  id: 'KZAyXgnZfZ7vAva',
                  name: 'Parking',
                },
                subType: {
                  id: 'KZFzBErXgnZfZ7vAFe',
                  name: 'Parking',
                },
                family: false,
              },
            ],
          },
          {
            name: "Jack Daniel's Old No. 7 Club pre-show dinner buffet",
            id: 'vv1FbZ4gC3r3Zd5AA',
            url:
              'https://www.ticketmaster.com/jack-daniels-old-no-7-club-saint-paul-minnesota-10-01-2021/event/0600575392792A44',
            type: 'Meal Package',
            classifications: [
              {
                primary: true,
                segment: {
                  id: 'KZFzniwnSyZfZ7v7n1',
                  name: 'Miscellaneous',
                },
                genre: {
                  id: 'KnvZfZ7v7ll',
                  name: 'Undefined',
                },
                subGenre: {
                  id: 'KZazBEonSMnZfZ7vAv1',
                  name: 'Undefined',
                },
                type: {
                  id: 'KZAyXgnZfZ7v7nJ',
                  name: 'Upsell',
                },
                subType: {
                  id: 'KZFzBErXgnZfZ7v7lA',
                  name: 'Meal Package',
                },
                family: false,
              },
            ],
          },
          {
            name:
              'Hotel California Tour - LaneOne Upgrade Package (Ticket Not Included)',
            id: 'vv16kZAq3vbZA2a587',
            url:
              'https://www.ticketmaster.com/hotel-california-tour-laneone-upgrade-package-saint-paul-minnesota-10-01-2021/event/06005752058E8AF3',
            type: 'VIP',
            classifications: [
              {
                primary: true,
                segment: {
                  id: 'KZFzniwnSyZfZ7v7nJ',
                  name: 'Music',
                },
                genre: {
                  id: 'KnvZfZ7vAeA',
                  name: 'Rock',
                },
                subGenre: {
                  id: 'KZazBEonSMnZfZ7v6F1',
                  name: 'Pop',
                },
                type: {
                  id: 'KZAyXgnZfZ7v7nI',
                  name: 'Undefined',
                },
                subType: {
                  id: 'KZFzBErXgnZfZ7v7lJ',
                  name: 'Undefined',
                },
                family: false,
              },
            ],
          },
        ],
        seatmap: {
          staticUrl:
            'https://maps.ticketmaster.com/maps/geometry/3/event/06005750B8D14F3B/staticImage?type=png&systemId=HOST',
        },
        accessibility: {
          info:
            'Wheelchair accessible is located (subject to availability) in the following sections: 117, 103, 104, 107, 110, C10, C22, C12, C20, 207, 215, 208, 119, 123, C32, C40, and 201. For sight or hearing needs please call 800-745-3000.',
          ticketLimit: 4,
        },
        ticketLimit: {
          info: 'There is an overall 8 ticket limit for this event.',
        },
        ageRestrictions: {
          legalAgeEnforced: false,
        },
        _links: {
          self: {
            href: '/discovery/v2/events/vv1AkZAq8GkezVfHD?locale=en-us',
          },
          attractions: [
            {
              href: '/discovery/v2/attractions/K8vZ9171ob7?locale=en-us',
            },
          ],
          venues: [
            {
              href: '/discovery/v2/venues/KovZpZA6AJdA?locale=en-us',
            },
          ],
        },
        _embedded: {
          venues: [
            {
              name: 'Xcel Energy Center',
              type: 'venue',
              id: 'KovZpZA6AJdA',
              test: false,
              url:
                'https://www.ticketmaster.com/xcel-energy-center-tickets-saint-paul/venue/49594',
              locale: 'en-us',
              images: [
                {
                  ratio: '3_1',
                  url:
                    'https://s1.ticketm.net/dam/v/b6c/14e4df54-3cf8-4b92-80eb-497421b22b6c_529471_SOURCE.jpg',
                  width: 1500,
                  height: 500,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dbimages/18766v.jpg',
                  width: 205,
                  height: 115,
                  fallback: false,
                },
              ],
              postalCode: '55102',
              timezone: 'America/Chicago',
              city: {
                name: 'Saint Paul',
              },
              state: {
                name: 'Minnesota',
                stateCode: 'MN',
              },
              country: {
                name: 'United States Of America',
                countryCode: 'US',
              },
              address: {
                line1: '199 Kellogg Blvd',
              },
              location: {
                longitude: '-93.10121819',
                latitude: '44.94489438',
              },
              markets: [
                {
                  name: 'Minneapolis/St. Paul and More',
                  id: '16',
                },
                {
                  name: 'All of US',
                  id: '51',
                },
              ],
              dmas: [
                {
                  id: 200,
                },
                {
                  id: 268,
                },
                {
                  id: 329,
                },
                {
                  id: 336,
                },
                {
                  id: 371,
                },
              ],
              social: {
                twitter: {
                  handle: '@XcelEnergyCtr',
                },
              },
              boxOfficeInfo: {
                phoneNumberDetail:
                  'Box office phone: (651) 726-8240 Minnesota Wild group sales: (651) 222-WILD Group sales for other events: 651-312-3486 Box office fax: (651) 726-8246 Internet web site: www.xcelenergycenter.com Internet e-mail: info@xcelenergycenter.com',
                openHoursDetail:
                  'Regular Box Office Hours (September - April) Monday - Saturday: 10:00 AM - 6:00 PM Sunday: Closed, except for events (opens 4 hours prior to the event start time) and on sales (open for on sale time only) Summer Box Office Hours (May - August) Monday - Friday: 10:00 AM - 6:00 PM Saturday & Sunday: Closed, except for events (opens 4 hours prior to the event start time) and on sales (open for on sale time only) Based on the Xcel Energy Center event schedule, closing times may be extended. The box office may be closed on holidays.',
                acceptedPaymentDetail:
                  'Cash, Visa, Mastercard, Discover, American Express.',
                willCallDetail:
                  'Will Call windows open 90 minutes prior to the event and will remain open through the second period for Minnesota Wild games. Will Call is located in the main lobby of Gate 1 at Xcel Energy Center. Tickets are released only to the person whose name appears on the Ticketmaster account or will call envelope. No one will be given tickets designated for another person. Proper photo identification is required, and purchasing credit card, if applicable. A signature from the person authorized to pick up the tickets will be obtained at the time of pick up.',
              },
              parkingDetail:
                'Xcel Energy Center is serviced by two parking ramps (RiverCentre and Kellogg) directly connected to the complex. For most Xcel Energy Center events pre-paid parking is available in the RiverCentre ramp. Please visit the event page of the specific event you are attending to purchase pre-paid parking. - The Saint Paul RiverCentre ramp is situated across from Saint Paul RiverCentre/Xcel Energy Center with the entrance located on the south side of Kellogg Boulevard. - The Kellogg ramp is below Saint Paul RiverCentre with the entrance located on the north side of Kellogg Boulevard. There are numerous other places to park in downtown St. Paul in both covered parking ramps and open lots. Detailed information is available at http://www.xcelenergycenter.com/plan-your-visit/parking.',
              accessibleSeatingDetail:
                'Accommodations include accessible parking and drop-off areas, elevators, escalators, wheelchair accessible seating with excellent sightlines, accessible restrooms. ASL interpreters are provided upon advance request. Assisted listening devices are available, as well as Braille and large print programs upon request. There is elevator access to every level of the arena.',
              generalInfo: {
                generalRule:
                  'Cameras with a detachable lens or lens of more than two (2) inches are prohibited from all Xcel Energy Center concerts. The use of flash photography may also be prohibited. The event producer reserves the right to deny camera use at any time before or during the event and to prohibit the use of any camera that is deemed unacceptable. Video recorders or digital cameras with recording capabilities are prohibited at any time during an event. Xcel Energy Center reserves the right to examine and prohibit use of any camera that staff deem unacceptable. Audio recorders are not allowed at any time. Cans, bottles, coolers and other outside food and beverages are not allowed.',
                childRule:
                  "For most events, including Minnesota Wild games, children under the age of 24 months will be admitted without a ticket if held on an adult's lap. For children's shows such as Disney on Ice, children 12 months and older need a ticket.",
              },
              upcomingEvents: {
                _total: 17,
                ticketmaster: 17,
              },
              _links: {
                self: {
                  href: '/discovery/v2/venues/KovZpZA6AJdA?locale=en-us',
                },
              },
            },
          ],
          attractions: [
            {
              name: 'Eagles',
              type: 'attraction',
              id: 'K8vZ9171ob7',
              test: false,
              url: 'https://www.ticketmaster.com/eagles-tickets/artist/734977',
              locale: 'en-us',
              externalLinks: {
                twitter: [
                  {
                    url: 'https://twitter.com/TheEaglesBand',
                  },
                ],
                itunes: [
                  {
                    url: 'https://itunes.apple.com/artist/id1053549',
                  },
                ],
                lastfm: [
                  {
                    url: 'https://www.last.fm/music/Eagles',
                  },
                ],
                wiki: [
                  {
                    url: 'https://en.wikipedia.org/wiki/Eagles_(band)',
                  },
                ],
                facebook: [
                  {
                    url: 'https://www.facebook.com/EaglesBand',
                  },
                ],
                musicbrainz: [
                  {
                    id: 'f46bd570-5768-462e-b84c-c7c993bbf47e',
                  },
                ],
                homepage: [
                  {
                    url: 'https://eagles.com/',
                  },
                ],
              },
              images: [
                {
                  ratio: '16_9',
                  url:
                    'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_EVENT_DETAIL_PAGE_16_9.jpg',
                  width: 205,
                  height: 115,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url:
                    'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_RETINA_LANDSCAPE_16_9.jpg',
                  width: 1136,
                  height: 639,
                  fallback: false,
                },
                {
                  ratio: '4_3',
                  url:
                    'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_CUSTOM.jpg',
                  width: 305,
                  height: 225,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url:
                    'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_TABLET_LANDSCAPE_3_2.jpg',
                  width: 1024,
                  height: 683,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url:
                    'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_RECOMENDATION_16_9.jpg',
                  width: 100,
                  height: 56,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url:
                    'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_RETINA_PORTRAIT_3_2.jpg',
                  width: 640,
                  height: 427,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url:
                    'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_TABLET_LANDSCAPE_LARGE_16_9.jpg',
                  width: 2048,
                  height: 1152,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url:
                    'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_RETINA_PORTRAIT_16_9.jpg',
                  width: 640,
                  height: 360,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url:
                    'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_ARTIST_PAGE_3_2.jpg',
                  width: 305,
                  height: 203,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url:
                    'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_TABLET_LANDSCAPE_16_9.jpg',
                  width: 1024,
                  height: 576,
                  fallback: false,
                },
              ],
              classifications: [
                {
                  primary: true,
                  segment: {
                    id: 'KZFzniwnSyZfZ7v7nJ',
                    name: 'Music',
                  },
                  genre: {
                    id: 'KnvZfZ7vAeA',
                    name: 'Rock',
                  },
                  subGenre: {
                    id: 'KZazBEonSMnZfZ7v6F1',
                    name: 'Pop',
                  },
                  type: {
                    id: 'KZAyXgnZfZ7v7nI',
                    name: 'Undefined',
                  },
                  subType: {
                    id: 'KZFzBErXgnZfZ7v7lJ',
                    name: 'Undefined',
                  },
                  family: false,
                },
              ],
              upcomingEvents: {
                _total: 14,
                ticketmaster: 14,
              },
              _links: {
                self: {
                  href: '/discovery/v2/attractions/K8vZ9171ob7?locale=en-us',
                },
              },
            },
          ],
        },
      },
      {
        name: 'Eagles',
        type: 'event',
        id: 'vv1AkZAq8GkezgfTh',
        test: false,
        url:
          'https://www.ticketmaster.com/eagles-saint-paul-minnesota-10-02-2021/event/06005750B8D54FDB',
        locale: 'en-us',
        images: [
          {
            ratio: '16_9',
            url:
              'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_EVENT_DETAIL_PAGE_16_9.jpg',
            width: 205,
            height: 115,
            fallback: false,
          },
          {
            ratio: '16_9',
            url:
              'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_RETINA_LANDSCAPE_16_9.jpg',
            width: 1136,
            height: 639,
            fallback: false,
          },
          {
            ratio: '4_3',
            url:
              'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_CUSTOM.jpg',
            width: 305,
            height: 225,
            fallback: false,
          },
          {
            ratio: '3_2',
            url:
              'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_TABLET_LANDSCAPE_3_2.jpg',
            width: 1024,
            height: 683,
            fallback: false,
          },
          {
            ratio: '16_9',
            url:
              'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_RECOMENDATION_16_9.jpg',
            width: 100,
            height: 56,
            fallback: false,
          },
          {
            ratio: '3_2',
            url:
              'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_RETINA_PORTRAIT_3_2.jpg',
            width: 640,
            height: 427,
            fallback: false,
          },
          {
            ratio: '16_9',
            url:
              'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_TABLET_LANDSCAPE_LARGE_16_9.jpg',
            width: 2048,
            height: 1152,
            fallback: false,
          },
          {
            ratio: '16_9',
            url:
              'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_RETINA_PORTRAIT_16_9.jpg',
            width: 640,
            height: 360,
            fallback: false,
          },
          {
            ratio: '3_2',
            url:
              'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_ARTIST_PAGE_3_2.jpg',
            width: 305,
            height: 203,
            fallback: false,
          },
          {
            ratio: '16_9',
            url:
              'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_TABLET_LANDSCAPE_16_9.jpg',
            width: 1024,
            height: 576,
            fallback: false,
          },
        ],
        sales: {
          public: {
            startDateTime: '2019-11-01T15:00:00Z',
            startTBD: false,
            startTBA: false,
            endDateTime: '2021-10-03T01:00:00Z',
          },
          presales: [
            {
              startDateTime: '2019-10-28T15:00:00Z',
              endDateTime: '2019-11-01T03:00:00Z',
              name: 'American Express® Card Member Presale',
            },
            {
              startDateTime: '2019-10-31T15:00:00Z',
              endDateTime: '2019-11-01T03:00:00Z',
              name: 'Live Nation Mobile App Presale',
              description:
                'Download the Live Nation iPhone App now to access Live Nation Mobile App Presales. Browse, search, and discover concerts for your favorite artists near you; get alerts on presales, onsales, and last minute tickets; and easily and quickly purchase tickets while in the app. Check out set lists on the go, check in with your friends, view your ticket info, seating charts, exclusive photos, videos and more.',
              url: 'http://www.livenation.com/mobile',
            },
            {
              startDateTime: '2019-10-31T15:00:00Z',
              endDateTime: '2019-11-01T03:00:00Z',
              name: 'Live Nation Presale',
            },
            {
              startDateTime: '2019-10-31T15:00:00Z',
              endDateTime: '2019-11-01T03:00:00Z',
              name: 'Venue Presale',
            },
            {
              startDateTime: '2019-10-31T15:00:00Z',
              endDateTime: '2019-11-01T03:00:00Z',
              name: 'Radio Presale',
            },
            {
              startDateTime: '2019-11-01T15:00:00Z',
              endDateTime: '2020-09-25T03:00:00Z',
              name: 'American Express® Preferred Seating',
            },
            {
              startDateTime: '2019-10-28T15:00:00Z',
              endDateTime: '2019-11-01T03:00:00Z',
              name: 'Official Platinum Presale',
            },
            {
              startDateTime: '2019-11-01T15:00:00Z',
              endDateTime: '2020-10-18T01:00:00Z',
              name: 'Official Platinum',
            },
          ],
        },
        dates: {
          start: {
            localDate: '2021-10-02',
            localTime: '20:00:00',
            dateTime: '2021-10-03T01:00:00Z',
            dateTBD: false,
            dateTBA: false,
            timeTBA: false,
            noSpecificTime: false,
          },
          initialStartDate: {
            localDate: '2020-04-04',
            localTime: '20:00:00',
            dateTime: '2020-04-05T01:00:00Z',
          },
          timezone: 'America/Chicago',
          status: {
            code: 'rescheduled',
          },
          spanMultipleDays: false,
        },
        classifications: [
          {
            primary: true,
            segment: {
              id: 'KZFzniwnSyZfZ7v7nJ',
              name: 'Music',
            },
            genre: {
              id: 'KnvZfZ7vAeA',
              name: 'Rock',
            },
            subGenre: {
              id: 'KZazBEonSMnZfZ7v6F1',
              name: 'Pop',
            },
            type: {
              id: 'KZAyXgnZfZ7v7nI',
              name: 'Undefined',
            },
            subType: {
              id: 'KZFzBErXgnZfZ7v7lJ',
              name: 'Undefined',
            },
            family: false,
          },
        ],
        promoter: {
          id: '653',
          name: 'LIVE NATION MUSIC',
          description: 'LIVE NATION MUSIC / NTL / USA',
        },
        promoters: [
          {
            id: '653',
            name: 'LIVE NATION MUSIC',
            description: 'LIVE NATION MUSIC / NTL / USA',
          },
        ],
        info:
          'To allow for more Card Members to enjoy the show, American Express has set a two-order limit for this offer. This limit applies across all Cards associated with all of your American Express accounts. Prepaid Cards are not eligible.',
        pleaseNote:
          'This event has been rescheduled to October 2 2021 from April 4 2020. Original tickets will be honored on the new date. ALL PREVIOUSLY PURCHASED TICKETS WILL BE HONORED FOR YOUR CORRESPONDING NEWLY RESCHEDULED DATE',
        priceRanges: [
          {
            type: 'standard',
            currency: 'USD',
            min: 126.0,
            max: 767.0,
          },
        ],
        products: [
          {
            name:
              'Parking At Rivercentre Parking Ramp - 150 West Kellogg Boulevard',
            id: 'vv1AkZAqpGkdec6uL',
            url:
              'https://www.ticketmaster.com/parking-at-rivercentre-parking-ramp-150-saint-paul-minnesota-10-02-2021/event/06005756C2B4735F',
            type: 'Parking',
            classifications: [
              {
                primary: true,
                segment: {
                  id: 'KZFzniwnSyZfZ7v7n1',
                  name: 'Miscellaneous',
                },
                genre: {
                  id: 'KnvZfZ7v7ll',
                  name: 'Undefined',
                },
                subGenre: {
                  id: 'KZazBEonSMnZfZ7vAv1',
                  name: 'Undefined',
                },
                type: {
                  id: 'KZAyXgnZfZ7vAva',
                  name: 'Parking',
                },
                subType: {
                  id: 'KZFzBErXgnZfZ7vAFe',
                  name: 'Parking',
                },
                family: false,
              },
            ],
          },
          {
            name:
              'Hotel California Tour - LaneOne Upgrade Package (Ticket Not Included)',
            id: 'vv16kZAq3v_ZAua58F',
            url:
              'https://www.ticketmaster.com/hotel-california-tour-laneone-upgrade-package-saint-paul-minnesota-10-02-2021/event/06005752059C8AF7',
            type: 'VIP',
            classifications: [
              {
                primary: true,
                segment: {
                  id: 'KZFzniwnSyZfZ7v7nJ',
                  name: 'Music',
                },
                genre: {
                  id: 'KnvZfZ7vAeA',
                  name: 'Rock',
                },
                subGenre: {
                  id: 'KZazBEonSMnZfZ7v6F1',
                  name: 'Pop',
                },
                type: {
                  id: 'KZAyXgnZfZ7v7nI',
                  name: 'Undefined',
                },
                subType: {
                  id: 'KZFzBErXgnZfZ7v7lJ',
                  name: 'Undefined',
                },
                family: false,
              },
            ],
          },
          {
            name: "Jack Daniel's Old No. 7 Club pre-show dinner buffet",
            id: 'vv16kZAqK0EZAud5A5',
            url:
              'https://www.ticketmaster.com/jack-daniels-old-no-7-club-saint-paul-minnesota-10-02-2021/event/06005753927C2A4A',
            type: 'Meal Package',
            classifications: [
              {
                primary: true,
                segment: {
                  id: 'KZFzniwnSyZfZ7v7n1',
                  name: 'Miscellaneous',
                },
                genre: {
                  id: 'KnvZfZ7v7ll',
                  name: 'Undefined',
                },
                subGenre: {
                  id: 'KZazBEonSMnZfZ7vAv1',
                  name: 'Undefined',
                },
                type: {
                  id: 'KZAyXgnZfZ7v7nJ',
                  name: 'Upsell',
                },
                subType: {
                  id: 'KZFzBErXgnZfZ7v7lA',
                  name: 'Meal Package',
                },
                family: false,
              },
            ],
          },
        ],
        seatmap: {
          staticUrl:
            'https://maps.ticketmaster.com/maps/geometry/3/event/06005750B8D54FDB/staticImage?type=png&systemId=HOST',
        },
        accessibility: {
          info:
            'Wheelchair accessible is located (subject to availability) in the following sections: 117, 103, 104, 107, 110, C10, C22, C12, C20, 207, 215, 208, 119, 123, C32, C40, and 201. For sight or hearing needs please call 800-745-3000.',
          ticketLimit: 4,
        },
        ticketLimit: {
          info: 'There is an overall 8 ticket limit for this event.',
        },
        ageRestrictions: {
          legalAgeEnforced: false,
        },
        _links: {
          self: {
            href: '/discovery/v2/events/vv1AkZAq8GkezgfTh?locale=en-us',
          },
          attractions: [
            {
              href: '/discovery/v2/attractions/K8vZ9171ob7?locale=en-us',
            },
          ],
          venues: [
            {
              href: '/discovery/v2/venues/KovZpZA6AJdA?locale=en-us',
            },
          ],
        },
        _embedded: {
          venues: [
            {
              name: 'Xcel Energy Center',
              type: 'venue',
              id: 'KovZpZA6AJdA',
              test: false,
              url:
                'https://www.ticketmaster.com/xcel-energy-center-tickets-saint-paul/venue/49594',
              locale: 'en-us',
              images: [
                {
                  ratio: '3_1',
                  url:
                    'https://s1.ticketm.net/dam/v/b6c/14e4df54-3cf8-4b92-80eb-497421b22b6c_529471_SOURCE.jpg',
                  width: 1500,
                  height: 500,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dbimages/18766v.jpg',
                  width: 205,
                  height: 115,
                  fallback: false,
                },
              ],
              postalCode: '55102',
              timezone: 'America/Chicago',
              city: {
                name: 'Saint Paul',
              },
              state: {
                name: 'Minnesota',
                stateCode: 'MN',
              },
              country: {
                name: 'United States Of America',
                countryCode: 'US',
              },
              address: {
                line1: '199 Kellogg Blvd',
              },
              location: {
                longitude: '-93.10121819',
                latitude: '44.94489438',
              },
              markets: [
                {
                  name: 'Minneapolis/St. Paul and More',
                  id: '16',
                },
                {
                  name: 'All of US',
                  id: '51',
                },
              ],
              dmas: [
                {
                  id: 200,
                },
                {
                  id: 268,
                },
                {
                  id: 329,
                },
                {
                  id: 336,
                },
                {
                  id: 371,
                },
              ],
              social: {
                twitter: {
                  handle: '@XcelEnergyCtr',
                },
              },
              boxOfficeInfo: {
                phoneNumberDetail:
                  'Box office phone: (651) 726-8240 Minnesota Wild group sales: (651) 222-WILD Group sales for other events: 651-312-3486 Box office fax: (651) 726-8246 Internet web site: www.xcelenergycenter.com Internet e-mail: info@xcelenergycenter.com',
                openHoursDetail:
                  'Regular Box Office Hours (September - April) Monday - Saturday: 10:00 AM - 6:00 PM Sunday: Closed, except for events (opens 4 hours prior to the event start time) and on sales (open for on sale time only) Summer Box Office Hours (May - August) Monday - Friday: 10:00 AM - 6:00 PM Saturday & Sunday: Closed, except for events (opens 4 hours prior to the event start time) and on sales (open for on sale time only) Based on the Xcel Energy Center event schedule, closing times may be extended. The box office may be closed on holidays.',
                acceptedPaymentDetail:
                  'Cash, Visa, Mastercard, Discover, American Express.',
                willCallDetail:
                  'Will Call windows open 90 minutes prior to the event and will remain open through the second period for Minnesota Wild games. Will Call is located in the main lobby of Gate 1 at Xcel Energy Center. Tickets are released only to the person whose name appears on the Ticketmaster account or will call envelope. No one will be given tickets designated for another person. Proper photo identification is required, and purchasing credit card, if applicable. A signature from the person authorized to pick up the tickets will be obtained at the time of pick up.',
              },
              parkingDetail:
                'Xcel Energy Center is serviced by two parking ramps (RiverCentre and Kellogg) directly connected to the complex. For most Xcel Energy Center events pre-paid parking is available in the RiverCentre ramp. Please visit the event page of the specific event you are attending to purchase pre-paid parking. - The Saint Paul RiverCentre ramp is situated across from Saint Paul RiverCentre/Xcel Energy Center with the entrance located on the south side of Kellogg Boulevard. - The Kellogg ramp is below Saint Paul RiverCentre with the entrance located on the north side of Kellogg Boulevard. There are numerous other places to park in downtown St. Paul in both covered parking ramps and open lots. Detailed information is available at http://www.xcelenergycenter.com/plan-your-visit/parking.',
              accessibleSeatingDetail:
                'Accommodations include accessible parking and drop-off areas, elevators, escalators, wheelchair accessible seating with excellent sightlines, accessible restrooms. ASL interpreters are provided upon advance request. Assisted listening devices are available, as well as Braille and large print programs upon request. There is elevator access to every level of the arena.',
              generalInfo: {
                generalRule:
                  'Cameras with a detachable lens or lens of more than two (2) inches are prohibited from all Xcel Energy Center concerts. The use of flash photography may also be prohibited. The event producer reserves the right to deny camera use at any time before or during the event and to prohibit the use of any camera that is deemed unacceptable. Video recorders or digital cameras with recording capabilities are prohibited at any time during an event. Xcel Energy Center reserves the right to examine and prohibit use of any camera that staff deem unacceptable. Audio recorders are not allowed at any time. Cans, bottles, coolers and other outside food and beverages are not allowed.',
                childRule:
                  "For most events, including Minnesota Wild games, children under the age of 24 months will be admitted without a ticket if held on an adult's lap. For children's shows such as Disney on Ice, children 12 months and older need a ticket.",
              },
              upcomingEvents: {
                _total: 17,
                ticketmaster: 17,
              },
              _links: {
                self: {
                  href: '/discovery/v2/venues/KovZpZA6AJdA?locale=en-us',
                },
              },
            },
          ],
          attractions: [
            {
              name: 'Eagles',
              type: 'attraction',
              id: 'K8vZ9171ob7',
              test: false,
              url: 'https://www.ticketmaster.com/eagles-tickets/artist/734977',
              locale: 'en-us',
              externalLinks: {
                twitter: [
                  {
                    url: 'https://twitter.com/TheEaglesBand',
                  },
                ],
                itunes: [
                  {
                    url: 'https://itunes.apple.com/artist/id1053549',
                  },
                ],
                lastfm: [
                  {
                    url: 'https://www.last.fm/music/Eagles',
                  },
                ],
                wiki: [
                  {
                    url: 'https://en.wikipedia.org/wiki/Eagles_(band)',
                  },
                ],
                facebook: [
                  {
                    url: 'https://www.facebook.com/EaglesBand',
                  },
                ],
                musicbrainz: [
                  {
                    id: 'f46bd570-5768-462e-b84c-c7c993bbf47e',
                  },
                ],
                homepage: [
                  {
                    url: 'https://eagles.com/',
                  },
                ],
              },
              images: [
                {
                  ratio: '16_9',
                  url:
                    'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_EVENT_DETAIL_PAGE_16_9.jpg',
                  width: 205,
                  height: 115,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url:
                    'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_RETINA_LANDSCAPE_16_9.jpg',
                  width: 1136,
                  height: 639,
                  fallback: false,
                },
                {
                  ratio: '4_3',
                  url:
                    'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_CUSTOM.jpg',
                  width: 305,
                  height: 225,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url:
                    'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_TABLET_LANDSCAPE_3_2.jpg',
                  width: 1024,
                  height: 683,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url:
                    'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_RECOMENDATION_16_9.jpg',
                  width: 100,
                  height: 56,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url:
                    'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_RETINA_PORTRAIT_3_2.jpg',
                  width: 640,
                  height: 427,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url:
                    'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_TABLET_LANDSCAPE_LARGE_16_9.jpg',
                  width: 2048,
                  height: 1152,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url:
                    'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_RETINA_PORTRAIT_16_9.jpg',
                  width: 640,
                  height: 360,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url:
                    'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_ARTIST_PAGE_3_2.jpg',
                  width: 305,
                  height: 203,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url:
                    'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_TABLET_LANDSCAPE_16_9.jpg',
                  width: 1024,
                  height: 576,
                  fallback: false,
                },
              ],
              classifications: [
                {
                  primary: true,
                  segment: {
                    id: 'KZFzniwnSyZfZ7v7nJ',
                    name: 'Music',
                  },
                  genre: {
                    id: 'KnvZfZ7vAeA',
                    name: 'Rock',
                  },
                  subGenre: {
                    id: 'KZazBEonSMnZfZ7v6F1',
                    name: 'Pop',
                  },
                  type: {
                    id: 'KZAyXgnZfZ7v7nI',
                    name: 'Undefined',
                  },
                  subType: {
                    id: 'KZFzBErXgnZfZ7v7lJ',
                    name: 'Undefined',
                  },
                  family: false,
                },
              ],
              upcomingEvents: {
                _total: 14,
                ticketmaster: 14,
              },
              _links: {
                self: {
                  href: '/discovery/v2/attractions/K8vZ9171ob7?locale=en-us',
                },
              },
            },
          ],
        },
      },
      {
        name: 'Disney On Ice presents Dream Big',
        type: 'event',
        id: 'G5dIZp96_C-R4',
        test: false,
        url:
          'https://www.ticketmaster.com/disney-on-ice-presents-dream-big-hidalgo-texas-12-25-2020/event/3A005971D93A1BD5',
        locale: 'en-us',
        images: [
          {
            ratio: '3_2',
            url:
              'https://s1.ticketm.net/dam/a/c2f/6bd97efe-e423-4878-9553-6630b2fb1c2f_1365981_TABLET_LANDSCAPE_3_2.jpg',
            width: 1024,
            height: 683,
            fallback: false,
          },
          {
            ratio: '4_3',
            url:
              'https://s1.ticketm.net/dam/a/c2f/6bd97efe-e423-4878-9553-6630b2fb1c2f_1365981_CUSTOM.jpg',
            width: 305,
            height: 225,
            fallback: false,
          },
          {
            ratio: '16_9',
            url:
              'https://s1.ticketm.net/dam/a/c2f/6bd97efe-e423-4878-9553-6630b2fb1c2f_1365981_TABLET_LANDSCAPE_LARGE_16_9.jpg',
            width: 2048,
            height: 1152,
            fallback: false,
          },
          {
            ratio: '16_9',
            url:
              'https://s1.ticketm.net/dam/a/c2f/6bd97efe-e423-4878-9553-6630b2fb1c2f_1365981_RETINA_PORTRAIT_16_9.jpg',
            width: 640,
            height: 360,
            fallback: false,
          },
          {
            ratio: '16_9',
            url:
              'https://s1.ticketm.net/dam/a/c2f/6bd97efe-e423-4878-9553-6630b2fb1c2f_1365981_RETINA_LANDSCAPE_16_9.jpg',
            width: 1136,
            height: 639,
            fallback: false,
          },
          {
            ratio: '16_9',
            url:
              'https://s1.ticketm.net/dam/a/c2f/6bd97efe-e423-4878-9553-6630b2fb1c2f_1365981_EVENT_DETAIL_PAGE_16_9.jpg',
            width: 205,
            height: 115,
            fallback: false,
          },
          {
            ratio: '3_2',
            url:
              'https://s1.ticketm.net/dam/a/c2f/6bd97efe-e423-4878-9553-6630b2fb1c2f_1365981_ARTIST_PAGE_3_2.jpg',
            width: 305,
            height: 203,
            fallback: false,
          },
          {
            ratio: '16_9',
            url:
              'https://s1.ticketm.net/dam/a/c2f/6bd97efe-e423-4878-9553-6630b2fb1c2f_1365981_TABLET_LANDSCAPE_16_9.jpg',
            width: 1024,
            height: 576,
            fallback: false,
          },
          {
            ratio: '16_9',
            url:
              'https://s1.ticketm.net/dam/a/c2f/6bd97efe-e423-4878-9553-6630b2fb1c2f_1365981_RECOMENDATION_16_9.jpg',
            width: 100,
            height: 56,
            fallback: false,
          },
          {
            ratio: '3_2',
            url:
              'https://s1.ticketm.net/dam/a/c2f/6bd97efe-e423-4878-9553-6630b2fb1c2f_1365981_RETINA_PORTRAIT_3_2.jpg',
            width: 640,
            height: 427,
            fallback: false,
          },
        ],
        sales: {
          public: {
            startDateTime: '2020-11-30T16:00:00Z',
            startTBD: false,
            startTBA: false,
            endDateTime: '2020-12-26T02:30:00Z',
          },
          presales: [
            {
              startDateTime: '2020-11-24T16:00:00Z',
              endDateTime: '2020-11-30T05:59:00Z',
              name: 'Preferred Presale',
            },
            {
              startDateTime: '2020-11-25T16:00:00Z',
              endDateTime: '2020-11-30T05:59:00Z',
              name: 'Ticketmaster/Venue Presale',
            },
          ],
        },
        dates: {
          start: {
            localDate: '2020-12-25',
            localTime: '19:30:00',
            dateTime: '2020-12-26T01:30:00Z',
            dateTBD: false,
            dateTBA: false,
            timeTBA: false,
            noSpecificTime: false,
          },
          timezone: 'America/Chicago',
          status: {
            code: 'onsale',
          },
          spanMultipleDays: false,
        },
        classifications: [
          {
            primary: true,
            segment: {
              id: 'KZFzniwnSyZfZ7v7n1',
              name: 'Miscellaneous',
            },
            genre: {
              id: 'KnvZfZ7v7lI',
              name: 'Ice Shows',
            },
            subGenre: {
              id: 'KZazBEonSMnZfZ7vAv6',
              name: 'Ice Shows',
            },
            type: {
              id: 'KZAyXgnZfZ7v7nI',
              name: 'Undefined',
            },
            subType: {
              id: 'KZFzBErXgnZfZ7v7lJ',
              name: 'Undefined',
            },
            family: false,
          },
        ],
        promoter: {
          id: '1063',
          name: 'FELD ENTERTAINMENT',
          description: 'FELD ENTERTAINMENT / NTL / USA',
        },
        promoters: [
          {
            id: '1063',
            name: 'FELD ENTERTAINMENT',
            description: 'FELD ENTERTAINMENT / NTL / USA',
          },
        ],
        info:
          "Believing is just the beginning for your favorite Disney heroes at Disney On Ice presents Dream Big! Miguel aspires to be a musician and journeys through the Land of the Dead to unlock his family's history. Moana and Maui bravely restore the stolen heart of Te Fiti. Anna and Elsa save their kingdom while the Disney Princesses inspire with stories of strength, determination and kindness. Share every magical moment filled with breathtaking ice skating and beloved songs and stories that give you a reason to believe! *No costumes for guests 14 & older. See Mickey, Minnie, Donald, Goofy and stars from Frozen, Moana, Coco, Aladdin, Beauty and the Beast, The Little Mermaid, Tangled, The Princess and the Frog, Cinderella, and Sleeping Beauty. Visit DisneyOnIce.com for COVID-19 information and venue safety standards. ©Disney, ©Disney/Pixar",
        pleaseNote:
          'All guests age 2 and older are required to have a ticket. No costumes for guests 14 and older. Unless otherwise exempted by law, guests must wear a face covering except when actively eating and drinking. This event uses pod seating. Pod seating was developed for the safety and wellness of our guests and to maintain social distancing. Pods are available in groups of 1-8 and will be physically distanced from one another. Pods must be purchased in their entirety and may not be divided. Tickets in a pod may not be sold or transferred to anyone other than family and trusted acquaintances who have chosen to attend the event together, unless all such tickets are being sold or transferred to one party. Sitting in any seat outside your pod is not permitted. Limit 1 pod, maximum 8 tickets per transaction. All pods are subject to availability. Violation of ticketing policies will void your tickets. Prices are subject to change.',
        priceRanges: [
          {
            type: 'standard',
            currency: 'USD',
            min: 25.0,
            max: 80.0,
          },
        ],
        products: [
          {
            name: 'Disney On Ice! Dream Big - Official Souvenir Tag',
            id: 'G5dIZp920M37B',
            url:
              'https://www.ticketmaster.com/disney-on-ice-dream-big-official-hidalgo-texas-12-25-2020/event/3A005973E4DD213A',
            type: 'Upsell',
            classifications: [
              {
                primary: true,
                segment: {
                  id: 'KZFzniwnSyZfZ7v7n1',
                  name: 'Miscellaneous',
                },
                genre: {
                  id: 'KnvZfZ7v7ll',
                  name: 'Undefined',
                },
                subGenre: {
                  id: 'KZazBEonSMnZfZ7vAv1',
                  name: 'Undefined',
                },
                type: {
                  id: 'KZAyXgnZfZ7v7nJ',
                  name: 'Upsell',
                },
                subType: {
                  id: 'KZFzBErXgnZfZ7vAke',
                  name: 'Merchandise Voucher',
                },
                family: false,
              },
            ],
          },
          {
            name: 'Disney On Ice: Scrapbook',
            id: 'G5dIZp92E7wFu',
            url:
              'https://www.ticketmaster.com/disney-on-ice-scrapbook-hidalgo-texas-12-25-2020/event/3A005973E713220D',
            type: 'Upsell',
            classifications: [
              {
                primary: true,
                segment: {
                  id: 'KZFzniwnSyZfZ7v7n1',
                  name: 'Miscellaneous',
                },
                genre: {
                  id: 'KnvZfZ7v7ll',
                  name: 'Undefined',
                },
                subGenre: {
                  id: 'KZazBEonSMnZfZ7vAv1',
                  name: 'Undefined',
                },
                type: {
                  id: 'KZAyXgnZfZ7v7nJ',
                  name: 'Upsell',
                },
                subType: {
                  id: 'KZFzBErXgnZfZ7vAke',
                  name: 'Merchandise Voucher',
                },
                family: false,
              },
            ],
          },
          {
            name: 'Disney On Ice: Minnie Ears Lighted Headband',
            id: 'G5dIZp92INw18',
            url:
              'https://www.ticketmaster.com/disney-on-ice-minnie-ears-lighted-hidalgo-texas-12-25-2020/event/3A005973E88F2290',
            type: 'Upsell',
            classifications: [
              {
                primary: true,
                segment: {
                  id: 'KZFzniwnSyZfZ7v7n1',
                  name: 'Miscellaneous',
                },
                genre: {
                  id: 'KnvZfZ7v7ll',
                  name: 'Undefined',
                },
                subGenre: {
                  id: 'KZazBEonSMnZfZ7vAv1',
                  name: 'Undefined',
                },
                type: {
                  id: 'KZAyXgnZfZ7v7nJ',
                  name: 'Upsell',
                },
                subType: {
                  id: 'KZFzBErXgnZfZ7vAke',
                  name: 'Merchandise Voucher',
                },
                family: false,
              },
            ],
          },
          {
            name: 'Disney On Ice: Snowflake Wand',
            id: 'G5dIZp92lueCi',
            url:
              'https://www.ticketmaster.com/disney-on-ice-snowflake-wand-hidalgo-texas-12-25-2020/event/3A005973EB3423AC',
            type: 'Upsell',
            classifications: [
              {
                primary: true,
                segment: {
                  id: 'KZFzniwnSyZfZ7v7n1',
                  name: 'Miscellaneous',
                },
                genre: {
                  id: 'KnvZfZ7v7ll',
                  name: 'Undefined',
                },
                subGenre: {
                  id: 'KZazBEonSMnZfZ7vAv1',
                  name: 'Undefined',
                },
                type: {
                  id: 'KZAyXgnZfZ7v7nJ',
                  name: 'Upsell',
                },
                subType: {
                  id: 'KZFzBErXgnZfZ7vAke',
                  name: 'Merchandise Voucher',
                },
                family: false,
              },
            ],
          },
          {
            name: 'Disney On Ice: Mickey Light-Up Wand',
            id: 'G5dIZp92nK3Gs',
            url:
              'https://www.ticketmaster.com/disney-on-ice-mickey-lightup-wand-hidalgo-texas-12-25-2020/event/3A005973EA4D2331',
            type: 'Upsell',
            classifications: [
              {
                primary: true,
                segment: {
                  id: 'KZFzniwnSyZfZ7v7n1',
                  name: 'Miscellaneous',
                },
                genre: {
                  id: 'KnvZfZ7v7ll',
                  name: 'Undefined',
                },
                subGenre: {
                  id: 'KZazBEonSMnZfZ7vAv1',
                  name: 'Undefined',
                },
                type: {
                  id: 'KZAyXgnZfZ7v7nJ',
                  name: 'Upsell',
                },
                subType: {
                  id: 'KZFzBErXgnZfZ7vAke',
                  name: 'Merchandise Voucher',
                },
                family: false,
              },
            ],
          },
          {
            name: 'Disney On Ice: Dream Big Program Book',
            id: 'G5dIZp92trx5E',
            url:
              'https://www.ticketmaster.com/disney-on-ice-dream-big-program-hidalgo-texas-12-25-2020/event/3A005973E97A22E7',
            type: 'Upsell',
            classifications: [
              {
                primary: true,
                segment: {
                  id: 'KZFzniwnSyZfZ7v7n1',
                  name: 'Miscellaneous',
                },
                genre: {
                  id: 'KnvZfZ7v7ll',
                  name: 'Undefined',
                },
                subGenre: {
                  id: 'KZazBEonSMnZfZ7vAv1',
                  name: 'Undefined',
                },
                type: {
                  id: 'KZAyXgnZfZ7v7nJ',
                  name: 'Upsell',
                },
                subType: {
                  id: 'KZFzBErXgnZfZ7vAke',
                  name: 'Merchandise Voucher',
                },
                family: false,
              },
            ],
          },
        ],
        seatmap: {
          staticUrl:
            'https://maps.ticketmaster.com/maps/geometry/3/event/3A005971D93A1BD5/staticImage?type=png&systemId=HOST',
        },
        accessibility: {
          info:
            'ADA inventory is available at State Farm Arena in a 1+1 seating configuration.',
          ticketLimit: 2,
        },
        ticketLimit: {
          info: 'There is an 8 ticket limit for this event.',
        },
        ageRestrictions: {
          legalAgeEnforced: false,
          ageRuleDescription:
            'All guests age 2 and older are required to have a ticket.',
        },
        _links: {
          self: {
            href: '/discovery/v2/events/G5dIZp96_C-R4?locale=en-us',
          },
          attractions: [
            {
              href: '/discovery/v2/attractions/K8vZ917CDpV?locale=en-us',
            },
          ],
          venues: [
            {
              href: '/discovery/v2/venues/KovZpZAJJtIA?locale=en-us',
            },
          ],
        },
        _embedded: {
          venues: [
            {
              name: 'Payne Arena',
              type: 'venue',
              id: 'KovZpZAJJtIA',
              test: false,
              url:
                'https://www.ticketmaster.com/payne-arena-tickets-hidalgo/venue/475863',
              locale: 'en-us',
              images: [
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dbimages/21789v.jpg',
                  width: 205,
                  height: 115,
                  fallback: false,
                },
              ],
              postalCode: '78557',
              timezone: 'America/Chicago',
              city: {
                name: 'Hidalgo',
              },
              state: {
                name: 'Texas',
                stateCode: 'TX',
              },
              country: {
                name: 'United States Of America',
                countryCode: 'US',
              },
              address: {
                line1: '2600 N. 10th Street (Hwy 336)',
              },
              location: {
                longitude: '-98.2443992',
                latitude: '26.1201178',
              },
              markets: [
                {
                  name: 'South Texas',
                  id: '122',
                },
              ],
              dmas: [
                {
                  id: 260,
                },
                {
                  id: 293,
                },
                {
                  id: 318,
                },
                {
                  id: 407,
                },
              ],
              boxOfficeInfo: {
                phoneNumberDetail: '(956) 843-6688',
                openHoursDetail:
                  'Box Office Location: The box office is located ON THE FRONT OF THE State Farm Arena facing 10th Street. Box Office Phone Number: (956) 843-6688 Box Office Hours: Monday – Friday, 8:30am – 5:30pm Saturday - Open at 12 noon ONLY if an event is scheduled Sunday – Open at 12 noon ONLY if an event is scheduled Open 10:00 am for Saturday show on-sales',
                acceptedPaymentDetail:
                  'Cash, Visa, MasterCard, American Express, Discover. Checks are NOT accepted.',
              },
              accessibleSeatingDetail:
                'Accessible seating is available at State Farm Arena. For additional information regarding the availability of accessible seating please call the Dodge Arena Box Office at (956) 843-6688.',
              generalInfo: {
                childRule:
                  'Discounted ticket prices for kids are sometimes available for various shows. Age restrictions and the amount of the discount vary by event and are at the discretion of the touring act.',
              },
              upcomingEvents: {
                _total: 29,
                ticketmaster: 29,
              },
              _links: {
                self: {
                  href: '/discovery/v2/venues/KovZpZAJJtIA?locale=en-us',
                },
              },
            },
          ],
          attractions: [
            {
              name: 'Disney On Ice presents Dream Big',
              type: 'attraction',
              id: 'K8vZ917CDpV',
              test: false,
              url:
                'https://www.ticketmaster.com/disney-on-ice-presents-dream-big-tickets/artist/1638731',
              locale: 'en-us',
              images: [
                {
                  ratio: '3_2',
                  url:
                    'https://s1.ticketm.net/dam/a/c2f/6bd97efe-e423-4878-9553-6630b2fb1c2f_1365981_TABLET_LANDSCAPE_3_2.jpg',
                  width: 1024,
                  height: 683,
                  fallback: false,
                },
                {
                  ratio: '4_3',
                  url:
                    'https://s1.ticketm.net/dam/a/c2f/6bd97efe-e423-4878-9553-6630b2fb1c2f_1365981_CUSTOM.jpg',
                  width: 305,
                  height: 225,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url:
                    'https://s1.ticketm.net/dam/a/c2f/6bd97efe-e423-4878-9553-6630b2fb1c2f_1365981_TABLET_LANDSCAPE_LARGE_16_9.jpg',
                  width: 2048,
                  height: 1152,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url:
                    'https://s1.ticketm.net/dam/a/c2f/6bd97efe-e423-4878-9553-6630b2fb1c2f_1365981_RETINA_PORTRAIT_16_9.jpg',
                  width: 640,
                  height: 360,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url:
                    'https://s1.ticketm.net/dam/a/c2f/6bd97efe-e423-4878-9553-6630b2fb1c2f_1365981_RETINA_LANDSCAPE_16_9.jpg',
                  width: 1136,
                  height: 639,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url:
                    'https://s1.ticketm.net/dam/a/c2f/6bd97efe-e423-4878-9553-6630b2fb1c2f_1365981_EVENT_DETAIL_PAGE_16_9.jpg',
                  width: 205,
                  height: 115,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url:
                    'https://s1.ticketm.net/dam/a/c2f/6bd97efe-e423-4878-9553-6630b2fb1c2f_1365981_ARTIST_PAGE_3_2.jpg',
                  width: 305,
                  height: 203,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url:
                    'https://s1.ticketm.net/dam/a/c2f/6bd97efe-e423-4878-9553-6630b2fb1c2f_1365981_TABLET_LANDSCAPE_16_9.jpg',
                  width: 1024,
                  height: 576,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url:
                    'https://s1.ticketm.net/dam/a/c2f/6bd97efe-e423-4878-9553-6630b2fb1c2f_1365981_RECOMENDATION_16_9.jpg',
                  width: 100,
                  height: 56,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url:
                    'https://s1.ticketm.net/dam/a/c2f/6bd97efe-e423-4878-9553-6630b2fb1c2f_1365981_RETINA_PORTRAIT_3_2.jpg',
                  width: 640,
                  height: 427,
                  fallback: false,
                },
              ],
              classifications: [
                {
                  primary: true,
                  segment: {
                    id: 'KZFzniwnSyZfZ7v7n1',
                    name: 'Miscellaneous',
                  },
                  genre: {
                    id: 'KnvZfZ7v7lI',
                    name: 'Ice Shows',
                  },
                  subGenre: {
                    id: 'KZazBEonSMnZfZ7vAv6',
                    name: 'Ice Shows',
                  },
                  type: {
                    id: 'KZAyXgnZfZ7v7nI',
                    name: 'Undefined',
                  },
                  subType: {
                    id: 'KZFzBErXgnZfZ7v7lJ',
                    name: 'Undefined',
                  },
                  family: true,
                },
              ],
              upcomingEvents: {
                _total: 60,
                ticketmaster: 60,
              },
              _links: {
                self: {
                  href: '/discovery/v2/attractions/K8vZ917CDpV?locale=en-us',
                },
              },
            },
          ],
        },
      },
      {
        name: 'Disney On Ice presents Dream Big',
        type: 'event',
        id: 'G5viZp9612-MV',
        test: false,
        url:
          'https://www.ticketmaster.com/disney-on-ice-presents-dream-big-biloxi-mississippi-01-09-2021/event/1B005971CA3E1DF4',
        locale: 'en-us',
        images: [
          {
            ratio: '3_2',
            url:
              'https://s1.ticketm.net/dam/a/c2f/6bd97efe-e423-4878-9553-6630b2fb1c2f_1365981_TABLET_LANDSCAPE_3_2.jpg',
            width: 1024,
            height: 683,
            fallback: false,
          },
          {
            ratio: '4_3',
            url:
              'https://s1.ticketm.net/dam/a/c2f/6bd97efe-e423-4878-9553-6630b2fb1c2f_1365981_CUSTOM.jpg',
            width: 305,
            height: 225,
            fallback: false,
          },
          {
            ratio: '16_9',
            url:
              'https://s1.ticketm.net/dam/a/c2f/6bd97efe-e423-4878-9553-6630b2fb1c2f_1365981_TABLET_LANDSCAPE_LARGE_16_9.jpg',
            width: 2048,
            height: 1152,
            fallback: false,
          },
          {
            ratio: '16_9',
            url:
              'https://s1.ticketm.net/dam/a/c2f/6bd97efe-e423-4878-9553-6630b2fb1c2f_1365981_RETINA_PORTRAIT_16_9.jpg',
            width: 640,
            height: 360,
            fallback: false,
          },
          {
            ratio: '16_9',
            url:
              'https://s1.ticketm.net/dam/a/c2f/6bd97efe-e423-4878-9553-6630b2fb1c2f_1365981_RETINA_LANDSCAPE_16_9.jpg',
            width: 1136,
            height: 639,
            fallback: false,
          },
          {
            ratio: '16_9',
            url:
              'https://s1.ticketm.net/dam/a/c2f/6bd97efe-e423-4878-9553-6630b2fb1c2f_1365981_EVENT_DETAIL_PAGE_16_9.jpg',
            width: 205,
            height: 115,
            fallback: false,
          },
          {
            ratio: '3_2',
            url:
              'https://s1.ticketm.net/dam/a/c2f/6bd97efe-e423-4878-9553-6630b2fb1c2f_1365981_ARTIST_PAGE_3_2.jpg',
            width: 305,
            height: 203,
            fallback: false,
          },
          {
            ratio: '16_9',
            url:
              'https://s1.ticketm.net/dam/a/c2f/6bd97efe-e423-4878-9553-6630b2fb1c2f_1365981_TABLET_LANDSCAPE_16_9.jpg',
            width: 1024,
            height: 576,
            fallback: false,
          },
          {
            ratio: '16_9',
            url:
              'https://s1.ticketm.net/dam/a/c2f/6bd97efe-e423-4878-9553-6630b2fb1c2f_1365981_RECOMENDATION_16_9.jpg',
            width: 100,
            height: 56,
            fallback: false,
          },
          {
            ratio: '3_2',
            url:
              'https://s1.ticketm.net/dam/a/c2f/6bd97efe-e423-4878-9553-6630b2fb1c2f_1365981_RETINA_PORTRAIT_3_2.jpg',
            width: 640,
            height: 427,
            fallback: false,
          },
        ],
        sales: {
          public: {
            startDateTime: '2020-12-08T16:00:00Z',
            startTBD: false,
            startTBA: false,
            endDateTime: '2021-01-10T00:30:00Z',
          },
          presales: [
            {
              startDateTime: '2020-12-01T16:00:00Z',
              endDateTime: '2020-12-08T05:59:00Z',
              name: 'Feld Preferred Presale',
            },
            {
              startDateTime: '2020-12-03T16:00:00Z',
              endDateTime: '2020-12-08T05:59:00Z',
              name: 'TM / Venue Presale',
            },
          ],
        },
        dates: {
          start: {
            localDate: '2021-01-09',
            localTime: '18:30:00',
            dateTime: '2021-01-10T00:30:00Z',
            dateTBD: false,
            dateTBA: false,
            timeTBA: false,
            noSpecificTime: false,
          },
          timezone: 'America/Chicago',
          status: {
            code: 'onsale',
          },
          spanMultipleDays: false,
        },
        classifications: [
          {
            primary: true,
            segment: {
              id: 'KZFzniwnSyZfZ7v7n1',
              name: 'Miscellaneous',
            },
            genre: {
              id: 'KnvZfZ7v7lI',
              name: 'Ice Shows',
            },
            subGenre: {
              id: 'KZazBEonSMnZfZ7vAv6',
              name: 'Ice Shows',
            },
            type: {
              id: 'KZAyXgnZfZ7v7nI',
              name: 'Undefined',
            },
            subType: {
              id: 'KZFzBErXgnZfZ7v7lJ',
              name: 'Undefined',
            },
            family: false,
          },
        ],
        promoter: {
          id: '239',
          name: 'FELD ENTERTAINMENT DISNEY ON ICE',
          description: 'FELD ENTERTAINMENT DISNEY ON ICE / NTL / USA',
        },
        promoters: [
          {
            id: '239',
            name: 'FELD ENTERTAINMENT DISNEY ON ICE',
            description: 'FELD ENTERTAINMENT DISNEY ON ICE / NTL / USA',
          },
        ],
        info:
          'Believing is just the beginning at Disney On Ice presents Dream Big. Miguel aspires to be a musician and journeys through the Land of the Dead to unlock his familys history. Moana and Maui bravely restore the stolen heart of Te Fiti, Anna and Elsa save their kingdom and the Disney Princesses inspire with stories of strength, determination and kindness. Share every magical moment filled with breathtaking ice skating and beloved Disney songs and stories that give everyone a reason to believe! See Mickey, Minnie, Donald, Goofy and stars from Frozen, Moana, Coco, Aladdin, Beauty and the Beast, The Little Mermaid, Tangled, The Princess and the Frog, Cinderella, and Sleeping Beauty. Visit DisneyOnIce.com for COVID-19 information and venue safety standards. ©Disney, ©Disney/Pixar',
        pleaseNote:
          'All guests age 2 and older are required to have a ticket. No costumes for guests 14 and older. Unless otherwise exempted by law, guests must wear a face covering except when actively eating and drinking. This event uses pod seating. Pod seating was developed for the safety and wellness of our guests and to maintain social distancing. Pods are available in groups of 1-8 and will be physically distanced from one another. Pods must be purchased in their entirety and may not be divided. Tickets in a pod may not be sold or transferred to anyone other than family and trusted acquaintances who have chosen to attend the event together, unless all such tickets are being sold or transferred to one party. Sitting in any seat outside your pod is not permitted. Limit 1 pod, maximum 8 tickets per transaction. All pods are subject to availability. Violation of ticketing policies will void your tickets. Prices are subject to change.',
        priceRanges: [
          {
            type: 'standard',
            currency: 'USD',
            min: 20.0,
            max: 75.0,
          },
        ],
        products: [
          {
            name: 'Disney On Ice: Scrapbook',
            id: 'G5viZp9d3U-iB',
            url:
              'https://www.ticketmaster.com/disney-on-ice-scrapbook-biloxi-mississippi-01-09-2021/event/1B005970D2DA1B3A',
            type: 'Upsell',
            classifications: [
              {
                primary: true,
                segment: {
                  id: 'KZFzniwnSyZfZ7v7n1',
                  name: 'Miscellaneous',
                },
                genre: {
                  id: 'KnvZfZ7v7ll',
                  name: 'Undefined',
                },
                subGenre: {
                  id: 'KZazBEonSMnZfZ7vAv1',
                  name: 'Undefined',
                },
                type: {
                  id: 'KZAyXgnZfZ7v7nJ',
                  name: 'Upsell',
                },
                subType: {
                  id: 'KZFzBErXgnZfZ7vAke',
                  name: 'Merchandise Voucher',
                },
                family: false,
              },
            ],
          },
          {
            name: 'Disney On Ice: Mickey Light-Up Wand',
            id: 'G5viZp9d5Ysi7',
            url:
              'https://www.ticketmaster.com/disney-on-ice-mickey-lightup-wand-biloxi-mississippi-01-09-2021/event/1B005970CBC31B04',
            type: 'Upsell',
            classifications: [
              {
                primary: true,
                segment: {
                  id: 'KZFzniwnSyZfZ7v7n1',
                  name: 'Miscellaneous',
                },
                genre: {
                  id: 'KnvZfZ7v7ll',
                  name: 'Undefined',
                },
                subGenre: {
                  id: 'KZazBEonSMnZfZ7vAv1',
                  name: 'Undefined',
                },
                type: {
                  id: 'KZAyXgnZfZ7v7nJ',
                  name: 'Upsell',
                },
                subType: {
                  id: 'KZFzBErXgnZfZ7vAke',
                  name: 'Merchandise Voucher',
                },
                family: false,
              },
            ],
          },
          {
            name: 'Disney On Ice: Minnie Ears Lighted Headband',
            id: 'G5viZp9dCzvi-',
            url:
              'https://www.ticketmaster.com/disney-on-ice-minnie-ears-lighted-biloxi-mississippi-01-09-2021/event/1B005970CEE01B21',
            type: 'Upsell',
            classifications: [
              {
                primary: true,
                segment: {
                  id: 'KZFzniwnSyZfZ7v7n1',
                  name: 'Miscellaneous',
                },
                genre: {
                  id: 'KnvZfZ7v7ll',
                  name: 'Undefined',
                },
                subGenre: {
                  id: 'KZazBEonSMnZfZ7vAv1',
                  name: 'Undefined',
                },
                type: {
                  id: 'KZAyXgnZfZ7v7nJ',
                  name: 'Upsell',
                },
                subType: {
                  id: 'KZFzBErXgnZfZ7vAke',
                  name: 'Merchandise Voucher',
                },
                family: false,
              },
            ],
          },
          {
            name: 'Disney On Ice: Snowflake Wand',
            id: 'G5viZp9dFMslr',
            url:
              'https://www.ticketmaster.com/disney-on-ice-snowflake-wand-biloxi-mississippi-01-09-2021/event/1B005970C8DF1ADE',
            type: 'Upsell',
            classifications: [
              {
                primary: true,
                segment: {
                  id: 'KZFzniwnSyZfZ7v7n1',
                  name: 'Miscellaneous',
                },
                genre: {
                  id: 'KnvZfZ7v7ll',
                  name: 'Undefined',
                },
                subGenre: {
                  id: 'KZazBEonSMnZfZ7vAv1',
                  name: 'Undefined',
                },
                type: {
                  id: 'KZAyXgnZfZ7v7nJ',
                  name: 'Upsell',
                },
                subType: {
                  id: 'KZFzBErXgnZfZ7vAke',
                  name: 'Merchandise Voucher',
                },
                family: false,
              },
            ],
          },
          {
            name: 'Disney On Ice: Dream Big Program Book',
            id: 'G5viZp9dd9snP',
            url:
              'https://www.ticketmaster.com/disney-on-ice-dream-big-program-biloxi-mississippi-01-09-2021/event/1B005970C35F1AA5',
            type: 'Upsell',
            classifications: [
              {
                primary: true,
                segment: {
                  id: 'KZFzniwnSyZfZ7v7n1',
                  name: 'Miscellaneous',
                },
                genre: {
                  id: 'KnvZfZ7v7ll',
                  name: 'Undefined',
                },
                subGenre: {
                  id: 'KZazBEonSMnZfZ7vAv1',
                  name: 'Undefined',
                },
                type: {
                  id: 'KZAyXgnZfZ7v7nJ',
                  name: 'Upsell',
                },
                subType: {
                  id: 'KZFzBErXgnZfZ7vAke',
                  name: 'Merchandise Voucher',
                },
                family: false,
              },
            ],
          },
          {
            name: 'Disney On Ice! Dream Big - Official Souvenir Tag',
            id: 'G5viZp9ePRvPb',
            url:
              'https://www.ticketmaster.com/disney-on-ice-dream-big-official-biloxi-mississippi-01-09-2021/event/1B005970A5BC1958',
            type: 'Upsell',
            classifications: [
              {
                primary: true,
                segment: {
                  id: 'KZFzniwnSyZfZ7v7n1',
                  name: 'Miscellaneous',
                },
                genre: {
                  id: 'KnvZfZ7v7ll',
                  name: 'Undefined',
                },
                subGenre: {
                  id: 'KZazBEonSMnZfZ7vAv1',
                  name: 'Undefined',
                },
                type: {
                  id: 'KZAyXgnZfZ7v7nJ',
                  name: 'Upsell',
                },
                subType: {
                  id: 'KZFzBErXgnZfZ7vAke',
                  name: 'Merchandise Voucher',
                },
                family: false,
              },
            ],
          },
        ],
        seatmap: {
          staticUrl:
            'https://maps.ticketmaster.com/maps/geometry/3/event/1B005971CA3E1DF4/staticImage?type=png&systemId=HOST',
        },
        accessibility: {
          ticketLimit: 8,
        },
        ticketLimit: {
          info: 'There is an overall 8 ticket limit for this event.',
        },
        ageRestrictions: {
          legalAgeEnforced: false,
          ageRuleDescription:
            'All guests age 2 and older are required to have a ticket.',
        },
        _links: {
          self: {
            href: '/discovery/v2/events/G5viZp9612-MV?locale=en-us',
          },
          attractions: [
            {
              href: '/discovery/v2/attractions/K8vZ917CDpV?locale=en-us',
            },
          ],
          venues: [
            {
              href: '/discovery/v2/venues/KovZpZAEkFFA?locale=en-us',
            },
          ],
        },
        _embedded: {
          venues: [
            {
              name: 'Mississippi Coast Coliseum',
              type: 'venue',
              id: 'KovZpZAEkFFA',
              test: false,
              url:
                'https://www.ticketmaster.com/mississippi-coast-coliseum-tickets-biloxi/venue/221708',
              locale: 'en-us',
              images: [
                {
                  url: 'https://s1.ticketm.net/dbimages/12840v.',
                  width: 223,
                  height: 134,
                  fallback: false,
                },
              ],
              postalCode: '39531',
              timezone: 'America/Chicago',
              city: {
                name: 'Biloxi',
              },
              state: {
                name: 'Mississippi',
                stateCode: 'MS',
              },
              country: {
                name: 'United States Of America',
                countryCode: 'US',
              },
              address: {
                line1: '2350 Beach Blvd',
              },
              location: {
                longitude: '-88.973907',
                latitude: '30.391294',
              },
              markets: [
                {
                  name: 'New Orleans and More',
                  id: '34',
                },
              ],
              dmas: [
                {
                  id: 216,
                },
                {
                  id: 226,
                },
                {
                  id: 230,
                },
                {
                  id: 297,
                },
                {
                  id: 304,
                },
                {
                  id: 315,
                },
                {
                  id: 316,
                },
                {
                  id: 333,
                },
                {
                  id: 340,
                },
                {
                  id: 344,
                },
                {
                  id: 387,
                },
              ],
              social: {
                twitter: {
                  handle: '@MSCoastColiseum',
                },
              },
              boxOfficeInfo: {
                phoneNumberDetail:
                  '(228) 594-3707 (228) 594-3708 GROUP SALES : (228) 287-7825 (MS Surge Hockey Office)',
                openHoursDetail: 'Mon-Fri 9:00AM to 5:00PM',
                acceptedPaymentDetail: 'Cash, Visa, Mastercard',
                willCallDetail:
                  'Located on Northwest side of the Coliseum in an outer ticket booth with a green Will Call sign. Opens 1 hour prior to event time.',
              },
              parkingDetail: 'Price varies by event.',
              accessibleSeatingDetail:
                'This is an accessible venue. For Hearing Impaired Requests: The MS Coast Coliseum is equipped with a Hearing Assistance System. Upon arriving to the venue, guest will need to proceed to the main office, located in the south lobby, to obtain the receiver. They will need to bring their drivers license to secure the receiver, and when they are finished they will need to return the receiver to the main office to reclaim their drivers license. We recommend arriving as close to the doors opening as possible.',
              generalInfo: {
                generalRule:
                  'This is a non-smoking venue. No outside food or beverages.',
                childRule:
                  'Varies with each event, check Coliseum website for event details: www.mscoastcoliseum.com Family Events: Under 1 Free on lap',
              },
              upcomingEvents: {
                _total: 12,
                ticketmaster: 12,
              },
              _links: {
                self: {
                  href: '/discovery/v2/venues/KovZpZAEkFFA?locale=en-us',
                },
              },
            },
          ],
          attractions: [
            {
              name: 'Disney On Ice presents Dream Big',
              type: 'attraction',
              id: 'K8vZ917CDpV',
              test: false,
              url:
                'https://www.ticketmaster.com/disney-on-ice-presents-dream-big-tickets/artist/1638731',
              locale: 'en-us',
              images: [
                {
                  ratio: '3_2',
                  url:
                    'https://s1.ticketm.net/dam/a/c2f/6bd97efe-e423-4878-9553-6630b2fb1c2f_1365981_TABLET_LANDSCAPE_3_2.jpg',
                  width: 1024,
                  height: 683,
                  fallback: false,
                },
                {
                  ratio: '4_3',
                  url:
                    'https://s1.ticketm.net/dam/a/c2f/6bd97efe-e423-4878-9553-6630b2fb1c2f_1365981_CUSTOM.jpg',
                  width: 305,
                  height: 225,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url:
                    'https://s1.ticketm.net/dam/a/c2f/6bd97efe-e423-4878-9553-6630b2fb1c2f_1365981_TABLET_LANDSCAPE_LARGE_16_9.jpg',
                  width: 2048,
                  height: 1152,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url:
                    'https://s1.ticketm.net/dam/a/c2f/6bd97efe-e423-4878-9553-6630b2fb1c2f_1365981_RETINA_PORTRAIT_16_9.jpg',
                  width: 640,
                  height: 360,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url:
                    'https://s1.ticketm.net/dam/a/c2f/6bd97efe-e423-4878-9553-6630b2fb1c2f_1365981_RETINA_LANDSCAPE_16_9.jpg',
                  width: 1136,
                  height: 639,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url:
                    'https://s1.ticketm.net/dam/a/c2f/6bd97efe-e423-4878-9553-6630b2fb1c2f_1365981_EVENT_DETAIL_PAGE_16_9.jpg',
                  width: 205,
                  height: 115,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url:
                    'https://s1.ticketm.net/dam/a/c2f/6bd97efe-e423-4878-9553-6630b2fb1c2f_1365981_ARTIST_PAGE_3_2.jpg',
                  width: 305,
                  height: 203,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url:
                    'https://s1.ticketm.net/dam/a/c2f/6bd97efe-e423-4878-9553-6630b2fb1c2f_1365981_TABLET_LANDSCAPE_16_9.jpg',
                  width: 1024,
                  height: 576,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url:
                    'https://s1.ticketm.net/dam/a/c2f/6bd97efe-e423-4878-9553-6630b2fb1c2f_1365981_RECOMENDATION_16_9.jpg',
                  width: 100,
                  height: 56,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url:
                    'https://s1.ticketm.net/dam/a/c2f/6bd97efe-e423-4878-9553-6630b2fb1c2f_1365981_RETINA_PORTRAIT_3_2.jpg',
                  width: 640,
                  height: 427,
                  fallback: false,
                },
              ],
              classifications: [
                {
                  primary: true,
                  segment: {
                    id: 'KZFzniwnSyZfZ7v7n1',
                    name: 'Miscellaneous',
                  },
                  genre: {
                    id: 'KnvZfZ7v7lI',
                    name: 'Ice Shows',
                  },
                  subGenre: {
                    id: 'KZazBEonSMnZfZ7vAv6',
                    name: 'Ice Shows',
                  },
                  type: {
                    id: 'KZAyXgnZfZ7v7nI',
                    name: 'Undefined',
                  },
                  subType: {
                    id: 'KZFzBErXgnZfZ7v7lJ',
                    name: 'Undefined',
                  },
                  family: true,
                },
              ],
              upcomingEvents: {
                _total: 60,
                ticketmaster: 60,
              },
              _links: {
                self: {
                  href: '/discovery/v2/attractions/K8vZ917CDpV?locale=en-us',
                },
              },
            },
          ],
        },
      },
      {
        name: 'Eagles',
        type: 'event',
        id: 'vv1AaZAqAGkdPWfSB',
        test: false,
        url:
          'https://www.ticketmaster.com/eagles-inglewood-california-10-15-2021/event/09005745E5F54CFA',
        locale: 'en-us',
        images: [
          {
            ratio: '16_9',
            url:
              'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_EVENT_DETAIL_PAGE_16_9.jpg',
            width: 205,
            height: 115,
            fallback: false,
          },
          {
            ratio: '16_9',
            url:
              'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_RETINA_LANDSCAPE_16_9.jpg',
            width: 1136,
            height: 639,
            fallback: false,
          },
          {
            ratio: '4_3',
            url:
              'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_CUSTOM.jpg',
            width: 305,
            height: 225,
            fallback: false,
          },
          {
            ratio: '3_2',
            url:
              'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_TABLET_LANDSCAPE_3_2.jpg',
            width: 1024,
            height: 683,
            fallback: false,
          },
          {
            ratio: '16_9',
            url:
              'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_RECOMENDATION_16_9.jpg',
            width: 100,
            height: 56,
            fallback: false,
          },
          {
            ratio: '3_2',
            url:
              'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_RETINA_PORTRAIT_3_2.jpg',
            width: 640,
            height: 427,
            fallback: false,
          },
          {
            ratio: '16_9',
            url:
              'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_TABLET_LANDSCAPE_LARGE_16_9.jpg',
            width: 2048,
            height: 1152,
            fallback: false,
          },
          {
            ratio: '16_9',
            url:
              'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_RETINA_PORTRAIT_16_9.jpg',
            width: 640,
            height: 360,
            fallback: false,
          },
          {
            ratio: '3_2',
            url:
              'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_ARTIST_PAGE_3_2.jpg',
            width: 305,
            height: 203,
            fallback: false,
          },
          {
            ratio: '16_9',
            url:
              'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_TABLET_LANDSCAPE_16_9.jpg',
            width: 1024,
            height: 576,
            fallback: false,
          },
        ],
        sales: {
          public: {
            startDateTime: '2019-10-18T17:00:00Z',
            startTBD: false,
            startTBA: false,
            endDateTime: '2021-10-16T03:00:00Z',
          },
          presales: [
            {
              startDateTime: '2019-10-17T17:00:00Z',
              endDateTime: '2019-10-18T05:00:00Z',
              name: 'Live Nation Mobile App Presale',
            },
            {
              startDateTime: '2019-10-17T17:00:00Z',
              endDateTime: '2019-10-18T05:00:00Z',
              name: 'Live Nation / Venue presale',
            },
            {
              startDateTime: '2019-10-14T17:00:00Z',
              endDateTime: '2019-10-18T05:00:00Z',
              name: 'American Express® Card Member Presale',
            },
            {
              startDateTime: '2019-10-18T17:00:00Z',
              endDateTime: '2020-04-04T05:00:00Z',
              name: 'American Express® Onsale',
            },
            {
              startDateTime: '2019-10-14T17:00:00Z',
              endDateTime: '2019-10-18T05:00:00Z',
              name: 'Official Platinum Presale',
            },
            {
              startDateTime: '2019-10-18T17:00:00Z',
              endDateTime: '2020-04-18T00:00:00Z',
              name: 'Official Platinum Onsale',
            },
          ],
        },
        dates: {
          start: {
            localDate: '2021-10-15',
            localTime: '20:00:00',
            dateTime: '2021-10-16T03:00:00Z',
            dateTBD: false,
            dateTBA: false,
            timeTBA: false,
            noSpecificTime: false,
          },
          initialStartDate: {
            localDate: '2020-04-17',
            localTime: '20:00:00',
            dateTime: '2020-04-18T03:00:00Z',
          },
          timezone: 'America/Los_Angeles',
          status: {
            code: 'rescheduled',
          },
          spanMultipleDays: false,
        },
        classifications: [
          {
            primary: true,
            segment: {
              id: 'KZFzniwnSyZfZ7v7nJ',
              name: 'Music',
            },
            genre: {
              id: 'KnvZfZ7vAeA',
              name: 'Rock',
            },
            subGenre: {
              id: 'KZazBEonSMnZfZ7v6F1',
              name: 'Pop',
            },
            type: {
              id: 'KZAyXgnZfZ7v7nI',
              name: 'Undefined',
            },
            subType: {
              id: 'KZFzBErXgnZfZ7v7lJ',
              name: 'Undefined',
            },
            family: false,
          },
        ],
        promoter: {
          id: '653',
          name: 'LIVE NATION MUSIC',
          description: 'LIVE NATION MUSIC / NTL / USA',
        },
        promoters: [
          {
            id: '653',
            name: 'LIVE NATION MUSIC',
            description: 'LIVE NATION MUSIC / NTL / USA',
          },
        ],
        info:
          'To allow for more Card Members to enjoy the show, American Express has set a two-order limit for this offer. This limit applies across all Cards associated with all of your American Express accounts. Prepaid Cards are not eligible.',
        pleaseNote:
          'Originally scheduled for (April 17, 2020 & September 25, 2020). Previously purchased tickets will be honored for the new date.',
        priceRanges: [
          {
            type: 'standard',
            currency: 'USD',
            min: 99.0,
            max: 750.0,
          },
        ],
        products: [
          {
            name:
              'Hotel California Tour - LaneOne Upgrade Package (Ticket Not Included)',
            id: 'vv170Z4VGkR9pJLo',
            url:
              'https://www.ticketmaster.com/hotel-california-tour-laneone-upgrade-package-inglewood-california-10-15-2021/event/0900574BD75A67D1',
            type: 'VIP',
            classifications: [
              {
                primary: true,
                segment: {
                  id: 'KZFzniwnSyZfZ7v7nJ',
                  name: 'Music',
                },
                genre: {
                  id: 'KnvZfZ7vAeA',
                  name: 'Rock',
                },
                subGenre: {
                  id: 'KZazBEonSMnZfZ7v6F1',
                  name: 'Pop',
                },
                type: {
                  id: 'KZAyXgnZfZ7v7nI',
                  name: 'Undefined',
                },
                subType: {
                  id: 'KZFzBErXgnZfZ7v7lJ',
                  name: 'Undefined',
                },
                family: false,
              },
            ],
          },
        ],
        seatmap: {
          staticUrl:
            'https://maps.ticketmaster.com/maps/geometry/3/event/09005745E5F54CFA/staticImage?type=png&systemId=HOST',
        },
        accessibility: {
          ticketLimit: 3,
        },
        ticketLimit: {
          info: 'There is an 8 ticket limit per household.',
        },
        ageRestrictions: {
          legalAgeEnforced: false,
        },
        _links: {
          self: {
            href: '/discovery/v2/events/vv1AaZAqAGkdPWfSB?locale=en-us',
          },
          attractions: [
            {
              href: '/discovery/v2/attractions/K8vZ9171ob7?locale=en-us',
            },
          ],
          venues: [
            {
              href: '/discovery/v2/venues/KovZpZAEkn6A?locale=en-us',
            },
          ],
        },
        _embedded: {
          venues: [
            {
              name: 'The Forum',
              type: 'venue',
              id: 'KovZpZAEkn6A',
              test: false,
              url:
                'https://www.ticketmaster.com/the-forum-tickets-inglewood/venue/73750',
              locale: 'en-us',
              images: [
                {
                  ratio: '3_1',
                  url:
                    'https://s1.ticketm.net/dam/v/52c/cc82c980-6a5d-4cee-9339-f382c7f5b52c_380251_SOURCE.jpg',
                  width: 1500,
                  height: 500,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dbimages/15787v.jpg',
                  width: 205,
                  height: 115,
                  fallback: false,
                },
              ],
              postalCode: '90305',
              timezone: 'America/Los_Angeles',
              city: {
                name: 'Inglewood',
              },
              state: {
                name: 'California',
                stateCode: 'CA',
              },
              country: {
                name: 'United States Of America',
                countryCode: 'US',
              },
              address: {
                line1: '3900 W Manchester Blvd.',
              },
              location: {
                longitude: '-118.341868',
                latitude: '33.9583',
              },
              markets: [
                {
                  name: 'Los Angeles',
                  id: '27',
                },
              ],
              dmas: [
                {
                  id: 223,
                },
                {
                  id: 324,
                },
                {
                  id: 354,
                },
                {
                  id: 383,
                },
              ],
              boxOfficeInfo: {
                openHoursDetail:
                  'Box office Hours: The Forum Box Office is located on the West side (Prairie Avenue side) of the venue. The Box Office is open Monday through Friday from 11:00 am - 7:00 pm, Saturdays & Sundays (on event days only), opens 12 noon',
                acceptedPaymentDetail:
                  'Cash, Visa, Mastercard, Discover, American Express. Photo ID is required for all credit card transactions.',
                willCallDetail:
                  'Location: Box Office Will Call is only open on days of events. Will Call opens two (2) hours prior to the start of the show and closes (1) hour after the start of the show. Will Call tickets can be picked up on the night of the event only. Customers must have the actual credit card used to place the order, photo ID and their confirmation number. Tickets may not be dropped off or left for other guests.',
              },
              parkingDetail:
                'Parking fees vary per event. Disabled parking is located on all sides of the main Forum lot. Please have your CA State placard available for the attendants.',
              accessibleSeatingDetail:
                "Wheelchair and Disabled Seating Policy: Wheelchair and Transfer seating is reserved exclusively for patrons with accessible needs and their companions. Accessible seating is intended for use by an individual with a mobility disability or other disability who requires the accessible features of accessible seating due to a disability, and that individual's companions. The Forum and Madison Square Garden (MSG) reserve the right to investigate potential misuse of accessible seating and to take all appropriate action against individuals who fraudulently obtain tickets for accessible seating. Tickets for accessible seating legitimately purchased for the use by an individual with a disability may be sold or transferred to another individual under the same terms and conditions applicable to other tickets. However, ***In the event such ticket is transferred to a non-disabled individual, The Forum reserves the right to deny entry to the wheelchair seating area or transfer that individual to other available seating*** Purchase Wheelchair and Disabled Seating Tickets for people with accessible needs, subject to availability, may be purchased in several ways: 1) Call Ticketmaster at 800-745-3000 2) Order Online with Ticketmaster (select your event from the list to the left) 3) Visit The Forum Box Office (see box office hours above) 2) Call Forum Disabled Services Department at 888-609-7599 For additional information regarding accessibility at The Forum or to request an interpreted performance or any other accommodations, please call the Forum Disabled Services Department any weekday between 6:30am and 1:30pm PT. Accessible Restrooms Disabled and family restrooms are located on the concourse across from sections 209-210 and 227-228. On the floor, disabled restrooms are located in the hallways adjacent to the North Hospitality, Forum Club, and Chase Lounge. While disabled guests are provided preference at disabled restrooms, any guest may use these restrooms if they require that type of accommodation. Wheelchair Escorts For individuals who have limited mobility, the Forum can provide a wheelchair transport from a guest services location to their seating areas. Upon arrival at the Forum, please ask Guest Services for assistance. Please be aware Forum escort staff is unable to remain with guests for the performance, provide restroom or concessions assistance, nor are they permitted to escort guests into the parking lots, city streets, or surrounding area. If you require a wheelchair for the duration of the show, it is suggested you bring your own wheelchair to the venue. Wheelchair Storage Guests who wish to transfer to a fixed seat from their wheelchair or mobility device, can check their device at any Guest Services location. Claim checks will be issued and guests may pick up their wheelchair until 30 minutes after conclusion of the show.",
              generalInfo: {
                generalRule:
                  'ARRIVE EARLY: Please arrive at least one-hour prior to show time. All bags, including purses, will be inspected prior to entry while all patrons will go through a screening process including the use of metal detectors and pat downs as needed. Please be mindful of traffic conditions and local street closures/construction. For a list of prohibited items, please visit www.thefabulousforum.com. No smoking of any substance and no electronic cigarettes are permitted in the Forum No recording devices are permitted No reentry No outside food or beverage is permitted There are no bag or coat check facilities Alcohol Management For most events at the Forum, alcoholic beverages are available for purchase. Staff is trained in the National Restaurant Association Training program. Alcohol sales will be limited to two alcoholic drinks per customer per transaction. Guests are not permitted to bring alcoholic beverages from outside the Forum and may not leave with alcohol purchased at the Forum. Management reserves the right to refuse the sale of alcohol to any guest. All guests may be required to show ID to purchase alcohol. Please be aware it is the policy of the Forum to require all guests who appear to be under forty (40) years of age or younger to present a valid form of ID with proof of age in order to purchase alcoholic beverages at the Forum. Pursuant to applicable state law, The Forum accepts only ID cards issued by a governmental agency that include a current description and picture of the person presenting it, which reasonably describes the person as to date of birth, weight, height, sex, and colors of eyes/hair. The Forum will not accept an ID that has been altered or is expired. We will also not accept a registration certificate issued under the Federal Selective Service Act.',
                childRule:
                  'Events are all ages (unless noted). Everyone must have a ticket to enter the venue, regardless of age. For age restricted events a valid government issues ID will be required for entry.',
              },
              upcomingEvents: {
                _total: 20,
                ticketmaster: 20,
              },
              _links: {
                self: {
                  href: '/discovery/v2/venues/KovZpZAEkn6A?locale=en-us',
                },
              },
            },
          ],
          attractions: [
            {
              name: 'Eagles',
              type: 'attraction',
              id: 'K8vZ9171ob7',
              test: false,
              url: 'https://www.ticketmaster.com/eagles-tickets/artist/734977',
              locale: 'en-us',
              externalLinks: {
                twitter: [
                  {
                    url: 'https://twitter.com/TheEaglesBand',
                  },
                ],
                itunes: [
                  {
                    url: 'https://itunes.apple.com/artist/id1053549',
                  },
                ],
                lastfm: [
                  {
                    url: 'https://www.last.fm/music/Eagles',
                  },
                ],
                wiki: [
                  {
                    url: 'https://en.wikipedia.org/wiki/Eagles_(band)',
                  },
                ],
                facebook: [
                  {
                    url: 'https://www.facebook.com/EaglesBand',
                  },
                ],
                musicbrainz: [
                  {
                    id: 'f46bd570-5768-462e-b84c-c7c993bbf47e',
                  },
                ],
                homepage: [
                  {
                    url: 'https://eagles.com/',
                  },
                ],
              },
              images: [
                {
                  ratio: '16_9',
                  url:
                    'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_EVENT_DETAIL_PAGE_16_9.jpg',
                  width: 205,
                  height: 115,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url:
                    'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_RETINA_LANDSCAPE_16_9.jpg',
                  width: 1136,
                  height: 639,
                  fallback: false,
                },
                {
                  ratio: '4_3',
                  url:
                    'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_CUSTOM.jpg',
                  width: 305,
                  height: 225,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url:
                    'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_TABLET_LANDSCAPE_3_2.jpg',
                  width: 1024,
                  height: 683,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url:
                    'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_RECOMENDATION_16_9.jpg',
                  width: 100,
                  height: 56,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url:
                    'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_RETINA_PORTRAIT_3_2.jpg',
                  width: 640,
                  height: 427,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url:
                    'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_TABLET_LANDSCAPE_LARGE_16_9.jpg',
                  width: 2048,
                  height: 1152,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url:
                    'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_RETINA_PORTRAIT_16_9.jpg',
                  width: 640,
                  height: 360,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url:
                    'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_ARTIST_PAGE_3_2.jpg',
                  width: 305,
                  height: 203,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url:
                    'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_TABLET_LANDSCAPE_16_9.jpg',
                  width: 1024,
                  height: 576,
                  fallback: false,
                },
              ],
              classifications: [
                {
                  primary: true,
                  segment: {
                    id: 'KZFzniwnSyZfZ7v7nJ',
                    name: 'Music',
                  },
                  genre: {
                    id: 'KnvZfZ7vAeA',
                    name: 'Rock',
                  },
                  subGenre: {
                    id: 'KZazBEonSMnZfZ7v6F1',
                    name: 'Pop',
                  },
                  type: {
                    id: 'KZAyXgnZfZ7v7nI',
                    name: 'Undefined',
                  },
                  subType: {
                    id: 'KZFzBErXgnZfZ7v7lJ',
                    name: 'Undefined',
                  },
                  family: false,
                },
              ],
              upcomingEvents: {
                _total: 14,
                ticketmaster: 14,
              },
              _links: {
                self: {
                  href: '/discovery/v2/attractions/K8vZ9171ob7?locale=en-us',
                },
              },
            },
          ],
        },
      },
      {
        name: 'Disney On Ice presents Dream Big',
        type: 'event',
        id: 'G5dIZp96_o-Rq',
        test: false,
        url:
          'https://www.ticketmaster.com/disney-on-ice-presents-dream-big-hidalgo-texas-12-27-2020/event/3A005971D9461BDD',
        locale: 'en-us',
        images: [
          {
            ratio: '3_2',
            url:
              'https://s1.ticketm.net/dam/a/c2f/6bd97efe-e423-4878-9553-6630b2fb1c2f_1365981_TABLET_LANDSCAPE_3_2.jpg',
            width: 1024,
            height: 683,
            fallback: false,
          },
          {
            ratio: '4_3',
            url:
              'https://s1.ticketm.net/dam/a/c2f/6bd97efe-e423-4878-9553-6630b2fb1c2f_1365981_CUSTOM.jpg',
            width: 305,
            height: 225,
            fallback: false,
          },
          {
            ratio: '16_9',
            url:
              'https://s1.ticketm.net/dam/a/c2f/6bd97efe-e423-4878-9553-6630b2fb1c2f_1365981_TABLET_LANDSCAPE_LARGE_16_9.jpg',
            width: 2048,
            height: 1152,
            fallback: false,
          },
          {
            ratio: '16_9',
            url:
              'https://s1.ticketm.net/dam/a/c2f/6bd97efe-e423-4878-9553-6630b2fb1c2f_1365981_RETINA_PORTRAIT_16_9.jpg',
            width: 640,
            height: 360,
            fallback: false,
          },
          {
            ratio: '16_9',
            url:
              'https://s1.ticketm.net/dam/a/c2f/6bd97efe-e423-4878-9553-6630b2fb1c2f_1365981_RETINA_LANDSCAPE_16_9.jpg',
            width: 1136,
            height: 639,
            fallback: false,
          },
          {
            ratio: '16_9',
            url:
              'https://s1.ticketm.net/dam/a/c2f/6bd97efe-e423-4878-9553-6630b2fb1c2f_1365981_EVENT_DETAIL_PAGE_16_9.jpg',
            width: 205,
            height: 115,
            fallback: false,
          },
          {
            ratio: '3_2',
            url:
              'https://s1.ticketm.net/dam/a/c2f/6bd97efe-e423-4878-9553-6630b2fb1c2f_1365981_ARTIST_PAGE_3_2.jpg',
            width: 305,
            height: 203,
            fallback: false,
          },
          {
            ratio: '16_9',
            url:
              'https://s1.ticketm.net/dam/a/c2f/6bd97efe-e423-4878-9553-6630b2fb1c2f_1365981_TABLET_LANDSCAPE_16_9.jpg',
            width: 1024,
            height: 576,
            fallback: false,
          },
          {
            ratio: '16_9',
            url:
              'https://s1.ticketm.net/dam/a/c2f/6bd97efe-e423-4878-9553-6630b2fb1c2f_1365981_RECOMENDATION_16_9.jpg',
            width: 100,
            height: 56,
            fallback: false,
          },
          {
            ratio: '3_2',
            url:
              'https://s1.ticketm.net/dam/a/c2f/6bd97efe-e423-4878-9553-6630b2fb1c2f_1365981_RETINA_PORTRAIT_3_2.jpg',
            width: 640,
            height: 427,
            fallback: false,
          },
        ],
        sales: {
          public: {
            startDateTime: '2020-11-30T16:00:00Z',
            startTBD: false,
            startTBA: false,
            endDateTime: '2020-12-27T18:30:00Z',
          },
          presales: [
            {
              startDateTime: '2020-11-24T16:00:00Z',
              endDateTime: '2020-11-30T05:59:00Z',
              name: 'Preferred Presale',
            },
            {
              startDateTime: '2020-11-25T16:00:00Z',
              endDateTime: '2020-11-30T05:59:00Z',
              name: 'Ticketmaster/Venue Presale',
            },
          ],
        },
        dates: {
          start: {
            localDate: '2020-12-27',
            localTime: '11:30:00',
            dateTime: '2020-12-27T17:30:00Z',
            dateTBD: false,
            dateTBA: false,
            timeTBA: false,
            noSpecificTime: false,
          },
          timezone: 'America/Chicago',
          status: {
            code: 'onsale',
          },
          spanMultipleDays: false,
        },
        classifications: [
          {
            primary: true,
            segment: {
              id: 'KZFzniwnSyZfZ7v7n1',
              name: 'Miscellaneous',
            },
            genre: {
              id: 'KnvZfZ7v7lI',
              name: 'Ice Shows',
            },
            subGenre: {
              id: 'KZazBEonSMnZfZ7vAv6',
              name: 'Ice Shows',
            },
            type: {
              id: 'KZAyXgnZfZ7v7nI',
              name: 'Undefined',
            },
            subType: {
              id: 'KZFzBErXgnZfZ7v7lJ',
              name: 'Undefined',
            },
            family: false,
          },
        ],
        promoter: {
          id: '1063',
          name: 'FELD ENTERTAINMENT',
          description: 'FELD ENTERTAINMENT / NTL / USA',
        },
        promoters: [
          {
            id: '1063',
            name: 'FELD ENTERTAINMENT',
            description: 'FELD ENTERTAINMENT / NTL / USA',
          },
        ],
        info:
          "Believing is just the beginning for your favorite Disney heroes at Disney On Ice presents Dream Big! Miguel aspires to be a musician and journeys through the Land of the Dead to unlock his family's history. Moana and Maui bravely restore the stolen heart of Te Fiti. Anna and Elsa save their kingdom while the Disney Princesses inspire with stories of strength, determination and kindness. Share every magical moment filled with breathtaking ice skating and beloved songs and stories that give you a reason to believe! *No costumes for guests 14 & older. See Mickey, Minnie, Donald, Goofy and stars from Frozen, Moana, Coco, Aladdin, Beauty and the Beast, The Little Mermaid, Tangled, The Princess and the Frog, Cinderella, and Sleeping Beauty. Visit DisneyOnIce.com for COVID-19 information and venue safety standards. ©Disney, ©Disney/Pixar",
        pleaseNote:
          'All guests age 2 and older are required to have a ticket. No costumes for guests 14 and older. Unless otherwise exempted by law, guests must wear a face covering except when actively eating and drinking. This event uses pod seating. Pod seating was developed for the safety and wellness of our guests and to maintain social distancing. Pods are available in groups of 1-8 and will be physically distanced from one another. Pods must be purchased in their entirety and may not be divided. Tickets in a pod may not be sold or transferred to anyone other than family and trusted acquaintances who have chosen to attend the event together, unless all such tickets are being sold or transferred to one party. Sitting in any seat outside your pod is not permitted. Limit 1 pod, maximum 8 tickets per transaction. All pods are subject to availability. Violation of ticketing policies will void your tickets. Prices are subject to change.',
        priceRanges: [
          {
            type: 'standard',
            currency: 'USD',
            min: 25.0,
            max: 80.0,
          },
        ],
        products: [
          {
            name: 'Disney On Ice! Dream Big - Official Souvenir Tag',
            id: 'G5dIZp920BeA5',
            url:
              'https://www.ticketmaster.com/disney-on-ice-dream-big-official-hidalgo-texas-12-27-2020/event/3A005973E4E8214B',
            type: 'Upsell',
            classifications: [
              {
                primary: true,
                segment: {
                  id: 'KZFzniwnSyZfZ7v7n1',
                  name: 'Miscellaneous',
                },
                genre: {
                  id: 'KnvZfZ7v7ll',
                  name: 'Undefined',
                },
                subGenre: {
                  id: 'KZazBEonSMnZfZ7vAv1',
                  name: 'Undefined',
                },
                type: {
                  id: 'KZAyXgnZfZ7v7nJ',
                  name: 'Upsell',
                },
                subType: {
                  id: 'KZFzBErXgnZfZ7vAke',
                  name: 'Merchandise Voucher',
                },
                family: false,
              },
            ],
          },
          {
            name: 'Disney On Ice: Scrapbook',
            id: 'G5dIZp92E6xF4',
            url:
              'https://www.ticketmaster.com/disney-on-ice-scrapbook-hidalgo-texas-12-27-2020/event/3A005973E71E2215',
            type: 'Upsell',
            classifications: [
              {
                primary: true,
                segment: {
                  id: 'KZFzniwnSyZfZ7v7n1',
                  name: 'Miscellaneous',
                },
                genre: {
                  id: 'KnvZfZ7v7ll',
                  name: 'Undefined',
                },
                subGenre: {
                  id: 'KZazBEonSMnZfZ7vAv1',
                  name: 'Undefined',
                },
                type: {
                  id: 'KZAyXgnZfZ7v7nJ',
                  name: 'Upsell',
                },
                subType: {
                  id: 'KZFzBErXgnZfZ7vAke',
                  name: 'Merchandise Voucher',
                },
                family: false,
              },
            ],
          },
          {
            name: 'Disney On Ice: Minnie Ears Lighted Headband',
            id: 'G5dIZp92IJx1O',
            url:
              'https://www.ticketmaster.com/disney-on-ice-minnie-ears-lighted-hidalgo-texas-12-27-2020/event/3A005973E89A22A0',
            type: 'Upsell',
            classifications: [
              {
                primary: true,
                segment: {
                  id: 'KZFzniwnSyZfZ7v7n1',
                  name: 'Miscellaneous',
                },
                genre: {
                  id: 'KnvZfZ7v7ll',
                  name: 'Undefined',
                },
                subGenre: {
                  id: 'KZazBEonSMnZfZ7vAv1',
                  name: 'Undefined',
                },
                type: {
                  id: 'KZAyXgnZfZ7v7nJ',
                  name: 'Upsell',
                },
                subType: {
                  id: 'KZFzBErXgnZfZ7vAke',
                  name: 'Merchandise Voucher',
                },
                family: false,
              },
            ],
          },
          {
            name: 'Disney On Ice: Snowflake Wand',
            id: 'G5dIZp92l2wCX',
            url:
              'https://www.ticketmaster.com/disney-on-ice-snowflake-wand-hidalgo-texas-12-27-2020/event/3A005973EB3F23BE',
            type: 'Upsell',
            classifications: [
              {
                primary: true,
                segment: {
                  id: 'KZFzniwnSyZfZ7v7n1',
                  name: 'Miscellaneous',
                },
                genre: {
                  id: 'KnvZfZ7v7ll',
                  name: 'Undefined',
                },
                subGenre: {
                  id: 'KZazBEonSMnZfZ7vAv1',
                  name: 'Undefined',
                },
                type: {
                  id: 'KZAyXgnZfZ7v7nJ',
                  name: 'Upsell',
                },
                subType: {
                  id: 'KZFzBErXgnZfZ7vAke',
                  name: 'Merchandise Voucher',
                },
                family: false,
              },
            ],
          },
          {
            name: 'Disney On Ice: Mickey Light-Up Wand',
            id: 'G5dIZp92n4wGT',
            url:
              'https://www.ticketmaster.com/disney-on-ice-mickey-lightup-wand-hidalgo-texas-12-27-2020/event/3A005973EA57233F',
            type: 'Upsell',
            classifications: [
              {
                primary: true,
                segment: {
                  id: 'KZFzniwnSyZfZ7v7n1',
                  name: 'Miscellaneous',
                },
                genre: {
                  id: 'KnvZfZ7v7ll',
                  name: 'Undefined',
                },
                subGenre: {
                  id: 'KZazBEonSMnZfZ7vAv1',
                  name: 'Undefined',
                },
                type: {
                  id: 'KZAyXgnZfZ7v7nJ',
                  name: 'Upsell',
                },
                subType: {
                  id: 'KZFzBErXgnZfZ7vAke',
                  name: 'Merchandise Voucher',
                },
                family: false,
              },
            ],
          },
          {
            name: 'Disney On Ice: Dream Big Program Book',
            id: 'G5dIZp92t-35s',
            url:
              'https://www.ticketmaster.com/disney-on-ice-dream-big-program-hidalgo-texas-12-27-2020/event/3A005973E98522F1',
            type: 'Upsell',
            classifications: [
              {
                primary: true,
                segment: {
                  id: 'KZFzniwnSyZfZ7v7n1',
                  name: 'Miscellaneous',
                },
                genre: {
                  id: 'KnvZfZ7v7ll',
                  name: 'Undefined',
                },
                subGenre: {
                  id: 'KZazBEonSMnZfZ7vAv1',
                  name: 'Undefined',
                },
                type: {
                  id: 'KZAyXgnZfZ7v7nJ',
                  name: 'Upsell',
                },
                subType: {
                  id: 'KZFzBErXgnZfZ7vAke',
                  name: 'Merchandise Voucher',
                },
                family: false,
              },
            ],
          },
        ],
        seatmap: {
          staticUrl:
            'https://maps.ticketmaster.com/maps/geometry/3/event/3A005971D9461BDD/staticImage?type=png&systemId=HOST',
        },
        accessibility: {
          info:
            'ADA inventory is available at State Farm Arena in a 1+1 seating configuration.',
          ticketLimit: 2,
        },
        ticketLimit: {
          info: 'There is an 8 ticket limit for this event.',
        },
        ageRestrictions: {
          legalAgeEnforced: false,
          ageRuleDescription:
            'All guests age 2 and older are required to have a ticket.',
        },
        _links: {
          self: {
            href: '/discovery/v2/events/G5dIZp96_o-Rq?locale=en-us',
          },
          attractions: [
            {
              href: '/discovery/v2/attractions/K8vZ917CDpV?locale=en-us',
            },
          ],
          venues: [
            {
              href: '/discovery/v2/venues/KovZpZAJJtIA?locale=en-us',
            },
          ],
        },
        _embedded: {
          venues: [
            {
              name: 'Payne Arena',
              type: 'venue',
              id: 'KovZpZAJJtIA',
              test: false,
              url:
                'https://www.ticketmaster.com/payne-arena-tickets-hidalgo/venue/475863',
              locale: 'en-us',
              images: [
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dbimages/21789v.jpg',
                  width: 205,
                  height: 115,
                  fallback: false,
                },
              ],
              postalCode: '78557',
              timezone: 'America/Chicago',
              city: {
                name: 'Hidalgo',
              },
              state: {
                name: 'Texas',
                stateCode: 'TX',
              },
              country: {
                name: 'United States Of America',
                countryCode: 'US',
              },
              address: {
                line1: '2600 N. 10th Street (Hwy 336)',
              },
              location: {
                longitude: '-98.2443992',
                latitude: '26.1201178',
              },
              markets: [
                {
                  name: 'South Texas',
                  id: '122',
                },
              ],
              dmas: [
                {
                  id: 260,
                },
                {
                  id: 293,
                },
                {
                  id: 318,
                },
                {
                  id: 407,
                },
              ],
              boxOfficeInfo: {
                phoneNumberDetail: '(956) 843-6688',
                openHoursDetail:
                  'Box Office Location: The box office is located ON THE FRONT OF THE State Farm Arena facing 10th Street. Box Office Phone Number: (956) 843-6688 Box Office Hours: Monday – Friday, 8:30am – 5:30pm Saturday - Open at 12 noon ONLY if an event is scheduled Sunday – Open at 12 noon ONLY if an event is scheduled Open 10:00 am for Saturday show on-sales',
                acceptedPaymentDetail:
                  'Cash, Visa, MasterCard, American Express, Discover. Checks are NOT accepted.',
              },
              accessibleSeatingDetail:
                'Accessible seating is available at State Farm Arena. For additional information regarding the availability of accessible seating please call the Dodge Arena Box Office at (956) 843-6688.',
              generalInfo: {
                childRule:
                  'Discounted ticket prices for kids are sometimes available for various shows. Age restrictions and the amount of the discount vary by event and are at the discretion of the touring act.',
              },
              upcomingEvents: {
                _total: 29,
                ticketmaster: 29,
              },
              _links: {
                self: {
                  href: '/discovery/v2/venues/KovZpZAJJtIA?locale=en-us',
                },
              },
            },
          ],
          attractions: [
            {
              name: 'Disney On Ice presents Dream Big',
              type: 'attraction',
              id: 'K8vZ917CDpV',
              test: false,
              url:
                'https://www.ticketmaster.com/disney-on-ice-presents-dream-big-tickets/artist/1638731',
              locale: 'en-us',
              images: [
                {
                  ratio: '3_2',
                  url:
                    'https://s1.ticketm.net/dam/a/c2f/6bd97efe-e423-4878-9553-6630b2fb1c2f_1365981_TABLET_LANDSCAPE_3_2.jpg',
                  width: 1024,
                  height: 683,
                  fallback: false,
                },
                {
                  ratio: '4_3',
                  url:
                    'https://s1.ticketm.net/dam/a/c2f/6bd97efe-e423-4878-9553-6630b2fb1c2f_1365981_CUSTOM.jpg',
                  width: 305,
                  height: 225,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url:
                    'https://s1.ticketm.net/dam/a/c2f/6bd97efe-e423-4878-9553-6630b2fb1c2f_1365981_TABLET_LANDSCAPE_LARGE_16_9.jpg',
                  width: 2048,
                  height: 1152,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url:
                    'https://s1.ticketm.net/dam/a/c2f/6bd97efe-e423-4878-9553-6630b2fb1c2f_1365981_RETINA_PORTRAIT_16_9.jpg',
                  width: 640,
                  height: 360,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url:
                    'https://s1.ticketm.net/dam/a/c2f/6bd97efe-e423-4878-9553-6630b2fb1c2f_1365981_RETINA_LANDSCAPE_16_9.jpg',
                  width: 1136,
                  height: 639,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url:
                    'https://s1.ticketm.net/dam/a/c2f/6bd97efe-e423-4878-9553-6630b2fb1c2f_1365981_EVENT_DETAIL_PAGE_16_9.jpg',
                  width: 205,
                  height: 115,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url:
                    'https://s1.ticketm.net/dam/a/c2f/6bd97efe-e423-4878-9553-6630b2fb1c2f_1365981_ARTIST_PAGE_3_2.jpg',
                  width: 305,
                  height: 203,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url:
                    'https://s1.ticketm.net/dam/a/c2f/6bd97efe-e423-4878-9553-6630b2fb1c2f_1365981_TABLET_LANDSCAPE_16_9.jpg',
                  width: 1024,
                  height: 576,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url:
                    'https://s1.ticketm.net/dam/a/c2f/6bd97efe-e423-4878-9553-6630b2fb1c2f_1365981_RECOMENDATION_16_9.jpg',
                  width: 100,
                  height: 56,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url:
                    'https://s1.ticketm.net/dam/a/c2f/6bd97efe-e423-4878-9553-6630b2fb1c2f_1365981_RETINA_PORTRAIT_3_2.jpg',
                  width: 640,
                  height: 427,
                  fallback: false,
                },
              ],
              classifications: [
                {
                  primary: true,
                  segment: {
                    id: 'KZFzniwnSyZfZ7v7n1',
                    name: 'Miscellaneous',
                  },
                  genre: {
                    id: 'KnvZfZ7v7lI',
                    name: 'Ice Shows',
                  },
                  subGenre: {
                    id: 'KZazBEonSMnZfZ7vAv6',
                    name: 'Ice Shows',
                  },
                  type: {
                    id: 'KZAyXgnZfZ7v7nI',
                    name: 'Undefined',
                  },
                  subType: {
                    id: 'KZFzBErXgnZfZ7v7lJ',
                    name: 'Undefined',
                  },
                  family: true,
                },
              ],
              upcomingEvents: {
                _total: 60,
                ticketmaster: 60,
              },
              _links: {
                self: {
                  href: '/discovery/v2/attractions/K8vZ917CDpV?locale=en-us',
                },
              },
            },
          ],
        },
      },
      {
        name: 'Disney On Ice presents Dream Big',
        type: 'event',
        id: 'G5dIZp96_2oR9',
        test: false,
        url:
          'https://www.ticketmaster.com/disney-on-ice-presents-dream-big-hidalgo-texas-12-26-2020/event/3A005971D93D1BD7',
        locale: 'en-us',
        images: [
          {
            ratio: '3_2',
            url:
              'https://s1.ticketm.net/dam/a/c2f/6bd97efe-e423-4878-9553-6630b2fb1c2f_1365981_TABLET_LANDSCAPE_3_2.jpg',
            width: 1024,
            height: 683,
            fallback: false,
          },
          {
            ratio: '4_3',
            url:
              'https://s1.ticketm.net/dam/a/c2f/6bd97efe-e423-4878-9553-6630b2fb1c2f_1365981_CUSTOM.jpg',
            width: 305,
            height: 225,
            fallback: false,
          },
          {
            ratio: '16_9',
            url:
              'https://s1.ticketm.net/dam/a/c2f/6bd97efe-e423-4878-9553-6630b2fb1c2f_1365981_TABLET_LANDSCAPE_LARGE_16_9.jpg',
            width: 2048,
            height: 1152,
            fallback: false,
          },
          {
            ratio: '16_9',
            url:
              'https://s1.ticketm.net/dam/a/c2f/6bd97efe-e423-4878-9553-6630b2fb1c2f_1365981_RETINA_PORTRAIT_16_9.jpg',
            width: 640,
            height: 360,
            fallback: false,
          },
          {
            ratio: '16_9',
            url:
              'https://s1.ticketm.net/dam/a/c2f/6bd97efe-e423-4878-9553-6630b2fb1c2f_1365981_RETINA_LANDSCAPE_16_9.jpg',
            width: 1136,
            height: 639,
            fallback: false,
          },
          {
            ratio: '16_9',
            url:
              'https://s1.ticketm.net/dam/a/c2f/6bd97efe-e423-4878-9553-6630b2fb1c2f_1365981_EVENT_DETAIL_PAGE_16_9.jpg',
            width: 205,
            height: 115,
            fallback: false,
          },
          {
            ratio: '3_2',
            url:
              'https://s1.ticketm.net/dam/a/c2f/6bd97efe-e423-4878-9553-6630b2fb1c2f_1365981_ARTIST_PAGE_3_2.jpg',
            width: 305,
            height: 203,
            fallback: false,
          },
          {
            ratio: '16_9',
            url:
              'https://s1.ticketm.net/dam/a/c2f/6bd97efe-e423-4878-9553-6630b2fb1c2f_1365981_TABLET_LANDSCAPE_16_9.jpg',
            width: 1024,
            height: 576,
            fallback: false,
          },
          {
            ratio: '16_9',
            url:
              'https://s1.ticketm.net/dam/a/c2f/6bd97efe-e423-4878-9553-6630b2fb1c2f_1365981_RECOMENDATION_16_9.jpg',
            width: 100,
            height: 56,
            fallback: false,
          },
          {
            ratio: '3_2',
            url:
              'https://s1.ticketm.net/dam/a/c2f/6bd97efe-e423-4878-9553-6630b2fb1c2f_1365981_RETINA_PORTRAIT_3_2.jpg',
            width: 640,
            height: 427,
            fallback: false,
          },
        ],
        sales: {
          public: {
            startDateTime: '2020-11-30T16:00:00Z',
            startTBD: false,
            startTBA: false,
            endDateTime: '2020-12-26T18:30:00Z',
          },
          presales: [
            {
              startDateTime: '2020-11-24T16:00:00Z',
              endDateTime: '2020-11-30T05:59:00Z',
              name: 'Preferred Presale',
            },
            {
              startDateTime: '2020-11-25T16:00:00Z',
              endDateTime: '2020-11-30T05:59:00Z',
              name: 'Ticketmaster/Venue Presale',
            },
          ],
        },
        dates: {
          start: {
            localDate: '2020-12-26',
            localTime: '11:30:00',
            dateTime: '2020-12-26T17:30:00Z',
            dateTBD: false,
            dateTBA: false,
            timeTBA: false,
            noSpecificTime: false,
          },
          timezone: 'America/Chicago',
          status: {
            code: 'onsale',
          },
          spanMultipleDays: false,
        },
        classifications: [
          {
            primary: true,
            segment: {
              id: 'KZFzniwnSyZfZ7v7n1',
              name: 'Miscellaneous',
            },
            genre: {
              id: 'KnvZfZ7v7lI',
              name: 'Ice Shows',
            },
            subGenre: {
              id: 'KZazBEonSMnZfZ7vAv6',
              name: 'Ice Shows',
            },
            type: {
              id: 'KZAyXgnZfZ7v7nI',
              name: 'Undefined',
            },
            subType: {
              id: 'KZFzBErXgnZfZ7v7lJ',
              name: 'Undefined',
            },
            family: false,
          },
        ],
        promoter: {
          id: '1063',
          name: 'FELD ENTERTAINMENT',
          description: 'FELD ENTERTAINMENT / NTL / USA',
        },
        promoters: [
          {
            id: '1063',
            name: 'FELD ENTERTAINMENT',
            description: 'FELD ENTERTAINMENT / NTL / USA',
          },
        ],
        info:
          "Believing is just the beginning for your favorite Disney heroes at Disney On Ice presents Dream Big! Miguel aspires to be a musician and journeys through the Land of the Dead to unlock his family's history. Moana and Maui bravely restore the stolen heart of Te Fiti. Anna and Elsa save their kingdom while the Disney Princesses inspire with stories of strength, determination and kindness. Share every magical moment filled with breathtaking ice skating and beloved songs and stories that give you a reason to believe! *No costumes for guests 14 & older. See Mickey, Minnie, Donald, Goofy and stars from Frozen, Moana, Coco, Aladdin, Beauty and the Beast, The Little Mermaid, Tangled, The Princess and the Frog, Cinderella, and Sleeping Beauty. Visit DisneyOnIce.com for COVID-19 information and venue safety standards. ©Disney, ©Disney/Pixar",
        pleaseNote:
          'All guests age 2 and older are required to have a ticket. No costumes for guests 14 and older. Unless otherwise exempted by law, guests must wear a face covering except when actively eating and drinking. This event uses pod seating. Pod seating was developed for the safety and wellness of our guests and to maintain social distancing. Pods are available in groups of 1-8 and will be physically distanced from one another. Pods must be purchased in their entirety and may not be divided. Tickets in a pod may not be sold or transferred to anyone other than family and trusted acquaintances who have chosen to attend the event together, unless all such tickets are being sold or transferred to one party. Sitting in any seat outside your pod is not permitted. Limit 1 pod, maximum 8 tickets per transaction. All pods are subject to availability. Violation of ticketing policies will void your tickets. Prices are subject to change.',
        priceRanges: [
          {
            type: 'standard',
            currency: 'USD',
            min: 25.0,
            max: 80.0,
          },
        ],
        products: [
          {
            name: 'Disney On Ice! Dream Big - Official Souvenir Tag',
            id: 'G5dIZp920ze7H',
            url:
              'https://www.ticketmaster.com/disney-on-ice-dream-big-official-hidalgo-texas-12-26-2020/event/3A005973E4E0213C',
            type: 'Upsell',
            classifications: [
              {
                primary: true,
                segment: {
                  id: 'KZFzniwnSyZfZ7v7n1',
                  name: 'Miscellaneous',
                },
                genre: {
                  id: 'KnvZfZ7v7ll',
                  name: 'Undefined',
                },
                subGenre: {
                  id: 'KZazBEonSMnZfZ7vAv1',
                  name: 'Undefined',
                },
                type: {
                  id: 'KZAyXgnZfZ7v7nJ',
                  name: 'Upsell',
                },
                subType: {
                  id: 'KZFzBErXgnZfZ7vAke',
                  name: 'Merchandise Voucher',
                },
                family: false,
              },
            ],
          },
          {
            name: 'Disney On Ice: Scrapbook',
            id: 'G5dIZp92EAxF2',
            url:
              'https://www.ticketmaster.com/disney-on-ice-scrapbook-hidalgo-texas-12-26-2020/event/3A005973E716220F',
            type: 'Upsell',
            classifications: [
              {
                primary: true,
                segment: {
                  id: 'KZFzniwnSyZfZ7v7n1',
                  name: 'Miscellaneous',
                },
                genre: {
                  id: 'KnvZfZ7v7ll',
                  name: 'Undefined',
                },
                subGenre: {
                  id: 'KZazBEonSMnZfZ7vAv1',
                  name: 'Undefined',
                },
                type: {
                  id: 'KZAyXgnZfZ7v7nJ',
                  name: 'Upsell',
                },
                subType: {
                  id: 'KZFzBErXgnZfZ7vAke',
                  name: 'Merchandise Voucher',
                },
                family: false,
              },
            ],
          },
          {
            name: 'Disney On Ice: Minnie Ears Lighted Headband',
            id: 'G5dIZp92I0x14',
            url:
              'https://www.ticketmaster.com/disney-on-ice-minnie-ears-lighted-hidalgo-texas-12-26-2020/event/3A005973E8922295',
            type: 'Upsell',
            classifications: [
              {
                primary: true,
                segment: {
                  id: 'KZFzniwnSyZfZ7v7n1',
                  name: 'Miscellaneous',
                },
                genre: {
                  id: 'KnvZfZ7v7ll',
                  name: 'Undefined',
                },
                subGenre: {
                  id: 'KZazBEonSMnZfZ7vAv1',
                  name: 'Undefined',
                },
                type: {
                  id: 'KZAyXgnZfZ7v7nJ',
                  name: 'Upsell',
                },
                subType: {
                  id: 'KZFzBErXgnZfZ7vAke',
                  name: 'Merchandise Voucher',
                },
                family: false,
              },
            ],
          },
          {
            name: 'Disney On Ice: Snowflake Wand',
            id: 'G5dIZp92luwCs',
            url:
              'https://www.ticketmaster.com/disney-on-ice-snowflake-wand-hidalgo-texas-12-26-2020/event/3A005973EB3723B1',
            type: 'Upsell',
            classifications: [
              {
                primary: true,
                segment: {
                  id: 'KZFzniwnSyZfZ7v7n1',
                  name: 'Miscellaneous',
                },
                genre: {
                  id: 'KnvZfZ7v7ll',
                  name: 'Undefined',
                },
                subGenre: {
                  id: 'KZazBEonSMnZfZ7vAv1',
                  name: 'Undefined',
                },
                type: {
                  id: 'KZAyXgnZfZ7v7nJ',
                  name: 'Upsell',
                },
                subType: {
                  id: 'KZFzBErXgnZfZ7vAke',
                  name: 'Merchandise Voucher',
                },
                family: false,
              },
            ],
          },
          {
            name: 'Disney On Ice: Mickey Light-Up Wand',
            id: 'G5dIZp92nKwGS',
            url:
              'https://www.ticketmaster.com/disney-on-ice-mickey-lightup-wand-hidalgo-texas-12-26-2020/event/3A005973EA4F2333',
            type: 'Upsell',
            classifications: [
              {
                primary: true,
                segment: {
                  id: 'KZFzniwnSyZfZ7v7n1',
                  name: 'Miscellaneous',
                },
                genre: {
                  id: 'KnvZfZ7v7ll',
                  name: 'Undefined',
                },
                subGenre: {
                  id: 'KZazBEonSMnZfZ7vAv1',
                  name: 'Undefined',
                },
                type: {
                  id: 'KZAyXgnZfZ7v7nJ',
                  name: 'Upsell',
                },
                subType: {
                  id: 'KZFzBErXgnZfZ7vAke',
                  name: 'Merchandise Voucher',
                },
                family: false,
              },
            ],
          },
          {
            name: 'Disney On Ice: Dream Big Program Book',
            id: 'G5dIZp92tL35n',
            url:
              'https://www.ticketmaster.com/disney-on-ice-dream-big-program-hidalgo-texas-12-26-2020/event/3A005973E97D22EA',
            type: 'Upsell',
            classifications: [
              {
                primary: true,
                segment: {
                  id: 'KZFzniwnSyZfZ7v7n1',
                  name: 'Miscellaneous',
                },
                genre: {
                  id: 'KnvZfZ7v7ll',
                  name: 'Undefined',
                },
                subGenre: {
                  id: 'KZazBEonSMnZfZ7vAv1',
                  name: 'Undefined',
                },
                type: {
                  id: 'KZAyXgnZfZ7v7nJ',
                  name: 'Upsell',
                },
                subType: {
                  id: 'KZFzBErXgnZfZ7vAke',
                  name: 'Merchandise Voucher',
                },
                family: false,
              },
            ],
          },
        ],
        seatmap: {
          staticUrl:
            'https://maps.ticketmaster.com/maps/geometry/3/event/3A005971D93D1BD7/staticImage?type=png&systemId=HOST',
        },
        accessibility: {
          info:
            'ADA inventory is available at State Farm Arena in a 1+1 seating configuration.',
          ticketLimit: 2,
        },
        ticketLimit: {
          info: 'There is an 8 ticket limit for this event.',
        },
        ageRestrictions: {
          legalAgeEnforced: false,
          ageRuleDescription:
            'All guests age 2 and older are required to have a ticket.',
        },
        _links: {
          self: {
            href: '/discovery/v2/events/G5dIZp96_2oR9?locale=en-us',
          },
          attractions: [
            {
              href: '/discovery/v2/attractions/K8vZ917CDpV?locale=en-us',
            },
          ],
          venues: [
            {
              href: '/discovery/v2/venues/KovZpZAJJtIA?locale=en-us',
            },
          ],
        },
        _embedded: {
          venues: [
            {
              name: 'Payne Arena',
              type: 'venue',
              id: 'KovZpZAJJtIA',
              test: false,
              url:
                'https://www.ticketmaster.com/payne-arena-tickets-hidalgo/venue/475863',
              locale: 'en-us',
              images: [
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dbimages/21789v.jpg',
                  width: 205,
                  height: 115,
                  fallback: false,
                },
              ],
              postalCode: '78557',
              timezone: 'America/Chicago',
              city: {
                name: 'Hidalgo',
              },
              state: {
                name: 'Texas',
                stateCode: 'TX',
              },
              country: {
                name: 'United States Of America',
                countryCode: 'US',
              },
              address: {
                line1: '2600 N. 10th Street (Hwy 336)',
              },
              location: {
                longitude: '-98.2443992',
                latitude: '26.1201178',
              },
              markets: [
                {
                  name: 'South Texas',
                  id: '122',
                },
              ],
              dmas: [
                {
                  id: 260,
                },
                {
                  id: 293,
                },
                {
                  id: 318,
                },
                {
                  id: 407,
                },
              ],
              boxOfficeInfo: {
                phoneNumberDetail: '(956) 843-6688',
                openHoursDetail:
                  'Box Office Location: The box office is located ON THE FRONT OF THE State Farm Arena facing 10th Street. Box Office Phone Number: (956) 843-6688 Box Office Hours: Monday – Friday, 8:30am – 5:30pm Saturday - Open at 12 noon ONLY if an event is scheduled Sunday – Open at 12 noon ONLY if an event is scheduled Open 10:00 am for Saturday show on-sales',
                acceptedPaymentDetail:
                  'Cash, Visa, MasterCard, American Express, Discover. Checks are NOT accepted.',
              },
              accessibleSeatingDetail:
                'Accessible seating is available at State Farm Arena. For additional information regarding the availability of accessible seating please call the Dodge Arena Box Office at (956) 843-6688.',
              generalInfo: {
                childRule:
                  'Discounted ticket prices for kids are sometimes available for various shows. Age restrictions and the amount of the discount vary by event and are at the discretion of the touring act.',
              },
              upcomingEvents: {
                _total: 29,
                ticketmaster: 29,
              },
              _links: {
                self: {
                  href: '/discovery/v2/venues/KovZpZAJJtIA?locale=en-us',
                },
              },
            },
          ],
          attractions: [
            {
              name: 'Disney On Ice presents Dream Big',
              type: 'attraction',
              id: 'K8vZ917CDpV',
              test: false,
              url:
                'https://www.ticketmaster.com/disney-on-ice-presents-dream-big-tickets/artist/1638731',
              locale: 'en-us',
              images: [
                {
                  ratio: '3_2',
                  url:
                    'https://s1.ticketm.net/dam/a/c2f/6bd97efe-e423-4878-9553-6630b2fb1c2f_1365981_TABLET_LANDSCAPE_3_2.jpg',
                  width: 1024,
                  height: 683,
                  fallback: false,
                },
                {
                  ratio: '4_3',
                  url:
                    'https://s1.ticketm.net/dam/a/c2f/6bd97efe-e423-4878-9553-6630b2fb1c2f_1365981_CUSTOM.jpg',
                  width: 305,
                  height: 225,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url:
                    'https://s1.ticketm.net/dam/a/c2f/6bd97efe-e423-4878-9553-6630b2fb1c2f_1365981_TABLET_LANDSCAPE_LARGE_16_9.jpg',
                  width: 2048,
                  height: 1152,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url:
                    'https://s1.ticketm.net/dam/a/c2f/6bd97efe-e423-4878-9553-6630b2fb1c2f_1365981_RETINA_PORTRAIT_16_9.jpg',
                  width: 640,
                  height: 360,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url:
                    'https://s1.ticketm.net/dam/a/c2f/6bd97efe-e423-4878-9553-6630b2fb1c2f_1365981_RETINA_LANDSCAPE_16_9.jpg',
                  width: 1136,
                  height: 639,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url:
                    'https://s1.ticketm.net/dam/a/c2f/6bd97efe-e423-4878-9553-6630b2fb1c2f_1365981_EVENT_DETAIL_PAGE_16_9.jpg',
                  width: 205,
                  height: 115,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url:
                    'https://s1.ticketm.net/dam/a/c2f/6bd97efe-e423-4878-9553-6630b2fb1c2f_1365981_ARTIST_PAGE_3_2.jpg',
                  width: 305,
                  height: 203,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url:
                    'https://s1.ticketm.net/dam/a/c2f/6bd97efe-e423-4878-9553-6630b2fb1c2f_1365981_TABLET_LANDSCAPE_16_9.jpg',
                  width: 1024,
                  height: 576,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url:
                    'https://s1.ticketm.net/dam/a/c2f/6bd97efe-e423-4878-9553-6630b2fb1c2f_1365981_RECOMENDATION_16_9.jpg',
                  width: 100,
                  height: 56,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url:
                    'https://s1.ticketm.net/dam/a/c2f/6bd97efe-e423-4878-9553-6630b2fb1c2f_1365981_RETINA_PORTRAIT_3_2.jpg',
                  width: 640,
                  height: 427,
                  fallback: false,
                },
              ],
              classifications: [
                {
                  primary: true,
                  segment: {
                    id: 'KZFzniwnSyZfZ7v7n1',
                    name: 'Miscellaneous',
                  },
                  genre: {
                    id: 'KnvZfZ7v7lI',
                    name: 'Ice Shows',
                  },
                  subGenre: {
                    id: 'KZazBEonSMnZfZ7vAv6',
                    name: 'Ice Shows',
                  },
                  type: {
                    id: 'KZAyXgnZfZ7v7nI',
                    name: 'Undefined',
                  },
                  subType: {
                    id: 'KZFzBErXgnZfZ7v7lJ',
                    name: 'Undefined',
                  },
                  family: true,
                },
              ],
              upcomingEvents: {
                _total: 60,
                ticketmaster: 60,
              },
              _links: {
                self: {
                  href: '/discovery/v2/attractions/K8vZ917CDpV?locale=en-us',
                },
              },
            },
          ],
        },
      },
    ],
  },
  _links: {
    first: {
      href: '/discovery/v2/events?locale=*&page=0&size=20',
    },
    self: {
      href: '/discovery/v2/events?locale=*',
    },
    next: {
      href: '/discovery/v2/events?locale=*&page=1&size=20',
    },
    last: {
      href: '/discovery/v2/events?locale=*&page=6223&size=20',
    },
  },
  page: {
    size: 20,
    totalElements: 124470,
    totalPages: 6224,
    number: 0,
  },
};
