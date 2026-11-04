import { GOOGLE_FONTS_RANGES } from "@excalidraw/common";

import { type ExcalidrawFontFaceDescriptor } from "../Fonts";

import Thai from "./NotoSansThai-Regular-lyJ0QCvz.woff2";
import LatinExt from "./NotoSansThai-Regular-lzh0QCvz.woff2";
import Latin from "./NotoSansThai-Regular-lzZ0QA.woff2";

export const NotoSansThaiFontFaces: ExcalidrawFontFaceDescriptor[] = [
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
