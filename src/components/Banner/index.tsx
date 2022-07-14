import { FocusEvent, useEffect, useState } from 'react';
import './styles.css';

interface BannerProps {
  title: string;
}

export function Banner({ title }: BannerProps) {
  const [textBanner, setTextBanner] = useState('');

  useEffect(() => {
    function loadTitleBanner() {
      setTextBanner(title);
    }

    loadTitleBanner();
  }, []);

  function moveCaretAtEnd(e: FocusEvent<HTMLTextAreaElement>) {
    var temp_value = e.target.value;
    e.target.value = '';
    e.target.value = temp_value;
  }

  return (
    <div className="typed-out">
      <textarea
        value={textBanner}
        onChange={(e) => setTextBanner(e.target.value)}
        autoFocus
        onFocus={moveCaretAtEnd}
        maxLength={70}
      />
    </div>
  );
}
