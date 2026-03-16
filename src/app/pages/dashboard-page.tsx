import React from 'react';
import { GlassDashboard } from '../components/glass-dashboard';
import { GlassGrid, GlassCol } from '../components/glass-grid';
import { GlassDashlet } from '../components/glass-dashlet';
import { GlassCard } from '../components/glass-card';
import { GlassBarChart, GlassLineChart, GlassPieChart } from '../components/glass-chart';
import { GlassPercentage } from '../components/glass-percentage';
import { GlassTable } from '../components/glass-table';
import { GlassBadge } from '../components/glass-badge';
import { GlassButton } from '../components/glass-button';
import { 
  Home, 
  Users, 
  Settings, 
  BarChart3, 
  ShoppingCart,
  Activity,
  DollarSign,
  TrendingUp,
  Package,
  Sparkles,
  FileText,
  Mail
} from 'lucide-react';

export function DashboardPage() {
  const sidebarItems = [
    { 
      label: 'Dashboard', 
      icon: <Home size={20} />,
      onClick: () => console.log('Dashboard')
    },
    { 
      label: 'Analytics', 
      icon: <BarChart3 size={20} />,
      badge: 'New',
      onClick: () => console.log('Analytics')
    },
    { 
      label: 'Users', 
      icon: <Users size={20} />,
      children: [
        { label: 'All Users', onClick: () => console.log('All Users') },
        { label: 'Add User', onClick: () => console.log('Add User') },
        { label: 'User Groups', onClick: () => console.log('Groups') }
      ]
    },
    { 
      label: 'Products', 
      icon: <Package size={20} />,
      onClick: () => console.log('Products')
    },
    { 
      label: 'Orders', 
      icon: <ShoppingCart size={20} />,
      badge: 12,
      onClick: () => console.log('Orders')
    },
    { 
      label: 'Settings', 
      icon: <Settings size={20} />,
      onClick: () => console.log('Settings')
    }
  ];

  const barChartData = [
    { label: 'Mon', value: 65 },
    { label: 'Tue', value: 78 },
    { label: 'Wed', value: 90 },
    { label: 'Thu', value: 81 },
    { label: 'Fri', value: 95 },
    { label: 'Sat', value: 72 },
    { label: 'Sun', value: 68 }
  ];

  const lineChartData = [
    { label: 'Jan', value: 4000 },
    { label: 'Feb', value: 3000 },
    { label: 'Mar', value: 5000 },
    { label: 'Apr', value: 4500 },
    { label: 'May', value: 6000 },
    { label: 'Jun', value: 5500 }
  ];

  const pieChartData = [
    { label: 'Direct', value: 4200, color: 'rgba(103, 126, 234, 0.7)' },
    { label: 'Organic', value: 3800, color: 'rgba(118, 75, 162, 0.7)' },
    { label: 'Social', value: 2100, color: 'rgba(79, 172, 254, 0.7)' },
    { label: 'Referral', value: 1900, color: 'rgba(67, 233, 123, 0.7)' }
  ];

  const tableColumns = [
    { key: 'product', header: 'Product', sortable: true },
    { key: 'sales', header: 'Sales', sortable: true },
    { key: 'revenue', header: 'Revenue', sortable: true },
    { 
      key: 'status', 
      header: 'Status',
      render: (value: string) => (
        <GlassBadge variant={value === 'In Stock' ? 'success' : 'warning'}>
          {value}
        </GlassBadge>
      )
    }
  ];

  const tableData = [
    { product: 'Premium Widget', sales: 245, revenue: '$12,250', status: 'In Stock' },
    { product: 'Deluxe Gadget', sales: 189, revenue: '$9,450', status: 'In Stock' },
    { product: 'Standard Tool', sales: 156, revenue: '$4,680', status: 'Low Stock' },
    { product: 'Basic Item', sales: 98, revenue: '$2,940', status: 'In Stock' }
  ];

  return (
    <GlassDashboard
      sidebarItems={sidebarItems}
      logo={
        <div className="flex items-center gap-2">
          <Sparkles className="text-white" size={28} />
          <span className="text-white text-xl font-bold">Liquid Glass</span>
        </div>
      }
      user={{
        name: 'John Doe',
        avatar: undefined
      }}
    >
      <div className="space-y-6">
        {/* Page Header */}
        <div>
          <h1 className="text-4xl text-white mb-2">Dashboard</h1>
          <p className="text-white/70">Welcome back! Here's what's happening today.</p>
        </div>

        {/* Stats Grid */}
        <GlassGrid cols={{ xs: 1, sm: 2, lg: 4 }} gap={6}>
          <GlassDashlet
            title="Total Revenue"
            value="$45,678"
            trend={{ value: 12.5, label: 'vs last month' }}
            icon={<DollarSign className="text-green-300" size={24} />}
            variant="success"
          />
          <GlassDashlet
            title="New Users"
            value="2,345"
            trend={{ value: 8.2, label: 'vs last month' }}
            icon={<Users className="text-blue-300" size={24} />}
            variant="primary"
          />
          <GlassDashlet
            title="Total Orders"
            value="1,234"
            trend={{ value: -3.1, label: 'vs last month' }}
            icon={<ShoppingCart className="text-purple-300" size={24} />}
            variant="warning"
          />
          <GlassDashlet
            title="Active Sessions"
            value="892"
            trend={{ value: 15.3, label: 'vs last hour' }}
            icon={<Activity className="text-cyan-300" size={24} />}
          />
        </GlassGrid>

        {/* Charts Section */}
        <GlassGrid cols={{ xs: 1, lg: 2 }} gap={6}>
          <GlassCard padding="lg">
            <h2 className="text-white text-xl mb-6">Weekly Sales</h2>
            <GlassBarChart data={barChartData} height={250} />
          </GlassCard>

          <GlassCard padding="lg">
            <h2 className="text-white text-xl mb-6">Revenue Trend</h2>
            <GlassLineChart data={lineChartData} height={250} smooth />
          </GlassCard>
        </GlassGrid>

        {/* Performance Metrics */}
        <GlassGrid cols={{ xs: 1, sm: 2, lg: 4 }} gap={6}>
          <GlassCard padding="lg" className="flex flex-col items-center">
            <GlassPercentage 
              value={85} 
              variant="circular" 
              size="md"
              label="Goal Completion"
            />
          </GlassCard>
          <GlassCard padding="lg" className="flex flex-col items-center">
            <GlassPercentage 
              value={72} 
              variant="circular" 
              size="md"
              label="Customer Satisfaction"
            />
          </GlassCard>
          <GlassCard padding="lg" className="flex flex-col items-center">
            <GlassPercentage 
              value={68} 
              variant="semi-circular" 
              size="md"
              label="Performance"
            />
          </GlassCard>
          <GlassCard padding="lg" className="flex flex-col items-center">
            <GlassPercentage 
              value={91} 
              variant="semi-circular" 
              size="md"
              label="Uptime"
            />
          </GlassCard>
        </GlassGrid>

        {/* Traffic Sources & Top Products */}
        <GlassGrid cols={{ xs: 1, lg: 2 }} gap={6}>
          <GlassCard padding="lg">
            <h2 className="text-white text-xl mb-6">Traffic Sources</h2>
            <GlassPieChart data={pieChartData} size={280} donut />
          </GlassCard>

          <GlassCard padding="lg">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-white text-xl">Top Products</h2>
              <GlassButton variant="ghost" size="sm">View All</GlassButton>
            </div>
            <GlassTable
              columns={tableColumns}
              data={tableData}
              hoverable
            />
          </GlassCard>
        </GlassGrid>

        {/* Recent Activity */}
        <GlassCard padding="lg">
          <h2 className="text-white text-xl mb-6">Recent Activity</h2>
          <div className="space-y-4">
            {[
              { icon: <FileText size={20} />, text: 'New order #1234 created', time: '2 minutes ago', color: 'text-blue-300' },
              { icon: <Users size={20} />, text: '3 new users registered', time: '15 minutes ago', color: 'text-green-300' },
              { icon: <Mail size={20} />, text: 'Newsletter sent to 1,234 subscribers', time: '1 hour ago', color: 'text-purple-300' },
              { icon: <TrendingUp size={20} />, text: 'Revenue increased by 12%', time: '2 hours ago', color: 'text-cyan-300' }
            ].map((activity, index) => (
              <div key={index} className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors">
                <div className={`p-2 rounded-xl bg-white/10 ${activity.color}`}>
                  {activity.icon}
                </div>
                <div className="flex-1">
                  <p className="text-white">{activity.text}</p>
                  <p className="text-white/60 text-sm">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>
    </GlassDashboard>
  );
}
