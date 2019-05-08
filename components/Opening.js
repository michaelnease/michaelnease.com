import { Quotes, Dropdown, Cites, Quote, Texture, Cite, Link } from "./styles";

const Opening = () => {
  return (
    <Quotes>
      <Link name="home" />
      <Texture>
        <Dropdown />
        <Cites>
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
        </Cites>
      </Texture>
    </Quotes>
  );
};

export default Opening;
