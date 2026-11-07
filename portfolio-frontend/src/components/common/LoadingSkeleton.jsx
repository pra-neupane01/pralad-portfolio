export default function LoadingSkeleton() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '16px 0' }}>
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className="card"
          style={{ padding: '16px' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
            <div className="skeleton" style={{ width: '40px', height: '40px', borderRadius: '50%' }} />
            <div style={{ flex: 1 }}>
              <div className="skeleton" style={{ width: '140px', height: '14px', marginBottom: '6px' }} />
              <div className="skeleton" style={{ width: '80px', height: '10px' }} />
            </div>
          </div>
          <div className="skeleton" style={{ width: '100%', height: '14px', marginBottom: '8px' }} />
          <div className="skeleton" style={{ width: '85%', height: '14px', marginBottom: '8px' }} />
          <div className="skeleton" style={{ width: '60%', height: '14px' }} />
        </div>
      ))}
    </div>
  );
}
