export interface Options {
  /**
   * Count [ambiguous width characters](https://www.unicode.org/reports/tr11/#Ambiguous) as having narrow width (count of 1) instead of wide width (count of 2).
	 * @default true
	 */
  readonly ambiguousIsNarrow?: boolean;
}

/**
 * Get displayed width of unicode strings. ANSI escape codes are ignored.
 */
export default function stringWidth(string: string, options?: Options): number;

export const UNICODE_VERSION: string;
