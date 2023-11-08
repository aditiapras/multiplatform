"use client";
import {
  useReactTable,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  getPaginationRowModel,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "./button";
import { useState } from "react";

export default function DataTales({ data, columns }) {
  const [sorting, setSorting] = useState([]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),

    state: {
      sorting,
      //   globalFilter: filterData || filterGuestOf || invitationStatus,
    },
    onSortingChange: setSorting,
    // onGlobalFilterChange:
    //   setFilterData || setFilterGuestOf || setInvitationStatus,
  });
  return (
    <div className="flex flex-col gap-5 mt-8">
      <Table>
        <TableHeader className="bg-zinc-100 rounded-lg">
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead key={header.id} className="px-2 text-xs">
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows.map((row) => (
            <TableRow key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <TableCell key={cell.id} className="px-2 py-3">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <p className="text-zinc-500 text-xs">
        Showing: {table.getRowModel().rows.length} of {data.length}
      </p>
      {/* <div className="flex gap-2">
        <Button
          size="icon"
          className="text-2xl"
          variant="outline"
          onClick={() => table.setPageIndex(0)}
        >
          <BiFirstPage />
        </Button>
        <Button
          size="icon"
          className="text-sm"
          variant="outline"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Prev
        </Button>
        <Button
          size="icon"
          className="text-sm"
          variant="outline"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
        <Button
          size="icon"
          className="text-2xl"
          variant="outline"
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
        >
          <BiLastPage />
        </Button>
      </div> */}
    </div>
  );
}
