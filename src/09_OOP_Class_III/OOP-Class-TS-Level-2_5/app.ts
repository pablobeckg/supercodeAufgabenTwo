import SpanishVocabulary from "./models/SpanishVocabulary";
import Vocabulary from "./models/vocabulary";

const newVocabulary: Vocabulary = new Vocabulary('English');
newVocabulary.addWord('hello')
newVocabulary.addWord('how')
newVocabulary.addWord('are')
newVocabulary.addWord('you')

const newSpanishVocabulary: SpanishVocabulary = new SpanishVocabulary('Spanish');
newSpanishVocabulary.addWord('hola');
newSpanishVocabulary.addWord('como');
newSpanishVocabulary.addWord('estas');
newSpanishVocabulary.addWord('hola');

console.log(newVocabulary);
console.log(newSpanishVocabulary)

newVocabulary.displayAll();
newSpanishVocabulary.displayAll();
