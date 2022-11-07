# Dom

dom 操作相关工具库

## 安装

```bash
npm i @justichentai/dom
```

## 使用

```ts
import { xxx } from '@justichentai/dom'
```

## Api

### Clipboard

将内容复制到粘贴板

```ts
import { clipboard } from '@justichentai/dom'

await clipboard(text)
```

```ts
async function clipboard(text: string): Promise<void>
```
