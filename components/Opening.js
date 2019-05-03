import { Quotes, Dropdown, Cites, Quote, Texture, Cite } from "./styles";

const Opening = () => {
  return (
    <Quotes>
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
                  Don’t worry if it doesn’t work right. If everything did, you’d
                  be out of a job.
                </q>
                <Cite>
                  Don’t worry if it doesn’t work right. <br />
                  If everything did, you’d be out of a job.
                </Cite>
              </Quote>
            </li>
          </ul>
        </Cites>
      </Texture>
    </Quotes>
  );
};

export default Opening;
