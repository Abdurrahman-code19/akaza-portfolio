function Frame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative h-full w-full overflow-hidden bg-gradient-to-br from-midnight via-deep-space to-void p-3 sm:p-5">
      <div className="absolute inset-0 bg-grid opacity-30" aria-hidden="true" />
      <div className="glow-blue absolute -right-16 -top-16 h-56 w-56 rounded-full blur-2xl" aria-hidden="true" />
      <div className="relative h-full overflow-hidden rounded-xl border border-[color:var(--hairline)] bg-void/70">
        {children}
      </div>
    </div>
  );
}

function AJO() {
  return (
    <Frame>
      <div className="grid h-full grid-cols-[38px_1fr] sm:grid-cols-[54px_1fr]">
        <div className="flex flex-col items-center gap-4 border-r border-[color:var(--hairline)] bg-midnight/50 py-4">
          <span className="flex h-6 w-6 items-center justify-center rounded bg-gradient-to-br from-signature-blue to-electric-blue font-mono text-[8px] font-bold text-white sm:h-7 sm:w-7">
            A
          </span>
          <span className="h-4 w-4 rounded bg-electric-blue/20 ring-1 ring-electric-blue/40" />
          <span className="h-4 w-4 rounded bg-platinum/5" />
          <span className="h-4 w-4 rounded bg-platinum/5" />
        </div>
        <div className="min-w-0 p-3 sm:p-5">
          <div className="mb-3 flex items-center justify-between">
            <div>
              <p className="font-mono text-[6px] tracking-[0.18em] text-silver/50 sm:text-[7px]">
                AJO.NG
              </p>
              <p className="text-[11px] font-semibold text-platinum sm:text-sm">
                Contribution Pool
              </p>
            </div>
            <span className="rounded-full border border-cyber-cyan/25 bg-cyber-cyan/10 px-2 py-0.5 font-mono text-[6px] text-cyber-cyan sm:text-[7px]">
              ACTIVE
            </span>
          </div>

          <div className="grid gap-2 sm:grid-cols-[1.4fr_1fr]">
            <div className="rounded-lg border border-electric-blue/20 bg-signature-blue/10 p-2.5 sm:p-3">
              <p className="font-mono text-[6px] tracking-[0.14em] text-silver/60 sm:text-[7px]">
                TOTAL POOL
              </p>
              <p className="mt-0.5 text-base font-bold tracking-tight text-platinum sm:text-xl">
                ₦240,000
              </p>
              <div className="mt-2 h-1 overflow-hidden rounded-full bg-void/60">
                <div className="h-full w-[66%] rounded-full bg-gradient-to-r from-signature-blue to-electric-blue" />
              </div>
              <div className="mt-1.5 flex justify-between font-mono text-[5px] text-silver/50 sm:text-[6px]">
                <span>8 MEMBERS</span>
                <span>66% FUNDED</span>
              </div>
            </div>
            <div className="rounded-lg border border-[color:var(--hairline)] bg-midnight/40 p-2.5 sm:p-3">
              <p className="font-mono text-[6px] tracking-[0.14em] text-silver/50 sm:text-[7px]">
                NEXT PAYOUT
              </p>
              <div className="mt-1.5 flex items-center gap-1.5">
                <span className="h-4 w-4 rounded-full bg-gradient-to-br from-electric-blue/60 to-cyber-cyan/40 sm:h-5 sm:w-5" />
                <div>
                  <p className="text-[9px] font-medium text-platinum sm:text-[11px]">Amaka O.</p>
                  <p className="font-mono text-[5px] text-silver/50 sm:text-[6px]">MAR 30</p>
                </div>
              </div>
              <p className="mt-1.5 font-mono text-[8px] font-semibold text-cyber-cyan sm:text-[10px]">
                ₦90,000
              </p>
            </div>
          </div>

          <div className="mt-2.5 rounded-lg border border-[color:var(--hairline)] bg-midnight/30 p-2.5 sm:p-3">
            <div className="mb-1.5 flex items-center justify-between">
              <p className="font-mono text-[6px] tracking-[0.14em] text-silver/50 sm:text-[7px]">
                SCHEDULE
              </p>
              <p className="font-mono text-[5px] text-silver/40 sm:text-[6px]">MARCH</p>
            </div>
            <ul className="space-y-1">
              {[
                ["Amaka O.", "Paid", true],
                ["Tunde A.", "Paid", true],
                ["Zainab B.", "Due Mar 28", false],
                ["Musa K.", "Upcoming", false],
              ].map(([name, state, done]) => (
                <li
                  key={name as string}
                  className="flex items-center gap-2 rounded border border-transparent px-1 py-1 odd:bg-void/30"
                >
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${
                      done ? "bg-cyber-cyan" : "bg-platinum/20"
                    }`}
                  />
                  <span className="text-[7px] text-silver/80 sm:text-[8px]">{name}</span>
                  <span
                    className={`ml-auto font-mono text-[5px] sm:text-[6px] ${
                      done ? "text-cyber-cyan/80" : "text-silver/40"
                    }`}
                  >
                    {state}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Frame>
  );
}

function Agritech() {
  return (
    <Frame>
      <div className="flex h-full flex-col">
        <div className="flex items-center justify-between border-b border-[color:var(--hairline)] bg-midnight/50 px-3 py-2 sm:px-4">
          <div className="flex items-center gap-2">
            <span className="h-4 w-4 rounded bg-cyber-cyan/20 ring-1 ring-cyber-cyan/30 sm:h-5 sm:w-5" />
            <p className="text-[9px] font-semibold text-platinum sm:text-[11px]">
              Smart Farming
            </p>
          </div>
          <div className="flex gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-platinum/20" />
            <span className="h-1.5 w-1.5 rounded-full bg-platinum/20" />
            <span className="h-1.5 w-1.5 rounded-full bg-cyber-cyan/60" />
          </div>
        </div>
        <div className="grid flex-1 gap-2 p-3 sm:grid-cols-3 sm:p-4">
          {[
            ["Soil Moisture", "42%", "+3%"],
            ["Temperature", "27°C", "-1°"],
            ["Humidity", "68%", "+2%"],
          ].map(([label, value, delta]) => (
            <div
              key={label}
              className="rounded-lg border border-[color:var(--hairline)] bg-midnight/40 p-2 sm:p-2.5"
            >
              <p className="font-mono text-[5px] tracking-[0.12em] text-silver/50 sm:text-[6px]">
                {label.toUpperCase()}
              </p>
              <div className="mt-0.5 flex items-baseline gap-1.5">
                <p className="text-sm font-semibold text-platinum sm:text-lg">{value}</p>
                <span className="font-mono text-[5px] text-cyber-cyan/80 sm:text-[6px]">
                  {delta}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="grid flex-1 gap-2 px-3 pb-3 sm:grid-cols-[1.5fr_1fr] sm:px-4 sm:pb-4">
          <div className="rounded-lg border border-[color:var(--hairline)] bg-midnight/40 p-2.5 sm:p-3">
            <div className="mb-2 flex items-center justify-between">
              <p className="font-mono text-[6px] tracking-[0.12em] text-silver/50 sm:text-[7px]">
                FIELD YIELD
              </p>
              <p className="font-mono text-[5px] text-silver/40 sm:text-[6px]">6 MONTHS</p>
            </div>
            <div className="flex h-14 items-end gap-1 sm:h-20">
              {[30, 48, 38, 62, 54, 78, 68, 88, 72, 94, 82, 100].map((h, i) => (
                <span
                  key={i}
                  className="flex-1 rounded-sm bg-gradient-to-t from-cyber-cyan/15 to-cyber-cyan/60"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>
          <div className="rounded-lg border border-[color:var(--hairline)] bg-midnight/40 p-2.5 sm:p-3">
            <p className="mb-1.5 font-mono text-[6px] tracking-[0.12em] text-silver/50 sm:text-[7px]">
              FIELD MAP
            </p>
            <div className="grid grid-cols-4 gap-1">
              {Array.from({ length: 16 }).map((_, i) => (
                <span
                  key={i}
                  className="aspect-square rounded-sm"
                  style={{
                    backgroundColor:
                      i % 5 === 0
                        ? "rgba(34,211,238,0.45)"
                        : i % 3 === 0
                          ? "rgba(48,130,197,0.4)"
                          : "rgba(226,232,240,0.06)",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Frame>
  );
}

function ZeroLimit() {
  return (
    <Frame>
      <div className="flex h-full flex-col">
        <div className="flex items-center justify-between border-b border-[color:var(--hairline)] px-3 py-2 sm:px-5 sm:py-3">
          <p className="text-[8px] font-semibold tracking-[0.25em] text-platinum sm:text-[10px]">
            ZERO LIMIT
          </p>
          <div className="flex gap-2 font-mono text-[5px] tracking-[0.14em] text-silver/60 sm:text-[6px]">
            <span>SHOP</span>
            <span>COLLECTION</span>
            <span className="text-champagne">CART (2)</span>
          </div>
        </div>
        <div className="relative flex-1 overflow-hidden px-4 py-4 sm:px-6 sm:py-6">
          <div className="glow-gold absolute right-0 top-0 h-40 w-40 rounded-full blur-2xl" aria-hidden="true" />
          <p className="relative font-mono text-[5px] tracking-[0.3em] text-champagne/80 sm:text-[7px]">
            NEW COLLECTION — 2026
          </p>
          <p className="relative mt-1 font-sans text-[clamp(1.4rem,4vw,2.6rem)] font-semibold leading-none tracking-[-0.03em] text-platinum">
            Beyond
            <br />
            the limit.
          </p>
          <div className="relative mt-4 grid grid-cols-3 gap-2">
            {[
              "from-[#1b365d] to-[#0a192f]",
              "from-[#2a2a2a] to-[#111]",
              "from-[#3a3226] to-[#161310]",
            ].map((gradient, i) => (
              <div key={i} className="group/item">
                <div
                  className={`relative aspect-[3/4] overflow-hidden rounded-md border border-[color:var(--hairline)] bg-gradient-to-br ${gradient}`}
                >
                  <span className="absolute left-1/2 top-1/2 h-10 w-14 -translate-x-1/2 -translate-y-1/2 rounded-sm bg-platinum/5 ring-1 ring-platinum/10 sm:h-14 sm:w-20" />
                  <span className="absolute bottom-1 left-1 font-mono text-[4px] tracking-wide text-platinum/40 sm:text-[5px]">
                    0{i + 1}
                  </span>
                </div>
                <p className="mt-1 font-mono text-[4px] tracking-wide text-silver/60 sm:text-[5px]">
                  {["TEE", "HOODIE", "CAP"][i]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Frame>
  );
}

function Portfolio() {
  return (
    <Frame>
      <div className="flex h-full flex-col">
        <div className="flex items-center gap-1.5 border-b border-[color:var(--hairline)] bg-midnight/60 px-3 py-2">
          <span className="h-1.5 w-1.5 rounded-full bg-platinum/20" />
          <span className="h-1.5 w-1.5 rounded-full bg-platinum/20" />
          <span className="h-1.5 w-1.5 rounded-full bg-electric-blue/60" />
          <span className="ml-2 flex-1 rounded border border-[color:var(--hairline)] bg-void/40 px-2 py-0.5 font-mono text-[5px] text-silver/50">
            akaza-portfolio.app
          </span>
        </div>
        <div className="relative flex flex-1 flex-col justify-center px-4 py-5 sm:px-7">
          <div className="glow-blue absolute -right-6 top-0 h-40 w-40 rounded-full blur-2xl" aria-hidden="true" />
          <p className="relative font-mono text-[5px] tracking-[0.22em] text-cyber-cyan/80 sm:text-[7px]">
            FRONTEND DEVELOPER
          </p>
          <p className="relative mt-1 font-sans text-[clamp(1.6rem,4.5vw,3rem)] font-semibold leading-[0.95] tracking-[-0.04em] text-platinum">
            BUILDING
            <br />
            <span className="text-gradient">EXPERIENCES.</span>
          </p>
          <div className="relative mt-3 flex gap-1.5">
            <span className="rounded-sm bg-gradient-to-r from-signature-blue to-electric-blue px-2 py-1 font-mono text-[4px] text-white sm:text-[5px]">
              EXPLORE
            </span>
            <span className="rounded-sm border border-[color:var(--hairline-strong)] px-2 py-1 font-mono text-[4px] text-silver sm:text-[5px]">
              CONTACT
            </span>
          </div>
          <div className="relative mt-4 flex gap-1.5">
            {[1, 2, 3, 4].map((n) => (
              <span
                key={n}
                className="h-1 flex-1 rounded-full bg-gradient-to-r from-electric-blue/50 to-transparent"
              />
            ))}
          </div>
        </div>
      </div>
    </Frame>
  );
}

export function ProjectVisual({ variant }: { variant: "ajo" | "agritech" | "zerolimit" | "portfolio" }) {
  return (
    <div aria-hidden="true" className="h-full w-full">
      {variant === "ajo" && <AJO />}
      {variant === "agritech" && <Agritech />}
      {variant === "zerolimit" && <ZeroLimit />}
      {variant === "portfolio" && <Portfolio />}
    </div>
  );
}
