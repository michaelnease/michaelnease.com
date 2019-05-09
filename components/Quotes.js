import { QuotesStyled, Dropdown, Quote, Texture, Cite, Link } from "./styles";

const Quotes = () => {
  return (
    <QuotesStyled>
      <Texture>
        <Link name="home" />
        <Dropdown />
        <ul>
          <li>
            <Quote>
              <q>
                If debugging is the process of removing software bugs, then
                programming must be the process of putting them in.
              </q>
              <Cite>Edsger Dijkstra</Cite>
            </Quote>
          </li>
          <li>
            <Quote>
              <q>
                The best performance improvement is the transition from the
                nonworking state to the working state.
              </q>
              <Cite>J. Osterhout</Cite>
            </Quote>
          </li>
          <li>
            <Quote>
              <q>
                Design is a funny word. Some people think design means how it
                looks. But of course, if you dig deeper, it's really how it
                works.
              </q>
              <Cite>Steve Jobs</Cite>
            </Quote>
          </li>
        </ul>
      </Texture>
    </QuotesStyled>
  );
};

export default Quotes;
