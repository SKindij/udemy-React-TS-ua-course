import { ChapterWrapper } from 'components';

const TRANSPORT_EMOJIS = ['🚗', '🚕', '🚙', '🚌', '🚎', '🏎', '🚓', '🚑', '🚒', '🚐', '🛻', '🚚'];
const BALLS_EMOJIS = ['⚽️', '🏀', '🏈', '⚾️', '🎾', '🏐', '🏉'];

interface EmojisListProps {
  emojis:string[];
  ordered?:boolean;
}

function EmojisList(props:EmojisListProps):JSX.Element {
  const { emojis, ordered = false } = props;
  const listItems = emojis.map((emoji, index) => <li key={index}>{emoji}</li>);
  const ListComponent = ordered ? 'ol' : 'ul';
  return <ListComponent>{listItems}</ListComponent>;
}

function EmojisTable({ emojis }: { emojis:string[] }):JSX.Element {
  const rows = new Array<JSX.Element>();
  // const rows: JSX.Element[] = [];

  for (let i = 0; i < emojis.length; i++) {
    const emoji = emojis[i];
    rows.push(
      <tr key={i}>
        <td>{i + 1}</td>
        <td>{emoji}</td>
        <td>
          {emoji
            .split('')
            .map((ch) => ch.charCodeAt(0))
            .join(' + ')}
        </td>
      </tr>
    );
  }

  return (
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Emoji</th>
          <th>Char codes</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

export function Arrays():JSX.Element {
  return (
    <ChapterWrapper title="Rendering arrays" subtitle="Introduction to JSX">
      <p>Balls emojis: {BALLS_EMOJIS}</p>
      <p>Transport emojis: {TRANSPORT_EMOJIS.join(' ')}</p>

      <div style={{ display: 'flex', gap: 20 }}>
        <EmojisList emojis={BALLS_EMOJIS} />
        <EmojisList emojis={TRANSPORT_EMOJIS} ordered />
        <EmojisTable emojis={BALLS_EMOJIS} />
        <EmojisTable emojis={TRANSPORT_EMOJIS} />
      </div>
    </ChapterWrapper>
  );
}