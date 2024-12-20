"use client";

// ColorModeProvider をエクスポートしている color-mode.tsx からインポート
import { ColorModeProvider } from "./color-mode";
import type { ThemeProviderProps } from "next-themes";

// ThemeProviderProps型を使って Provider コンポーネントを定義
export function Provider(props: ThemeProviderProps) {
  return <ColorModeProvider {...props} />;
}
