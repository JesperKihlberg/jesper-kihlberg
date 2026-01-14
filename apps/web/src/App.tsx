import { useState } from "react";
import { formatDate, cn } from "@jesper/utils";
import { Button, Icon } from "@jesper/ui";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Jesper Kihlberg Monorepo</h1>
        <p className="text-gray-600 mb-8">Modern monorepo with Turborepo, Vite, React 19, TypeScript & Tailwind v4</p>

        <div className="space-y-6">
          <div className="bg-blue-50 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Counter Example</h2>
            <div className="flex items-center gap-4">
              <Button leftSection={<Icon name="Minus" />} onClick={() => setCount(count - 1)} variant="secondary">
                Decrement
              </Button>
              <span className="text-3xl font-bold text-blue-600 min-w-[80px] text-center">{count}</span>
              <Button leftSection={<Icon name="Plus" />} onClick={() => setCount(count + 1)} variant="primary">
                Increment
              </Button>
            </div>
          </div>

          <div className="bg-green-50 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Shared Utils Example</h2>
            <p className={cn("text-gray-700", "font-medium")}>Today's date: {formatDate(new Date())}</p>
          </div>

          <div className="bg-purple-50 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Monorepo Structure</h2>
            <ul className="space-y-2 text-gray-700">
              <li>✅ Turborepo for task orchestration</li>
              <li>✅ pnpm workspaces for dependencies</li>
              <li>✅ Shared UI components (@jesper/ui)</li>
              <li>✅ Shared utilities (@jesper/utils)</li>
              <li>✅ TypeScript path mapping</li>
              <li>✅ Tailwind CSS v4</li>
              <li>✅ React 19</li>
            </ul>
          </div>

          <div className="flex gap-3">
            <Button variant="outline" onClick={() => setCount(0)}>
              Reset Counter
            </Button>
            <Button variant="primary" onClick={() => alert("Monorepo is ready! 🚀")}>
              Test Alert
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
