export default function Controls({ controls }) {
    const {
      xRotation,
      yRotation,
      zRotation,
      xScale,
      yScale,
      zScale,
      setXRotation,
      setYRotation,
      setZRotation,
      setXScale,
      setYScale,
      setZScale
    } = controls;
    return (
      <div className="controls">
        <div className="controlGroup">
        </div>
        <div className="controlGroup">
          <div className="control">
            <label>X Rotation</label>
            <input
              value={xRotation}
              onChange={(e) => setXRotation(e.target.value)}
              step={1 / 32}
              type="number"
            />
          </div>
          <div className="control">
            <label>Y Rotation</label>
            <input
              value={yRotation}
              onChange={(e) => setYRotation(e.target.value)}
              step={1 / 32}
              type="number"
            />
          </div>
          <div className="control">
            <label>Z Rotation</label>
            <input
              value={zRotation}
              onChange={(e) => setZRotation(e.target.value)}
              step={1 / 32}
              type="number"
            />
          </div>
        </div>
        <div className="controlGroup">
          <div className="control">
            <label>X Scale</label>
            <input
              value={xScale}
              onChange={(e) => setXScale(e.target.value)}
              step={1 / 32}
              type="number"
            />
          </div>
          <div className="control">
            <label>Y Scale</label>
            <input
              value={yScale}
              onChange={(e) => setYScale(e.target.value)}
              step={1 / 32}
              type="number"
            />
          </div>
          <div className="control">
            <label>Z Scale</label>
            <input
              value={zScale}
              onChange={(e) => setZScale(e.target.value)}
              step={1 / 32}
              type="number"
            />
          </div>
        </div>
      </div>
    );
  }
  