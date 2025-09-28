const TerminalDisplay = () => {
  return (
    <div className="relative w-full max-w-xl mx-auto rounded-xl border border-border bg-card/70 shadow-2xl overflow-hidden animate-fade-in">
      <div className="flex items-center gap-2 p-3 border-b border-border bg-primary">
        <span className="h-3 w-3 rounded-full bg-red-500" />
        <span className="h-3 w-3 rounded-full bg-yellow-500" />
        <span className="h-3 w-3 rounded-full bg-green-500" />
        <span className="ml-2 text-sm font-mono text-foreground">fj-terminal</span>
      </div>
      <div className="p-6 font-mono text-sm text-muted-foreground bg-secondary">
        <p className="text-primary">// Current Focus</p>
        <p className="mt-2 flex items-center gap-2 text-[rgba(255,255,255,1)]">
          <span className="text-primary">{">"}</span> Exploring ways to connect AI with real-world apps
        </p>
        <p className="flex items-center gap-2 text-[rgba(255,255,255,1)]">
          <span className="text-primary">{">"}</span> Developing a finance / money manager web project
        </p>
        <p className="flex items-center gap-2 text-[rgba(255,255,255,1)]">
          <span className="text-primary">{">"}</span> Diving deeper into AI & machine learning 
        </p>
        <p className="flex items-center gap-2">
          <span className="text-primary">{">"}</span> Learning React.js
        </p>

        <p className="mt-6 text-primary">// Skills in Development</p>
        <p className="mt-2 flex items-center gap-2 text-[rgba(255,255,255,1)]">
          <span className="text-primary">{">"}</span> Deep Learning (PyTorch, TensorFlow)
        </p>
        <p className="flex items-center gap-2 text-[rgba(255,255,255,1)]">
          <span className="text-primary">{">"}</span> Data Structures & Algorithms
        </p>
        <p className="flex items-center gap-2 text-[rgba(255,255,255,1)]">
          <span className="text-primary">{">"}</span> Full-Stack Development
        </p>
        <p className="flex items-center gap-2 text-[rgba(255,255,255,1)]">
          <span className="text-primary">{">"}</span> Research & Academic Writing
        </p>
        <p className="mt-4 flex items-center gap-2">
          <span className="text-primary">{">"}</span> <span className="animate-blink">_</span>
        </p>
      </div>
    </div>
  )
}

export default TerminalDisplay
