import { Variants } from "@/interfaces/Variants";
import { m_common } from "./mixins/m_common";

export const variants: Variants = {
	primary: `
    ${m_common.default}
    bg-sky-500
    text-white
    border-sky-500
  `,
	secondary: `
    ${m_common.default}
    bg-white
    text-black
    border-black
  `,
};
