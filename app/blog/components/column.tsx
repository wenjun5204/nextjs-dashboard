'use client';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { isoStringToTimestamp } from '@/lib/utils';
import { CaretSortIcon } from '@radix-ui/react-icons';
import { ColumnDef } from '@tanstack/react-table';
import Link from 'next/link';

export type Department = {
  orgId: number;
  orgName: string;
  orgPath: null | string;
  orgNamePath: string;
};

export type Payment = {
  id: number;
  name: string;
  rdDepartment: string;
  qaDepartment: null | string;
  dutyQa: string;
  dutyRd: null | string;
  planType: number;
  processType: number;
  status: number;
  createBy: string;
  updateBy: null | string;
  createTime: number;
  updateTime: null | number;
  delFlag: number;
  projectOnlineTime: number;
  isStopAddProject: number;
  startBuildStageTime: null | number;
  endBuildStageTime: null | number;
  source: number;
  onlineProgramId: number;
  bgOrgId: number;
  createSystemSource: number;
  bizId: null | number;
  jointOnlineId: null | number;
  onlineType: number;
  canUpdateUsers?: string[];
  canDelivery: boolean;
  isGray: boolean;
  jobNum: number;
  rdDepartmentList?: Department[];
  qaDepartmentList?: null | Department[];
};

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
  //   {
  //     accessorKey: 'id',
  //     header: 'Id',
  //     cell: ({ row }) => <div className="capitalize">{row.getValue('id')}</div>,
  //   },
  {
    accessorKey: 'title',
    header: '名称',
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue('title')}</div>
    ),
  },
  {
    accessorKey: 'tags',
    header: 'tags',
    cell: ({ row }) => <div className="capitalize">{row.getValue('tags')}</div>,
  },
  {
    accessorKey: 'publish_date',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          创建时间
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="lowercase">
        {isoStringToTimestamp(row.getValue('publish_date'))}
      </div>
    ),
  },
  {
    id: 'actions',
    header: () => <div className="text-center">操作</div>,
    enableHiding: false,
    cell: ({ row }) => {
      // console.log(666, row.original, row)
      const payment = row.original;

      return (
        <div className="flex justify-center gap-2">
          <Link href={`/blog/${payment.id}/edit`}>
            <Button
              className="h-full w-20"
            //   onClick={() =>
            //     navigator.clipboard.writeText(payment.id.toString())
            //   }
            >
              编辑
            </Button>
          </Link>

          <Button
            className="h-full w-20"
            onClick={() => navigator.clipboard.writeText(payment.id.toString())}
          >
            复制
          </Button>
        </div>
      );
    },
  },
];
