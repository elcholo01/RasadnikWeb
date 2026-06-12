import './FloatingLeaves.css';

// fall = vreme pada (s), swing = vreme ljuljanja (s), size = px
const LEAVES = [
  { id: 1,  left: '4%',  delay: 0,    fall: 8,   swing: 3.2, size: 13, color: 'rgba(76,175,80,0.75)'   },
  { id: 2,  left: '13%', delay: 1.6,  fall: 10,  swing: 4.1, size: 20, color: 'rgba(129,199,132,0.6)'  },
  { id: 3,  left: '24%', delay: 3.1,  fall: 7,   swing: 2.6, size: 10, color: 'rgba(46,125,50,0.8)'    },
  { id: 4,  left: '35%', delay: 0.7,  fall: 9,   swing: 3.7, size: 17, color: 'rgba(165,214,167,0.65)' },
  { id: 5,  left: '46%', delay: 2.3,  fall: 11,  swing: 5.0, size: 22, color: 'rgba(102,187,106,0.55)' },
  { id: 6,  left: '57%', delay: 4.2,  fall: 8.5, swing: 3.1, size: 12, color: 'rgba(56,142,60,0.7)'    },
  { id: 7,  left: '67%', delay: 1.1,  fall: 9.5, swing: 4.3, size: 16, color: 'rgba(129,199,132,0.65)' },
  { id: 8,  left: '76%', delay: 3.7,  fall: 7.5, swing: 2.2, size: 11, color: 'rgba(76,175,80,0.7)'    },
  { id: 9,  left: '85%', delay: 2.7,  fall: 10,  swing: 3.6, size: 15, color: 'rgba(165,214,167,0.6)'  },
  { id: 10, left: '93%', delay: 0.4,  fall: 8,   swing: 2.9, size: 9,  color: 'rgba(46,125,50,0.75)'   },
  { id: 11, left: '19%', delay: 5.3,  fall: 9,   swing: 3.4, size: 18, color: 'rgba(102,187,106,0.6)'  },
  { id: 12, left: '61%', delay: 6.1,  fall: 7,   swing: 4.8, size: 8,  color: 'rgba(56,142,60,0.65)'   },
  { id: 13, left: '41%', delay: 7.4,  fall: 11,  swing: 5.2, size: 14, color: 'rgba(76,175,80,0.6)'    },
  { id: 14, left: '79%', delay: 4.9,  fall: 8,   swing: 3.0, size: 19, color: 'rgba(129,199,132,0.55)' },
];

export default function FloatingLeaves() {
  return (
    <div className="leaves-container" aria-hidden="true">
      {LEAVES.map(l => (
        <div
          key={l.id}
          className="leaf-fall-wrap"
          style={{
            left: l.left,
            animationDuration: `${l.fall}s`,
            animationDelay: `${l.delay}s`,
          }}
        >
          <div
            className="leaf-sway-wrap"
            style={{ animationDuration: `${l.swing}s` }}
          >
            <div
              className="leaf-shape"
              style={{
                width: l.size,
                height: l.size,
                background: l.color,
                animationDuration: `${l.fall * 0.9}s`,
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
