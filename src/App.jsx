import { useState } from "react";
import couple from "./assets/couple.jpg";
import { BIBLE, ORDER, HYMNS, MINISTERS, TRAIN, RECEPTION } from "./data";

function Verses({ title, verses }) {
  const chorus = title.includes("36");
  return (
    <div>
      {verses.map((v, i) => {
        const isCh = chorus && i === 1;
        const n = chorus && i > 1 ? i : i + 1;
        return (
          <div key={i}>
            <h3>{isCh ? "Chorus" : "Verse " + n}</h3>
            <p className="ly">{v}</p>
          </div>
        );
      })}
    </div>
  );
}

function Item({ n, t, children }) {
  const [o, setO] = useState(false);
  return (
    <li className="item">
      {children ? (
        <button className="row" onClick={() => setO(!o)} aria-expanded={o}>
          <i>{n}</i>
          <span>{t}</span>
          <em>{o ? "−" : "+"}</em>
        </button>
      ) : (
        <div className="row">
          <i>{n}</i>
          <span>{t}</span>
        </div>
      )}
      {children && o && <div className="panel">{children}</div>}
    </li>
  );
}

function App() {
  return (
    <main>
      <p className="small">Our Wedding Programme</p>
      <div className="arch">
        <img src={couple} alt="Temitayo and Temitope" />
      </div>
      <h1>
        Temitayo<span>&amp;</span>Temitope
      </h1>
      <p className="small">Saturday 14th November 2026 · 10:00 AM</p>

      <h2>Toast</h2>
      <p className="q">
        Our love is like a friendship caught on fire. In the beginning a flame,
        very pretty, often hot and fierce, but still only light and flickering.
      </p>
      <p className="q">
        As love grows older, our hearts mature and our love becomes as coals,
        deep-burning and unquenchable.
      </p>

      <h2>Solemnization of Holy Matrimony</h2>
      <p className="small">Between</p>
      <p className="big">Opeyemi Temitayo Odesanya</p>
      <p className="small">&amp;</p>
      <p className="big">Emmanuel Temitope Owolabi</p>
      <p className="small">At</p>
      <p className="big">
        The Redeemed Christian Church of God, Victory Chapel Zonal Headquarters
      </p>
      <p>
        Iseoluwa Bus Stop No 2, Adepoju Crescent, Abule Egba, Ekoro RDC, Lagos.
      </p>
      <p className="small">Saturday 14th November 2026 · 10 AM</p>

      <h2>Officiating Ministers</h2>
      <div className="grid">
        {MINISTERS.map(([n, r]) => (
          <p key={n}>
            <b>{n}</b>
            <span>{r}</span>
          </p>
        ))}
      </div>

      <h2>Order of Service</h2>
      <ol>
        {ORDER.map(([t, k], i) => (
          <Item key={t} n={i + 1} t={t}>
            {k === "bible" ? (
              <p className="q" style={{ margin: 0 }}>
                {BIBLE || "Passage to be announced."}
              </p>
            ) : typeof k === "number" ? (
              <Verses title={HYMNS[k][0]} verses={HYMNS[k][1]} />
            ) : null}
          </Item>
        ))}
      </ol>

      <h2>Bridal Train</h2>
      {TRAIN.map(([r, n]) => (
        <div key={r}>
          <p className="small" style={{ marginBottom: 0 }}>
            {r}
          </p>
          <p className="big" style={{ marginTop: 0 }}>
            {n}
          </p>
        </div>
      ))}

      <h2>Reception</h2>
      <p className="q">Let the celebration begin</p>
      <ol>
        {RECEPTION.map((t, i) => (
          <Item key={t} n={i + 1} t={t} />
        ))}
      </ol>

      <footer>
        <div>© 2026 · All rights reserved</div>
        <div>
          Designed &amp; Developed by{" "}
          <a
            href="https://portfolio-oladunni-kehinde.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Scoth_Tech
          </a>
        </div>
      </footer>
    </main>
  );
}

export default App;
