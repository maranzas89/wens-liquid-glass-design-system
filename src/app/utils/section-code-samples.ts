// 每个 Section 的代码示例
// 这些是完整的、可直接复用的代码实现

export const sectionCodeSamples = {
  buttonSection: `// Glass Button Component - 完整实现
// 复制这段代码到你的项目即可使用

import React from 'react';

interface GlassButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'success' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export function GlassButton({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className = '',
  ...props 
}: GlassButtonProps) {
  const baseStyles = \`
    backdrop-blur-xl
    border border-white/20
    rounded-xl
    font-medium
    transition-all duration-300
    hover:scale-105 hover:shadow-xl
    active:scale-95
    disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
  \`;

  const variants = {
    primary: 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white hover:from-blue-500/30 hover:to-purple-500/30',
    secondary: 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-white hover:from-purple-500/30 hover:to-pink-500/30',
    accent: 'bg-gradient-to-r from-pink-500/20 to-rose-500/20 text-white hover:from-pink-500/30 hover:to-rose-500/30',
    success: 'bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-white hover:from-green-500/30 hover:to-emerald-500/30',
    ghost: 'bg-white/5 text-white hover:bg-white/10',
    danger: 'bg-gradient-to-r from-red-500/20 to-rose-500/20 text-white hover:from-red-500/30 hover:to-rose-500/30',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  return (
    <button
      className={\`\${baseStyles} \${variants[variant]} \${sizes[size]} \${className}\`}
      {...props}
    >
      {children}
    </button>
  );
}

// 使用示例：
<GlassButton variant="primary">Primary</GlassButton>
<GlassButton variant="secondary" size="lg">Large Secondary</GlassButton>
<GlassButton variant="success" disabled>Disabled</GlassButton>

// 或者直接使用 HTML + Tailwind（无需组件）：
<button className="
  px-4 py-2
  backdrop-blur-xl
  bg-gradient-to-r from-blue-500/20 to-purple-500/20
  border border-white/20
  rounded-xl
  text-white font-medium
  hover:from-blue-500/30 hover:to-purple-500/30
  hover:scale-105 hover:shadow-xl
  active:scale-95
  transition-all duration-300
">
  Primary Button
</button>`,

  calendarSection: `// Calendar Component - 完整实现
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function GlassCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate();

  const firstDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  ).getDay();

  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];

  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const previousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
  };

  return (
    <div className="
      backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5
      border border-white/20
      rounded-3xl p-6
      max-w-md
    ">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-white text-xl font-bold">
          {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
        </h3>
        <div className="flex gap-2">
          <button
            onClick={previousMonth}
            className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextMonth}
            className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Day Labels */}
      <div className="grid grid-cols-7 gap-2 mb-2">
        {days.map(day => (
          <div key={day} className="text-center text-white/60 text-sm font-medium">
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-2">
        {Array.from({ length: firstDayOfMonth }).map((_, i) => (
          <div key={\`empty-\${i}\`} />
        ))}
        {Array.from({ length: daysInMonth }).map((_, i) => {
          const day = i + 1;
          const isSelected = 
            selectedDate.getDate() === day &&
            selectedDate.getMonth() === currentDate.getMonth() &&
            selectedDate.getFullYear() === currentDate.getFullYear();
          
          return (
            <button
              key={day}
              onClick={() => setSelectedDate(new Date(currentDate.getFullYear(), currentDate.getMonth(), day))}
              className={\`
                aspect-square rounded-lg
                text-white text-sm
                transition-all
                \${isSelected
                  ? 'bg-blue-500 font-bold'
                  : 'bg-white/5 hover:bg-white/10'
                }
              \`}
            >
              {day}
            </button>
          );
        })}
      </div>
    </div>
  );
}`,

  cardsSection: `// Glass Card Component - 完整实现
// 复制这段代码到你的项目即可使用

import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  padding?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function GlassCard({ children, padding = 'md', className = '' }: GlassCardProps) {
  const paddingStyles = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  return (
    <div className={\`
      backdrop-blur-xl 
      bg-gradient-to-br from-white/10 to-white/5
      border border-white/20
      rounded-3xl
      shadow-2xl
      \${paddingStyles[padding]}
      \${className}
    \`}>
      {children}
    </div>
  );
}

// 使用示例：
<GlassCard>
  <h3 className="text-white text-xl font-bold mb-2">Card Title</h3>
  <p className="text-white/70">Card content goes here</p>
</GlassCard>

// 或者直接使用 HTML + Tailwind：
<div className="backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-3xl p-6 shadow-2xl">
  <h3 className="text-white text-xl font-bold mb-2">Card Title</h3>
  <p className="text-white/70">Card content goes here</p>
</div>

// 不同尺寸的卡片：
<GlassCard padding="sm">Small Card</GlassCard>
<GlassCard padding="md">Medium Card</GlassCard>
<GlassCard padding="lg">Large Card</GlassCard>`,

  chatSection: `// Chat Component - 完整实现
import React, { useState } from 'react';
import { Send } from 'lucide-react';

export function GlassChat() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    { id: 1, user: 'John Doe', avatar: 'JD', content: 'Hey, how are you?', time: '10:30 AM', isOwn: false },
    { id: 2, user: 'You', avatar: 'ME', content: 'I am good, thanks!', time: '10:32 AM', isOwn: true },
  ]);

  const sendMessage = () => {
    if (!message.trim()) return;
    setMessages([...messages, {
      id: messages.length + 1,
      user: 'You',
      avatar: 'ME',
      content: message,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isOwn: true
    }]);
    setMessage('');
  };

  return (
    <div className="
      backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5
      border border-white/20
      rounded-3xl
      h-[600px]
      flex flex-col
    ">
      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {messages.map((msg) => (
          <div key={msg.id} className={\`flex gap-3 \${msg.isOwn ? 'flex-row-reverse' : ''}\`}>
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400/20 to-purple-500/20 flex items-center justify-center flex-shrink-0">
              <span className="text-white text-sm font-bold">{msg.avatar}</span>
            </div>
            <div className={\`flex-1 max-w-md \${msg.isOwn ? 'items-end' : ''}\`}>
              <div className={\`
                backdrop-blur-xl border border-white/20 rounded-2xl p-4
                \${msg.isOwn 
                  ? 'bg-gradient-to-br from-blue-500/20 to-purple-500/20' 
                  : 'bg-gradient-to-br from-white/10 to-white/5'
                }
              \`}>
                <p className="text-white/90">{msg.content}</p>
              </div>
              <p className="text-white/40 text-xs mt-1">{msg.time}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="p-4 border-t border-white/10">
        <div className="flex gap-2">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
            placeholder="Type a message..."
            className="
              flex-1 px-4 py-2.5
              bg-white/10
              border border-white/20
              rounded-xl
              text-white placeholder-white/40
              focus:outline-none focus:border-blue-400/50
            "
          />
          <button
            onClick={sendMessage}
            className="
              px-4 py-2.5 rounded-xl
              bg-blue-500 hover:bg-blue-600
              text-white
              transition-colors
            "
          >
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}`,

  chartsSection: `// Charts with Recharts - 完整实现
// 需要安装：npm install recharts

import React from 'react';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// 数据示例
const barData = [
  { name: 'Jan', sales: 4000, profit: 2400 },
  { name: 'Feb', sales: 3000, profit: 1398 },
  { name: 'Mar', sales: 2000, profit: 9800 },
  { name: 'Apr', sales: 2780, profit: 3908 },
  { name: 'May', sales: 1890, profit: 4800 },
  { name: 'Jun', sales: 2390, profit: 3800 },
];

const pieData = [
  { name: 'Product A', value: 400 },
  { name: 'Product B', value: 300 },
  { name: 'Product C', value: 300 },
  { name: 'Product D', value: 200 },
];

const COLORS = ['#667eea', '#764ba2', '#f093fb', '#4facfe'];

// Bar Chart
export function GlassBarChart() {
  return (
    <div className="backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-3xl p-6">
      <h3 className="text-white text-xl font-bold mb-4">Sales Overview</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={barData}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
          <XAxis dataKey="name" stroke="rgba(255,255,255,0.6)" />
          <YAxis stroke="rgba(255,255,255,0.6)" />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'rgba(0,0,0,0.8)', 
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: '12px',
              backdropFilter: 'blur(12px)'
            }}
          />
          <Legend />
          <Bar dataKey="sales" fill="#667eea" radius={[8, 8, 0, 0]} />
          <Bar dataKey="profit" fill="#f093fb" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

// Pie Chart
export function GlassPieChart() {
  return (
    <div className="backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-3xl p-6">
      <h3 className="text-white text-xl font-bold mb-4">Product Distribution</h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={pieData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, percent }) => \`\${name}: \${(percent * 100).toFixed(0)}%\`}
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
          >
            {pieData.map((entry, index) => (
              <Cell key={\`cell-\${index}\`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}`,

  checkboxRadioSection: `// Liquid Glass Checkbox & Radio Components - 完整实现
// 复制这段代码到你的项目即可使用
// 依赖: lucide-react (用于 Check 图标), Tailwind CSS

import React, { useState } from 'react';
import { Check } from 'lucide-react';

// ============================================
// GlassCheckbox 组件 - 液态玻璃风格复选框
// ============================================
interface GlassCheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  description?: string;
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  className?: string;
}

export function GlassCheckbox({
  checked,
  onChange,
  label,
  description,
  size = 'md',
  disabled = false,
  className = ''
}: GlassCheckboxProps) {
  const sizes = {
    sm: { box: 'w-4 h-4', icon: 14, text: 'text-sm', description: 'text-xs' },
    md: { box: 'w-5 h-5', icon: 16, text: 'text-base', description: 'text-sm' },
    lg: { box: 'w-6 h-6', icon: 18, text: 'text-lg', description: 'text-base' }
  };

  const s = sizes[size];

  return (
    <label
      className={\`
        flex items-start gap-3
        \${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        \${className}
      \`}
    >
      <div className="relative flex items-center justify-center pt-0.5">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => !disabled && onChange(e.target.checked)}
          disabled={disabled}
          className="sr-only"
        />
        <div
          className={\`
            \${s.box}
            rounded-md
            backdrop-blur-md
            border-2
            transition-all duration-300
            flex items-center justify-center
            \${checked
              ? 'bg-gradient-to-br from-blue-400/80 to-blue-600/80 border-blue-400/50 shadow-lg shadow-blue-500/50'
              : 'bg-white/10 border-white/30 hover:border-white/50'
            }
            \${!disabled && 'hover:scale-110'}
          \`}
        >
          {checked && (
            <Check
              size={s.icon}
              className="text-white"
              strokeWidth={3}
            />
          )}
        </div>
      </div>
      
      {(label || description) && (
        <div className="flex-1">
          {label && (
            <div className={\`text-white font-medium \${s.text}\`}>
              {label}
            </div>
          )}
          {description && (
            <div className={\`text-white/60 \${s.description} mt-1\`}>
              {description}
            </div>
          )}
        </div>
      )}
    </label>
  );
}

// ============================================
// GlassRadio 组件 - 液态玻璃风格单选按钮
// ============================================
interface GlassRadioProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  description?: string;
  name: string;
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  className?: string;
}

export function GlassRadio({
  checked,
  onChange,
  label,
  description,
  name,
  size = 'md',
  disabled = false,
  className = ''
}: GlassRadioProps) {
  const sizes = {
    sm: { outer: 'w-4 h-4', inner: 'w-2 h-2', text: 'text-sm', description: 'text-xs' },
    md: { outer: 'w-5 h-5', inner: 'w-2.5 h-2.5', text: 'text-base', description: 'text-sm' },
    lg: { outer: 'w-6 h-6', inner: 'w-3 h-3', text: 'text-lg', description: 'text-base' }
  };

  const s = sizes[size];

  return (
    <label
      className={\`
        flex items-start gap-3
        \${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        \${className}
      \`}
    >
      <div className="relative flex items-center justify-center pt-0.5">
        <input
          type="radio"
          name={name}
          checked={checked}
          onChange={(e) => !disabled && onChange(e.target.checked)}
          disabled={disabled}
          className="sr-only"
        />
        <div
          className={\`
            \${s.outer}
            rounded-full
            backdrop-blur-md
            border-2
            transition-all duration-300
            flex items-center justify-center
            \${checked
              ? 'bg-gradient-to-br from-purple-400/20 to-purple-600/20 border-purple-400/50 shadow-lg shadow-purple-500/50'
              : 'bg-white/10 border-white/30 hover:border-white/50'
            }
            \${!disabled && 'hover:scale-110'}
          \`}
        >
          {checked && (
            <div
              className={\`
                \${s.inner}
                rounded-full
                bg-gradient-to-br from-purple-400 to-purple-600
                shadow-lg
              \`}
            />
          )}
        </div>
      </div>
      
      {(label || description) && (
        <div className="flex-1">
          {label && (
            <div className={\`text-white font-medium \${s.text}\`}>
              {label}
            </div>
          )}
          {description && (
            <div className={\`text-white/60 \${s.description} mt-1\`}>
              {description}
            </div>
          )}
        </div>
      )}
    </label>
  );
}

// ============================================
// GlassRadioGroup 组件 - 单选按钮组
// ============================================
interface RadioOption {
  label: string;
  value: string;
  description?: string;
}

interface GlassRadioGroupProps {
  options: RadioOption[];
  value: string;
  onChange: (value: string) => void;
  name: string;
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  className?: string;
}

export function GlassRadioGroup({
  options,
  value,
  onChange,
  name,
  size = 'md',
  disabled = false,
  className = ''
}: GlassRadioGroupProps) {
  return (
    <div className={\`space-y-3 \${className}\`}>
      {options.map((option) => (
        <GlassRadio
          key={option.value}
          checked={value === option.value}
          onChange={() => onChange(option.value)}
          label={option.label}
          description={option.description}
          name={name}
          size={size}
          disabled={disabled}
        />
      ))}
    </div>
  );
}

// ============================================
// 使用示例
// ============================================
function CheckboxRadioExample() {
  const [agree, setAgree] = useState(false);
  const [notifications, setNotifications] = useState({
    email: true,
    sms: false,
    push: true
  });
  const [selectedPlan, setSelectedPlan] = useState('pro');

  return (
    <div className="space-y-8 p-6">
      {/* 单个 Checkbox */}
      <GlassCheckbox
        checked={agree}
        onChange={setAgree}
        label="I agree to the terms"
        size="md"
      />

      {/* 带描述的 Checkbox 组 */}
      <div className="space-y-4">
        <GlassCheckbox
          checked={notifications.email}
          onChange={(checked) => setNotifications({ ...notifications, email: checked })}
          label="Email notifications"
          description="Get updates about your account activity"
        />
        <GlassCheckbox
          checked={notifications.sms}
          onChange={(checked) => setNotifications({ ...notifications, sms: checked })}
          label="SMS notifications"
          description="Receive text messages for important updates"
        />
        <GlassCheckbox
          checked={notifications.push}
          onChange={(checked) => setNotifications({ ...notifications, push: checked })}
          label="Push notifications"
          description="Get push notifications on your devices"
        />
      </div>

      {/* 不同尺寸的 Checkbox */}
      <div className="flex items-center gap-8">
        <GlassCheckbox checked={true} onChange={() => {}} label="Small" size="sm" />
        <GlassCheckbox checked={true} onChange={() => {}} label="Medium" size="md" />
        <GlassCheckbox checked={true} onChange={() => {}} label="Large" size="lg" />
      </div>

      {/* Radio 按钮组 */}
      <GlassRadioGroup
        options={[
          { value: 'basic', label: 'Basic Plan', description: '$9/mo - 10 Projects' },
          { value: 'pro', label: 'Pro Plan', description: '$29/mo - 100 Projects' },
          { value: 'enterprise', label: 'Enterprise', description: '$99/mo - Unlimited' }
        ]}
        value={selectedPlan}
        onChange={setSelectedPlan}
        name="pricing"
        size="md"
      />

      {/* Disabled 状态 */}
      <div className="space-y-3">
        <GlassCheckbox checked={true} onChange={() => {}} label="Disabled checked" disabled />
        <GlassRadio checked={true} onChange={() => {}} label="Disabled selected" name="disabled-demo" disabled />
      </div>
    </div>
  );
}`,

  colorSection: `// Color Palette Component - 完整实现
import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface Color {
  name: string;
  value: string;
  category: string;
}

const colors: Color[] = [
  { name: 'Primary Blue', value: '#667eea', category: 'Primary' },
  { name: 'Primary Purple', value: '#764ba2', category: 'Primary' },
  { name: 'Accent Pink', value: '#f093fb', category: 'Accent' },
  { name: 'Accent Rose', value: '#fa709a', category: 'Accent' },
  { name: 'Success Green', value: '#10b981', category: 'Status' },
  { name: 'Warning Yellow', value: '#f59e0b', category: 'Status' },
  { name: 'Error Red', value: '#ef4444', category: 'Status' },
  { name: 'Info Cyan', value: '#06b6d4', category: 'Status' },
];

export function GlassColorPalette() {
  const [copiedColor, setCopiedColor] = useState<string | null>(null);

  const copyColor = async (color: string) => {
    await navigator.clipboard.writeText(color);
    setCopiedColor(color);
    setTimeout(() => setCopiedColor(null), 2000);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {colors.map((color) => (
        <div
          key={color.value}
          className="
            backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5
            border border-white/20
            rounded-2xl p-4
            hover:scale-105 transition-transform
            cursor-pointer
          "
          onClick={() => copyColor(color.value)}
        >
          <div
            className="w-full h-24 rounded-xl mb-3 shadow-lg"
            style={{ backgroundColor: color.value }}
          />
          <h4 className="text-white font-bold mb-1">{color.name}</h4>
          <div className="flex items-center justify-between">
            <p className="text-white/60 text-sm font-mono">{color.value}</p>
            {copiedColor === color.value ? (
              <Check size={16} className="text-green-400" />
            ) : (
              <Copy size={16} className="text-white/40" />
            )}
          </div>
          <span className="inline-block mt-2 px-2 py-1 bg-white/10 rounded text-white/70 text-xs">
            {color.category}
          </span>
        </div>
      ))}
    </div>
  );
}`,

  dataSection: `import React from 'react';

// Data Table
<table className="w-full">
  <thead>
    <tr className="bg-white/5 border-b border-white/10">
      <th className="px-4 py-3 text-left text-white/70">Column 1</th>
      <th className="px-4 py-3 text-left text-white/70">Column 2</th>
    </tr>
  </thead>
  <tbody>
    <tr className="border-b border-white/5 hover:bg-white/5">
      <td className="px-4 py-3 text-white/90">Data 1</td>
      <td className="px-4 py-3 text-white/90">Data 2</td>
    </tr>
  </tbody>
</table>`,

  feedbackSection: `import React from 'react';
import { useState } from 'react';
import { Star } from 'lucide-react';

// Star Rating
const [rating, setRating] = useState(0);

<div className="flex gap-1">
  {[1, 2, 3, 4, 5].map((star) => (
    <button
      key={star}
      onClick={() => setRating(star)}
      className="text-yellow-400 hover:scale-110 transition-transform"
    >
      <Star size={24} fill={star <= rating ? 'currentColor' : 'none'} />
    </button>
  ))}
</div>`,

  fontsSection: `import React from 'react';

// Typography Examples
<h1 className="text-5xl text-white font-bold">Heading 1</h1>
<h2 className="text-4xl text-white font-bold">Heading 2</h2>
<h3 className="text-3xl text-white font-bold">Heading 3</h3>
<p className="text-white/90">Body text paragraph</p>
<p className="text-white/70 text-sm">Small text</p>
<p className="text-white/60 text-xs">Extra small text</p>`,

  formsSection: `import React from 'react';
import { useState } from 'react';

// Input Field
const [value, setValue] = useState('');

<input
  type="text"
  value={value}
  onChange={(e) => setValue(e.target.value)}
  placeholder="Enter text"
  className="
    w-full px-4 py-2.5
    bg-white/10
    border border-white/20
    rounded-xl
    text-white placeholder-white/40
    focus:outline-none focus:border-blue-400/50
  "
/>

// Textarea
<textarea
  className="
    w-full px-4 py-2.5
    bg-white/10
    border border-white/20
    rounded-xl
    text-white placeholder-white/40
    focus:outline-none focus:border-blue-400/50
    resize-none
  "
  rows={4}
  placeholder="Enter description"
/>`,

  gridSection: `import React from 'react';

// Grid Layout
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <div className="backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-2xl p-6">
    <h3 className="text-white text-lg font-bold mb-2">Grid Item 1</h3>
    <p className="text-white/70">Content</p>
  </div>
  <div className="backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-2xl p-6">
    <h3 className="text-white text-lg font-bold mb-2">Grid Item 2</h3>
    <p className="text-white/70">Content</p>
  </div>
  <div className="backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-2xl p-6">
    <h3 className="text-white text-lg font-bold mb-2">Grid Item 3</h3>
    <p className="text-white/70">Content</p>
  </div>
</div>`,

  iconsSection: `import React from 'react';
import { Home, Search, Settings, User, Heart, Star, Bell, Mail } from 'lucide-react';

// Icon Usage
<div className="flex gap-4">
  <Home className="text-white" size={24} />
  <Search className="text-white" size={24} />
  <Settings className="text-white" size={24} />
  <User className="text-white" size={24} />
  <Heart className="text-white" size={24} />
  <Star className="text-white" size={24} />
  <Bell className="text-white" size={24} />
  <Mail className="text-white" size={24} />
</div>

// Icon with Background
<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-400/20 to-purple-500/20 flex items-center justify-center">
  <Heart className="text-blue-300" size={24} />
</div>`,

  layoutSection: `import React from 'react';

// Section Layout
<section className="py-12 px-8">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-4xl text-white font-bold mb-8">Section Title</h2>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-3xl p-8">
        Content
      </div>
      <div className="backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-3xl p-8">
        Content
      </div>
    </div>
  </div>
</section>`,

  desktopLayout: `// Desktop Layout - 桌面端布局组件
// 适用于 1024px 以上屏幕，左侧导航 + 右侧内容区域

import React from 'react';

interface DesktopLayoutProps {
  sidebar?: React.ReactNode;
  children: React.ReactNode;
}

export function DesktopLayout({ sidebar, children }: DesktopLayoutProps) {
  return (
    <div className="min-h-screen flex">
      {/* 左侧固定导航 */}
      <aside className="
        w-64 fixed top-0 left-0 h-screen
        backdrop-blur-xl bg-white/5
        border-r border-white/10
        p-6 flex flex-col gap-4
        overflow-y-auto
      ">
        {sidebar || (
          <>
            <div className="h-10 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl" />
            <nav className="flex-1 space-y-2 mt-6">
              {['Dashboard', 'Analytics', 'Projects', 'Settings'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="
                    block px-4 py-3 rounded-xl
                    text-white/70 hover:text-white
                    hover:bg-white/10
                    backdrop-blur-md
                    transition-all duration-200
                  "
                >
                  {item}
                </a>
              ))}
            </nav>
          </>
        )}
      </aside>

      {/* 右侧主内容区域 */}
      <main className="flex-1 ml-64 p-8">
        <div className="max-w-7xl mx-auto">
          {/* 顶部导航栏 */}
          <header className="
            mb-8 p-4 rounded-2xl
            backdrop-blur-xl bg-white/5
            border border-white/10
          ">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl text-white font-bold">Dashboard</h1>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-500" />
              </div>
            </div>
          </header>

          {/* 内容区域 */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {children || (
              <>
                <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6">
                  <h3 className="text-white font-bold mb-2">Card 1</h3>
                  <p className="text-white/60">Content area</p>
                </div>
                <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6">
                  <h3 className="text-white font-bold mb-2">Card 2</h3>
                  <p className="text-white/60">Content area</p>
                </div>
                <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6">
                  <h3 className="text-white font-bold mb-2">Card 3</h3>
                  <p className="text-white/60">Content area</p>
                </div>
              </>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}`,

  tabletLayout: `// Tablet Layout - 平板端响应式布局
// 适用于 768px - 1024px 屏幕，可折叠侧栏 + 自适应网格

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface TabletLayoutProps {
  children: React.ReactNode;
}

export function TabletLayout({ children }: TabletLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen relative">
      {/* 可折叠侧栏 */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <aside className={\`
        fixed top-0 left-0 h-screen w-72 z-50
        backdrop-blur-xl bg-white/10
        border-r border-white/20
        p-6 flex flex-col
        transition-transform duration-300
        \${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      \`}>
        <button
          onClick={() => setSidebarOpen(false)}
          className="self-end p-2 text-white/70 hover:text-white"
        >
          <X size={24} />
        </button>
        <nav className="flex-1 space-y-2 mt-4">
          {['Home', 'Browse', 'Library', 'Profile'].map((item) => (
            <a
              key={item}
              href="#"
              className="
                block px-4 py-3 rounded-xl
                text-white/70 hover:text-white
                hover:bg-white/10
                transition-all duration-200
              "
            >
              {item}
            </a>
          ))}
        </nav>
      </aside>

      {/* 主内容 */}
      <main className="p-6">
        <header className="
          flex items-center gap-4 mb-6 p-4 rounded-2xl
          backdrop-blur-xl bg-white/5 border border-white/10
        ">
          <button
            onClick={() => setSidebarOpen(true)}
            className="p-2 text-white/70 hover:text-white rounded-xl hover:bg-white/10"
          >
            <Menu size={24} />
          </button>
          <h1 className="text-xl text-white font-bold">Tablet View</h1>
        </header>

        {/* 自适应双列网格 */}
        <div className="grid grid-cols-2 gap-4">
          {children || (
            <>
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6"
                >
                  <h3 className="text-white font-bold mb-2">Card {i}</h3>
                  <p className="text-white/60 text-sm">Responsive content</p>
                </div>
              ))}
            </>
          )}
        </div>
      </main>
    </div>
  );
}`,

  mobileLayout: `// Mobile Layout - 移动端布局组件
// 适用于 768px 以下屏幕，底部标签栏 + 单列内容

import React, { useState } from 'react';
import { Home, Search, Bell, User } from 'lucide-react';

interface MobileLayoutProps {
  children: React.ReactNode;
}

export function MobileLayout({ children }: MobileLayoutProps) {
  const [activeTab, setActiveTab] = useState('home');

  const tabs = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'search', label: 'Search', icon: Search },
    { id: 'notifications', label: 'Alerts', icon: Bell },
    { id: 'profile', label: 'Profile', icon: User },
  ];

  return (
    <div className="min-h-screen flex flex-col pb-20">
      {/* 顶部状态栏 */}
      <header className="
        sticky top-0 z-30
        backdrop-blur-xl bg-white/5
        border-b border-white/10
        px-4 py-3
      ">
        <h1 className="text-lg text-white font-bold text-center">App Title</h1>
      </header>

      {/* 单列内容区域 */}
      <main className="flex-1 p-4 space-y-4">
        {children || (
          <>
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="
                  backdrop-blur-xl bg-white/5
                  border border-white/10
                  rounded-2xl p-4
                "
              >
                <h3 className="text-white font-bold mb-1">Item {i}</h3>
                <p className="text-white/60 text-sm">Mobile-optimized content card</p>
              </div>
            ))}
          </>
        )}
      </main>

      {/* 底部标签栏 */}
      <nav className="
        fixed bottom-0 left-0 right-0 z-30
        backdrop-blur-xl bg-white/10
        border-t border-white/20
        flex justify-around
        px-2 py-2
        safe-area-inset-bottom
      ">
        {tabs.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => setActiveTab(id)}
            className={\`
              flex flex-col items-center gap-1 px-4 py-2 rounded-xl
              transition-all duration-200
              \${activeTab === id
                ? 'text-blue-400 bg-blue-500/10'
                : 'text-white/50 hover:text-white/70'
              }
            \`}
          >
            <Icon size={22} />
            <span className="text-xs">{label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}`,

  adaptiveLayouts: `// Adaptive Layout - 自适应断点布局
// 根据屏幕尺寸自动切换布局模式

import React from 'react';

interface AdaptiveLayoutProps {
  children: React.ReactNode;
}

export function AdaptiveLayout({ children }: AdaptiveLayoutProps) {
  return (
    <div className="min-h-screen">
      {/* 顶部导航 - 响应式 */}
      <header className="
        backdrop-blur-xl bg-white/5
        border-b border-white/10
        px-4 md:px-8 py-4
      ">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <h1 className="text-xl md:text-2xl text-white font-bold">Adaptive</h1>
          {/* 桌面端显示导航链接 */}
          <nav className="hidden md:flex items-center gap-6">
            {['Home', 'About', 'Services', 'Contact'].map((link) => (
              <a key={link} href="#" className="text-white/70 hover:text-white transition-colors">
                {link}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* 主内容 - 断点自适应 */}
      <main className="max-w-7xl mx-auto p-4 md:p-8">
        {/* 移动端: 1列, 平板: 2列, 桌面: 3列 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {children || (
            <>
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="
                    backdrop-blur-xl
                    bg-gradient-to-br from-white/10 to-white/5
                    border border-white/20
                    rounded-2xl p-6
                    hover:border-white/30
                    transition-all duration-300
                  "
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-400/20 to-purple-500/20 mb-4" />
                  <h3 className="text-white font-bold mb-2">Feature {i}</h3>
                  <p className="text-white/60 text-sm">
                    Responsive content that adapts to different screen sizes automatically.
                  </p>
                </div>
              ))}
            </>
          )}
        </div>
      </main>
    </div>
  );
}

// 响应式断点速查表:
// sm:  640px   - 小型手机横屏
// md:  768px   - 平板竖屏
// lg:  1024px  - 平板横屏/小型笔记本
// xl:  1280px  - 标准笔记本
// 2xl: 1536px  - 大屏桌面`,

  fluidGrids: `// Fluid Grid System - 流式网格系统
// 基于 CSS Grid 和 Flexbox 的自适应网格

import React from 'react';

// ============================================
// 1. 基础流式网格
// ============================================
interface FluidGridProps {
  columns?: number;
  gap?: string;
  children: React.ReactNode;
  className?: string;
}

export function FluidGrid({
  columns = 3,
  gap = 'gap-6',
  children,
  className = ''
}: FluidGridProps) {
  const colClass: Record<number, string> = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
    6: 'grid-cols-2 md:grid-cols-3 lg:grid-cols-6',
    12: 'grid-cols-3 md:grid-cols-6 lg:grid-cols-12',
  };

  return (
    <div className={\`grid \${colClass[columns] || colClass[3]} \${gap} \${className}\`}>
      {children}
    </div>
  );
}

// ============================================
// 2. 自动填充网格 (Auto-fit)
// ============================================
export function AutoFitGrid({
  minWidth = '280px',
  gap = '1.5rem',
  children,
  className = ''
}: {
  minWidth?: string;
  gap?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={className}
      style={{
        display: 'grid',
        gridTemplateColumns: \`repeat(auto-fit, minmax(\${minWidth}, 1fr))\`,
        gap,
      }}
    >
      {children}
    </div>
  );
}

// ============================================
// 3. 使用示例
// ============================================
function GridExample() {
  return (
    <div className="space-y-12 p-8">
      {/* 3列响应式网格 */}
      <FluidGrid columns={3}>
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div
            key={i}
            className="
              backdrop-blur-xl bg-white/5
              border border-white/10
              rounded-2xl p-6
            "
          >
            <h4 className="text-white font-bold">Card {i}</h4>
            <p className="text-white/60 text-sm mt-2">Grid item content</p>
          </div>
        ))}
      </FluidGrid>

      {/* 自动填充网格 */}
      <AutoFitGrid minWidth="250px">
        {[1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className="
              backdrop-blur-xl bg-white/5
              border border-white/10
              rounded-2xl p-6
            "
          >
            <h4 className="text-white font-bold">Auto {i}</h4>
            <p className="text-white/60 text-sm mt-2">Auto-fit content</p>
          </div>
        ))}
      </AutoFitGrid>
    </div>
  );
}`,

  loadingSection: `import React from 'react';
import { Loader2 } from 'lucide-react';

// Spinner
<Loader2 className="animate-spin text-white" size={48} />

// Loading Overlay
<div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
  <div className="backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-3xl p-8">
    <Loader2 className="animate-spin text-white mx-auto mb-4" size={48} />
    <p className="text-white text-lg">Loading...</p>
  </div>
</div>`,

  logoSection: `import React from 'react';
import { Droplet } from 'lucide-react';

// Logo with Icon
<div className="flex items-center gap-3">
  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-400/20 to-purple-500/20 flex items-center justify-center">
    <Droplet className="text-blue-300" size={24} />
  </div>
  <div>
    <h1 className="text-2xl text-white font-bold">Brand Name</h1>
    <p className="text-white/60 text-sm">Tagline</p>
  </div>
</div>`,

  logoWithTextLarge: `// Logo with Text - Large Size
// 大尺寸品牌 Logo，适用于首页 Hero 区域和启动页

import React from 'react';
import { Droplets } from 'lucide-react';

export function GlassLogoLarge() {
  return (
    <div className="flex items-center gap-5">
      {/* Logo Icon */}
      <div className="
        relative w-20 h-20
        rounded-2xl
        bg-gradient-to-br from-blue-400/20 to-purple-500/20
        backdrop-blur-xl
        border border-white/20
        shadow-2xl shadow-blue-500/20
        flex items-center justify-center
        overflow-hidden
      ">
        {/* 流动渐变背景 */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400/30 via-purple-400/20 to-pink-400/30 animate-pulse" />
        <Droplets className="relative text-blue-300 drop-shadow-lg" size={40} />
      </div>

      {/* Brand Text */}
      <div>
        <h1 className="text-4xl text-white font-bold tracking-tight">
          <span className="bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
            Liquid Glass
          </span>
        </h1>
        <p className="text-white/60 text-lg mt-1">Design System</p>
      </div>
    </div>
  );
}

// 使用示例:
<GlassLogoLarge />`,

  logoWithTextMedium: `// Logo with Text - Medium Size
// 中等尺寸 Logo，适用于页面顶部导航栏

import React from 'react';
import { Droplets } from 'lucide-react';

export function GlassLogoMedium() {
  return (
    <div className="flex items-center gap-3">
      {/* Logo Icon */}
      <div className="
        relative w-12 h-12
        rounded-xl
        bg-gradient-to-br from-blue-400/20 to-purple-500/20
        backdrop-blur-xl
        border border-white/20
        shadow-lg shadow-blue-500/10
        flex items-center justify-center
        overflow-hidden
      ">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-purple-400/10 to-pink-400/20" />
        <Droplets className="relative text-blue-300" size={24} />
      </div>

      {/* Brand Text */}
      <div>
        <h1 className="text-2xl text-white font-bold tracking-tight">
          <span className="bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
            Liquid Glass
          </span>
        </h1>
        <p className="text-white/60 text-sm">Design System</p>
      </div>
    </div>
  );
}

// 在导航栏中使用:
<nav className="
  backdrop-blur-xl bg-white/5
  border-b border-white/10
  px-6 py-3
">
  <div className="max-w-7xl mx-auto flex items-center justify-between">
    <GlassLogoMedium />
    <div className="flex items-center gap-4">
      {/* 导航链接 */}
    </div>
  </div>
</nav>`,

  logoWithTextSmall: `// Logo with Text - Small Size
// 小尺寸 Logo，适用于侧边栏、页脚和紧凑空间

import React from 'react';
import { Droplets } from 'lucide-react';

export function GlassLogoSmall() {
  return (
    <div className="flex items-center gap-2">
      {/* Logo Icon */}
      <div className="
        w-8 h-8
        rounded-lg
        bg-gradient-to-br from-blue-400/20 to-purple-500/20
        backdrop-blur-xl
        border border-white/20
        flex items-center justify-center
      ">
        <Droplets className="text-blue-300" size={16} />
      </div>

      {/* Brand Text */}
      <span className="text-base text-white font-bold">
        <span className="bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
          LG
        </span>
      </span>
    </div>
  );
}

// 仅图标的极小 Logo (用于 Favicon 或头像):
export function GlassLogoIcon({ size = 32 }: { size?: number }) {
  return (
    <div
      className="
        rounded-lg
        bg-gradient-to-br from-blue-400/20 to-purple-500/20
        backdrop-blur-xl
        border border-white/20
        flex items-center justify-center
      "
      style={{ width: size, height: size }}
    >
      <Droplets className="text-blue-300" size={size * 0.5} />
    </div>
  );
}

// 使用示例:
<GlassLogoSmall />
<GlassLogoIcon size={24} />
<GlassLogoIcon size={32} />
<GlassLogoIcon size={48} />`,

  logoWithTextCompact: `// Logo with Text - Compact (No Subtitle)
// 紧凑 Logo 变体，不显示副标题，适用于空间有限的场景

import React from 'react';
import { Droplets } from 'lucide-react';

interface GlassLogoCompactProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function GlassLogoCompact({ size = 'md', className = '' }: GlassLogoCompactProps) {
  const sizes = {
    sm: { container: 'w-7 h-7', icon: 14, text: 'text-sm', gap: 'gap-1.5', rounded: 'rounded-md' },
    md: { container: 'w-10 h-10', icon: 20, text: 'text-lg', gap: 'gap-2', rounded: 'rounded-lg' },
    lg: { container: 'w-14 h-14', icon: 28, text: 'text-2xl', gap: 'gap-3', rounded: 'rounded-xl' },
  };

  const s = sizes[size];

  return (
    <div className={\`flex items-center \${s.gap} \${className}\`}>
      <div className={\`
        \${s.container} \${s.rounded}
        bg-gradient-to-br from-blue-400/20 to-purple-500/20
        backdrop-blur-xl
        border border-white/20
        flex items-center justify-center
      \`}>
        <Droplets className="text-blue-300" size={s.icon} />
      </div>
      <span className={\`\${s.text} text-white font-bold\`}>
        <span className="bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
          Liquid Glass
        </span>
      </span>
    </div>
  );
}

// 使用示例 - 不同尺寸:
<GlassLogoCompact size="sm" />
<GlassLogoCompact size="md" />
<GlassLogoCompact size="lg" />

// 在侧边栏顶部使用:
<aside className="w-64 backdrop-blur-xl bg-white/5 border-r border-white/10 p-4">
  <GlassLogoCompact size="md" className="mb-8" />
  <nav className="space-y-2">
    {/* 导航项 */}
  </nav>
</aside>

// 在页脚使用:
<footer className="backdrop-blur-xl bg-white/5 border-t border-white/10 px-8 py-6">
  <div className="max-w-7xl mx-auto flex items-center justify-between">
    <GlassLogoCompact size="sm" />
    <p className="text-white/50 text-sm">© 2026 Liquid Glass. All rights reserved.</p>
  </div>
</footer>`,

  mapsSection: `import React from 'react';
import { MapPin } from 'lucide-react';

// Map Marker
<div className="relative">
  <MapPin className="text-red-500" size={32} />
  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 backdrop-blur-xl bg-gradient-to-br from-white/95 to-white/90 border border-white/20 rounded-lg px-3 py-2">
    <p className="text-gray-800 text-sm font-medium whitespace-nowrap">Location Name</p>
  </div>
</div>`,

  messageSection: `import React from 'react';
import { X } from 'lucide-react';

// Success Message
<div className="backdrop-blur-xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-2xl p-4">
  <div className="flex items-start justify-between gap-3">
    <div>
      <h4 className="text-green-300 font-bold mb-1">Success</h4>
      <p className="text-white/90 text-sm">Operation completed successfully!</p>
    </div>
    <button className="text-green-300 hover:text-green-200">
      <X size={20} />
    </button>
  </div>
</div>`,

  modalSection: `import React from 'react';
import { useState } from 'react';
import { X } from 'lucide-react';

// Modal
const [isOpen, setIsOpen] = useState(false);

{isOpen && (
  <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
    <div className="backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-3xl p-8 max-w-lg w-full">
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-white text-2xl font-bold">Modal Title</h3>
        <button onClick={() => setIsOpen(false)} className="text-white/70 hover:text-white">
          <X size={24} />
        </button>
      </div>
      <p className="text-white/70 mb-6">Modal content goes here</p>
      <div className="flex gap-3 justify-end">
        <button className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white">
          Cancel
        </button>
        <button className="px-4 py-2 rounded-xl bg-blue-500 hover:bg-blue-600 text-white">
          Confirm
        </button>
      </div>
    </div>
  </div>
)}`,

  modalSizes: `// GlassModal 组件 - 完整实现
// 支持 sm / md / lg 三种尺寸，带毛玻璃背景和流畅动画

import React from 'react';
import { X } from 'lucide-react';

interface GlassModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export function GlassModal({
  isOpen,
  onClose,
  title,
  size = 'md',
  children
}: GlassModalProps) {
  if (!isOpen) return null;

  const sizeClasses = {
    sm: 'max-w-sm',
    md: 'max-w-lg',
    lg: 'max-w-3xl',
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* 背景遮罩 */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Modal 内容 */}
      <div
        className={\`
          relative w-full \${sizeClasses[size]}
          backdrop-blur-xl
          bg-gradient-to-br from-white/15 to-white/5
          border border-white/20
          rounded-3xl
          shadow-2xl shadow-black/30
          p-8
        \`}
        onClick={(e) => e.stopPropagation()}
      >
        {title && (
          <div className="flex items-start justify-between mb-6">
            <h3 className="text-white text-2xl font-bold">{title}</h3>
            <button
              onClick={onClose}
              className="p-2 -mr-2 -mt-2 rounded-xl text-white/60 hover:text-white hover:bg-white/10 transition-all duration-200"
            >
              <X size={20} />
            </button>
          </div>
        )}
        {children}
      </div>
    </div>
  );
}

// 使用示例:
const [isSmall, setIsSmall] = useState(false);
const [isMedium, setIsMedium] = useState(false);
const [isLarge, setIsLarge] = useState(false);

<GlassModal isOpen={isSmall} onClose={() => setIsSmall(false)} title="Small" size="sm">
  <p className="text-white/70">Small modal content</p>
</GlassModal>

<GlassModal isOpen={isMedium} onClose={() => setIsMedium(false)} title="Medium" size="md">
  <p className="text-white/70">Medium modal content</p>
</GlassModal>

<GlassModal isOpen={isLarge} onClose={() => setIsLarge(false)} title="Large" size="lg">
  <p className="text-white/70">Large modal content</p>
</GlassModal>`,

  smallModal: `// Small Modal - 小型确认弹窗
// 适用于简短提示、确认操作等场景

import React, { useState } from 'react';
import { X, AlertTriangle } from 'lucide-react';

export function SmallConfirmModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 rounded-xl backdrop-blur-xl bg-gradient-to-r from-red-500/20 to-rose-500/20 border border-white/20 text-white hover:from-red-500/30 hover:to-rose-500/30 transition-all duration-300"
      >
        Delete Item
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={() => setIsOpen(false)}>
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
          <div
            className="relative w-full max-w-sm backdrop-blur-xl bg-gradient-to-br from-white/15 to-white/5 border border-white/20 rounded-3xl shadow-2xl p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-red-500/20 border border-red-400/30 flex items-center justify-center">
                <AlertTriangle size={20} className="text-red-400" />
              </div>
              <h3 className="text-white text-lg font-bold">Confirm Delete</h3>
            </div>

            <p className="text-white/70 text-sm mb-6">
              Are you sure you want to delete this item? This action cannot be undone.
            </p>

            <div className="flex gap-3 justify-end">
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white text-sm transition-all duration-200"
              >
                Cancel
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 rounded-xl bg-red-500 hover:bg-red-600 text-white text-sm transition-all duration-200"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}`,

  basicModal: `// Basic Modal - 标准信息弹窗
// 适用于展示详细信息、功能介绍等

import React, { useState } from 'react';
import { X, Heart, Settings, Star } from 'lucide-react';

export function BasicInfoModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 rounded-xl backdrop-blur-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-white/20 text-white hover:from-blue-500/30 hover:to-purple-500/30 transition-all duration-300"
      >
        Open Modal
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={() => setIsOpen(false)}>
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
          <div
            className="relative w-full max-w-lg backdrop-blur-xl bg-gradient-to-br from-white/15 to-white/5 border border-white/20 rounded-3xl shadow-2xl p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-6">
              <h3 className="text-white text-2xl font-bold">Welcome to Liquid Glass</h3>
              <button onClick={() => setIsOpen(false)} className="p-2 -mr-2 -mt-2 rounded-xl text-white/60 hover:text-white hover:bg-white/10 transition-all">
                <X size={20} />
              </button>
            </div>

            <p className="text-white/80 mb-4">
              This is a medium-sized modal with glassmorphism effects.
            </p>

            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-3 text-white/70">
                <Heart size={18} className="text-pink-400 flex-shrink-0" />
                <span>Elegant glassmorphism design</span>
              </li>
              <li className="flex items-center gap-3 text-white/70">
                <Settings size={18} className="text-blue-400 flex-shrink-0" />
                <span>Smooth animation transitions</span>
              </li>
              <li className="flex items-center gap-3 text-white/70">
                <Star size={18} className="text-yellow-400 flex-shrink-0" />
                <span>Fully responsive and accessible</span>
              </li>
            </ul>

            <div className="flex gap-3">
              <button onClick={() => setIsOpen(false)} className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 hover:from-blue-500/30 hover:to-purple-500/30 border border-white/20 text-white transition-all duration-200">
                Confirm
              </button>
              <button onClick={() => setIsOpen(false)} className="px-6 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/20 text-white transition-all duration-200">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}`,

  largeModalWithForm: `// Large Modal with Form - 大型表单弹窗
// 适用于联系表单、编辑详情等需要大量输入的场景

import React, { useState } from 'react';
import { X, Send } from 'lucide-react';

export function ContactFormModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '', email: '', subject: '', message: ''
  });

  const inputClasses = \`
    w-full px-4 py-3 rounded-xl
    backdrop-blur-md bg-white/10
    border border-white/20
    text-white placeholder-white/40
    focus:outline-none focus:ring-2 focus:ring-blue-400/30
    focus:border-blue-400/50
    transition-all duration-200
  \`;

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 rounded-xl backdrop-blur-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-white/20 text-white hover:from-blue-500/30 hover:to-purple-500/30 transition-all duration-300"
      >
        Contact Us
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={() => setIsOpen(false)}>
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
          <div
            className="relative w-full max-w-3xl backdrop-blur-xl bg-gradient-to-br from-white/15 to-white/5 border border-white/20 rounded-3xl shadow-2xl p-8 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="text-white text-2xl font-bold">Contact Form</h3>
                <p className="text-white/60 text-sm mt-1">Fill out this form to get in touch.</p>
              </div>
              <button onClick={() => setIsOpen(false)} className="p-2 -mr-2 -mt-2 rounded-xl text-white/60 hover:text-white hover:bg-white/10 transition-all">
                <X size={20} />
              </button>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white/70 text-sm mb-2">Your Name</label>
                  <input type="text" placeholder="John Doe" value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={inputClasses} />
                </div>
                <div>
                  <label className="block text-white/70 text-sm mb-2">Email</label>
                  <input type="email" placeholder="john@example.com" value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={inputClasses} />
                </div>
              </div>

              <div>
                <label className="block text-white/70 text-sm mb-2">Subject</label>
                <input type="text" placeholder="How can we help?" value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className={inputClasses} />
              </div>

              <div>
                <label className="block text-white/70 text-sm mb-2">Message</label>
                <textarea rows={5} placeholder="Tell us more..." value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={\`\${inputClasses} resize-none\`} />
              </div>

              <div className="flex gap-3 pt-4">
                <button className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white shadow-lg shadow-blue-500/30 transition-all duration-200">
                  <Send size={18} />
                  Send Message
                </button>
                <button onClick={() => setIsOpen(false)} className="px-6 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/20 text-white transition-all duration-200">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}`,

  navigationSection: `import React from 'react';
import { Home, Search, User, Settings } from 'lucide-react';

// Navigation Bar
<nav className="backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border-b border-white/20 px-8 py-4">
  <div className="max-w-7xl mx-auto flex items-center justify-between">
    <div className="text-white text-xl font-bold">Brand</div>
    <div className="flex gap-6">
      <button className="flex items-center gap-2 text-white/70 hover:text-white">
        <Home size={20} />
        <span>Home</span>
      </button>
      <button className="flex items-center gap-2 text-white/70 hover:text-white">
        <Search size={20} />
        <span>Search</span>
      </button>
      <button className="flex items-center gap-2 text-white/70 hover:text-white">
        <User size={20} />
        <span>Profile</span>
      </button>
      <button className="flex items-center gap-2 text-white/70 hover:text-white">
        <Settings size={20} />
        <span>Settings</span>
      </button>
    </div>
  </div>
</nav>`,

  searchSection: `import React from 'react';
import { useState } from 'react';
import { Search } from 'lucide-react';

// Search Input
const [query, setQuery] = useState('');

<div className="relative">
  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" size={20} />
  <input
    type="text"
    value={query}
    onChange={(e) => setQuery(e.target.value)}
    placeholder="Search..."
    className="
      w-full pl-10 pr-4 py-2.5
      bg-white/10
      border border-white/20
      rounded-xl
      text-white placeholder-white/40
      focus:outline-none focus:border-blue-400/50
    "
  />
</div>`,

  tableSection: `import React from 'react';
import { useState } from 'react';

// Table with Sorting & Pagination
const [currentPage, setCurrentPage] = useState(1);
const [sortColumn, setSortColumn] = useState(null);

<div className="backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-3xl overflow-hidden">
  <table className="w-full">
    <thead>
      <tr className="bg-white/5 border-b border-white/10">
        <th className="px-4 py-3 text-left text-white/70 text-sm font-medium">Name</th>
        <th className="px-4 py-3 text-left text-white/70 text-sm font-medium">Email</th>
        <th className="px-4 py-3 text-left text-white/70 text-sm font-medium">Role</th>
      </tr>
    </thead>
    <tbody>
      <tr className="border-b border-white/5 hover:bg-white/5">
        <td className="px-4 py-3 text-white/90 text-sm">John Doe</td>
        <td className="px-4 py-3 text-white/90 text-sm">john@example.com</td>
        <td className="px-4 py-3 text-white/90 text-sm">Developer</td>
      </tr>
    </tbody>
  </table>
</div>`,

  toggleSection: {
    basicToggles: `// Basic Toggle Switches - 基础开关组件
// 支持 sm / md / lg 三种尺寸和 disabled 状态

import React, { useState } from 'react';

interface GlassToggleProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'success' | 'warning' | 'danger';
  disabled?: boolean;
}

export function GlassToggle({
  checked,
  onChange,
  size = 'md',
  variant = 'primary',
  disabled = false,
}: GlassToggleProps) {
  const sizes = {
    sm: { track: 'w-10 h-5', thumb: 'w-3.5 h-3.5', translate: 'translate-x-5' },
    md: { track: 'w-14 h-7', thumb: 'w-5 h-5', translate: 'translate-x-7' },
    lg: { track: 'w-18 h-9', thumb: 'w-7 h-7', translate: 'translate-x-9' },
  };

  const variants = {
    primary: 'bg-blue-500 shadow-blue-500/50',
    success: 'bg-green-500 shadow-green-500/50',
    warning: 'bg-yellow-500 shadow-yellow-500/50',
    danger: 'bg-red-500 shadow-red-500/50',
  };

  const s = sizes[size];

  return (
    <button
      onClick={() => !disabled && onChange(!checked)}
      disabled={disabled}
      className={\\\`
        relative \\\${s.track} rounded-full
        transition-all duration-300 ease-in-out
        \\\${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        \\\${checked
          ? \\\`\\\${variants[variant]} shadow-lg\\\`
          : 'bg-white/20 hover:bg-white/30'
        }
      \\\`}
    >
      <div
        className={\\\`
          absolute top-1 left-1
          \\\${s.thumb} rounded-full
          bg-white shadow-md
          transition-transform duration-300 ease-in-out
          \\\${checked ? s.translate : 'translate-x-0'}
        \\\`}
      />
    </button>
  );
}

// 使用示例 - 不同尺寸:
<GlassToggle checked={true} onChange={() => {}} size="sm" />
<GlassToggle checked={true} onChange={() => {}} size="md" />
<GlassToggle checked={true} onChange={() => {}} size="lg" />
<GlassToggle checked={false} onChange={() => {}} size="md" disabled />`,

    toggleVariants: `// Toggle Variants - 不同颜色变体
// 支持 primary / success / warning / danger 四种语义化颜色

import React, { useState } from 'react';

function ToggleVariantsDemo() {
  const [states, setStates] = useState({
    primary: true, success: true, warning: true, danger: true,
  });

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      <div className="flex flex-col items-center gap-3">
        <GlassToggle checked={states.primary} onChange={(v) => setStates({ ...states, primary: v })} variant="primary" />
        <span className="text-white/60 text-sm">Primary</span>
      </div>
      <div className="flex flex-col items-center gap-3">
        <GlassToggle checked={states.success} onChange={(v) => setStates({ ...states, success: v })} variant="success" />
        <span className="text-white/60 text-sm">Success</span>
      </div>
      <div className="flex flex-col items-center gap-3">
        <GlassToggle checked={states.warning} onChange={(v) => setStates({ ...states, warning: v })} variant="warning" />
        <span className="text-white/60 text-sm">Warning</span>
      </div>
      <div className="flex flex-col items-center gap-3">
        <GlassToggle checked={states.danger} onChange={(v) => setStates({ ...states, danger: v })} variant="danger" />
        <span className="text-white/60 text-sm">Danger</span>
      </div>
    </div>
  );
}

// 变体颜色映射:
// primary: 'bg-blue-500 shadow-blue-500/50'
// success: 'bg-green-500 shadow-green-500/50'
// warning: 'bg-yellow-500 shadow-yellow-500/50'
// danger:  'bg-red-500 shadow-red-500/50'`,

    interactiveToggles: `// Interactive Toggles with Icons - 带图标的交互式开关
// 适用于系统设置面板，开关状态联动图标和文案

import React, { useState } from 'react';
import { Wifi, WifiOff, Bell, BellOff, Moon, Sun, Volume2, VolumeX } from 'lucide-react';

function InteractiveTogglesDemo() {
  const [wifi, setWifi] = useState(true);
  const [notifications, setNotifications] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [sound, setSound] = useState(true);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
        <div className="flex items-center gap-3">
          {wifi ? <Wifi className="text-blue-400" size={24} /> : <WifiOff className="text-white/40" size={24} />}
          <div>
            <h4 className="text-white font-semibold">Wi-Fi</h4>
            <p className="text-white/60 text-sm">{wifi ? 'Connected' : 'Disconnected'}</p>
          </div>
        </div>
        <GlassToggle checked={wifi} onChange={setWifi} variant="primary" />
      </div>

      <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
        <div className="flex items-center gap-3">
          {notifications ? <Bell className="text-yellow-400" size={24} /> : <BellOff className="text-white/40" size={24} />}
          <div>
            <h4 className="text-white font-semibold">Notifications</h4>
            <p className="text-white/60 text-sm">{notifications ? 'Enabled' : 'Disabled'}</p>
          </div>
        </div>
        <GlassToggle checked={notifications} onChange={setNotifications} variant="warning" />
      </div>

      <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
        <div className="flex items-center gap-3">
          {darkMode ? <Moon className="text-purple-400" size={24} /> : <Sun className="text-white/40" size={24} />}
          <div>
            <h4 className="text-white font-semibold">Dark Mode</h4>
            <p className="text-white/60 text-sm">{darkMode ? 'On' : 'Off'}</p>
          </div>
        </div>
        <GlassToggle checked={darkMode} onChange={setDarkMode} variant="primary" />
      </div>

      <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
        <div className="flex items-center gap-3">
          {sound ? <Volume2 className="text-green-400" size={24} /> : <VolumeX className="text-white/40" size={24} />}
          <div>
            <h4 className="text-white font-semibold">Sound</h4>
            <p className="text-white/60 text-sm">{sound ? 'On' : 'Muted'}</p>
          </div>
        </div>
        <GlassToggle checked={sound} onChange={setSound} variant="success" />
      </div>
    </div>
  );
}`,

    settingsList: `// Settings List - 设置列表
// 适用于应用设置页面，带分隔线和描述文案

import React, { useState } from 'react';

function SettingsListDemo() {
  const [autoSave, setAutoSave] = useState(false);
  const [emailNotif, setEmailNotif] = useState(true);
  const [twoFA, setTwoFA] = useState(false);

  return (
    <div className="backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-3xl p-6">
      <h3 className="text-white text-2xl mb-6">Settings</h3>
      <div className="space-y-4">
        <div className="flex items-center justify-between py-3 border-b border-white/10">
          <div>
            <h4 className="text-white font-medium">Auto-save</h4>
            <p className="text-white/60 text-sm">Automatically save changes</p>
          </div>
          <GlassToggle checked={autoSave} onChange={setAutoSave} />
        </div>

        <div className="flex items-center justify-between py-3 border-b border-white/10">
          <div>
            <h4 className="text-white font-medium">Email notifications</h4>
            <p className="text-white/60 text-sm">Receive updates via email</p>
          </div>
          <GlassToggle checked={emailNotif} onChange={setEmailNotif} />
        </div>

        <div className="flex items-center justify-between py-3">
          <div>
            <h4 className="text-white font-medium">Two-factor authentication</h4>
            <p className="text-white/60 text-sm">Add an extra layer of security</p>
          </div>
          <GlassToggle
            checked={twoFA}
            onChange={setTwoFA}
            variant={twoFA ? 'success' : 'primary'}
          />
        </div>
      </div>
    </div>
  );
}`,

    compactToggles: `// Compact Toggles - 紧凑型开关网格
// 适用于功能开关面板、批量启停控制

import React, { useState } from 'react';

function CompactTogglesDemo() {
  const features = [
    'Feature A', 'Feature B', 'Feature C', 'Feature D', 'Feature E',
    'Feature F', 'Feature G', 'Feature H', 'Feature I', 'Feature J',
  ];

  const [enabled, setEnabled] = useState<Record<string, boolean>>(
    Object.fromEntries(features.map((f, i) => [f, i % 2 === 0]))
  );

  return (
    <div className="backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-3xl p-6">
      <h3 className="text-white text-2xl mb-6">Compact View</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {features.map((feature) => (
          <div key={feature} className="flex items-center gap-2">
            <GlassToggle
              checked={enabled[feature]}
              onChange={() => setEnabled(prev => ({ ...prev, [feature]: !prev[feature] }))}
              size="sm"
            />
            <span className="text-white/70 text-sm">{feature}</span>
          </div>
        ))}
      </div>

      <div className="flex gap-3 mt-6 pt-4 border-t border-white/10">
        <button
          onClick={() => setEnabled(Object.fromEntries(features.map(f => [f, true])))}
          className="px-4 py-2 rounded-xl bg-green-500/20 hover:bg-green-500/30 border border-green-400/30 text-green-300 text-sm transition-all duration-200"
        >
          Enable All
        </button>
        <button
          onClick={() => setEnabled(Object.fromEntries(features.map(f => [f, false])))}
          className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white/70 text-sm transition-all duration-200"
        >
          Disable All
        </button>
      </div>
    </div>
  );
}`,
  },

  tooltipSection: `import React from 'react';
import { useState } from 'react';

// Tooltip
const [showTooltip, setShowTooltip] = useState(false);

<div className="relative">
  <button
    onMouseEnter={() => setShowTooltip(true)}
    onMouseLeave={() => setShowTooltip(false)}
    className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white"
  >
    Hover me
  </button>
  {showTooltip && (
    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 backdrop-blur-xl bg-gradient-to-br from-white/95 to-white/90 border border-white/20 rounded-lg px-3 py-2">
      <p className="text-gray-800 text-sm whitespace-nowrap">Tooltip content</p>
    </div>
  )}
</div>`,

  usmapSection: `import React from 'react';

// US Map SVG
<svg viewBox="0 0 960 600" className="w-full h-auto">
  <g className="states">
    <path
      d="M..." // State path data
      className="fill-blue-400/20 stroke-blue-400 hover:fill-blue-400/40 cursor-pointer transition-colors"
    />
  </g>
</svg>`
};