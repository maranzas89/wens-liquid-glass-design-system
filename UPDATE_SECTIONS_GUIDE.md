# 更新所有 Section 文件指南

## 概述
需要为每个 section 文件添加 CodeBlock 组件，在文件底部显示该 section 的完整源代码。

## 已完成
- ✅ button-section.tsx

## 待完成列表
以下24个 section 文件需要添加 CodeBlock：

1. calendar-section.tsx
2. cards-section.tsx
3. chat-section.tsx
4. charts-section.tsx
5. checkbox-radio-section.tsx
6. color-section.tsx
7. data-section.tsx
8. feedback-section.tsx
9. fonts-section.tsx
10. forms-section.tsx
11. grid-section.tsx
12. icons-section.tsx
13. layout-section.tsx
14. loading-section.tsx
15. logo-section.tsx
16. maps-section.tsx
17. message-section.tsx
18. modal-section.tsx
19. navigation-section.tsx
20. search-section.tsx
21. table-section.tsx
22. toggle-section.tsx
23. tooltip-section.tsx
24. usmap-section.tsx

## 更新步骤

对于每个文件：

### 1. 添加 import
在文件顶部的 import 语句中添加：
```typescript
import { CodeBlock } from '../components/code-block';
```

### 2. 在返回的 JSX 末尾添加 CodeBlock
在最外层的 `</div>` 之前（return 语句中的最后一个组件区域），添加：

```typescript
<CodeBlock code={`完整的文件源代码内容`} />
```

注意：code 属性中的内容应该是该文件的完整源代码（不包括 CodeBlock 本身）。

### 示例（button-section.tsx）
```typescript
export function ButtonSection({ addToast }: ButtonSectionProps) {
  return (
    <div className="space-y-8">
      {/* 所有现有内容 */}
      
      {/* 在末尾添加 CodeBlock */}
      <CodeBlock code={`import React from 'react';
import { GlassCard } from '../components/glass-card';
// ... 完整的文件内容
}`} />
    </div>
  );
}
```

## 注意事项
- CodeBlock 中的代码字符串使用模板字符串（反引号）
- 需要转义代码中的反引号（如果有）
- 确保代码格式保持整洁
- 高度固定为 h-96（在 CodeBlock 组件中已设置）
- 复制功能已在 CodeBlock 组件中实现
