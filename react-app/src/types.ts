import type { CSSProperties } from "react";

/**
 * CSSProperties widened with an index signature so clamp()/oklch()/text-wrap
 * values (and any property not yet in the bundled csstype version) can be
 * used in inline style objects without excess-property errors.
 */
export type CSS = CSSProperties & { [key: string]: string | number | undefined };
