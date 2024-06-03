import React, { useState, useRef, useEffect } from "react";

interface Command {
  command: string;
  output: string;
}

const Terminal: React.FC = () => {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<Command[]>([]);
  const terminalRef = useRef<HTMLDivElement>(null);

  const handleCommand = (command: string) => {
    let output = "";
    switch (command) {
      case "help":
        output = `Available commands:
         help: Show available commands,
        - Hi : Greeting command
        - clear: Clear the terminal 
        - about: Show information about this terminal
        - linkedin: Open LinkedIn profile in a new tab
        - github: Open GitHub profile in a new tab
        - x: Open X (Twitter) profile in a new tab`;
        ;
        break;
      case "hi":
        output="Hi, Welcome to my website";
        break;
      case "clear":
        setHistory([]);
        return;
      case "about":
        output =
          "This is a cool terminal component built with React and Tailwind CSS.";
        break;
      case "email":
        output =
          "Here's my email samdhawan8765@gmail.com";
        break;
      case 'linkedin':
        output = 'Opening LinkedIn...';  
        window.open('https://www.linkedin.com/in/samarthdhawan2911/', '_blank');
        break;
      case 'github':
        output = 'Opening Github...';  
        window.open('https://github.com/samarth8765', '_blank');
        break;
      case 'x':
        output = 'Opening LinkedIn...';  
        window.open('https://x.com/vizz_codes', '_blank');
        break;
      default:
        output = `Command not found: ${command}`;
    }
    setHistory([{ command, output }, ...history])
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      handleCommand(input.trim());
      setInput("");
    }
  };

  return (
    <div>
    <h2 className="text-white mb-4 text-4xl sm:text-5xl md:text-7xl font-bold text-center ">Terminal</h2>
    <div
      className="bg-transparent text-white p-4 rounded-lg border border-gray-600 bg-gray-900 mx-auto"
      style={{ maxWidth: "60%" }}>
        <div className="mb-2 text-left font-thin">
          Welcome to my website! Get started by typing <code>help</code> command below
        </div>
      <form onSubmit={handleSubmit} className="flex mb-2">
        <span className="text-green-400">$ Samarth >> </span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="bg-transparent flex-1 outline-none ml-2"
          autoFocus
        />
      </form>
      <div ref={terminalRef} className="h-64 overflow-y-auto p-2">
        {history.map((entry, index) => (
          <div key={index} className="mb-2 border">
            <div className="text-green-400"> {entry.command}</div>
            <pre className="text-wrap">{entry.output}</pre>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Terminal;
