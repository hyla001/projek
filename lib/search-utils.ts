// Search utility functions for fuzzy matching and relevance scoring

// Synonym dictionary for common search terms
const synonyms: Record<string, string[]> = {
  hp: ["handphone", "smartphone", "phone", "hp", "ponsel", "telepon"],
  laptop: ["laptop", "notebook", "komputer jinjing"],
  tv: ["tv", "televisi", "television", "tivi"],
  komputer: ["komputer", "pc", "computer", "desktop"],
  printer: ["printer", "pencetak", "mesin cetak"],
  speaker: ["speaker", "pengeras suara", "audio"],
  amplifier: ["amplifier", "penguat suara", "ampli"],
  kulkas: ["kulkas", "lemari es", "refrigerator"],
  ac: ["ac", "air conditioner", "pendingin", "air conditioning"],
  mesin: ["mesin cuci", "washing machine", "washer"],
}

// Common typos and variations
const typoMap: Record<string, string> = {
  henpon: "hp",
  hape: "hp",
  henphone: "hp",
  handpon: "hp",
  laktop: "laptop",
  laptob: "laptop",
  tivi: "tv",
  tivi: "tv",
  kompiter: "komputer",
  kompter: "komputer",
}

/**
 * Calculate Levenshtein distance for fuzzy matching
 */
function levenshteinDistance(str1: string, str2: string): number {
  const len1 = str1.length
  const len2 = str2.length
  const matrix: number[][] = []

  for (let i = 0; i <= len1; i++) {
    matrix[i] = [i]
  }

  for (let j = 0; j <= len2; j++) {
    matrix[0][j] = j
  }

  for (let i = 1; i <= len1; i++) {
    for (let j = 1; j <= len2; j++) {
      const cost = str1[i - 1] === str2[j - 1] ? 0 : 1
      matrix[i][j] = Math.min(
        matrix[i - 1][j] + 1, // deletion
        matrix[i][j - 1] + 1, // insertion
        matrix[i - 1][j - 1] + cost, // substitution
      )
    }
  }

  return matrix[len1][len2]
}

/**
 * Get synonyms for a search term
 */
export function getSynonyms(term: string): string[] {
  const normalized = term.toLowerCase().trim()

  // Check typo map first
  const correctedTerm = typoMap[normalized] || normalized

  // Return synonyms if found
  if (synonyms[correctedTerm]) {
    return synonyms[correctedTerm]
  }

  // Check if term is in any synonym list
  for (const [key, values] of Object.entries(synonyms)) {
    if (values.includes(correctedTerm)) {
      return values
    }
  }

  return [correctedTerm]
}

/**
 * Check if text matches query with fuzzy logic
 */
export function fuzzyMatch(text: string, query: string): { matches: boolean; score: number } {
  const textLower = text.toLowerCase()
  const queryLower = query.toLowerCase()

  // Exact match - highest score
  if (textLower === queryLower) {
    return { matches: true, score: 100 }
  }

  // Starts with query - high score
  if (textLower.startsWith(queryLower)) {
    return { matches: true, score: 90 }
  }

  // Contains exact query - good score
  if (textLower.includes(queryLower)) {
    return { matches: true, score: 80 }
  }

  // Check synonyms
  const synonymList = getSynonyms(queryLower)
  for (const synonym of synonymList) {
    if (textLower.includes(synonym)) {
      return { matches: true, score: 70 }
    }
  }

  // Word boundary matching (e.g., "sam" matches "Samsung")
  const words = textLower.split(/\s+/)
  for (const word of words) {
    if (word.startsWith(queryLower)) {
      return { matches: true, score: 65 }
    }
  }

  // Fuzzy string matching for typos (max distance 2)
  const distance = levenshteinDistance(queryLower, textLower)
  if (distance <= 2 && queryLower.length > 3) {
    return { matches: true, score: 60 - distance * 10 }
  }

  // Partial character matching
  let matchedChars = 0
  let queryIndex = 0
  for (let i = 0; i < textLower.length && queryIndex < queryLower.length; i++) {
    if (textLower[i] === queryLower[queryIndex]) {
      matchedChars++
      queryIndex++
    }
  }

  const matchPercentage = (matchedChars / queryLower.length) * 100
  if (matchPercentage > 70) {
    return { matches: true, score: Math.floor(matchPercentage / 2) }
  }

  return { matches: false, score: 0 }
}

/**
 * Search with ranking
 */
export interface SearchResult {
  item: any
  score: number
  matchedField: string
}

export function searchWithRanking(items: any[], query: string, searchFields: string[]): SearchResult[] {
  const results: SearchResult[] = []

  for (const item of items) {
    let bestScore = 0
    let bestField = ""

    for (const field of searchFields) {
      const value = item[field]
      if (typeof value !== "string") continue

      const { matches, score } = fuzzyMatch(value, query)
      if (matches && score > bestScore) {
        bestScore = score
        bestField = field
      }
    }

    if (bestScore > 0) {
      results.push({
        item,
        score: bestScore,
        matchedField: bestField,
      })
    }
  }

  // Sort by score descending
  return results.sort((a, b) => b.score - a.score)
}
