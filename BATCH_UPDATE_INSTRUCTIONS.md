# 批量更新所有 Section 文件 - 详细指令

## 已完成 ✅
- button-section.tsx

## 需要更新的文件列表

对每个文件执行以下两步：

### 步骤 1: 添加 import 语句
在每个文件的 import 区域添加：
```typescript
import { CodeBlock } from '../components/code-block';
import { sectionCodeSamples } from '../utils/section-code-samples';
```

### 步骤 2: 在返回的 JSX 末尾添加 CodeBlock

在每个 section 函数的 return 语句中，最外层 `</div>` 之前添加：

---

## 1. calendar-section.tsx
```typescript
<CodeBlock code={sectionCodeSamples.calendarSection} />
```

## 2. cards-section.tsx  
```typescript
<CodeBlock code={sectionCodeSamples.cardsSection} />
```

## 3. chat-section.tsx
```typescript
<CodeBlock code={sectionCodeSamples.chatSection} />
```

## 4. charts-section.tsx
```typescript
<CodeBlock code={sectionCodeSamples.chartsSection} />
```

## 5. checkbox-radio-section.tsx
```typescript
<CodeBlock code={sectionCodeSamples.checkboxRadioSection} />
```

## 6. color-section.tsx
```typescript
<CodeBlock code={sectionCodeSamples.colorSection} />
```

## 7. data-section.tsx
```typescript
<CodeBlock code={sectionCodeSamples.dataSection} />
```

## 8. feedback-section.tsx
```typescript
<CodeBlock code={sectionCodeSamples.feedbackSection} />
```

## 9. fonts-section.tsx
```typescript
<CodeBlock code={sectionCodeSamples.fontsSection} />
```

## 10. forms-section.tsx
```typescript
<CodeBlock code={sectionCodeSamples.formsSection} />
```

## 11. grid-section.tsx
```typescript
<CodeBlock code={sectionCodeSamples.gridSection} />
```

## 12. icons-section.tsx
```typescript
<CodeBlock code={sectionCodeSamples.iconsSection} />
```

## 13. layout-section.tsx
```typescript
<CodeBlock code={sectionCodeSamples.layoutSection} />
```

## 14. loading-section.tsx
```typescript
<CodeBlock code={sectionCodeSamples.loadingSection} />
```

## 15. logo-section.tsx
```typescript
<CodeBlock code={sectionCodeSamples.logoSection} />
```

## 16. maps-section.tsx
```typescript
<CodeBlock code={sectionCodeSamples.mapsSection} />
```

## 17. message-section.tsx
```typescript
<CodeBlock code={sectionCodeSamples.messageSection} />
```

## 18. modal-section.tsx
```typescript
<CodeBlock code={sectionCodeSamples.modalSection} />
```

## 19. navigation-section.tsx
```typescript
<CodeBlock code={sectionCodeSamples.navigationSection} />
```

## 20. search-section.tsx
```typescript
<CodeBlock code={sectionCodeSamples.searchSection} />
```

## 21. table-section.tsx
```typescript
<CodeBlock code={sectionCodeSamples.tableSection} />
```

## 22. toggle-section.tsx
```typescript
<CodeBlock code={sectionCodeSamples.toggleSection} />
```

## 23. tooltip-section.tsx
```typescript
<CodeBlock code={sectionCodeSamples.tooltipSection} />
```

## 24. usmap-section.tsx
```typescript
<CodeBlock code={sectionCodeSamples.usmapSection} />
```

---

## 完整示例（参考 button-section.tsx）

```typescript
import React from 'react';
// ... 其他 imports
import { CodeBlock } from '../components/code-block';
import { sectionCodeSamples } from '../utils/section-code-samples';

export function ButtonSection({ addToast }: ButtonSectionProps) {
  return (
    <div className="space-y-8">
      {/* 所有现有内容 */}
      
      {/* 在最后添加 CodeBlock */}
      <CodeBlock code={sectionCodeSamples.buttonSection} />
    </div>
  );
}
```

## 验证
更新后，每个 section 底部应该显示一个代码展示框，包含：
- 固定高度 (h-96)
- 可滚动内容
- 右上角复制按钮
- 代码语法示例
