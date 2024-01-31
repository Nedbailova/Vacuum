import { useState, useEffect } from "react";
import "./Table_second.css";

interface Mode {
  id: number;
  name: string;
  phases: number;
  duration: number;
}

const Table_second = () => {
  const [modes, setModes] = useState<Mode[]>([]);

  const addMode = (
    id: number,
    name: string,
    phases: number,
    duration: number
  ) => {
    setModes((newMode) => [
      ...newMode,
      { id: id, name: name, phases: phases, duration: duration },
    ]);
  };

  const jsonString =
    '[{"id":0,"name":"Default","steps":[{"duration":0,"antiseptic":{"type":"const","args":{"min":0,"max":100,"period":120}},"voltage":{"type":"const","args":{"min":0,"max":100,"period":120}},"pressure":{"type":"const","args":{"min":0,"max":100,"period":120}}},{"duration":40,"antiseptic":{"type":"const","args":{"min":0,"max":100,"period":120}},"voltage":{"type":"const","args":{"min":0,"max":100,"period":120}},"pressure":{"type":"const","args":{"min":0,"max":100,"period":120}}},{"duration":0,"antiseptic":{"type":"const","args":{"min":0,"max":100,"period":120}},"voltage":{"type":"const","args":{"min":0,"max":100,"period":120}},"pressure":{"type":"const","args":{"min":0,"max":100,"period":120}}}]},{"id":1,"name":"Default 1","steps":[{"duration":50,"antiseptic":{"type":"const","args":{"min":0,"max":100,"period":120}},"voltage":{"type":"const","args":{"min":0,"max":100,"period":120}},"pressure":{"type":"const","args":{"min":0,"max":100,"period":120}}},{"duration":10,"antiseptic":{"type":"const","args":{"min":0,"max":100,"period":120}},"voltage":{"type":"const","args":{"min":0,"max":100,"period":120}},"pressure":{"type":"const","args":{"min":0,"max":100,"period":120}}},{"duration":100,"antiseptic":{"type":"const","args":{"min":0,"max":100,"period":120}},"voltage":{"type":"const","args":{"min":0,"max":100,"period":120}},"pressure":{"type":"const","args":{"min":0,"max":100,"period":120}}}]},{"id":2,"name":"Default 2","steps":[{"duration":10,"antiseptic":{"type":"const","args":{"min":0,"max":100,"period":120}},"voltage":{"type":"const","args":{"min":0,"max":100,"period":120}},"pressure":{"type":"const","args":{"min":0,"max":100,"period":120}}},{"duration":150,"antiseptic":{"type":"const","args":{"min":0,"max":100,"period":120}},"voltage":{"type":"const","args":{"min":0,"max":100,"period":120}},"pressure":{"type":"const","args":{"min":0,"max":100,"period":120}}}]},{"id":3,"name":"Default 3","steps":[{"duration":1000,"antiseptic":{"type":"const","args":{"min":0,"max":100,"period":120}},"voltage":{"type":"const","args":{"min":0,"max":100,"period":120}},"pressure":{"type":"const","args":{"min":0,"max":100,"period":120}}},{"duration":150,"antiseptic":{"type":"const","args":{"min":0,"max":100,"period":120}},"voltage":{"type":"const","args":{"min":0,"max":100,"period":120}},"pressure":{"type":"const","args":{"min":0,"max":100,"period":120}}}]},{"id":4,"name":"Custom","steps":[{"duration":10,"antiseptic":{"type":"const","args":{"min":0,"max":100,"period":120}},"voltage":{"type":"const","args":{"min":0,"max":100,"period":120}},"pressure":{"type":"const","args":{"min":0,"max":100,"period":120}}},{"duration":150,"antiseptic":{"type":"const","args":{"min":0,"max":100,"period":120}},"voltage":{"type":"const","args":{"min":0,"max":100,"period":120}},"pressure":{"type":"const","args":{"min":0,"max":100,"period":120}}}]},{"id":5,"name":"Custom 2","steps":[{"duration":10,"antiseptic":{"type":"const","args":{"min":0,"max":100,"period":120}},"voltage":{"type":"const","args":{"min":0,"max":100,"period":120}},"pressure":{"type":"const","args":{"min":0,"max":100,"period":120}}},{"duration":1500,"antiseptic":{"type":"const","args":{"min":0,"max":100,"period":120}},"voltage":{"type":"const","args":{"min":0,"max":100,"period":120}},"pressure":{"type":"const","args":{"min":0,"max":100,"period":120}}}]}]';
  const obj = JSON.parse(jsonString);

  useEffect(() => {
    for (let i = 0; i < obj.length; i++) {
      let count = 0;
      for (let j = 0; j < obj[i].steps.length; j++) {
        count = count + obj[i].steps[j].duration;
      }
      addMode(obj[i].id, obj[i].name, obj[i].steps.length, count);
    }
  }, []);

  const renderModes = (mode: Mode, index: number) => {
    return (
      <tr key={index}>
        <td>{mode.name}</td>
        <td>{mode.phases}</td>
        <td>{mode.duration} sec</td>
      </tr>
    );
  };

  return (
    <div className="st">
      <table>
        <caption>
          Modes
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 20H40" stroke="#DEDEDE" strokeWidth="3" />
            <path d="M20 0L20 40" stroke="#DEDEDE" strokeWidth="3" />
          </svg>
        </caption>
        <thead>
          <tr>
            <th>Name</th>
            <th>Phases</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>{modes.map(renderModes)}</tbody>
      </table>
    </div>
  );
};
export default Table_second;
