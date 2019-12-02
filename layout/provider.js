import React from 'react';
import { useDeck } from 'mdx-deck';

function Provider(props) {
  const deck = useDeck();
  return (
    <div>
      <div
        css={{
          position: 'absolute',
          top: 0,
          height: 6,
          left: 0,
          right: 0,
          backgroundColor: '#3880FF',
          zIndex: 1
        }}
      />
      {props.children}
      {deck.index !== 0 && deck.mode !== 'PRESENTER' ? (
        <div
          css={{
            padding: '14px 28px',
            background: 'white',
            position: 'fixed',
            fontFamily: '"Inter", system-ui, sans-serif',
            fontWeight: 'bolder',
            fontSize: '28px',
            right: 0,
            bottom: 0,
            margin: 0,
            color: ''
          }}
        >
          @mhartington
        </div>
      ) : null}
    </div>
  );
}
export default {
  Provider
};
