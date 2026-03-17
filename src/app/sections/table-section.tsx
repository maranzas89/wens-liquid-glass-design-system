import React from 'react';
import { 
  Search, 
  ChevronDown, 
  ChevronUp, 
  ChevronLeft, 
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  Settings,
  Pin,
  PinOff,
  Eye,
  EyeOff,
  GripVertical,
  ArrowUpDown,
  Filter,
  Download,
  Table as TableIcon
} from 'lucide-react';
import { CodeBlock } from '../components/code-block';
import { sectionCodeSamples } from '../utils/section-code-samples';

interface TableData {
  id: number;
  name: string;
  email: string;
  role: string;
  department: string;
  status: 'Active' | 'Inactive' | 'Pending';
  joinDate: string;
  salary: number;
  location: string;
  projects: number;
}

interface Column {
  id: keyof TableData;
  label: string;
  sortable: boolean;
  visible: boolean;
  pinned: boolean;
  width?: string;
}

export function TableSection() {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [currentPage, setCurrentPage] = React.useState(1);
  const [itemsPerPage, setItemsPerPage] = React.useState(10);
  const [sortColumn, setSortColumn] = React.useState<keyof TableData | null>(null);
  const [sortDirection, setSortDirection] = React.useState<'asc' | 'desc'>('asc');
  const [expandedRows, setExpandedRows] = React.useState<Set<number>>(new Set());
  const [showColumnSettings, setShowColumnSettings] = React.useState(false);
  const [draggedColumn, setDraggedColumn] = React.useState<number | null>(null);

  const initialData: TableData[] = [
    { id: 1, name: 'John Smith', email: 'john.smith@company.com', role: 'Senior Developer', department: 'Engineering', status: 'Active', joinDate: '2020-01-15', salary: 95000, location: 'New York', projects: 12 },
    { id: 2, name: 'Sarah Johnson', email: 'sarah.j@company.com', role: 'Product Manager', department: 'Product', status: 'Active', joinDate: '2019-03-22', salary: 110000, location: 'San Francisco', projects: 8 },
    { id: 3, name: 'Mike Chen', email: 'mike.chen@company.com', role: 'UI/UX Designer', department: 'Design', status: 'Active', joinDate: '2021-06-10', salary: 85000, location: 'Los Angeles', projects: 15 },
    { id: 4, name: 'Emma Davis', email: 'emma.d@company.com', role: 'Data Analyst', department: 'Analytics', status: 'Pending', joinDate: '2023-11-01', salary: 75000, location: 'Chicago', projects: 3 },
    { id: 5, name: 'James Wilson', email: 'j.wilson@company.com', role: 'DevOps Engineer', department: 'Engineering', status: 'Active', joinDate: '2020-09-05', salary: 98000, location: 'Seattle', projects: 10 },
    { id: 6, name: 'Lisa Anderson', email: 'lisa.a@company.com', role: 'Marketing Manager', department: 'Marketing', status: 'Active', joinDate: '2018-12-15', salary: 88000, location: 'Boston', projects: 6 },
    { id: 7, name: 'Robert Brown', email: 'r.brown@company.com', role: 'QA Engineer', department: 'Engineering', status: 'Inactive', joinDate: '2022-02-20', salary: 72000, location: 'Austin', projects: 5 },
    { id: 8, name: 'Jennifer Lee', email: 'jennifer.lee@company.com', role: 'Sales Director', department: 'Sales', status: 'Active', joinDate: '2017-05-30', salary: 125000, location: 'New York', projects: 20 },
    { id: 9, name: 'David Martinez', email: 'd.martinez@company.com', role: 'Backend Developer', department: 'Engineering', status: 'Active', joinDate: '2021-08-12', salary: 92000, location: 'Miami', projects: 9 },
    { id: 10, name: 'Maria Garcia', email: 'maria.g@company.com', role: 'Content Writer', department: 'Marketing', status: 'Active', joinDate: '2022-04-18', salary: 65000, location: 'Denver', projects: 11 },
    { id: 11, name: 'Thomas White', email: 't.white@company.com', role: 'System Architect', department: 'Engineering', status: 'Active', joinDate: '2019-07-25', salary: 115000, location: 'San Francisco', projects: 7 },
    { id: 12, name: 'Amy Taylor', email: 'amy.taylor@company.com', role: 'HR Manager', department: 'HR', status: 'Active', joinDate: '2020-11-08', salary: 82000, location: 'Portland', projects: 4 },
    { id: 13, name: 'Kevin Moore', email: 'k.moore@company.com', role: 'Frontend Developer', department: 'Engineering', status: 'Pending', joinDate: '2023-09-14', salary: 88000, location: 'Seattle', projects: 2 },
    { id: 14, name: 'Rachel Adams', email: 'rachel.a@company.com', role: 'Graphic Designer', department: 'Design', status: 'Active', joinDate: '2021-01-20', salary: 78000, location: 'Los Angeles', projects: 13 },
    { id: 15, name: 'Chris Evans', email: 'c.evans@company.com', role: 'Business Analyst', department: 'Analytics', status: 'Active', joinDate: '2020-03-15', salary: 80000, location: 'Chicago', projects: 8 },
  ];

  const [data] = React.useState<TableData[]>(initialData);

  const [columns, setColumns] = React.useState<Column[]>([
    { id: 'id', label: 'ID', sortable: true, visible: true, pinned: true },
    { id: 'name', label: 'Name', sortable: true, visible: true, pinned: true },
    { id: 'email', label: 'Email', sortable: true, visible: true, pinned: false },
    { id: 'role', label: 'Role', sortable: true, visible: true, pinned: false },
    { id: 'department', label: 'Department', sortable: true, visible: true, pinned: false },
    { id: 'status', label: 'Status', sortable: true, visible: true, pinned: false },
    { id: 'joinDate', label: 'Join Date', sortable: true, visible: true, pinned: false },
    { id: 'salary', label: 'Salary', sortable: true, visible: true, pinned: false },
    { id: 'location', label: 'Location', sortable: true, visible: true, pinned: false },
    { id: 'projects', label: 'Projects', sortable: true, visible: true, pinned: false },
  ]);

  // Filter data based on search
  const filteredData = React.useMemo(() => {
    return data.filter(item =>
      Object.values(item).some(value =>
        value.toString().toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [data, searchTerm]);

  // Sort data
  const sortedData = React.useMemo(() => {
    if (!sortColumn) return filteredData;

    return [...filteredData].sort((a, b) => {
      const aValue = a[sortColumn];
      const bValue = b[sortColumn];

      if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1;
      if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1;
      return 0;
    });
  }, [filteredData, sortColumn, sortDirection]);

  // Paginate data
  const paginatedData = React.useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return sortedData.slice(startIndex, startIndex + itemsPerPage);
  }, [sortedData, currentPage, itemsPerPage]);

  const totalPages = Math.ceil(sortedData.length / itemsPerPage);

  const handleSort = (columnId: keyof TableData) => {
    if (sortColumn === columnId) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(columnId);
      setSortDirection('asc');
    }
  };

  const toggleRowExpansion = (id: number) => {
    const newExpanded = new Set(expandedRows);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedRows(newExpanded);
  };

  const toggleColumnVisibility = (columnId: keyof TableData) => {
    setColumns(columns.map(col =>
      col.id === columnId ? { ...col, visible: !col.visible } : col
    ));
  };

  const toggleColumnPin = (columnId: keyof TableData) => {
    setColumns(columns.map(col =>
      col.id === columnId ? { ...col, pinned: !col.pinned } : col
    ));
  };

  const handleDragStart = (index: number) => {
    setDraggedColumn(index);
  };

  const handleDragOver = (e: React.DragEvent, index: number) => {
    e.preventDefault();
    if (draggedColumn === null || draggedColumn === index) return;

    const newColumns = [...columns];
    const draggedItem = newColumns[draggedColumn];
    newColumns.splice(draggedColumn, 1);
    newColumns.splice(index, 0, draggedItem);
    setColumns(newColumns);
    setDraggedColumn(index);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-green-500/20 text-green-300 border-green-500/30';
      case 'Inactive': return 'bg-red-500/20 text-red-300 border-red-500/30';
      case 'Pending': return 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30';
      default: return 'bg-gray-500/20 text-gray-300 border-gray-500/30';
    }
  };

  const visibleColumns = columns.filter(col => col.visible);

  return (
    <div className="space-y-8">
      {/* Section Header */}
      <div className="text-center space-y-4">
        <h2 className="text-5xl font-bold text-white">Table</h2>
        <p className="text-xl text-white/70 max-w-2xl mx-auto">
          Advanced data table with search, sorting, pagination, column management, and row expansion
        </p>
      </div>

      {/* Advanced Table */}
      <div className="
        md:md:backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5
        border border-[var(--glass-border)]
        rounded-3xl
        overflow-hidden
        shadow-2xl
      ">
        {/* Table Toolbar */}
        <div className="p-4 border-b border-white/10 bg-white/5">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" size={20} />
              <input
                type="text"
                placeholder="Search across all columns..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
                className="
                  w-full pl-10 pr-4 py-2.5
                  bg-[var(--glass-bg-light)]
                  border border-[var(--glass-border)]
                  rounded-xl
                  text-white placeholder-white/40
                  focus:outline-none focus:border-blue-400/50
                  transition-colors
                "
              />
            </div>

            {/* Actions */}
            <div className="flex gap-2 w-full md:w-auto">
              {/* Column Settings */}
              <div className="relative">
                <button
                  onClick={() => setShowColumnSettings(!showColumnSettings)}
                  className="
                    px-4 py-2.5 rounded-xl
                    bg-[var(--glass-bg-light)] hover:bg-white/20
                    border border-[var(--glass-border)]
                    text-white
                    transition-colors
                    flex items-center gap-2
                  "
                >
                  <Settings size={18} />
                  <span className="hidden sm:inline">Columns</span>
                </button>

                {/* Column Settings Dropdown */}
                {showColumnSettings && (
                  <>
                    <div
                      className="fixed inset-0 z-40"
                      onClick={() => setShowColumnSettings(false)}
                    />
                    <div className="
                      absolute right-0 top-full mt-2 w-64
                      backdrop-blur-xl backdrop-saturate-150
                      bg-black/85
                      border border-white/15
                      rounded-2xl
                      shadow-[0_8px_32px_0_rgba(0,0,0,0.4)]
                      z-50
                      max-h-96
                      overflow-y-auto
                    ">
                      <div className="p-3 border-b border-[var(--glass-border)]">
                        <p className="text-sm font-bold text-white">Manage Columns</p>
                      </div>
                      <div className="p-2">
                        {columns.map((column) => (
                          <div
                            key={column.id}
                            className="
                              p-2 rounded-lg
                              hover:bg-white/15
                              transition-colors
                              flex items-center justify-between
                            "
                          >
                            <div className="flex items-center gap-2 flex-1">
                              <button
                                onClick={() => toggleColumnVisibility(column.id)}
                                className="flex items-center gap-2"
                              >
                                {column.visible ? (
                                  <Eye size={16} className="text-blue-400" />
                                ) : (
                                  <EyeOff size={16} className="text-white/40" />
                                )}
                                <span className={`text-sm ${column.visible ? 'text-white' : 'text-white/40'}`}>
                                  {column.label}
                                </span>
                              </button>
                            </div>
                            <button
                              onClick={() => toggleColumnPin(column.id)}
                              className="p-1 hover:bg-white/15 rounded"
                            >
                              {column.pinned ? (
                                <Pin size={14} className="text-blue-400" />
                              ) : (
                                <PinOff size={14} className="text-white/40" />
                              )}
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* Export */}
              <button className="
                px-4 py-2.5 rounded-xl
                bg-[var(--glass-bg-light)] hover:bg-white/20
                border border-[var(--glass-border)]
                text-white
                transition-colors
                flex items-center gap-2
              ">
                <Download size={18} />
                <span className="hidden sm:inline">Export</span>
              </button>
            </div>
          </div>

          {/* Rows per page */}
          <div className="flex items-center gap-4 mt-4 flex-wrap">
            <span className="text-white/70 text-sm">Rows per page:</span>
            {[10, 25, 50, 100].map((count) => (
              <button
                key={count}
                onClick={() => {
                  setItemsPerPage(count);
                  setCurrentPage(1);
                }}
                className={`
                  px-3 py-1 rounded-lg text-sm
                  transition-colors
                  ${itemsPerPage === count
                    ? 'bg-blue-500/30 text-blue-300 border border-blue-400/50'
                    : 'bg-[var(--glass-bg-light)] text-white/70 border border-[var(--glass-border)] hover:bg-white/20'
                  }
                `}
              >
                {count}
              </button>
            ))}
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-white/5 border-b border-white/10">
                {/* Expand Column */}
                <th className="px-4 py-3 text-left text-white/70 text-sm font-medium w-12">
                  <ChevronDown size={16} className="opacity-0" />
                </th>

                {/* Data Columns */}
                {visibleColumns.map((column, index) => (
                  <th
                    key={column.id}
                    draggable
                    onDragStart={() => handleDragStart(index)}
                    onDragOver={(e) => handleDragOver(e, index)}
                    onDragEnd={() => setDraggedColumn(null)}
                    className={`
                      px-4 py-3 text-left text-white/70 text-sm font-medium
                      group cursor-move
                      ${column.pinned ? 'bg-blue-500/10' : ''}
                    `}
                  >
                    <div className="flex items-center gap-2">
                      <GripVertical size={14} className="text-white/30 group-hover:text-white/60" />
                      {column.pinned && <Pin size={14} className="text-blue-400" />}
                      <span>{column.label}</span>
                      {column.sortable && (
                        <button
                          onClick={() => handleSort(column.id)}
                          className="hover:text-white transition-colors"
                        >
                          {sortColumn === column.id ? (
                            sortDirection === 'asc' ? (
                              <ChevronUp size={16} />
                            ) : (
                              <ChevronDown size={16} />
                            )
                          ) : (
                            <ArrowUpDown size={14} className="opacity-40" />
                          )}
                        </button>
                      )}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {paginatedData.flatMap((row) => {
                const isExpanded = expandedRows.has(row.id);
                const rows = [
                  <tr key={`row-${row.id}`} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    {/* Expand Button */}
                    <td className="px-4 py-3">
                      <button
                        onClick={() => toggleRowExpansion(row.id)}
                        className="text-white/70 hover:text-white transition-colors"
                      >
                        {isExpanded ? (
                          <ChevronDown size={16} />
                        ) : (
                          <ChevronRight size={16} />
                        )}
                      </button>
                    </td>

                    {/* Data Cells */}
                    {visibleColumns.map((column) => (
                      <td
                        key={column.id}
                        className={`
                          px-4 py-3 text-white/90 text-sm
                          ${column.pinned ? 'bg-blue-500/5' : ''}
                        `}
                      >
                        {column.id === 'status' ? (
                          <span className={`
                            px-2 py-1 rounded-lg text-xs
                            border md:backdrop-blur-sm
                            ${getStatusColor(row[column.id])}
                          `}>
                            {row[column.id]}
                          </span>
                        ) : column.id === 'salary' ? (
                          `$${row[column.id].toLocaleString()}`
                        ) : (
                          row[column.id]
                        )}
                      </td>
                    ))}
                  </tr>
                ];

                if (isExpanded) {
                  rows.push(
                    <tr key={`expanded-${row.id}`} className="bg-white/5">
                      <td colSpan={visibleColumns.length + 1} className="px-4 py-4">
                        <div className="
                          backdrop-blur-md bg-gradient-to-br from-white/10 to-white/5
                          border border-[var(--glass-border)]
                          rounded-xl
                          p-4
                        ">
                          <h4 className="text-white font-bold mb-3">Detailed Information</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            <div>
                              <p className="text-white/60 text-xs mb-1">Full Name</p>
                              <p className="text-white text-sm">{row.name}</p>
                            </div>
                            <div>
                              <p className="text-white/60 text-xs mb-1">Email Address</p>
                              <p className="text-white text-sm">{row.email}</p>
                            </div>
                            <div>
                              <p className="text-white/60 text-xs mb-1">Role & Department</p>
                              <p className="text-white text-sm">{row.role} - {row.department}</p>
                            </div>
                            <div>
                              <p className="text-white/60 text-xs mb-1">Location</p>
                              <p className="text-white text-sm">{row.location}</p>
                            </div>
                            <div>
                              <p className="text-white/60 text-xs mb-1">Join Date</p>
                              <p className="text-white text-sm">{row.joinDate}</p>
                            </div>
                            <div>
                              <p className="text-white/60 text-xs mb-1">Active Projects</p>
                              <p className="text-white text-sm">{row.projects} projects</p>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  );
                }

                return rows;
              })}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="p-4 border-t border-white/10 bg-white/5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Info */}
            <p className="text-white/70 text-sm">
              Showing {((currentPage - 1) * itemsPerPage) + 1} to {Math.min(currentPage * itemsPerPage, sortedData.length)} of {sortedData.length} results
            </p>

            {/* Pagination Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setCurrentPage(1)}
                disabled={currentPage === 1}
                className="
                  p-2 rounded-lg
                  bg-[var(--glass-bg-light)] hover:bg-white/20
                  border border-[var(--glass-border)]
                  text-white
                  disabled:opacity-30 disabled:cursor-not-allowed
                  transition-colors
                "
              >
                <ChevronsLeft size={18} />
              </button>
              <button
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="
                  p-2 rounded-lg
                  bg-[var(--glass-bg-light)] hover:bg-white/20
                  border border-[var(--glass-border)]
                  text-white
                  disabled:opacity-30 disabled:cursor-not-allowed
                  transition-colors
                "
              >
                <ChevronLeft size={18} />
              </button>

              {/* Page Numbers */}
              <div className="flex gap-1">
                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                  let pageNum;
                  if (totalPages <= 5) {
                    pageNum = i + 1;
                  } else if (currentPage <= 3) {
                    pageNum = i + 1;
                  } else if (currentPage >= totalPages - 2) {
                    pageNum = totalPages - 4 + i;
                  } else {
                    pageNum = currentPage - 2 + i;
                  }

                  return (
                    <button
                      key={pageNum}
                      onClick={() => setCurrentPage(pageNum)}
                      className={`
                        px-3 py-2 rounded-lg text-sm
                        transition-colors
                        ${currentPage === pageNum
                          ? 'bg-blue-500/30 text-blue-300 border border-blue-400/50'
                          : 'bg-[var(--glass-bg-light)] text-white/70 border border-[var(--glass-border)] hover:bg-white/20'
                        }
                      `}
                    >
                      {pageNum}
                    </button>
                  );
                })}
              </div>

              <button
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="
                  p-2 rounded-lg
                  bg-[var(--glass-bg-light)] hover:bg-white/20
                  border border-[var(--glass-border)]
                  text-white
                  disabled:opacity-30 disabled:cursor-not-allowed
                  transition-colors
                "
              >
                <ChevronRight size={18} />
              </button>
              <button
                onClick={() => setCurrentPage(totalPages)}
                disabled={currentPage === totalPages}
                className="
                  p-2 rounded-lg
                  bg-[var(--glass-bg-light)] hover:bg-white/20
                  border border-[var(--glass-border)]
                  text-white
                  disabled:opacity-30 disabled:cursor-not-allowed
                  transition-colors
                "
              >
                <ChevronsRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="
          p-6 rounded-2xl
          md:backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5
          border border-[var(--glass-border)]
        ">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-400/20 to-purple-500/20 flex items-center justify-center mb-4">
            <Search className="text-blue-300" size={24} />
          </div>
          <h3 className="text-white text-lg font-bold mb-2">Search & Filter</h3>
          <p className="text-white/60 text-sm">
            Real-time search across all columns with instant filtering
          </p>
        </div>

        <div className="
          p-6 rounded-2xl
          md:backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5
          border border-[var(--glass-border)]
        ">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-400/20 to-pink-500/20 flex items-center justify-center mb-4">
            <ArrowUpDown className="text-purple-300" size={24} />
          </div>
          <h3 className="text-white text-lg font-bold mb-2">Column Sorting</h3>
          <p className="text-white/60 text-sm">
            Sort by any column in ascending or descending order
          </p>
        </div>

        <div className="
          p-6 rounded-2xl
          md:backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5
          border border-[var(--glass-border)]
        ">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-400/20 to-red-500/20 flex items-center justify-center mb-4">
            <Settings className="text-pink-300" size={24} />
          </div>
          <h3 className="text-white text-lg font-bold mb-2">Column Management</h3>
          <p className="text-white/60 text-sm">
            Show/hide, pin, and drag columns to customize your view
          </p>
        </div>

        <div className="
          p-6 rounded-2xl
          md:backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5
          border border-[var(--glass-border)]
        ">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-400/20 to-blue-500/20 flex items-center justify-center mb-4">
            <ChevronDown className="text-green-300" size={24} />
          </div>
          <h3 className="text-white text-lg font-bold mb-2">Row Expansion</h3>
          <p className="text-white/60 text-sm">
            Expand rows to see detailed information in a clean layout
          </p>
        </div>
      </div>

      {/* Simple Table Example */}
      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-white text-center">Simple Table</h3>
        <div className="
          md:backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5
          border border-[var(--glass-border)]
          rounded-3xl
          overflow-hidden
          shadow-2xl
        ">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-white/5 border-b border-white/10">
                  <th className="px-4 py-3 text-left text-white/70 text-sm font-medium">Product</th>
                  <th className="px-4 py-3 text-left text-white/70 text-sm font-medium">Category</th>
                  <th className="px-4 py-3 text-left text-white/70 text-sm font-medium">Price</th>
                  <th className="px-4 py-3 text-left text-white/70 text-sm font-medium">Stock</th>
                  <th className="px-4 py-3 text-left text-white/70 text-sm font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { product: 'Laptop Pro 15"', category: 'Electronics', price: '$1,299', stock: 45, status: 'In Stock' },
                  { product: 'Wireless Mouse', category: 'Accessories', price: '$29', stock: 120, status: 'In Stock' },
                  { product: 'USB-C Cable', category: 'Accessories', price: '$15', stock: 0, status: 'Out of Stock' },
                  { product: 'Monitor 27"', category: 'Electronics', price: '$399', stock: 12, status: 'Low Stock' },
                  { product: 'Keyboard Mechanical', category: 'Accessories', price: '$89', stock: 67, status: 'In Stock' },
                ].map((item, i) => (
                  <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="px-4 py-3 text-white/90 text-sm">{item.product}</td>
                    <td className="px-4 py-3 text-white/90 text-sm">{item.category}</td>
                    <td className="px-4 py-3 text-white/90 text-sm font-medium">{item.price}</td>
                    <td className="px-4 py-3 text-white/90 text-sm">{item.stock}</td>
                    <td className="px-4 py-3">
                      <span className={`
                        px-2 py-1 rounded-lg text-xs border md:backdrop-blur-sm
                        ${item.status === 'In Stock' ? 'bg-green-500/20 text-green-300 border-green-500/30' : ''}
                        ${item.status === 'Out of Stock' ? 'bg-red-500/20 text-red-300 border-red-500/30' : ''}
                        ${item.status === 'Low Stock' ? 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30' : ''}
                      `}>
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Compact Table Example */}
      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-white text-center">Compact Table</h3>
        <div className="
          md:backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5
          border border-[var(--glass-border)]
          rounded-3xl
          overflow-hidden
          shadow-2xl
        ">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-white/5 border-b border-white/10">
                  <th className="px-3 py-2 text-left text-white/70 text-xs font-medium">Task</th>
                  <th className="px-3 py-2 text-left text-white/70 text-xs font-medium">Assignee</th>
                  <th className="px-3 py-2 text-left text-white/70 text-xs font-medium">Priority</th>
                  <th className="px-3 py-2 text-left text-white/70 text-xs font-medium">Due Date</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { task: 'Update documentation', assignee: 'John S.', priority: 'High', date: '2024-03-20' },
                  { task: 'Fix login bug', assignee: 'Sarah J.', priority: 'Critical', date: '2024-03-18' },
                  { task: 'Design new homepage', assignee: 'Mike C.', priority: 'Medium', date: '2024-03-25' },
                  { task: 'Code review', assignee: 'Emma D.', priority: 'Low', date: '2024-03-22' },
                  { task: 'Deploy to staging', assignee: 'James W.', priority: 'High', date: '2024-03-19' },
                ].map((item, i) => (
                  <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="px-3 py-2 text-white/90 text-xs">{item.task}</td>
                    <td className="px-3 py-2 text-white/90 text-xs">{item.assignee}</td>
                    <td className="px-3 py-2">
                      <span className={`
                        px-1.5 py-0.5 rounded text-xs border md:backdrop-blur-sm
                        ${item.priority === 'Critical' ? 'bg-red-500/20 text-red-300 border-red-500/30' : ''}
                        ${item.priority === 'High' ? 'bg-orange-500/20 text-orange-300 border-orange-500/30' : ''}
                        ${item.priority === 'Medium' ? 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30' : ''}
                        ${item.priority === 'Low' ? 'bg-green-500/20 text-green-300 border-green-500/30' : ''}
                      `}>
                        {item.priority}
                      </span>
                    </td>
                    <td className="px-3 py-2 text-white/90 text-xs">{item.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Code Block */}
      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-white text-center">Code Sample</h3>
        <CodeBlock code={sectionCodeSamples.tableSection} />
      </div>
    </div>
  );
}