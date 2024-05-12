import { atom } from "jotai";
import { SelectImage } from "~/server/db/schema";

export const imageListAtom = atom<SelectImage[]>([]);
