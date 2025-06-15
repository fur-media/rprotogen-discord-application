// This file exports all modal submission handlers defined in the modalSubmits submodule.
// Each modal submission should export a name, description, optional options, and a function to be executed when the modal is submitted.

import { modContactTicketDetailsModal } from './modContactTicketDetailsModal'

export const modalSubmits = [
  modContactTicketDetailsModal,
]