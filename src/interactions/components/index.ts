// buttons
import { closeTicketButton } from './buttons/closeTicketButton'
import { maInitiateTicketButton } from './buttons/maInitiateTicketButton'
import { mcwReportButton } from './buttons/mcwReportUserButton'
import { modContactStartWizardButton } from './buttons/modContactStartWizard'
import { modContactOpenTicketButton } from './buttons/openTicketButton'

// selects
import { maInitiateTicketTargetUserSelectMenu } from './selects/maInitTicketTarget'

export const components = [
  modContactStartWizardButton,
  modContactOpenTicketButton,
  closeTicketButton,
  mcwReportButton,
  maInitiateTicketButton,

  maInitiateTicketTargetUserSelectMenu
]