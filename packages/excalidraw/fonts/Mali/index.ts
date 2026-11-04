import { GOOGLE_FONTS_RANGES } from "@excalidraw/common";

import { type ExcalidrawFontFaceDescriptor } from "../Fonts";

import Thai from "./Mali-Regular-N0ba2SRONuN4SDnED35yKd7vmA.woff2";
import LatinExt from "./Mali-Regular-N0ba2SRONuN4SCPED35yKd7vmA.woff2";
import Latin from "./Mali-Regular-N0ba2SRONuN4SC3ED35yKd4.woff2";

export const MaliFontFaces: ExcalidrawFontFaceDescriptor[] = [
  {
    uri: Thai,
    descriptors: { unicodeRange: GOOGLE_FONTS_RANGES.THAI },
  },
  {
    uri: LatinExt,
    descriptors: { unicodeRange: GOOGLE_FONTS_RANGES.LATIN_EXT },
  },
  {
    uri: Latin,
    descriptors: { unicodeRange: GOOGLE_FONTS_RANGES.LATIN },
  },
];
