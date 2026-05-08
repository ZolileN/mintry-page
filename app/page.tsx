'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import WaitlistForm from '@/components/WaitlistForm';
import { Terminal, Shield, Zap, Database, Cpu, Globe, ArrowRight } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function LandingPage() {
  const [terminalLines, setTerminalLines] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTerminalLines(prev => (prev < 8 ? prev + 1 : prev));
    }, 200);
    return () => clearInterval(timer);
  }, []);

  return (
    <main>
      <div className="grid-bg" />
      
      {/* Navigation */}
      <nav>
        <a href="#" className="nav-logo">
          MINTRY<span>.FABRIC</span>
        </a>
        <div className="nav-pill">
          v1.0.4 Early Access
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero">
        <div className="hero-radial" />
        <div className="hero-radial-mint" />
        
        <motion.div 
          className="hero-badge"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="hero-badge-dot" />
          The First Rule of Agentic Finance
        </motion.div>

        <motion.h1 
          {...fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.1 }}
        >
          Close the <span className="mint">Attribution</span> <br />
          <span className="blue">Void.</span>
        </motion.h1>

        <motion.p 
          className="hero-sub"
          {...fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.2 }}
        >
          Stop flying blind. <strong>Mintry Fabric</strong> is <strong>the transport-layer interceptor</strong> that gives you real-time metering and budget enforcement for every AI agent you run.
        </motion.p>

        <motion.div 
          className="w-full max-w-[480px] mx-auto"
          {...fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.3 }}
        >
          <WaitlistForm 
            inputId="hero-email" 
            microText="Three lines of code to prevent a five-figure mistake."
          />
        </motion.div>

        {/* Terminal Visual */}
        <motion.div 
          className="terminal-wrap"
          {...fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.5 }}
        >
          <div className="terminal">
            <div className="terminal-header">
              <div className="term-dot red" />
              <div className="term-dot yellow" />
              <div className="term-dot green" />
              <div className="terminal-title">mintry — ledger_monitor</div>
            </div>
            <div className="terminal-body">
              <div className="term-line" style={{ opacity: terminalLines >= 1 ? 1 : 0 }}>
                <span className="term-prompt">$</span> <span className="term-cmd">mintry listen --agent-id research-bot-04</span>
              </div>
              <div className="term-line" style={{ opacity: terminalLines >= 2 ? 1 : 0 }}>
                <span className="term-out">[FABRIC] Attaching interceptor to transport layer...</span>
              </div>
              <div className="term-line" style={{ opacity: terminalLines >= 3 ? 1 : 0 }}>
                <span className="term-out">[FABRIC] Active Mandate: </span>
                <span className="term-var">$50.00 Hard Cap / Session</span>
              </div>
              <div className="term-line" style={{ opacity: terminalLines >= 4 ? 1 : 0 }}>
                <span className="term-dim">09:42:12 | Consumption: $12.40 | Status: OK</span>
              </div>
              <div className="term-line" style={{ opacity: terminalLines >= 5 ? 1 : 0 }}>
                <span className="term-dim">09:42:45 | Consumption: $48.92 | Status: WARNING</span>
              </div>
              <div className="term-line" style={{ opacity: terminalLines >= 6 ? 1 : 0 }}>
                <span className="term-kill">09:42:48 | MANDATE VIOLATION: $50.01 EXCEEDED</span>
              </div>
              <div className="term-line" style={{ opacity: terminalLines >= 7 ? 1 : 0 }}>
                <span className="term-kill">09:42:48 | KILL-SWITCH ENGAGED. Transport Layer Cut.</span>
              </div>
              <div className="term-line" style={{ opacity: terminalLines >= 8 ? 1 : 0 }}>
                <span className="term-success">[FABRIC] Ledger synchronized. Loss prevented: $1,420.00 est.</span>
                <span className="term-cursor" />
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Problem Section */}
      <section id="problem">
        <div className="container">
          <div className="problem-inner">
            <div>
              <div className="section-label">// 01 — The Problem</div>
              <h2>Agent-<span className="mint">Blindness</span></h2>
              <p className="problem-hook">
                "You know what you spent on OpenAI this month. But do you know which specific background task
                <span className="hl"> burned $200 while you were asleep? </span> "
              </p>
              <p className="problem-desc">
                Modern AI stacks run dozens of background agents — summarizers, classifiers, embedders, evaluators. Standard cloud billing collapses all of this into a single API invoice. By the time you see the Mystery Spike, it already happened. The damage is done.
              </p>
              <div className="problem-divider" />
              <p className="problem-desc">
                Mintry Fabric flips the model from reactive alarm to proactive enforcement. Before the first token is sent, the Fabric already knows the budget.
              </p>
            </div>
            <div className="compare-table-wrap">
              <table className="compare-table">
                <thead>
                  <tr>
                    <th>Feature</th>
                    <th>Standard Billing</th>
                    <th>Mintry Fabric</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Visibility</td>
                    <td>Monthly Invoice</td>
                    <td>Real-time SQLite Ledger</td>
                  </tr>
                  <tr>
                    <td>Enforcement</td>
                    <td>Email Alerts (Too late)</td>
                    <td>Transport-Layer Kill-Switch</td>
                  </tr>
                  <tr>
                    <td>Attribution</td>
                    <td>"API-Global"</td>
                    <td>Per-Agent / Per-Task</td>
                  </tr>
                  <tr>
                    <td>Cost Control</td>
                    <td>Post-hoc analysis</td>
                    <td>Proactive Mandate Caps</td>
                  </tr>
                  <tr>
                    <td>Deployment</td>
                    <td>Native billing portal</td>
                    <td>Zero code changes needed</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution">
        <div className="container">
          <div className="solution-header">
            <div className="section-label mint">// 02 — The Logic Fabric</div>
            <h2>The Logic Fabric</h2>
            <p>The Fabric is not a wrapper. It is not middleware you configure. It is a network-layer presence that watches everything — silently, instantly, without asking your agents to change their behaviour.</p>
          </div>

          <motion.div 
            className="bento-grid"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div className="bento-card" variants={fadeInUp}>
              <div className="bento-num">01</div>
              <div className="bento-icon mint"><Shield size={20} className="text-mint" /></div>
              <h3>Transport-Layer Interception</h3>
              <p>No code changes required. Mintry sits at the network layer to watch every packet, every token, and every cent in real-time.</p>
              <div className="bento-tag mint">Zero-Latency</div>
            </motion.div>

            <motion.div className="bento-card" variants={fadeInUp}>
              <div className="bento-num">02</div>
              <div className="bento-icon blue"><Database size={20} className="text-blue" /></div>
              <h3>High-Performance Ledger</h3>
              <p>Powered by SQLite with WAL mode. Every token, every cost event is logged with zero-latency. No-GIL ready, built for the 2026 Python stack.</p>
              <div className="bento-tag mint" style={{ marginTop: '1.25rem' }}>WAL Mode · No-GIL Ready</div>
            </motion.div>

            <motion.div className="bento-card tall" variants={fadeInUp}>
              <div className="bento-num">03</div>
              <div className="bento-icon mixed"><Zap size={20} className="text-blue" /></div>
              <h3>Universal Mandates</h3>
              <p>Assign a precise Hard Cap to every task, agent, or agent-group. When the counter hits the ceiling, the Fabric cuts the connection — not a warning email, not a Slack alert: <strong style={{color: 'var(--text)'}}>a real kill-switch</strong>.</p>
              <div className="ledger-rows">
                <div className="ledger-row">
                  <span className="agent">research_bot</span>
                  <span className="cost">$12.40</span>
                  <span className="status ok">ACTIVE</span>
                </div>
                <div className="ledger-row over">
                  <span className="agent">writer_v2</span>
                  <span className="cost class=kill-anim">$50.01</span>
                  <span className="status killed">KILLED</span>
                </div>
                <div className="ledger-row">
                  <span className="agent">classifier</span>
                  <span className="cost">$0.22</span>
                  <span className="status ok">ACTIVE</span>
                </div>
                <div className="ledger-row">
                  <span className="agent">embedder</span>
                  <span className="cost">$0.48</span>
                  <span className="status ok">ACTIVE</span>
                </div>
                <div className="ledger-row over">
                  <span className="agent">summarizer</span>
                  <span className="cost class=kill-anim">$0.80</span>
                  <span className="status killed">KILLED</span>
                </div>
              </div>
              <div className="bento-tag blue" style={{ marginTop: '1.25rem' }}>Per-agent hard caps</div>
            </motion.div>

            <motion.div className="bento-card wide" variants={fadeInUp} style={{ display: 'flex', alignItems: 'center', gap: '3rem', padding: '2rem 2.5rem' }}>
              <div style={{ flex: 1 }}>
                <div className="bento-num" style={{ width: 'fit-content' }}>04</div>
                <h3 style={{ marginTop: '0.5rem' }}>Real-Time Attribution</h3>
                <p>Every cost event is stamped with the task ID, agent ID, model, and timestamp. Your finance team gets a ledger. Your engineers get a debugger. Everyone wins.</p>
              </div>
              <div style={{ flex: 1, background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border)', borderRadius: '12px', padding: '1.25rem', fontFamily: 'var(--font-mono)', fontSize: '11px', lineHeight: '2' }}>
                <div style={{ color: 'var(--text-tertiary)' }}>// fabric.ledger snapshot</div>
                <div><span style={{ color: '#c084fc' }}>SELECT</span> <span style={{ color: 'var(--text)' }}>agent_id, task_id, cost, ts</span></div>
                <div><span style={{ color: '#c084fc' }}>FROM</span> <span style={{ color: 'var(--mint)' }}>mintry_events</span></div>
                <div><span style={{ color: '#c084fc' }}>WHERE</span> <span style={{ color: 'var(--text)' }}>ts &gt; NOW() - <span style={{ color: 'var(--blue)' }}>INTERVAL</span> '30 min'</span></div>
                <div><span style={{ color: '#c084fc' }}>ORDER BY</span> <span style={{ color: 'var(--text)' }}>cost <span style={{ color: 'var(--blue)' }}>DESC</span></span></div>
                <div style={{ color: 'var(--text-tertiary)', marginTop: '4px' }}>→ 47 rows · 0.3ms</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Code Section */}
      <section id="proof">
        <div className="container">
          <div className="proof-inner">
            <motion.div {...fadeInUp}>
              <div className="section-label">// 03 — Code-First Proof</div>
              <h2 className="proof-caption">Three lines.<br /><span className="accent">Five-figure</span><br />protection.</h2>
              <p className="proof-sub">
                A single <code style={{ fontFamily: 'var(--font-mono)', color: 'var(--mint)', fontSize: '0.9em', background: 'var(--mint-dim)', padding: '2px 8px', borderRadius: '5px' }}>mintry.init()</code> call attaches the Fabric to your transport layer. Then define your mandate. That's it. Every agent in scope is now fiscally responsible.
              </p>
              <p className="proof-sub" style={{ marginTop: '1rem' }}>
                When a mandate is breached, you get a clean <code style={{ fontFamily: 'var(--font-mono)', color: '#FF5F56', fontSize: '0.9em', background: 'rgba(255,95,86,0.1)', padding: '2px 8px', borderRadius: '5px' }}>PermissionError</code> you can handle — not a surprise invoice you can't.
              </p>
            </motion.div>
            <div className="code-block">
              <div className="code-header">
                <div className="term-dot red" />
                <div className="term-dot yellow" />
                <div className="term-dot green" />
                <div className="code-lang">python</div>
              </div>
              <div className="code-body">
                <span className="c-comment"># 1. Attach the Fabric to your transport layer</span><br />
                <span className="c-kw">import</span> <span className="c-cls">mintry</span><br />
                <br />
                <span className="c-fn">mintry</span>.<span className="c-mint">init</span>()<br />
                <br />
                <span className="c-comment"># 2. Define a hard-cap mandate for any task</span><br />
                <span className="c-kw">with</span> <span className="c-cls">mintry</span>.<span className="c-fn">mandate</span>(<span className="c-str">"task:nightly_summarizer"</span>, cap=<span className="c-num">50.00</span>):<br />
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="c-comment"># 3. Your existing code — unchanged</span><br />
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="c-kw">try</span>:<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;result = <span className="c-fn">run_summarizer</span>(documents)<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="c-fn">print</span>(<span className="c-str">f"Done: </span><span className="c-var">{`{result}`}</span><span className="c-str">"</span>)<br />
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="c-kw">except</span> <span className="c-err">mintry.MintryMandateExceeded</span> <span className="c-kw">as</span> e:<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="c-comment"># Fabric killed the task. Budget protected.</span><br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="c-fn">print</span>(<span className="c-str">f"Budget enforced: </span><span className="c-var">{`{e.spent}`}</span><span className="c-str"> / $50.00"</span>)<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp<span className="c-fn">alert_on_call</span>(e)<br />
                <br />
                <span className="c-comment"># That's it. Three lines. All agents, all models.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Languages Section */}
      <section id="languages">
        <div className="container">
          <motion.div 
            className="reveal"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="section-label" style={{ justifyContent: 'center', display: 'flex' }}>// 04 — Language-Agnostic</div>
            <h2 className="lang-headline">
              One Fabric.<span className="slash">/</span>Any Language.
            </h2>
            <p className="lang-sub">
              Whether you build in Python, Node.js, Java, or Go — Mintry's sidecar proxy
              architecture ensures your entire agentic fleet is fiscally responsible.
              One deployment. Total coverage.
            </p>
          </motion.div>

          <motion.div 
            className="lang-grid reveal reveal-delay-1"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={{
              initial: { opacity: 0, y: 20 },
              animate: { 
                opacity: 1, 
                y: 0,
                transition: { 
                  duration: 0.8, 
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.1 
                }
              }
            }}
          >
            <div className="lang-pill">
              <div className="lang-dot" style={{ background: '#3776AB' }}></div>
              Python
            </div>
            <div className="lang-pill">
              <div className="lang-dot" style={{ background: '#68A063' }}></div>
              Node.js
            </div>
            <div className="lang-pill">
              <div className="lang-dot" style={{ background: '#E76F00' }}></div>
              Java
            </div>
            <div className="lang-pill">
              <div className="lang-dot" style={{ background: '#00ADD8' }}></div>
              Go
            </div>
            <div className="lang-pill">
              <div className="lang-dot" style={{ background: '#A97BFF' }}></div>
              Kotlin
            </div>
            <div className="lang-pill">
              <div className="lang-dot" style={{ background: '#F05138' }}></div>
              Swift
            </div>
          </motion.div>

          <motion.div 
            className="reveal reveal-delay-2"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={{
              initial: { opacity: 0, y: 20 },
              animate: { 
                opacity: 1, 
                y: 0,
                transition: { 
                  duration: 0.8, 
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.2 
                }
              }
            }}
          >
            <div className="arch-note" style={{ margin: '0 auto', width: 'fit-content' }}>
              🔌 <span>Sidecar Proxy Architecture</span> — No SDK lock-in, no vendor coupling. Deploy alongside any runtime.
            </div>
          </motion.div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section id="waitlist">
        <div className="container">
          <motion.div 
            className="reveal"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <p className="waitlist-eyebrow">// Waitlist Open Now</p>
            <h2 className="waitlist-headline">Join the<br /><span style={{ color: 'var(--mint)' }}>First Wave.</span></h2>
            <p className="waitlist-sub">
              Early Access subscribers get priority onboarding, direct access to the founding team,
              and a complimentary CTO playbook on stopping agent budget runaway.
            </p>

            <div className="waitlist-form">
              <WaitlistForm 
                inputId="footer-email" 
                placeholder="engineering@yourco.dev"
                microText="Join 240+ engineers already on the list"
              />
            </div>

            <div className="stats-bar">
              <div className="stat">
                <div className="stat-num">$0</div>
                <div className="stat-label">Cost to join</div>
              </div>
              <div className="stat">
                <div className="stat-num">&lt;3ms</div>
                <div className="stat-label">Ledger latency</div>
              </div>
              <div className="stat">
                <div className="stat-num">100%</div>
                <div className="stat-label">Attribution coverage</div>
              </div>
              <div className="stat">
                <div className="stat-num">6+</div>
                <div className="stat-label">Languages supported</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-v2">
        <div className="container">
          <div className="footer-inner">
            <span className="logo">mintry.fabric</span>
            <span className="sep">·</span>
            <span className="desc">Built for the {new Date().getFullYear()} Agentic Stack</span>
            <span className="sep">·</span>
            <span className="copy">© {new Date().getFullYear()} Mintry Inc.</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
