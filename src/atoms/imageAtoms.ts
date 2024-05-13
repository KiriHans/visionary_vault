import { atom } from "jotai";
import { type SelectImage } from "~/server/db/schema";

export const imageListAtom = atom<SelectImage[]>([]);
