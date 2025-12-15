import { graphql, HttpResponse } from 'msw';

import tapahtumatEventListFrontPageCarousel from '../../responses/linkedEvents/eventList/tapahtumat-eventlist-frontpage.json';

export const frontPageCarouselVariables = new URLSearchParams({
  keyword:
    'yso:p1808,yso:p18434,yso:p27962,yso:p3064,yso:p20421,yso:p6422,yso:p2162,yso:p768,yso:p18718,yso:p24765,yso:p5470,yso:p23218,yso:p2841,yso:p29817,yso:p12257,yso:p3065',
  location:
    'tprek:7265,tprek:7256,tprek:7255,tprek:8740,tprek:7259,tprek:7260,tprek:7254,tprek:20633,tprek:7258',
  division: 'kunta:helsinki',
  sort: 'end_time',
  superEventType: 'umbrella,none',
  start: 'now',
  pageSize: '9',
  include: 'in_language,keywords,location,audience',
});

/**
    Query to fetch event selection module in the Carousel-component.

    Example query taken from the real response of Hobbies staging CMS: https://hobbies-graphql-proxy.test.hel.ninja/proxy/graphql.
    The response is modified so that there are 2 ongoing events and the rest of them are in the past.

    query:
    ```
    query EventList($eventType: [EventTypeId], $internetBased: Boolean, $suitableFor: [Int], $allOngoing: Boolean, $allOngoingAnd: [String], $division: [String], $end: String, $endsAfter: String, $endsBefore: String, $inLanguage: String, $include: [String], $isFree: Boolean, $keyword: [String], $keywordAnd: [String], $keywordOrSet1: [String], $keywordOrSet2: [String], $keywordOrSet3: [String], $keywordNot: [String], $language: String, $localOngoingAnd: [String], $location: [String], $page: Int, $pageSize: Int, $publisher: ID, $sort: String, $start: String, $startsAfter: String, $startsBefore: String, $superEvent: ID, $superEventType: [String], $text: String, $translation: String) {
        eventList(
            eventType: $eventType
            internetBased: $internetBased
            suitableFor: $suitableFor
            allOngoing: $allOngoing
            allOngoingAnd: $allOngoingAnd
            division: $division
            end: $end
            endsAfter: $endsAfter
            endsBefore: $endsBefore
            include: $include
            inLanguage: $inLanguage
            isFree: $isFree
            keyword: $keyword
            keywordAnd: $keywordAnd
            keywordOrSet1: $keywordOrSet1
            keywordOrSet2: $keywordOrSet2
            keywordOrSet3: $keywordOrSet3
            keywordNot: $keywordNot
            language: $language
            localOngoingAnd: $localOngoingAnd
            location: $location
            page: $page
            pageSize: $pageSize
            publisher: $publisher
            sort: $sort
            start: $start
            startsAfter: $startsAfter
            startsBefore: $startsBefore
            superEvent: $superEvent
            superEventType: $superEventType
            text: $text
            translation: $translation
        ) {
            meta {
            count
            next
            previous
            __typename
            }
            data {
            ...eventCmsEventFields
            __typename
            }
            __typename
        }
    }

    fragment eventCmsEventFields on EventDetails {
        id
        internalId
        audienceMinAge
        audienceMaxAge
        eventStatus
        externalLinks {
            name
            link
            __typename
        }
        images {
            id
            name
            url
            photographerName
            __typename
        }
        subEvents {
            internalId
            __typename
        }
        typeId
        superEvent {
            internalId
            __typename
        }
        inLanguage {
            name {
            ...localizedCmsEventFields
            __typename
            }
            __typename
        }
        keywords {
            ...keywordCmsEventFields
            __typename
        }
        location {
            ...placeCmsEventFields
            __typename
        }
        offers {
            ...offerCmsEventFields
            __typename
        }
        name {
            ...localizedCmsEventFields
            __typename
        }
        description {
            ...localizedCmsEventFields
            __typename
        }
        shortDescription {
            ...localizedCmsEventFields
            __typename
        }
        endTime
        startTime
        publisher
        provider {
            ...localizedCmsEventFields
            __typename
        }
        infoUrl {
            ...localizedCmsEventFields
            __typename
        }
        audience {
            id
            name {
            ...localizedCmsEventFields
            __typename
            }
            __typename
        }
        locationExtraInfo {
            ...localizedCmsEventFields
            __typename
        }
        enrolmentStartTime
        enrolmentEndTime
        __typename
    }

    fragment localizedCmsEventFields on LocalizedObject {
        en
        fi
        sv
        __typename
    }

    fragment keywordCmsEventFields on Keyword {
        id
        internalId
        dataSource
        hasUpcomingEvents
        name {
            ...localizedCmsEventFields
            __typename
        }
        __typename
    }

    fragment placeCmsEventFields on Place {
        id
        divisions {
            type
            name {
            ...localizedCmsEventFields
            __typename
            }
            __typename
        }
        hasUpcomingEvents
        internalId
        email
        infoUrl {
            ...localizedCmsEventFields
            __typename
        }
        name {
            ...localizedCmsEventFields
            __typename
        }
        addressLocality {
            ...localizedCmsEventFields
            __typename
        }
        streetAddress {
            ...localizedCmsEventFields
            __typename
        }
        postalCode
        position {
            coordinates
            __typename
        }
        telephone {
            ...localizedCmsEventFields
            __typename
        }
        __typename
    }

    fragment offerCmsEventFields on Offer {
        isFree
        price {
            ...localizedCmsEventFields
            __typename
        }
        description {
            ...localizedCmsEventFields
            __typename
        }
        infoUrl {
            ...localizedCmsEventFields
            __typename
        }
        __typename
    }
    ```

    vars:
    ```
    {
        "keyword": "yso:p1808,yso:p18434,yso:p27962,yso:p3064,yso:p20421,yso:p6422,yso:p2162,yso:p768,yso:p18718,yso:p24765,yso:p5470,yso:p23218,yso:p2841,yso:p29817,yso:p12257,yso:p3065",
        "location": "tprek:7265,tprek:7256,tprek:7255,tprek:8740,tprek:7259,tprek:7260,tprek:7254,tprek:20633,tprek:7258",
        "division": "kunta:helsinki",
        "sort": "end_time",
        "superEventType": "umbrella,none",
        "start": "now",
        "pageSize": 9,
        "include": [
            "in_language",
            "keywords",
            "location",
            "audience"
        ]
    }
    ```
*/
export const queryEventList = () =>
  graphql.query('EventList', () =>
    HttpResponse.json({ data: tapahtumatEventListFrontPageCarousel }),
  );
