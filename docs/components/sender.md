# Sender 输入框

> 用户输入和发送消息的核心组件

**源码位置**: `packages/x/components/sender/`

**文件数**: 约 20+ 文件

## 📁 源码目录结构

```
components/sender/
├── Sender.tsx                 # 主组件
├── SenderHeader.tsx           # 头部组件
├── SenderSwitch.tsx           # 切换组件
├── TextArea.tsx               # 文本域组件
├── SlotTextArea.tsx           # 插槽文本域
├── ActionButton.tsx           # 操作按钮
├── SpeechButton.tsx           # 语音按钮
├── context.ts                 # Context 定义
├── interface.ts               # 类型定义
├── index.tsx                  # 导出入口
├── hooks/                     # 自定义 Hooks
│   ├── use-speech.ts          # 语音识别
│   ├── use-sender.ts          # 发送逻辑
│   └── ...
├── components/                # 子组件
├── style/                     # 样式
└── demo/                      # 演示示例
```

## 🔑 核心接口

**源文件**: `components/sender/interface.ts`

### SenderProps

```typescript
interface SenderProps extends Partial<
  Pick<TextareaProps, 'placeholder' | 'onKeyUp' | 'onFocus' | 'onBlur'>
> {
  // ========== 基础属性 ==========
  
  prefixCls?: string;
  
  /**
   * 默认值
   */
  defaultValue?: string;
  
  /**
   * 当前值
   */
  value?: string;
  
  /**
   * 占位符
   */
  placeholder?: string;
  
  // ========== 状态属性 ==========
  
  /**
   * 加载状态
   * @default false
   */
  loading?: boolean;
  
  /**
   * 只读模式
   * @default false
   */
  readOnly?: boolean;
  
  /**
   * 禁用状态
   * @default false
   */
  disabled?: boolean;
  
  // ========== 提交配置 ==========
  
  /**
   * 提交触发方式
   * @default 'enter'
   */
  submitType?: 'enter' | 'shiftEnter';
  
  // ========== Slot 配置 ==========
  
  /**
   * Slot 配置项（文本/输入框/选择框/标签/自定义/内容/技能）
   */
  slotConfig?: SlotConfigType[];
  
  /**
   * 技能配置
   */
  skill?: SkillType;
  
  // ========== 回调函数 ==========
  
  /**
   * 提交回调
   */
  onSubmit?: (message: string, slotConfig?: SlotConfigType[], skill?: SkillType) => void;
  
  /**
   * 变更回调
   */
  onChange?: (
    value: string,
    event?: EventType,
    slotConfig?: SlotConfigType[],
    skill?: SkillType
  ) => void;
  
  /**
   * 取消回调
   */
  onCancel?: VoidFunction;
  
  /**
   * 键盘事件
   */
  onKeyDown?: (event: React.KeyboardEvent) => void | false;
  
  /**
   * 粘贴事件
   */
  onPaste?: React.ClipboardEventHandler<HTMLElement>;
  
  /**
   * 粘贴文件回调
   */
  onPasteFile?: (files: FileList) => void;
  
  // ========== 组件定制 ==========
  
  /**
   * 自定义组件
   */
  components?: SenderComponents;
  
  // ========== 插槽 ==========
  
  /**
   * 前缀插槽
   */
  prefix?: BaseNode | NodeRender;
  
  /**
   * 后缀插槽
   */
  suffix?: BaseNode | NodeRender;
  
  /**
   * 底部插槽
   */
  footer?: BaseNode | NodeRender;
  
  /**
   * 头部插槽
   */
  header?: BaseNode | NodeRender;
  
  /**
   * 允许语音配置
   */
  allowSpeech?: AllowSpeech;
  
  // ========== 样式 ==========
  
  /**
   * 类名前缀
   */
  prefixCls?: string;
  
  /**
   * 自定义样式映射
   */
  styles?: Partial<Record<SemanticType, React.CSSProperties>>;
  
  /**
   * 自定义类名映射
   */
  classNames?: Partial<Record<SemanticType, string>>;
  
  /**
   * 根元素类名
   */
  rootClassName?: string;
  
  // ========== 其他 ==========
  
  /**
   * 自动大小
   */
  autoSize?: boolean | { minRows?: number; maxRows?: number };
}
```

### 类型定义

```typescript
// 提交触发类型
type SubmitType = 'enter' | 'shiftEnter';

// 语义化类型
type SemanticType = 
  | 'root'
  | 'prefix'
  | 'input'
  | 'suffix'
  | 'footer'
  | 'switch'
  | 'content';

// 插槽配置类型
type SlotConfigType =
  | SlotConfigTextType
  | SlotConfigInputType
  | SlotConfigSelectType
  | SlotConfigTagType
  | SlotConfigCustomType
  | SlotConfigContentType;

// 插槽节点渲染
type BaseNode = React.ReactNode | false;
type NodeRender = (
  oriNode: React.ReactNode,
  info: {
    components: ActionsComponents;
  },
) => BaseNode;

// 技能类型
interface SkillType {
  title?: React.ReactNode;
  value: string;
  toolTip?: TooltipProps;
  closable?: boolean | {
    closeIcon?: React.ReactNode;
    onClose?: React.MouseEventHandler<HTMLDivElement>;
    disabled?: boolean;
  };
}

// 语音配置
type AllowSpeech = boolean | {
  // 语音配置项
};
```

### SlotConfigType 详解

```typescript
// 文本插槽
interface SlotConfigTextType {
  type: 'text';
  value?: string;
  editable?: boolean;
  placeholder?: string;
  key?: string;
}

// 输入框插槽
interface SlotConfigInputType {
  type: 'input';
  key: string;
  props?: {
    defaultValue?: string;
    placeholder?: string;
  };
}

// 选择框插槽
interface SlotConfigSelectType {
  type: 'select';
  key: string;
  props?: {
    defaultValue?: string;
    options: string[];
    placeholder?: string;
  };
}

// 标签插槽
interface SlotConfigTagType {
  type: 'tag';
  key: string;
  props?: {
    label: React.ReactNode;
    value?: string;
  };
}

// 自定义插槽
interface SlotConfigCustomType {
  type: 'custom';
  key: string;
  props?: {
    defaultValue?: any;
    [key: string]: any;
  };
  customRender?: (
    value: any,
    onChange: (value: any) => void,
    props: { disabled?: boolean; readOnly?: boolean },
    item: SlotConfigType,
  ) => React.ReactNode;
}

// 内容插槽
interface SlotConfigContentType {
  type: 'content';
  key: string;
  props?: {
    defaultValue?: any;
    placeholder?: string;
  };
}
```

## 📝 使用示例

### 示例 1: 基础用法

```tsx
import { Sender } from '@ant-design/x';

<Sender
  onSubmit={(message) => {
    sendMessage(message);
  }}
/>
```

### 示例 2: 受控模式

```tsx
const [value, setValue] = useState('');

<Sender
  value={value}
  onChange={(val) => setValue(val)}
  onSubmit={(message) => {
    sendMessage(message);
    setValue('');
  }}
/>
```

### 示例 3: Slot 配置

```tsx
<Sender
  slotConfig={[
    {
      type: 'text',
      value: '请问',
      placeholder: '输入前缀',
    },
    {
      type: 'input',
      key: 'keyword',
      props: {
        defaultValue: '关键词',
        placeholder: '请输入关键词',
      },
    },
    {
      type: 'select',
      key: 'category',
      props: {
        options: ['类别 1', '类别 2', '类别 3'],
        placeholder: '选择类别',
      },
    },
  ]}
  onSubmit={(message, slotConfig) => {
    console.log('消息:', message);
    console.log('Slot 配置:', slotConfig);
  }}
/>
```

### 示例 4: 技能配置

```tsx
<Sender
  skill={{
    title: '分析师角色',
    value: 'data-analyst',
    toolTip: { title: '数据分析专家' },
    closable: true,
  }}
  onSubmit={(message, slotConfig, skill) => {
    console.log('技能:', skill);
  }}
/>
```

### 示例 5: 加载状态

```tsx
<Sender
  value={inputValue}
  loading={isSubmitting}
  onSubmit={(message) => {
    setIsSubmitting(true);
    // 异步处理...
    setIsSubmitting(false);
  }}
  onCancel={() => {
    setIsSubmitting(false);
  }}
/>
```

### 示例 6: 自定义组件

```tsx
import type { SenderComponents } from '@ant-design/x';

const customInput: React.ComponentType<TextareaProps> = (props) => (
  <CustomInput {...props} className="custom" />
);

<Sender
  components={{ input: customInput }}
  onSubmit={(message) => sendMessage(message)}
/>
```

### 示例 7: 自定义插槽渲染

```tsx
<Sender
  prefix={(oriNode, { components }) => (
    <div className="custom-prefix">
      {oriNode}
    </div>
  )}
  suffix={(oriNode, { components }) => (
    <div className="custom-suffix">
      {components.SpeechButton && <components.SpeechButton />}
    </div>
  )}
/>
```

### 示例 8: 自动大小

```tsx
<Sender
  autoSize={{ minRows: 2, maxRows: 6 }}
  placeholder="支持多行输入..."
/>
```

## 💡 最佳实践

### ✅ 推荐

```tsx
// 1. 使用 slotConfig 配置表单式输入
<Sender
  slotConfig={[
    { type: 'text', value: '请分析' },
    { type: 'select', key: 'model', options: ['模型 1', '模型 2'] },
  ]}
/>

// 2. 技能配置为受控模式
const [skill, setSkill] = useState<SkillType | null>(null);
<Sender skill={skill} />

// 3. 使用 autoSize 支持多行输入
<Sender autoSize={{ minRows: 2, maxRows: 6 }} />
```

### ❌ 不推荐

```tsx
// 1. 不要使用不存在的 actions 属性
<Sender actions={[...]} /> // ❌ 错误

// 2. 避免忘记处理 loading 状态
<Sender loading={loading} /> // ✅ 显示加载状态

// 3. 避免忘记调用 onSubmit 回调
<Sender onSubmit={(msg) => {/* 必须处理 */}} />
```

---

**源码参考**: `packages/x/components/sender/`