'use client'

import * as React from 'react'
import { ChevronDownIcon } from '@radix-ui/react-icons'
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table'

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { AvatarStack } from '@/components/avatar/avatar-stack'
import Link from 'next/link'

interface Responsavel {
  id: string
  avatar: string
}

export type Payment = {
  id: string
  situation: 'started' | 'finalized'
  status: 'pending ce' | 'pending ship' | 'pending li' | 'pending transport'
  referencia: string
  client: string
  type: 'importation' | 'exportation'
  importador: string
  invoice_number?: string
  fornecedor?: string
  li?: string // vai vim como uma lista
  obs_li?: string
  ce_master?: number
  ce_house?: number
  hbl?: string
  mbl?: string
  container?: string // vai vim como lista
  armador?: string
  agente?: string
  data_final_free_time?: string
  navio?: string
  chegada_terminal?: string
  descargar?: boolean
  presença?: boolean
  mapa?: string
  di?: string
  due?: string
  data_di?: string
  canal?: string
  desembaraco?: string
  fluxo?: string
  originais?: string
  demanda_cliente?: string
  operacional?: string
  data_numerario?: string
  tempo_free_time?: number
  economia?: string
  responsavel?: Responsavel[] // vai vim em lista
}

type Props = {
  data: Payment[] // Propriedade esperada
}

export const columns: ColumnDef<Payment>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'referencia',
    header: 'Referencia',
    cell: ({ row }) => (
      <>
        <Link href={'/'}>
          <div className="capitalize hover:underline">
            {row.getValue('referencia')}
          </div>
        </Link>
      </>
    ),
  },

  {
    accessorKey: 'client',
    header: 'Cliente',
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue('client')}</div>
    ),
  },

  {
    accessorKey: 'type',
    header: 'Tipo',
    cell: ({ row }) => <div className="capitalize">{row.getValue('type')}</div>,
  },

  {
    accessorKey: 'mapa',
    header: 'MAPA',
    cell: ({ row }) => <div className="capitalize">{row.getValue('mapa')}</div>,
  },

  {
    accessorKey: 'chegada_terminal',
    header: 'Data de Chegada',
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue('chegada_terminal')}</div>
    ),
  },

  {
    accessorKey: 'canal',
    header: 'Canal',
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue('canal')}</div>
    ),
  },

  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue('status')}</div>
    ),
  },

  {
    accessorKey: 'responsavel',
    header: 'Responsavel',
    cell: ({ row }) => {
      const payment = row.original

      return (
        <>
          <Button asChild onClick={() => window.alert('Ola')}>
            <AvatarStack avatars={payment.responsavel} />
          </Button>
        </>
      )
    },
  },
]

export function ProcessesList({ data }: Props) {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    [],
  )
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  })

  return (
    <div className="w-full p-4">
      <div className="flex items-center py-4">
        <Input
          placeholder="Filtre por referência..."
          value={
            (table.getColumn('referencia')?.getFilterValue() as string) ?? ''
          }
          onChange={(event) =>
            table.getColumn('referencia')?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDownIcon className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                )
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="mb-4 flex min-h-24 w-full flex-col items-center rounded-md border bg-destructive p-2 font-[family-name:var(--font-geist-mono)] text-destructive-foreground">
        <h1 className="text-sm uppercase">AVISOS IMPORTANTES</h1>

        <p>Processo de Referencia #BR-KIOS254-6 atracou hoje! verifique</p>
        <p>
          Processo de Referencia #BR-PJDKN54-2 está dois dias atrasados!
          verifique
        </p>
        <p>Processo de Referencia #BR-KIOS254-7 ja pode montar DI!</p>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && 'selected'}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{' '}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}
