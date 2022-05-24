import { PostsQuery } from "../../../common/headlessService/articles";

const mockArticles: PostsQuery["posts"] = {
  edges: [
    {
      node: {
        id: "aG9zdDo5Mg==",
        title: "test 1",
        date: "2022-05-10T15:10:13",
        lead: "<p>Some ingress text</p>\n",
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
        id: "bG9zdDo5Mg==",
        title: "test 2",
        date: "2022-05-10T15:10:13",
        lead: "<p>Some ingress text</p>\n",
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
        id: "cG9zdDo5Mg==",
        title: "test 3",
        date: "2022-05-10T15:10:13",
        lead: "<p>Some ingress text</p>\n",
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
        id: "dG9zdDo5Mg==",
        title: "test 4",
        date: "2022-05-10T15:10:13",
        lead: "<p>Some ingress text</p>\n",
        slug: "test-3",
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
        id: "eG9zdDo5Mg==",
        title: "test 5",
        date: "2022-05-10T15:10:13",
        lead: "<p>Some ingress text</p>\n",
        slug: "test-3",
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

export default mockArticles;
