// eslint-disable-next-line import/no-extraneous-dependencies
import { graphql } from 'msw';

import {
  activeEvents,
  pastEvents,
} from '../../responses/linkedEvents/eventMocks';

/**
    Query to fetch event selection module in the Carousel-component.

    Example query taken from the real response of Hobbies staging CMS: https://hobbies-graphql-proxy.test.hel.ninja/proxy/graphql.
    The response is modified so that there are 2 ongoing events and the rest of them are in the past.

    query:
    ```
    query EventsByIds($ids: [ID!]!, $eventType: [EventTypeId], $include: [String], $sort: String, $pageSize: Int, $page: Int, $start: String, $end: String) {
        eventsByIds(
            ids: $ids
            eventType: $eventType
            include: $include
            sort: $sort
            pageSize: $pageSize
            page: $page
            start: $start
            end: $end
        ) {
            data {
                ...eventCmsEventFields
                __typename
                }
                meta {
                count
                next
                previous
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
    }
    ```

    vars:
    ```
    {
        "ids": [
            "helsinki:agb5kr3nra",
            "harrastushaku:14523_2023010215001630",
            "harrastushaku:14503_2023010215001700",
            "harrastushaku:14524_2023010315001700",
            "harrastushaku:16143",
            "harrastushaku:14526_2023010515001630"
        ],
        "pageSize": 6,
        "include": [
            "in_language",
            "keywords",
            "location",
            "audience"
        ],
        "eventType": [
            "General",
            "Course"
        ]
    }
    ```
*/
export const queryEventsByIds = () =>
  graphql.query('EventsByIds', (req, res, ctx) => {
    const eventIdsFilter = req.variables.ids;
    const events = [...activeEvents, ...pastEvents];
    // const data = eventIdsFilter?.length
    //   ? events.filter((event) => eventIdsFilter.includes(event.id))
    //   : events;
    const data = events.filter((event) => eventIdsFilter.includes(event.id));
    return res(
      ctx.data({
        eventsByIds: {
          data,
          meta: {
            count: data.length,
            next: null,
            previous: null,
            __typename: 'Meta',
          },
          __typename: 'EventListResponse',
        },
      }),
    );
  });
