import { format } from 'date-fns'

export const COLUMNS = [
  {
    Header: 'Sr.no',
    Footer: '',
    accessor: 'id',
    disableFilters: true,
    sticky: 'left'
  },
  {
    Header: 'Applied College',
    Footer: '',
    accessor: 'name',
    sticky: 'left'
  },
  {
    Header: 'Date',
    Footer: '',
    accessor: 'date',
    sticky: 'left'
  },
  
  {
    Header: 'Status',
    Footer: '',
    accessor: 'status'
  },
  
]

