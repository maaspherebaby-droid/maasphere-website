const HEADING_PATTERN = /^\d+[A-Z]?\.\s+[A-Za-z].{0,90}$/;

type Block =
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; intro?: string; items: string[] };

function toBlocks(body: string): Block[] {
  const paragraphs = body.split("\n\n").map((p) => p.trim()).filter(Boolean);

  return paragraphs.map((paragraph): Block => {
    if (HEADING_PATTERN.test(paragraph) && !paragraph.includes(" - ")) {
      return { type: "heading", text: paragraph };
    }

    if (paragraph.includes(" - ")) {
      const parts = paragraph.split(" - ").map((part) => part.trim());
      const [intro, ...items] = parts;
      // If the "intro" itself looks like a full sentence rather than a lead-in,
      // keep it — otherwise treat the whole thing as a plain paragraph split.
      return { type: "list", intro: intro || undefined, items: items.filter(Boolean) };
    }

    return { type: "paragraph", text: paragraph };
  });
}

export function LegalBody({ body }: { body: string }) {
  const blocks = toBlocks(body);

  return (
    <div className="flex flex-col gap-5">
      {blocks.map((block, index) => {
        if (block.type === "heading") {
          return (
            <h2
              key={index}
              className="mt-6 text-[22px] font-semibold tracking-[-0.01em] text-ink first:mt-0"
            >
              {block.text}
            </h2>
          );
        }

        if (block.type === "list") {
          return (
            <div key={index} className="flex flex-col gap-3">
              {block.intro ? (
                <p className="text-[16px] leading-[1.7] text-text-primary">{block.intro}</p>
              ) : null}
              <ul className="flex flex-col gap-2 pl-1">
                {block.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="flex gap-3 text-[15px] leading-[1.65] text-text-primary"
                  >
                    <span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-warmth-gold-deep" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        }

        return (
          <p key={index} className="text-[16px] leading-[1.7] text-text-primary">
            {block.text}
          </p>
        );
      })}
    </div>
  );
}
