interface Props {
  value: number;
  onChange: (value: number) => void;
}

// Speed control with predefined speed steps
const SPEED_OPTIONS = [1, 2, 5, 10, 30, 60, 120, 240, 360, 480, 600];

export default function SpeedControl({ value, onChange }: Props) {
  const currentSpeed = Math.pow(10, value);
  
  // Find the closest speed option
  const selectedSpeed = SPEED_OPTIONS.reduce((prev, curr) => 
    Math.abs(curr - currentSpeed) < Math.abs(prev - currentSpeed) ? curr : prev
  );

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newSpeed = parseFloat(e.target.value);
    const newValue = Math.log10(newSpeed);
    onChange(newValue);
  };

  return (
    <div className="speed-control">
      <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span style={{ fontSize: '0.9em' }}>Speed:</span>
        <select
          value={selectedSpeed}
          onChange={handleChange}
          style={{
            background: 'var(--panel-bg)',
            color: 'var(--text-color)',
            border: '1px solid var(--color-gray)',
            borderRadius: '4px',
            padding: '4px 8px',
            fontSize: '0.9em',
            cursor: 'pointer',
          }}
        >
          {SPEED_OPTIONS.map(speed => (
            <option key={speed} value={speed}>
              {speed}×
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}
