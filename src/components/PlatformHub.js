import { useEffect, useRef, useState } from 'react';
import { HUB_INPUTS, HUB_NOTE, HUB_OUTPUTS } from '../site';

function toHub(x1, y1, x2, y2) {
  const dx = Math.max(72, Math.abs(x2 - x1) * 0.55);
  return `M ${x1} ${y1} C ${x1 + dx} ${y1}, ${x2 - dx * 0.35} ${y2}, ${x2} ${y2}`;
}

function FlowArrow() {
  return (
    <div className="hub-flow" aria-hidden="true">
      <span />
      <span />
      <span />
    </div>
  );
}

function PlatformHub() {
  const wrapRef = useRef(null);
  const coreRef = useRef(null);
  const leftRefs = useRef([]);
  const rightRefs = useRef([]);
  const [lines, setLines] = useState({ w: 0, h: 0, left: [], right: [] });

  useEffect(() => {
    function measure() {
      const wrap = wrapRef.current;
      const core = coreRef.current;
      if (!wrap || !core || wrap.clientWidth < 1200) {
        setLines({ w: 0, h: 0, left: [], right: [] });
        return;
      }
      const wr = wrap.getBoundingClientRect();
      const cr = core.getBoundingClientRect();
      const cx = cr.left + cr.width / 2 - wr.left;
      const cy = cr.top + cr.height / 2 - wr.top;
      const leftX = cx - cr.width / 2 - 8;
      const rightX = cx + cr.width / 2 + 8;
      const left = leftRefs.current.filter(Boolean).map((el) => {
        const r = el.getBoundingClientRect();
        return toHub(r.right - wr.left + 2, r.top + r.height / 2 - wr.top, leftX, cy);
      });
      const right = rightRefs.current.filter(Boolean).map((el) => {
        const r = el.getBoundingClientRect();
        return toHub(rightX, cy, r.left - wr.left - 2, r.top + r.height / 2 - wr.top);
      });
      setLines({ w: wr.width, h: wr.height, left, right });
    }

    measure();
    const frame = requestAnimationFrame(measure);
    const ro = new ResizeObserver(measure);
    if (wrapRef.current) ro.observe(wrapRef.current);
    window.addEventListener('resize', measure);
    return () => {
      cancelAnimationFrame(frame);
      ro.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, []);

  return (
    <div className="hub-panel">
      <div className="hub" ref={wrapRef}>
        {lines.w > 0 && (
          <svg className="hub-lines" width={lines.w} height={lines.h} aria-hidden="true">
            <defs>
              <marker id="hub-arrow-in" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#3fa87c" />
              </marker>
              <marker id="hub-arrow-out" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#1e6b4a" />
              </marker>
            </defs>
            {lines.left.map((d, index) => (
              <g key={`in-${index}`}>
                <path id={`hub-in-${index}`} d={d} className="hub-line in" markerEnd="url(#hub-arrow-in)" />
                <circle r="3.5" className="hub-bead in">
                  <animateMotion dur="4.6s" repeatCount="indefinite" begin={`${index * 0.45}s`}>
                    <mpath href={`#hub-in-${index}`} />
                  </animateMotion>
                </circle>
              </g>
            ))}
            {lines.right.map((d, index) => (
              <g key={`out-${index}`}>
                <path id={`hub-out-${index}`} d={d} className="hub-line out" markerEnd="url(#hub-arrow-out)" />
                <circle r="3.5" className="hub-bead out">
                  <animateMotion dur="4.6s" repeatCount="indefinite" begin={`${index * 0.45}s`}>
                    <mpath href={`#hub-out-${index}`} />
                  </animateMotion>
                </circle>
              </g>
            ))}
          </svg>
        )}
        <div className="hub-col hub-col-in">
          <span className="hub-label">Connected to</span>
          {HUB_INPUTS.map((item, index) => (
            <article
              className="hub-card"
              key={item.title}
              ref={(el) => {
                leftRefs.current[index] = el;
              }}
            >
              <span className="hub-dot" aria-hidden="true" />
              <div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="hub-core">
          <FlowArrow />
          <div className="hub-orb" ref={coreRef}>
            <span>Go4Profit</span>
          </div>
          <FlowArrow />
        </div>
        <div className="hub-col hub-col-out">
          <span className="hub-label out">Go4Profit produces</span>
          {HUB_OUTPUTS.map((item, index) => (
            <article
              className="hub-card"
              key={item.title}
              ref={(el) => {
                rightRefs.current[index] = el;
              }}
            >
              <span className="hub-check" aria-hidden="true">
                ✓
              </span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
      <p className="hub-note">{HUB_NOTE}</p>
    </div>
  );
}

export default PlatformHub;
