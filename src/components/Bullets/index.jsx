import React from 'react';
import { v4 as uuidv4 } from 'uuid';

function Bullets({ bullets }) {
  const renderBullets = bullets.map((bullet) => {
    // Function to replace *text* with <strong>text</strong>
    const bulletWithBold = bullet.replace(/\*(.*?)\*/g, "<strong>$1</strong>");

    return (
      <p key={uuidv4()} className="bullet mt-4" dangerouslySetInnerHTML={{ __html: bulletWithBold }} />
    );
  });

  return (
    <div className="mt-2 block-contents-bullets">{renderBullets}</div>
  );
}

export default Bullets;
