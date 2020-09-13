import React from "react";

function Score({ score }: { score: number }) {
  return (
    <h5
      style={{
        margin: `${16}px`,
      }}
    >
      Scores: {score}
    </h5>
  );
}

type Props = {
  score: number;
};
export default function HUD({ score }: Props) {
  return (
    <div
      id="HUD"
      ref={(ref) => {
        if (!ref) {
          return;
        }

        const { offsetWidth, offsetHeight } = ref.parentNode as HTMLElement;
        ref.style.width = `${offsetWidth}px`;
        ref.style.height = `${offsetHeight}px`;
      }}
    >
      <Score score={score} />
    </div>
  );
}
