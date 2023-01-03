// Derived from
// - https://github.com/sindresorhus/string-width/blob/main/test.js
// - https://github.com/unicode-rs/unicode-width/blob/master/src/tests.rs

import assert from 'assert/strict'
import stringWidth from './index.js'

const t = {
  is: (a, b) => assert.strictEqual(a, b),
}

const test = (scope, fn) => {
  try {
    fn(t)
  } catch (e) {
    console.error(`Test failed: ${scope}`)
    throw e
  }
}

test('main', t => {
	t.is(stringWidth('abcde'), 5);
	t.is(stringWidth('古池や'), 6);
	t.is(stringWidth('あいうabc'), 9);
	t.is(stringWidth('あいう★'), 7);
	t.is(stringWidth('あいう★', {ambiguousIsNarrow: false}), 8);
	t.is(stringWidth('±'), 1);
	t.is(stringWidth('ノード.js'), 9);
	t.is(stringWidth('你好'), 4);
	t.is(stringWidth('안녕하세요'), 10);
	t.is(stringWidth('A\uD83C\uDE00BC'), 5, 'surrogate');
	// t.is(stringWidth('\u001B[31m\u001B[39m'), 0);
	// t.is(stringWidth('\u001B]8;;https://github.com\u0007Click\u001B]8;;\u0007'), 5);
	// t.is(stringWidth('\u{231A}'), 2, '⌚ default emoji presentation character (Emoji_Presentation)');
	// t.is(stringWidth('\u{2194}\u{FE0F}'), 2, '↔️ default text presentation character rendered as emoji');
	// t.is(stringWidth('\u{1F469}'), 2, '👩 emoji modifier base (Emoji_Modifier_Base)');
	// t.is(stringWidth('\u{1F469}\u{1F3FF}'), 2, '👩🏿 emoji modifier base followed by a modifier');
});

test('ignores control characters', t => {
	t.is(stringWidth(String.fromCharCode(0)), 0);
	t.is(stringWidth(String.fromCharCode(31)), 0);
	t.is(stringWidth(String.fromCharCode(127)), 0);
	t.is(stringWidth(String.fromCharCode(134)), 0);
	t.is(stringWidth(String.fromCharCode(159)), 0);
	t.is(stringWidth('\u001B'), 0);
});

test('handles combining characters', t => {
	t.is(stringWidth('x\u0300'), 1);
});

// test('handles ZWJ characters', t => {
// 	t.is(stringWidth('👶'), 2);
// 	t.is(stringWidth('👶🏽'), 2);
// 	t.is(stringWidth('👩‍👩‍👦‍👦'), 2);
// 	t.is(stringWidth('👨‍❤️‍💋‍👨'), 2);
// });

// ----------------------------------------

test('str', t => {
  t.is(stringWidth("ｈｅｌｌｏ"), 10);
  t.is(stringWidth("\0\0\0\x01\x01"), 0);
  t.is(stringWidth(""), 0);
  t.is(stringWidth("\u{2081}\u{2082}\u{2083}\u{2084}"), 4);
})

test('emoji', t => {
  t.is(stringWidth("👩"), 2); // Woman
  t.is(stringWidth("🔬"), 2); // Microscope
  t.is(stringWidth("👩‍🔬"), 4); // Woman scientist
})

test('char', t => {
  t.is(stringWidth('ｈ'), 2);
  t.is(stringWidth('\x00'), 0);
  t.is(stringWidth('\x01'), 0);
  t.is(stringWidth('\u{2081}'), 1);
})

test('char2', t => {
  t.is(stringWidth('\x00'), 0);
  t.is(stringWidth('\x0A'), 0);
  t.is(stringWidth('w'), 1);
  t.is(stringWidth('ｈ'), 2);
  t.is(stringWidth('\u{AD}'), 1);
  t.is(stringWidth('\u{1160}'), 0);
  t.is(stringWidth('\u{a1}'), 1);
  t.is(stringWidth('\u{300}'), 0);
})

test('unicode12', t => {
  t.is(stringWidth('\u{1F971}'), 2);
})
