
import './Togglebtn.css'
export default function BB8Toggle() {
  return (
    <label className="bb8-toggle relative inline-block select-none">
      <input
        type="checkbox"
        className="bb8-toggle__checkbox peer hidden"
      />

      <div className="bb8-toggle__container relative">
        <div className="bb8-toggle__scenery">
          {Array.from({ length: 7 }).map((_, i) => (
            <div key={i} className="bb8-toggle__star" />
          ))}

          <div className="tatto-1" />
          <div className="tatto-2" />
          <div className="gomrassen" />
          <div className="hermes" />
          <div className="chenini" />

          <div className="bb8-toggle__cloud" />
          <div className="bb8-toggle__cloud" />
          <div className="bb8-toggle__cloud" />
        </div>

        <div className="bb8">
          <div className="bb8__head-container">
            <div className="bb8__antenna" />
            <div className="bb8__antenna" />
            <div className="bb8__head" />
          </div>
          <div className="bb8__body" />
        </div>

        <div className="artificial__hidden">
          <div className="bb8__shadow" />
        </div>
      </div>
    </label>
  );
}
