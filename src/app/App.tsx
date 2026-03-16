import React from 'react';
import { GlassNavSidebar, useScrollSpy, scrollToSection } from './components/glass-nav-sidebar';
import { GlassToastAdvancedContainer, useAdvancedToast } from './components/glass-toast-advanced';
import { 
  BarChart3, 
  Type, 
  FormInput, 
  Layout, 
  Bell,
  Navigation2,
  MapPin,
  Database,
  Palette,
  Home,
  Search,
  MousePointer2,
  Info,
  Grid3x3,
  Calendar as CalendarIcon,
  CreditCard,
  Maximize2,
  MessageSquare,
  Loader2,
  Sparkles,
  Droplet,
  ToggleLeft,
  CheckSquare,
  Boxes,
  MessageCircle,
  Table
} from 'lucide-react';

// Import all component demos
import { ChartsSection } from './sections/charts-section';
import { FontsSection } from './sections/fonts-section';
import { FormsSection } from './sections/forms-section';
import { LayoutSection } from './sections/layout-section';
import { FeedbackSection } from './sections/feedback-section';
import { NavigationSection } from './sections/navigation-section';
import { DataSection } from './sections/data-section';
import { SearchSection } from './sections/search-section';
import { ButtonSection } from './sections/button-section';
import { TooltipSection } from './sections/tooltip-section';
import { GridSection } from './sections/grid-section';
import { CalendarSection } from './sections/calendar-section';
import { CardsSection } from './sections/cards-section';
import { ModalSection } from './sections/modal-section';
import { MessageSection } from './sections/message-section';
import { USMapSection } from './sections/usmap-section';
import { LoadingSection } from './sections/loading-section';
import { LogoSection } from './sections/logo-section';
import { ColorSection } from './sections/color-section';
import { ToggleSection } from './sections/toggle-section';
import { CheckboxRadioSection } from './sections/checkbox-radio-section';
import { IconsSection } from './sections/icons-section';
import { ChatSection } from './sections/chat-section';
import { TableSection } from './sections/table-section';

export default function App() {
  const { toasts, addToast, removeToast } = useAdvancedToast();
  const [isNavCollapsed, setIsNavCollapsed] = React.useState(false);

  const navigationItems = [
    { id: 'home', label: 'Home', icon: <Home size={20} /> },
    // 以下按字母顺序排列 (Alphabetical order)
    { id: 'buttons', label: 'Buttons', icon: <MousePointer2 size={20} /> },
    { id: 'calendar', label: 'Calendar', icon: <CalendarIcon size={20} /> },
    { id: 'cards', label: 'Cards', icon: <CreditCard size={20} /> },
    { id: 'chat', label: 'Chat', icon: <MessageCircle size={20} /> },
    { id: 'charts', label: 'Charts & Graphs', icon: <BarChart3 size={20} /> },
    { id: 'checkboxradio', label: 'Checkbox & Radio', icon: <CheckSquare size={20} /> },
    { id: 'color', label: 'Color', icon: <Palette size={20} /> },
    { id: 'data', label: 'Data Display', icon: <Database size={20} /> },
    { id: 'feedback', label: 'Feedback', icon: <Bell size={20} /> },
    { id: 'forms', label: 'Forms & Inputs', icon: <FormInput size={20} /> },
    { id: 'grid', label: 'Grid Layout', icon: <Grid3x3 size={20} /> },
    { id: 'icons', label: 'Icons', icon: <Boxes size={20} /> },
    { id: 'layout', label: 'Layout', icon: <Layout size={20} /> },
    { id: 'loading', label: 'Loading', icon: <Loader2 size={20} /> },
    { id: 'logo', label: 'Logo', icon: <Sparkles size={20} /> },
    { id: 'message', label: 'Message', icon: <MessageSquare size={20} /> },
    { id: 'modal', label: 'Modal', icon: <Maximize2 size={20} /> },
    { id: 'navigation', label: 'Navigation', icon: <Navigation2 size={20} /> },
    { id: 'tooltip', label: 'Popover & Tooltip', icon: <Info size={20} /> },
    { id: 'search', label: 'Search', icon: <Search size={20} /> },
    { id: 'table', label: 'Table', icon: <Table size={20} /> },
    { id: 'toggle', label: 'Toggle', icon: <ToggleLeft size={20} /> },
    { id: 'fonts', label: 'Typography', icon: <Type size={20} /> },
    { id: 'usmap', label: 'Map', icon: <MapPin size={20} /> }
  ];

  const sectionIds = navigationItems.map(item => item.id);
  const activeSection = useScrollSpy(sectionIds, 150);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-teal-900" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      {/* Toast Container */}
      <GlassToastAdvancedContainer toasts={toasts} onClose={removeToast} />

      {/* Left Navigation Sidebar */}
      <GlassNavSidebar
        items={navigationItems}
        activeSection={activeSection}
        onNavigate={scrollToSection}
        onCollapseChange={setIsNavCollapsed}
      />

      {/* Main Content with Responsive Left Margin */}
      <div className={`
        py-12 px-8
        transition-all duration-300
        ${isNavCollapsed ? 'ml-20' : 'ml-80'}
      `}>
        <div className="max-w-7xl mx-auto space-y-24">
          {/* Home Section */}
          <section id="home" className="min-h-screen flex items-center justify-center">
            <div className="w-full space-y-12">
              {/* Hero Header */}
              <div className="text-center space-y-6">
                <div className="flex justify-center mb-8">
                  <div className="
                    w-24 h-24 
                    rounded-3xl
                    bg-gradient-to-br from-blue-400/20 to-purple-500/20
                    backdrop-blur-md
                    border border-white/20
                    flex items-center justify-center
                    relative overflow-hidden
                    animate-pulse
                  ">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent" />
                    <Palette className="text-white relative z-10" size={48} />
                  </div>
                </div>
                <h1 className="text-7xl text-white font-bold bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
                  Wen's Project Liquid Glass
                </h1>
                <p className="text-2xl text-white/70 max-w-3xl mx-auto">
                  A complete design system with glassmorphism components for modern web and mobile applications
                </p>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div className="
                  p-6 rounded-2xl
                  backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5
                  border border-white/20
                  hover:border-white/30
                  transition-all duration-300
                  group
                ">
                  <div className="text-center space-y-2">
                    <p className="text-white/60 text-sm font-medium">Components</p>
                    <p className="text-white text-5xl font-bold group-hover:scale-110 transition-transform">60+</p>
                    <div className="h-1 w-16 mx-auto bg-gradient-to-r from-blue-400 to-purple-500 rounded-full" />
                  </div>
                </div>
                <div className="
                  p-6 rounded-2xl
                  backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5
                  border border-white/20
                  hover:border-white/30
                  transition-all duration-300
                  group
                ">
                  <div className="text-center space-y-2">
                    <p className="text-white/60 text-sm font-medium">Categories</p>
                    <p className="text-white text-5xl font-bold group-hover:scale-110 transition-transform">24</p>
                    <div className="h-1 w-16 mx-auto bg-gradient-to-r from-purple-400 to-pink-500 rounded-full" />
                  </div>
                </div>
                <div className="
                  p-6 rounded-2xl
                  backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5
                  border border-white/20
                  hover:border-white/30
                  transition-all duration-300
                  group
                ">
                  <div className="text-center space-y-2">
                    <p className="text-white/60 text-sm font-medium">Variations</p>
                    <p className="text-white text-5xl font-bold group-hover:scale-110 transition-transform">150+</p>
                    <div className="h-1 w-16 mx-auto bg-gradient-to-r from-pink-400 to-blue-500 rounded-full" />
                  </div>
                </div>
              </div>

              {/* Category Cards Grid */}
              <div className="space-y-4">
                <h2 className="text-3xl text-white font-bold text-center">
                  Explore Components
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Logo Card */}
                  <button
                    onClick={() => scrollToSection('logo')}
                    className="
                      group p-6 rounded-2xl
                      backdrop-blur-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10
                      border border-white/20
                      hover:border-blue-400/50
                      hover:shadow-2xl hover:shadow-blue-500/20
                      transition-all duration-300
                      text-left
                      hover:scale-105
                    "
                  >
                    <div className="flex items-start gap-4">
                      <div className="
                        w-14 h-14 rounded-xl
                        bg-gradient-to-br from-blue-400/20 to-purple-500/20
                        flex items-center justify-center
                        group-hover:scale-110 transition-transform
                      ">
                        <Sparkles className="text-blue-300" size={28} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-white text-xl font-bold mb-1">Logo</h3>
                        <p className="text-white/60 text-sm">12 brand identity variations</p>
                      </div>
                    </div>
                  </button>

                  {/* Search Card */}
                  <button
                    onClick={() => scrollToSection('search')}
                    className="
                      group p-6 rounded-2xl
                      backdrop-blur-xl bg-gradient-to-br from-purple-500/10 to-pink-500/10
                      border border-white/20
                      hover:border-purple-400/50
                      hover:shadow-2xl hover:shadow-purple-500/20
                      transition-all duration-300
                      text-left
                      hover:scale-105
                    "
                  >
                    <div className="flex items-start gap-4">
                      <div className="
                        w-14 h-14 rounded-xl
                        bg-gradient-to-br from-purple-400/20 to-pink-500/20
                        flex items-center justify-center
                        group-hover:scale-110 transition-transform
                      ">
                        <Search className="text-purple-300" size={28} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-white text-xl font-bold mb-1">Search</h3>
                        <p className="text-white/60 text-sm">Smart search & filters</p>
                      </div>
                    </div>
                  </button>

                  {/* Buttons Card */}
                  <button
                    onClick={() => scrollToSection('buttons')}
                    className="
                      group p-6 rounded-2xl
                      backdrop-blur-xl bg-gradient-to-br from-pink-500/10 to-orange-500/10
                      border border-white/20
                      hover:border-pink-400/50
                      hover:shadow-2xl hover:shadow-pink-500/20
                      transition-all duration-300
                      text-left
                      hover:scale-105
                    "
                  >
                    <div className="flex items-start gap-4">
                      <div className="
                        w-14 h-14 rounded-xl
                        bg-gradient-to-br from-pink-400/20 to-orange-500/20
                        flex items-center justify-center
                        group-hover:scale-110 transition-transform
                      ">
                        <MousePointer2 className="text-pink-300" size={28} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-white text-xl font-bold mb-1">Buttons</h3>
                        <p className="text-white/60 text-sm">Interactive button styles</p>
                      </div>
                    </div>
                  </button>

                  {/* Charts Card */}
                  <button
                    onClick={() => scrollToSection('charts')}
                    className="
                      group p-6 rounded-2xl
                      backdrop-blur-xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10
                      border border-white/20
                      hover:border-cyan-400/50
                      hover:shadow-2xl hover:shadow-cyan-500/20
                      transition-all duration-300
                      text-left
                      hover:scale-105
                    "
                  >
                    <div className="flex items-start gap-4">
                      <div className="
                        w-14 h-14 rounded-xl
                        bg-gradient-to-br from-cyan-400/20 to-blue-500/20
                        flex items-center justify-center
                        group-hover:scale-110 transition-transform
                      ">
                        <BarChart3 className="text-cyan-300" size={28} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-white text-xl font-bold mb-1">Charts & Graphs</h3>
                        <p className="text-white/60 text-sm">Data visualization tools</p>
                      </div>
                    </div>
                  </button>

                  {/* Typography Card */}
                  <button
                    onClick={() => scrollToSection('fonts')}
                    className="
                      group p-6 rounded-2xl
                      backdrop-blur-xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10
                      border border-white/20
                      hover:border-indigo-400/50
                      hover:shadow-2xl hover:shadow-indigo-500/20
                      transition-all duration-300
                      text-left
                      hover:scale-105
                    "
                  >
                    <div className="flex items-start gap-4">
                      <div className="
                        w-14 h-14 rounded-xl
                        bg-gradient-to-br from-indigo-400/20 to-purple-500/20
                        flex items-center justify-center
                        group-hover:scale-110 transition-transform
                      ">
                        <Type className="text-indigo-300" size={28} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-white text-xl font-bold mb-1">Typography</h3>
                        <p className="text-white/60 text-sm">Font families & pickers</p>
                      </div>
                    </div>
                  </button>

                  {/* Forms Card */}
                  <button
                    onClick={() => scrollToSection('forms')}
                    className="
                      group p-6 rounded-2xl
                      backdrop-blur-xl bg-gradient-to-br from-green-500/10 to-emerald-500/10
                      border border-white/20
                      hover:border-green-400/50
                      hover:shadow-2xl hover:shadow-green-500/20
                      transition-all duration-300
                      text-left
                      hover:scale-105
                    "
                  >
                    <div className="flex items-start gap-4">
                      <div className="
                        w-14 h-14 rounded-xl
                        bg-gradient-to-br from-green-400/20 to-emerald-500/20
                        flex items-center justify-center
                        group-hover:scale-110 transition-transform
                      ">
                        <FormInput className="text-green-300" size={28} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-white text-xl font-bold mb-1">Forms & Inputs</h3>
                        <p className="text-white/60 text-sm">Form controls & validation</p>
                      </div>
                    </div>
                  </button>

                  {/* Tooltip Card */}
                  <button
                    onClick={() => scrollToSection('tooltip')}
                    className="
                      group p-6 rounded-2xl
                      backdrop-blur-xl bg-gradient-to-br from-yellow-500/10 to-orange-500/10
                      border border-white/20
                      hover:border-yellow-400/50
                      hover:shadow-2xl hover:shadow-yellow-500/20
                      transition-all duration-300
                      text-left
                      hover:scale-105
                    "
                  >
                    <div className="flex items-start gap-4">
                      <div className="
                        w-14 h-14 rounded-xl
                        bg-gradient-to-br from-yellow-400/20 to-orange-500/20
                        flex items-center justify-center
                        group-hover:scale-110 transition-transform
                      ">
                        <Info className="text-yellow-300" size={28} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-white text-xl font-bold mb-1">Popover & Tooltip</h3>
                        <p className="text-white/60 text-sm">Contextual information</p>
                      </div>
                    </div>
                  </button>

                  {/* Grid Card */}
                  <button
                    onClick={() => scrollToSection('grid')}
                    className="
                      group p-6 rounded-2xl
                      backdrop-blur-xl bg-gradient-to-br from-rose-500/10 to-pink-500/10
                      border border-white/20
                      hover:border-rose-400/50
                      hover:shadow-2xl hover:shadow-rose-500/20
                      transition-all duration-300
                      text-left
                      hover:scale-105
                    "
                  >
                    <div className="flex items-start gap-4">
                      <div className="
                        w-14 h-14 rounded-xl
                        bg-gradient-to-br from-rose-400/20 to-pink-500/20
                        flex items-center justify-center
                        group-hover:scale-110 transition-transform
                      ">
                        <Grid3x3 className="text-rose-300" size={28} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-white text-xl font-bold mb-1">Grid Layout</h3>
                        <p className="text-white/60 text-sm">Flexible grid systems</p>
                      </div>
                    </div>
                  </button>

                  {/* Calendar Card */}
                  <button
                    onClick={() => scrollToSection('calendar')}
                    className="
                      group p-6 rounded-2xl
                      backdrop-blur-xl bg-gradient-to-br from-violet-500/10 to-purple-500/10
                      border border-white/20
                      hover:border-violet-400/50
                      hover:shadow-2xl hover:shadow-violet-500/20
                      transition-all duration-300
                      text-left
                      hover:scale-105
                    "
                  >
                    <div className="flex items-start gap-4">
                      <div className="
                        w-14 h-14 rounded-xl
                        bg-gradient-to-br from-violet-400/20 to-purple-500/20
                        flex items-center justify-center
                        group-hover:scale-110 transition-transform
                      ">
                        <CalendarIcon className="text-violet-300" size={28} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-white text-xl font-bold mb-1">Calendar</h3>
                        <p className="text-white/60 text-sm">Date pickers & calendars</p>
                      </div>
                    </div>
                  </button>

                  {/* Cards Card */}
                  <button
                    onClick={() => scrollToSection('cards')}
                    className="
                      group p-6 rounded-2xl
                      backdrop-blur-xl bg-gradient-to-br from-teal-500/10 to-cyan-500/10
                      border border-white/20
                      hover:border-teal-400/50
                      hover:shadow-2xl hover:shadow-teal-500/20
                      transition-all duration-300
                      text-left
                      hover:scale-105
                    "
                  >
                    <div className="flex items-start gap-4">
                      <div className="
                        w-14 h-14 rounded-xl
                        bg-gradient-to-br from-teal-400/20 to-cyan-500/20
                        flex items-center justify-center
                        group-hover:scale-110 transition-transform
                      ">
                        <CreditCard className="text-teal-300" size={28} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-white text-xl font-bold mb-1">Cards</h3>
                        <p className="text-white/60 text-sm">Content card layouts</p>
                      </div>
                    </div>
                  </button>

                  {/* Modal Card */}
                  <button
                    onClick={() => scrollToSection('modal')}
                    className="
                      group p-6 rounded-2xl
                      backdrop-blur-xl bg-gradient-to-br from-blue-500/10 to-indigo-500/10
                      border border-white/20
                      hover:border-blue-400/50
                      hover:shadow-2xl hover:shadow-blue-500/20
                      transition-all duration-300
                      text-left
                      hover:scale-105
                    "
                  >
                    <div className="flex items-start gap-4">
                      <div className="
                        w-14 h-14 rounded-xl
                        bg-gradient-to-br from-blue-400/20 to-indigo-500/20
                        flex items-center justify-center
                        group-hover:scale-110 transition-transform
                      ">
                        <Maximize2 className="text-blue-300" size={28} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-white text-xl font-bold mb-1">Modal</h3>
                        <p className="text-white/60 text-sm">Dialog & modal windows</p>
                      </div>
                    </div>
                  </button>

                  {/* Message Card */}
                  <button
                    onClick={() => scrollToSection('message')}
                    className="
                      group p-6 rounded-2xl
                      backdrop-blur-xl bg-gradient-to-br from-fuchsia-500/10 to-pink-500/10
                      border border-white/20
                      hover:border-fuchsia-400/50
                      hover:shadow-2xl hover:shadow-fuchsia-500/20
                      transition-all duration-300
                      text-left
                      hover:scale-105
                    "
                  >
                    <div className="flex items-start gap-4">
                      <div className="
                        w-14 h-14 rounded-xl
                        bg-gradient-to-br from-fuchsia-400/20 to-pink-500/20
                        flex items-center justify-center
                        group-hover:scale-110 transition-transform
                      ">
                        <MessageSquare className="text-fuchsia-300" size={28} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-white text-xl font-bold mb-1">Message</h3>
                        <p className="text-white/60 text-sm">Messaging & chat UI</p>
                      </div>
                    </div>
                  </button>

                  {/* Loading Card */}
                  <button
                    onClick={() => scrollToSection('loading')}
                    className="
                      group p-6 rounded-2xl
                      backdrop-blur-xl bg-gradient-to-br from-amber-500/10 to-yellow-500/10
                      border border-white/20
                      hover:border-amber-400/50
                      hover:shadow-2xl hover:shadow-amber-500/20
                      transition-all duration-300
                      text-left
                      hover:scale-105
                    "
                  >
                    <div className="flex items-start gap-4">
                      <div className="
                        w-14 h-14 rounded-xl
                        bg-gradient-to-br from-amber-400/20 to-yellow-500/20
                        flex items-center justify-center
                        group-hover:scale-110 transition-transform
                      ">
                        <Loader2 className="text-amber-300 animate-spin" size={28} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-white text-xl font-bold mb-1">Loading</h3>
                        <p className="text-white/60 text-sm">Loading indicators</p>
                      </div>
                    </div>
                  </button>

                  {/* Layout Card */}
                  <button
                    onClick={() => scrollToSection('layout')}
                    className="
                      group p-6 rounded-2xl
                      backdrop-blur-xl bg-gradient-to-br from-lime-500/10 to-green-500/10
                      border border-white/20
                      hover:border-lime-400/50
                      hover:shadow-2xl hover:shadow-lime-500/20
                      transition-all duration-300
                      text-left
                      hover:scale-105
                    "
                  >
                    <div className="flex items-start gap-4">
                      <div className="
                        w-14 h-14 rounded-xl
                        bg-gradient-to-br from-lime-400/20 to-green-500/20
                        flex items-center justify-center
                        group-hover:scale-110 transition-transform
                      ">
                        <Layout className="text-lime-300" size={28} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-white text-xl font-bold mb-1">Layout</h3>
                        <p className="text-white/60 text-sm">Page layouts & sections</p>
                      </div>
                    </div>
                  </button>

                  {/* Feedback Card */}
                  <button
                    onClick={() => scrollToSection('feedback')}
                    className="
                      group p-6 rounded-2xl
                      backdrop-blur-xl bg-gradient-to-br from-sky-500/10 to-blue-500/10
                      border border-white/20
                      hover:border-sky-400/50
                      hover:shadow-2xl hover:shadow-sky-500/20
                      transition-all duration-300
                      text-left
                      hover:scale-105
                    "
                  >
                    <div className="flex items-start gap-4">
                      <div className="
                        w-14 h-14 rounded-xl
                        bg-gradient-to-br from-sky-400/20 to-blue-500/20
                        flex items-center justify-center
                        group-hover:scale-110 transition-transform
                      ">
                        <Bell className="text-sky-300" size={28} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-white text-xl font-bold mb-1">Feedback</h3>
                        <p className="text-white/60 text-sm">Alerts & notifications</p>
                      </div>
                    </div>
                  </button>

                  {/* Navigation Card */}
                  <button
                    onClick={() => scrollToSection('navigation')}
                    className="
                      group p-6 rounded-2xl
                      backdrop-blur-xl bg-gradient-to-br from-purple-500/10 to-fuchsia-500/10
                      border border-white/20
                      hover:border-purple-400/50
                      hover:shadow-2xl hover:shadow-purple-500/20
                      transition-all duration-300
                      text-left
                      hover:scale-105
                    "
                  >
                    <div className="flex items-start gap-4">
                      <div className="
                        w-14 h-14 rounded-xl
                        bg-gradient-to-br from-purple-400/20 to-fuchsia-500/20
                        flex items-center justify-center
                        group-hover:scale-110 transition-transform
                      ">
                        <Navigation2 className="text-purple-300" size={28} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-white text-xl font-bold mb-1">Navigation</h3>
                        <p className="text-white/60 text-sm">Navbars & menus</p>
                      </div>
                    </div>
                  </button>

                  {/* US Map Card */}
                  <button
                    onClick={() => scrollToSection('usmap')}
                    className="
                      group p-6 rounded-2xl
                      backdrop-blur-xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10
                      border border-white/20
                      hover:border-emerald-400/50
                      hover:shadow-2xl hover:shadow-emerald-500/20
                      transition-all duration-300
                      text-left
                      hover:scale-105
                    "
                  >
                    <div className="flex items-start gap-4">
                      <div className="
                        w-14 h-14 rounded-xl
                        bg-gradient-to-br from-emerald-400/20 to-teal-500/20
                        flex items-center justify-center
                        group-hover:scale-110 transition-transform
                      ">
                        <MapPin className="text-emerald-300" size={28} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-white text-xl font-bold mb-1">Map</h3>
                        <p className="text-white/60 text-sm">Interactive map visualizations</p>
                      </div>
                    </div>
                  </button>

                  {/* Data Display Card */}
                  <button
                    onClick={() => scrollToSection('data')}
                    className="
                      group p-6 rounded-2xl
                      backdrop-blur-xl bg-gradient-to-br from-slate-500/10 to-gray-500/10
                      border border-white/20
                      hover:border-slate-400/50
                      hover:shadow-2xl hover:shadow-slate-500/20
                      transition-all duration-300
                      text-left
                      hover:scale-105
                    "
                  >
                    <div className="flex items-start gap-4">
                      <div className="
                        w-14 h-14 rounded-xl
                        bg-gradient-to-br from-slate-400/20 to-gray-500/20
                        flex items-center justify-center
                        group-hover:scale-110 transition-transform
                      ">
                        <Database className="text-slate-300" size={28} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-white text-xl font-bold mb-1">Data Display</h3>
                        <p className="text-white/60 text-sm">Tables & data views</p>
                      </div>
                    </div>
                  </button>

                  {/* Color Card */}
                  <button
                    onClick={() => scrollToSection('color')}
                    className="
                      group p-6 rounded-2xl
                      backdrop-blur-xl bg-gradient-to-br from-pink-500/10 to-purple-500/10
                      border border-white/20
                      hover:border-pink-400/50
                      hover:shadow-2xl hover:shadow-pink-500/20
                      transition-all duration-300
                      text-left
                      hover:scale-105
                    "
                  >
                    <div className="flex items-start gap-4">
                      <div className="
                        w-14 h-14 rounded-xl
                        bg-gradient-to-br from-pink-400/20 to-purple-500/20
                        flex items-center justify-center
                        group-hover:scale-110 transition-transform
                      ">
                        <Palette className="text-pink-300" size={28} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-white text-xl font-bold mb-1">Color</h3>
                        <p className="text-white/60 text-sm">Color palette & pickers</p>
                      </div>
                    </div>
                  </button>

                  {/* Toggle Card */}
                  <button
                    onClick={() => scrollToSection('toggle')}
                    className="
                      group p-6 rounded-2xl
                      backdrop-blur-xl bg-gradient-to-br from-blue-500/10 to-indigo-500/10
                      border border-white/20
                      hover:border-blue-400/50
                      hover:shadow-2xl hover:shadow-blue-500/20
                      transition-all duration-300
                      text-left
                      hover:scale-105
                    "
                  >
                    <div className="flex items-start gap-4">
                      <div className="
                        w-14 h-14 rounded-xl
                        bg-gradient-to-br from-blue-400/20 to-indigo-500/20
                        flex items-center justify-center
                        group-hover:scale-110 transition-transform
                      ">
                        <ToggleLeft className="text-blue-300" size={28} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-white text-xl font-bold mb-1">Toggle</h3>
                        <p className="text-white/60 text-sm">Toggle switches</p>
                      </div>
                    </div>
                  </button>

                  {/* Checkbox & Radio Card */}
                  <button
                    onClick={() => scrollToSection('checkboxradio')}
                    className="
                      group p-6 rounded-2xl
                      backdrop-blur-xl bg-gradient-to-br from-green-500/10 to-emerald-500/10
                      border border-white/20
                      hover:border-green-400/50
                      hover:shadow-2xl hover:shadow-green-500/20
                      transition-all duration-300
                      text-left
                      hover:scale-105
                    "
                  >
                    <div className="flex items-start gap-4">
                      <div className="
                        w-14 h-14 rounded-xl
                        bg-gradient-to-br from-green-400/20 to-emerald-500/20
                        flex items-center justify-center
                        group-hover:scale-110 transition-transform
                      ">
                        <CheckSquare className="text-green-300" size={28} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-white text-xl font-bold mb-1">Checkbox & Radio</h3>
                        <p className="text-white/60 text-sm">Checkbox & radio buttons</p>
                      </div>
                    </div>
                  </button>

                  {/* Icons Card */}
                  <button
                    onClick={() => scrollToSection('icons')}
                    className="
                      group p-6 rounded-2xl
                      backdrop-blur-xl bg-gradient-to-br from-gray-500/10 to-gray-500/10
                      border border-white/20
                      hover:border-gray-400/50
                      hover:shadow-2xl hover:shadow-gray-500/20
                      transition-all duration-300
                      text-left
                      hover:scale-105
                    "
                  >
                    <div className="flex items-start gap-4">
                      <div className="
                        w-14 h-14 rounded-xl
                        bg-gradient-to-br from-gray-400/20 to-gray-500/20
                        flex items-center justify-center
                        group-hover:scale-110 transition-transform
                      ">
                        <Boxes className="text-gray-300" size={28} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-white text-xl font-bold mb-1">Icons</h3>
                        <p className="text-white/60 text-sm">Icon library</p>
                      </div>
                    </div>
                  </button>

                  {/* Chat Card */}
                  <button
                    onClick={() => scrollToSection('chat')}
                    className="
                      group p-6 rounded-2xl
                      backdrop-blur-xl bg-gradient-to-br from-blue-500/10 to-indigo-500/10
                      border border-white/20
                      hover:border-blue-400/50
                      hover:shadow-2xl hover:shadow-blue-500/20
                      transition-all duration-300
                      text-left
                      hover:scale-105
                    "
                  >
                    <div className="flex items-start gap-4">
                      <div className="
                        w-14 h-14 rounded-xl
                        bg-gradient-to-br from-blue-400/20 to-indigo-500/20
                        flex items-center justify-center
                        group-hover:scale-110 transition-transform
                      ">
                        <MessageCircle className="text-blue-300" size={28} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-white text-xl font-bold mb-1">Chat</h3>
                        <p className="text-white/60 text-sm">Chat UI</p>
                      </div>
                    </div>
                  </button>

                  {/* Table Card */}
                  <button
                    onClick={() => scrollToSection('table')}
                    className="
                      group p-6 rounded-2xl
                      backdrop-blur-xl bg-gradient-to-br from-green-500/10 to-teal-500/10
                      border border-white/20
                      hover:border-green-400/50
                      hover:shadow-2xl hover:shadow-green-500/20
                      transition-all duration-300
                      text-left
                      hover:scale-105
                    "
                  >
                    <div className="flex items-start gap-4">
                      <div className="
                        w-14 h-14 rounded-xl
                        bg-gradient-to-br from-green-400/20 to-teal-500/20
                        flex items-center justify-center
                        group-hover:scale-110 transition-transform
                      ">
                        <Table className="text-green-300" size={28} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-white text-xl font-bold mb-1">Table</h3>
                        <p className="text-white/60 text-sm">Advanced data tables</p>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Sections按字母顺序排列 (Alphabetical order) */}
          
          {/* Buttons Section */}
          <section id="buttons">
            <ButtonSection addToast={addToast} />
          </section>

          {/* Calendar Section */}
          <section id="calendar">
            <CalendarSection addToast={addToast} />
          </section>

          {/* Cards Section */}
          <section id="cards">
            <CardsSection />
          </section>

          {/* Chat Section */}
          <section id="chat">
            <ChatSection />
          </section>

          {/* Charts Section */}
          <section id="charts">
            <ChartsSection addToast={addToast} />
          </section>

          {/* Checkbox & Radio Section */}
          <section id="checkboxradio">
            <CheckboxRadioSection addToast={addToast} />
          </section>

          {/* Color Section */}
          <section id="color">
            <ColorSection />
          </section>

          {/* Data Section */}
          <section id="data">
            <DataSection />
          </section>

          {/* Feedback Section */}
          <section id="feedback">
            <FeedbackSection addToast={addToast} />
          </section>

          {/* Forms Section */}
          <section id="forms">
            <FormsSection addToast={addToast} />
          </section>

          {/* Grid Section */}
          <section id="grid">
            <GridSection />
          </section>

          {/* Icons Section */}
          <section id="icons">
            <IconsSection addToast={addToast} />
          </section>

          {/* Layout Section */}
          <section id="layout">
            <LayoutSection />
          </section>

          {/* Loading Section */}
          <section id="loading">
            <LoadingSection />
          </section>

          {/* Logo Section */}
          <section id="logo">
            <LogoSection />
          </section>

          {/* Message Section */}
          <section id="message">
            <MessageSection addToast={addToast} />
          </section>

          {/* Modal Section */}
          <section id="modal">
            <ModalSection />
          </section>

          {/* Navigation Section */}
          <section id="navigation">
            <NavigationSection />
          </section>

          {/* Tooltip Section (Popover & Tooltip) */}
          <section id="tooltip">
            <TooltipSection addToast={addToast} />
          </section>

          {/* Search Section */}
          <section id="search">
            <SearchSection addToast={addToast} />
          </section>

          {/* Table Section */}
          <section id="table">
            <TableSection />
          </section>

          {/* Toggle Section */}
          <section id="toggle">
            <ToggleSection addToast={addToast} />
          </section>

          {/* Fonts Section (Typography) */}
          <section id="fonts">
            <FontsSection />
          </section>

          {/* Map Section */}
          <section id="usmap">
            <USMapSection addToast={addToast} />
          </section>
        </div>
      </div>
    </div>
  );
}