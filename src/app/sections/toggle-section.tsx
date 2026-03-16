import React, { useState } from 'react';
import { GlassCard } from '../components/glass-card';
import { GlassToggle } from '../components/glass-toggle';
import { Bell, BellOff, Mail, Volume2, VolumeX, Wifi, WifiOff, Bluetooth, Moon, Sun } from 'lucide-react';
import { CodeBlock } from '../components/code-block';
import { sectionCodeSamples } from '../utils/section-code-samples';

interface ToggleSectionProps {
  addToast: (variant: any, message: string, options?: any) => void;
}

export function ToggleSection({ addToast }: ToggleSectionProps) {
  const [wifi, setWifi] = useState(true);
  const [notifications, setNotifications] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [sound, setSound] = useState(true);
  const [feature1, setFeature1] = useState(false);
  const [feature2, setFeature2] = useState(true);
  const [feature3, setFeature3] = useState(false);

  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h2 className="text-5xl text-white font-bold mb-4 bg-gradient-to-r from-green-300 to-emerald-300 bg-clip-text text-transparent">
          Toggle Switches
        </h2>
        <p className="text-white/70 text-lg">
          Beautiful toggle switches with smooth animations
        </p>
      </div>

      {/* Basic Toggles */}
      <GlassCard padding="lg">
        <h3 className="text-white text-2xl mb-6">Basic Toggles</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex flex-col gap-3">
            <GlassToggle
              checked={true}
              onChange={() => {}}
              size="sm"
            />
            <span className="text-white/60 text-sm text-center">Small</span>
          </div>
          
          <div className="flex flex-col gap-3">
            <GlassToggle
              checked={true}
              onChange={() => {}}
              size="md"
            />
            <span className="text-white/60 text-sm text-center">Medium</span>
          </div>
          
          <div className="flex flex-col gap-3">
            <GlassToggle
              checked={true}
              onChange={() => {}}
              size="lg"
            />
            <span className="text-white/60 text-sm text-center">Large</span>
          </div>

          <div className="flex flex-col gap-3">
            <GlassToggle
              checked={false}
              onChange={() => {}}
              size="md"
              disabled
            />
            <span className="text-white/60 text-sm text-center">Disabled</span>
          </div>
        </div>
      </GlassCard>

      {/* Toggle Variants */}
      <GlassCard padding="lg">
        <h3 className="text-white text-2xl mb-6">Toggle Variants</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex flex-col items-center gap-3">
            <GlassToggle
              checked={true}
              onChange={() => {}}
              variant="primary"
            />
            <span className="text-white/60 text-sm">Primary</span>
          </div>
          
          <div className="flex flex-col items-center gap-3">
            <GlassToggle
              checked={true}
              onChange={() => {}}
              variant="success"
            />
            <span className="text-white/60 text-sm">Success</span>
          </div>
          
          <div className="flex flex-col items-center gap-3">
            <GlassToggle
              checked={true}
              onChange={() => {}}
              variant="warning"
            />
            <span className="text-white/60 text-sm">Warning</span>
          </div>
          
          <div className="flex flex-col items-center gap-3">
            <GlassToggle
              checked={true}
              onChange={() => {}}
              variant="danger"
            />
            <span className="text-white/60 text-sm">Danger</span>
          </div>
        </div>
      </GlassCard>

      {/* Interactive Toggles with Icons */}
      <GlassCard padding="lg">
        <h3 className="text-white text-2xl mb-6">Interactive Toggles</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
            <div className="flex items-center gap-3">
              {wifi ? <Wifi className="text-blue-400" size={24} /> : <WifiOff className="text-white/40" size={24} />}
              <div>
                <h4 className="text-white font-semibold">Wi-Fi</h4>
                <p className="text-white/60 text-sm">{wifi ? 'Connected' : 'Disconnected'}</p>
              </div>
            </div>
            <GlassToggle
              checked={wifi}
              onChange={(checked) => {
                setWifi(checked);
                addToast(checked ? 'success' : 'info', checked ? 'Wi-Fi enabled' : 'Wi-Fi disabled');
              }}
              variant="primary"
            />
          </div>

          <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
            <div className="flex items-center gap-3">
              {notifications ? <Bell className="text-yellow-400" size={24} /> : <BellOff className="text-white/40" size={24} />}
              <div>
                <h4 className="text-white font-semibold">Notifications</h4>
                <p className="text-white/60 text-sm">{notifications ? 'Enabled' : 'Disabled'}</p>
              </div>
            </div>
            <GlassToggle
              checked={notifications}
              onChange={(checked) => {
                setNotifications(checked);
                addToast(checked ? 'success' : 'info', checked ? 'Notifications enabled' : 'Notifications disabled');
              }}
              variant="warning"
            />
          </div>

          <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
            <div className="flex items-center gap-3">
              {darkMode ? <Moon className="text-purple-400" size={24} /> : <Sun className="text-white/40" size={24} />}
              <div>
                <h4 className="text-white font-semibold">Dark Mode</h4>
                <p className="text-white/60 text-sm">{darkMode ? 'On' : 'Off'}</p>
              </div>
            </div>
            <GlassToggle
              checked={darkMode}
              onChange={(checked) => {
                setDarkMode(checked);
                addToast('info', checked ? 'Dark mode enabled' : 'Light mode enabled');
              }}
              variant="primary"
            />
          </div>

          <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
            <div className="flex items-center gap-3">
              {sound ? <Volume2 className="text-green-400" size={24} /> : <VolumeX className="text-white/40" size={24} />}
              <div>
                <h4 className="text-white font-semibold">Sound</h4>
                <p className="text-white/60 text-sm">{sound ? 'On' : 'Muted'}</p>
              </div>
            </div>
            <GlassToggle
              checked={sound}
              onChange={(checked) => {
                setSound(checked);
                addToast(checked ? 'success' : 'info', checked ? 'Sound enabled' : 'Sound muted');
              }}
              variant="success"
            />
          </div>
        </div>
      </GlassCard>

      {/* Settings List */}
      <GlassCard padding="lg">
        <h3 className="text-white text-2xl mb-6">Settings</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between py-3 border-b border-white/10">
            <div>
              <h4 className="text-white font-medium">Auto-save</h4>
              <p className="text-white/60 text-sm">Automatically save changes</p>
            </div>
            <GlassToggle
              checked={feature1}
              onChange={(checked) => {
                setFeature1(checked);
                addToast('success', checked ? 'Auto-save enabled' : 'Auto-save disabled');
              }}
            />
          </div>

          <div className="flex items-center justify-between py-3 border-b border-white/10">
            <div>
              <h4 className="text-white font-medium">Email notifications</h4>
              <p className="text-white/60 text-sm">Receive updates via email</p>
            </div>
            <GlassToggle
              checked={feature2}
              onChange={(checked) => {
                setFeature2(checked);
                addToast('success', checked ? 'Email notifications enabled' : 'Email notifications disabled');
              }}
            />
          </div>

          <div className="flex items-center justify-between py-3">
            <div>
              <h4 className="text-white font-medium">Two-factor authentication</h4>
              <p className="text-white/60 text-sm">Add an extra layer of security</p>
            </div>
            <GlassToggle
              checked={feature3}
              onChange={(checked) => {
                setFeature3(checked);
                addToast(checked ? 'success' : 'warning', checked ? '2FA enabled' : '2FA disabled');
              }}
              variant={feature3 ? 'success' : 'primary'}
            />
          </div>
        </div>
      </GlassCard>

      {/* Compact Toggles */}
      <GlassCard padding="lg">
        <h3 className="text-white text-2xl mb-6">Compact View</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {[
            { label: 'Feature A', checked: true },
            { label: 'Feature B', checked: false },
            { label: 'Feature C', checked: true },
            { label: 'Feature D', checked: false },
            { label: 'Feature E', checked: true },
            { label: 'Feature F', checked: false },
            { label: 'Feature G', checked: true },
            { label: 'Feature H', checked: false },
            { label: 'Feature I', checked: true },
            { label: 'Feature J', checked: false }
          ].map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <GlassToggle
                checked={item.checked}
                onChange={() => addToast('info', `${item.label} toggled`)}
                size="sm"
              />
              <span className="text-white/70 text-sm">{item.label}</span>
            </div>
          ))}
        </div>
      </GlassCard>

      {/* Code Samples */}
      <GlassCard padding="lg">
        <h3 className="text-white text-2xl mb-6">Code Samples</h3>
        <div className="space-y-4">
          <CodeBlock
            code={sectionCodeSamples.toggleSection.basicToggles}
            language="tsx"
          />
          <CodeBlock
            code={sectionCodeSamples.toggleSection.toggleVariants}
            language="tsx"
          />
          <CodeBlock
            code={sectionCodeSamples.toggleSection.interactiveToggles}
            language="tsx"
          />
          <CodeBlock
            code={sectionCodeSamples.toggleSection.settingsList}
            language="tsx"
          />
          <CodeBlock
            code={sectionCodeSamples.toggleSection.compactToggles}
            language="tsx"
          />
        </div>
      </GlassCard>
    </div>
  );
}