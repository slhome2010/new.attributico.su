---
sidebar_position: 6
---

# Value Comparison

Value comparison occurs both during editing and batch processing using **Tools**.

Values are updated after editing is completed when the editor is closed. By default, replacement is performed based on substring matching.

Example: replacing `MP4` → `MP3`:

- **By substring match**: `MP4/AVI` → `MP3/AVI`
- **By exact match**: `50` → `50g`, but `50-100` remains unchanged.

:::info
Difference between editing **Templates** and **Values**.  
Editing **Values** can be done by substring match or exact match. **Templates** are always fully replaced.
:::
