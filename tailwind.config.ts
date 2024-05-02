import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

import { withUt } from "uploadthing/tw";

import withMT from "@material-tailwind/react/utils/withMT";

export default withMT(
  withUt({
    content: ["./src/**/*.tsx"],
    theme: {
      extend: {
        fontFamily: {
          sans: ["var(--font-sans)", ...fontFamily.sans],
        },
      },
    },
    plugins: [],
  } satisfies Config),
);
