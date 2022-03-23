import { PageQuery } from "../../common/headlessService/page";

const pageWithDiverseContent: PageQuery["page"] = {
  id: "abc",
  translation: {
    id: "123",
    content: `
  <h1>H1 text</h1>
  <h2>H2 text</h2>
  <h3>H3 text</h3>
  <h4>H4 text</h4>
  <h5>H5 text</h5>
  <h6>H6 text</h6>

  <blockquote>blockquote</blockquote>
  <dl>
    <dt>Title</dt>
    <dd>Description</dd>
  </dl>
  <figure>
    <img src="https://kultus.hkih.stage.geniem.io/uploads/2022/01/ae0d30ec-w_c3391_l_web.jpeg" alt="Alt text" />
    <figcaption>Fig.1 - Figure caption</figcaption>
  </figure>
  <hr />
  <ul>
    <li>Unordered list</li>
  </ul>
  <ol>
    <li>Ordered list</li>
  </ol>
  <p>Paragraph</p>
  <pre>function name() {
    return "Hello";
  }</pre>

  <p><a href="https://hel.fi">Link</a></p>
  <p><abbr title="City of Helsinki">CoH</abbr></p>
  <p><b>Bold</b></p>
  <p><bdi>إيان</bdi>: 90 points</p>
  <p><bdo dir="rtl"> This text will go right-to-left. </bdo></p>
  <br />
  <p><cite>Tuntematon sotilas</cite> by Väinö Linna.</p>
  <p><code>code</code> element</p>
  <p><data value="123">Entry 123</data></p>
  <p><dfn>Definition element</dfn></p>
  <p><em>emphasis</em></p>
  <p><i>i-tag</i></p>
  <p><kdb>Ctrl</kdb></p>
  <p><mark>highlighted</mark></p>
  <p><q>Inline quote</q></p>
  <p><ruby>
  漢 <rp>(</rp><rt>ㄏㄢˋ</rt><rp>)</rp>
  </ruby></p>
  <p><s>Strikethrough</s></p>
  <p><samp>Sample output</samp></p>
  <p><small>Small</small></p>
  <p><span>Span</span></p>
  <p><strong>Strong</strong></p>
  <p>n<sub>Sub</sub></p>
  <p>n<sup>Sup</sup></p>
  <p><time>10:00</time></p>
  <p><u>misspeleld</u></p>
  <p>variable <var>x</var></p>
  <p>looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooolooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooolooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooolooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo<wbr>xng</p>
  `,
    title: "Kulttuurikasvatus",
  },
};

export default pageWithDiverseContent;
