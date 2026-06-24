import React from "react";

export function RichText({ text }: { text: string }) {
  const paragraphs = text.split("\n\n");

  return (
    <>
      {paragraphs.map((para, pi) => {
        const lines = para.split("\n");
        const isList = lines.every((l) => l.startsWith("- "));

        if (isList) {
          return (
            <ul key={pi} className="ml-4 list-disc space-y-1">
              {lines.map((line, li) => {
                const content = line.slice(2);
                return <li key={li}>{parseInline(content)}</li>;
              })}
            </ul>
          );
        }

        return <React.Fragment key={pi}>{parseInline(para)}</React.Fragment>;
      })}
    </>
  );
}

function parseInline(text: string): React.ReactNode[] {
  const nodes: React.ReactNode[] = [];
  const regex = /(\*\*(.*?)\*\*|\[(.*?)\]\((.*?)\))/g;
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }

    if (match[2] !== undefined) {
      nodes.push(
        <strong key={match.index} className="font-medium text-fg">
          {match[2]}
        </strong>,
      );
    } else if (match[3] !== undefined && match[4] !== undefined) {
      nodes.push(
        <a
          key={match.index}
          href={match[4]}
          className="text-gold-2 underline underline-offset-2 hover:text-gold-1 transition-colors"
        >
          {match[3]}
        </a>,
      );
    }

    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }

  return nodes;
}
