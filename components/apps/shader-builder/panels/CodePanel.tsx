"use client";

import { useEffect, useState } from 'react';
import { sculptToThreeJSMaterial } from 'shader-park-core';
import { CodeEditor } from './CodeEditor';

interface CodePanelProps {
  onShaderUpdate: (glsl: string) => void;
}

const CodePanel: React.FC<CodePanelProps> = ({ onShaderUpdate }) => {
  const [code, setCode] = useState('');

  useEffect(() => {
    // Compile shader code whenever it changes
    try {
      const material = sculptToThreeJSMaterial(code);
      onShaderUpdate(code); // Pass the original code, not the compiled material
    } catch (error) {
      console.error('Shader compilation error:', error);
    }
  }, [code, onShaderUpdate]);

  return (
    <div className="h-full">
      <CodeEditor
        value={code}
        onChange={setCode}
      />
    </div>
  );
};

export default CodePanel;