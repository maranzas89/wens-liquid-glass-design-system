import React from 'react';
import { ArrowUpDown, ArrowUp, ArrowDown } from 'lucide-react';

interface Column {
  key: string;
  header: string;
  sortable?: boolean;
  render?: (value: any, row: any) => React.ReactNode;
}

interface GlassTableProps {
  columns: Column[];
  data: any[];
  className?: string;
  striped?: boolean;
  hoverable?: boolean;
}

export function GlassTable({ 
  columns, 
  data, 
  className = '',
  striped = false,
  hoverable = true 
}: GlassTableProps) {
  const [sortConfig, setSortConfig] = React.useState<{
    key: string;
    direction: 'asc' | 'desc';
  } | null>(null);

  const sortedData = React.useMemo(() => {
    if (!sortConfig) return data;

    return [...data].sort((a, b) => {
      const aValue = a[sortConfig.key];
      const bValue = b[sortConfig.key];

      if (aValue < bValue) {
        return sortConfig.direction === 'asc' ? -1 : 1;
      }
      if (aValue > bValue) {
        return sortConfig.direction === 'asc' ? 1 : -1;
      }
      return 0;
    });
  }, [data, sortConfig]);

  const handleSort = (key: string) => {
    setSortConfig((current) => {
      if (!current || current.key !== key) {
        return { key, direction: 'asc' };
      }
      if (current.direction === 'asc') {
        return { key, direction: 'desc' };
      }
      return null;
    });
  };

  const getSortIcon = (key: string) => {
    if (!sortConfig || sortConfig.key !== key) {
      return <ArrowUpDown size={16} className="text-white/40" />;
    }
    return sortConfig.direction === 'asc' ? (
      <ArrowUp size={16} className="text-white" />
    ) : (
      <ArrowDown size={16} className="text-white" />
    );
  };

  return (
    <div className={`
      backdrop-blur-md backdrop-saturate-150
      bg-white/10
      border border-white/20
      rounded-3xl
      overflow-hidden
      ${className}
    `}>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/20">
              {columns.map((column) => (
                <th
                  key={column.key}
                  className="px-6 py-4 text-left text-white"
                >
                  {column.sortable ? (
                    <button
                      onClick={() => handleSort(column.key)}
                      className="
                        flex items-center gap-2
                        hover:text-white/80
                        transition-colors duration-200
                      "
                    >
                      {column.header}
                      {getSortIcon(column.key)}
                    </button>
                  ) : (
                    column.header
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sortedData.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className={`
                  border-b border-white/10 last:border-0
                  ${striped && rowIndex % 2 === 1 ? 'bg-white/5' : ''}
                  ${hoverable ? 'hover:bg-white/10' : ''}
                  transition-colors duration-200
                `}
              >
                {columns.map((column) => (
                  <td key={column.key} className="px-6 py-4 text-white/80">
                    {column.render
                      ? column.render(row[column.key], row)
                      : row[column.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
