// @flow

import escapeStringRegexp from 'escape-string-regexp'

const matchWords = (text: string, values: Array<?string>): boolean => {
  const words = text.replace(/\s+/, ' ').split(' ')

  return words.reduce((found, word: string) => {
    return found && matchText(word, values)
  }, true)
}

const normalizeText = (text: string): string => {
  return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
}

const matchText = (text: string, values: Array<?string>): boolean => {
  const normalizedText = normalizeText(text)
  const re = new RegExp(escapeStringRegexp(normalizedText), 'i')

  return values.reduce((match, value: ?string) => {
    return match || (typeof value === 'string' && re.test(normalizeText(value)))
  }, false)
}

export default matchWords
