import React, { useState } from 'react';
import { GlassCard } from '../components/glass-card';
import { GlassCheckbox } from '../components/glass-checkbox';
import { GlassRadio } from '../components/glass-radio';
import { CodeBlock } from '../components/code-block';
import { sectionCodeSamples } from '../utils/section-code-samples';

interface CheckboxRadioSectionProps {
  addToast: (variant: any, message: string, options?: any) => void;
}

export function CheckboxRadioSection({ addToast }: CheckboxRadioSectionProps) {
  const [singleCheck, setSingleCheck] = useState(false);
  const [checks, setChecks] = useState({
    option1: true,
    option2: false,
    option3: true,
    option4: false
  });
  const [selectedPlan, setSelectedPlan] = useState('pro');
  const [selectedColor, setSelectedColor] = useState('blue');
  const [selectedSize, setSelectedSize] = useState('medium');

  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h2 className="text-5xl text-white font-bold mb-4 bg-gradient-to-r from-teal-300 to-cyan-300 bg-clip-text text-transparent">
          Checkbox & Radio Button
        </h2>
        <p className="text-white/70 text-lg">
          Selection controls with glassmorphism effects
        </p>
      </div>

      {/* Basic Checkboxes */}
      <GlassCard padding="lg">
        <h3 className="text-white text-2xl mb-6">Checkboxes</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex flex-col gap-3">
            <GlassCheckbox
              checked={true}
              onChange={() => {}}
              label="Checked"
            />
          </div>
          
          <div className="flex flex-col gap-3">
            <GlassCheckbox
              checked={false}
              onChange={() => {}}
              label="Unchecked"
            />
          </div>
          
          <div className="flex flex-col gap-3">
            <GlassCheckbox
              checked={true}
              onChange={() => {}}
              label="Disabled"
              disabled
            />
          </div>

          <div className="flex flex-col gap-3">
            <GlassCheckbox
              checked={singleCheck}
              onChange={(checked) => {
                setSingleCheck(checked);
                addToast('info', checked ? 'Checked' : 'Unchecked');
              }}
              label="Interactive"
            />
          </div>
        </div>
      </GlassCard>

      {/* Checkbox Sizes */}
      <GlassCard padding="lg">
        <h3 className="text-white text-2xl mb-6">Checkbox Sizes</h3>
        <div className="flex items-center gap-8">
          <GlassCheckbox
            checked={true}
            onChange={() => {}}
            label="Small"
            size="sm"
          />
          <GlassCheckbox
            checked={true}
            onChange={() => {}}
            label="Medium"
            size="md"
          />
          <GlassCheckbox
            checked={true}
            onChange={() => {}}
            label="Large"
            size="lg"
          />
        </div>
      </GlassCard>

      {/* Checkbox Group */}
      <GlassCard padding="lg">
        <h3 className="text-white text-2xl mb-6">Checkbox Group</h3>
        <div className="space-y-4">
          <GlassCheckbox
            checked={checks.option1}
            onChange={(checked) => {
              setChecks({ ...checks, option1: checked });
              addToast('success', 'Receive email notifications');
            }}
            label="Receive email notifications"
            description="Get updates about your account activity"
          />
          <GlassCheckbox
            checked={checks.option2}
            onChange={(checked) => {
              setChecks({ ...checks, option2: checked });
              addToast('success', 'SMS notifications');
            }}
            label="SMS notifications"
            description="Receive text messages for important updates"
          />
          <GlassCheckbox
            checked={checks.option3}
            onChange={(checked) => {
              setChecks({ ...checks, option3: checked });
              addToast('success', 'Push notifications');
            }}
            label="Push notifications"
            description="Get push notifications on your devices"
          />
          <GlassCheckbox
            checked={checks.option4}
            onChange={(checked) => {
              setChecks({ ...checks, option4: checked });
              addToast('success', 'Marketing emails');
            }}
            label="Marketing emails"
            description="Receive news and special offers"
          />
        </div>
      </GlassCard>

      {/* Basic Radio Buttons */}
      <GlassCard padding="lg">
        <h3 className="text-white text-2xl mb-6">Radio Buttons</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <GlassRadio
            checked={true}
            onChange={() => {}}
            label="Selected"
            name="demo1"
          />
          <GlassRadio
            checked={false}
            onChange={() => {}}
            label="Unselected"
            name="demo1"
          />
          <GlassRadio
            checked={true}
            onChange={() => {}}
            label="Disabled"
            name="demo2"
            disabled
          />
          <GlassRadio
            checked={false}
            onChange={() => {}}
            label="Disabled"
            name="demo3"
            disabled
          />
        </div>
      </GlassCard>

      {/* Radio Button Sizes */}
      <GlassCard padding="lg">
        <h3 className="text-white text-2xl mb-6">Radio Button Sizes</h3>
        <div className="flex items-center gap-8">
          <GlassRadio
            checked={true}
            onChange={() => {}}
            label="Small"
            size="sm"
            name="size-demo"
          />
          <GlassRadio
            checked={false}
            onChange={() => {}}
            label="Medium"
            size="md"
            name="size-demo"
          />
          <GlassRadio
            checked={false}
            onChange={() => {}}
            label="Large"
            size="lg"
            name="size-demo"
          />
        </div>
      </GlassCard>

      {/* Radio Group - Pricing Plans */}
      <GlassCard padding="lg">
        <h3 className="text-white text-2xl mb-6">Select a Plan</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div
            onClick={() => {
              setSelectedPlan('basic');
              addToast('info', 'Basic plan selected');
            }}
            className={`p-6 rounded-2xl border-2 transition-all cursor-pointer ${
              selectedPlan === 'basic'
                ? 'bg-blue-500/20 border-blue-400/50'
                : 'bg-white/5 border-white/10 hover:border-white/20'
            }`}
          >
            <GlassRadio
              checked={selectedPlan === 'basic'}
              onChange={() => setSelectedPlan('basic')}
              label="Basic"
              name="plan"
              size="lg"
            />
            <div className="mt-4">
              <p className="text-3xl text-white font-bold">$9<span className="text-lg text-white/60">/mo</span></p>
              <ul className="mt-4 space-y-2 text-white/70 text-sm">
                <li>✓ 10 Projects</li>
                <li>✓ 5GB Storage</li>
                <li>✓ Basic Support</li>
              </ul>
            </div>
          </div>

          <div
            onClick={() => {
              setSelectedPlan('pro');
              addToast('info', 'Pro plan selected');
            }}
            className={`p-6 rounded-2xl border-2 transition-all cursor-pointer ${
              selectedPlan === 'pro'
                ? 'bg-purple-500/20 border-purple-400/50'
                : 'bg-white/5 border-white/10 hover:border-white/20'
            }`}
          >
            <div className="flex items-center justify-between">
              <GlassRadio
                checked={selectedPlan === 'pro'}
                onChange={() => setSelectedPlan('pro')}
                label="Pro"
                name="plan"
                size="lg"
              />
              <span className="px-3 py-1 bg-purple-500/30 text-purple-300 text-xs rounded-full font-semibold">Popular</span>
            </div>
            <div className="mt-4">
              <p className="text-3xl text-white font-bold">$29<span className="text-lg text-white/60">/mo</span></p>
              <ul className="mt-4 space-y-2 text-white/70 text-sm">
                <li>✓ 100 Projects</li>
                <li>✓ 50GB Storage</li>
                <li>✓ Priority Support</li>
                <li>✓ Advanced Features</li>
              </ul>
            </div>
          </div>

          <div
            onClick={() => {
              setSelectedPlan('enterprise');
              addToast('info', 'Enterprise plan selected');
            }}
            className={`p-6 rounded-2xl border-2 transition-all cursor-pointer ${
              selectedPlan === 'enterprise'
                ? 'bg-pink-500/20 border-pink-400/50'
                : 'bg-white/5 border-white/10 hover:border-white/20'
            }`}
          >
            <GlassRadio
              checked={selectedPlan === 'enterprise'}
              onChange={() => setSelectedPlan('enterprise')}
              label="Enterprise"
              name="plan"
              size="lg"
            />
            <div className="mt-4">
              <p className="text-3xl text-white font-bold">$99<span className="text-lg text-white/60">/mo</span></p>
              <ul className="mt-4 space-y-2 text-white/70 text-sm">
                <li>✓ Unlimited Projects</li>
                <li>✓ 500GB Storage</li>
                <li>✓ 24/7 Support</li>
                <li>✓ Custom Integration</li>
              </ul>
            </div>
          </div>
        </div>
      </GlassCard>

      {/* Radio Group - Colors */}
      <GlassCard padding="lg">
        <h3 className="text-white text-2xl mb-6">Select Color</h3>
        <div className="space-y-3">
          {[
            { value: 'blue', label: 'Ocean Blue', color: 'bg-blue-500' },
            { value: 'purple', label: 'Royal Purple', color: 'bg-purple-500' },
            { value: 'pink', label: 'Rose Pink', color: 'bg-pink-500' },
            { value: 'green', label: 'Emerald Green', color: 'bg-green-500' },
            { value: 'orange', label: 'Sunset Orange', color: 'bg-orange-500' }
          ].map((color) => (
            <div
              key={color.value}
              onClick={() => {
                setSelectedColor(color.value);
                addToast('info', `${color.label} selected`);
              }}
              className={`flex items-center gap-4 p-4 rounded-xl border transition-all cursor-pointer ${
                selectedColor === color.value
                  ? 'bg-white/10 border-white/30'
                  : 'bg-white/5 border-white/10 hover:bg-white/8'
              }`}
            >
              <div className={`w-8 h-8 rounded-lg ${color.color}`} />
              <GlassRadio
                checked={selectedColor === color.value}
                onChange={() => setSelectedColor(color.value)}
                label={color.label}
                name="color"
              />
            </div>
          ))}
        </div>
      </GlassCard>

      {/* Radio Group - Sizes */}
      <GlassCard padding="lg">
        <h3 className="text-white text-2xl mb-6">Select Size</h3>
        <div className="flex gap-4">
          {['small', 'medium', 'large', 'xl'].map((size) => (
            <div
              key={size}
              onClick={() => {
                setSelectedSize(size);
                addToast('info', `${size.toUpperCase()} selected`);
              }}
              className={`flex-1 p-6 rounded-2xl border-2 transition-all cursor-pointer text-center ${
                selectedSize === size
                  ? 'bg-cyan-500/20 border-cyan-400/50'
                  : 'bg-white/5 border-white/10 hover:border-white/20'
              }`}
            >
              <GlassRadio
                checked={selectedSize === size}
                onChange={() => setSelectedSize(size)}
                label={size.toUpperCase()}
                name="size"
              />
            </div>
          ))}
        </div>
      </GlassCard>

      {/* Mixed Group */}
      <GlassCard padding="lg">
        <h3 className="text-white text-2xl mb-6">Preferences</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-white font-semibold mb-4">Notifications</h4>
            <div className="space-y-3">
              <GlassCheckbox
                checked={true}
                onChange={() => addToast('info', 'Toggle notification')}
                label="All notifications"
              />
              <GlassCheckbox
                checked={false}
                onChange={() => addToast('info', 'Toggle notification')}
                label="Comments only"
              />
              <GlassCheckbox
                checked={true}
                onChange={() => addToast('info', 'Toggle notification')}
                label="Mentions only"
              />
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Theme</h4>
            <div className="space-y-3">
              <GlassRadio
                checked={true}
                onChange={() => addToast('info', 'Theme changed')}
                label="Dark theme"
                name="theme"
              />
              <GlassRadio
                checked={false}
                onChange={() => addToast('info', 'Theme changed')}
                label="Light theme"
                name="theme"
              />
              <GlassRadio
                checked={false}
                onChange={() => addToast('info', 'Theme changed')}
                label="Auto (system)"
                name="theme"
              />
            </div>
          </div>
        </div>
      </GlassCard>

      {/* Code Samples */}
      <CodeBlock
        title="Checkbox & Radio Button Code Samples"
        code={sectionCodeSamples.checkboxRadioSection}
      />
    </div>
  );
}