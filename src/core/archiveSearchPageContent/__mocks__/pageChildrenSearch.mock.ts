import { PageChildrenSearchQuery } from "../../../common/headlessService/__generated__";

const mockPageWithChildren: PageChildrenSearchQuery["page"]["children"] = {
  edges: [
    {
      node: {
        __typename: "Page",
        id: "aG9zdDo5Mg==",
        title: "Sub Page - test 1",
        // date: "2022-05-10T15:10:13",
        lead: "<p>Some ingress text for the sub page</p>\n",
        slug: "test-1",
        uri: "/en/uncategorized-en/test-3/",
        featuredImage: {
          node: {
            altText: "some alt text",
            mediaItemUrl:
              "https://api.hel.fi/linkedevents-test/media/images/a-sip_netin_tapahtumakuva.1080x648_T3brYn4.jpg",
          },
        },
      },
    },
    {
      node: {
        __typename: "Page",
        id: "bG9zdDo5Mg2==",
        title: "Sub Page - test 2",
        // date: "2022-05-10T15:10:13",
        lead: "<p>Some ingress text for the sub page</p>\n",
        slug: "test-2",
        uri: "/en/uncategorized-en/test-2/",
        featuredImage: {
          node: {
            altText: "some alt text",
            mediaItemUrl:
              "https://api.hel.fi/linkedevents-test/media/images/a-sip_netin_tapahtumakuva.1080x648_T3brYn4.jpg",
          },
        },
      },
    },
    {
      node: {
        __typename: "Page",
        id: "cG9zdDo35Mg3==",
        title: "Sub Page - test 3",
        // date: "2022-05-10T15:10:13",
        lead: "<p>Some ingress text for the sub page</p>\n",
        slug: "test-3",
        uri: "/en/uncategorized-en/test-3/",
        featuredImage: {
          node: {
            altText: "some alt text",
            mediaItemUrl:
              "https://api.hel.fi/linkedevents-test/media/images/a-sip_netin_tapahtumakuva.1080x648_T3brYn4.jpg",
          },
        },
      },
    },
    {
      node: {
        __typename: "Page",
        id: "dG9zdDo5Mg4==",
        title: "Sub Page - test 4",
        // date: "2022-05-10T15:10:13",
        lead: "<p>Some ingress text for the sub page</p>\n",
        slug: "test-4",
        uri: "/en/uncategorized-en/test-4/",
        featuredImage: {
          node: {
            altText: "some alt text",
            mediaItemUrl:
              "https://api.hel.fi/linkedevents-test/media/images/a-sip_netin_tapahtumakuva.1080x648_T3brYn4.jpg",
          },
        },
      },
    },
    {
      node: {
        __typename: "Page",
        id: "eG9zdDo5Mg5==",
        title: "Sub Page - test 5",
        // date: "2022-05-10T15:10:13",
        lead: "<p>Some ingress text for the sub page</p>\n",
        slug: "test-5",
        uri: "/en/uncategorized-en/test-5/",
        featuredImage: {
          node: {
            altText: "some alt text",
            mediaItemUrl:
              "https://api.hel.fi/linkedevents-test/media/images/a-sip_netin_tapahtumakuva.1080x648_T3brYn4.jpg",
          },
        },
      },
    },
  ],
};

export default mockPageWithChildren;
