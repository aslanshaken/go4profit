import { useState } from 'react';

function FaqList({ items }) {
  const [open, setOpen] = useState(-1);

  return (
    <div className="faq">
      {items.map((item, index) => {
        const isOpen = open === index;
        return (
          <div className={`faq-item${isOpen ? ' is-open' : ''}`} key={item.question}>
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? -1 : index)}
              >
                {item.question}
              </button>
            </h3>
            {isOpen ? <p>{item.answer}</p> : null}
          </div>
        );
      })}
    </div>
  );
}

export default FaqList;
