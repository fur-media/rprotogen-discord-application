import { mcwReportEmbed } from "./mcwReport";
import { modAreaEmbed } from "./modAreaEmbed";
import { modAreaUserSelectorEmbed } from "./modAreaUserSelector";
import { modContactEmbed } from "./modContact";
import { modContactWizardEmbed } from "./modContactWizard";
import { ticketLogEmbed } from "./ticketLog";

export const embeds = {
  modContactEmbed,
  modContactWizardEmbed,
  ticketLogEmbed,
  mcwReportEmbed,
  modAreaEmbed,
  modAreaUserSelectorEmbed
} as const;