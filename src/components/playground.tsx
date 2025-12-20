"use client";

import { Sandpack, SandpackTheme } from "@codesandbox/sandpack-react";

// Custom dark theme matching ABS brand
const absTheme: SandpackTheme = {
  colors: {
    surface1: "#1e1e1e",
    surface2: "#252526",
    surface3: "#3c3c3c",
    clickable: "#999999",
    base: "#ffffff",
    disabled: "#4d4d4d",
    hover: "#EA8303",
    accent: "#EA8303",
    error: "#ff453a",
    errorSurface: "#3d1e1e",
  },
  syntax: {
    plain: "#d4d4d4",
    comment: { color: "#6a9955", fontStyle: "italic" },
    keyword: "#569cd6",
    tag: "#4ec9b0",
    punctuation: "#d4d4d4",
    definition: "#dcdcaa",
    property: "#9cdcfe",
    static: "#b5cea8",
    string: "#ce9178",
  },
  font: {
    body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    mono: '"Fira Code", "Fira Mono", Menlo, Consolas, monospace',
    size: "14px",
    lineHeight: "1.6",
  },
};

interface PlaygroundProps {
  code?: string;
  template?: "react" | "react-ts" | "vanilla" | "vanilla-ts" | "nextjs";
  editorHeight?: number;
}

// Base playground component
export function Playground({
  code,
  template = "react",
  editorHeight = 350,
}: PlaygroundProps) {
  const defaultCode =
    code ||
    `export default function App() {
  return <h1>Hello, World! 👋</h1>;
}`;

  return (
    <div className="my-6 border border-fd-border rounded-xl overflow-hidden">
      <Sandpack
        template={template}
        theme={absTheme}
        files={{ "/App.js": defaultCode }}
        options={{
          showLineNumbers: true,
          editorHeight,
          showRefreshButton: true,
        }}
      />
    </div>
  );
}

// For backwards compatibility
export const AdvancedPlayground = Playground;

// ============================================
// BEGINNER EXAMPLES
// ============================================

export function CounterPlayground() {
  return (
    <Playground
      editorHeight={300}
      code={`import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: 40, textAlign: 'center', fontFamily: 'system-ui' }}>
      <h1 style={{ fontSize: 48 }}>{count}</h1>
      <div style={{ display: 'flex', gap: 10, justifyContent: 'center' }}>
        <button onClick={() => setCount(c => c - 1)} style={btnStyle}>-</button>
        <button onClick={() => setCount(0)} style={btnStyle}>Reset</button>
        <button onClick={() => setCount(c => c + 1)} style={btnStyle}>+</button>
      </div>
    </div>
  );
}

const btnStyle = { padding: '10px 20px', fontSize: 18, borderRadius: 8, border: 'none', background: '#EA8303', color: 'white', cursor: 'pointer' };`}
    />
  );
}

export function BeginnerHelloWorldPlayground() {
  return (
    <Playground
      editorHeight={280}
      code={`import { useState } from 'react';

function Greeting({ name }) {
  return <h1 style={{ color: '#EA8303' }}>Hello, {name}! 👋</h1>;
}

export default function App() {
  const [name, setName] = useState('World');

  return (
    <div style={{ padding: 30, fontFamily: 'system-ui' }}>
      <Greeting name={name} />
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name..."
        style={{ padding: 10, fontSize: 16, borderRadius: 8, border: '2px solid #ddd', width: 200 }}
      />
      <p style={{ marginTop: 15, color: '#666' }}>💡 Try changing the name above!</p>
    </div>
  );
}`}
    />
  );
}

export function BeginnerTogglePlayground() {
  return (
    <Playground
      editorHeight={300}
      code={`import { useState } from 'react';

export default function Toggle() {
  const [isOn, setIsOn] = useState(false);

  return (
    <div style={{ padding: 40, textAlign: 'center', fontFamily: 'system-ui' }}>
      <h2>Toggle Switch</h2>
      <button
        onClick={() => setIsOn(!isOn)}
        style={{
          width: 80, height: 40, borderRadius: 20, border: 'none',
          background: isOn ? '#22c55e' : '#e5e7eb', cursor: 'pointer',
          position: 'relative', transition: 'background 0.3s'
        }}
      >
        <div style={{
          width: 32, height: 32, borderRadius: '50%', background: 'white',
          position: 'absolute', top: 4, left: isOn ? 44 : 4,
          transition: 'left 0.3s', boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
        }} />
      </button>
      <p style={{ marginTop: 20, color: isOn ? '#22c55e' : '#666' }}>
        Status: <strong>{isOn ? 'ON' : 'OFF'}</strong>
      </p>
      {isOn && <div style={{ marginTop: 15, padding: 15, background: '#dcfce7', borderRadius: 8 }}>✨ Feature enabled!</div>}
    </div>
  );
}`}
    />
  );
}

export function BeginnerListPlayground() {
  return (
    <Playground
      editorHeight={350}
      code={`import { useState } from 'react';

export default function FruitList() {
  const [fruits, setFruits] = useState(['🍎 Apple', '🍌 Banana', '🍇 Grapes']);
  const [input, setInput] = useState('');

  const addFruit = () => {
    if (input.trim()) {
      setFruits([...fruits, input]);
      setInput('');
    }
  };

  return (
    <div style={{ padding: 30, fontFamily: 'system-ui', maxWidth: 350 }}>
      <h2>🍎 Fruit Basket</h2>
      <div style={{ display: 'flex', gap: 10, marginBottom: 20 }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && addFruit()}
          placeholder="Add a fruit..."
          style={{ flex: 1, padding: 10, borderRadius: 8, border: '2px solid #ddd' }}
        />
        <button onClick={addFruit} style={{ padding: '10px 20px', background: '#EA8303', color: 'white', border: 'none', borderRadius: 8 }}>Add</button>
      </div>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {fruits.map((fruit, i) => (
          <li key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: 12, background: '#f9fafb', borderRadius: 8, marginBottom: 8 }}>
            {fruit}
            <button onClick={() => setFruits(fruits.filter((_, j) => j !== i))} style={{ background: 'none', border: 'none', color: '#ef4444', cursor: 'pointer' }}>×</button>
          </li>
        ))}
      </ul>
    </div>
  );
}`}
    />
  );
}

// ============================================
// INTERMEDIATE EXAMPLES
// ============================================

export function FormPlayground() {
  return (
    <Playground
      editorHeight={380}
      code={`import { useState } from 'react';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div style={{ padding: 40, textAlign: 'center', fontFamily: 'system-ui' }}>
        <h2 style={{ color: '#22c55e' }}>✓ Submitted!</h2>
        <pre style={{ textAlign: 'left', background: '#f4f4f4', padding: 20, borderRadius: 8 }}>
          {JSON.stringify(form, null, 2)}
        </pre>
        <button onClick={() => setSubmitted(false)} style={{ marginTop: 20, padding: '10px 20px', background: '#EA8303', color: 'white', border: 'none', borderRadius: 8 }}>Reset</button>
      </div>
    );
  }

  return (
    <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} style={{ padding: 30, fontFamily: 'system-ui', maxWidth: 350 }}>
      <h2>Contact Form</h2>
      {['name', 'email', 'message'].map(field => (
        <div key={field} style={{ marginBottom: 15 }}>
          <label style={{ display: 'block', marginBottom: 5, fontWeight: 500, textTransform: 'capitalize' }}>{field}</label>
          {field === 'message' ? (
            <textarea value={form[field]} onChange={(e) => setForm({...form, [field]: e.target.value})} style={{ width: '100%', padding: 10, borderRadius: 6, border: '1px solid #ddd', minHeight: 80 }} />
          ) : (
            <input type={field === 'email' ? 'email' : 'text'} value={form[field]} onChange={(e) => setForm({...form, [field]: e.target.value})} style={{ width: '100%', padding: 10, borderRadius: 6, border: '1px solid #ddd' }} />
          )}
        </div>
      ))}
      <button type="submit" style={{ width: '100%', padding: 12, background: '#EA8303', color: 'white', border: 'none', borderRadius: 8, fontWeight: 600 }}>Submit</button>
    </form>
  );
}`}
    />
  );
}

export function TodoPlayground() {
  return (
    <Playground
      editorHeight={400}
      code={`import { useState } from 'react';

export default function TodoApp() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', done: true },
    { id: 2, text: 'Build a project', done: false },
  ]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, { id: Date.now(), text: input, done: false }]);
      setInput('');
    }
  };

  return (
    <div style={{ padding: 30, fontFamily: 'system-ui', maxWidth: 380 }}>
      <h2>📝 Todo List</h2>
      <div style={{ display: 'flex', gap: 10, marginBottom: 20 }}>
        <input value={input} onChange={(e) => setInput(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && addTodo()} placeholder="Add task..." style={{ flex: 1, padding: 10, borderRadius: 6, border: '1px solid #ddd' }} />
        <button onClick={addTodo} style={{ padding: '10px 20px', background: '#EA8303', color: 'white', border: 'none', borderRadius: 6 }}>Add</button>
      </div>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {todos.map(todo => (
          <li key={todo.id} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: 12, background: '#f9f9f9', borderRadius: 6, marginBottom: 8 }}>
            <input type="checkbox" checked={todo.done} onChange={() => setTodos(todos.map(t => t.id === todo.id ? {...t, done: !t.done} : t))} />
            <span style={{ flex: 1, textDecoration: todo.done ? 'line-through' : 'none', color: todo.done ? '#999' : '#333' }}>{todo.text}</span>
            <button onClick={() => setTodos(todos.filter(t => t.id !== todo.id))} style={{ background: '#ef4444', color: 'white', border: 'none', borderRadius: 4, padding: '5px 10px' }}>✕</button>
          </li>
        ))}
      </ul>
      <p style={{ color: '#666', fontSize: 14 }}>{todos.filter(t => !t.done).length} items left</p>
    </div>
  );
}`}
    />
  );
}

export function IntermediateUseEffectPlayground() {
  return (
    <Playground
      editorHeight={400}
      code={`import { useState, useEffect } from 'react';

// Simulated API
const fetchUsers = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    Math.random() > 0.3
      ? resolve([{ id: 1, name: 'Alice', role: 'Dev' }, { id: 2, name: 'Bob', role: 'Designer' }])
      : reject(new Error('Network error'));
  }, 1000);
});

export default function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const load = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchUsers();
      setUsers(data);
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  useEffect(() => { load(); }, []);

  return (
    <div style={{ padding: 30, fontFamily: 'system-ui', maxWidth: 350 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 20 }}>
        <h2 style={{ margin: 0 }}>👥 Users</h2>
        <button onClick={load} disabled={loading} style={{ padding: '8px 16px', background: loading ? '#ddd' : '#EA8303', color: 'white', border: 'none', borderRadius: 6 }}>{loading ? '...' : '🔄'}</button>
      </div>
      {loading && <p>⏳ Loading...</p>}
      {error && <div style={{ padding: 15, background: '#fef2f2', borderRadius: 8, color: '#dc2626' }}>❌ {error}</div>}
      {!loading && !error && users.map(u => (
        <div key={u.id} style={{ padding: 15, background: '#f9fafb', borderRadius: 10, marginBottom: 10 }}>
          <strong>{u.name}</strong> - {u.role}
        </div>
      ))}
      <p style={{ fontSize: 13, color: '#888', marginTop: 15 }}>💡 70% success rate - try refresh!</p>
    </div>
  );
}`}
    />
  );
}

export function IntermediateCustomHookPlayground() {
  return (
    <Playground
      editorHeight={380}
      code={`import { useState, useEffect } from 'react';

// Custom Hook: useLocalStorage
function useLocalStorage(key, initial) {
  const [value, setValue] = useState(() => {
    try { return JSON.parse(localStorage.getItem(key)) ?? initial; }
    catch { return initial; }
  });
  useEffect(() => { localStorage.setItem(key, JSON.stringify(value)); }, [key, value]);
  return [value, setValue];
}

// Custom Hook: useCounter
function useCounter(initial = 0, step = 1) {
  const [count, setCount] = useState(initial);
  return {
    count,
    increment: () => setCount(c => c + step),
    decrement: () => setCount(c => c - step),
    reset: () => setCount(initial)
  };
}

export default function App() {
  const [theme, setTheme] = useLocalStorage('theme', 'light');
  const counter = useCounter(0, 5);
  const isDark = theme === 'dark';

  return (
    <div style={{ padding: 30, fontFamily: 'system-ui', background: isDark ? '#1f2937' : '#fff', color: isDark ? '#fff' : '#000', minHeight: 300 }}>
      <h2>🪝 Custom Hooks</h2>
      <div style={{ padding: 20, background: isDark ? '#374151' : '#f3f4f6', borderRadius: 12, marginBottom: 20 }}>
        <h3>useLocalStorage</h3>
        <button onClick={() => setTheme(isDark ? 'light' : 'dark')} style={{ padding: '10px 20px', background: isDark ? '#fbbf24' : '#1f2937', color: isDark ? '#000' : '#fff', border: 'none', borderRadius: 8 }}>
          {isDark ? '☀️ Light' : '🌙 Dark'}
        </button>
        <p style={{ fontSize: 13, marginTop: 10 }}>Persists after refresh!</p>
      </div>
      <div style={{ padding: 20, background: isDark ? '#374151' : '#f3f4f6', borderRadius: 12 }}>
        <h3>useCounter (step: 5)</h3>
        <div style={{ fontSize: 32, fontWeight: 'bold', marginBottom: 10 }}>{counter.count}</div>
        <button onClick={counter.decrement} style={btn}>-5</button>
        <button onClick={counter.reset} style={btn}>⟲</button>
        <button onClick={counter.increment} style={btn}>+5</button>
      </div>
    </div>
  );
}

const btn = { padding: '8px 16px', background: '#EA8303', color: 'white', border: 'none', borderRadius: 6, margin: '0 5px' };`}
    />
  );
}

export function IntermediateFormValidationPlayground() {
  return (
    <Playground
      editorHeight={420}
      code={`import { useState } from 'react';

const validate = {
  username: v => !v ? 'Required' : v.length < 3 ? 'Min 3 chars' : '',
  email: v => !v ? 'Required' : !/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(v) ? 'Invalid email' : '',
  password: v => !v ? 'Required' : v.length < 6 ? 'Min 6 chars' : ''
};

export default function SignupForm() {
  const [form, setForm] = useState({ username: '', email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [done, setDone] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
    if (touched[name]) setErrors(e => ({ ...e, [name]: validate[name](value) }));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched(t => ({ ...t, [name]: true }));
    setErrors(e => ({ ...e, [name]: validate[name](value) }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = Object.fromEntries(Object.keys(form).map(k => [k, validate[k](form[k])]));
    setErrors(newErrors);
    setTouched({ username: true, email: true, password: true });
    if (Object.values(newErrors).every(e => !e)) setDone(true);
  };

  if (done) return (
    <div style={{ padding: 40, textAlign: 'center', fontFamily: 'system-ui' }}>
      <h2 style={{ color: '#22c55e' }}>🎉 Welcome, {form.username}!</h2>
      <button onClick={() => { setForm({ username: '', email: '', password: '' }); setDone(false); setTouched({}); }} style={{ padding: '10px 20px', background: '#EA8303', color: 'white', border: 'none', borderRadius: 8 }}>Reset</button>
    </div>
  );

  return (
    <form onSubmit={handleSubmit} style={{ padding: 30, fontFamily: 'system-ui', maxWidth: 350 }}>
      <h2>📝 Sign Up</h2>
      {Object.keys(form).map(field => (
        <div key={field} style={{ marginBottom: 20 }}>
          <label style={{ display: 'block', marginBottom: 5, fontWeight: 500, textTransform: 'capitalize' }}>{field}</label>
          <input
            type={field === 'password' ? 'password' : field === 'email' ? 'email' : 'text'}
            name={field}
            value={form[field]}
            onChange={handleChange}
            onBlur={handleBlur}
            style={{ width: '100%', padding: 12, borderRadius: 8, border: \`2px solid \${errors[field] && touched[field] ? '#ef4444' : '#e5e7eb'}\` }}
          />
          {errors[field] && touched[field] && <p style={{ color: '#ef4444', fontSize: 13, marginTop: 5 }}>⚠️ {errors[field]}</p>}
        </div>
      ))}
      <button type="submit" style={{ width: '100%', padding: 14, background: '#EA8303', color: 'white', border: 'none', borderRadius: 8, fontWeight: 600 }}>Create Account</button>
    </form>
  );
}`}
    />
  );
}

// ============================================
// ADVANCED EXAMPLES
// ============================================

export function AdvancedReducerContextPlayground() {
  return (
    <Playground
      editorHeight={450}
      code={`import { createContext, useContext, useReducer } from 'react';

const CartContext = createContext(null);
const products = [
  { id: 1, name: 'T-Shirt', price: 29.99, emoji: '👕' },
  { id: 2, name: 'Mug', price: 14.99, emoji: '☕' },
  { id: 3, name: 'Stickers', price: 4.99, emoji: '🏷️' },
];

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD': {
      const exists = state.items.find(i => i.id === action.item.id);
      return exists
        ? { ...state, items: state.items.map(i => i.id === action.item.id ? { ...i, qty: i.qty + 1 } : i) }
        : { ...state, items: [...state.items, { ...action.item, qty: 1 }] };
    }
    case 'REMOVE': return { ...state, items: state.items.filter(i => i.id !== action.id) };
    case 'CLEAR': return { items: [] };
    default: return state;
  }
}

function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });
  return <CartContext.Provider value={{ state, dispatch }}>{children}</CartContext.Provider>;
}

function Products() {
  const { dispatch } = useContext(CartContext);
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 10 }}>
      {products.map(p => (
        <div key={p.id} style={{ padding: 15, background: '#f9fafb', borderRadius: 10, textAlign: 'center' }}>
          <div style={{ fontSize: 28 }}>{p.emoji}</div>
          <div style={{ fontWeight: 600 }}>{p.name}</div>
          <div style={{ color: '#22c55e' }}>\${p.price}</div>
          <button onClick={() => dispatch({ type: 'ADD', item: p })} style={{ marginTop: 8, padding: '5px 12px', background: '#EA8303', color: 'white', border: 'none', borderRadius: 6, fontSize: 12 }}>Add</button>
        </div>
      ))}
    </div>
  );
}

function Cart() {
  const { state, dispatch } = useContext(CartContext);
  const total = state.items.reduce((sum, i) => sum + i.price * i.qty, 0);
  return (
    <div style={{ marginTop: 15, padding: 15, background: '#fef3c7', borderRadius: 10 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <strong>🛒 Cart ({state.items.reduce((s, i) => s + i.qty, 0)})</strong>
        {state.items.length > 0 && <button onClick={() => dispatch({ type: 'CLEAR' })} style={{ background: 'none', border: 'none', color: '#ef4444', cursor: 'pointer' }}>Clear</button>}
      </div>
      {state.items.length === 0 ? <p style={{ color: '#92400e' }}>Empty</p> : (
        <>
          {state.items.map(i => (
            <div key={i.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid #fcd34d' }}>
              <span>{i.emoji} {i.name} x{i.qty}</span>
              <span>\${(i.price * i.qty).toFixed(2)} <button onClick={() => dispatch({ type: 'REMOVE', id: i.id })} style={{ background: 'none', border: 'none', color: '#ef4444' }}>✕</button></span>
            </div>
          ))}
          <div style={{ marginTop: 10, fontWeight: 'bold' }}>Total: \${total.toFixed(2)}</div>
        </>
      )}
    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <div style={{ padding: 20, fontFamily: 'system-ui', maxWidth: 380 }}>
        <h2>🏪 Shop</h2>
        <Products />
        <Cart />
      </div>
    </CartProvider>
  );
}`}
    />
  );
}

export function AdvancedDebouncedSearchPlayground() {
  return (
    <Playground
      editorHeight={400}
      code={`import { useState, useEffect, useRef } from 'react';

const items = ['React Basics', 'React Hooks', 'Redux', 'Next.js', 'TypeScript', 'Testing'];

export default function Search() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searches, setSearches] = useState(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    // Clear previous timeout (debounce)
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    
    if (!query.trim()) {
      setResults([]);
      setLoading(false);
      return;
    }

    setLoading(true);
    
    // Debounce: wait 300ms before searching
    timeoutRef.current = setTimeout(() => {
      setSearches(s => s + 1);
      const filtered = items.filter(i => i.toLowerCase().includes(query.toLowerCase()));
      setResults(filtered);
      setLoading(false);
    }, 300);

    return () => clearTimeout(timeoutRef.current);
  }, [query]);

  return (
    <div style={{ padding: 30, fontFamily: 'system-ui', maxWidth: 380 }}>
      <h2>🔍 Debounced Search</h2>
      <div style={{ position: 'relative', marginBottom: 15 }}>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search..."
          style={{ width: '100%', padding: '12px 40px 12px 15px', fontSize: 16, borderRadius: 10, border: '2px solid #e5e7eb' }}
        />
        {loading && <span style={{ position: 'absolute', right: 15, top: 12 }}>⏳</span>}
      </div>
      <div style={{ fontSize: 13, color: '#888', marginBottom: 15 }}>
        API calls: {searches} | Debounce: 300ms
      </div>
      {query && !loading && results.length === 0 && (
        <div style={{ textAlign: 'center', padding: 30, color: '#999' }}>No results for "{query}"</div>
      )}
      {results.map((item, i) => (
        <div key={i} style={{ padding: 12, background: i % 2 === 0 ? '#f9fafb' : 'white', borderRadius: 8, marginBottom: 5 }}>
          📚 {item}
        </div>
      ))}
      <div style={{ marginTop: 20, padding: 15, background: '#f0fdf4', borderRadius: 8, fontSize: 13, borderLeft: '4px solid #22c55e' }}>
        <strong>💡 How it works:</strong> Waits 300ms after you stop typing before searching, reducing API calls.
      </div>
    </div>
  );
}`}
    />
  );
}

export function AdvancedOptimisticUpdatePlayground() {
  return (
    <Playground
      editorHeight={420}
      code={`import { useState } from 'react';

export default function SocialFeed() {
  const [posts, setPosts] = useState([
    { id: 1, author: 'Alice', text: 'Shipped a feature! 🚀', likes: 42, liked: false },
    { id: 2, author: 'Bob', text: 'React is awesome', likes: 28, liked: true },
  ]);
  const [pending, setPending] = useState({});
  const [toast, setToast] = useState(null);

  const showToast = (msg, type) => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 2000);
  };

  const toggleLike = async (id) => {
    if (pending[id]) return;
    const post = posts.find(p => p.id === id);
    
    // 1. Optimistic update
    setPosts(posts.map(p => p.id === id ? { ...p, liked: !p.liked, likes: p.liked ? p.likes - 1 : p.likes + 1 } : p));
    setPending(p => ({ ...p, [id]: true }));

    // 2. Simulate API (30% fail rate)
    await new Promise(r => setTimeout(r, 800));
    const failed = Math.random() < 0.3;

    if (failed) {
      // 3. Rollback on error
      setPosts(posts.map(p => p.id === id ? post : p));
      showToast('Failed! Rolled back.', 'error');
    }
    setPending(p => ({ ...p, [id]: false }));
  };

  return (
    <div style={{ padding: 25, fontFamily: 'system-ui', maxWidth: 380 }}>
      <h2>📱 Optimistic Updates</h2>
      <p style={{ color: '#888', fontSize: 14, marginBottom: 20 }}>Like posts - 30% will fail to demo rollback</p>
      
      {toast && (
        <div style={{ position: 'fixed', top: 20, right: 20, padding: '12px 20px', borderRadius: 8, background: toast.type === 'error' ? '#fef2f2' : '#f0fdf4', color: toast.type === 'error' ? '#dc2626' : '#16a34a' }}>
          {toast.type === 'error' ? '❌' : '✓'} {toast.msg}
        </div>
      )}

      {posts.map(post => (
        <div key={post.id} style={{ padding: 20, background: '#f9fafb', borderRadius: 12, marginBottom: 15 }}>
          <strong>@{post.author}</strong>
          <p style={{ margin: '10px 0' }}>{post.text}</p>
          <button
            onClick={() => toggleLike(post.id)}
            disabled={pending[post.id]}
            style={{
              display: 'flex', alignItems: 'center', gap: 6, padding: '8px 16px',
              background: post.liked ? '#fef2f2' : 'white',
              border: \`2px solid \${post.liked ? '#ef4444' : '#e5e7eb'}\`,
              borderRadius: 20, cursor: pending[post.id] ? 'wait' : 'pointer',
              color: post.liked ? '#ef4444' : '#666', opacity: pending[post.id] ? 0.7 : 1
            }}
          >
            {post.liked ? '❤️' : '🤍'} {post.likes} {pending[post.id] && '⏳'}
          </button>
        </div>
      ))}
    </div>
  );
}`}
    />
  );
}
