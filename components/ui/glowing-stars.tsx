"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export const GlowingStarsBackgroundCard = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "/bg-[linear-gradient(110deg,#333_0.6%,#222)] p-4 max-w-md max-h-[20rem] h-full w-full rounded-xl border/ /border-border",
        className
      )}
    >
      <div className="flex justify-center items-center">
        <Illustration mouseEnter={false} />
      </div>
      <div className="px-2 /pb-6">{children}</div>
    </div>
  );
};

export const GlowingStarsDescription = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <p className={cn("text-base  max-w-[16rem]/", className)}>
      {children}
    </p>
  );
};

export const GlowingStarsTitle = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <h2 className={cn("font-bold text-2xl text-primary", className)}>
      {children}
    </h2>
  );
};

export const Illustration = ({ 
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  mouseEnter 
}: { mouseEnter: boolean }) => {
const codeString = `// 🚀 Welcome to my digital playground!

const developer = {
    name: "ThyRichfield",
    status: "Too awesome"🔥
};
// Magic happens here ✨
const createMagic = () => {
    console.log(" Crafting pixel-perfect ");
   // The secret formula!
    return passion + creativity + coffee; 
};
// Ready to build the future? 🚀
createMagic();`;

  const customStyle = {
    ...oneDark,
    'pre[class*="language-"]': {
      ...oneDark['pre[class*="language-"]'],
      background: 'transparent',
      padding: '0',
      margin: '0',
      borderRadius: '0',
    },
    'code[class*="language-"]': {
      ...oneDark['code[class*="language-"]'],
      background: 'transparent',
    },
  };

  return (
    <div className="h-48 p-4 w-full bg-gray-50 dark:bg-background/80 rounded-lg border border-border/50 font-mono text-sm">
      <div className="flex items-center gap-2 mb-3 pb-2 border-b border-border/30">
        <div className="flex gap-1">
          <div className="w-2 h-2 rounded-full bg-red-500"></div>
          <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
          <div className="w-2 h-2 rounded-full bg-green-500"></div>
        </div>
        <span className="text-muted-foreground font-medium text-xs">Portfolio.tsx</span>
      </div>
      <div className="text-base">
        <SyntaxHighlighter
          language="javascript"
          style={customStyle}
          showLineNumbers={true}
          lineNumberStyle={{
            color: '#6b7280',
            fontSize: '0.75rem',
            paddingRight: '1rem',
            userSelect: 'none'
          }}
          customStyle={{
            background: 'transparent',
            padding: '0',
            margin: '0',
            fontSize: '0.75rem',
            lineHeight: '1.5'
          }}
        >
          {codeString}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};
