"use server";

import { redirect } from "next/navigation";

export const redirectHome = async () => {
  redirect("/");
};
